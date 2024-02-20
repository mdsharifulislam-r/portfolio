import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dotenv from "dotenv";
import { io } from "socket.io-client";
import PORT from "../../variable/variable";
import GetL from "../LocalState/GetL";
import SetL from "../LocalState/SetL";
import axios from "axios";
const port = PORT();
const users = GetL("users") ? GetL("users") : [];
const onlineUsers = GetL("onlineUsers") ? GetL("onlineUsers") : [];
const user = GetL("user") ? GetL("user") : {};
const AllMassages = GetL("allmassages") ? GetL("allmassages") : [];
export const GetUser = createAsyncThunk("get-user", async () => {
  const res = await fetch(`${port}/api/user/find`);
  return res.json();
});

export const GetMassage = createAsyncThunk("massage", async () => {
  const res = await fetch(`${port}/api/massage/find`);
  return res.json();
});
const intialState = {
  socket: io(port, {
    query: {
      userId: 123454,
    },
    reconnection: true,
  }),
  massages: [],
  users: users,
  user: user,
  activeUser: onlineUsers,
  recever: {},
    AllMassages: AllMassages,
  isAddFreind: false,
  img: '',
  lastMassage: {},
  voiceCall: {
    status: false,
    callerInfo: undefined,
    link:undefined
  }
};
const Runu = createSlice({
  initialState: intialState,
  name: "runu",
  extraReducers: (builder) => {
    builder.addCase(GetUser.fulfilled, (state, action) => {
      state.users = action.payload;
      SetL("users", action.payload);
    });
    builder.addCase(GetMassage.fulfilled, (state, action) => {
      state.AllMassages = action.payload;
    });
  },
  reducers: {
    addMassage: (state, action) => {
      const found = state.massages.some(data=>data.massage?.id===action.payload.massage.id)
      
      if (!found) {
        if (action.payload.senderId === state.user._id || action.payload.senderId === state.recever._id) {
          state.massages = [...state.massages, action.payload];
          state.lastMassage = action.payload
        }
        if (state.recever._id) {
          const temp = state.AllMassages?.filter((data) => {
            const first = data?.member?.some((id) => id === state.user._id);
            const second = data?.member?.some((id) => id === state.recever._id);
            if (first && second) {
              return data;
            }
          })[0];
        
          if (temp) {
            axios.put(`${port}/api/massage/update/${temp._id}`, {
              ...temp,
              massages: state.massages,
            });
            const index = state.AllMassages?.findIndex(
              (data) =>
                data?.member?.some((dat) => dat === state.user._id) &&
                data?.member?.some((dat) => dat === state.recever._id)
            );

            state.AllMassages[index] = {
              ...state.AllMassages[index],
              massages: state.massages,
            };
          } else {
            const obj = {
              member: [action.payload.senderId,action.payload.receverId],
              massages: state.massages,
            };
            axios.post(`${port}/api/massage/create`, obj);
            state.AllMassages = [...state.AllMassages, obj];
          }
        }

        SetL("allmassages", state.AllMassages);
      }
    },
    SetImage: (state, action) =>
    {
      state.img=action.payload
      
      },
    SetMassages: (state, action) => {
      if (state.recever._id) {
        const found = state.AllMassages?.filter(
          (data) =>
            data?.member?.some((dat) => dat === state.user._id) &&
            data?.member?.some((dat) => dat === state.recever._id)
        )[0];
        if (found) {
          state.massages = found.massages;
        } else {
          const obj = {
            member: [state.user._id, state.recever._id],
            massages: [],
          };
          state.AllMassages = state.AllMassages
            ? [...state.AllMassages, obj]
            : [obj];
        }
      }
    },
    AddUser: (state, action) => {
      axios.post(`${port}/api/user/create`, action.payload);
      state.users = [...state.users, action.payload];

      SetL("user", state.user);
    },
    LoginUser: (state, action) => {
      state.socket.emit("getUsers", "");
      state.user = action.payload;
      SetL("user", action.payload);
    },
    SendUser: (state, action) => {
      state.socket.emit("send-user", state.user);
    },
    TakeActiveUser: (state, action) => {
      state.activeUser = action.payload;
      SetL("onlineUsers", state.activeUser);
    },
    TakeRecever: (state, action) => {
      state.recever = action.payload;
      if (action.payload._id) {
        const found = state.AllMassages?.filter(
          (data) =>
            data?.member?.some((dat) => dat === state.user._id) &&
            data?.member?.some((dat) => dat === action.payload._id)
        )[0];

        if (found) {
          state.massages = found.massages;
          state.lastMassage = state.massages[state.massages.length-1]
          }
          else
        {
            state.massages=[]
          }

          
      }
      SetL("recever",state.recever)
    },
    LogOut: (state, action) => {
      state.user = {};
      SetL("user", state.user);
      state.socket.disconnect();
      },
      UpdateUser: (state, action) =>
      {
          axios.put(`${port}/api/user/update/${state.user._id}`, action.payload)
          state.user = action.payload
          SetL("user",action.payload)
      },
      ChangeState: (state, action)=>
      {
          state.isAddFreind=action.payload
    },
    ChangeRecever: (state, action) =>
    {
      const found = state.activeUser.filter(data => data._id === state.recever._id && data?.room !== state.recever.room)[0]
      if (found)
      {
        state.recever = found
        SetL("recever", state.recever);
      }
      
    },
    EmptyMassage: (state, action) =>
    {
      state.massages = []
      
    },
    CencelCall: (state, action) => {
      const userInfo = state.voiceCall?.callerInfo;
      const user = state.activeUser.filter(data => data?._id === userInfo._id)[0]
      state.socket.emit("reject-call",user?.room,`${state.user?.name} is rejected your call`)
     
      state.voiceCall = {
        status: false,
        link:undefined
      }
      
    },

    ShowVoiceCall: (state, action) => {
      const userInfo = action.payload?.callerInfo
      if (state.voiceCall.link === undefined) {
        
        const caller = state.user?.contacts.some(data => data?._id === userInfo._id)
        console.log(caller);
        if (caller) {
          state.voiceCall = action.payload
          SetL("in", action.payload)
        
        }
      }
    }
    
      
  },
});

export const {
  addMassage,
  AddUser,
  LoginUser,
  SendUser,
  TakeActiveUser,
  TakeRecever,
  LogOut,
    SetMassages,
    UpdateUser,
  ChangeState,
  SetImage,
  ChangeRecever,
  EmptyMassage,
  CencelCall,
  ShowVoiceCall
} = Runu.actions;
export default Runu.reducer;

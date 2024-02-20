import React from 'react'

export default function Invitaion(userId,userName,instanse,type) {
  const targetUser = {
    userID: userId,
    userName:userName,
  };
  instanse.sendCallInvitation({
    callees: [targetUser],
    callType: type,
    timeout: 60, // Timeout duration (second). 60s by default, range from [1-600s].
  })
    .then((res) => {
      console.warn(res);
    })
    .catch((err) => {
      console.warn(err);
    });
}

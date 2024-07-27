import React from "react";
import SkillBox from "./SkillBox/SkillBox";
import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
export default function SkillContainer() {
  return (
    <div className="grid lg:grid-cols-2 gap-3 lg:p-24 px-5 py-10">
      <SkillBox
        name={"React Js"}
        icon={<FaReact />}
        desc={
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            repellendus ratione fugiat distinctio repellat beatae delectus
            aliquid vitae impedit nobis.
          </>
        }
        persent={90}
      />
      <SkillBox
        name={"Node Js"}
        icon={<FaNodeJs/>}
        desc={
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            repellendus ratione fugiat distinctio repellat beatae delectus
            aliquid vitae impedit nobis.
          </>
        }
        persent={80}
      />
      <SkillBox
        name={"Express Js"}
        icon={<SiExpress/>}
        desc={
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            repellendus ratione fugiat distinctio repellat beatae delectus
            aliquid vitae impedit nobis.
          </>
        }
        persent={80}
      />
      <SkillBox
        name={"MongoDB"}
        icon={<SiMongodb />}
        desc={
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            repellendus ratione fugiat distinctio repellat beatae delectus
            aliquid vitae impedit nobis.
          </>
        }
        persent={95}
      />
      <SkillBox
        name={"Figma"}
        icon={<FaFigma />}
        desc={
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            repellendus ratione fugiat distinctio repellat beatae delectus
            aliquid vitae impedit nobis.
          </>
        }
        persent={60}
      />
      <SkillBox
        name={"Redux"}
        icon={<SiRedux/>}
        desc={
          <>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            repellendus ratione fugiat distinctio repellat beatae delectus
            aliquid vitae impedit nobis.
          </>
        }
        persent={90}
      />
    </div>
  );
}

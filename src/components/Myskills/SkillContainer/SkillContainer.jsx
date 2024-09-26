import React from "react";
import SkillBox from "./SkillBox/SkillBox";
import { FaFigma, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
export default function SkillContainer() {
  return (
    <div className="grid lg:grid-cols-2 gap-3  py-10">
      <SkillBox
      index={1}

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
      index={3}
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
      index={4}
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
      index={5}
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
      index={6}
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
      index={7}
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

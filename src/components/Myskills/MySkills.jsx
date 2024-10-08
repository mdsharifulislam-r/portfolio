import Heading from "../Heading/Heading";
import SkillContainer from "./SkillContainer/SkillContainer";

export default function MySkills() {
  return <div className="bg-primary w-full">
    <div className="container ">
    <div className="flex justify-center">
      <Heading title={"My Skills"} sub1={"What I "} sub2={"do"} />
    </div>
    <div>
      <SkillContainer/>
   </div>
    </div>
   
  </div>;
}

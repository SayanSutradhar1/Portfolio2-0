import SkillsItmes from "../components/SkillsItmes";

const Skills = () => {
  return (
    <div id="mySkills" className=" flex items-center min-[675px]:px-20 mx-4 my-4 flex-col max-[675px]:px-10 rounded-md py-3 backdrop-blur-md shadow-xl">
      <p className="p-6">
        Technical Skills are very much significant for a person who works in any
        field , as an web developer I have grasped some skills to make me a good
        developer as well as a good learner
      </p>
      <SkillsItmes />
    </div>
  );
};

export default Skills;

import PhotoMe from '../assets/images/photoMe.jpg'

import { TypeAnimation } from "react-type-animation";
import AnimationText from '../components/AnimationText';

const Home = () => {
  return (
    <div className=" px-10 py-2 flex justify-between max-[675px]:flex-col-reverse my-2">
        <div className='flex flex-col flex-1 gap-4'>
            <AnimationText/>
            <h1 className='text-3xl'>Sayan Sutradhar</h1>
            <p className='text-xl'>I am a tech-savvy individual with a Bachelor's degree in Technology,
            as well as a web development enthusiast .I am pursuing my B.Tech
            degree from Coochbehar Government Engineering College and in
            Computer Science and Engineering .Keeping aside my academics , my
            hobbies are including listening and singing song , writing.</p>
        </div>
        <div className='flex-1 flex justify-center'>
            <img src={PhotoMe} alt="" className='max-h-[360px] rounded-lg border-slate-500 border-2 shadow-2xl'/>
        </div>
        
      {/* <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "We produce food for Mice",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "We produce food for Hamsters",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      /> */}
    </div>
  );
};

export default Home;

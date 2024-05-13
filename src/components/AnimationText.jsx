import { TypeAnimation } from "react-type-animation"

const AnimationText = () => {
  return (
    <div className="flex items-center text-sm my-3 ">
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I am a explorer",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "I am a Frontend Developer",
          1000,
          "I am a React Developer",
          1000,
          "I am a UI/UX Designer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1.5em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  )
}

export default AnimationText
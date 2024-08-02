import { motion } from "framer-motion";

const starVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }),
};

function Stars() {
  return (
    <svg
      width={300}
      height={203}
      viewBox="0 0 300 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="hero-circle"
        cx="256.5"
        cy="62.9871"
        r="2.8"
        fill="url(#paint0_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
      />
      <circle
        className="hero-circle"
        cx="238.9"
        cy="45.3871"
        r="1.2"
        fill="url(#paint1_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
      />
      <circle
        className="hero-circle"
        cx="186.9"
        cy="108.587"
        r="1.2"
        fill="url(#paint2_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
      />
      <circle
        className="hero-circle"
        cx="50.8998"
        cy="1.7875"
        r="1.2"
        fill="url(#paint3_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
      />
      <circle
        className="hero-circle"
        cx="30.9002"
        cy="110.187"
        r="2.8"
        fill="url(#paint4_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
      />
      <circle
        className="hero-circle"
        cx="147.7"
        cy="168.587"
        r="2.8"
        fill="url(#paint5_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
      />
      <motion.path
        className="hero-star"
        d="M290.5 64.9397L292.609 70.6411L292.673 70.8136L292.846 70.8774L298.547 72.9871L292.846 75.0968L292.673 75.1606L292.609 75.3331L290.5 81.0345L288.39 75.3331L288.326 75.1606L288.154 75.0968L282.452 72.9871L288.154 70.8774L288.326 70.8136L288.39 70.6411L290.5 64.9397Z"
        fill="url(#paint6_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
        custom={1}
        variants={starVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        className="hero-star"
        d="M9.7 60.9397L11.8097 66.6411L11.8735 66.8136L12.046 66.8774L17.7474 68.9871L12.046 71.0968L11.8735 71.1606L11.8097 71.3331L9.7 77.0345L7.59031 71.3331L7.52648 71.1606L7.35398 71.0968L1.65262 68.9871L7.35398 66.8774L7.52648 66.8136L7.59031 66.6411L9.7 60.9397Z"
        fill="url(#paint7_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
        custom={2}
        variants={starVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        className="hero-star"
        d="M91.3001 177.74L94.4902 186.361L94.554 186.533L94.7265 186.597L103.347 189.787L94.7265 192.977L94.554 193.041L94.4902 193.213L91.3001 201.834L88.11 193.213L88.0462 193.041L87.8737 192.977L79.2527 189.787L87.8737 186.597L88.0462 186.533L88.11 186.361L91.3001 177.74Z"
        fill="url(#paint8_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
        custom={3}
        variants={starVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        className="hero-star"
        d="M178.5 70.5393L179.962 74.4889L180.026 74.6614L180.198 74.7252L184.148 76.1867L180.198 77.6482L180.026 77.712L179.962 77.8845L178.5 81.8341L177.039 77.8845L176.975 77.712L176.802 77.6482L172.853 76.1867L176.802 74.7252L176.975 74.6614L177.039 74.4889L178.5 70.5393Z"
        fill="url(#paint9_linear_238_629)"
        stroke="white"
        strokeWidth="0.8"
        custom={4}
        variants={starVariants}
        initial="hidden"
        animate="visible"
      />
      <defs>
        <linearGradient
          id="paint0_linear_238_629"
          x1="256.5"
          y1="66.1871"
          x2="256.5"
          y2="59.7871"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_238_629"
          x1="238.9"
          y1="46.9871"
          x2="238.9"
          y2="43.7871"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_238_629"
          x1="186.9"
          y1="110.187"
          x2="186.9"
          y2="106.987"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_238_629"
          x1="50.8998"
          y1="3.3875"
          x2="50.8998"
          y2="0.1875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_238_629"
          x1="30.9002"
          y1="113.387"
          x2="30.9002"
          y2="106.987"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_238_629"
          x1="147.7"
          y1="171.787"
          x2="147.7"
          y2="165.387"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_238_629"
          x1="290.5"
          y1="82.1871"
          x2="290.5"
          y2="63.7871"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_238_629"
          x1="9.7"
          y1="78.1871"
          x2="9.7"
          y2="59.7871"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_238_629"
          x1="91.3001"
          y1="202.987"
          x2="91.3001"
          y2="176.587"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_238_629"
          x1="178.5"
          y1="82.9867"
          x2="178.5"
          y2="69.3867"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="#F3F0FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Stars;

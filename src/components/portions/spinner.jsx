import { motion } from "framer-motion";

function Spinner() {
  return (
    <motion.svg
      id="preloader-logo"
      width={77}
      height={77}
      viewBox="0 0 77 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 180 }}
      transition={{
        repeat: Infinity,
        duration: 0.8,
        ease: "linear",
      }}
    >
      <path
        d="M38.0694 38.1005H19.4864L19.4851 38.1005C8.88963 38.1005 0.300293 46.6899 0.300293 57.2854C0.300293 67.4913 8.26954 75.8359 18.3247 76.4358L18.3237 76.4703L18.3603 76.4379C18.7325 76.4594 19.1075 76.4703 19.4851 76.4703C29.6788 76.4703 38.0156 68.52 38.6332 58.4817L38.6712 58.4481V38.3698H57.2542L57.2554 38.3698C67.8509 38.3698 76.4403 29.7804 76.4403 19.1849C76.4403 8.979 68.471 0.634422 58.4158 0.034523L58.4169 2.28882e-05L58.3803 0.0324326C58.0081 0.01091 57.633 0 57.2554 0C47.0617 0 38.7249 7.95031 38.1073 17.9886L38.0694 18.0222V38.1005Z"
        fill="url(#paint0_radial_263_2055)"
      />
      <path
        d="M19.1849 0.0307617C8.97933 0.0307617 0.634998 7.99951 0.0346107 18.0542L0 18.0532L0.0325127 18.0899C0.0109596 18.4624 3.43323e-05 18.8377 3.43323e-05 19.2156C3.43323e-05 29.4097 7.95078 37.7467 17.9894 38.3639L18.0221 38.4008H38.1004V57.2551C38.1004 67.8506 46.6897 76.4404 57.2852 76.4404C67.4908 76.4404 75.8352 68.4715 76.4355 58.4167L76.47 58.4178L76.4376 58.3811C76.4591 58.0087 76.47 57.6334 76.47 57.2555C76.47 47.0615 68.5194 38.7245 58.4808 38.1073L58.4479 38.0702H38.3696L38.3697 19.2156C38.3697 8.62012 29.7803 0.0307617 19.1849 0.0307617Z"
        fill="url(#paint1_linear_263_2055)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_263_2055"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(38.3702 38.2351) rotate(-90) scale(38.2351 38.07)"
        >
          <stop stopColor="white" stopOpacity={0} />
          <stop offset="0.503262" stopColor="white" stopOpacity={0} />
          <stop offset={1} stopColor="white" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_263_2055"
          x1={0}
          y1="38.2356"
          x2="76.47"
          y2="38.2356"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEFCFD" />
          <stop offset={1} stopColor="white" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default Spinner;

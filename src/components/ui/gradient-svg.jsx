function GradientSvg() {
  return (
    <svg
      width={147}
      height={16}
      viewBox="0 0 147 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{}}
    >
      <path
        id="control-line"
        pathLength={1}
        d="M3 13C49.7892 6.25733 96.9501 3 144 3"
        stroke="url(#paint0_linear_463_797)"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeDashoffset: 0 }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_463_797"
          x1={3}
          y1={8}
          x2={144}
          y2={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDB83F" />
          <stop offset={1} stopColor="#950AF7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default GradientSvg;

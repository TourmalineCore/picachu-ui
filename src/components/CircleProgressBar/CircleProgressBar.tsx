function CircleProgressBar(
  {
    percentage,
    radius,
    strokeWidth,
    circleWidth,
    isPercentageShown,
  }: {
    percentage: number;
    radius: number;
    isPercentageShown: boolean;
    strokeWidth: number;
    circleWidth: number;
  },
) {
  const dashArray = radius * Math.PI * 2;

  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      className="circle-bar"
    >

      <defs>
        <linearGradient
          id="circle-progress-bar"
          x1="62.5"
          y1="-24"
          x2="0.00036662"
          y2="10.5007"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E0E5A" />
          <stop
            offset="1"
            stopColor="#725AE3"
          />
        </linearGradient>
      </defs>
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth={`${strokeWidth}px`}
        r={radius}
        className="circle-bar__background"
      />

      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        strokeWidth={`${strokeWidth}px`}
        r={radius}
        className="circle-bar__progress"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
        stroke="url(#circle-progress-bar)"
        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
      />

      {isPercentageShown ? (
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          data-cy="circle-percentage-text"
          className="circle-bar__percentage-text"
        >
          {percentage}
          %
        </text>
      ) : null}

    </svg>
  );
}

export default CircleProgressBar;

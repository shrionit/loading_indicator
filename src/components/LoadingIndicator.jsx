export default function LoadingIndicator({
  percent = 0,
  width = 100,
  height = 100,
  bgColor = "transparent",
  textColor = "#000",
  barColor = "#FDA1A1",
  pathColor = "#e5e5e5",
  shadowColor = "#0009",
  strokeWidth = 4,
  stepDuration = 1,
}) {
  const radius = 45; // Circular path radius
  const perimeter = 2 * 3.14 * radius; // Calculating perimeter to use in strokeDashArray
  const calcDashOffset = (p) => perimeter * ((100 - p) / 100); // Calculating gap offset

  return (
    <svg width={width} height={height} viewBox="0 0 100 100" fill={bgColor}>
      {/* Circular Path */}
      <circle
        cx={50}
        cy={50}
        r={radius}
        stroke={pathColor}
        strokeWidth={strokeWidth}
        style={{ filter: `drop-shadow(0 0 2px ${shadowColor})` }}
      />

      {/* Circular Progress Bar */}
      <circle
        cx={50}
        cy={50}
        r={radius}
        stroke={barColor}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
        strokeDashoffset={`${calcDashOffset(percent)}px`}
        strokeDasharray={`${perimeter}px`}
        style={{
          transition: `stroke-dashoffset ${stepDuration}ms linear`,
          transform: "rotate(90deg)",
          transformOrigin: "center",
        }}
      />

      {/* Progress Percent */}
      <text
        x="50%"
        y="50%"
        fill={textColor}
        fontFamily="sans-serif"
        fontSize="100%"
        fontWeight={1000}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {percent}%
      </text>
    </svg>
  );
}

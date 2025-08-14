export const InstagramIcon = ({ size = 60, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="0" y="0" width="60" height="60" rx="12" ry="12" fill="black" />
      <circle
        cx="30"
        cy="30"
        r="12"
        fill="none"
        stroke="white"
        strokeWidth="3"
      />
      <circle cx="45" cy="15" r="3" fill="white" />
    </svg>
  );
};

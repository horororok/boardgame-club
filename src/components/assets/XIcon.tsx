export const XIcon = ({ size = 60, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="30" cy="30" r="30" fill="#000000" />
      <path
        d="M20 20 L40 40 M40 20 L20 40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

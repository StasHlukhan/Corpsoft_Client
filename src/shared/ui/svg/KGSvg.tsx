/* eslint-disable @typescript-eslint/no-explicit-any */

function KGSvg({ children, ...props }: any) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export default KGSvg;

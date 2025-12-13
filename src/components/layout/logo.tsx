export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="logo-gradient"
        x1="0"
        y1="0"
        x2="100"
        y2="100"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" className="text-cyan-400" />
        <stop offset="1" stopColor="currentColor" className="text-blue-600" />
      </linearGradient>
    </defs>
    <path
      fill="url(#logo-gradient)"
      d="M85,0H15C6.716,0,0,6.716,0,15v70c0,8.284,6.716,15,15,15h70c8.284,0,15-6.716,15-15V15C100,6.716,93.284,0,85,0z"
    />
    <path
      fill="#FFFFFF"
      d="M71.66,26.418c-9.133-8.83-22.994-11.574-35.854-8.083c-3.64,0.985-6.683,2.83-9.155,5.393
        c-5.744,5.962-8.31,13.911-7.07,22.339c1.071,7.245,5.197,13.68,11.39,17.804c4.464,3.003,9.58,4.526,14.815,4.526h23.778
        c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H49.564c-3.03,0-5.874-1.24-7.854-3.411c-2.34-2.569-3.414-5.945-2.91-9.281
        c0.803-5.328,4.64-9.74,9.65-11.13c10.364-2.883,21.054,1.865,26.155,10.638c1.86,3.195,5.088,5.133,8.604,5.133
        c2.23,0,4.354-0.78,6.042-2.228C84.383,47.465,84.72,35.211,71.66,26.418z"
    />
  </svg>
);

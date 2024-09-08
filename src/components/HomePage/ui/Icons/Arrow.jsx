function Arrow({ color = "#4caf4f" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="11"
      fill="none"
      viewBox="0 0 17 11"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M12 9.4l3.293-3.294a1 1 0 000-1.414L12 1.399m3 4H1"
      ></path>
    </svg>
  );
}

export default Arrow;

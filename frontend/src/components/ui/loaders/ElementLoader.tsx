const ElementLoader = ({ width, height, colorCode, borderWidth }) => {
  const keyframesStyles = `
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <>
      <style>{keyframesStyles}</style>
      <span
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: `${borderWidth}px solid ${colorCode}`,
          borderBottomColor: `transparent`,
          borderRadius: "50%",
          display: "inline-block",
          boxSizing: "border-box",
          animation: "rotation 2s linear infinite",
        }}
      ></span>
    </>
  );
};

export default ElementLoader;
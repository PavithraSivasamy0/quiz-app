export const BoardPage = ({ displayType, activeColor }) => {
  return (
    <div className={displayType}>
      <div
        className="circle"
        style={{ backgroundColor: `${activeColor === "red" ? "red" : ""}` }}
      ></div>
      <div
        className="circle"
        style={{
          backgroundColor: `${activeColor === "yellow" ? "yellow" : ""}`,
        }}
      ></div>
      <div
        className="circle"
        style={{
          backgroundColor: `${activeColor === "green" ? "green" : ""}`,
        }}
      ></div>
    </div>
  );
};

import Spinner from "./spinner";

const FullScreenLoader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "100%",
          width: 1400,
          background: "#EA204933",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spinner />
      </div>
    </div>
  );
};

export default FullScreenLoader;

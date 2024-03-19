const Error404 = () => {
  return (
    <div className="error-page">
      <div>
        <div
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "100px",
            letterSpacing: "10px",
            marginBottom: "50px",
          }}
        >
          404
        </div>
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          Page Not Found
        </div>
      </div>
    </div>
  );
};

export default Error404;

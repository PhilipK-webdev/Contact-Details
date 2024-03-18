const Icon = ({ divClass, iconClass, btn, handleUser }) => {
  return (
    <div className={divClass}>
      {btn ? (
        <button>
          {" "}
          <i
            className={iconClass}
            aria-hidden="true"
            style={{ cursor: "pointer" }}
            onClick={typeof handleUser === "function" ? handleUser : null}
          ></i>
        </button>
      ) : (
        <i
          className={iconClass}
          aria-hidden="true"
          style={{ cursor: "pointer" }}
          onClick={typeof handleUser === "function" ? handleUser : null}
        ></i>
      )}
    </div>
  );
};

export default Icon;

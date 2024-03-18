const Icon = ({ divClass, iconClass, btn, handleUser, disabled }) => {
  return (
    <div className={divClass}>
      {btn ? (
        <button disabled={disabled}>
          {" "}
          <i
            className={iconClass}
            aria-hidden="true"
            style={{ cursor: disabled ? "none" : "pointer" }}
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

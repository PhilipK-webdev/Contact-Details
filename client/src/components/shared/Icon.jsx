const Icon = ({ divClass, iconClass, btn, handleUser, disabled, phone }) => {
  return (
    <div className={divClass}>
      {btn ? (
        <button disabled={disabled}>
          {" "}
          {phone ? (
            <a href={`tel:${phone}`} style={{ color: "white" }}>
              <i
                className={iconClass}
                aria-hidden="true"
                style={{ cursor: disabled ? "none" : "pointer" }}
                onClick={typeof handleUser === "function" ? handleUser : null}
              ></i>
            </a>
          ) : (
            <i
              className={iconClass}
              aria-hidden="true"
              style={{ cursor: disabled ? "none" : "pointer" }}
              onClick={typeof handleUser === "function" ? handleUser : null}
            ></i>
          )}
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

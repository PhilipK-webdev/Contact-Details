import Icon from "./Icon";
const InputField = ({
  styled,
  label,
  name,
  placeholder,
  handleChange,
  value,
  disabled,
}) => {
  return (
    <div className={styled}>
      {label && <label>{label}</label>}
      <input
        disabled={disabled}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {!label && <Icon divClass={"search-icon"} iconClass={"fa fa-search"} />}
    </div>
  );
};

export default InputField;

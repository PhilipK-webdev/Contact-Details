import Icon from "./Icon";
const AddNewUser = ({ handleCreateUser, handleCreateRandomUser }) => {
  return (
    <div className="contact-new">
      <Icon
        divClass={""}
        iconClass={"fa fa-user-plus"}
        btn={true}
        handleUser={handleCreateUser}
      />
      <Icon
        divClass={""}
        iconClass={"fa fa-random"}
        btn={true}
        style={{ marginLeft: "15px" }}
        handleUser={handleCreateRandomUser}
      />
    </div>
  );
};

export default AddNewUser;

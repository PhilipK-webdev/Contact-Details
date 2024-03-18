import { useSelector, useDispatch } from "react-redux";
import { setIdParams } from "../features/urlParams/urlParams.js";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
const EditUser = () => {
  let { id } = useParams();
  // let paramsId = useSelector((state) => state.id.paramsId);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setIdParams(Number(id)));
  // }, [dispatch, id]);
  return id ? (
    <div className="contact-container">
      <div className="new-contact-container">
        <div className="new-contact-avatar">
          <img src="https://randomuser.me/api/portraits/men/82.jpg" />
          <button>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
        <div className="new-contact-inputs">
          <div className="new-contact-input">
            <label>Name</label>
            <input />
          </div>
          <div className="new-contact-input">
            <label>Phone</label>
            <input />
          </div>
          <div className="new-contact-input">
            <label>Title</label>
            <input />
          </div>
        </div>
        <div className="new-contact-buttons">
          <button className="button-ok">Save</button>
          <button className="button-cancel">Cancel</button>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/contacts/new"} />
  );

  // return <div>EditUser</div>;
};

export default EditUser;

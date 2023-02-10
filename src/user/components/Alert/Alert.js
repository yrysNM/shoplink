import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../../../redux/alertReducer";
import "./Alert.scss";

const Alert = () => {
  const alertState = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(showAlert({ isOpen: false, title: "", text: "" }));
    }, [2500]);
  }, []);

  return (
    <div className="alert">
      <div className="alert-inner">
        <h3>{alertState.title}</h3>
        {alertState.text && <p>{alertState.text}</p>}
      </div>
    </div>
  );
};

export { Alert };

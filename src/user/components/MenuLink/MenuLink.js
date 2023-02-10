import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { showMenu } from "../../../redux/menuReducer";

import "./MenuLink.css";

const MenuLink = ({ mainlink, title, to }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pushLink = () => {
    document.body.classList.remove("no-scroll");
    dispatch(showMenu(false));
    navigate(to);
  };

  return (
    <button
      className={`menu-link-button ${mainlink && "menu-dropdown-title"}`}
      onClick={pushLink}
    >
      {title}
    </button>
  );
};

export { MenuLink };

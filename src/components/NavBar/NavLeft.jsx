import React from "react";
import { useUserContext } from "../../context/Context";
import { NavLink } from "react-router-dom";
import {
  LightbulbOutlined,
  ArchiveOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";

const NavLeft = () => {
  const { isExpanded } = useUserContext();
  return (
    <nav className={isExpanded ? "nav__left active" : "nav__left"}>
      <NavLink to="/home">
        <div className="nav__left__item__container">
          <span className="icon__overla">
            <LightbulbOutlined />
          </span>
          <span>Notes</span>
        </div>
      </NavLink>
      <NavLink to="/archive">
        <div className="nav__left__item__container">
          <span className="icon__overla">
            <ArchiveOutlined />
          </span>
          <span>Archive</span>
        </div>
      </NavLink>
      <NavLink to="/bin">
        <div className="nav__left__item__container">
          <span className="icon__overla">
            <DeleteOutlineOutlined />
          </span>
          <span>Bin</span>
        </div>
      </NavLink>
    </nav>
  );
};

export default NavLeft;

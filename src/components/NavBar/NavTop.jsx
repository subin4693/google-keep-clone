import React, { useState } from "react";
import { useUserContext } from "../../context/Context";
import {
  Menu,
  SearchOutlined,
  ReplayOutlined,
  WbSunnyOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";

const NavTop = () => {
  const [focus, setFocus] = useState(false);
  const { theme, setTheme, setIsExpanded, page, setSearch, search } =
    useUserContext();

  //console.log(theme);
  return (
    <div className="nav__top">
      <div className="nav__top__left">
        <span
          className="icon__overlay"
          onClick={() => {
            setIsExpanded((prev) => !prev);
          }}
        >
          <Menu />
        </span>
        <span className="nav__top__logo">Keep</span>
      </div>
      <div className={focus ? "nav__top__mid shadow" : "nav__top__mid"}>
        <span>
          <SearchOutlined />
          <input
            type="text"
            name="search"
            placeholder="Search"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </span>
      </div>
      <div className="nav__top__right">
        <span
          className="icon__overlay"
          onClick={() => window.location.reload()}
        >
          <ReplayOutlined />
        </span>
        {theme === "dark" ? (
          <span className="icon__overlay" onClick={() => setTheme("lite")}>
            <WbSunnyOutlined />
          </span>
        ) : (
          <span className="icon__overlay" onClick={() => setTheme("dark")}>
            <DarkModeOutlined />
          </span>
        )}
      </div>
    </div>
  );
};

export default NavTop;

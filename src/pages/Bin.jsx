import React from "react";
import NavTop from "../components/NavBar/NavTop";
import NavLeft from "../components/NavBar/NavLeft";
import CardContainer from "../components/MainContainer/CardContainer";
import { useUserContext } from "../context/Context";

const Archive = () => {
  const { state } = useUserContext();
  console.log("i am form  bin");
  return (
    <>
      <NavTop />
      <NavLeft />
      <CardContainer
        card={"card__container ab"}
        page={"bin"}
        Notes={state.Bin}
      />
    </>
  );
};

export default Archive;

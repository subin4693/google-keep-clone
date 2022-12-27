import React from "react";
import NavTop from "../components/NavBar/NavTop";
import NavLeft from "../components/NavBar/NavLeft";
import Input from "../components/MainContainer/Input";
import CardContainer from "../components/MainContainer/CardContainer";
import { useUserContext } from "../context/Context";

const Home = () => {
  const { state } = useUserContext();
  console.log("i am frm home page");
  return (
    <>
      <NavTop />
      <NavLeft />
      <Input />
      <CardContainer
        card={"card__container home"}
        page={"home"}
        Notes={state.Notes}
      />
    </>
  );
};

export default Home;

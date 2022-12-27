import React from "react";
import {
  ArchiveOutlined,
  DeleteOutlineOutlined,
  PushPinOutlined,
  UnarchiveOutlined,
  DeleteForeverOutlined,
  RestoreFromTrashOutlined,
} from "@mui/icons-material";
import { useUserContext } from "../../context/Context";

const Card = ({ title, para, page, uniquKey }) => {
  const { dispatch, state } = useUserContext();
  //console.log(state);
  return (
    <div className="card">
      <div className="card__text">
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
      <span className="card__icon__overlay card__pin__overlay">
        {page === "home" ? <PushPinOutlined className="card__icons" /> : null}
      </span>
      <div className="card__btom__container">
        <span className="icon__overlay card__icon__overlay">
          {page === "bin" ? (
            <DeleteForeverOutlined
              onClick={() => {
                dispatch({
                  type: "DELETE_PERMANENT",
                  payload: { title, text: para, key: uniquKey },
                });
              }}
            />
          ) : page === "archive" ? (
            <UnarchiveOutlined
              onClick={() => {
                dispatch({
                  type: "UNACHIVE",
                  payload: { title, text: para, key: uniquKey },
                });
              }}
            />
          ) : (
            <ArchiveOutlined
              onClick={() => {
                dispatch({
                  type: "ARCHIVE",
                  payload: { title, text: para, key: uniquKey },
                });
              }}
            />
          )}
        </span>
        <span className="icon__overlay card__icon__overlay">
          {page === "bin" ? (
            <RestoreFromTrashOutlined
              onClick={() => {
                dispatch({
                  type: "UNDELETE",
                  payload: { title, text: para, key: uniquKey },
                });
              }}
            />
          ) : page === "home" ? (
            <DeleteOutlineOutlined
              onClick={() => {
                dispatch({
                  type: "DELETE_FROM_NOTES",
                  payload: { title, text: para, key: uniquKey },
                });
              }}
            />
          ) : (
            <DeleteOutlineOutlined
              onClick={() => {
                dispatch({
                  type: "DELETE_FROM_ARCHIVE",
                  payload: { title, text: para, key: uniquKey },
                });
              }}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default Card;

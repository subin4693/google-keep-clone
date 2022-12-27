import React, { useState, useEffect } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useUserContext } from "../../context/Context";

const Search = () => {
  const [show, setShow] = useState(false);
  const [focusTitle, setFocusTitle] = useState(false);
  const [focusPara, setFocusPara] = useState(false);
  const { state, dispatch } = useUserContext();
  const [title, setTitle] = useState("");
  const [para, setPara] = useState("");

  useEffect(() => {
    if (focusTitle || focusPara) setShow(true);
    else {
      setShow(false);
    }
  }, [focusTitle, focusPara]);

  useEffect(() => {
    setTitle((prev) => prev.trim());
    setPara((prev) => prev.trim());
    if (title || para)
      dispatch({
        type: "ADD",
        payload: {
          text: para,
          title: title,
          key: Math.floor(Math.random() * 10000000000),
        },
      });
    setTitle("");
    setPara("");
  }, [show]);
  return (
    <div className="text">
      <div
        className={
          show ? "text__input__container show" : "text__input__container"
        }
      >
        <input
          type="text"
          className="input__title"
          placeholder="Title"
          onFocus={() => setFocusTitle(true)}
          onBlur={() => setFocusTitle(false)}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          className="input__para"
          placeholder="Take a note..."
          onFocus={() => setFocusPara(true)}
          onBlur={() => setFocusPara(false)}
          value={para}
          onChange={(e) => setPara(e.target.value)}
        />
        <button type="button" className="input__btn">
          send
        </button>
      </div>
    </div>
  );
};

export default Search;

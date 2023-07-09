import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import "./channels.css";
import { useSelector } from "react-redux";
import { useUpdateChannelMutation } from "../redux/api/user-api";
import { validateEmpty, validateUrl } from "../utils";

const Channels = (props) => {
  const formRef = useRef(null);

  const user = useSelector((state) => state.userState.user);
  const [updateChannel, { isLoading, isError, error, isSuccess }] =
    useUpdateChannelMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Channel saved successfully!");
    }
  }, [isLoading]);

  const handleAddChannel = () => {
    const Input = document.createElement("input");
    Input.className = "channels-textinput input";
    const Div = document.createElement("div");
    const Button = document.createElement("button");
    Button.textContent = "DEL";
    Button.className = "button channels-button";
    Button.type = "button";
    Button.style = "width: 50px";
    Button.onclick = () => formRef.current.removeChild(Div);
    Div.style = "display: flex; gap: 10px; margin-bottom: 10px;";
    Div.appendChild(Input);
    Div.appendChild(Button);

    formRef.current.appendChild(Div);
  };

  const handleSave = () => {
    let channelArray = [];
    const children = formRef.current.querySelectorAll("input");
    for (let i = 0; i < children.length; ++i) {
      console.log(children[i]);
      if (validateEmpty(children[i].value)) {
        toast.error("No empty channel inputs!");
        return;
      }
      if (!validateUrl(children[i].value)) {
        toast.error(`Input valid ${props.text} channel urls`);
        return;
      }
      channelArray.push(children[i].value);
    }

    updateChannel({ channel_type: props.text, channel_list: channelArray });
  };

  let channels;
  switch (props.text) {
    case "TIKTOK":
      channels = user.tiktok;
      break;
    case "YOUTUBE":
      channels = user.youtube;
      break;
    case "FACEBOOK":
      channels = user.facebook;
      break;
    case "INSTAGRAM":
      channels = user.instagram;
      break;
    case "TWITTER":
      channels = user.twitter;
      break;
  }

  return (
    <div className={`channels-channels ${props.rootClassName} `}>
      <div className="channels-logo">
        {props.children}
        <span className="channels-text">{props.text}</span>
      </div>
      <div className="channels-container">
        <form ref={formRef}>
          {channels.map((channel, index) => (
            <div
              style={{ display: "flex", gap: 10 }}
              key={index}
              name={`${props.text}-channel${index}`}
            >
              <input
                type="text"
                defaultValue={channel}
                className="channels-textinput input"
              />
              <button
                type="button"
                className="button channels-button"
                style={{ width: 50 }}
                onClick={() =>
                  formRef.current.removeChild(
                    formRef.current.querySelector(
                      `div[name="${props.text}-channel${index}"]`
                    )
                  )
                }
              >
                DEL
              </button>
            </div>
          ))}
        </form>
        <div className="channels-container1">
          <button
            type="button"
            className="channels-button button"
            onClick={handleAddChannel}
          >
            {props.button}
          </button>
          <button
            type="button"
            className="channels-button1 button"
            onClick={handleSave}
          >
            {props.button1}
          </button>
        </div>
      </div>
    </div>
  );
};

Channels.defaultProps = {
  button1: "SAVE",
  textinput_placeholder: "placeholder",
  text: "TWITTER",
  rootClassName: "",
  textinput_placeholder1: "placeholder",
  button: "Add",
};

Channels.propTypes = {
  button1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
};

export default Channels;

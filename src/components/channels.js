import React, { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import "./channels.css";
import { useSelector } from "react-redux";
import { useUpdateChannelMutation } from "../redux/api/user-api";

const Channels = (props) => {
  const formRef = useRef(null);

  const user = useSelector((state) => state.userState.user);
  const [updateChannel, { isLoading, isError, error, isSuccess }] =
    useUpdateChannelMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Channel added successfully!");
    }
    if (isError) {
      if (Array.isArray(error.data.detail)) {
        error.data.detail.forEach((el) =>
          toast.error(`${el.loc[1]}: ${el.msg}`)
        );
      } else {
        toast.error(error.data.detail);
      }
    }
  }, [isLoading]);

  const handleAddChannel = () => {
    const input = document.createElement("input");
    input.className = "channels-textinput input";
    formRef.current.appendChild(input);
  };

  const handleSave = () => {
    let channelArray = [];
    const len = formRef.current.elements.length;
    for (let i = 0; i < len; ++i)
      channelArray.push(formRef.current.elements[i].value);

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
            <input
              type="text"
              defaultValue={channel}
              key={index}
              className="channels-textinput input"
            />
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
  button: "Add Channel",
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

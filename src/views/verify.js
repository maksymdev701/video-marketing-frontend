import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useVerifyEmailMutation } from "../redux/api/auth-api";

import "./verify.css";

const Verify = () => {
  const [code, setCode] = useState();
  const [verifyMail, { isLoading, isSuccess, isError, error }] =
    useVerifyEmailMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account verified successfully!");
      navigate("/account");
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

  return (
    <div className="verify-container">
      <form
        className="verify-form"
        onSubmit={(event) => {
          event.preventDefault();
          verifyMail({ verificationCode: code });
        }}
      >
        <input
          className="verify-input input"
          placeholder="Verification code"
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="verify-button button">Verify</button>
      </form>
    </div>
  );
};

export default Verify;

import axios from "axios";

export function validateEmpty(field) {
  if (field === null || field === undefined || field === "") return true;
  return false;
}

export function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validatePhoneNumber(phoneNumber) {
  const re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/;
  return re.test(String(phoneNumber).toLowerCase());
}

export function validateUrl(url) {
  const re = /^(ftp|http|https):\/\/[^ "]+$/;
  return re.test(String(url).toLowerCase());
}

export function setAuthToken(token) {
  axios.defaults.headers.common["Authorization"] = "";
  delete axios.defaults.headers.common["Authorization"];

  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  }
}

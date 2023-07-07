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

export function validatePhoneNumber(mobileNumber) {
  const re = /^([0|\+[0-9]{1,5})?\s([0-9]{10,11})$/;
  return re.test(mobileNumber);
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

export function getDateFromPydate(datetimeString) {
  // Split the string into date and time components
  const [dateString, timeString] = datetimeString.split("T");

  // Split the date component into year, month, and day values
  const [year, month, day] = dateString.split("-");

  // Create a new Date object using the extracted year, month, and day values
  const dateObject = new Date(year, month - 1, day);

  return dateObject;
}

import axios from "axios";

const baseURL = "http://localhost:4000/api/auth";

//register request
const register = (newUser) => {
  return axios
    .post(`${baseURL}/register`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};
//login request
const login = (userCredential) => {
  return axios
    .post(`${baseURL}/login`, userCredential)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token-key", response.data.token);
        return Promise.resolve(response.data);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response.data);
    });
};

//logout

const logout = () => {
  localStorage.removeItem("token-key");
  return { msg: "Logout Successfully" };
};

export { register, login, logout };

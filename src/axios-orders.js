import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-8a2d6-default-rtdb.firebaseio.com/",
});

export default instance;

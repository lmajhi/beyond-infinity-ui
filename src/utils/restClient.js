import axios from "axios";

const restClient = axios.create({
  baseURL: "https://blowfish-tolerant-remotely.ngrok-free.app", //get if from chetan
  headers: {
    "Content-Type": "application/json",
  },
});

export default restClient;

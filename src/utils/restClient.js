import axios from "axios";

const restClient = axios.create({
  baseURL: "", //get if from chetan
  headers: {
    "Content-Type": "application/json",
  },
});

export default restClient;

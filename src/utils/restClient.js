import axios from "axios";

const restClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default restClient;

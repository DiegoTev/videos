import axios from "axios";

const KEY = "AIzaSyCRR4mEEPY4veocT3ofT6kI4_x8R6-2KhM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

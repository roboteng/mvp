import axios from "axios";
import Note from "./models/Note";

const api = {
  saveNote: (note: Note) => {
    return axios.post('/api/note', note)
  }
};

export default api;
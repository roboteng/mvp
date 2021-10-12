import axios from "axios";
import Note from "./models/Note";
import SavedNote from "./models/SavedNote";

const api = {
  saveNote: (note: Note):Promise<void> => {
    return axios.post('/api/note', note)
  },
  getNotes: (): Promise<SavedNote[]> => {
    return axios.get('/api/notes').then(x => {
      console.log(x);
      return x.data as SavedNote[];
    });
  }
};

export default api;
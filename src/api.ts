import axios from "axios";
import Note from "./models/Note";
import SavedNote from "./models/SavedNote";

const api = {
  saveNote: (note: Note): Promise<void> => {
    return axios.post('/api/note', note)
  },
  getNotes: async (): Promise<SavedNote[]> => {
    const x = await axios.get('/api/notes')
    return x.data as SavedNote[];
  },
  deleteNote: (id: number) => {
    return axios.delete(`/api/note/${id}`)
  },
  editNote: (id: number, note: Note) => {
    return axios.put(`/api/note/${id}`, note);
  },
  getNote: async (id: number): Promise<SavedNote> => {
    const x = await axios.get(`/api/note/${id}`);
    return x.data as SavedNote;
  }
};

export default api;
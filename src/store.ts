import { createStore } from "redux";
import { notesReducer } from "./noteReducer";

export const store = createStore(notesReducer);

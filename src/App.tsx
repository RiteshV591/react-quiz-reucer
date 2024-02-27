import { useEffect, useReducer } from "react";
import { Header } from "./Components/Header";

const initialState = {
  questions: [],
  status: "loading",
};

const reducer = (state, action) => {
  console.log(state);
  console.log(action);

  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();

        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
        console.error(err);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
    </div>
  );
};

import { useEffect, useReducer } from "react";
import { Header } from "./Components/Header";
import { MainComponent } from "./Components/MainComponent";
import { Loader } from "./Components/Loader";
import { Error } from "./Components/Error";
import { StartScreen } from "./Components/StartScreen";
import { Questions } from "./Components/Questions/Questions";
import { NextButton } from "./Components/NextButton";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const curQuestion = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === curQuestion.correctOption
            ? state.points + curQuestion.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("Action unknown");
  }
};

export const App = () => {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions: number = questions.length;

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
      <MainComponent>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Questions
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </MainComponent>
    </div>
  );
};

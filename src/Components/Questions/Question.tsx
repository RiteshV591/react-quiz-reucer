export const Question = ({ questions, dispatch, answer }) => {
  const hasAnswer = answer !== null;

  return (
    <div className="flex flex-col gap-5 mb-12">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${
            index === answer ? "transform translate-x-8" : ""
          } ${
            hasAnswer
              ? index === questions.correctOption
                ? "bg-theme border-2 border-theme text-light"
                : "bg-accent border-2 border-accent text-darkest"
              : ""
          }`}
          key={option}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

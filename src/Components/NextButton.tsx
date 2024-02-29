export const NextButton = ({ dispatch, answer }) => {
  if (answer === null) return null;

  return (
    <div>
      <button
        className="btn float-right hover:scale-105 active:scale-100 hover:bg-darkest"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    </div>
  );
};

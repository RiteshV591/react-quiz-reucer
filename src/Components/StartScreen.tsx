export const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-6xl mb-8">Welcome to The React Quiz!</h2>
      <h3 className="text-4xl font-semibold mb-16">
        {numQuestions} questions to test your react mastery
      </h3>
      <button
        className="btn float-right hover:scale-105 active:scale-100 hover:bg-darkest"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
};

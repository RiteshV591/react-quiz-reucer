export const Question = ({ questions }) => {
  return (
    <div className="flex flex-col gap-5 mb-12">
      {questions.options.map((option) => (
        <button className="btn btn-option">{option}</button>
      ))}
    </div>
  );
};

import { Question } from "./Question";

export const Questions = ({ questions }) => {
  return (
    <div className="text-center">
      <h4 className="text-3xl font-semibold mb-10">{questions.question}</h4>

      <Question questions={questions} />
    </div>
  );
};

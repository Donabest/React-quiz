import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { questions: question, index } = useQuiz();
  return (
    <div>
      <h4>{question[index].question}</h4>
      <Options />
    </div>
  );
}

export default Question;

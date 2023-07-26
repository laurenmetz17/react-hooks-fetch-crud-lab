import React from "react";

function QuestionItem({ question, setQuestions, questions}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(e) {
    const newQuestions = questions.filter(question => question.id.toString() !== e.target.id);
    fetch(`http://localhost:4000/questions/${e.target.id}`, {method:"DELETE"})
    .then(setQuestions(newQuestions))
    console.log(e.target.id);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={id} onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

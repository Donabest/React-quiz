function Progress({ index, numQuestions, points, maxPossilePoints }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossilePoints}
      </p>
    </header>
  );
}

export default Progress;

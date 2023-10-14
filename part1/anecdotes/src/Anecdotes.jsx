const Anecdote = ({ anecdote, votes }) => (
    <div>
      <p>{anecdote}</p>
      <p>has {votes||0} votes</p>
    </div>
  );

export default Anecdote;
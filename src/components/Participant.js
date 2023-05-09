import React from "react";

function Participant({ emoji, votes, handleVote }) {
  return (
    <div>
      <p>{emoji} {votes}</p>
      <button onClick={handleVote}>Голосовать</button>
    </div>
  );
}

export default Participant;

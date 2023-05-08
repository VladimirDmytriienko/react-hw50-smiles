import React, { useState } from "react";
function Plus() {
  const [votes, setVotes] = useState([0, 0, 0]);

  const handleVote = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  };

  const getWinner = () => {
    const maxVotes = Math.max(...votes);
    let winner;
    switch(votes.indexOf(maxVotes)) {
      case 0:
        winner = "😃";
        break;
      case 1:
        winner = "🚀";
        break;
      case 2:
        winner = "🦁";
        break;
      default:
        winner = "";
    }
    return winner;
  };
  

  return (
    <div>
      <div>
        <p>😃 {votes[0]}</p>
        <button onClick={() => handleVote(0)}>Голосовать</button>
      </div>
      <div>
        <p>🚀 {votes[1]}</p>
        <button onClick={() => handleVote(1)}>Голосовать</button>
      </div>
      <div>
        <p>🦁 {votes[2]}</p>
        <button onClick={() => handleVote(2)}>Голосовать</button>
      </div>
      <button onClick={() => alert(`Победитель: ${getWinner()}`)}>Показать результаты</button>
    </div>
  );
}


export default Plus
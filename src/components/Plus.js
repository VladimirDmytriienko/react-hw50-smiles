import React, { useState } from "react";
import Participant from "./Participant";

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
      {votes.map((vote, index) => (
        <Participant
          key={index}
          emoji={index === 0 ? "😃" : index === 1 ? "🚀" : "🦁"}
          votes={vote}
          handleVote={() => handleVote(index)}
        />
      ))}
      <button onClick={() => alert(`Победитель: ${getWinner()}`)}>Показать результаты</button>
    </div>
  );
}

export default Plus;

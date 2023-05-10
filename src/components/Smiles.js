import { useState } from "react";
import PostItem from "./PostItem";


function Smiles() {
  const [smiles, setSmiles] = useState([
    { id: 1, title: "😃", count: 0 },
    { id: 2, title: "🚀", count: 0 },
    { id: 3, title: "🦁", count: 0 },
  ]);

  const handleSmileClick = (id) => {
    const updatedSmiles = smiles.map((smile) => {
      if (smile.id === id) {
        return {
          ...smile,
          count: smile.count + 1,
        };
      }
      return smile;
    });

    setSmiles(updatedSmiles);
  };

  const maxCountElement = smiles.reduce((maxElement, currentElement) => {
    if (currentElement.count > maxElement.count) {
      return currentElement;
    } else {
      return maxElement;
    }
  });

  const handleMaxCountClick = () => {
    alert(maxCountElement.title);
  };

  return (
    <div>
      <div>
        {smiles.map((smile) => (
          <div key={smile.id} onClick={() => handleSmileClick(smile.id)}>
            <PostItem post={smile} />
          </div>
        ))}
      </div>
      <button onClick={handleMaxCountClick}>
        Смайлик с наибольшим каунтом
      </button>
    </div>
  );
}

export default Smiles;

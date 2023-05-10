import React, { Component } from "react";
import PostItem from "./PostItem";

class Smiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smiles: [
        { id: 1, title: "😃", count: 0 },
        { id: 2, title: "🚀", count: 0 },
        { id: 3, title: "🦁", count: 0 },
      ],
    };
    this.biggestCount = this.biggestCount.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  biggestCount() {
    const counts = this.state.smiles.map((smile) => smile.count);
    const maxCount = Math.max(...counts);
    alert(maxCount);
  }

  incrementCount(id) {
    const updatedSmiles = this.state.smiles.map((smile) => {
      if (smile.id === id) {
        return { ...smile, count: smile.count + 1 };
      }
      return smile;
    });

    this.setState({ smiles: updatedSmiles });
  }

  render() {
    return (
      <div>
        {this.state.smiles.map((i) => (
          <div key={i.id}>
            <p onClick={() => this.incrementCount(i.id)}>{i.title}</p>
            <span onClick={() => this.incrementCount(i.id)}>{i.count}</span>
          </div>
        ))}
        <button onClick={this.biggestCount}>biggestCount</button>
      </div>
    );
  }
}

export default Smiles;

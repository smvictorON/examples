import React, { useState } from "react";
import "./App.css";

const InstructionItem = ({ index, text, moveInstruction, listLeng }) => {
  return (
    <li>
      <div className="li-container">
        <span>{index + 1}</span>
        <span>{text}</span>
        <div>
          <button
            className="li-button"
            onClick={() => moveInstruction(index, "down")}
            disabled={index === listLeng - 1}
          >
            <i>▼</i>
          </button>
          <button
            className="li-button"
            onClick={() => moveInstruction(index, "up")}
            disabled={index === 0}
          >
            <i>▲</i>
          </button>
        </div>
      </div>
    </li>
  );
};

const InstructionForm = ({ inputValue, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <section>
        <input
          id="instruction-input"
          type="text"
          placeholder="New Instruction"
          data-testid="instruction-input"
          value={inputValue}
          onChange={onChange}
        />
        <button
          className="button-form"
          type="submit"
          data-testid="add-instruction-button"
        >
          Add Instruction
        </button>
      </section>
    </form>
  );
};

export default function InstructionBoard() {
  const [instructions, setInstructions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showErr, setShowErr] = useState(false);

  const errMsg = "Please enter an instruction.";

  const addInstruction = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setInstructions([
        ...instructions,
        { text: inputValue }
      ]);

      setInputValue("");
    } else {
      setShowErr(true);
      setTimeout(() => {
        setShowErr(false);
      }, 3000);
    }
  };

  const moveInstruction = (index, direction) => {
    if (index > -1) {
      const newInstructions = [...instructions];

      if (direction === "up" && index > 0) {
        const temp = newInstructions[index];
        newInstructions[index] = newInstructions[index - 1];
        newInstructions[index - 1] = temp;
      } else if (direction === "down" && index < newInstructions.length - 1) {
        const temp = newInstructions[index];
        newInstructions[index] = newInstructions[index + 1];
        newInstructions[index + 1] = temp;
      }

      setInstructions(newInstructions);
    }
  };

  return (
    <div className="container">
      <div>
        <InstructionForm
          inputValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={addInstruction}
        />
        {showErr && (
          <span data-testid="error-message" className="error">
            {errMsg}
          </span>
        )}
      </div>
      <div>
        <div>
          <h4>Instructions</h4>
          <ul className="styled mt-50" data-testid="instructions">
            {instructions.map((item, index) => (
              <InstructionItem
                key={index}
                index={index}
                text={item.text}
								listLeng={instructions.length}
                moveInstruction={moveInstruction}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

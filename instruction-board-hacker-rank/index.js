import React, { useState } from "react";
import "./index.css";

const InstructionItem = ({ index, text, moveInstruction, listLeng }) => {
  return (
    <li>
      <div className="li-content layout-row justify-content-between align-items-center">
        <span>{index + 1}</span>
        <span>{text}</span>
        <div className="icons">
          <button
            className="icon-only x-medium mx-2"
            onClick={() => moveInstruction(index, "down")}
            disabled={index === listLeng - 1}
          >
            <i className="material-icons">arrow_drop_down_icon</i>
          </button>
          <button
            className="icon-only x-medium mx-2"
            onClick={() => moveInstruction(index, "up")}
            disabled={index === 0}
          >
            <i className="material-icons">arrow_drop_up_icon</i>
          </button>
        </div>
      </div>
    </li>
  );
};

const InstructionForm = ({ inputValue, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <section className="my-30 layout-row align-items-center justify-content-center width-1000">
        <input
          id="instruction-input"
          type="text"
          placeholder="New Instruction"
          data-testid="instruction-input"
          className="width-80"
          value={inputValue}
          onChange={onChange}
        />
        <button
          type="submit"
          className="ml-30 width-20"
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
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <div>
        <InstructionForm
          inputValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSubmit={addInstruction}
        />
        {showErr && (
          <span data-testid="error-message" className="error hidden-span">
            {errMsg}
          </span>
        )}
      </div>
      <div className="card outlined mt-0 width-800">
        <div className="card-text">
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

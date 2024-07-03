import React from "react";

export const EnterDetails = ({
  teluguMarks,
  englishMarks,
  setTeluguMarks,
  setenglishMarks,
  setSubmitted,
}) => {
  return (
    <div>
      <div>
        telugu:{" "}
        <input
          type="textbox"
          value={teluguMarks}
          onChange={(e) => setTeluguMarks(e.target.value)}
        />
      </div>
      <div>
        english:{" "}
        <input
          type="textbox"
          value={englishMarks}
          onChange={(e) => setenglishMarks(e.target.value)}
        />
      </div>
      <button onClick={() => setSubmitted(true)}>Submit</button>
    </div>
  );
};

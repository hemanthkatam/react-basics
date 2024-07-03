import React, { useState } from "react";
import { MarskTable } from "./MarksTable";
import { EnterDetails } from "./EnteDetails";

export const StudentDetails = () => {
  const [teluguMarks, setTeluguMarks] = useState(0);
  const [englishMarks, setenglishMarks] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  return !submitted ? (
    <EnterDetails
      teluguMarks={teluguMarks}
      englishMarks={englishMarks}
      setTeluguMarks={setTeluguMarks}
      setenglishMarks={setenglishMarks}
      setSubmitted={setSubmitted}
    />
  ) : (
    <MarskTable teluguMarks={teluguMarks} englishMarks={englishMarks} />
  );
};

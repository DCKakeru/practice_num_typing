import "./App.css";
import React, { useState } from "react";
import Header from "./components/modules/Header";
import Question from "./components/modules/Question";
import Status from "./components/modules/Status";
import { TextField } from "@mui/material";

export default function App() {
  const generateQuestion = (digit) => {
    return (
      Math.floor(Math.random() * (10 ** digit - 10 ** (digit - 1))) +
      10 ** (digit - 1)
    ).toString();
  };

  const [question, setQuestion] = useState({
    digit: 4,
    name: generateQuestion(4),
    state: false,
    answer: "",
  });

  const handleChangedAnswer = (targetValue) => {
    const nowAnswer = targetValue;
    if (nowAnswer === question.name) {
      console.log("正解");
      collectAnswer();
    } else {
      setQuestion((props) => {
        return {
          digit: props.digit,
          name: props.name,
          state: nowAnswer === question.name,
          answer: nowAnswer,
        };
      });
    }
  };

  const collectAnswer = () => {
    console.log("正解後の処理");
    const name = generateQuestion(question.digit);
    setQuestion((props) => {
      return {
        digit: props.digit,
        name: name.toString(),
        state: true,
        answer: "",
      };
    });
  };

  const handleChangedDigit = (digitValue) => {
    setQuestion((props) => {
      return {
        digit: Number(digitValue),
        name: generateQuestion(Number(digitValue)).toString(),
        state: false,
        answer: "",
      };
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div>
          <TextField
            id="standard-basic"
            label="桁数"
            margin="normal"
            variant="filled"
            type="number"
            value={question.digit}
            onChange={(e) => handleChangedDigit(e.currentTarget.value)}
            InputProps={{
              style: { fontSize: 50, height: 150 },
            }}
            InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
            sx={{ display: "flex" }}
          />
        </div>
        <div>
          <Question name={question.name} />
        </div>
        <div>
          <Status state={question.state} />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="回答欄"
            margin="normal"
            variant="filled"
            value={question.answer}
            onChange={(e) => handleChangedAnswer(e.currentTarget.value)}
            InputProps={{
              style: { fontSize: 60, height: 200 },
            }}
            InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
            sx={{ display: "flex" }}
            fullWidth
          />
        </div>
      </main>
    </div>
  );
}

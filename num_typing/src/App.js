import "./App.css";
import React, { useState } from "react";
import CollectSound from "./util/Quiz-Correct_Answer.mp3";
import WrongSound from "./util/Quiz-Wrong_Buzzer.mp3";
import Header from "./components/modules/Header";
import Question from "./components/modules/Question";
import Status from "./components/modules/Status";
import { TextField } from "@mui/material";

function ViewDigit({ digit, onDigitChange }) {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="桁数"
        margin="normal"
        variant="filled"
        type="number"
        value={digit}
        onChange={(e) => onDigitChange(e.currentTarget.value)}
        InputProps={{
          style: { fontSize: 50, height: 150 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
      />
    </div>
  );
}

function ViewQuestion({ question }) {
  return (
    <div>
      <Question name={question} />
    </div>
  );
}

function ViewState({ states }) {
  const isCorrect = states.name === states.answer;
  return (
    <div>
      <Status state={isCorrect} />
    </div>
  );
}

function ViewAnswer({ answer, onAnswerChange }) {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="回答欄"
        margin="normal"
        variant="filled"
        value={answer}
        onChange={(e) => onAnswerChange(e.currentTarget.value)}
        InputProps={{
          style: { fontSize: 60, height: 200 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
        fullWidth
      />
    </div>
  );
}

function NumTyping() {
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

  const handleChangedDigit = (digitValue) => {
    setQuestion(() => {
      return {
        digit: Number(digitValue),
        name: generateQuestion(Number(digitValue)).toString(),
        state: false,
        answer: "",
      };
    });
  };

  const handleChangedAnswer = (targetValue) => {
    const nowAnswer = targetValue;
    if (nowAnswer === question.name) {
      console.log("正解");
      collectAnswer();
    } else if (nowAnswer !== "" && question.name.indexOf(nowAnswer) !== 0) {
      playWrongSound();
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
    playCollectSound();
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

  const playCollectSound = () => {
    const collectSound = new Audio(CollectSound);
    collectSound.play();
  };

  const playWrongSound = () => {
    const collectSound = new Audio(WrongSound);
    collectSound.play();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <ViewDigit digit={question.digit} onDigitChange={handleChangedDigit} />
        <ViewQuestion question={question.name} />
        <ViewState states={question} />
        <ViewAnswer
          answer={question.answer}
          onAnswerChange={handleChangedAnswer}
        />
      </main>
    </div>
  );
}

export default function App() {
  return <NumTyping />;
}

import "./App.css";
import React, { useState } from "react";
import Header from "./components/modules/Header";
import Question from "./components/modules/Question";
import Status from "./components/modules/Status";
import { TextField } from "@mui/material";

export default function App() {
  const [question, setQuestion] = useState({
    name: "456",
    state: false,
    answer: "",
  });
  const handleChangedAnswer = (e) => {
    const nowAnswer = e;
    if (nowAnswer === question.name) {
      console.log("正解");
    }
    setQuestion((props) => {
      return {
        name: props.name,
        state: nowAnswer === question.name,
        answer: nowAnswer,
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

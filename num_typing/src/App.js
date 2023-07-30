import "./App.css";
import React, { useState } from "react";
import CollectSound from "./util/Quiz-Correct_Answer.mp3";
import WrongSound from "./util/Quiz-Wrong_Buzzer.mp3";
import Header from "./components/modules/Header";
import Question from "./components/modules/Question";
import Status from "./components/modules/Status";
import Grid from '@mui/material/Unstable_Grid2';
import { TextField, Container, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function App() {
  /**
   * 指定した桁数のランダムな値を生成する
   * @param {Number} digit
   * @returns 指定桁の数値(String型)
   */
  const generateQuestion = (digit) => {
    return (
      Math.floor(Math.random() * (10 ** digit - 10 ** (digit - 1))) +
      10 ** (digit - 1)
    ).toString();
  };

  /**
   * 問題を管理するState
   */
  const [question, setQuestion] = useState({
    digit: 4,
    name: generateQuestion(4),
    state: false,
    answer: "",
  });

  /**
   * 回答が入力されて値が変わった際の処理
   * @param {*} targetValue
   */
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

  /**
   * 正解の時の処理
   * 次の問題を表示する部分も含む
   */
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

  /**
   * 正解時の音を再生する
   */
  const playCollectSound = () => {
    const collectSound = new Audio(CollectSound);
    collectSound.play();
  };

  /**
   * 入力を間違えた際の音を再生する
   */
  const playWrongSound = () => {
    const collectSound = new Audio(WrongSound);
    collectSound.play();
  };

  /**
   * 桁数の指定を変更した際の処理
   * @param {*} digitValue
   */
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <header className="App-header">
        <Header />
      </header>
      <Box
        sx={{
          height: "80vh",
          backgroundColor: "#EEEEEE",
          fontSize: 60,
          width: "100%",
        }}
      >
        <Grid className="App" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={12}>
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
              sx={{ display: "flex", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={8} sx={{ backgroundColor: "pink" }}>
            {/* <Question name={question.name} /> */}
            <Item>test</Item>
          </Grid>
          <Grid item xs={12} md={4} sx={{ backgroundColor: "green" }}>
            {/* <Status state={question.state} /> */}
            <Item>test2</Item>
          </Grid>
          <Container fixed>
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
          </Container>
        </Grid>
      </Box>
    </>
  );
}

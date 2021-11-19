import { Divider, Paper, Stack, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function QuizFinish() {
  const [firstSets, setFirstSets] = React.useState([]);
  const [secondSets, setSecondSets] = React.useState([]);
  const [thirdSets, setThirdSets] = React.useState([]);
  const [finalScore, setFinalScore] = React.useState(0);

  React.useEffect(() => {
    let mount = true;
    if (mount) {
      setFirstSets(JSON.parse(window.localStorage.getItem("_quiz_firstSets")));
      setSecondSets(
        JSON.parse(window.localStorage.getItem("_quiz_secondSets"))
      );
      setThirdSets(JSON.parse(window.localStorage.getItem("_quiz_thirdSets")));
    }
  }, []);

  function firstSetScoring(maxScore, score) {
    if (maxScore === 100) {
      return score === 0 ? 1 * 10 : score * 10;
    } else {
      return score === 0 ? 0 : 100 - score * 10;
    }
  }

  function secondSetScoring(questionNumber, answer) {
    if (questionNumber === 13) {
      if (answer === 0) {
        return 25;
      } else if (answer === 1) {
        return 50;
      } else if (answer === 2) {
        return 75;
      } else {
        return 100;
      }
    } else if (questionNumber === 14) {
      if (answer === 0) {
        return 25;
      } else if (answer === 1) {
        return -25;
      } else if (answer === 2) {
        return -50;
      } else if (answer === 3) {
        return -75;
      }
    } else if (questionNumber === 15) {
      if (answer === 0) {
        return 25;
      } else {
        return -25;
      }
    } else if (questionNumber === 16) {
      if (answer === 0) {
        return 10;
      } else if (answer === 1) {
        return 20;
      } else if (answer === 2) {
        return 30;
      } else if (answer === 3) {
        return 40;
      }
    } else if (questionNumber === 17) {
      if (answer === 0) {
        return 25;
      } else {
        return 0;
      }
    } else if (questionNumber === 18) {
      if (answer === 0) {
        return 25;
      } else {
        return 0;
      }
    } else if (questionNumber === 19) {
      if (answer === 0) {
        return 25;
      } else {
        return -10;
      }
    } else if (questionNumber === 20) {
      if (answer === 0) {
        return 25;
      } else {
        return -25;
      }
    } else if (questionNumber === 21) {
      if (answer === 0) {
        return 10;
      } else if (answer === 1) {
        return 10;
      } else if (answer === 2) {
        return -10;
      } else if (answer === 3) {
        return -20;
      } else if (answer === 4) {
        return -30;
      }
    } else if (questionNumber === 22) {
      if (answer === 0) {
        return -25;
      } else if (answer === 1) {
        return -10;
      } else if (answer === 2) {
        return 10;
      }
    }
  }

  function thirdSetScoring(maxScore, score) {
    if (maxScore === 100) {
      return score === 0 ? 1 * 10 : score * 10;
    } else {
      return score === 0 ? 0 : 100 - score * 10;
    }
  }

  React.useEffect(() => {
    firstSets.forEach((item) => {
      setFinalScore(
        (prevState) => prevState + firstSetScoring(item.max_score, item.answer)
      );
    });
    secondSets.forEach((item) => {
      setFinalScore(
        (prevState) =>
          prevState + secondSetScoring(item.question_number, item.answer)
      );
    });
    thirdSets.forEach((item) => {
      setFinalScore(
        (prevState) => prevState + thirdSetScoring(item.max_score, item.answer)
      );
    });
  }, [firstSets, secondSets, thirdSets]);
  console.log(finalScore);
  return (
    <Stack spacing={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold" fontFamily="monospace">
          Scoring
        </Typography>
        <Box>
          <Typography variant="h6" fontWeight="bold" fontFamily="monospace">
            Final Score: {finalScore}
          </Typography>
          <Typography
            variant="inherit"
            fontWeight="bold"
            fontFamily="monospace"
            textAlign="center"
          >
            {finalScore <= 1000
              ? "Lots of work to do but it's achivable"
              : finalScore > 1000 && finalScore <= 1200
              ? "In a good position now"
              : finalScore > 1200 && finalScore <= 1500
              ? "On a great path to growth"
              : finalScore > 1500 && finalScore <= 2210 && "Ready for Growth"}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Typography variant="button">First Set</Typography>
      </Box>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          {firstSets?.map((item) => {
            return (
              <Grid item xs={12} key={item.question_number}>
                <Paper elevation={2} sx={{ p: 1 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>
                        {item.question_number}.
                      </span>{" "}
                      {item.question}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Self Rating:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {item.answer === 0 ? 1 : item.answer}
                      </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Your Score:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {firstSetScoring(item.max_score, item.answer)}
                      </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Max Score:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {item.max_score}
                      </strong>
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Second Set */}
      {/* <Divider /> */}
      <Box>
        <Typography variant="button">Second Set</Typography>
      </Box>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          {secondSets?.map((item) => {
            return (
              <Grid item xs={12} key={item.question_number}>
                <Paper elevation={2} sx={{ p: 1 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>
                        {item.question_number}.
                      </span>{" "}
                      {item.question}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Answer:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {item.answer === 0
                          ? "A"
                          : item.answer === 1
                          ? "B"
                          : item.answer === 2
                          ? "C"
                          : item.answer === 3
                          ? "D"
                          : item.answer === 4 && "E"}
                        . {item.choices[item.answer]}
                      </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Your Score:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {secondSetScoring(item.question_number, item.answer) < 1
                          ? 0
                          : secondSetScoring(item.question_number, item.answer)}
                      </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Max Score:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {item.max_score}
                      </strong>
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Third Set */}
      <Box>
        <Typography variant="button">Third Set</Typography>
      </Box>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          {thirdSets?.map((item) => {
            return (
              <Grid item xs={12} key={item.question_number}>
                <Paper elevation={2} sx={{ p: 1 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>
                        {item.question_number}.
                      </span>{" "}
                      {item.question}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Self Rating:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {item.answer === 0 ? 1 : item.answer}
                      </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Your Score:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {thirdSetScoring(item.max_score, item.answer)}
                      </strong>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      // fontWeight="bold"
                      sx={{ color: "#007FFF" }}
                    >
                      <span style={{ color: "black" }}>Max Score:</span>{" "}
                      <strong style={{ color: "black" }}>
                        {item.max_score}
                      </strong>
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
}

export default QuizFinish;

import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const resultBoxStyles = {
  fontSize: "1.2em",
  marginTop: "1.5em",
};

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

    document.getElementById("thank-you-section").style.display = "block";
  }, []);

  function firstSetScoring(maxScore, score) {
    if (maxScore === 100) {
      return score === 0 ? 1 * 20 : score * 20;
    } else {
      return score === 0 ? 0 : 100 - score * 20;
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
      return score === 0 ? 1 * 20 : score * 20;
    } else {
      return score === 0 ? 0 : 100 - score * 20;
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

  const renderResult = (finalScore) => {
    if (finalScore <= 1200) {
      return (
        <Box sx={{ ...resultBoxStyles }}>
          <Typography variant="h3" textAlign="center" marginBottom={4}>
            Perfect Potential
          </Typography>
          <Box sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
            <Typography
              textAlign="center"
              fontFamily="monospace"
              fontWeight="bold"
              sx={{ color: "black", fontSize: 20 }}
            >
              Inside every seed of success is the potential for a great
              harvest—potential just like yours. We want to learn more about you
              and your business, and we know how to help—from the tools you need
              to the mindset you’ve been struggling to achieve. This could be
              the start of something awesome.
            </Typography>
          </Box>
        </Box>
      );
    } else if (finalScore > 1200 && finalScore <= 1500) {
      return (
        <Box sx={{ ...resultBoxStyles }}>
          <Typography variant="h3" textAlign="center" marginBottom={4}>
            Super Duo
          </Typography>
          <Box sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
            <Typography
              textAlign="center"
              fontFamily="monospace"
              fontWeight="bold"
              sx={{ color: "black", fontSize: 20 }}
            >
              You’ve got it down pretty good. You’re well-equipped, have the
              basics of a transformative mindset down, and you probably also
              have a great team dynamic going. You’ve got just about the right
              foundations in place, and Transformational Hub has everything you
              need to fill the gaps and grow like mad. It’s pretty uncanny.
            </Typography>
          </Box>
        </Box>
      );
    } else if (finalScore > 1500 && finalScore <= 2210) {
      return (
        <Box sx={{ ...resultBoxStyles }}>
          <Typography variant="h3" textAlign="center" marginBottom={4}>
            Dream Team
          </Typography>
          <Box sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
            <Typography
              textAlign="center"
              fontFamily="monospace"
              fontWeight="bold"
              sx={{ color: "black", fontSize: 20 }}
            >
              Wow! Your mindset is on point for growing your business, you have
              tools that you use effectively, and your company’s team and
              culture are always ready to thrive in your next challenge!
              Transformational Hub has provided businesses with the most
              effective tools, helping to polish their growth mindset and
              empower their employees on the road to transformation. We have a
              feeling you could be one of those businesses too.
            </Typography>
          </Box>
        </Box>
      );
    }
  };

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
        </Box>
      </Box>
      <Divider />
      {/* Insert Cut Here */}
      <div
        style={{
          backgroundImage: `url("https://transformhub.com.au/wp-content/uploads/2022/01/thub-confetti.gif")`,
          // width: "100%",
          // height: 500,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.5,
          maxWidth: 800,
        }}
      >
        <Box display="flex" justifyContent="center">
          <Box
            sx={
              {
                // position: "absolute",
                // top: 200,
                // left: "49%",
              }
            }
          >
            {/* <Box display="flex" justifyContent="center">
              <Typography variant="h5" fontWeight="bold" color="green">
                Awesome! You've successfully completed the quiz!
              </Typography>
            </Box> */}
            <Box
              display="flex"
              justifyContent="center"
              marginTop={4}
              marginBottom={5}
            >
              {renderResult(finalScore)}
            </Box>
          </Box>
        </Box>
      </div>
    </Stack>
  );
}

export default QuizFinish;

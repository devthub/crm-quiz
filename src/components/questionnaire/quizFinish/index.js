import { Divider, Stack, Typography, Button } from "@mui/material";
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

  const handleClick_ReTake = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  const renderResult = (finalScore) => {
    if (finalScore >= 1000 && finalScore <= 1200) {
      return (
        <Box>
          <Typography variant="h4" textAlign="center" marginBottom={4}>
            Perfect Potential
          </Typography>
          <Box width={600} sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
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
        <Box>
          <Typography variant="h4" textAlign="center" marginBottom={4}>
            Super Duo
          </Typography>
          <Box width={600} sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
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
        <Box marginTop={5}>
          <Typography variant="h3" textAlign="center" marginBottom={4}>
            Dream Team
          </Typography>
          <Box width={600} sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
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
          {/* <Typography
            variant="inherit"
            fontWeight="bold"
            fontFamily="monospace"
            textAlign="center"
          >
            {finalScore <= 1000
              ? "Lots of work to do but it's achievable"
              : finalScore > 1000 && finalScore <= 1200
              ? "In a good position now"
              : finalScore > 1200 && finalScore <= 1500
              ? "On a great path to growth"
              : finalScore > 1500 && finalScore <= 2210 && "Ready for Growth"}
          </Typography> */}
        </Box>
      </Box>
      <Divider />
      {/* Insert Cut Here */}
      <div
        style={{
          backgroundImage: `url("https://acegif.com/wp-content/gif/confetti-10.gif")`,
          height: 700,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.4,
        }}
      />
      <Box display="flex" justifyContent="center">
        <Box
          sx={{
            position: "absolute",
            top: 200,
            // left: "49%",
          }}
        >
          <Typography variant="h5" fontWeight="bold" color="green">
            Awesome! You've successfully completed the quiz!
          </Typography>
          <Box display="flex" justifyContent="center" marginTop={4}>
            {renderResult(finalScore)}
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="success"
          onClick={handleClick_ReTake}
        >
          Re-Take Quiz
        </Button>
      </Box>
    </Stack>
  );
}

export default QuizFinish;

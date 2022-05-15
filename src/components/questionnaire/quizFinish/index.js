import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  FIVE_POINT_LIKERT_SCALE,
  FIVE_POINT_PERCENTAGE_SCALE,
  successTHubButtonStyles,
} from "../../../App";

const resultBoxStyles = {
  fontSize: "1.2em",
  marginTop: "1.5em",
};

function ShowAnswersDialog({
  onlyShowFirstSet,
  onlyShowSecondSet,
  onlyShowThirdSet,
  open,
  handleClose,
  scroll,
}) {
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const [firstSets, setFirstSets] = React.useState([]);
  const [secondSets, setSecondSets] = React.useState([]);
  const [thirdSets, setThirdSets] = React.useState([]);

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

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="500px"
      >
        <DialogTitle id="scroll-dialog-title">Review Answers</DialogTitle>

        <DialogContent dividers={scroll === "paper"}>
          {onlyShowFirstSet && (
            <>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                  Mindset to GROW and SCALE
                </Typography>
              </Box>
              <Divider />
              {firstSets?.map((item, index) => {
                return (
                  <Stack key={`_quiz_firstSets:${index}`}>
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="caption" fontSize={15}>
                        {item.question_number}. {item.question}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="caption" fontSize={15}>
                        Rating:{" "}
                        <strong style={{ color: "black" }}>
                          {item.use_percentage
                            ? FIVE_POINT_PERCENTAGE_SCALE[
                                parseInt(item.answer) - 1
                              ]
                            : FIVE_POINT_LIKERT_SCALE[
                                parseInt(item.answer) - 1
                              ]}
                        </strong>
                      </Typography>
                    </Box>
                    <Divider />
                  </Stack>
                );
              })}
            </>
          )}

          {onlyShowSecondSet && (
            <>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                  Using Tools to effectively SCALE AND GROW
                </Typography>
              </Box>
              <Divider />
              {secondSets?.map((item, index) => {
                return (
                  <Stack key={`_quiz_secondSets:${index}`}>
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="caption" fontSize={15}>
                        {item.question_number}. {item.question}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="caption" fontSize={15}>
                        Answer:{" "}
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
                          {". "}
                          {item.choices[item.answer]}
                        </strong>
                      </Typography>
                    </Box>
                    <Divider />
                  </Stack>
                );
              })}
            </>
          )}

          {onlyShowThirdSet && (
            <>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                  Team and Culture for Growth
                </Typography>
              </Box>
              <Divider />
              {thirdSets?.map((item, index) => {
                return (
                  <Stack key={`_quiz_thirdSets:${index}`}>
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="caption" fontSize={15}>
                        {item.question_number}. {item.question}
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 1 }}>
                      <Typography variant="caption" fontSize={15}>
                        Rating:{" "}
                        <strong style={{ color: "black" }}>
                          {item.use_percentage
                            ? FIVE_POINT_PERCENTAGE_SCALE[
                                parseInt(item.answer) - 1
                              ]
                            : FIVE_POINT_LIKERT_SCALE[
                                parseInt(item.answer) - 1
                              ]}
                        </strong>
                      </Typography>
                    </Box>
                    <Divider />
                  </Stack>
                );
              })}
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function QuizFinish() {
  const [firstSets, setFirstSets] = React.useState([]);
  const [secondSets, setSecondSets] = React.useState([]);
  const [thirdSets, setThirdSets] = React.useState([]);

  const [finalScore, setFinalScore] = React.useState(0);
  const [firstSetScore, setFirstSetScore] = React.useState(0);
  const [secondSetScore, setSecondSetScore] = React.useState(0);
  const [thirdSetScore, setThirdSetScore] = React.useState(0);

  const [onlyShowFirstSet, setOnlyShowFirstSet] = React.useState(false);
  const [onlyShowSecondSet, setOnlyShowSecondSet] = React.useState(false);
  const [onlyShowThirdSet, setOnlyShowThirdSet] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpenFirstSetDialog = (scrollType) => () => {
    setOpen(true);
    setOnlyShowFirstSet(true);
    setOnlyShowSecondSet(false);
    setOnlyShowThirdSet(false);
    setScroll(scrollType);
  };

  const handleClickOpenSecondSetDialog = (scrollType) => () => {
    setOpen(true);
    setOnlyShowFirstSet(false);
    setOnlyShowSecondSet(true);
    setOnlyShowThirdSet(false);
    setScroll(scrollType);
  };

  const handleClickOpenThirdSetDialog = (scrollType) => () => {
    setOpen(true);
    setOnlyShowFirstSet(false);
    setOnlyShowSecondSet(false);
    setOnlyShowThirdSet(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOnlyShowFirstSet(false);
    setOnlyShowSecondSet(false);
    setOnlyShowThirdSet(false);
    setOpen(false);
  };

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
    document.getElementById("intro-section").style.display = "none";
    document.getElementById("thank-you-section2").style.display = "block";
    document.getElementById("intro-section2").style.display = "none";
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
      setFirstSetScore(
        (prev) => prev + firstSetScoring(item.max_score, item.answer)
      );
      setFinalScore(
        (prevState) => prevState + firstSetScoring(item.max_score, item.answer)
      );
    });

    secondSets.forEach((item) => {
      setSecondSetScore(
        (prev) => prev + secondSetScoring(item.question_number, item.answer)
      );
      setFinalScore(
        (prevState) =>
          prevState + secondSetScoring(item.question_number, item.answer)
      );
    });

    thirdSets.forEach((item) => {
      setThirdSetScore(
        (prev) => prev + thirdSetScoring(item.max_score, item.answer)
      );
      setFinalScore(
        (prevState) => prevState + thirdSetScoring(item.max_score, item.answer)
      );
    });
  }, [firstSets, secondSets, thirdSets]);

  const ResultCard = ({
    title,
    description,
    finalScore,
    onOpenDialogPress,
  }) => {
    return (
      <Card
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent style={{ marginBottom: "auto" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <span style={{ fontSize: "1.5rem" }}>Final Score: </span>
            <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {finalScore}
            </span>
          </Typography>
          <Typography variant="body1" stryle={{ fontSize: "2rem" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            variant="outlined"
            onClick={onOpenDialogPress("paper")}
          >
            Show My Answers
          </Button>
        </CardActions>
      </Card>
    );
  };

  const renderEachSectionResult = () => {
    const computeFirstSetPercentage = () => {
      const firstSet100PercentScore = 1160;
      return firstSetScore
        ? Number((firstSetScore / firstSet100PercentScore) * 100).toFixed(1)
        : 0;
    };

    const computeSecondSetPercentage = () => {
      const secondSet100PercentScore = 310;
      return secondSetScore
        ? Number((secondSetScore / secondSet100PercentScore) * 100).toFixed(1)
        : 0;
    };

    const computeThirdSetPercentage = () => {
      const thirdSet100PercentScore = 980;
      return thirdSetScore
        ? Number((thirdSetScore / thirdSet100PercentScore) * 100).toFixed(1)
        : 0;
    };

    return (
      <Grid container spacing={1}>
        <Grid item xs={12} lg={4}>
          <ResultCard
            title="Mindset to GROW and SCALE"
            description="This section looks into the mindset you’ve adopted in your
                  business and in life."
            finalScore={`${computeFirstSetPercentage()}%`}
            onOpenDialogPress={handleClickOpenFirstSetDialog}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ResultCard
            title="Using Tools to effectively SCALE AND GROW"
            description="How effective you are at putting your
            mindset into practice."
            finalScore={`${computeSecondSetPercentage()}%`}
            onOpenDialogPress={handleClickOpenSecondSetDialog}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ResultCard
            title="Team and Culture for Growth"
            description="This section looks into the mindset you’ve adopted in your
            business and in life."
            finalScore={`${computeThirdSetPercentage()}%`}
            onOpenDialogPress={handleClickOpenThirdSetDialog}
          />
        </Grid>
      </Grid>
    );
  };

  const renderResult = (finalScore) => {
    if (finalScore <= 1200) {
      return (
        <Box sx={{ ...resultBoxStyles }}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            fontFamily="monospace"
            marginBottom={1}
          >
            Overall Score: {finalScore} | {`${computeFinalResultPercentage()}%`}
          </Typography>
          <Typography variant="h3" textAlign="center" marginBottom={3}>
            Perfect Potential
          </Typography>
          <Box sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
            <Typography
              textAlign="center"
              fontFamily="monospace"
              fontWeight="bold"
              sx={{
                color: "#54595f",
                fontSize: 21,
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
              }}
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
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            fontFamily="monospace"
            marginBottom={1}
          >
            Overall Score: {finalScore} | {`${computeFinalResultPercentage()}%`}
          </Typography>
          <Typography variant="h3" textAlign="center" marginBottom={3}>
            Super Duo
          </Typography>
          <Box sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
            <Typography
              textAlign="center"
              fontFamily="monospace"
              fontWeight="bold"
              sx={{
                color: "#54595f",
                fontSize: 21,
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
              }}
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
    } else if (finalScore > 1500 && finalScore <= 2450) {
      return (
        <Box sx={{ ...resultBoxStyles }}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            fontFamily="monospace"
            marginBottom={1}
          >
            Overall Score: {finalScore} | {`${computeFinalResultPercentage()}%`}
          </Typography>
          <Typography variant="h3" textAlign="center" marginBottom={3}>
            Dream Team
          </Typography>
          <Box sx={{ backgroundColor: "rgb(255,255,255, 0.6)" }}>
            <Typography
              textAlign="center"
              fontFamily="monospace"
              fontWeight="bold"
              sx={{
                color: "#54595f",
                fontSize: 21,
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
              }}
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

  const computeFinalResultPercentage = () => {
    const final100PercentScore = 2450;
    return finalScore
      ? Number((finalScore / final100PercentScore) * 100).toFixed(1)
      : 0;
  };

  return (
    <>
      <ShowAnswersDialog
        open={open}
        scroll={scroll}
        handleClose={handleClose}
        onlyShowFirstSet={onlyShowFirstSet}
        onlyShowSecondSet={onlyShowSecondSet}
        onlyShowThirdSet={onlyShowThirdSet}
      />

      <Stack spacing={2}>
        <div
          style={{
            // backgroundImage: `url("https://transformhub.com.au/wp-content/uploads/2022/01/thub-confetti.gif")`,
            // width: "100%",
            // height: 500,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // opacity: 0.5,
            maxWidth: 800,
          }}
        >
          <Box display="flex" justifyContent="center">
            <Box>
              <Box
                display="flex"
                justifyContent="center"
                marginTop={1}
                marginBottom={5}
              >
                {renderResult(finalScore)}
              </Box>
            </Box>
          </Box>
        </div>

        <Divider />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {renderEachSectionResult()}
        </Box>
        <Divider />

        <Box alignItems="center" justifyContent="center">
          <Typography
            variant="h3"
            textAlign="center"
            marginBottom={3}
            marginTop={4}
          >
            You’re ready to take your business to new heights!
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              color: "#54595f",
              fontSize: 21,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
            }}
            marginBottom={3}
            variant="body1"
          >
            Well done!
            <br /> You’ve been off to a solid start, but now it’s time to really
            take charge of the direction your business will take. Boosting your
            CRM will be a fantastic first step for that. If you’re on board and
            want to improve your business growth, why not book a strategy call
            with us? Our expert team will guide you through the essential tools
            and empowering mindset that will help you like they did hundreds of
            other business owners!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginTop={5}>
          <Button
            variant="contained"
            style={{ ...successTHubButtonStyles, marginBottom: "3rem" }}
            href="https://msgsndr.com/widget/booking/7SpCYaNJVfyQ9SCKGwW0"
            target="_blank"
            rel="noopener"
          >
            BOOK A STRATEGY CALL
          </Button>
        </Box>
      </Stack>
    </>
  );
}

export default QuizFinish;

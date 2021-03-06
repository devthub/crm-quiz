import { Typography, Button, Tooltip, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RefreshIcon from "@mui/icons-material/Refresh";
import FirstSets from "./components/questionnaire/firstSets";
import SecondSets from "./components/questionnaire/secondSets";
import ThirdSets from "./components/questionnaire/thirdSets";
import QuizFinish from "./components/questionnaire/quizFinish";
import ScrollDialog from "./common/dialog";
import "./index.css";
import { questionnaire } from "./initialState/questionnaire";

export const successTHubButtonStyles = {
  fontFamily: '"Montserrat", Sans-serif',
  fontWeight: 700,
  fontSize: "1em",
  textTransform: "uppercase",
  lineHeight: "1.2em",
  letterSpacing: "0.6px",
  fill: "#FFFFFF",
  color: "#FFFFFF",
  backgroundColor: "#80BC00",
  boxShadow: "0px 1px 1px 0.5px rgb(0 0 0 / 30%)",
  padding: "1.2em",
};

export const handleClick_ReTake = () => {
  window.localStorage.removeItem("_quiz_step");
  window.localStorage.removeItem("_quiz_firstSets");
  window.localStorage.removeItem("_quiz_secondSets");
  window.localStorage.removeItem("_quiz_thirdSets");
  window.location.reload();
};

export const FIVE_POINT_LIKERT_SCALE = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

export const FIVE_POINT_PERCENTAGE_SCALE = ["20%", "40%", "60%", "80%", "100%"];

function App() {
  const [step, setStep] = React.useState(0);
  const [firstSets, setFirstSets] = React.useState([]);
  const [secondSets, setSecondSets] = React.useState([]);
  const [thirdSets, setThirdSets] = React.useState([]);

  React.useEffect(() => {
    let steps = parseInt(window.localStorage.getItem("_quiz_step"));
    let firstSets = JSON.parse(window.localStorage.getItem("_quiz_firstSets"));
    let secondSets = JSON.parse(
      window.localStorage.getItem("_quiz_secondSets")
    );
    let thirdSets = JSON.parse(window.localStorage.getItem("_quiz_thirdSets"));

    setStep(!steps ? 0 : steps);
    setFirstSets(!firstSets ? questionnaire.slice(0, 12) : firstSets);
    setSecondSets(!secondSets ? questionnaire.slice(12, 22) : secondSets);
    setThirdSets(!thirdSets ? questionnaire.slice(22, 32) : thirdSets);
  }, []);

  const handleNext = () => {
    setStep(parseInt(step) + 1);
    window.localStorage.setItem("_quiz_step", step + 1);
    window.localStorage.setItem("_quiz_firstSets", JSON.stringify(firstSets));
    window.localStorage.setItem("_quiz_secondSets", JSON.stringify(secondSets));
    window.localStorage.setItem("_quiz_thirdSets", JSON.stringify(thirdSets));
  };
  const handlePrevious = () => {
    setStep(parseInt(step) - 1);
    window.localStorage.setItem("_quiz_firstSets", step + 1);
    window.localStorage.setItem("_quiz_firstSets", JSON.stringify(firstSets));
    window.localStorage.setItem("_quiz_secondSets", JSON.stringify(secondSets));
    window.localStorage.setItem("_quiz_thirdSets", JSON.stringify(thirdSets));
  };

  const handleChangeFirstSets = (e) => {
    firstSets[step - 1].answer = e.target.value;
    setFirstSets((prevState) => [...prevState]);
  };

  const handleChangeThirdSets = (e) => {
    thirdSets[step - 25].answer = e.target.value;
    setThirdSets((prevState) => [...prevState]);
  };

  const handleSelect = (index) => {
    if (step >= 14) {
      secondSets[step - 14].answer = index;
      setSecondSets((prevState) => [...prevState]);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {firstSets.length === 0 ? (
          <div>Loading</div>
        ) : (
          <Box sx={{ width: 800, minHeight: 400 }}>
            {step === 0 ? (
              <Box style={{ marginTop: 50 }}>
                <Typography
                  variant="h3"
                  sx={{ color: "gray", fontSize: 30 }}
                  textAlign="center"
                  marginBottom={1}
                >
                  DO YOU HAVE THE MINDSET TO{" "}
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    GROW
                  </span>{" "}
                  <span style={{ color: "gray" }}>AND </span>
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    SCALE
                  </span>
                  <span style={{ color: "gray" }}> ?</span>
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: 24 }}
                  textAlign="center"
                  marginBottom={2}
                >
                  This section looks into the mindset you???ve adopted in your
                  business and in life. Rate each item on a scale of 1 to 5,
                  with 1 as strongly disagree and 5 as strongly agree.
                </Typography>

                <Divider />
                <Box sx={{ p: 5, display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setStep(1)}
                    style={{ ...successTHubButtonStyles }}
                  >
                    Start quiz <ArrowForwardIcon />
                  </Button>
                </Box>
              </Box>
            ) : step >= 1 && step <= 12 ? (
              <FirstSets
                questionnaire={firstSets}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                step={step}
                handleChange={handleChangeFirstSets}
                value={firstSets[step - 1]?.answer}
              />
            ) : step === 13 ? (
              <Box style={{ marginTop: 50 }}>
                <Typography
                  variant="h3"
                  sx={{ color: "gray", fontSize: 30 }}
                  textAlign="center"
                  marginBottom={1}
                >
                  DO YOU HAVE THE TOOLS TO AND USE THEM EFFECTIVELY TO
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    {" "}
                    SCALE
                  </span>
                  <span style={{ color: "gray" }}> AND </span>
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    GROW
                  </span>
                  <span style={{ color: "gray" }}> ?</span>
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: 24 }}
                  textAlign="center"
                  marginBottom={2}
                >
                  Now it???s time to see how effective you are at putting your
                  mindset into practice. Each item in this section varies in
                  measuring your answer in order to gain a more accurate
                  insight.
                </Typography>

                <Divider />
                <Box
                  sx={{
                    p: 5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Tooltip title="Go Back" placement="top">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handlePrevious}
                      style={{ ...successTHubButtonStyles }}
                    >
                      <ArrowBackIcon /> BACK
                    </Button>
                  </Tooltip>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleNext}
                    style={{ ...successTHubButtonStyles }}
                  >
                    Continue quiz <ArrowForwardIcon />
                  </Button>
                </Box>
              </Box>
            ) : step > 13 && step <= 23 ? (
              <SecondSets
                questionnaire={secondSets}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                step={step}
                handleSelect={handleSelect}
              />
            ) : step === 24 ? (
              <Box style={{ marginTop: 50 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "gray", fontSize: 30 }}
                  textAlign="center"
                  marginBottom={1}
                >
                  DO YOU HAVE A TEAM AND CULTURE FOR GROWTH?
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: 24 }}
                  textAlign="center"
                  marginBottom={2}
                >
                  This section looks into the mindset you???ve adopted in your
                  business and in life. Rate each item on a scale of 1 to 5,
                  with 1 as strongly disagree and 5 as strongly agree.
                </Typography>

                <Divider />
                <Box
                  sx={{
                    p: 5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Tooltip title="Go Back" placement="top">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handlePrevious}
                      style={{ ...successTHubButtonStyles }}
                    >
                      <ArrowBackIcon /> BACK
                    </Button>
                  </Tooltip>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleNext}
                    style={{ ...successTHubButtonStyles }}
                  >
                    Continue quiz <ArrowForwardIcon />
                  </Button>
                </Box>
              </Box>
            ) : step > 24 && step <= 34 ? (
              <ThirdSets
                questionnaire={thirdSets}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                step={step}
                handleChange={handleChangeThirdSets}
                handleSelect={handleSelect}
                value={thirdSets[step - 25]?.answer}
              />
            ) : step === 35 ? (
              <Box style={{ marginTop: 140 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "gray", fontSize: 30 }}
                  textAlign="center"
                  marginBottom={3}
                >
                  IF YOU ARE SURE WITH YOUR ANSWERS PLEASE CLICK FINISH
                </Typography>
                <Divider />
                <Box
                  sx={{
                    p: 5,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Tooltip title="Go Back" placement="top">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handlePrevious}
                      style={{ ...successTHubButtonStyles }}
                    >
                      <ArrowBackIcon /> BACK
                    </Button>
                  </Tooltip>
                  <ScrollDialog />
                  <Button
                    variant="contained"
                    color="success"
                    onClick={handleNext}
                    style={{ ...successTHubButtonStyles }}
                  >
                    FINISH
                  </Button>
                </Box>
              </Box>
            ) : (
              <QuizFinish />
            )}
          </Box>
        )}
      </Box>

      {step >= 1 && (
        <Box display="flex" justifyContent="center" marginTop={5}>
          <Button
            variant="contained"
            color="success"
            onClick={handleClick_ReTake}
            style={{ ...successTHubButtonStyles }}
          >
            Re-Take Quiz <RefreshIcon />
          </Button>
        </Box>
      )}
    </>
  );
}

export default App;

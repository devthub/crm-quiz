import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography, Box, Stack, Divider } from "@mui/material";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen("paper")}
      >
        Review my Answers
      </Button>
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
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box sx={{ mt: 1, mb: 2 }}>
              <Typography variant="button" fontWeight="bold">
                First Set of Questions
              </Typography>
            </Box>
            <Divider />
            {firstSets?.map((item) => {
              return (
                <Stack>
                  <Box>
                    <Typography variant="caption" color="#007FFF">
                      {item.question_number}.{item.question}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">
                      Rating:{" "}
                      <strong style={{ color: "black" }}>{item.answer}</strong>
                    </Typography>
                  </Box>
                  <Divider />
                </Stack>
              );
            })}
            <Box sx={{ mt: 5, mb: 2 }}>
              <Typography variant="button" fontWeight="bold">
                Second Set of Questions
              </Typography>
            </Box>
            <Divider />
            {secondSets?.map((item) => {
              return (
                <Stack>
                  <Box>
                    <Typography variant="caption" color="#007FFF">
                      {item.question_number}.{item.question}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">
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
            <Box sx={{ mt: 5, mb: 2 }}>
              <Typography variant="button" fontWeight="bold">
                Third Set of Questions
              </Typography>
            </Box>
            <Divider />
            {thirdSets?.map((item) => {
              return (
                <Stack>
                  <Box>
                    <Typography variant="caption" color="#007FFF">
                      {item.question_number}.{item.question}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">
                      Rating:{" "}
                      <strong style={{ color: "black" }}>{item.answer}</strong>
                    </Typography>
                  </Box>
                  <Divider />
                </Stack>
              );
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Done</Button>
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

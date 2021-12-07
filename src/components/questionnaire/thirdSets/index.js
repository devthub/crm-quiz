import {
  Button,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DiscreteSliderSteps from "../../../common/slider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import MultipleChoice from "../../common/multipleChoice";

function ThirdSets({
  step,
  handleNext,
  handlePrevious,
  handleChange,
  value,
  questionnaire,
}) {
  return (
    <Stack spacing={2}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography color="gray" variant="button">
          Question {step - 2}
        </Typography>
        <Typography color="GrayText" variant="button">
          Rate yourself
          <Typography variant="button">
            <strong> ({value})</strong>
          </Typography>
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 5 }}>
        <Typography color="gray" variant="h6" textAlign="center">
          {questionnaire[step - 25]?.question}
        </Typography>
      </Box>
      <Box sx={{ p: 5 }}>
        <DiscreteSliderSteps handleChange={handleChange} value={value} />
      </Box>
      <Box
        style={{
          display: "flex",
          marginTop: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {step > 1 ? (
          // <Tooltip title="Go Back" placement="top">
          //   <IconButton onClick={handlePrevious} color="primary">
          //     <ArrowBackIcon />
          //   </IconButton>
          // </Tooltip>
          <Tooltip title="Previous Question" placement="top">
            <Button
              variant="contained"
              color="success"
              onClick={handlePrevious}
            >
              <ArrowBackIcon />
            </Button>
          </Tooltip>
        ) : (
          <div />
        )}
        {questionnaire[step - 25]?.answer !== 0 && (
          // <Tooltip title="Next" placement="top">
          //   <IconButton onClick={handleNext} color="primary">
          //     <ArrowForwardIcon />
          //   </IconButton>
          // </Tooltip>
          <Tooltip title="Next Question" placement="top">
            <Button variant="contained" color="success" onClick={handleNext}>
              <ArrowForwardIcon />
            </Button>
          </Tooltip>
        )}
      </Box>
    </Stack>
  );
}

export default ThirdSets;

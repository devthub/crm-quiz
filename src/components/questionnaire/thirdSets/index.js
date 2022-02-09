import { Button, Stack, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DiscreteSliderSteps from "../../../common/slider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { successTHubButtonStyles } from "../../../App";

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
      <Box sx={{ p: 5 }}>
        <Typography
          color="gray"
          variant="h3"
          textAlign="center"
          fontSize={"3rem"}
        >
          {questionnaire[step - 25]?.question}
        </Typography>
      </Box>
      <Box sx={{ p: 5 }}>
        <DiscreteSliderSteps handleChange={handleChange} value={value} />
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {step > 1 ? (
          <Tooltip title="Previous Question" placement="top">
            <Button
              variant="contained"
              color="success"
              onClick={handlePrevious}
              style={{ ...successTHubButtonStyles }}
            >
              <ArrowBackIcon /> BACK
            </Button>
          </Tooltip>
        ) : (
          <div />
        )}
        {questionnaire[step - 25]?.answer !== 0 && (
          <Tooltip title="Next Question" placement="top">
            <Button
              variant="contained"
              color="success"
              onClick={handleNext}
              style={{ ...successTHubButtonStyles }}
            >
              NEXT <ArrowForwardIcon />
            </Button>
          </Tooltip>
        )}
      </Box>
    </Stack>
  );
}

export default ThirdSets;

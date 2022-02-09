import * as React from "react";
import Box from "@mui/material/Box";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { FIVE_POINT_LIKERT_SCALE } from "../../App";

const radioLabelStyles = {
  fontSize: "2rem",
};

export default function DiscreteSliderSteps({ handleChange, value }) {
  const [isOnMobileView, setIsOnMobileView] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOnMobileView(true);
    } else {
      setIsOnMobileView(false);
    }
  }, [value]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <FormControl>
          {/* <FormLabel id="mindset-to-grow-and-scale">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="mindset-to-grow-and-scale"
            defaultValue={"0"}
            name="radio-buttons-group"
            value={value}
            onChange={handleChange}
            row={isOnMobileView ? false : true}
          >
            <FormControlLabel
              labelPlacement={isOnMobileView ? "end" : "top"}
              value={"1"}
              control={<Radio />}
              label={
                <Typography variant="h3" style={{ ...radioLabelStyles }}>
                  {FIVE_POINT_LIKERT_SCALE[0]}
                </Typography>
              }
            />

            <FormControlLabel
              labelPlacement={isOnMobileView ? "end" : "top"}
              value={"2"}
              control={<Radio />}
              label={
                <Typography variant="h3" style={{ ...radioLabelStyles }}>
                  {FIVE_POINT_LIKERT_SCALE[1]}
                </Typography>
              }
            />

            <FormControlLabel
              labelPlacement={isOnMobileView ? "end" : "top"}
              value={"3"}
              control={<Radio />}
              label={
                <Typography variant="h3" style={{ ...radioLabelStyles }}>
                  {FIVE_POINT_LIKERT_SCALE[2]}
                </Typography>
              }
            />

            <FormControlLabel
              labelPlacement={isOnMobileView ? "end" : "top"}
              value={"4"}
              control={<Radio />}
              label={
                <Typography variant="h3" style={{ ...radioLabelStyles }}>
                  {FIVE_POINT_LIKERT_SCALE[3]}
                </Typography>
              }
            />

            <FormControlLabel
              labelPlacement={isOnMobileView ? "end" : "top"}
              value={"5"}
              control={<Radio />}
              label={
                <Typography variant="h3" style={{ ...radioLabelStyles }}>
                  {FIVE_POINT_LIKERT_SCALE[4]}
                </Typography>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 10,
    label: "10",
  },
];

export default function DiscreteSliderSteps({ handleChange, value }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Slider
        aria-label="Small steps"
        defaultValue={1}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        min={1}
        max={10}
        valueLabelDisplay="auto"
        value={value || 0}
        onChange={handleChange}
      />
    </Box>
  );
}

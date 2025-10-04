"use client";
import { Box, Button } from "@mui/material";

export default function WizardNavigation({
  onBack,
  onNext,
  onSubmit,
  isLastStep,
  isDisabled,
}) {
  const disabled = isDisabled();
  return (
    <Box display="flex" justifyContent="space-between" mt={2}>
      {onBack && (
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
      )}
      {isLastStep ? (
        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      ) : (
        <Button variant="contained" onClick={onNext} disabled={disabled}>
          Next
        </Button>
      )}
    </Box>
  );
}

import { Box, Typography } from "@mui/material";

export default function Step4Review({ data }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Step 4 - Review & Submit
      </Typography>
      <Typography variant="body1">
        <b>Title:</b> {data.title}
      </Typography>
      <Typography variant="body1">
        <b>Author:</b> {data.author}
      </Typography>
      <Typography variant="body1">
        <b>Summary:</b> {data.summary}
      </Typography>
      <Typography variant="body1">
        <b>Category:</b> {data.category}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        <b>Content:</b>
      </Typography>
      <Typography variant="body2">{data.content}</Typography>
    </Box>
  );
}

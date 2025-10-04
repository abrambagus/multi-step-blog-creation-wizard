import { Box, TextField, Typography } from "@mui/material";

export default function Step3Content({ data, onChange }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Step 3 - Blog Content
      </Typography>
      <TextField
        label="Blog Content"
        value={data.content}
        onChange={(e) => onChange("content", e.target.value)}
        fullWidth
        multiline
        rows={6}
        margin="normal"
        required
      />
    </Box>
  );
}

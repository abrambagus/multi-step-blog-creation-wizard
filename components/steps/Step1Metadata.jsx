"use client";
import { Box, TextField, Typography } from "@mui/material";

export default function Step1Metadata({ data, onChange }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Step 1 - Blog Metadata
      </Typography>
      <TextField
        label="Blog Title"
        value={data.title}
        onChange={(e) => onChange("title", e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Author Name"
        value={data.author}
        onChange={(e) => onChange("author", e.target.value)}
        fullWidth
        margin="normal"
        required
      />
    </Box>
  );
}

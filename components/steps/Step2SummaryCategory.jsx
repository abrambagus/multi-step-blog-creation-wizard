"use client";
import { Box, Typography, MenuItem, TextField } from "@mui/material";

const categories = ["Tech", "Lifestyle", "Business"];

export default function Step2SummaryCategory({ data, onChange }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Step 2 - Blog Summary & Category
      </Typography>
      <TextField
        label="Blog Summary"
        value={data.summary}
        onChange={(e) => onChange("summary", e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        select
        label="Category"
        value={data.category}
        onChange={(e) => onChange("category", e.target.value)}
        fullWidth
        margin="normal"
        required
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

"use client";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          My Blog
        </Typography>
        <Button color="inherit" onClick={() => router.push("/create")}>
          Create New Post
        </Button>
      </Toolbar>
    </AppBar>
  );
}

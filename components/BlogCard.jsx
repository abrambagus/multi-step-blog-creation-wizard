"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function BlogCard({ post }) {
  const router = useRouter();

  return (
    <Card
      sx={{ cursor: "pointer" }}
      onClick={() => router.push(`/detail/${post.id}`)}
    >
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="subtitle2">{post.author}</Typography>
        <Typography variant="body2" color="text.secondary">
          {post.category}
        </Typography>
        <Typography variant="body2">{post.date}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {post.summary}
        </Typography>
      </CardContent>
    </Card>
  );
}

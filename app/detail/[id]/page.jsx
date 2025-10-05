"use client";
import { useBlog } from "@/context/BlogContext";
import { Button, Container, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";

export default function DetailPage() {
  const { id } = useParams();
  const { posts } = useBlog();
  const router = useRouter();

  const post = posts.find((p) => p.id === id);

  if (!post) return <Typography>Post not found</Typography>;

  return (
    <Container>
      <Button onClick={() => router.push("/")}>← Back</Button>
      <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1">By {post.author}</Typography>
      <Typography variant="body2">
        {post.date} - {post.category}
      </Typography>
      <Typography variant="h6" mt={2}>
        Summary
      </Typography>
      <Typography>{post.summary}</Typography>
      <Typography variant="h6" mt={2}>
        Content
      </Typography>
      <Typography>{post.content}</Typography>
    </Container>
  );
}

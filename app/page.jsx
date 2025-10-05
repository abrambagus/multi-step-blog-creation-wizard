"use client";
import BlogCard from "@/components/BlogCard";
import { useBlog } from "@/context/BlogContext";
import { Container, Stack } from "@mui/material";

export default function BlogListPage() {
  const { posts } = useBlog();

  return (
    <Container>
      <Stack spacing={2} mt={3}>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </Stack>
    </Container>
  );
}

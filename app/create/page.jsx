"use client";
import {
  Step1Metadata,
  Step2SummaryCategory,
  Step3Content,
  Step4Review,
  WizardNavigation,
} from "@/components";
import { useBlog } from "@/context/BlogContext";
import { Alert, Card, CardContent, Container, Snackbar } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateBlog() {
  const router = useRouter();
  const { addPost } = useBlog();
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    category: "",
    content: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    addPost({
      ...formData,
      id: uuidv4(),
      date: new Date().toLocaleDateString(),
    });

    setOpen(true);

    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  const isDisabled = () => {
    switch (step) {
      case 1:
        return !formData.title || !formData.author;

      case 2:
        return !formData.summary || !formData.category;

      case 3:
        return !formData.content;
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          {step === 1 && (
            <Step1Metadata data={formData} onChange={handleChange} />
          )}
          {step === 2 && (
            <Step2SummaryCategory data={formData} onChange={handleChange} />
          )}
          {step === 3 && (
            <Step3Content data={formData} onChange={handleChange} />
          )}
          {step === 4 && <Step4Review data={formData} />}
        </CardContent>
      </Card>
      <WizardNavigation
        onBack={step > 1 ? () => setStep(step - 1) : () => router.push("/")}
        onNext={step < 4 ? () => setStep(step + 1) : undefined}
        onSubmit={step === 4 ? handleSubmit : undefined}
        isLastStep={step === 4}
        isDisabled={isDisabled}
      />
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Blog post submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
}

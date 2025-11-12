import { FeedbackForm } from "@/components/feedback-form"

export const metadata = {
  title: "Feedback - GC Capital",
  description: "Formulario interno de feedback para mejoras",
  robots: "noindex, nofollow" // No indexar en Google
}

export default function FeedbackPage() {
  return <FeedbackForm />
}

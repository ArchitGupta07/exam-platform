import { NextResponse } from "next/server";

interface Question {
  id: number;
  content: string;
  options: string[];
  questionType: string;
}
const baseUrl = "http://localhost:5008";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const examId = searchParams.get("examId");

  console.log("exam id ................: ", examId);

  if (!examId) {
    return NextResponse.json(
      { message: "Exam ID is required" },
      { status: 400 }
    );
  }

  try {
    const dotNetApiUrl = `${baseUrl}/questions/${1}`;
    const response = await fetch(dotNetApiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Error fetching exams" },
        { status: response.status }
      );
    }

    const examsData: Question[] = await response.json();
    return NextResponse.json(examsData);
  } catch (error) {
    console.error("Error fetching exams:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

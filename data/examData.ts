export interface Test {
    id: number;
    title: string;
    description: string;
    duration: string;
    totalQuestions: number;
    category: string;
    difficulty: string;
    image: string;
}

export const testData: Test[] = [
    {
        id: 1,
        title: "General Knowledge Quiz",
        description: "Test your knowledge across a variety of general topics. Perfect for trivia enthusiasts!",
        duration: "30 minutes",
        totalQuestions: 50,
        category: "General Knowledge",
        difficulty: "Medium",
        image: "https://example.com/images/general-knowledge.jpg",
    },
    {
        id: 2,
        title: "Math Skills Assessment",
        description: "Evaluate your mathematical abilities with a range of questions from basic arithmetic to advanced topics.",
        duration: "45 minutes",
        totalQuestions: 40,
        category: "Mathematics",
        difficulty: "Hard",
        image: "https://example.com/images/math-assessment.jpg",
    },
    {
        id: 3,
        title: "English Language Proficiency Test",
        description: "Measure your command of the English language, including grammar, vocabulary, and comprehension.",
        duration: "60 minutes",
        totalQuestions: 60,
        category: "Language",
        difficulty: "Easy",
        image: "https://example.com/images/english-test.jpg",
    },
    {
        id: 4,
        title: "Science Knowledge Quiz",
        description: "Challenge yourself with questions from physics, chemistry, biology, and other scientific disciplines.",
        duration: "40 minutes",
        totalQuestions: 45,
        category: "Science",
        difficulty: "Medium",
        image: "https://example.com/images/science-quiz.jpg",
    },
    {
        id: 5,
        title: "History and Geography Test",
        description: "Assess your knowledge of historical events and geographical locations from around the world.",
        duration: "35 minutes",
        totalQuestions: 50,
        category: "History & Geography",
        difficulty: "Medium",
        image: "https://example.com/images/history-geography-test.jpg",
    },
];



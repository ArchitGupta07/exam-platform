// blogs.ts
export interface Blog {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  tags: string[];
  views: number;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with TypeScript",
    author: "John Doe",
    content: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers type safety and better tooling for large-scale applications. 
                In this blog, we will cover the basics of TypeScript and how to get started with it.`,
    createdAt: new Date("2023-01-01"),
    tags: ["TypeScript", "JavaScript", "Programming"],
    views: 1500,
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    author: "Jane Smith",
    content: `React Hooks introduced in version 16.8 revolutionized how we manage state and side effects in functional components. 
                This blog dives deep into the most commonly used hooks like useState, useEffect, and custom hooks.`,
    createdAt: new Date("2023-02-10"),
    tags: ["React", "JavaScript", "Web Development"],
    views: 2300,
  },
  {
    id: 3,
    title: "Mastering CSS Grid",
    author: "Alice Johnson",
    content: `CSS Grid is a powerful 2D layout system that provides more flexibility and control over web layouts. 
                Learn how to create responsive layouts with ease using CSS Grid properties.`,
    createdAt: new Date("2023-03-15"),
    tags: ["CSS", "Web Design", "Frontend"],
    views: 1800,
  },
  {
    id: 4,
    title: "Introduction to Node.js",
    author: "Michael Brown",
    content: `Node.js allows developers to use JavaScript to write server-side code. 
                This blog explains the basics of setting up a Node.js environment and creating a simple HTTP server.`,
    createdAt: new Date("2023-04-05"),
    tags: ["Node.js", "JavaScript", "Backend"],
    views: 1200,
  },
  {
    id: 5,
    title: "Building REST APIs with FastAPI",
    author: "Sarah Lee",
    content: `FastAPI is a modern, fast (high-performance) web framework for building APIs with Python 3.7+ based on standard Python type hints. 
                In this blog, we will build a simple REST API using FastAPI and explore its features.`,
    createdAt: new Date("2023-05-20"),
    tags: ["FastAPI", "Python", "API"],
    views: 900,
  },
];

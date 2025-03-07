export const WELCOME_PAGE_DESCRIPTION_CARDS =
    [
        {
            title: "Sign Up",
            description: "Join our community by creating a free account.",
        },
        {
            title: "Choose a Topic",
            description: "Choose from a wide range of programming topics to start learning.",
        },
        {
            title: "Learn and Practice",
            description: "Dive into lessons and practice with real-world exercises.",
        },
        {
            title: "Track Your Progress",
            description: "Keep track of your achievements and continue improving.",
        },
    ];

export const DASHBOARD_PAGE_DESCRIPTION_CARDS=
    [
        {
            title: "Documentation",
            description: "Explore a vast library of articles on various programming topics, including tutorials, guides, and best practices. Learn from industry experts and stay up-to-date with the latest trends and technologies.",
            path: "/documentation",
        },
        {
            title: "Multiple Choice Quizzes",
            description: "Test your knowledge and skills with our multiple choice quizzes, covering a wide range of programming topics. Identify areas for improvement and track your progress over time.",
            path: "/multiple-choice",
        },
        {
            title: "Coding Challenges",
            description: "Practice your coding skills with our interactive challenges, designed to simulate real-world scenarios. Develop problem-solving skills, learn new concepts, and improve your coding abilities.",
            path: "/coding-challenge",
        },
        {
            title: "Note Cards",
            description: "Create and review digital flashcards to help you memorize key concepts, terms, and formulas. Organize your notes, track your progress, and reinforce your learning with our note card system.",
            path: "/note-card",
        },
        {
            title: "Track Your Progress",
            description: "Set and track your personal goals, monitoring your progress along the way. Celebrate your achievements, stay motivated, and unlock your full potential as you work towards your objectives.",
            path: "/goals-progress",
        },
    ];

export const MULTIPLE_CHOICE_QUESTIONS = {
    javascript: {
        easy: [
            {
                question: 'What is the syntax for declaring a variable in JavaScript?',
                options: ['let', 'var', 'const', 'function'],
                answer: 'let',
            },
            {
                question: 'What is the syntax for printing a message to the console in JavaScript?',
                options: ['console.log()', 'alert()', 'prompt()', 'confirm()'],
                answer: 'console.log()',
            },
        ],
        med: [
            {
                question: 'What is the syntax for creating a new object in JavaScript?',
                options: ['new Object()', 'Object.create()', 'Object.assign()', 'JSON.parse()'],
                answer: 'new Object()',
            },
            {
                question: 'What is the syntax for creating a new array in JavaScript?',
                options: ['[]', '{}', '()', 'new Array()'],
                answer: '[]',
            },
        ],
        hard: [
            {
                question: 'What is the difference between null and undefined in JavaScript?',
                options: ['null is an object, undefined is not', 'null is not an object, undefined is', 'null and undefined are the same thing', 'null and undefined are different things'],
                answer: 'null and undefined are different things',
            },
            {
                question: 'What is the syntax for creating a new function in JavaScript?',
                options: ['function', 'var', 'let', 'const'],
                answer: 'function',
            },
        ],
    },
    python: {
        easy: [
            {
                question: 'What is the syntax for printing a message to the console in Python?',
                options: ['print()', 'console.log()', 'System.out.println()', 'echo'],
                answer: 'print()',
            },
            {
                question: 'What is the syntax for creating a new list in Python?',
                options: ['[]', '{}', '()', 'dict()'],
                answer: '[]',
            },
        ],
        med: [
            {
                question: 'What is the syntax for creating a new dictionary in Python?',
                options: ['{}', '[]', '()', 'dict()'],
                answer: '{}',
            },
            {
                question: 'What is the syntax for creating a new set in Python?',
                options: ['set()', 'list()', 'dict()', 'tuple()'],
                answer: 'set()',
            },
        ],
        hard: [
            {
                question: 'What is the difference between static typing and dynamic typing in Python?',
                options: ['static typing means the type of a variable is known at compile time', 'dynamic typing means the type of a variable is known at runtime', 'static typing is faster than dynamic typing', 'dynamic typing is more flexible than static typing'],
                answer: 'dynamic typing means the type of a variable is known at runtime',
            },
            {
                question: 'What is the syntax for creating a new class in Python?',
                options: ['class', 'def', 'lambda', 'import'],
                answer: 'class',
            },
        ],
    },
};

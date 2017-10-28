import { Question, Options } from './question';

export const QUESTIONS: Question[] = [
    {
        id: 0,
        question: "How much sleep did you get last night?",
        options: [
            { option: "0 hours", next: 0 },
            { option: "Less than 4 hours", next: 0.33 },
            { option: "4-7 hours", next: 0.66 },
            { option: "7 or more hours", next: 1 }
        ]
    },
    {
        id: 1,
        question: "When is your next activity?",
        options: [
            { option: "Right now", next: 1 },
            { option: "In less than 30 minutes", next: 0.66 },
            { option: "In 30 minutes - 1.5 hours", next: 0.33 },
            { option: "In more than 1.5 hours", next: 1 }
        ]
    },
    {
        id: 2,
        question: "Can you sleep during your next activity?",
        options: [
            { option: "Yes", next: 0 },
            { option: "No", next: 1 }
        ]
    },
    {
        id: 3,
        question: "How much coffee have you had today?",
        options: [
            { option: "None", next: 1 },
            { option: "1-2 cups", next: 0.66 },
            { option: "3-5 cups", next: 0.33 },
            { option: "More than 5 cups", next: 0 }
        ]
    },
    {
        id: 4,
        question: "Do you like coffee?",
        options: [
            { option: "Yes", next: 1 },
            { option: "No", next: 0 }
        ]
    },
    {
        id: 5,
        question: "Do you like naps?",
        options: [
            { option: "Yes", next: 0 },
            { option: "No", next: 1 }
        ]
    }
];

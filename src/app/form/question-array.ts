import { Question, Options } from './question';

export const QUESTIONS: Question[] = [
    {
        id: 0,
        question: "How much sleep did you get last night?",
        options: [
            { option: "0 hours", next: 1 },
            { option: "Less than 4 hours", next: 1 },
            { option: "4-7 hours", next: 3 },
            { option: "More than 7 hours", next: 3 }
        ]
    },
    {
        id: 1,
        question: "When is your next activity?",
        options: [
            { option: "Right now", next: 2 },
            { option: "Less than 30 minutes", next: 9 },
            { option: "More than 30 mins", next: 7 }
        ]
    },
    {
        id: 2,
        question: "Can you sleep during your next activity?",
        options: [
            { option: "Yes", next: 7 },
            { option: "No", next: 8 }
        ]
    },
    {
        id: 3,
        question: "How much coffee have you had today?",
        options: [
            { option: "None", next: 8 },
            { option: "1-3 cups", next: 4 },
            { option: "More than 3 cups", next: 1 }
        ]
    },
    {
        id: 4,
        question: "Do you like coffee?",
        options: [
            { option: "Yes", next: 8 },
            { option: "No", next: 5 }
        ]
    },
    {
        id: 5,
        question: "Do you like naps?",
        options: [
            { option: "Yes", next: 1 },
            { option: "No", next: 10 }
        ]
    }
];

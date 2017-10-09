import { Question, Options } from './question';

export const QUESTIONS: Question[] = [
    {
        question: "Do you like coffee?",
        options: [
            { option: "Yes", weight: 1 },
            { option: "No", weight: 0 }
        ]
    },
    {
        question: "Do you like naps?",
        options: [
            { option: "Yes", weight: 1 },
            { option: "No", weight: 0 }
        ]
    }
];
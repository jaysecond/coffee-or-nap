import { Question, Options } from './question';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        question: "Do you like coffee?",
        options: [
            { option: "Yes", weight: 1 },
            { option: "No", weight: 0 }
        ]
    },
    {
        id: 2,
        question: "Do you like naps?",
        options: [
            { option: "Yes", weight: 0 },
            { option: "No", weight: 1 }
        ]
    },
    {
        id: 3,
        question: "How much sleep did you get last night?",
        options: [
            { option: "0 hours", weight: 0 },
            { option: "Less than 4 hours", weight: 0.33 },
            { option: "4-7 hours", weight: 0.66 },
            { option: "7 or more hours", weight: 1 }
        ]
    },
    {
        id: 4,
        question: "How much coffee have you had today?",
        options: [
          { option: "None", weight: 1 },
          { option: "1-2 cups", weight: 0.66 },
          { option: "3-5 cups", weight: 0.33 },
          { option: "More than 5 cups", weight: 0 }
        ]
    },
    {
        id: 5,
        question: "When is your next activity?",
        options: [
          { option: "Right now", weight: 1 },
          { option: "In less than 30 minutes", weight: 0.66 },
          { option: "In 30 minutes - 1.5 hours", weight: 0.33 },
          { option: "In more than 1.5 hours", weight: 1 }
        ]
    },
    {
        id: 6,
        question: "Can you sleep during your next activity?",
        options: [
            { option: "Yes", weight: 0 },
            { option: "No", weight: 1 }
        ]
    }
];

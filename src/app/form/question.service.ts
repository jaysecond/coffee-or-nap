import { Question, Options } from './question';
import { QUESTIONS } from './question-array';

import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {
    getQuestions(): Promise<Question[]> {
        return Promise.resolve(QUESTIONS);
    }
}
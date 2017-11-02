import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question, Options } from './question';
import { QuestionService } from './question.service';

import { ResultsService } from '../results/results.service';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  constructor(
    private router: Router,
    private questionService: QuestionService,
    private resultsService: ResultsService
  ) { }

  page: number;
  questions: Question[];
  q: Question;
  history: Array<number>;

  getQuestions(): void {
    this.questionService.getQuestions()
    .then(questions => this.questions = questions)
    .then(questions => this.q = questions[this.page]);
  }

  ngOnInit(): void {
    this.page = 0;
    this.getQuestions();
    this.history = new Array(7);
  }

  public chooseOption = (currentPage, nextQ) => {
    this.history.push(currentPage);
    this.next(nextQ);
  }

  public next = (nextQ) => {
    this.page = nextQ;
    if ( this.page < 7 ) {
      this.q = this.questions[this.page];
      return this.page, this.q;
    }
    this.resultsService.setResults(this.page);
    this.router.navigate(['/results']);
  }

  public previous = () => {
    if ( this.page - 1 >= 0 ) {
      this.page = this.history.pop();
      this.q = this.questions[this.page];
      return this.page, this.q;
    }
    this.router.navigate(['/dashboard']);
  }
}

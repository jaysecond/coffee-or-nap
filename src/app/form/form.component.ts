import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question, Options } from './question';
import { QuestionService } from './question.service';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  constructor(
    private router: Router,
    private questionService: QuestionService
  ) { }
  
  page: number;
  questions: Question[];
  q: Question;

  getQuestions(): void {
    this.questionService.getQuestions()
    .then(questions => this.questions = questions)
    .then(questions => this.q = questions[this.page]);
  }

  ngOnInit(): void {
    this.page = 0;
    this.getQuestions();
  }

  public next = () => {
    if ( this.page + 1 < this.questions.length ) {
      this.page++;
      this.q = this.questions[this.page];
      return this.page, this.q;
    }
    this.router.navigate(['/results']);
  }

  public previous = () => {
    if ( this.page - 1 >= 0 ) {
      this.page--;
      this.q = this.questions[this.page];
      return this.page, this.q;
    }
    this.router.navigate(['/dashboard']);
  }
}

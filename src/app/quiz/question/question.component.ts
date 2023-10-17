import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;
  @Input() idCategory!: number;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.quizService.getQuizContent(this.idCategory);
    });
  }
}

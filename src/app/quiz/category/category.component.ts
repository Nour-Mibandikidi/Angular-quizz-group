import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoriesContent: any[] = this.quizService.categoriesContent;
  categoriesContentSearchTmp: any[] = this.categoriesContent;
  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getCategories();
  }

  search(text: string) {
    if (!text) {
      this.categoriesContentSearchTmp = this.categoriesContent;
    }
    this.categoriesContentSearchTmp = this.categoriesContent.filter(
      (category) => category?.label.toLowerCase().includes(text.toLowerCase())
    );
  }

  navigateToQuiz(id: number) {
    this.router.navigate(['/quiz', id]);
    this.quizService.resetQuiz();
  }
}

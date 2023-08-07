import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from './article.component';



@NgModule({
  declarations: [ArticleListComponent, ArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ArticleListComponent, ArticleComponent
  ]
})
export class ArticleModule { }

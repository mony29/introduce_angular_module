import { Component, OnInit } from '@angular/core';
import { IArticle } from '../iarticle';
import { ArticleService } from '../article.service';
import { ICategory } from '../icategory';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  categories!:ICategory[] ;
  today = new Date();
  articles !: IArticle[];
  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this._articleService.getAllArticles()

    this.articles.push(
      {
        id: 1,
        title: 'This is title',
        description: 'This is description',
        author_name: 'This is Author Name',
        categories : {id : 1, name : 'Programming'}
      },
      {
        id: 2,
        title: 'HRD News',
        description: 'Welcome 12th Generation',
        author_name: 'Mony',
        categories : {id : 2, name : 'Language'}
      },
    )
    console.log(...this.articles)
  }
}
import { Injectable } from '@angular/core';
import { IArticle } from './iarticle';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getAllArticles(): IArticle[] {
    return [
      {
        id: 1, 
        title: 'Title1', 
        description: 'Description1', 
        author_name: 'Author1',
        categories : {id : 1, name : 'programming'}
      },
      {
        id: 2, 
        title: 'Title2', 
        description: 'Description2', 
        author_name: 'Author2',
        categories : {id : 2, name : 'language'}
      }
    ]
  }
}

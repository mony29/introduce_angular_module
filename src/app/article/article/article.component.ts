import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../iarticle';
import { ICategory } from '../icategory';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

@Input() category !: ICategory;
  today = new Date();
  @Input() article !: IArticle

  ngOnInit(): void {

  }
}

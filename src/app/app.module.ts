import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share/share.module';
import { ProfileModule } from './profile/profile/profile.module';
import { ArticleModule } from './article/article/article.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, ShareModule, ProfileModule, ArticleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

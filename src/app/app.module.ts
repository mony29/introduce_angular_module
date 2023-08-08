import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share/share.module';
import { ProfileModule } from './profile/profile/profile.module';
import { ArticleModule } from './article/article/article.module';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule, ShareModule, ProfileModule, ArticleModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

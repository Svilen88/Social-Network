import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { WallComponent } from './wall/wall.component';
import { PostsComponent } from './wall/posts/posts.component';
import { CreatePostComponent } from './wall/create-post/create-post.component';
import { SidebarComponent } from './wall/sidebar/sidebar.component';
import { CommentsComponent } from './wall/comments/comments.component';

import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store';
import { postsReducers, postsEffects, commentsEffects, commentsReducers } from './store';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    StoreModule.forFeature('comments', commentsReducers),
    StoreModule.forFeature('posts', postsReducers),
    EffectsModule.forFeature(postsEffects),
    EffectsModule.forFeature(commentsEffects)
  ],
  declarations: [WallComponent, PostsComponent, CreatePostComponent, SidebarComponent, CommentsComponent]
})
export class ApplicationModule { }

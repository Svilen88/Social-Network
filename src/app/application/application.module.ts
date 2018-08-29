import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';
import { WallComponent } from './wall/wall.component';
import { PostsComponent } from './wall/posts/posts.component';
import { CreatePostComponent } from './wall/create-post/create-post.component';
import { SidebarComponent } from './wall/sidebar/sidebar.component';
import { CommentsComponent } from './wall/comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule
  ],
  declarations: [WallComponent, PostsComponent, CreatePostComponent, SidebarComponent, CommentsComponent]
})
export class ApplicationModule { }

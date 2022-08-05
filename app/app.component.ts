import { HttpClient } from '@angular/common/http';
import {OnInit } from '@angular/core';

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PostService } from './services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,  AfterViewInit{
 posts: any = [];
 dataSource : any = [];

  title = 'apiDisplayApp';

  constructor(private service:PostService){}


  ngOnInit():void {
     this.getPosts();
  }

   getPosts():void {
    this.service.getPosts().subscribe(
      response => {
            this.posts = response;
          this.dataSource=new MatTableDataSource(this.posts);
    }
    );
  }

   displayedColumns: string[] = ['albumId','space1', 'id','space2', 'title','space3', 'url', 'space4','thumbnailUrl'];
 @ViewChild('paginator')private paginator!: MatPaginator;
 
 ngAfterViewInit(){


  this.dataSource.paginator = this.paginator;
 }
}

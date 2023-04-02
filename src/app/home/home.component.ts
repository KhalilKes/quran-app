import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chapters:any[] = [];

  constructor(private _backendService:BackendService) { }

  ngOnInit(): void {
    this._backendService.getAllChapters().subscribe(d => {
      this.chapters = d.chapters;
    })
  }

  showOnly(n:number):boolean{
    if(n == 1 || n==112 || n==113) return true;
    return false;
  }

}

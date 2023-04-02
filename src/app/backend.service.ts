import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  apiURL = environment.apiQDC;

  constructor(private _http:HttpClient) { }

  getAllChapters():Observable<any> {
    return this._http.get(`${this.apiURL}/chapters`);
  }

  getChapterByID(id:number):Observable<any> {
    return this._http.get(`${this.apiURL}/chapters/${id}`);
  }
  
  getVersesByChapter(chapterNumber:number):Observable<any> {
    return this._http.get(`${this.apiURL}/verses/by_chapter/${chapterNumber}?words=true&filter_page_words=true`);
  }

  getVersesByPageAndAyat(page:number, from:number, to:number):Observable<any> {
    return this._http.get(`${this.apiURL}/verses/by_page/${page}?words=true&filter_page_words=true&from=112%3A${from}&to=112%3A${to}`);
  }
  
  
}

import { Injectable } from '@angular/core';
import { AUTHORS } from '../app/app-model/mock-author';
import { Author } from '../app/app-model/author';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors = AUTHORS;
  constructor() { }

  getAuthors() : Observable<Author[]>{
    return of(this.authors);
  }
  
  updateAuthor(id : number, name : string) : void {
    console.log(this.authors[id].name);
    this.authors[id].name = name;
  }
}



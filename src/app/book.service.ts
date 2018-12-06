import { Injectable } from '@angular/core';
import { Book } from '../app/app-model/book';
import { BOOKS } from '../app/app-model/mock-book';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  books = BOOKS;
  constructor() { 
    
  }

  getBooks() : Observable<Book[]>{
    return of(this.books);
  }
  updateBook(id: number, name : string) : void{
    this.books[id].name = name;
  }
}

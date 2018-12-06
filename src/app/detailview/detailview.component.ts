import { Component, OnInit, Input } from '@angular/core';
import { AuthorService } from '../author.service';
import { BookService } from '../book.service';
import { Author } from '../app-model/author';
import { Book } from '../app-model/book';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit {
 
    

  books: Book[];
  authors: Author[];
  id : number;
  authorTitle : string;
  bookTitle : string;

  constructor(private authorService : AuthorService, private bookService : BookService) { }

  ngOnInit() {
    this.getBooks();
    this.getAuthors();
  }

  getAuthors() : void{
    this.authorService.getAuthors().subscribe(authors => this.authors = authors);
  }

  getBooks() : void{
    this.bookService.getBooks().subscribe(books => this.books = books);
  }
  
  update() : void{
    console.log(this.id);
    console.log(this.authorTitle);
    console.log(this.bookTitle);
    this.bookService.updateBook(this.id, this.bookTitle);
    this.authorService.updateAuthor(this.id, this.authorTitle);
  }
}

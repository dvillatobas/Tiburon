import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Book, BookService}   from './book.service';

@Component({
    template: `
  <h2>Book "{{book.title}}"</h2>
  <div>
    <p>{{book.abstract}}</p>
  </div>
  <p>
    <button (click)="removeBook()">Remove</button>
    <button (click)="editBook()">Edit</button>
    <br>
    <button (click)="gotoBooks()">All Books</button>
  </p>`
})
export class BookDetailComponent {

    book: Book;

    constructor(private router: Router, routeParams: RouteParams, private service: BookService) {
        let id = routeParams.get('id');
        service.getBook(id).subscribe(
            book => this.book = book,
            error => console.error(error)
        );
    }

    removeBook() {
        let okResponse = window.confirm("Do you want to remove this book?");
        if (okResponse) {
            this.service.removeBook(this.book).subscribe(
                _ => this.router.navigate(['Books']),
                error => console.error(error)
            )
        }
    }

    editBook() {
        this.router.navigate(['BookEdit', { id: this.book.id }]);
    }

    gotoBooks() {
        this.router.navigate(['Books']);
    }
}

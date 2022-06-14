import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  book = {
    name: '',
    description: '',
    image: '',
    location: '',
    species: '',
    status: ''
  };
  isBookAdded = false;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void { }

  // Add New
  addBook(): void {
    const data = {
      name: this.book.name,
      description: this.book.description,
      image: this.book.image,
      location: this.book.location,
      species: this.book.species,
      status: this.book.status,

    };
    if (!data.name) {
      alert('Please add title!');
      return;
    }

    this.booksService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isBookAdded = true;
        },
        error => {
          console.log(error);
        });
  }

  // Reset on adding new
  newBook(): void {
    this.isBookAdded = false;
    this.book = {
      name: '',
      description: '',
      image: '',
      location: '',
      species: '',
      status: ''
    };
  }

}

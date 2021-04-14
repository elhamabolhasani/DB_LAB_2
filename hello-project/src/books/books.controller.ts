import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';

@Controller('books')
export class BooksController {
	constructor(private readonly bookServices: BooksService) {}
	  @Post('post')
	  postBooks( @Body() books: CreateBookDto) {
		return this.bookServices.insert(books);
	  }
	  @Get()
	  getAll() {
		return this.bookServices.getAllBooks();
	  }
}

import { Body, Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import CreateBookDto from './dto/create-book.dto';
import BookId from './dto/bookId.dto';
import BookWtihIdDto from './dto/bookWithId.dto';

@Controller('books')
export class BooksController {
	constructor(private readonly bookServices: BooksService) {}
	  @Post('post')
	  postBooks( @Body() books: CreateBookDto) {
		return this.bookServices.insert(books);
	  }
	  @Delete('delete')
	  deleteBooks(@Body() books: BookId) {
		  return this.bookServices.delete_b(books);
	  }
	  @Get()
	  getAll() {
		return this.bookServices.getAllBooks();
	  }
	  @Put('put')
	  putBooks( @Body() books: BookWtihIdDto) {
		return this.bookServices.put_b(books);
	  }
	  
}


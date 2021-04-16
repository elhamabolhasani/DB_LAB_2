import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { HelloModule } from './hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './db/entity/user.entity';
import { BooksModule } from './Books/books.module';
import { JobseekersModule } from './jobseekers/jobseekers.module';
import GenreModule from './Genre/genre.module';
import BookEntity from './db/entity/book.entity';
import GenreEntity from './db/entity/genre.entity';
import RequestEntity from './db/entity/request.entity';
import ProjectEntity from './db/entity/project.entity';
import UsersEntity from './db/entity/users.entity';




@Module({
  imports: [HelloModule,
			UserModule ,
            BooksModule,
            GenreModule,
			JobseekersModule,
    TypeOrmModule.forFeature(
      [UserEntity, BookEntity , GenreEntity, RequestEntity, UsersEntity, ProjectEntity],
    ),

    TypeOrmModule.forRoot(),

    JobseekersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
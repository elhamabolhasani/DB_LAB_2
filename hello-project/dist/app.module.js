"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./User/user.module");
const hello_module_1 = require("./hello/hello.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./db/entity/user.entity");
const books_module_1 = require("./Books/books.module");
const jobseekers_module_1 = require("./jobseekers/jobseekers.module");
const genre_module_1 = require("./Genre/genre.module");
const book_entity_1 = require("./db/entity/book.entity");
const genre_entity_1 = require("./db/entity/genre.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [hello_module_1.HelloModule,
            user_module_1.UserModule,
            books_module_1.BooksModule,
            genre_module_1.default,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.default, book_entity_1.default, genre_entity_1.default]),
            typeorm_1.TypeOrmModule.forRoot(),
            jobseekers_module_1.JobseekersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
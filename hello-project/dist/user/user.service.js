"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../db/entity/user.entity");
let UserServices = class UserServices {
    async insert(userDetails) {
        const userEntity = user_entity_1.default.create();
        const { name } = userDetails;
        userEntity.name = name;
        await user_entity_1.default.save(userEntity);
        return userEntity;
    }
    async getAllUsers() {
        return await user_entity_1.default.find();
    }
    async getBooksOfUser(userID) {
        console.log(typeof (userID));
        const user = await user_entity_1.default.findOne({ where: { id: userID }, relations: ['books'] });
        return user.books;
    }
};
UserServices = __decorate([
    common_1.Injectable()
], UserServices);
exports.UserServices = UserServices;
//# sourceMappingURL=user.service.js.map
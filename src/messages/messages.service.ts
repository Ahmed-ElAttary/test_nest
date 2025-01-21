import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  }
  findOne(id: number) {
    return this.messagesRepo.findOne(id);
  }
}

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from "@nestjs/common";
import { CreateMessageDto } from "src/Dtos/create-message.dto";
import { MessagesService } from "./messages.service";
@Controller("messages")
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  @Get()
  listOfMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessage(@Body() message: CreateMessageDto) {
    return this.messagesService.create(message.content);
  }
  @Get("/:id")
  async getMessage(@Param("id") id: number) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException(`Message with ID ${id} not found.`);
    }
    return message;
  }
}

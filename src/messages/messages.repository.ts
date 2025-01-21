import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesRepository {
  private messagesFilePath = "./messages.json";
  async findAll() {
    const messages = await readFile(this.messagesFilePath, "utf-8");
    return JSON.parse(messages);
  }

  async create(message: string) {
    const messages = await this.findAll();
    messages.push({ id: messages.length + 1, content: message });
    await writeFile(this.messagesFilePath, JSON.stringify(messages));
  }
  async findOne(id: number) {
    const messages = await this.findAll();
  
    return messages.find((message: { id: number }) => message.id == id);
  }
}

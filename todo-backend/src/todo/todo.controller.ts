import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('tasks')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body('title') title: string) {
    return this.todoService.create(title);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('completed') completed: boolean) {
    return this.todoService.update(+id, completed);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}

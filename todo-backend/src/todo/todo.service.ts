import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  create(title: string): Promise<Todo> {
    const todo = this.todoRepository.create({ title });
    return this.todoRepository.save(todo);
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async update(id: number, completed: boolean): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new Error('Task not found');
    }
    todo.completed = completed;
    return this.todoRepository.save(todo);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}

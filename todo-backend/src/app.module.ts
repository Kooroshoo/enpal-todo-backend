import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',                   // change if using another DB
      //host: 'localhost',
      host: process.env.DB_HOST || 'db',  // Use service name from Docker Compose
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'your_username',
      password: process.env.DB_PASSWORD || 'your_password',
      database: process.env.DB_DATABASE || 'todo_db',
      autoLoadEntities: true,
      synchronize: true, // disable in production
    }),
    TodoModule,
  ],
})
export class AppModule {}

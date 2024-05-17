import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { TaskDto } from './dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService){

    }

    @Post()
    createTask(@Body() {name,description,expiration,priority}: TaskDto): void {
        return this.tasksService.createTask({name,description,expiration,priority})
    }

    @Get()
    getTasks(@Query() filterQuery): Task [] {
        const { searchTerm, orderBy } = filterQuery;
        return this.tasksService.getTasks();
    }

    @Get(':id') // tasks/1
    getById(@Param('id') id: number): Task {
        return this.tasksService.getById(id);
    }

    @Patch(':id')
    updateTask(@Param('id') id:number, @Body() task: TaskDto) {
        return this.tasksService.updateTask(id, task);
    }

    @Delete(':id')
    deleteTask(@Param('id') id:number): void {
        return this.tasksService.removeTask(id);
    }
}

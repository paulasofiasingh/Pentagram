import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskDto } from './dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: 1,
            name: 'Crear proyecto',
            description: 'Inicializar proyecto en Nest.js',
            expiration: '05-05-2024',
            priority: 'Alta'
        }
    ];

    getTasks(): Task[] {
        return this.tasks;
    }

    getById(id: number): Task {
        return this.tasks.find((item) => item.id === id);
    }

    createTask({name, description, expiration, priority}: TaskDto) {
        this.tasks.push({
            id: (Math.floor(Math.random() * 2000) + 1),
            name,
            description,
            expiration,
            priority,
        })
    }

    updateTask(id: number, {name, description, expiration, priority}: TaskDto) {
        const task: Task = this.getById(id);
        task.name = name;
        task.description = description;
        task.expiration = expiration;
        task.priority = priority;
        return task;
    }

    removeTask(id: number){
        const index = this.tasks.findIndex((task) => task.id === id);
        if (index >= 0){
            this.tasks.splice(index, 1);
        }
    }

}

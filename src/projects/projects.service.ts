import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { ProjectDto } from './dto';

@Injectable()
export class ProjectsService {

    private projects: Project[] = [];

    getProjects(): Project[] {
        return this.projects;
    }

    getById(id: number): Project {
        return this.projects.find((item) => item.id === id);
    }

    createProject(name:string) {
        this.projects.push({
            id: (Math.floor(Math.random() * 2000) + 1),
            name: name,
        })
    }

    updateProject(id: number, {name}: ProjectDto) {
        const project: Project = this.getById(id);
        project.name = name;
        return project;
    }

    removeProject(id: number){
        const index = this.projects.findIndex((project => project.id === id));
        if (index >= 0){
            this.projects.splice(index, 1);
        }
    }
}

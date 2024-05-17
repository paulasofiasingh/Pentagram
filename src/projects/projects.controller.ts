import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from './project.entity';
import { ProjectDto } from './dto';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService){

    }

    @Post()
    createProject(@Body() {name}: ProjectDto) {
        return this.projectService.createProject(name)
    }

    @Get()
    getProjects(): Project [] {
        return this.projectService.getProjects();
    }

    @Get(':id')
    getById(@Param('id') id: number): Project {
        return this.projectService.getById(id);
    }

    @Patch(':id')
    updateProject(@Param('id') id: number, @Body() name: ProjectDto): Project {
        return this.projectService.updateProject(id, name);
    }

    @Delete(':id')
    deleteProject(@Param('id') id:number): void {
        return this.projectService.removeProject(id);
    }
}

import { IsString } from "class-validator";

export class ProjectDto {
    @IsString()
    readonly name: string;
}

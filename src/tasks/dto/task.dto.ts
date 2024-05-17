import { IsString } from "class-validator";

export class TaskDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly description: string;
    @IsString()
    readonly expiration: string;
    @IsString()
    readonly priority: string;
}

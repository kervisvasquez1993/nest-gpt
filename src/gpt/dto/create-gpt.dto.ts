import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateGptDto {
  @IsString()
  readonly prompt: string;
  @IsInt()
  @IsOptional()
  readonly maxTokens?: number;
}

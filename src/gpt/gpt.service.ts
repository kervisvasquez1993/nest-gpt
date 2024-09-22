import { Injectable } from '@nestjs/common';
import { CreateGptDto } from './dto/create-gpt.dto';
import { OrtographiUseCase } from './use-cases/ortography.use-case';

@Injectable()
export class GptService {
  async orthography(CreateGptDto: CreateGptDto) {
    return await OrtographiUseCase({
      prompt: CreateGptDto.prompt,
    });
  }
}

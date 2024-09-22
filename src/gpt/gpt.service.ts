import { Injectable } from '@nestjs/common';
import { CreateGptDto } from './dto/create-gpt.dto';
import { OrtographiUseCase } from './use-cases/ortography.use-case';
import OpenAI from 'openai';

@Injectable()
export class GptService {
  private openai = new OpenAI({
    apiKey: process.env.API_GPT2,
    organization: process.env.ORGANIZATION,
    project: process.env.PROJECT,
  });

  async orthography(CreateGptDto: CreateGptDto) {
    try {
      const response = await OrtographiUseCase(this.openai, {
        prompt: CreateGptDto.prompt,
      });
      return response;
    } catch (error) {
      console.error('Error in orthography service:', error.message);
      throw new Error('Failed to process request. Please try again later.');
    }
  }
}

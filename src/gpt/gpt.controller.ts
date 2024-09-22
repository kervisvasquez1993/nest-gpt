import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { CreateGptDto } from './dto/create-gpt.dto';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('orthography-check')
  orthography(@Body() body: CreateGptDto) {
    return this.gptService.orthography(body);
  }
}

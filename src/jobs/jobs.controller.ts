import { Controller, Get, Param, Post } from '@nestjs/common'

@Controller('jobs')
export class JobsController {
  @Post()
  create(): string {
    return 'Create new job'
  }

  @Get()
  findAll(): string {
    return 'Return all jobs'
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Return a #${id} job`
  }
}

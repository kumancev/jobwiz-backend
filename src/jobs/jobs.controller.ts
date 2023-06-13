import { Body, Controller, Post } from '@nestjs/common'
import { JobsService } from './jobs.service'
import { CreateJobDto } from './dto/create-job.dto'

@Controller('jobs')
export class JobsController {
  constructor(private jobService: JobsService) {}

  @Post()
  createJob(@Body() dto: CreateJobDto) {
    return this.jobService.create(dto)
  }
}

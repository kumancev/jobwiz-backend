import { Injectable } from '@nestjs/common'
import { CreateJobDto } from './dto/create-job.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Job } from './jobs.model'

@Injectable()
export class JobsService {
  constructor(@InjectModel(Job) private jobRepository: typeof Job) {}

  async create(dto: CreateJobDto) {
    const job = await this.jobRepository.create(dto)
    return job
  }
}

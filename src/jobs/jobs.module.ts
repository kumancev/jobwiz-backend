import { Module } from '@nestjs/common'
import { JobsService } from './jobs.service'
import { JobsController } from './jobs.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from '../users/users.model'
import { Job } from './jobs.model'

@Module({
  providers: [JobsService],
  controllers: [JobsController],
  imports: [SequelizeModule.forFeature([User, Job])],
})
export class JobsModule {}

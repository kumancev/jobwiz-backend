export class CreateJobDto {
  readonly title: string
  readonly description: string
  readonly salary: number
  readonly userId: number // get from jwt-token in the future
}

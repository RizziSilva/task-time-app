export interface Task {
  title: string
  description: string
  link: string
  initiatedAt: Date | undefined
  endedAt: Date | undefined
  id?: number
}

import { Task } from '@types'

export const INITIAL_TASK_STATE: Task = {
  description: '',
  link: '',
  title: '',
  endedAt: undefined,
  initiatedAt: undefined,
}

export const TASK_TITLE_INPUT = {
  name: 'title',
  placeholder: 'What are you working on?',
}

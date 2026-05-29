import { useState } from 'react'
import { Task } from '@types'
import { INITIAL_TASK_STATE } from '../../../constants'

export function useTaskTimer() {
  const [task, setTask] = useState<Task>(INITIAL_TASK_STATE)

  function handleInputChange(name: string, value: string) {
    setTask({ ...task, [name]: value })
  }

  return { task, handleInputChange }
}

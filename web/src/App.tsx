import './global.css'

import styles from './app.module.css'

import { Header } from './components/header'
import { useState } from 'react'

import Clipboard from './assets/Clipboard.svg'
import { Task } from './components/task'
import { InputCreateTask } from './components/inputCreateTask'

interface Task {
  id: number;
  content: String
}

function App() {
  const [tasksCompleted, setTasksCompleted] = useState<Task[]>([])
  const [tasks, setTasks] = useState<Task[]>([])

  function onCompleteTask(idTask: Number) {
    const isTaskCompleted = tasksCompleted.find(task => task.id === idTask)

    if(!isTaskCompleted) {
      const taskCompleted = tasks.filter(task => task.id === idTask)
    
      setTasksCompleted([...tasksCompleted, ...taskCompleted])
    } else {
      const newTasksCompleted = tasksCompleted.filter(task => task.id !== idTask)
    
      setTasksCompleted(newTasksCompleted)
    }
  }

  function onCreateTask(contentTask: String) {
    const task = {
      id: tasks.length,
      content: contentTask
    }

    setTasks([...tasks, task])
  }

  function onDeleteTask(idTask: Number) {
    const newTasks = tasks.filter(task => task.id !== idTask)

    setTasks(newTasks)
  }

  function handleTask() {
    if(tasks.length > 0) {
      return tasks.map(task => {
          return (
            <Task 
              key={task.id} 
              id={task.id} 
              content={task.content} 
              onCompleteTask={onCompleteTask} 
              onDeleteTask={onDeleteTask}
              isCompletedTask={tasksCompleted.some(taskCompleted => taskCompleted.id === task.id)}
            />
          )
        })
      }
    return (
      <>
        <img src={Clipboard} alt="" />
        <span>Você ainda não tem tarefas cadastradas</span>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </>
    )
  }

  return (
    <>
      <Header />

      <main className={styles.homeContainer}>
        <InputCreateTask onCreateTask={onCreateTask} />

        <section className={styles.tasksCount}>
          <span>Tarefas criadas <span className={styles.count}>{tasks.length}</span></span>
          <span>Concluídas <span className={styles.count}>{`${tasksCompleted.length} de ${tasks.length}`}</span></span>
        </section>

        <div className={styles.tasks}>
          {handleTask()}
        </div>
      </main>
    </>
  )
}

export default App

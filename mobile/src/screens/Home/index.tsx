import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { Resume } from '../../components/Resume'
import { useState } from 'react'
import { Task } from '../../components/Task'

import Clipboard from '../../../assets/clipboard.svg'

interface ITasks {
  title: string
  isCompleted: boolean
}

export function Home() {
  const [createdTasks, setCreatedTasks] = useState<ITasks[]>([
    {
      title: 'Beber 2L de água.',
      isCompleted: false,
    },
    {
      title: 'Assistir aulas Ignite.',
      isCompleted: true,
    },
  ])
  const completedTasksQuantitie = createdTasks.filter(
    (task) => task.isCompleted,
  ).length

  function onCompletedTask(title: string, isCompleted: boolean) {
    const newTasks = createdTasks.map((task) => {
      if (task.title === title) {
        return { ...task, isCompleted }
      }

      return task
    })

    setCreatedTasks(newTasks)
  }

  function onCreateTask(title: string) {
    const isExistsTask = createdTasks.some((task) => task.title === title)

    if (!isExistsTask) {
      setCreatedTasks([...createdTasks, { title, isCompleted: false }])
    }
  }

  function onRemoveTask(title: string) {
    const isExistsTask = createdTasks.some((task) => task.title === title)

    if (isExistsTask) {
      setCreatedTasks((state) => state.filter((task) => task.title !== title))
    }
  }

  return (
    <>
      <Header onCreateTask={onCreateTask} />

      <View style={styles.container}>
        <Resume
          quantitieCreated={createdTasks.length}
          quantitieCompleted={completedTasksQuantitie}
        />

        <FlatList
          data={createdTasks}
          renderItem={({ item }) => (
            <Task
              title={item.title}
              isCompleted={item.isCompleted}
              onCheckTask={onCompletedTask}
              onRemoveTask={onRemoveTask}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Clipboard width={65} height={65} style={styles.emptyListImage} />
              <Text style={styles.emptyListTextFirstLine}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListTextSecondLine}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  )
}

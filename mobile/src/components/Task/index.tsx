import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'

import { Trash } from 'phosphor-react-native'

import { Checkbox } from 'expo-checkbox'

interface ITask {
  title: string
  isCompleted: boolean
  onCheckTask: (title: string, isCompleted: boolean) => void
  onRemoveTask: (title: string) => void
}

export function Task({ title, isCompleted, onCheckTask, onRemoveTask }: ITask) {
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkBox}
        value={isCompleted}
        onValueChange={() => onCheckTask(title, !isCompleted)}
        color={isCompleted ? '#5E60CE' : '#4EA8DE'}
      />

      <Pressable onPress={() => onCheckTask(title, !isCompleted)}>
        <Text
          style={
            !isCompleted ? styles.taskContent : styles.taskContentCompleted
          }
        >
          {title}
        </Text>
      </Pressable>

      <Pressable onPress={() => onRemoveTask(title)}>
        <Trash size={20} color="#808080" weight="bold" />
      </Pressable>
    </View>
  )
}

import { TextInput, View, Pressable } from 'react-native'
import { styles } from './styles'

import Logo from '../../../assets/logo.svg'
import { PlusCircle } from 'phosphor-react-native'
import { useState } from 'react'

interface IHeader {
  onCreateTask: (title: string) => void
}

export function Header({ onCreateTask }: IHeader) {
  const [text, setText] = useState('')

  function createTask() {
    if (text.trim() !== '') {
      onCreateTask(text)
      setText('')
    }
  }

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#8C8C8C"
          style={styles.inputText}
          onChangeText={setText}
          value={text}
        />
        <Pressable style={styles.inputButton} onPress={createTask}>
          <PlusCircle size={20} color="#FFF" />
        </Pressable>
      </View>
    </View>
  )
}

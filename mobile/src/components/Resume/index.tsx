import { Text, View } from 'react-native'
import { styles } from './styles'

interface IResume {
  quantitieCreated: number
  quantitieCompleted: number
}

export function Resume({ quantitieCompleted, quantitieCreated }: IResume) {
  return (
    <View style={styles.container}>
      <View style={styles.quantitieContainer}>
        <Text style={styles.createdText}>Criadas</Text>
        <View style={styles.resumeQuantitieContainer}>
          <Text style={styles.resumeQuantitieText}>{quantitieCreated}</Text>
        </View>
      </View>

      <View style={styles.quantitieContainer}>
        <Text style={styles.completedText}>Concluídas</Text>
        <View style={styles.resumeQuantitieContainer}>
          <Text style={styles.resumeQuantitieText}>{quantitieCompleted}</Text>
        </View>
      </View>
    </View>
  )
}

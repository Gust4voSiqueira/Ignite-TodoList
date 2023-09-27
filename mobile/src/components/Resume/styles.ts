import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 60,

    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  quantitieContainer: {
    flexDirection: 'row',
  },
  resumeQuantitieContainer: {
    borderRadius: 50,
    paddingHorizontal: 10,
    width: 30,
    height: 20,
    backgroundColor: '#333333',
    marginLeft: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  createdText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14,
  },
  completedText: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14,
  },
  resumeQuantitieText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

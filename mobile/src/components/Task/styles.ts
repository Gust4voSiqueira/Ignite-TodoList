import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  checkBox: {
    borderRadius: 50,
    borderColor: '#4EA8DE',
  },
  taskContent: {
    color: '#F2F2F2',
    fontSize: 14,

    overflow: 'hidden',
    width: 250,
    maxHeight: 50,
  },
  taskContentCompleted: {
    overflow: 'hidden',
    width: 250,
    maxHeight: 50,
    color: '#808080',
    textDecorationLine: 'line-through',
    fontSize: 14,
  },
})

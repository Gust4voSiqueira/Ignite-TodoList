import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',

    paddingHorizontal: 20,
  },
  emptyListContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListImage: {
    marginBottom: 10,
  },
  emptyListTextFirstLine: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 3,
  },
  emptyListTextSecondLine: {
    color: '#808080',
    fontSize: 15,
    marginTop: 3,
  },
})

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#0D0D0D',
    height: '20%',
    zIndex: 4,
  },
  inputContainer: {
    position: 'absolute',
    bottom: -25,

    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
  },
  inputText: {
    flex: 1,
    backgroundColor: '#262626',
    color: '#fff',
    fontSize: 16,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputButton: {
    width: 50,
    height: 50,
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    marginLeft: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
})

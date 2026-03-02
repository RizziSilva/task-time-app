import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 344,
    width: 344,
    maxHeight: 576,
    backgroundColor: '#1b1b1b',
    borderRadius: 8,
    padding: 32,
    alignItems: 'center',
  },
  logoImage: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#b1b1b1',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#D65C56',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 36,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 24,
  },
  loginButtonText: {
    color: 'white',
  },
  signUpButton: {
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  containerInput: {
    width: '100%',
    marginBottom: 16,
    position: 'relative',
  },
  inputLabel: {
    color: '#b1b1b1',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#555555',
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: '#ffffff',
    height: 36,
    fontWeight: 500,
    fontSize: 14,
  },
  passwordInput: {
    paddingRight: 35,
  },
  resetPasswordText: {
    textDecorationLine: 'underline',
    color: '#ffffff',
    fontWeight: 500,
    borderRadius: 4,
    fontSize: 12,
  },
  passwordReveal: {
    position: 'absolute',
    width: 20,
    height: 20,
    right: 8,
    top: 32,
  },
  passwordImage: {
    width: 20,
    height: 20,
    color: '#ffffff',
  },
  errorMessage: {
    color: '#e89081',
    fontWeight: 500,
    fontSize: 12,
    marginVertical: 4,
  },
  inputError: {
    borderColor: '#e89081',
  },
})

import { StyleSheet } from 'react-native'
import { COLORS, DEFAULT_STYLES } from '@styles'

export const styles = StyleSheet.create({
  container: {
    maxWidth: 344,
    width: 344,
    maxHeight: 430,
    backgroundColor: COLORS.COD_GRAY,
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
    color: COLORS.SILVER_CHALICE,
  },
  loginError: {
    color: DEFAULT_STYLES.ERROR_COLOR,
    fontSize: 14,
    fontWeight: 500,
    marginVertical: 20,
  },
  loginButton: {
    width: '100%',
    backgroundColor: COLORS.ROMAN,
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
    color: COLORS.SILVER_CHALICE,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.EMPEROR,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: COLORS.WHITE,
    height: 36,
    fontWeight: 500,
    fontSize: 14,
  },
  passwordInput: {
    paddingRight: 35,
  },
  resetPasswordText: {
    textDecorationLine: 'underline',
    color: COLORS.WHITE,
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
    color: COLORS.WHITE,
  },
  errorMessage: {
    color: DEFAULT_STYLES.ERROR_COLOR,
    fontWeight: 500,
    fontSize: 12,
    marginVertical: 4,
  },
  inputError: {
    borderColor: DEFAULT_STYLES.ERROR_COLOR,
  },
})

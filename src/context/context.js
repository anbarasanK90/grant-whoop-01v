import { createContext } from 'react'

const UserDetailsContext = createContext({
  lastName: '',
  firstName: '',
  email: '',
  secretQuestion: '',
  secretAnswer: '',
  mainPageNave: false,
  zipCodeCheck: false,
  showNextPage: 'Step_1',
  agree: false,
  ssn: '',
  dob: '',
  phNumber:'',
  errorState: {
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    phoneNumberError: false,
    dateBirthError: false,
    ssnError: false,
  },
  setUserDetails: userDetails => {},
})

export default UserDetailsContext
import React, { useState } from 'react'
import merge from 'lodash.merge'
import UserDetailsContext from './context'
  
const UserDetailsProvider = ({ children }) => {
 
  const setUserDetails = ({
    lastName,
    firstName,
    email,
    secretQuestion,
    secretAnswer,
    mainPageNave,
    zipCodeCheck,
    showNextPage,
    agree,
    ssn,
    dob,
    phNumber,
  }) => {
    updateUserDetails(prevState => {
      const newState = { ...prevState }
      console.log(prevState, newState)
      return merge(newState, {
        lastName,
        firstName,
        email,
        secretQuestion,
        secretAnswer,
        mainPageNave,
        zipCodeCheck,
        showNextPage,
        agree,
        ssn,
        dob,
        phNumber,
      })
    })
  }

  const userState = {
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
  setUserDetails
  }

  const [userDetails, updateUserDetails] = useState(userState)

  return (
    <UserDetailsContext.Provider value={{userDetails}}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export default UserDetailsProvider

import TextField from '@mui/material/TextField';
import UserDetailsContext from '../context/context'
import React, { useContext } from 'react';

const TextFieldComponent = (props) => {
    const contextValue = useContext(UserDetailsContext);

  return (
    <>
      <TextField required size="small" id={props.name} label={props.label} variant="outlined" name={props.name} onChange={(e) => {
        contextValue.userDetails?.setUserDetails({[props.name] : e.target.value !== '' ? e.target.value : ''});
        // const errorKey = `firstNameError`;
        
        // contextValue.userDetails?.setUserDetails({errorState: {
        //     ...contextValue.userDetails?.errorState,
        //     firstNameError: e.target.value !== '' ? false : true,
        //   },});
    }}/>
    </>
  );
}

export default TextFieldComponent;
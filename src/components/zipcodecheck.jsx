import { useContext } from 'react';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import UserDetailsContext from '../context/context'

const ZipCodeCheck = () => {
    const contextValue = useContext(UserDetailsContext);

  return (
    <>
      <div className="flex md:flex-row flex-col mt-4">
        <div className="flex-1 me-3">
          <InputBase
            className="custom_input"
            placeholder="Enter ZIP Code"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </div>
        <div className="flex-1">
          <Button
            variant="contained"
            className="w-full !py-2 btn_success"
            color="success"
            onClick={(e) => {
                contextValue.userDetails?.setUserDetails({mainPageNave: true})
              }}
          >
            Check Coverage
          </Button>
        </div>
      </div>
    </>
  );
};

export default ZipCodeCheck;

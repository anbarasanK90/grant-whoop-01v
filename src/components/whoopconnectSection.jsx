import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import WhoopLogo1 from '../images/03_logo.png';
import Tablet_Img from '../images/02_Tablet.png';
import Logo_02 from '../images/02_logo.png';
import Logo_03 from '../images/03_image.png';
import Logo_04 from '../images/04_logo.png';
import Logo_All from '../images/03_logo_all.png';
import Icon_Phone from '../images/04_icon_1.png';
import Icon_Email from '../images/04_icon_2.png';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

const WhoopconnectSection = () => {
    <section className='whoopconnectSection'>
        <Container fixed>
          <Grid container className='' spacing={2}>
            <Grid item xs={12} md={7.5}>
              <img className='max-w-full' src={WhoopLogo1} />
              <Typography variant="p" color="white" className='' align="left" component="p">
                We’re a leading Broadband and Technology Company offering Government
                Subsidized products and internet connections through the Affordable
                Connectivity Program. We’re here to help get you connected.
              </Typography>
              <Typography variant="h4" color="white" className='!mt-4' align="left" component="h4">
                Already Enrolled in Any of the Programs Below?<br></br>
                Then you are eligible for the ACP
              </Typography>
              <img className='max-w-full mt-8' src={Logo_All} />
            </Grid>
            <Grid item xs={12} md={4.5}>
              <img className='max-w-full' src={Logo_03} />
              <div className='applyTodayDiv'>
                <Typography variant="h2" color="white" align="center" component="h3">
                  APPLY TODAY
                </Typography>
                <Typography variant="p" color="white" className='' align="center" component="p">
                  Enter ZIP Code To Get Started
                </Typography>
                <div className='flex md:flex-row flex-col mt-4'>
                  <div className='flex-1 me-3'>
                    <InputBase className='custom_input'
                      placeholder="Enter ZIP Code"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                  </div>
                  <div className='flex-1'>
                    <Button variant="contained" className='w-full !py-2 btn_success' color="success">
                      Check Coverage
                    </Button>
                  </div>
                </div>

              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
}

export default WhoopconnectSection;
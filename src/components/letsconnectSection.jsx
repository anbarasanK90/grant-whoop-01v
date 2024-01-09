import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Tablet_Img from '../images/02_Tablet.png';
import Logo_02 from '../images/02_logo.png';
import InputBase from '@mui/material/InputBase';

const LetsconnectSection = () => {
  return (
    <section className='LetsconnectSection'>
        <Container fixed>
          <Grid container className='' spacing={2}>
            <Grid item xs={12} md={5}>
              <img className='max-w-full' src={Tablet_Img} />
              <img className='my-4 max-w-full' src={Logo_02} />
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
            <Grid className='!pl-8' item xs={12} md={7}>
              <Typography variant="h2" className='text_blue !mb-2' align="left" component="h3">
                LET’S GET YOU CONNECTED!
              </Typography>
              <Typography variant="p" color="black" className='!mb-2' align="left" component="p">
                The Affordable Connectivity Program is a government-sponsored program that
                provides discounts on internet service and connected devices for households
                which meet certain income requirements.
              </Typography>
              <Typography variant="h2" className='text_blue !mb-2' align="left" component="h3">
                How do I qualify for the<br></br>
                Affordable Connectivity Program?
              </Typography>
              <Typography variant="p" color="black" className='!mb-2 !mt-8' align="left" component="p">
                If you, your child, or dependent participate in certain government assistance
                programs such as SNAP, Medicaid, WIC, or other programs, then you may
                already be quailified for the Affordable Connectivity Program.
                If you're participating in a low-income program based on your household
                income then you are already qualified!
              </Typography>
              <Typography variant="h2" className='text_blue !mb-2' align="left" component="h3">
                What’s included in your connectivity
                package all for an $11 co-pay!
              </Typography>
              <ul className='listItemsTwo'>
                <li>State-of-the-art 8" Whoop Tablet</li>
                <li>15 GB of Data</li>
                <li>Fast Internet</li>
                <li>5 Megapixel Camera</li>
                <li>32 GB ROM</li>
                <li>QUAD Core CPU</li>
              </ul>


            </Grid>
          </Grid>
        </Container>
      </section>
  );
}

export default LetsconnectSection;
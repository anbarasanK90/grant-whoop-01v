import './App.css';
import Box from '@mui/system/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import WhoopLogo from '../src/images/01_header_logo.png';
import WhoopLogo1 from '../src/images/03_logo.png';
import NoContract from '../src/images/01_Model_txt_1.png';
import NoCredit from '../src/images/01_Model_txt_2.png';
import NoMonthly from '../src/images/01_Model_Txt_3.png';
import Slide1Img from '../src/images/01_Model_1.png';
import Slide2Img from '../src/images/01_Model_2.png';
import Slide3Img from '../src/images/01_Model_3.png';
import Tablet_Img from '../src/images/02_Tablet.png';
import Logo_02 from '../src/images/02_logo.png';
import Logo_03 from '../src/images/03_image.png';
import Logo_04 from '../src/images/04_logo.png';
import Logo_All from '../src/images/03_logo_all.png';
import Icon_Phone from '../src/images/04_icon_1.png';
import Icon_Email from '../src/images/04_icon_2.png';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          home page
        </p>
      </header> */}
      <section className='carousalSection'>
        <Slider {...settings}>
          <div className='relative'>
            <Container fixed>
              <div className='relative z-10'>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12}>
                    <img className='max-w-full mt-5' src={WhoopLogo} />
                  </Grid>
                  <Grid item xs className='flex !flex-col items-start '>
                    <Typography variant="h2" color="white" className='inline-block border-b-2 border-white !mb-2' align="left" component="h3">
                      GET <span className='text_orange'>FREE</span> INTERNET & A NEW TABLET!
                    </Typography>
                    <Typography variant="h4" color="white" align="left" component="h3">
                      <div className='flex items-evenly'>
                        <div className='mr-3'><span className='text_orange'>FREE</span> UNLIMITED TALK</div>
                        <div className='mr-3'><span className='text_orange'>FREE</span> UNLIMITED TEXT</div>
                        <div><span className='text_orange'>FREE</span> 15GB OF DATA</div>
                      </div>

                    </Typography>
                    <Typography variant="p" className='!mt-5' color="white" align="left" component="p">
                      Sign up for a FREE monthly Data Plan and get a NEW Android™
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      Tablet thanks to the Affordable Connectivity Program.
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      No contracts, no credit check, no bills.
                    </Typography>


                  </Grid>

                </Grid>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12} md={5}>
                    <div className='applyTodayDiv'>
                      <Typography variant="h2" color="white" align="center" component="h3">
                        APPLY TODAY
                      </Typography>
                      <Typography variant="h3" color="white" align="center" component="h3">
                        AND GET A NEW TABLET
                      </Typography>
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        Checking the coverage in your area to get started.
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
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        ALREADY STARTED YOUR ENROLLMENT? CLICK HERE!
                      </Typography>

                    </div>
                    <Typography variant="p" color="white" className='!mt-3 !mb-8' align="left" component="p">
                      WHOOP Tablet available through the Affordable <br></br>
                      Connectivity Program for a One-Time $11.00 Co-Pay
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <img className='max-w-full' src={NoContract} />
                  </Grid>
                </Grid>

              </div>
              <img className='carousal_right_img' src={Slide1Img} />
            </Container>

          </div>
          <div className='relative'>
            <Container fixed>
              <div className='relative z-10'>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12}>
                    <img className='max-w-full mt-5' src={WhoopLogo} />
                  </Grid>
                  <Grid item xs className='flex !flex-col items-start '>
                    <Typography variant="h2" color="white" className='inline-block border-b-2 border-white !mb-2' align="left" component="h3">
                      GET <span className='text_orange'>FREE</span> INTERNET & A NEW TABLET!
                    </Typography>
                    <Typography variant="h4" color="white" align="left" component="h3">
                      <div className='flex items-evenly'>
                        <div className='mr-3'><span className='text_orange'>FREE</span> UNLIMITED TALK</div>
                        <div className='mr-3'><span className='text_orange'>FREE</span> UNLIMITED TEXT</div>
                        <div><span className='text_orange'>FREE</span> 15GB OF DATA</div>
                      </div>

                    </Typography>
                    <Typography variant="p" className='!mt-5' color="white" align="left" component="p">
                      Sign up for a FREE monthly Data Plan and get a NEW Android™
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      Tablet thanks to the Affordable Connectivity Program.
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      No contracts, no credit check, no bills.
                    </Typography>


                  </Grid>

                </Grid>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12} md={5}>
                    <div className='applyTodayDiv'>
                      <Typography variant="h2" color="white" align="center" component="h3">
                        APPLY TODAY
                      </Typography>
                      <Typography variant="h3" color="white" align="center" component="h3">
                        AND GET A NEW TABLET
                      </Typography>
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        Checking the coverage in your area to get started.
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
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        ALREADY STARTED YOUR ENROLLMENT? CLICK HERE!
                      </Typography>

                    </div>
                    <Typography variant="p" color="white" className='!mt-3 !mb-8' align="left" component="p">
                      WHOOP Tablet available through the Affordable <br></br>
                      Connectivity Program for a One-Time $11.00 Co-Pay
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <img className='max-w-full' src={NoCredit} />
                  </Grid>
                </Grid>

              </div>
              <img className='carousal_right_img' src={Slide2Img} />
            </Container>

          </div>
          <div className='relative'>
            <Container fixed>
              <div className='relative z-10'>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12}>
                    <img className='max-w-full mt-5' src={WhoopLogo} />
                  </Grid>
                  <Grid item xs className='flex !flex-col items-start '>
                    <Typography variant="h2" color="white" className='inline-block border-b-2 border-white !mb-2' align="left" component="h3">
                      GET <span className='text_orange'>FREE</span> INTERNET & A NEW TABLET!
                    </Typography>
                    <Typography variant="h4" color="white" align="left" component="h3">
                      <div className='flex items-evenly'>
                        <div className='mr-3'><span className='text_orange'>FREE</span> UNLIMITED TALK</div>
                        <div className='mr-3'><span className='text_orange'>FREE</span> UNLIMITED TEXT</div>
                        <div><span className='text_orange'>FREE</span> 15GB OF DATA</div>
                      </div>

                    </Typography>
                    <Typography variant="p" className='!mt-5' color="white" align="left" component="p">
                      Sign up for a FREE monthly Data Plan and get a NEW Android™
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      Tablet thanks to the Affordable Connectivity Program.
                    </Typography>
                    <Typography variant="p" className='!mt-3' color="white" align="left" component="p">
                      No contracts, no credit check, no bills.
                    </Typography>


                  </Grid>

                </Grid>
                <Grid container className='' spacing={2}>
                  <Grid item xs={12} md={5}>
                    <div className='applyTodayDiv'>
                      <Typography variant="h2" color="white" align="center" component="h3">
                        APPLY TODAY
                      </Typography>
                      <Typography variant="h3" color="white" align="center" component="h3">
                        AND GET A NEW TABLET
                      </Typography>
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        Checking the coverage in your area to get started.
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
                      <Typography variant="p" color="white" className='!mt-3' align="center" component="p">
                        ALREADY STARTED YOUR ENROLLMENT? CLICK HERE!
                      </Typography>

                    </div>
                    <Typography variant="p" color="white" className='!mt-3 !mb-8' align="left" component="p">
                      WHOOP Tablet available through the Affordable <br></br>
                      Connectivity Program for a One-Time $11.00 Co-Pay
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <img className='max-w-full' src={NoMonthly} />
                  </Grid>
                </Grid>

              </div>
              <img className='carousal_right_img' src={Slide3Img} />
            </Container>

          </div>
        </Slider>

      </section>
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
      <section className='disclaimer_section'>
        <Container fixed>
          <Grid container className='' spacing={2}>
            <Grid item xs={12}>
              <div className='flex flex-col md:flex-row justify-around'>
                <img className='mb-4' src={Logo_04} />
                <div className='flex mb-4 items-center'>
                  <img className='max-w-full mr-2' src={Icon_Phone} />
                  <div>
                    <p>Phone us at:</p>
                    <p>(412) 981-2323</p>
                  </div>
                </div>
                <div className='flex mb-4 items-center'>
                  <img className='max-w-full mr-2' src={Icon_Email} />
                  <div>
                    <p>Email us at:</p>
                    <p>info@getyourwhoop.com</p>
                  </div>
                </div>
              </div>

            </Grid>
            <Grid item xs={12} className='md:!mt-8'>
              <Divider variant="middle" />

            </Grid>
            <Grid item xs={12} className='!mt-5'>
              <Typography variant="p" color="black" className='textAlignLast' align="left" component="p">
                WhoopConnect Enrollment Partner is a third-party distributor for WhoopConnect and is responsible for the content and creation of this site. WhoopConnect is a service provider for the
                government-funded Affordable Connectivity Program (ACP). The ACP is a government benefit program operated by the Federal Communication Commission (FCC) that provides discounts on
                monthly broadband Internet access services and certain connected devices. Subject to a co-payment of $11.00USD. ACP service and device discounts cannot be transferred to another household
                or individual. Eligible households are limited to one monthly service discount and one device discount. Rates and device discounts are available for qualified customers only. Visit
                www.whoopconnect.com for full eligibility requirements, service agreements and program details.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
      <footer className='customFooter_section'>
      <Typography variant="p" color="white" className='' align="center" component="p">
      © 2024 Get Your Whoop. All Rights Reserved.
                </Typography>
      </footer>
    </div>
  );
}

export default App;

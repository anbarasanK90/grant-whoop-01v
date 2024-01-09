import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Main_logo from '../images/Main_logo_1.png';
import Main_logo_2 from '../images/Main_logo_2.png';
import Network_icon from '../images/Network_icon_App_Coverage.png';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Approved from '../images/Approved.png';
import Slide_7_Tablet from '../images/Slide_7_Tablet.png';

const marks = [
    {
        value: 0,
        label: 'Low',
    },
    {
        value: 33,
        label: 'Medium',
    },
    {
        value: 66.66,
        label: 'Good',
    },
    {
        value: 100,
        label: 'Excellent',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const Coveragereport = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <Container>
            <Grid container className='mt-5' spacing={2}>
                <Grid item xs={12} md={4} lg={3.5} className='!m-auto'>
                    <div className='flex flex-row justify-evenly'>
                        <img className='max-w-full' src={Main_logo} />
                        <img className='max-w-full' src={Main_logo_2} />
                    </div>
                    <div className='CoverageDiv mt-4'>
                        <div className='section_1 hidden'>
                            <Typography variant="h5" color="black" align="center" component="h5">
                                COVERAGE REPORT
                            </Typography>
                            <Typography variant="p" color="black" className='' align="center" component="p">
                                Enter ZIP Code To Get Started
                            </Typography>
                            <InputBase className='custom_input mt-3'
                                placeholder="Enter ZIP Code"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <img className='max-w-full m-auto mb-8' src={Network_icon} />
                            <Box sx={{ width: 100 + '%' }}>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={33}
                                    getAriaValueText={valuetext}
                                    step={33}
                                    marks={marks}
                                    valueLabelDisplay="on"
                                />
                            </Box>
                            <Button variant="contained" className='w-full !py-2 btn_success' color="success">
                                Submit
                            </Button>
                        </div>
                        <div className='section_2'>
                            <div className='Step1 hidden'>
                                <Typography variant="h5" className="text_blue" align="center" component="h5">
                                    CONTACT INFORMATION
                                </Typography>
                                <Typography variant="p" color="black" className='' align="center" component="p">
                                    Fill out the contact details below to
                                    get started
                                </Typography>
                                <Grid container className='!mt-3' spacing={2}>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <TextField required size="small" id="outlined-basic" label="First Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <TextField required size="small" id="outlined-basic" label="Last Name" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <TextField required className='w-full' size="small" id="outlined-basic" label="Email" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <TextField required className='w-full' size="small" id="outlined-basic" label="Phone Number" variant="outlined" />
                                    </Grid>
                                </Grid>
                                <div className='mt-3'>
                                    <Typography variant="h5" className="text_blue" align="center" component="h5">
                                        GET APPROVED
                                    </Typography>
                                    <Typography variant="p" color="black" className='' align="center" component="p">
                                        Your information is kept confidential
                                        and only used for the approval process
                                        through our secure platform
                                    </Typography>
                                    <Grid container className='!mt-2' spacing={2}>

                                        <Grid item xs={12} md={12} lg={12}>
                                            <TextField className='w-full' required size="small" id="outlined-basic" label="Date of Birth" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} md={12} lg={12}>
                                            <TextField className='w-full' required size="small" id="outlined-basic" label="Last 4 Numbers of SSN" variant="outlined" />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className='mt-4 border !rounded p-3'>
                                    <FormGroup className='items-start'>
                                        <FormControlLabel className='font_xs' control={<Checkbox defaultChecked size="small" />} label="I consent to Excess Telecom contacting me via
                                Email, SMS, and/or phone call if necessary to
                                establish eligibility or to complete my application." />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className='Step2 hidden'>
                                <Typography variant="h5" className="text_blue" align="center" component="h5">
                                    GOVERNMENT PROGRAM
                                </Typography>
                                <Typography variant="p" color="black" className='' align="center" component="p">
                                    Please select the government program
                                    you currently participate in
                                </Typography>
                                <p className='text_blue font_small mt-4'>GOVERNMENT PROGRAM*</p>
                                <div className='SelectedListItems'>
                                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                        <List component="nav" aria-label="main mailbox folders">
                                            <ListItemButton
                                                selected={selectedIndex === 0}
                                                onClick={(event) => handleListItemClick(event, 0)}
                                            >
                                                <ListItemText primary="Medicaid / Medi-Cal" />
                                            </ListItemButton>
                                            <ListItemButton
                                                selected={selectedIndex === 1}
                                                onClick={(event) => handleListItemClick(event, 1)}
                                            >
                                                <ListItemText primary="SNAP / EBT / Calfresh" />
                                            </ListItemButton>
                                            <ListItemButton
                                                selected={selectedIndex === 2}
                                                onClick={(event) => handleListItemClick(event, 2)}
                                            >
                                                <ListItemText primary="Federal Pell Grant" />
                                            </ListItemButton>
                                            <ListItemButton
                                                selected={selectedIndex === 3}
                                                onClick={(event) => handleListItemClick(event, 3)}
                                            >
                                                <ListItemText primary="Veterans Pensions & Survivors Benefit Program" />
                                            </ListItemButton>
                                            <ListItemButton
                                                selected={selectedIndex === 4}
                                                onClick={(event) => handleListItemClick(event, 4)}
                                            >
                                                <ListItemText primary="Special Supplemental Nutrition
Program for Women, Infants & Children (WIC)" />
                                            </ListItemButton>
                                            <ListItemButton
                                                selected={selectedIndex === 5}
                                                onClick={(event) => handleListItemClick(event, 5)}
                                            >
                                                <ListItemText primary="Supplemental Security Income (SSI)" />
                                            </ListItemButton>
                                            <ListItemButton
                                                selected={selectedIndex === 6}
                                                onClick={(event) => handleListItemClick(event, 6)}
                                            >
                                                <ListItemText primary="200% of Federal Poverty Guidelines (Income)" />
                                            </ListItemButton>
                                            <ListItemButton
                                                selected={selectedIndex === 7}
                                                onClick={(event) => handleListItemClick(event, 7)}
                                            >
                                                <ListItemText primary="Federal Public Housing Assistance" />
                                            </ListItemButton>
                                            <ListItemButton
                                                selected={selectedIndex === 8}
                                                onClick={(event) => handleListItemClick(event, 8)}
                                            >
                                                <ListItemText primary="Tribal" />
                                            </ListItemButton>
                                        </List>
                                    </Box>
                                </div>
                            </div>
                            <div className='Step3 hidden'>
                                <Typography variant="h5" className="text_blue" align="center" component="h5">
                                    DISCLOSURE AGREEMENTS
                                </Typography>
                                <Typography variant="p" color="black" className='' align="center" component="p">
                                    Please read and check
                                    the disclosure agreements
                                </Typography>
                                <p className='text_blue font_small mt-4'>ENROLLMENT DISCLOSURES - 1/11</p>
                                <div className='mt-4 border !rounded-md background_grey green_border p-3'>
                                    <FormGroup className='items-start'>
                                        <FormControlLabel className='font_xs' control={<Checkbox defaultChecked size="small" />} label="For my household, I affirm and understand that the 
                                        Affordable Connectivity Program (ACP) is a federal 
                                        government benefit program operated by the (FCC) 
                                        that provides discounts on monthly broadband
                                        Internet access service and certain connected 
                                        devices for eligible consumers." />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className='Step4 hidden'>
                                <Typography variant="h5" className="text_blue" align="center" component="h5">
                                    ENROLLMENT REVIEW
                                </Typography>
                                <Typography variant="p" color="black" className='' align="center" component="p">
                                    Please review all information is correct
                                    and press submit to enroll
                                </Typography>
                                <p className='text_blue font_small mt-4'>PERSONAL</p>
                                <div className='mt-2 border !rounded-md readonlyvalues background_grey green_border p-3'>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>Name</div>
                                            <div className='flex-1 formValue'>Date of Birth</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>Name</div>
                                            <div className='flex-1 formValue'>Date of Birth</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>SSN (last 4)</div>
                                            <div className='flex-1 formValue'>XXXX</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>Email</div>
                                            <div className='flex-1 formValue'>patrickwharram@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>Phone Number</div>
                                            <div className='flex-1 formValue'>Phone Number</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>Governemnt Program</div>
                                            <div className='flex-1 formValue'>Snap</div>
                                        </div>
                                    </div>
                                </div>
                                <p className='text_blue font_small mt-4'>ADDRESS & SHIPPING</p>
                                <div className='mt-2 border !rounded-md readonlyvalues background_grey green_border p-3'>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>Address</div>
                                            <div className='flex-1 formValue'>XXX</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>City</div>
                                            <div className='flex-1 formValue'>XXX</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>State</div>
                                            <div className='flex-1 formValue'>XXXX</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>Zip Code</div>
                                            <div className='flex-1 formValue'>XXX</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row mb-1'>
                                        <div className='formvalues flex w-full'>
                                            <div className='flex-1 formCaption'>Shipping Address</div>
                                            <div className='flex-1 formValue'>XXX</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Step5 hidden'>
                                <Typography variant="h5" className="text_blue" align="center" component="h5">
                                    YOUR ADDRESS
                                </Typography>
                                <Typography variant="p" color="black" className='' align="center" component="p">
                                    Please enter your address
                                </Typography>
                                <Grid container className='!mt-3' spacing={2}>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <TextField required className='w-full' size="small" id="outlined-basic" label="ADDRESS LINE 1" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <TextField required className='w-full' size="small" id="outlined-basic" label="ADDRESS LINE 2" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={12}>
                                        <TextField required className='w-full' size="small" id="outlined-basic" label="City" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <TextField required size="small" id="outlined-basic" label="State" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={6}>
                                        <TextField required size="small" id="outlined-basic" label="Zipcode" variant="outlined" />
                                    </Grid>
                                </Grid>
                                <div className='mt-4 addressCheckbox'>
                                    <FormGroup className='items-start'>
                                        <FormControlLabel className='font_xs' control={<Checkbox defaultChecked size="small" />} label="I have a different shipping address" />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className='Step6 hidden'>
                                <Typography variant="h5" className="text_blue" align="center" component="h5">
                                    CONGRATULATIONS
                                </Typography>
                                <Typography variant="p" color="black" className='' align="center" component="p">
                                    Your enrollment application
                                    has been approved. You are on your
                                    way to getting connected for free!
                                </Typography>
                                <img className='max-w-full m-auto my-8' src={Approved} />

                                <Typography variant="p" color="black" className='my-5' align="center" component="p">
                                    You will receive an email with follow-up information.
                                </Typography>
                            </div>
                            <div className='Step6'>
                                <Typography variant="h4" className="text_blue" align="center" component="h4">
                                    EXCELLENT!
                                </Typography>
                                <Typography variant="h5" className="text_blue" align="center" component="h5">
                                    YOU QUALIFY FOR A
                                    NEW TABLET
                                </Typography>
                                <img className='max-w-full m-auto my-8' src={Slide_7_Tablet} />

                                <Typography variant="p" color="black" className='my-5' align="center" component="p">
                                A one-time fee of $11 required.
Devices may vary.
                                </Typography>
                            </div>
                            <Box sx={{ width: '100%' }}>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <Button onClick={handleReset}>Reset</Button>
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>Step steps {activeStep + 1}</Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, mb: 2 }}>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                                variant="contained" className='w-full !py-2 btn_secondary' color="success"
                                            >
                                                Back
                                            </Button>
                                            <Box sx={{ flex: '1 1 auto' }} />

                                            <Button variant="contained" className='w-full !py-2 btn_success' color="success" onClick={handleNext}>
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>

                                )}
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};
                                        if (isStepOptional(index)) {
                                            labelProps.optional = (
                                                <Typography variant="caption"></Typography>
                                            );
                                        }
                                        if (isStepSkipped(index)) {
                                            stepProps.completed = false;
                                        }
                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel {...labelProps}></StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                            </Box>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Coveragereport;
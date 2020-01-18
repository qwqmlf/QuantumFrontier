import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const articleStep = [
    Qsvm-1,
    Qsvm-2,
    Qsvm-3,
    Qsvm-4,
]

const useStyles = makeStyles(theme => ({
    title: {
        padding: '20px',
        lineHeight: '46px',
        fontSize: 'x-large',
        textAlign: 'left',
        borderBottom: 'groove 3px #C0C0C0',
    },
    stitle: {
        padding: '10px',
        fontSize: 'large',
        textAlign: 'left',
    },
    paragraph: {
        marginBottom: '40px',
        margin: '30px',
        [theme.breakpoints.down('sm')]: {
            margin: '10px',
        },
    },
}));


function Qsvm(
) {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = articleStep.length;

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    return (
        <div>
            <div className={classes.title}>
                Qsvmページ
            </div>
            <div className={classes.paragraph}>
                <p>                
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    章タイトル１
                </div>
                <p>                
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    章タイトル2
                </div>
                <p>                
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                    Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。Qsvmページの説明。
                </p>
            </div>
            <div>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        Back
                    </Button>
                    }
                />
            </div>
        </div>
    )
}

export default Qsvm;

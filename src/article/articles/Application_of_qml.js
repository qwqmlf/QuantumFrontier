import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const articleStep = [
    Application_of_qml-1,
    Application_of_qml-2,
    Application_of_qml-3,
    Application_of_qml-4,
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


function Application_of_qml(
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
                Application_of_qmlページ
            </div>
            <div className={classes.paragraph}>
                <p>                
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    章タイトル１
                </div>
                <p>                
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                </p>
            </div>
            <div className={classes.paragraph}>
                <div className={classes.stitle}>
                    章タイトル2
                </div>
                <p>                
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
                    Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。Application_of_qmlページの説明。
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

export default Application_of_qml;

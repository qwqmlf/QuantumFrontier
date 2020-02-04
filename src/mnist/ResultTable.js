import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const colors = {
}


const useStyles = makeStyles(theme => ({
    table: {
        fontSize: '24pt', 
        [theme.breakpoints.down('sm')]: {
            fontSize: '26pt',
            margin: '20px',
            lineHeight: '46px', 
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0px', 
            fontSize: '16pt',
        },
    }
}));

function ResultTable() {

    const classes = useStyles();

    return (
        <div className={classes.table}>

            <table className="table">
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable;
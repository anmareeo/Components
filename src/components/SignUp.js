import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
 
    

export default function SignUp (props){
//first parameter (in the brackets below)is what we want to change, and the second is the function that changes it.
    const classes = useStyles();
    let [message, setMessage] = React.useState (props.initialMessage)
    let [fName, setfName] = React.useState ('')
    let [lName, setlName] = React.useState ('')
    const onClickHandler = () => {
        setMessage ('New Message')
    }
    const onChangeHandler = (event) => {
      
        switch (event.target.name){
            case 'fName':
                setfName(event.target.value)
            break
            case 'lName':
                setlName(event.target.value)
            break
            default:

        }
    }

    return (
        <div className={classes.root}>
            <h1>{message}</h1>
            <Button Button variant="contained" color="primary" onClick = {onClickHandler}>Click Me.</Button>
            <br></br>
            <br></br>
            First Name <input onChange={onChangeHandler} name="fName" value={fName}></input>
            <br></br>
            <br></br>
            Last Name <input onChange={onChangeHandler} name="lName" value={lName}></input>

        </div>
    )

}
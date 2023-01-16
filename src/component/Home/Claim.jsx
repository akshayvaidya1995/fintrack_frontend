import React, {useState, useEffect} from 'react';
import {Grid, TextField, Button} from "@mui/material";

export const Claim = () => {
    const [empId, setEmpId] = useState(0);
    const [amnt, setAmnt] = useState(0);
    const [refresh, setRefresh] = useState(false);

    const handleSubmit = () => {
        const payload = {
            empId,
            amnt,
        };
        // sessionStorage.setItem("expClaim", JSON.stringify(payload)); //expClain is key for session/ local store
        localStorage.setItem("expClaim", JSON.stringify(payload));
    }      

  return (
    <React.Fragment>
        
        <Grid container spacing={3} >
            <Grid item xs={4}>
                <TextField fullWidth onChange={(e)=>setEmpId(e.target.value)} variant='outlined' label="Employee ID" />
            </Grid>
            <Grid item xs={4}>
                <TextField fullWidth onChange={(e)=>setAmnt(e.target.value)} variant='outlined' label="Amount" />
            </Grid>
            <Grid item xs={4}>
                <Button fullWidth onClick={handleSubmit} variant='contained' color='success' sx={{height: 55}}>Submit</Button>
            </Grid>
        </Grid>
    </React.Fragment>
  )
}

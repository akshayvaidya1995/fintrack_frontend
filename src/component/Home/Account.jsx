import React, {useEffect, useState} from 'react';
import {Grid, Card, CardContent, TextField, Button} from "@mui/material";
import { Navigate, useNavigate } from 'react-router-dom';


export const Account = () => {

    const [curr, setCurr] = useState({});
    const [eleg, setEleg] = useState(0);
    const [app, setApp] = useState(0);
    const [outs, setOuts] = useState(0);
    const [tobepaid, setToBePaid] = useState(0);
    
    const navigate = useNavigate(); 

    useEffect((e)=>{
        setToBePaid(app - outs)
    }, [app, outs])

    useEffect(()=>{
        const currData = localStorage.getItem("expClaim");
        currData &&
        setCurr(JSON.parse(currData));
    }, []);

    const  handleApprove = () => {
        const payload = {
            ...curr,
            eligAmnt: eleg,
            appAmnt: app,
            outStanding: outs,
            tobepaid,
        }
        localStorage.setItem("expClaim", JSON.stringify(payload));
        navigate("/dashboard")
    };

    const handleReject = () => {
        localStorage.removeItem("expClaim");
        setCurr({}); //removing below render
    }

  return (
    <React.Fragment>
        {curr.empId && !tobepaid &&
        <Grid container spacing={3} style= {{display:"flex", flexDirection:"column"}}>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        {curr.empId}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        {curr.amnt}
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <TextField onChange={(e)=>setEleg(e.target.value)} fullWidth variant='outlined' label="Eligibal Amount" />
            </Grid>
            <Grid item xs={3}>
                <TextField onChange={(e)=>setApp(e.target.value)} fullWidth variant='outlined' label="Approved Amount" />
            </Grid>
            <Grid item xs={3}>
                <TextField onChange={(e)=>setOuts(e.target.value)} fullWidth variant='outlined' label="Outstading "/>
            </Grid>
            <Grid item xs={3}>
                To be paid: {tobepaid}
            </Grid>
            <Grid item xs={3}>
                <Button onClick={handleApprove} variant='contained' color='success' >Approve</Button>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={handleReject} variant='contained' color='error' >Reject</Button>
            </Grid>
        </Grid>
        }
    </React.Fragment>
  )
}
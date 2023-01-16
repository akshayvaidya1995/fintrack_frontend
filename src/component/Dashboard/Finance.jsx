import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Finance = () => {

  const [curr, setCurr] = useState({});
  const [paidamnt, setPaidAmnt] = useState(0);
  const [balance, setBalance] = useState(0);

  const navigate = useNavigate();

  useEffect(()=>{
      setBalance(curr.tobepaid - paidamnt)
  }, [paidamnt])

  useEffect(()=>{
    const currData = localStorage.getItem("expClaim");
    currData &&
    setCurr(JSON.parse(currData))
  })

  const handleApprove = () => {
    const payload = {
      ...curr,
       paidamnt,
       balance,
    }
    localStorage.setItem("expClaim", JSON.stringify(payload));
    navigate("/")
  }

  const handleReject = () => {
    localStorage.removeItem("expClaim");
    navigate("/")
  }

  return (
    <React.Fragment>
        <h1>Finance</h1>
        {curr.tobepaid &&
        <Grid caontainer spacing={3} style={{display:"flex", flexDirection:"column"}}>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                 EmployeeID: {curr.empId}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                   Amount: {curr.amnt}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                   Eligibal Amount: {curr.eligAmnt}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                   Approved Amount: {curr.appAmnt}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                  Outstanding: {curr.outStanding}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardContent>
                 Amount TobePaid: {curr.tobepaid}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <TextField onChange={(e)=>setPaidAmnt(e.target.value)} variant='outlined' label='Paid Amount' />
          </Grid>
          <Grid item xs={3}>
              <Card>
                <CardContent>
                 Balance: {balance}
                </CardContent>
              </Card>
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

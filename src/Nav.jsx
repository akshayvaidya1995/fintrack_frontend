import { Card, CardContent, Grid, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


export const Nav = () => {
  return (
    <React.Fragment>
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Link to="/home">
                            <Button fullWidth variant="contained">Home</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="/dashboard">
                            <Button fullWidth variant="contained">Dashboard</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="/earning">
                            <Button fullWidth variant="contained">Earning</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="/expenses">
                            <Button fullWidth variant="contained">Expenses</Button>
                        </Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </React.Fragment>
  )
}

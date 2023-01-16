import React from 'react';
import { Grid, Button, Card, CardContent } from '@mui/material';

export const DataListItemExp = ({item}) => {
  return (
    <React.Fragment>
     <Card sx={{backgroundColor:"#CAD5E2", border: 2, margin: 1}}>
      <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={2}>{item.item}</Grid>
        <Grid item xs={2}> {item.cat} </Grid>
        <Grid item xs={2}> {item.amnt} </Grid>
        <Grid item xs={3}>
          <Button variant='contained' color='success'>EDIT</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant='contained' color='error'>DELETE</Button>
        </Grid>
      </Grid>
      </CardContent>
     </Card>
    </React.Fragment>
  )
}

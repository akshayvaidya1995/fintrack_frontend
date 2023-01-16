import React, { useState } from 'react';
import { Grid, Button, Card, CardContent } from '@mui/material';
import axios from 'axios';

export const DataListItem = ({item, doRefresh}) => {

  const handleDelete = async (_id) => {
    const payload = {_id};
    await axios.post("http://localhost:4040/earningdelete",payload)
    doRefresh()
  }


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
          <Button onClick={()=>handleDelete(item._id)} variant='contained' color='error'>DELETE</Button>
        </Grid>
      </Grid>
      </CardContent>
     </Card>
    </React.Fragment>
  )
}

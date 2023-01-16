import React, {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { DataListItemExp } from './DataListItemExp';

export const DataListExp = () => {
  const[data, setData] = useState([]);
  console.log(data);
  const getData =async () => {
    const result =await axios.get("http://localhost:4040/getexpenses")
    setData(result.data)
  }

  useEffect(()=>{
    getData()
  }, [])
  
  return (
    <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={2}>Item</Grid>
          <Grid item xs={2}>Catagory</Grid>
          <Grid item xs={2}>Amount</Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={12}>
          
            
            {
              data.length>0&& data.map((item)=>{
              return ( <DataListItemExp item={item}  />)
              })
            }
          
          
          
          </Grid>
        </Grid>

    </React.Fragment>
  )
}

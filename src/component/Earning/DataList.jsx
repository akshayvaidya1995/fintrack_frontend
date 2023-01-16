import React, {useState, useEffect} from 'react';
import { Grid, TextField, Card, CardContent } from '@mui/material';
import axios from 'axios';
import { DataListItem } from './DataListItem';

export const DataList = () => {
  const[data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  console.log(data);
  const getData =async () => {
    const result =await axios.get("http://localhost:4040/getearning")
    setData(result.data)
  }

  const doRefresh = () => {
    setRefresh(!refresh)
  }

  useEffect(()=>{
    getData();
  }, [])

  useEffect(()=>{
    if(refresh) {
      getData()
      setRefresh(false);
    }
  }, [refresh])
  
  return(
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
              return ( <DataListItem item={item} doRefresh={doRefresh}  />)
              })
            }
          </Grid>
        </Grid>

    </React.Fragment>
  )
}







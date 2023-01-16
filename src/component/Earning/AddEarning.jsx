import React, {useState, useEffect} from 'react';
import { Grid, TextField, Button, Alert } from '@mui/material';
import axios from 'axios';
import Select from "react-select";

export const AddEarning = () => {
    const[item, setItem] = useState("");
    const [cat, setCat] = useState(0);
    const [amnt, setAmnt] = useState(0);
    const [msg, setMsg] = useState("");
    const [isShow, setIsShow] = useState(false);
    const [options, setOptions] = useState([])

    const handdleAdd = async()=>{
        const payload = {item, cat, amnt};
        const result = await axios.post("http://localhost:4040/addearning", payload);
        setMsg(result.data);  
    };

    const getData = async ()=>{
        const result = await axios.get("http://localhost:4040/catdd")
        setOptions(result.data)
    }
    
    useEffect(()=>{
        getData();
    }, [])

    const handleReset=()=>{
        setAmnt(0)
        setItem("")
    }

    useEffect(()=>{
        if(msg !==""){
            setIsShow(true)
            handleReset()
            setTimeout(()=>{
                setMsg("")
            }, 5000)
        } else {
            setIsShow(false)
        }
    }, [msg])
 
  return (
    <React.Fragment>
        <Grid container spacing={3}>
            <Grid item xs={3}>
              <Select options={options}  onChange={(opt)=>setCat(opt.value)} />
            </Grid>
            <Grid item xs={3}>
                <TextField value={item} onChange={(e)=>setItem(e.target.value)} fullWidth variant="outlined" label="Item"/>
            </Grid>
            <Grid item xs={3}>
                <TextField value={amnt} type="number" onChange={(e)=>setAmnt(e.target.value)} fullWidth variant="outlined" label="Amount"/>
            </Grid>
            <Grid item xs={3}>
                <Button
                onClick={handdleAdd} 
                fullWidth variant="contained" 
                sx={{height: 55}} 
                disabled={item.length < 3 || Number(amnt) < 5} >Submit</Button>
            </Grid>
            <Grid item xs={12}>
                {
                    isShow && <Alert severity='success'> {msg} </Alert>
                }
            </Grid>
        </Grid>
    </React.Fragment>
  )
}

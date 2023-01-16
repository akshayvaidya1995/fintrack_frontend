import React from 'react';
import { AddEarning } from './Earning/AddEarning';
import {Card, CardContent} from "@mui/material";
import { DataList } from './Earning/DataList';

export const Earning = () => {
  return (
    <React.Fragment>
        <Card sx={{height: 100}}>
          <CardContent>
            <AddEarning />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <DataList/>
          </CardContent>
        </Card>
    </React.Fragment>
  )
}

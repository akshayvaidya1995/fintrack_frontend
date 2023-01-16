import React from 'react';
import { AddExpenses } from "./Expenses/AddExpenses"
import { Card, CardContent } from '@mui/material';
import { DataListExp } from './Expenses/DataListExp';

export const Expenses = () => {
  return (
    <React.Fragment>
         <Card sx={{height: 100}}>
          <CardContent>
            <AddExpenses />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <DataListExp/>
          </CardContent>
        </Card>
    </React.Fragment>
  )
}

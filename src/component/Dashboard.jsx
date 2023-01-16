import React from 'react';
import { Finance } from './Dashboard/Finance';
import { Card, CardContent } from '@mui/material';

export const Dashboard = () => {
  return (
    <React.Fragment>
        <Card>
          <CardContent>
            <Finance/>
          </CardContent>
        </Card>
    </React.Fragment>
  )
}

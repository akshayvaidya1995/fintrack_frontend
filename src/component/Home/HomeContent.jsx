import React from 'react';
import { Claim } from './Claim';
import { Grid, Card, CardContent } from '@mui/material';
import { Account } from './Account';

export const HomeContent = () => {
  return (
    <React.Fragment>
        <h1>My Home Content</h1>
        <Card>
          <CardContent>
           <Claim/>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Account/>
          </CardContent>
        </Card>
        
    </React.Fragment>
  )
}

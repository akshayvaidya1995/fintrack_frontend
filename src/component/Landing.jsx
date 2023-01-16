import React from 'react';
import { Card, CardContent} from "@mui/material";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./Home";
import { Dashboard } from './Dashboard';
import { Earning } from './Earning';
import { Expenses } from './Expenses';
import { Nav } from '../Nav';


export const Landing = () => {
  return (
    <React.Fragment>
        <Card>
            <CardContent>
                <BrowserRouter>
                    <Nav/>
                    <Routes>
                        <Route path='/home' element={<Home />}/>
                        <Route path='/dashboard' element={<Dashboard />}/>
                        <Route path='/expenses' element={<Expenses />}/>
                        <Route path='/earning' element={<Earning />}/>
                        <Route path='/' element={<Home />}/>
                    </Routes>
                </BrowserRouter>
            </CardContent>
        </Card>
    </React.Fragment>
  )
}

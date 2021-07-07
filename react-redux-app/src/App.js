import React, { useEffect } from 'react';
import './App.css';
import Svg from './components/Svg'
import Cards from './components/Cards';
import { connect } from 'react-redux';
import { fetchCases } from './actions/casesAction'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

function App(props) {
      useEffect(() => {
        props.fetchCases()

      },[])



  return (
    <div>
    <div>
      <Typography variant="h1" >Corona Virus Global Data</Typography>
      </div>
      <div className="App">

     <Card style={{width:'40%', margin:'1rem',padding:'0.5rem',backgroundColor:'#EFEFEF',}} 
     variant="outlined">
     <CardContent>
      <Cards title = {'Infected'} description = {'active cases'} cases = {props.confirmedCases} date = {props.date} />
      <CardMedia 
          component="img"
          alt=""
          height="240"
          image="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          title=""/>
      </CardContent>
     </Card>

     <Card style={{width:'40%', margin:'1rem',padding:'0.5rem',backgroundColor:'#EFEFEF'}} 
     variant="outlined">
     <CardContent>
      <Cards title = {'Recovered'} description = {'recoveries'} cases = {props.recoveredCases} date = {props.date} />
      <CardMedia 
          component="img"
          alt=""
          height="240"
          image="https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          title=""/>
      </CardContent>
      </Card>

      <Card style={{width:'40%', margin:'1rem',padding:'0.5rem',backgroundColor:'#EFEFEF'}} 
       variant="outlined">
      <CardContent>
        <Cards title = {'Deaths'} description = {'deaths'} cases = {props.deaths} date = {props.date} />
        <CardMedia 
          component="img"
          alt=""
          height="240"
          image="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          title=""/>
        </CardContent>
     </Card>

      </div>
      <Svg/>
    </div>
    
  );
}

const mapStateToProps = state => {
  return{
    confirmedCases: state.cardReducer.confirmedCases,
    recoveredCases: state.cardReducer.recoveredCases,
    deaths: state.cardReducer.deaths,
    isFetching: state.cardReducer.isFetching,
    date: state.cardReducer.date,
    error: state.cardReducer.error
  }
}

export default connect(mapStateToProps, {fetchCases})(App);

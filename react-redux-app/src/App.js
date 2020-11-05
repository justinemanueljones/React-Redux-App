import React, { useEffect } from 'react';
import './App.css';
import Svg from './components/Svg'
import Cards from './components/Cards';
import { connect } from 'react-redux';
import { fetchCases } from './actions/casesAction'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


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

     <Card style={{width:'40%', margin:'1rem',padding:'0.5rem',}} 
     variant="outlined">
     <CardContent>
      <Cards title = {'Infected'} description = {'active cases'} cases = {props.confirmedCases} date = {props.date} />
      </CardContent>
     </Card>

     <Card style={{width:'40%', margin:'1rem',padding:'0.5rem',}} 
     variant="outlined">
     <CardContent>
      <Cards title = {'Recovered'} description = {'recoveries'} cases = {props.recoveredCases} date = {props.date} />
      </CardContent>
      </Card>

      <Card style={{width:'40%', margin:'1rem',padding:'0.5rem',}} 
       variant="outlined">
      <CardContent>
        <Cards title = {'Deaths'} description = {'deaths'} cases = {props.deaths} date = {props.date} />
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

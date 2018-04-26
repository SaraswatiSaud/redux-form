import React, { Component } from 'react'
import SearchBar from './searchBar.jsx'

function Home(props) {
  const { classes } = props;

  return (
    <div style={{textAlign: 'center', marginTop: '10%'}}>
      <SearchBar />
    </div>
  );
}

export default Home

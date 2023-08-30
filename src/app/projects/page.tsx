"use client"

import React from 'react';
import Image from 'next/image';
import { Grid, Box, Paper } from '@mui/material'

const projectTech = {
  "CSE840": {
    "names": [
      "Python",
      "Numpy",
      "Pandas"
    ],
    "sources": [
      "/softwareLogos/Python.png",
      "/softwareLogos/Numpy.png",
      "/softwareLogos/Pandas.png"
    ]
  },
  
  "CSE477": {
    "names": [
      "HTML5",
      "CSS",
      "JavaScript",
      "Flask",
      "SQL"
    ],
    "sources": [
      "/softwareLogos/HTML5.png",
      "/softwareLogos/CSS.png",
      "/softwareLogos/JavaScript.png",
      "/softwareLogos/Flask.png",
      "/softwareLogos/SQL.png"
    ]
  }
  
};



export default function Projects() {

  function displayTechImages(project: any) {
    const zip = (a: string[], b: string[]) => a.map((x, i) => [x, b[i]])
    const zippedTech = zip(project.names, project.sources)
    return (
        
      zippedTech.map(([title, source]) => (
        <React.Fragment key={title}>
          <Grid item xs={2} md={1} margin=".1em">
            <Image 
              src={source}
              width={50} 
              height={30} 
              alt={title + "Logo"}
              style={{margin: "auto"}}
            >
              
            </Image>
          </Grid>
        </React.Fragment>
      ))
    );
  };

  return (
    <>
    <Grid container spacing={2} padding="2em">
      <Grid item xs={12}>
        <h2>Course Projects</h2> 
      </Grid>
      <Grid item xs={12} md={6} lg={6} sx={{backgroundColor: "0B9A6D"}} padding="2em">
        <Paper elevation={1} sx={{padding: "1em"}}>
          <h4>CSE 840 - Neural Network</h4>
          <h6>Technologies</h6>
          <Grid container spacing={1} margin=".2em">
            {displayTechImages(projectTech.CSE840)}
          </Grid>
          <h6>Summary</h6>
          <p>Developed, trained, and graphed results of a simple 2-layer neural network</p>
          <p>Prepared data for training during machine learning by cleaning and reformatting the data with Pandas and NumPy libraries</p>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Paper elevation={1} sx={{padding: "1em"}}>
          <h4>CSE 477 - Personal Website</h4>
          <h6>Technologies</h6>
          <Grid container spacing={1} margin=".2em">
            {displayTechImages(projectTech.CSE477)}
          </Grid>
          
          <h6>Summary</h6>
          <p>Developed the front-end, back-end, and a database for an interactive, scalable web application</p>
        </Paper>
      </Grid>
    </Grid>
    
    <Grid container spacing={2} margin="2em">
      <h2>Personal Projects</h2>
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={{width: '100%'}}>
          <h4>This Website</h4>
        </Box>
      
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={{width: '100%'}}>
          
        </Box>
      
      </Grid>
    </Grid>
    </>
  )
}
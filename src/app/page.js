import React from 'react';
import { 
  Box, 
  Paper, 
  Grid, 
  Typography 
} from "@mui/material";
import PrimarySearchAppBar from '../app/components/head';

const Home = () => {
  return (
    <Box className="flex flex-col w-full min-h-screen">
      {/* Header */}
      <PrimarySearchAppBar />

      {/* Main Content */}
      <Box className="p-4 flex-grow flex">
        <Grid container spacing={3}>
          {/* Left Content Area */}
          <Grid item xs={12} md={8}>
            <Paper className="w-full h-[600px] bg-gray-50 p-4">
              <Typography variant="h6" className="mb-4">Left Content Area</Typography>
              <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque leo nec orci facilisis, at tincidunt libero tincidunt. Integer nec magna nec urna fermentum tincidunt. Sed sit amet libero nec nulla aliquet tincidunt.</Typography>
            </Paper>
          </Grid>
          
          {/* Right Content Area */}
          <Grid item xs={12} md={4}>
            <Paper className="w-full h-[600px] bg-gray-50 p-4">
              <Typography variant="h6" className="mb-4">Right Content Area</Typography>
              <Typography>Phasellus euismod, justo at facilisis tincidunt, sapien libero hendrerit nulla, a tincidunt libero turpis nec libero. Sed sit amet libero nec nulla aliquet tincidunt. Integer nec magna nec urna fermentum tincidunt.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
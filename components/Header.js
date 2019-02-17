import React from 'react';
import { Toolbar, AppBar, Typography } from '@material-ui/core';

const Header = ({ title = 'Next.js blogging application' }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;

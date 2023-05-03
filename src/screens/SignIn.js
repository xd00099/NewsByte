import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FeedIcon from '@mui/icons-material/Feed';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import '../styles/SocialSignInButtons.css';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" >
        NewsByte
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {

    navigate('/dashboard');
  };

  const handleSocialSignIn = (provider) => {
    // Implement social sign-in logic here
    navigate('/dashboard');
  };


  return (
    <ThemeProvider theme={theme}>
      <Container style={{paddingLeft: '32px', paddingRight: '32px'}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <div className="dashboard-header">
            <FeedIcon style={{color: '#141e49'}}/>
            <h1 className="dashboard-title" style={{color: '#141e49'}}>NewsByte</h1>
          </div>
          {/* <div className="dashboard-header">
            <FeedIcon style={{color: '#0D1B4A'}}/>
            <h1 className="dashboard-title" style={{color: '#0D1B4A'}}>NewsByte</h1>
          </div> */}
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{background: '#141e49'}}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

          </Box>
        </Box>
        

        <div className="social-signin-container">
        
        <button
        className="rectangular-btn"
        onClick={() => handleSocialSignIn('Google')}>
        <GoogleIcon className="social-signin-btn"></GoogleIcon>
        </button>

        <button
        className="rectangular-btn"
        onClick={() => handleSocialSignIn('Facebook')}>
        <FacebookIcon className="social-signin-btn">
        </FacebookIcon>
        </button>

        <button
        className="rectangular-btn"
        onClick={() => handleSocialSignIn('Twitter')}>
        <TwitterIcon className="social-signin-btn"></TwitterIcon>
        </button>

        <button
        className="rectangular-btn"
        onClick={() => handleSocialSignIn('Apple')}
      >
        <AppleIcon className="social-signin-btn" />
      </button>
      </div>

      <Divider> <Typography style={{color: '#597393'}}>OR</Typography> </Divider>

      <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{background: '#141e49'}}
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Continue as Guest
            </Button>

      <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
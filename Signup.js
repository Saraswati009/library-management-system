/*import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css';

export const Signup = ({open, handleSubmit, handleClose}) =>  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const onSubmit = (event) => {
    event.preventDefault()
    handleSubmit(name, email, password)
  }
  const handleEnterKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit (event)
    }
  }

  const navigate = useNavigate(); // Hook for programmatic navigation

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "Name is required.";
    tempErrors.email = email ? (/\S+@\S+\.\S+/.test(email) ? "" : "Email is not valid.") : "Email is required.";
    tempErrors.password = password ? (password.length >= 8 ? "" : "Password must be at least 8 characters.") : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Display success message
      toast.success("Signup successful! Redirecting to login...", {
        position: "top-center",
        autoClose: 2000, // Duration of the toast
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      const dataToSubmit = {
        name,
        email,
        password,
      };

      // Fetch call to submit data
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(dataToSubmit),
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);

          // Clear the input fields
          setName('');
          setEmail('');
          setPassword('');

          // Navigate to login page after delay
          setTimeout(() => navigate('/login'), 5000); // 5 seconds delay
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      console.log("Form has errors");
    }
  };

  return (

    <div className="signup-Outer-box">
      <div className="signup-Inner-box">
        <header className="sign-up">
          <h1>Sign-up</h1>
          <p>It just takes 30 seconds</p>
        </header>
        <main className="signup-body">
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </p>
            <p>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Your E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </p>
            <p>
              <input type="submit" id="submit" value="Create Account" />
            </p>
          </form>
        </main>
        <footer className="signup-footer">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </footer>
      </div>
      <ToastContainer /> {/* Toast container for showing notifications /}
    </div>
  );
}

export default Signup;*/








import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const Signup = ({ open, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Validate input fields
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = name ? "" : "Name is required.";
    tempErrors.email = email ? (/\S+@\S+\.\S+/.test(email) ? "" : "Email is not valid.") : "Email is required.";
    tempErrors.password = password ? (password.length >= 8 ? "" : "Password must be at least 8 characters.") : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (validate()) {
      // Display success message
      toast.success("Signup successful! Redirecting to login...", {
        position: "top-center",
        autoClose: 2000, // Duration of the toast
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      const dataToSubmit = {
        name,
        email,
        password,
      };

      try {
        // Fetch call to submit data
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify(dataToSubmit),
        });

        const result = await response.json();
        console.log(result);

        // Clear the input fields
        setName('');
        setEmail('');
        setPassword('');

        // Close the dialog and navigate to login page after a short delay
        setTimeout(() => {
          handleClose(); // Close the dialog
          navigate('/login'); // Navigate to login page
        }, 5000); // 5 seconds delay

      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)}
            helperText={errors.name}
          />
          <TextField
            margin="dense"
            label="E-mail"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Create Account
        </Button>
      </DialogActions>
      <ToastContainer /> {/* Toast container for showing notifications */}
    </Dialog>
  );
}

export default Signup;


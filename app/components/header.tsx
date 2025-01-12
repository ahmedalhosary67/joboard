"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white ">
      {/* <AppBar position="sticky" color="inherit" elevation={1}> */}
        <div>
          <Toolbar className="justify-between">
            {/* Logo */}
            <Link href="/" passHref>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: "bold",
                  color: "primary.main",
                  cursor: "pointer",
                  fontFamily: "Roboto, sans-serif",
                  textDecoration: "none", // Remove default anchor underline
                }}
              >
                Joboard
              </Typography>
            </Link>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
                alignItems: "center",
                fontSize: "1rem",
              }}
            >
              <Button
                color="inherit"
                href="#start-a-search"
                sx={{ fontWeight: 500 }}
              >
                Start a search
              </Button>
              <Button
                color="inherit"
                href="#jobs-list"
                sx={{ fontWeight: 500 }}
              >
                Jobs list
              </Button>
              <Button
                color="inherit"
                href="#salary-estimate"
                sx={{ fontWeight: 500 }}
              >
                Salary estimate
              </Button>
              <Button color="inherit" href="#pricing" sx={{ fontWeight: 500 }}>
                Pricing
              </Button>
              {/* Actions (New Job, Login, Signup) */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 1.5,
                  ml: 2,
                  alignItems: "center",
                }}
              >
                <Link href="/new-job" passHref>
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    New Job
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderColor: "#1976d2",
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.1)",
                    },
                  }}
                >
                  Log in
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    backgroundColor: "#1976d2",
                    "&:hover": {
                      backgroundColor: "#125ca1",
                    },
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              color="primary"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{
                display: { md: "none" },
                ml: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </div>

        {/* Mobile Menu Dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          keepMounted
          PaperProps={{
            style: {
              width: "200px",
            },
          }}
        >
          <MenuItem
            onClick={handleMenuClose}
            component="a"
            href="#start-a-search"
          >
            Start a search
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#jobs-list">
            Jobs list
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component="a"
            href="#salary-estimate"
          >
            Salary estimate
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component="a" href="#pricing">
            Pricing
          </MenuItem>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              mx: 2,
            }}
          >
            <Link href="/new-job" passHref>
              <Button
                variant="contained"
                color="success"
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                New Job
              </Button>
            </Link>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.1)",
                },
              }}
            >
              Log in
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#125ca1",
                },
              }}
            >
              Sign up
            </Button>
          </Box>
        </Menu>
      {/* </AppBar> */}
    </header>
  );
};

export default Header;

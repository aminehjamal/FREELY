import * as React from "react";
import { Link as ReactLink } from 'react-router-dom';
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FeaturedPost from "./FeaturedPost";
import { featuredPosts } from "./data";

function HomeScreen() {
  const footers = [
    {
      title: "Company",
      description: ["Team", "History", "Contact us"],
    },

    {
      title: "Legal",
      description: ["Privacy policy", "Terms of use"],
    },
  ];

  return (
    <React.Fragment>
      {/*Hero*/}
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Get it Free-ly!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to our free items website.<br></br>{" "}
              <span style={{ fontSize: "1rem" }}>
                Discover a wide range of essential items for FREE, donated by
                generous individuals who want to make a positive impact on our
                community.<br></br>Browse by category, location or keyword and
                find what you're looking for today.
              </span>
            </Typography>
          </Container>
        </Box>
      </main>
      {/**features*/}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {featuredPosts.slice(0, 3).map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </Container>

      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        {" "}
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button 
          component={ReactLink}
          to="/listing"
          variant="contained" color="secondary">
            View more
          </Button>
        </Stack>
      </Container>
    </React.Fragment>
  );
}

export default HomeScreen;

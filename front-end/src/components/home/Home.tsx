import { Button, Grid, Typography, alpha } from "@mui/material";

import image2 from "../../static/images/carousel/carousel-2.jpg";

const Home = () => {
  return (
    <>
      <Grid container sx={{ mb: 10 }}>
        <Grid
          item
          container
          xs={12}
          sx={{
            backgroundImage: `url(${image2})`,
            backgroundSize: "cover",
            backgroundPosition: "top right",
            height: "75vh",
            width: "100%",
          }}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            xs={12}
            md={5}
            sx={{ backgroundColor: alpha("#ecf1ef", 0.7), px: 5 }}
          >
            <Grid item>
              <Typography>SUMMER COLLECTION 2022</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" fontWeight={600}>
                Embrace the sun with our new beachwear
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size="large"
                sx={{ color: "#FFF" }}
                disableElevation
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

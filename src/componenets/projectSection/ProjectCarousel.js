import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import '../common-components/CarouselStyle.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    title: {
      textAlign: "right",
      color: "#072366",
      fontWeight: "bolder",
      marginBottom: 30
    },
    caption: {
        textAlign: "center !important",
        marginBottom: 50,
        fontWeight: "bold",
        color: "#343A40",
        transition: "all 0.3s ease-out",
        "&:hover" : {
          color: "#09CC7F !important"
        }
    },
    media: {
        width: "95%",
        height: "270px",
        padding: 2,
        border: "1px solid #dee2e6",
        "@media (max-width: 600px)": {
            height: "250px"
        },
    }
  }));    

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };


export default function ProjectCarousel ({projectsData}) {
    const classes = useStyles();

    return (
        <Grid container style={{marginBlock: 80,backgroundColor: "#f8fcff"}}>
            <Grid item xs={12}>
                <Typography component="h6" variant="h6" className={classes.title}>مهم ترین پروژه های خیرین مدرسه ساز خوزستان</Typography>
                <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                autoPlay={true}
                infinite={true}
                autoPlaySpeed={3000}
                transitionDuration={1000}
                arrows={false}
                showDots={true}
                >
                    {
                        projectsData.data.slice(0,5).map( item =>
                            <>
                            <img
                            key={item.id}
                            className={classes.media}
                            alt={item.title}
                            src={"http://charity.mykanoon.ir/File/Get/" + item.imageIds[0]}
                            />
                            <Link to={`/Completed/${item.id}`} style={{ width: "100%" }}>
                            <Typography component="h5" variant="h5" className={classes.caption} >{item.title}</Typography>
                            </Link>    
                            </>
                        )
                    }
                </Carousel>
            </Grid>
        </Grid>
    )
}

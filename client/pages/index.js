import React from "react";
import Login from "./auth/login";
import MainLayout from "../layout/MainLayout";
import AboutUs from "./aboutUs";
import {Box, Button, Grid, Paper, Typography, useMediaQuery} from "@mui/material";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import glueInPackaging from "../public/images/glueInPackaging.jpg";
import glueInEurocube from "../public/images/eurocube.jpg";
import beautiMaterials from "../public/images/beautificationMaterials.jpg";
import buildingPalette from "../public/images/palette.jpeg";
import pipeline from "../public/images/pipeline.jpeg";
import handshake from "../public/images/handshake.jpg";
import useStyles from "../styles/homeStyle";
import NextLink from "next/link";
import {GetProductFetch} from "../actions";
import {useDispatch} from "react-redux";
import {useTheme} from "@mui/material/styles";

const Index = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];
  const classes = useStyles();
  const dispatch = useDispatch()
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));


  const fadeInRight = {
    initial: {
      x: -160,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInLeft = {
    initial: {
      x: 160,
      opacity: 0,
      transition: { duration: 0.3, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <>
      <MainLayout>
        <Grid className={classes.mainWrapper} container rowSpacing={1} sx={{ p: 3 }}>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12} md={8} onClick={async ()=>{
             await dispatch(
                GetProductFetch(
                  `http://localhost:1337/api/products?populate=*&filters[category][$eq]=???????? ?????? ?????????????????? ?? ?????????????????????? ????????`
                )
              );
            }}>
              <NextLink href="/products" passHref >
                <div className={classes.textBoxWrapper}>
                  <Box className={classes.categoryBox}>
                    <Image
                      className={classes.imageCategory}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={glueInEurocube}
                      placeholder={"blur"}
                    />
                  </Box>

                  <Box className={classes.textBox}>
                    <Typography fontSize={16} fontWeight={600}>
                      ???????? ?????? ?????????????????? ?? ?????????????????????? ????????
                    </Typography>
                    { !smDown &&
                    <Typography paragraph fontSize={14}>
                      <b>??????????????????????????????:</b> ???????? ???????????????? ????????????????????????????
                      ?????????????????? ?????????????????????? ???? ?????????????????????? ???? ?????????? ???????? 5????.
                      <br /> <b>????????????????????: </b>
                      ?????????????????? ?????????????????? ?????????????????? ???? ?????????????????????? ???? ?????????? ????????
                      5???? ?? ???????????? ???????????????? ????????. ?????????????????????? ???????????? ????????????????????
                      - 6 ?????????????? ?? ???????? ??????????????????????.
                    </Typography>}
                  </Box>
                </div>
              </NextLink>
            </Grid>
            <Grid item xs={12} md={4}  onClick={async ()=>{
             await dispatch(
                GetProductFetch(
                  `http://localhost:1337/api/products?populate=*&filters[category][$eq]=???????? ?????? ?? ????????????????????`
                )
              );
            }}>
              <NextLink  href="/products" passHref  >
                <div className={classes.textBoxWrapper}
                    >
                  <Box className={classes.categoryBox}>
                    <Image
                      className={classes.imageCategory}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={glueInPackaging}
                      placeholder={"blur"}
                    />
                  </Box>

                  <Box className={classes.textBox}>
                    <Typography fontSize={16} fontWeight={600}>
                      ???????? ?????? ?? ????????????????????
                    </Typography>
                  </Box>
                </div>
              </NextLink>
            </Grid>
          </Grid>

          <Grid item xs={12} onClick={async ()=>{
           await dispatch(
              GetProductFetch(
                `http://localhost:1337/api/products?populate=*&filters[category][$eq]=???????????????????? ?????????????????????????? ??????????????????`
              )
            );
          }}>
            <NextLink href="/products" passHref>
              <div className={classes.textBoxWrapper}>
                <Box className={classes.categoryBox}>
                  <Image
                    className={classes.imageCategory}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    src={buildingPalette}
                    // style={{ marginTop: "30px" }}
                    placeholder={"blur"}
                  />
                </Box>

                <Box className={classes.textBox}>
                  <Typography fontSize={16} fontWeight={600}>
                    ???????????????????? ?????????????????????????? ??????????????????
                  </Typography>
                  { !smDown &&
                  <Typography paragraph fontSize={14}>
                    <b>?????????????????? ???????????????? ??????????????-??????</b> ???????????????? ?????????? ??????????
                    ?????????????????????????????? ?????????????????? ???????????????? ?????????? <b>Tim-color</b>.
                    <br /> ???????????????? ???????????????? ?????????????? ??????????????????????????????; ????????????
                    ??????????????????; ??????????????????; ???????????????? ????????; ?????????? ???????????????? ????
                    ????????????????; ???????????????????? ?????????? ???? ????????????????.
                    <br /> ?? ???????????? ?????????????? ?????????????????? ?????????????????????? ???? ????????????????????
                    ?????????? ????????????????.
                  </Typography>}
                </Box>
              </div>
            </NextLink>
          </Grid>
          <Grid item container xs={12} spacing={1}>
            <Grid item xs={12} md={4}>
              <NextLink href="/manufacture" passHref>
                <div className={classes.textBoxWrapper}>
                  <Box className={classes.categoryBox}>
                    <Image
                      className={classes.imageCategory}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={handshake}
                      placeholder={"blur"}
                    />
                  </Box>

                  <Box className={classes.textBox}>
                    <Typography fontSize={16} fontWeight={600}>
                      ???????????????????? ??????????????????????
                    </Typography>
                  </Box>
                </div>
              </NextLink>
            </Grid>
            <Grid item xs={12} md={8} onClick={async ()=>{
             await dispatch(
                GetProductFetch(
                  `http://localhost:1337/api/products?populate=*&filters[category][$eq]=?????????????????????????? ???? ?????????????? ????????????????`
                )
              );
            }}>
              <NextLink href="/products" passHref>
                <div className={classes.textBoxWrapper}>
                  <Box className={classes.categoryBox}>
                    <Image
                      className={classes.imageCategory}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      src={pipeline}
                      placeholder={"blur"}
                    />
                  </Box>

                  <Box className={classes.textBox}>
                    <Typography fontSize={16} fontWeight={600}>
                      ?????????????????????????? ???? ?????????????? ????????????????
                    </Typography>
                    { !smDown &&
                    <Typography paragraph fontSize={14}>
                      ?????????????????????????? ???????????????? ?????????????????????? ?????? ???????????????????? ????????????????
                      ??????????, ?????????? ?? ???????????? ???????????????????? ???? ??????????????????????????. ????????
                      ?????????????????? ???????????????????????????? ?? ?????????? ?????????????????? ?????????? ?? ????????,
                      ???? ??????????????????, ?????????? - ?? ??????????????????????????????????, ????????????????
                      ??????????????????????????.
                    </Typography>}
                  </Box>
                </div>
              </NextLink>
            </Grid>
          </Grid>
        </Grid>

      </MainLayout>
    </>
  );
};

export default Index;

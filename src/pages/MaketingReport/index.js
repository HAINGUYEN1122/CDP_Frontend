/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
import {
  Paper, Grid, Divider,
} from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components/macro';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import BreadcrumbCustom from '../../components/BreadcrumbCustom';
// import Card from '@material-ui/core/Card';
// import Typography from '@material-ui/core/Typography';
import DateRangePicker from '../../components/DateRangePicker';
// import Instagram from './Instagram';
import Visitor from '../../assets/images/Visitor.png';
import SocialTraffic from '../../assets/images/SocialTraffic.png';
import NewUsers from '../../assets/images/NewUsers.png';
import impressions from '../../assets/images/impressions.png';
import clickthroughrate from '../../assets/images/clickthroughrate.png';
import totalclick from '../../assets/images/totalclick.png';
import follower from '../../assets/images/follower.png';
import newfollower from '../../assets/images/newfollower.png';
import Engagement from '../../assets/images/Engagement.png';
import totalspent from '../../assets/images/totalspent.png';
import impressionsINS from '../../assets/images/impressionsINS.png';
import footer from '../../assets/images/footer.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    background: '#FFFFFFCC',
    borderRadius: 0,
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    '& .MuiCard-root': {
      ShadowRoot: 2,
    },
  },
  header: {
    width: '100%',
    height: 'auto',
    borderRadius: 0,
    background: '#FFFFFFCC',
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    '& .MuiCard-root': {
      ShadowRoot: 0,
    },
  },
  edit: {
    borderRadius: 30,
    width: 61,
    margin: theme.spacing(0, 1),
    color: '#000000',
    background: '#86E3FF',
    // padding: theme.spacing(1),
    '& .MuiButton-label': {
      fontWeight: 700,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
  more: {
    borderRadius: 30,
    width: 61,
    margin: theme.spacing(0, 1),
    color: '#FFFFFF',
    background: '#2CD9C5',
    // padding: theme.spacing(1),
    '& .MuiButton-label': {
      fontWeight: 700,
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
  content: {
    padding: theme.spacing(1),
    margin: theme.spacing(4, 0),
  },
  secondcontent: {
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0, 1, 0),
  },
  img: {
    width: 70,
  },
}));
const breadcrumbsList = {
  list: [
    { text: 'BI Dashboard', link: '/dashboard' },
  ],
  active: 'Marketing report',
};

export default function MaketingReport() {
  const classes = useStyles();
  return (
    <Container>
      <BreadcrumbCustom breadcrumbsList={breadcrumbsList} />
      <Grid container justifyContent="space-between" alignItems="center">
        <Title>Marketing report</Title>
        <RightContent>
          <DateRangePicker />
        </RightContent>
      </Grid>
      <Paper className={classes.header}>
        <Grid container>
          <Grid item xs={6} lg={8}>
            <TitleCard> Website</TitleCard>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Grid container justifyContent="flex-end">
              <Button className={classes.edit}>Edit</Button>
              <Button className={classes.more}>More</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <TitleContent> Total Visitor</TitleContent>
            <Grid container className={classes.content}>
              <Grid item xs={8} lg={4}>
                <Grid container justifyContent="center" alignItems="center">
                  <img src={Visitor} alt="Visitor" />
                </Grid>
              </Grid>
              <Grid item xs={4} lg={8}>
                <Grid>
                  <TextContent>Users</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>168</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <img src={footer} alt="footer" />
              <TextFooter>Sample data</TextFooter>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <TitleContent>Social Traffic</TitleContent>
            <Grid container className={classes.content}>
              <Grid item xs={8} lg={4}>
                <Grid container justifyContent="center" alignItems="center">
                  <img src={SocialTraffic} alt="SocialTraffic" />
                </Grid>
              </Grid>
              <Grid item xs={4} lg={8}>
                <Grid>
                  <TextContent>Sessions</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <img src={footer} alt="footer" />
              <TextFooter>Sample data</TextFooter>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <TitleContent>New Users</TitleContent>
            <Grid container className={classes.content}>
              <Grid item xs={4} lg={4}>
                <Grid container justifyContent="center" alignItems="center">
                  <img src={NewUsers} alt="NewUsers" />
                </Grid>
              </Grid>
              <Grid item xs={8} lg={8}>
                <Grid>
                  <TextContent>New Users</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>568</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <img src={footer} alt="footer" />
              <TextFooter>Sample data</TextFooter>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Paper className={classes.header}>
        <Grid container>
          <Grid item xs={6} lg={8}>
            <TitleCard> Facebook</TitleCard>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Grid container justifyContent="flex-end">
              <Button className={classes.edit}>Edit</Button>
              <Button className={classes.more} href="/dasboard/maketingreport/facebookreport">More</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <TitleContent> Impressions</TitleContent>
            <TextContent>The number of times your ads were shown</TextContent>
            <Grid container className={classes.content} spacing={3}>
              <Grid item xs={2} lg={2}>
                <Grid container justifyContent="center" alignItems="center">
                  <img src={impressions} alt="impressions" />
                </Grid>
              </Grid>
              <Grid item xs={10} lg={10}>
                <Grid>
                  <TextContent>Impressions</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>8472</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <img src={footer} alt="footer" />
              <TextFooter>Sample data</TextFooter>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                  <img src={clickthroughrate} alt="clickthroughrate" className={classes.img} />
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>Click through rate</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid container justifyContent="center" alignItems="center">
                    <img src={totalclick} alt="totalclick" className={classes.img} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>Total clicks</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <TitleContent>Total Spent on Ads</TitleContent>
            <TextContent>Budget spent on Facebook ads during this period</TextContent>
            <Grid container className={classes.content} spacing={3}>
              <Grid item xs={2} lg={2}>
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                  <img src={totalspent} alt="totalspent" />
                </Grid>
              </Grid>
              <Grid item xs={10} lg={10}>
                <Grid>
                  <TextContent>Total Spent</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>$30859</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justifyContent="space-between">
              <img src={footer} alt="footer" />
              <TextFooter>Sample data</TextFooter>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Paper className={classes.header}>
        <Grid container>
          <Grid item xs={6} lg={8}>
            <TitleCard> Instagram </TitleCard>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Grid container justifyContent="flex-end">
              <Button className={classes.edit}>Edit</Button>
              <Button className={classes.more}>More</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center">
                  <img src={impressionsINS} alt="impressionsINS" className={classes.img} />
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>Impressions</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>3,697</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid container justifyContent="center" alignItems="center">
                    <img src={Visitor} alt="Visitor" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>Reach</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                  <img src={follower} alt="follower" className={classes.img} />
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>Followers</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                    <img src={newfollower} alt="newfollower" className={classes.img} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>New Followers</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                  <img src={Engagement} alt="Engagement" className={classes.img} />
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>Engagement</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center">
                  <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                    <img src={newfollower} alt="newfollower" className={classes.img} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>Engagement rate</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
const Title = styled.h1`
`;
const Container = styled.div`
  margin-top: 70px;
`;
const TitleCard = styled.h1`
  margin: 0;
  padding: 5px;
  text-align: start;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #686868;
`;
const TitleContent = styled.h1`
  margin: 0;
  padding: 5px;
  text-align: start;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 140%;
  color: #566D8B;
`;
const TextContent = styled.h2`
  margin: 0;
  padding: 5px;
  text-align: start;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #566D8B;
`;
const NumberContent = styled.h1`
  margin: 0;
  padding: 5px;
  text-align: start;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #566D8B;
`;
const TextFooter = styled.div`
  text-align: start;
  font-style: normal;
  font-size: 12px;
  color: #566D8B;
`;

const RightContent = styled.div`
  display: inherit;
  align-items: center;
`;

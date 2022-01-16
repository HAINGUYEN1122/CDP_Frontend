/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable import/no-duplicates */
import {
  Paper, Grid,
} from '@material-ui/core';
import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
// import funel from 'highcharts/highcharts-more';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import funnel from 'highcharts/modules/funnel';
import Button from '@material-ui/core/Button';
import styled from 'styled-components/macro';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import BreadcrumbCustom from '../../components/BreadcrumbCustom';
// import Card from '@material-ui/core/Card';
// import Typography from '@material-ui/core/Typography';
import DateRangePicker from '../../components/DateRangePicker';
import totalspent from '../../assets/images/totalspent.png';
import clickthroughrate from '../../assets/images/clickthroughrate.png';
import totalclick from '../../assets/images/totalclick.png';
// import Data from './product.json';
import impressions from '../../assets/images/impressions.png';
import footer from '../../assets/images/fbfooter.PNG';
import costperclick from '../../assets/images/costperclick.PNG';
// import Engagement from '../../assets/images/Engagement.png';
// import NewUsers from '../../assets/images/NewUsers.PNG';
// import footer from '../../assets/images/footer.png';
funnel(Highcharts);
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
  back: {
    borderRadius: 30,
    width: 61,
    margin: theme.spacing(0, 1),
    color: '#FFFFFF',
    background: '#ED455C',
    // padding: theme.spacing(1),
    '& .MuiButton-label': {
      fontWeight: 700,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 12,
    },
  },
  content: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
  },
  secondcontent: {
    padding: theme.spacing(1),
    margin: theme.spacing(6, 0),
  },
  thirdcontent: {
    padding: theme.spacing(1),
    margin: theme.spacing(3, 0, 2, 0),
  },
  img: {
    height: 100,
    width: 'auto',
  },
}));
const breadcrumbsList = {
  list: [
    { text: 'BI Dashboard', link: '/dashboard' },
    { text: 'Marketing report', link: '/dasboard/maketingreport' },
  ],
  active: 'Instagram report',
};
const funnelchart = {
  chart: {
    type: 'funnel',
    height: 150,
  },
  title: {
    text: '',
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: false,
        format: '<b>{point.name}</b> ({point.value:,.0f})',
        softConnector: false,
      },
      center: ['40%', '50%'],
    },
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  series: [{
    name: 'Unique users',
    data: [{
      y: 8,
      name: 'Website visits',
      color: '#68C2C8',
      value: 1565,
    },
    {
      y: 6,
      name: 'Downloads',
      color: '#475D7D',
      value: 4064,
    },
    {
      y: 8,
      name: 'Requested price list',
      color: '#F5BF60',
      value: 1987,
    }],
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500,
      },
      chartOptions: {
        plotOptions: {
          series: {
            dataLabels: {
              inside: true,
            },
            center: ['50%', '50%'],
            width: '100%',
          },
        },
      },
    }],
  },
};
export default function FaceBookReport() {
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
            <TitleCard> Facebook ads</TitleCard>
          </Grid>
          <Grid item xs={6} lg={4}>
            <Grid container justifyContent="flex-end">
              <Button className={classes.back} href="/dasboard/maketingreport">Back</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <TitleContent> Impressions</TitleContent>
            <TextContent>The number of times your ads were shown</TextContent>
            <Grid container className={classes.content}>
              <Grid item xs={4} lg={2}>
                <Grid container justifyContent="center" alignItems="center">
                  <img src={impressions} alt="impressions" />
                </Grid>
              </Grid>
              <Grid item xs={8} lg={10}>
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
            <TitleContent>Total Spent on Ads</TitleContent>
            <TextContent>Budget spent on Facebook ads during this period</TextContent>
            <Grid container className={classes.content}>
              <Grid item xs={4} lg={2}>
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                  <img src={totalspent} alt="totalspent" />
                </Grid>
              </Grid>
              <Grid item xs={8} lg={10}>
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
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <Grid container className={classes.secondcontent}>
              <Grid item xs={4} lg={4}>
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                  <img src={clickthroughrate} alt="clickthroughrate" />
                </Grid>
              </Grid>
              <Grid item xs={8} lg={8}>
                <Grid>
                  <TextContent>Click Through Rate</TextContent>
                </Grid>
                <Grid>
                  <NumberContent>583</NumberContent>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <TitleContent> Cost Per Click</TitleContent>
            <Grid container className={classes.thirdcontent}>
              <Grid item xs={4} lg={2}>
                <Grid container justifyContent="center" alignItems="center">
                  <img src={costperclick} alt="costperclick" />
                </Grid>
              </Grid>
              <Grid item xs={8} lg={10}>
                <Grid>
                  <TextContent>CPC(all)</TextContent>
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
            <TitleContent>Ads Funnel</TitleContent>
            <Grid container>
              <Grid lg={8} xs={6}>
                <Grid container>
                  <StatusValue>
                    <FiberManualRecordIcon className={classes.DrMartens} />
                    <StatusText>Dr.Martens</StatusText>
                    {/* <ArrowContent>
                      <ArrowUp />
                      <ArrowValue>12% over last month</ArrowValue>
                    </ArrowContent> */}
                  </StatusValue>
                </Grid>
              </Grid>
              <Grid lg={4} xs={6}>
                <HighchartsReact
                  highcharts={Highcharts}
                  options={funnelchart}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={4} xs={4}>
          <Paper className={classes.root}>
            <Grid container className={classes.secondcontent}>
              <Grid item xs={6} lg={4}>
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100%' }}>
                  <img src={totalclick} alt="totalclick" />
                </Grid>
              </Grid>
              <Grid item xs={6} lg={8}>
                <Grid>
                  <TextContent>Total Click(all)</TextContent>
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
  text-transform: 'capitalize',
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
  font-size: 14px;
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
const StatusText = styled.span`
  font-size: 14px;
  color: #000000;
`;
const StatusValue = styled.div`
  margin-top: 10px;
`;

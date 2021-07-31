import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Car from './Car/Car';
// import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
// import VolumeDown from '@material-ui/icons/VolumeDown';
// import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {

  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [number, setNumber] = React.useState(1);

  const handleChange = (event, newValue) => {
      let newData = (newValue * (8/101)).toFixed(0)
      if (newData == 0) {
          newData = 1
      }
setNumber(newData)
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
        <img src={require(`./assets/images/images-black/images-black-1/civic-${number}.jpg`).default} width='500' height='400'/>
        <Grid container spacing={2}>
        <Grid item>
          {/* <FiberManualRecordOutlinedIcon /> */}
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
        {/* <FiberManualRecordOutlinedIcon /> */}
        </Grid>
      </Grid>
      {/* <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" /> */}
    </div>
  );
}
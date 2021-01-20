import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
    const { width, height } = useWindowSize()
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);



  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      let baseUrl = window.location.href.split("?")[0];
      window.history.pushState('name', '', baseUrl);
        window.location.reload(false);
     }, 4000)
  };


  const handleClose = () => {
    setOpen(false);
    let baseUrl = window.location.href.split("?")[0];
      window.history.pushState('name', '', baseUrl);
    window.location.reload();
  };

  const body = (
      <div > <Confetti
      width={width}
      height={height}
    />
    <div id='panelE' style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Success!</h2>
      <p id="simple-modal-description">
      YOUR ITEMS ARE ON THE WAY! &hearts;
      </p>
     
    </div>
    </div>
  );

  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
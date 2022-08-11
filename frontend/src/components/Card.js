import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import LanguageDisplayer from '../components/Language/LanguageDisplayer';
import '../static/css/Card.css';

const Cards = ({ video, onClick }) => {
  return (
    <div className="wrapper">
      <Card
        variant="outlined"
        className="Card"
        sx={{ width: '100%' }}
        onClick={onClick}
      >
        <CardMedia
          component="img"
          image={`http://127.0.0.1:8000${video.screenshot}`}
          alt={video.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <LanguageDisplayer
              de={video.title_de}
              en={video.title_en}
            />
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {video.title_en}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
Cards.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Cards;

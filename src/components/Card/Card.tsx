import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { StyledCard} from "./Card.styles";

interface CardProps {
  shouldShow: boolean;
  title: string;
  content: number;
}

const CustomCard: React.FC<CardProps> = ({ shouldShow, title, content }) => {

  return shouldShow ? (
    <StyledCard variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}ETH
        </Typography>
      </CardContent>
    </StyledCard>
  ): (
    <></>
  );
};

export default CustomCard;

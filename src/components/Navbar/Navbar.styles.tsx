import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledNav = styled('nav')({
	backgroundColor: '#f8f8fd',
	padding: '10px',
	boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
});

export const StyledUl = styled('ul')({
	listStyleType: 'none',
	padding: 0,
	margin: 0,
	display: 'flex',
	justifyContent: 'space-around'
});

export const StyledLi = styled('li')({
  marginRight: '10px'
});

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #252a2d;
  font-size: 16px;
  &:hover {
    color: #9a9ea3;
  }
`;

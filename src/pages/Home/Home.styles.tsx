import { styled } from '@mui/system';

export const StyledFormContainer = styled('div')`
  @media (max-width: 600px) {
    flex-direction: column;
  }
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledTableContainer = styled('div')({
  marginTop: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

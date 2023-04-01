import { Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import itemData from './data';

const StyledGrid = styled(Grid)({
  flexGrow: 1,
  margin: 'auto',
  padding: '20px',
});

function MainPage() {
  return (
    <StyledGrid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          My Image Gallery
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={121}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </StyledGrid>
  );
}

export default MainPage;

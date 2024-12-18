import { Box, Card, CardActionArea, CardContent, CircularProgress, Typography } from '@mui/material';
import { useState } from 'react';
import asset from '../assets/react2.jpg';

const Day13LazyLoading = () => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" p={2}>
            <Card sx={{ maxWidth: 245 }}>
                <CardActionArea>
                    {loading && (
                        <Box display="flex" alignItems="center" justifyContent="center" p={2}>
                            <CircularProgress sx={{ color: 'gray' }} />
                        </Box>
                    )}
                    <img
                        src={asset}
                        alt="React Logo"
                        style={{
                            display: loading ? 'none' : 'block',
                            width: '100%',
                            height: '100%',
                        }}
                        onLoad={handleImageLoad}
                    />
                   {/* <CardMedia component="iframe" src='https://www.youtube.com/watch?v=MG-Ac4TAvTY' allow="autoPlay"/> */}
                    <CardContent>
                        <Typography variant="h5" component="div">
                            React
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
};

export default Day13LazyLoading;

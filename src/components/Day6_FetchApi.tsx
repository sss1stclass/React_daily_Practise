import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'



const Day6_FetchApi = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [err, setError] = useState<any>({
        state: false,
        message: ''
    });

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await response.json();
        setData(res);
    }
    const fetchtThroughAxios = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);
        } catch (error: any) {
            setError({
                state: true,
                message: error.message || "Something Went Wrong"
            });
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchtThroughAxios();
    }, [])
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={2}>
            {loading && <Typography sx={{ fontWeight: 600 }}>Data is loading...</Typography>}
            {err.state && <Typography color="error">{err.message}</Typography>}
            {!loading && !err.state && (
                <ul>
                    {data.map((item: any) => (
                        <li key={item.id}>
                            <Typography variant="h6">
                                {item.id}:- {item.name}, {item.email}
                            </Typography>
                        </li>
                    ))}
                </ul>
            )}
        </Box>
    );
}

export default Day6_FetchApi
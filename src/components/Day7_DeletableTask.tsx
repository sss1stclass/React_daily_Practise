import { Box, Button, Paper, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const Day7_DeletableTask = () => {

    const dataSet = [
        {
            name: 'Task1',
            id: 1
        },
        {
            name: 'Task2',
            id: 2
        },
        {
            name: 'Task3',
            id: 3
        },
        {
            name: 'Task4',
            id: 4
        },
        {
            name: 'Task5',
            id: 5
        },
    ]

    const [data, setData] = useState<any>(dataSet);

    const handleDelete = (id: any) => {
        const filterData = data.filter((item: any) => {
            return item.id !== id;
        })
        setData(filterData);
    }

    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>

            <Box display='flex' alignItems='center' justifyContent='space-between'>
                {
                    data.map((item: any) => {
                        return (
                            <Paper key={item.id} elevation={4} sx={{ width: 'auto', padding: 3, marginRight: 2 }}>
                                <Typography mb={2} sx={{ textAlign: 'center' }}>{item.name}</Typography>
                                <Button onClick={() => handleDelete(item.id)} variant="contained" color='primary' endIcon={<DeleteIcon />}> Delete</Button>
                            </Paper>
                        )
                    })
                }
            </Box>
        </Box>
    )
}


export default Day7_DeletableTask;
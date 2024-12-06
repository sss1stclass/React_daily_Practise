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

    const addTask = () => {
        const newTask = { name: `Task${data.length + 1}`, id: Math.random() };
        setData([...data, newTask]);
    }

    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>

            <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap' mb={2}>
                {
                    data.map((item: any) => {
                        return (
                            <Paper key={item.id} elevation={4} sx={{ width: 'auto', padding: 3, marginRight: 2, marginBottom: 2 }}>
                                <Typography mb={2} sx={{ textAlign: 'center' }}>{item.name}</Typography>
                                <Button onClick={() => handleDelete(item.id)} variant="contained" color='error' endIcon={<DeleteIcon />}> Delete</Button>
                            </Paper>
                        )
                    })
                }
            </Box>
            <Button onClick={addTask} variant="contained" color="success">
                Add Task
            </Button>
        </Box>
    )
}


export default Day7_DeletableTask;
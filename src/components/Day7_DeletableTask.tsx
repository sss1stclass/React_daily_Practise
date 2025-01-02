import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const Day7_DeletableTask = () => {

    const dataSet = [
        {
            name: 'Let`s start adding ',
            id: 1
        },
    ]

    const [data, setData] = useState<any>(dataSet);
    const [task, setTask] = useState('');

    const handleDelete = (id: any) => {
        const filterData = data.filter((item: any) => {
            return item.id !== id;
        })
        setData(filterData);
    }

    const handleChange = async (event: any) => {
        await setTask(event?.target.value);
    }

    const addTask = () => {
        const newTask = { name: task, id: Math.floor(Math.random() * 100) };
        setData([...data, newTask]);
        setTask('');
    }

    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>

            <Box display='flex' alignItems='center' justifyContent='space-between' flexWrap='wrap' mb={2}>
                {
                    data.map((item: any) => {
                        return (
                            <Paper key={item.id} elevation={4} sx={{ width: 'auto', padding: 3, marginRight: 2, marginBottom: 2 }}>
                                <Typography mb={2} sx={{ textAlign: 'center' }}>{item.name}</Typography>
                                <Button onClick={() => handleDelete(item.id)} variant="contained" color='error' endIcon={<DeleteIcon />}> Done</Button>
                            </Paper>
                        )
                    })
                }
            </Box>
            <TextField variant="outlined" label='Task Name' placeholder="Enter your Task Name" name='taskName' value={task} onChange={handleChange} sx={{ marginBottom: 2 }} />
            <Button onClick={addTask} variant="contained" color="success" disabled={task.length < 3}>
                Add Task
            </Button>
        </Box>
    )
}


export default Day7_DeletableTask;
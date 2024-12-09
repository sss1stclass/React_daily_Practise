import { Box, Divider, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const dataSet = [
    {
        name: 'sohil',
        id: 1
    },
    {
        name: 'mohil',
        id: 2
    },
    {
        name: 'rohit',
        id: 3
    },
    {
        name: 'vivek',
        id: 4
    },
    {
        name: 'aman',
        id: 5
    },

]

const Day8_AutoComplete = () => {

    const [data, setData] = useState<any>('sohil')
    const handleChange = (e: any) => {
        setData(e.target.value);
    }
    const [showModal, setShowModal] = useState(false);

    const [inputData, setInputData] = useState<any>(dataSet);

    const dataChange = () => {
        if(data.length >1){
            const filterData = inputData.filter((item: any) => item.name == data);
            console.log(filterData);
            setInputData(filterData);
        }
        else{
            setInputData(dataSet);
        }

    }

    useEffect(()=>{
      dataChange();
    },[data])


    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={2}>
            <TextField
                name='autocomplete'
                label='Search Name'
                placeholder='Type to search your name'
                variant="outlined"
                value={data}
                onChange={handleChange}
                onFocus={() => setShowModal(true)}
            />
            {
                showModal && (
                    <Box sx={{ border: '2px solid black' }} p={3}>
                        {
                            inputData.map((item: any) => {
                                return (
                                    <Typography key={item.id}>
                                        {item.name}
                                        <Divider />
                                    </Typography>
                                )
                            })
                        }
                    </Box>
                )
            }
        </Box>
    )
}

export default Day8_AutoComplete;
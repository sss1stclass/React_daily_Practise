import { Box, Divider, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"

const list = ['sohil', 'aman', 'raj', 'vivek', 'sonal']


const Day10DropDown = () => {
    const [name, setName] = useState<any>('');
    const [toggle, setToggel] = useState<boolean>(false);

    const handleSelect = (item: any) => {
        const filterData = list.filter((data: any) => data == item)
        setName(filterData);
    }

    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={2}>
            <Typography mb={2} variant="h4">The selected name is <span style={{ color: 'Blue', textTransform: 'capitalize' }}> {name}</span></Typography>
            <TextField
                variant="outlined"
                label='Select Name'
                name='selectName'
                value={name}
                onFocus={() => setToggel(true)}
                onBlur={() => setToggel(false)}
            />
            {toggle && (
                <Paper
                    elevation={3}
                    onMouseDown={(e: any) => e.preventDefault()}
                    sx={{
                        maxHeight: '150px',
                        width: '200px',
                        marginTop: '10px',
                        overflowY: 'auto',
                        border: '1px dashed black'
                    }}
                >
                    {
                        list.map((item: any) => {
                            return (
                                <Box>
                                    <Typography component='button' onClick={() => handleSelect(item)} textAlign='center' textTransform='capitalize'>{item}</Typography>
                                    <Divider />
                                </Box>
                            )
                        })
                    }

                </Paper>
            )}




        </Box>
    )
}

export default Day10DropDown
import { Box, Divider, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const dataSet = [
    { "name": "Olivia", "id": 1 },
    { "name": "Charlie", "id": 2 },
    { "name": "Hannah", "id": 3 },
    { "name": "Ian", "id": 4 },
    { "name": "Mia", "id": 5 },
    { "name": "Alice", "id": 6 },
    { "name": "Sophia", "id": 7 },
    { "name": "Paul", "id": 8 },
    { "name": "Violet", "id": 9 },
    { "name": "Noah", "id": 10 },
    { "name": "sohil", "id": 11 },
    { "name": "sohit", "id": 12 }
];

const Day8_AutoComplete = () => {
    const [data, setData] = useState<string>("");
    const [showModal, setShowModal] = useState(false);
    const [inputData, setInputData] = useState<any>(dataSet);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value);
    };

    const dataChange = () => {
        if (data.length > 1) {
            const filterData = dataSet.filter((item: any) =>
                item.name.toLowerCase().includes(data.toLowerCase())
            );
            setInputData(filterData);
        } else {
            setInputData(dataSet);
        }
    };

    useEffect(() => {
        dataChange();
    }, [data]);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
            <TextField
                name="autocomplete"
                label="Search Name"
                placeholder="Type to search your name"
                variant="outlined"
                value={data}
                onChange={handleChange}
                onFocus={() => setShowModal(true)}
                onBlur={() => setShowModal(false)}
            />
            {showModal && (
                <Paper
                    elevation={3}
                    onMouseDown={(e:any) => e.preventDefault()}
                    sx={{
                        width: "200px",
                        maxHeight: "150px",
                        overflowY: "auto",
                        mt: 2,
                        border: "1px solid #ccc",
                        padding: "8px",
                    }}
                >
                    {inputData.map((item: any) => (
                        <Box key={item.id}>
                            <Typography component='button' onClick={() => setData(item.name)}>{item.name}</Typography>
                            <Divider />
                        </Box>
                    ))}
                </Paper>
            )}
        </Box>
    );
};

export default Day8_AutoComplete;

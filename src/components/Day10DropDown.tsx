import { Box, Divider, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";


const options = ["sohil", "aman", "raj", "vivek", "sonal"];

const Day10DropDown = () => {
    const [name, setName] = useState<string>("");
    const [toggle, setToggel] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleSelect = (item: string) => {
        setName(item);
        setToggel(false);
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (!isFocused) setToggel(false);
        }, 150);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
            <Typography mb={2} variant="h4">
                The selected name is <span style={{ color: "blue", textTransform: "capitalize" }}>{name}</span>
            </Typography>
            <TextField
                variant="outlined"
                label="Select Name"
                name="selectName"
                value={name}
                onFocus={() => setToggel(true)}
                onBlur={handleBlur}
            />
            {toggle && (
                <Paper
                    elevation={3}
                    sx={{
                        maxHeight: "150px",
                        width: "100%",
                        marginTop: "5px",
                        overflowY: "auto",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                    }}
                >
                    {options.map((item, index) => (
                        <Box key={index} onMouseDown={() => setIsFocused(true)} onMouseUp={() => setIsFocused(false)}>
                            <Typography
                                component="button"
                                onClick={() => handleSelect(item)}
                                textAlign="center"
                                textTransform="capitalize"
                                sx={{
                                    display: "block",
                                    width: "100%",
                                    padding: "8px",
                                    textAlign: "left",
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    "&:hover": { backgroundColor: "#f0f0f0" },
                                }}
                            >
                                {item}
                            </Typography>
                            <Divider />
                        </Box>
                    ))}
                </Paper>
            )}
        </Box>
    );
};

export default Day10DropDown;

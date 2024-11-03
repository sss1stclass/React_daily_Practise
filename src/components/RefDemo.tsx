import { Button, TextField } from "@mui/material";
import { useRef } from "react";


export const RefDemo = () => {
    const textRef = useRef<any>();
    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(textRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>This is ref Demo </h1>
            <TextField
                name="text"
                inputRef={textRef}
                type="text"
            />
            <Button type="submit">
                subit
            </Button>
        </form>
    )
}

export default RefDemo;

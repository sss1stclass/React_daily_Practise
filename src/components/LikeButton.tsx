import { Box } from "@mui/material";
import { useState } from "react";

function LikeButton() {
    const [hover, setHover] = useState(false);
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };
    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>
            <button
                onClick={handleClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    borderRadius: "30px",
                    border: hover
                        ? "2px solid red"
                        : click
                            ? "2px solid red"
                            : "2px solid gray",
                    padding: "8px 15px",
                    margin: "10px 10px",
                    color: hover ? "red" : click ? "white" : "black",
                    backgroundColor: click ? "red" : "white",
                    transition: "all 0.5s ease",
                }}
            >
                {click ? (
                    <span>
                        {" "}
                        🤍 <span style={{ color: "White" }}> Like </span>
                    </span>
                ) : (
                    <span>❤️ Like</span>
                )}
            </button>
        </Box>
    );

}

export default LikeButton;

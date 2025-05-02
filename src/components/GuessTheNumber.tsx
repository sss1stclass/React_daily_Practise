import { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function GuessTheNumber() {
  const [input, setInput] = useState<any>("");
  const [times, setTimes] = useState(0);
  const [displayMessage, setDisplayMessage] = useState("");
  const [randNum, setRandNum] = useState(0);
  const generateNumber = () => {
    setRandNum(Math.floor(Math.random() * 100) + 1);
  };
  useEffect(() => {
    generateNumber();
  }, []);
  const handleGuess = () => {
    if (input < 1 || input > 100 || input == "") {
      setDisplayMessage("Please enter a number between 1 and 100");
      return;
    }
    if (input < randNum) {
      setDisplayMessage("Too Low! Try Again");
      setTimes((prev) => (prev += 1));
    } else if (input > randNum) {
      setDisplayMessage("Too High! Try Again");
      setTimes((prev) => (prev += 1));
    } else {
      setDisplayMessage(`You have guessed the number in ${times + 1} times!`);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setTimes(0);
    generateNumber();
    setDisplayMessage("");
    setInput("");
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <TextField
        type="number"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
      />
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <Button variant="outlined" onClick={handleGuess}>Check Guess</Button>
        <Button variant="outlined" onClick={resetGame}>Reset Game</Button>
      </div>

      <p>{displayMessage}</p>
    </div>
    </Box>
  );
}

export default GuessTheNumber;

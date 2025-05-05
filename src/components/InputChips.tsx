import { Box } from '@mui/material'
import { useState } from 'react'

const InputChips = () => {
    const [data, setData] = useState<any>([]);
  const [val, setVal] = useState<string>('');
  const inputVal = val.trim();
  const handleCreateChips = (event: any) => {
    if (event.key === 'Enter' && inputVal) {
      const newChip = {
        id: Math.floor(Math.random() * 100) + 1,
        value: inputVal,
      };
      setData([...data, newChip]);
      setVal('');
    }
  };
  const handleDelete = (id: any) => {
    const filterval = data.filter((item: any) => item.id != id);
    setData(filterval);
  };
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' p={3}>
<>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '40px 0',
        }}
      >
        <h2>Chips Input</h2>
        <input
          type="text"
          onKeyDown={(event: any) => handleCreateChips(event)}
          value={val}
          onChange={(event) => setVal(event.target.value)}
          placeholder="Type a chip and press tag"
          style={{ padding: '8px', width: '200px' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          gap: 4,
          flexWrap: 'wrap',
        }}
      >
        {data.map((item: any) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'black',
              height: 30,
              marginRight: '10px',
              paddingLeft: 20,
              borderRadius: '20px',
              paddingRight: 20,
            }}
          >
            <p
              style={{
                fontWeight: 600,
                color: 'white',
                textTransform: 'capitalize',
              }}
            >
              {item.value}
            </p>
            <button
              style={{
                marginLeft: '20px',
                cursor: 'pointer',
                backgroundColor: 'black',
                border: 'none',
              }}
              onClick={() => handleDelete(item.id)}
            >
              <span style={{ color: 'red' }}>X</span>
            </button>
          </div>
        ))}
      </div>
    </>
    </Box>

  )
}

export default InputChips
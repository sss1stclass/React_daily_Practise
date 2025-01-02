import { Box, IconButton, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const data = [
  {
    Name: 'Accordian 1',
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquam, blanditiis eligendi dolores dolorum quas',
    show: false,
  },
  {
    Name: 'Accordian 2',
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquam, blanditiis eligendi dolores dolorum quas',
    show: false,
  },
  {
    Name: 'Accordian 3',
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquam, blanditiis eligendi dolores dolorum quas',
    show: false,
  },
]

const Day14Accordian = () => {
  const [showData, setShowData] = useState<any>(data);

  const handleShow = (id: number) => {
    setShowData((prevData: any) =>
      prevData.map((item: any) => {
        if (item.id === id) {
          return { ...item, show: !item.show }
        } else {
          return item;
        }
      }

      )
    );
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={2}>
      {
        showData.map((item: any) => {
          return (
            <Paper key={item.id} sx={{ display: 'flex', width: '100%', flexDirection: 'column', padding: 1, marginBottom: 1, transition: 'ease-in-out 2s' }}>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography fontWeight={600}>{item?.Name}</Typography>
                <IconButton onClick={() => handleShow(item.id)}>
                  <KeyboardArrowDownIcon sx={{ fontWeight: '600', color: 'black' }} />
                </IconButton>
              </Box>
              <Box
              sx={{
                maxHeight: item.show ? '1000px' : '0', // Dynamically set max height
                overflow: 'hidden', // Hide the content when collapsed
                transition: 'max-height 0.5s ease-out', // Smooth transition for content reveal
              }}
            >
              {item.show && <Box width="100">{item.text}</Box>}
            </Box>
            </Paper>

          )
        })
      }
    </Box>
  )
}

export default Day14Accordian
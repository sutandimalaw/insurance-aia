import {useState} from 'react'
import { Tabs, Tab, Box } from '@mui/material';
import TabPanel from './Tabpanel';
import Item from './Item';
import { info, members } from './Constanst'

import {Chart, ArcElement} from 'chart.js'
  Chart.register(ArcElement);


const allProps =(index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Home = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  return (
    <div className='container'>
        <div className='head-section' >
            <h1>
                INSURANCES
            </h1>
        </div>
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} >
                    <Tab className='tab-title' label="Info" {...allProps(0)} />
                    <Tab className='tab-title' label="User" {...allProps(1)} />
                    <Tab className='tab-title' label="Detail" {...allProps(2)} />
                    <Tab className='tab-title' label="items" {...allProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               <Item 
                info ={info}
                members ={members}
               />
            </TabPanel>
            <TabPanel className="tab-body" value={value} index={1}>
            </TabPanel>
            <TabPanel className="tab-body" value={value} index={2}>
            </TabPanel>
            <TabPanel className="tab-body" value={value} index={3}>
            </TabPanel>
        </Box>
        
        
    </div>
  )
}

export default Home
import React from 'react'
import {Doughnut} from 'react-chartjs-2';

const state = {
  datasets: [
  {
    borderWidth:10,
    label: 'Rainfall',
    backgroundColor: [
      '#12939a',
      '#79c7e3',
      '#ef5d28',
      '#ff9833',
      '#1a3177'
    ],
   
    data: [30, 50, 100, 60, 80]
  }]
}

const Chart = () => {

  return (
    <div>
      <Doughnut
     
        data={state}
        options={{
          title:{
            display:true,
            text:'Member Ages',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  )
}

export default Chart
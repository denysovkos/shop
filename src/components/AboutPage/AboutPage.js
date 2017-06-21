import React, {Component} from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text } from 'recharts';
import { scalePow } from 'd3-scale';

const data = [
      {name: 'Some name', Americans: 235000000, EU: 120000000, ROW: 12500}
];

const scale = scalePow().exponent(0.1).domain([0,235000000]);
let prevValue = 0;

export default class AboutPage extends Component {

  render() {

    return (
      <div>
    <h2>О нас</h2>
    <p>some info</p>

    <BarChart width={400} height={500} data={data}
            margin={{top: 0, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name" />
       <YAxis type="number" padding={{ top: 20 }}
                domain={[0, 400]}
                scale={scale}
              ticks={[0, 10000, 50000, 1000000, 100000000, 300000000]}
              
              />
       <CartesianGrid strokeDasharray="1 1" vertical={false}/>
       <Tooltip />
       <Legend verticalAlign="top" height={36} />
       <Bar dataKey="Americans" fill="#8884d8" label={{ fill: 'black', fontSize: 10}}/>
       <Bar dataKey="EU" fill="#82ca9d" label={{ fill: 'black', fontSize: 10}}/>
       <Bar dataKey="ROW" fill="#82ca00" label={{ fill: 'black', fontSize: 10}}/>
      </BarChart>
  </div>
    )
  }
}
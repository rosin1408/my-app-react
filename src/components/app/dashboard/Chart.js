import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(name, confirmados, suspeitos, ocupacaoEnfermaria, ocupacaoUti, mortes) {
  return { name, confirmados, suspeitos, ocupacaoEnfermaria, ocupacaoUti, mortes };
}

const data = [
  createData('24/4', 6, 32, null, null, 0),
  createData('25/4', 11, 42, null, null, 0),
  createData('26/4', 14, 48, null, null, 0),
  createData('27/4', 22, 39, null, null, 0),
  createData('28/4', 45, 67, null, null, 0),
  createData('29/4', 50, 112, null, null, 0),
  createData('30/4', 66, 153, null, null, 0),
  createData('01/5', 101, 121, null, null, 0),
  createData('02/5', 121, 116, null, null, 0),
  createData('03/5', 157, 74, null, null, 0),
  createData('04/5', 168, 56, null, null, 0),
  createData('05/5', 189, 79, null, null, 0),
  createData('06/5', 206, 12, null, null, 0),
  createData('07/5', 233, 145, null, null, 0),
  createData('08/5', 266, 151, null, null, 0),
  createData('09/5', 312, 142, null, null, 0),
  createData('10/5', 338, 134, null, null, 0),
  createData('11/5', 353, 153, null, null, 0),
  createData('12/5', 405, 135, null, null, 0),
  createData('13/5', 420, 204, null, null, 0),
  createData('14/5', 441, 247, null, null, 0),
  createData('15/5', 464, 263, null, null, 0),
  createData('16/5', 514, 217, null, null, 0),
  createData('17/5', 540, 207, null, null, 0),
  createData('18/5', 577, 171, null, null, 1),
  createData('19/5', 636, 167, null, null, 2)
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Legend />
          <Line type="monotone" dataKey="confirmados" stroke="#8884d8" dot={true}/>

          <Line type="monotone" dataKey="suspeitos"stroke="#82ca9d" dot={true} />

          <Line type="monotone" dataKey="mortes"stroke="#da0202" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
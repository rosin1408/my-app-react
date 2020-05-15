import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(name, confirmados, suspeitos) {
  return { name, confirmados, suspeitos };
}

const data = [
  createData('24/4', 6, 32),
  createData('25/4', 11, 42),
  createData('26/4', 14, 48),
  createData('27/4', 22, 39),
  createData('28/4', 45, 67),
  createData('29/4', 50, 112),
  createData('30/4', 66, 153),
  createData('01/5', 101, 121),
  createData('02/5', 121, 116),
  createData('03/5', 157, 74),
  createData('04/5', 168, 56),
  createData('05/5', 189, 79),
  createData('06/5', 206, 12),
  createData('07/5', 233, 145),
  createData('08/5', 266, 151),
  createData('09/5', 312, 142),
  createData('10/5', 338, 134),
  createData('11/5', 353, 153),
  createData('12/5', 405, 135),
  createData('13/5', 420, 204),
  createData('14/5', 441, 247)
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
          <Line type="monotone" dataKey="confirmados" stroke={theme.palette.primary.main} dot={true} />

          <Line type="monotone" dataKey="suspeitos" stroke={theme.palette.primary.main} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
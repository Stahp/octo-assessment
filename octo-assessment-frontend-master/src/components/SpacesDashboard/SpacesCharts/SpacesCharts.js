import React from 'react';
import { LineChart, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import './SpacesCharts.css'

function SpacesCharts() {
    return (
        <div className="h-container">
            <LineChart width={400} height={200} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="active" stroke="#0184FE" />
                <Line type="monotone" dataKey="closed" stroke="#FFB901" />
            </LineChart>

            <div style={{marginRight:'12%'}}></div>

            <BarChart width={400} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="active" fill="#CFE8FC" />
                <Bar dataKey="closed" fill="#FFF1CB" />
            </BarChart>
        </div>
    )
}

const data = [
    {
        name: 'Space A',
        closed: 6,
        active: 12,
        amt: 10
    },
    {
        name: 'Space B',
        closed: 12,
        active: 2,
        amt: 10
    },
    {
        name: 'Space C',
        closed: 2,
        active: 5,
        amt: 10
    },
    {
        name: 'Space D',
        closed: 10,
        active: 2,
        amt: 10
    }
]

export default SpacesCharts

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function BreweryCharts({ stateChartData, breweryTypeData }) {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#8dd1e1",
    "#a4de6c",
    "#d0ed57",
  ];

  return (
    <div className="chart-container">
      <div className="chart-section">
        <h3>Top 10 States by Number of Breweries</h3>
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={stateChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="state"
                angle={-45}
                textAnchor="end"
                height={70}
                interval={0}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name="Number of Breweries" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="chart-description">
          This chart shows the distribution of breweries across different
          states. States with more breweries may have a stronger craft beer
          culture or more favorable regulations.
        </p>
      </div>

      <div className="chart-section">
        <h3>Brewery Types Distribution</h3>
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={breweryTypeData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                nameKey="type"
              >
                {breweryTypeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="chart-description">
          This chart illustrates the distribution of different brewery types.
          Micro breweries and brewpubs are typically the most common types,
          reflecting the growth of the craft beer industry in recent years.
        </p>
      </div>
    </div>
  );
}

export default BreweryCharts;

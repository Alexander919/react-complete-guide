import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({dataPoints, maxValue}) {
    // const dataPointValues = dataPoints.map(dp => dp.value);
    // const totalMaximum = Math.max(...dataPointValues);
    // console.log(dataPoints);
    return (
        <div className="chart">
            {dataPoints.map(dp => {
                return <ChartBar value={dp.value} maxValue={maxValue} label={dp.label} key={dp.label} />
            })}
        </div>
    );
}

export default Chart;
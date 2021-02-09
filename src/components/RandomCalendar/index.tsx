import React from "react";
import { Container } from "./styles";
import HeatMap from "react-calendar-heatmap";
import { subYears, isBefore, isSameDay, addDays } from "date-fns"; //boa biblioteca para trabalhar com datas.

type HeatMapValue = { date: Date; count: number };

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();
  return (
    <Container>
      <div className="wrapper">
        <HeatMap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatMapValue) => {
            let clampedCount = 0;
            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            } //limitar o valor do scale.
            return `scale-${clampedCount}`;
          }}
          showWeekdayLabels
        />
      </div>
      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
};

const generateHeatMapValues = (startDate: Date, endDate: Date) => {
  const values: HeatMapValue[] = [];
  let currentDate = startDate;
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const count = Math.random() * 4; //conforme scalas de commits;
    values.push({ date: currentDate, count: Math.round(count) });
    currentDate = addDays(currentDate, 1);
  }
  return values;
};

export default RandomCalendar;

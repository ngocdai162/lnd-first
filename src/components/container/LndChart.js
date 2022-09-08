import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../../config/api";
import { Line } from "react-chartjs-2";
import {
  CircularProgress,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import SelectButton from "../modules/SelectButton";
import { chartDays } from "../../config/data";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CategoryScale } from "chart.js";
import Chart from 'chart.js/auto';
import { coinChartSelector} from "../../redux/selectors";
const MainChart = styled.div`
      width: "45%";
      display: "flex";
      flexDirection: "column";
      alignItems: "center";
      justifyContent: "center";
      marginTop: 25;
      padding: 40;
`

const LndChart = () => {
  const dispatch = useDispatch();
  const coin = {
    id: "bitcoin"
  }
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const [currency,setCurrency]   = useState('usd');
  const [flag,setflag] = useState(false);
  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <MainChart>
        {!historicData | flag===false ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </MainChart>
    </ThemeProvider>
  );
};

export default LndChart;

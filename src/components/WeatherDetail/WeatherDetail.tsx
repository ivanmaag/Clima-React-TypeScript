import { type Weather } from "../../hooks/useWeather"
//import { formatTemperature } from "../../utils"
import styles from './WeatherDetail.module.css'

type WeatherDetailProps = {
    weather: Weather
}

export default function WeatherDetail({weather} : WeatherDetailProps) {
  return (
    <div className={styles.container}>
        <h2>El tiempo en: {weather.name}</h2>
        <p className={styles.current}>{parseInt(weather.main.temp.toString())}ºC</p>
        <div className={styles.temperatures}>
            <p>Min: <span>{parseInt(weather.main.temp_min.toString())}ºC</span></p>
            <p>Máx: <span>{parseInt(weather.main.temp_max.toString())}ºC</span></p>
        </div>
    </div>
  )
}

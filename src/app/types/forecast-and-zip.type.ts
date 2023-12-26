import { Forecast } from '../forecasts-list/forecast.type'

export interface ForecastAndZip {
    zip: string
    data: Forecast
    dt: number
    expiresIn: number
}

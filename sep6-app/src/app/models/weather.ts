import { Time } from '@angular/common';

export interface Weather
{
    origin: string;
    year: number;
    month: number;
    day: number;
    hour: number;
    temp: number;
    dewp: number;
    humid: number;
    wind_dir: number;
    wind_speed: number;
    wind_gust: number;
    precip: number;
    pressure: number;
    visib: number;
    time_hour: Date
}
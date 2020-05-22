export interface Flight
{
    year: number;
    month: number;
    day: number;
    dep_time: number;
    dep_delay: number;
    arr_time: number;
    arr_delay: number;
    carrier: string;
    tailnum: string;
    flight: number;
    origin: string;
    dest: string;
    air_time: number;
    distance: number;
    hour: number;
    minute: number;
}
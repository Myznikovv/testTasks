import React, {FC, useEffect, useState} from 'react';
import {IDate} from "../types/types";
import "./DigitalClock.css";


interface DigitalClockProps {
    timezone: string;
}


const DigitalClock: FC<DigitalClockProps> = ({timezone}) => {


    const [time, setTime] = useState('');
    const [error, setError] = useState('');
    const [hoursStartDegree, setHoursStartDegree] = useState<number>();
    const [minutesStartDegree, setMinutesStartDegree] = useState<number>();
    const [secondsStartDegree, setSecondsStartDegree] = useState<number>();

    const updateTime = async () => {
        // const response = await api<IDate>(`http://worldtimeapi.org/api/timezone/${timezone}`);
        const response = await api<IDate>(`https://api.api-ninjas.com/v1/worldtime?timezone=${timezone}`);

        const time = response.datetime.toString();
        setTime(time);
        const seconds = parseInt(response.second);
        const minutes = parseInt(response.minute);
        const hours = parseInt(response.hour);

        const secondsStartDegree = 360 / 60 * seconds,
            minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds,
            hoursStartDegree = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;
        setHoursStartDegree(hoursStartDegree);
        setMinutesStartDegree(minutesStartDegree);
        setSecondsStartDegree(secondsStartDegree);



    }

    function api<DigitalClockProps>(url: string): Promise<DigitalClockProps> {
        return fetch(url, {
            headers: {'X-Api-Key': 'WgB5dD0Hg2bIMUlo/ifkdg==zpkZVQEp7jWT2CjY'}
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            })
            .then(data => {
                setError('')
                return data
            }).catch((e) => {
                setError("API didn't get information");
                throw e;
                return
            })
    }


    useEffect(() => {

        updateTime();
        const interval = setInterval(updateTime,1000);
        if (error === "API didn't get information"){
            console.log(error)
            clearInterval(interval)
            return
        }
    }, [time]);

    // @ts-ignore
    return (

        <div className="content">
            <time className="clock">
                {Array.from({ length: 12 }).map((item, index) => (
                    <span  className={`clock__stroke clock__stroke--${index}`} key={index} />
                ))}
                <span style={{transform: `rotate(${hoursStartDegree}deg)`}}
                      className="clock__hand clock__hand--hour"></span>
                <span style={{transform: `rotate(${minutesStartDegree}deg)`}}
                      className="clock__hand clock__hand--minute"></span>
                <span style={{transform: `rotate(${secondsStartDegree}deg)`}}
                      className="clock__hand clock__hand--second"></span>
            </time>
            {error?<p>{error}</p>:<h3>Time:{time}</h3>}
        </div>
    );
};

export default DigitalClock;
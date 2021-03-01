import React, {useState, useEffect, useRef} from 'react';
import './timer.scss';

const Timer = ({getData}) => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    
    let interval = useRef();

    const startTimer = (res) => {
        const timeRem = new Date(res).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = timeRem - now;      

            const days = Math.floor(distance/(1000*60*60*24)),
                  hours = Math.floor((distance/(1000*60*60) % 24)),
                  minutes = Math.floor((distance/(1000*60) % 60)),
                  seconds = Math.floor((distance/1000) % 60);


            if(distance < 0){
                clearInterval(interval.current);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000)
    }

    useEffect(() => {
        getData()
            .then(res => startTimer(res))
        return () => {
            clearInterval(interval);
        }
    }, [])

    const addZeroToTimer = (num) => {
        if(num > 0 && num < 10){
            return `0${num}`;
        } else {
            return num
        }
    }

    return(
        <>
            <section className="timer">
                <div className="timer__inner">
                    <div className="timer__inner-block">
                        <div>{addZeroToTimer(days)}</div>
                        <span>days</span>
                    </div>
                    <div className="timer__inner-block">
                        <div>{addZeroToTimer(hours)}</div>
                        <span>hours</span>
                    </div>
                    <div className="timer__inner-block">
                        <div>{addZeroToTimer(minutes)}</div>
                        <span>minutes</span>
                    </div>
                    <div className="timer__inner-block">
                        <div>{addZeroToTimer(seconds)}</div>
                        <span>seconds</span>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Timer;
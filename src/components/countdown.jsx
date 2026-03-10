import style from './style.module.css'
import { useEffect, useState } from 'react'

function Countdown() {

    // April 9, 2026 8:00 PM
    const targetDate = new Date("2026-04-09T20:00:00");

    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={style.countdownContainer}>
            <p data-aos="fade-up" className={style.mainTitle}>Countdown</p>
            <p data-aos="fade-up" className={style.subTitle}>until 9 April 2026</p>

            <div data-aos="fade-up" className={style.countdown}>
                <div>
                    <p className={style.no}>{timeLeft.days}</p>
                    <p className={style.name}>Days</p>
                </div>

                <span className={style.countdownDivider}></span>

                <div>
                    <p className={style.no}>{timeLeft.hours}</p>
                    <p className={style.name}>Hours</p>
                </div>

                <span className={style.countdownDivider}></span>

                <div>
                    <p className={style.no}>{timeLeft.minutes}</p>
                    <p className={style.name}>Min</p>
                </div>

                <span className={style.countdownDivider}></span>

                <div>
                    <p className={style.no}>{timeLeft.seconds}</p>
                    <p className={style.name}>Sec</p>
                </div>
            </div>
        </div>
    )
}

export default Countdown

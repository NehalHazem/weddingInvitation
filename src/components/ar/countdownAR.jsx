import style from './styleAR.module.css'
import { useEffect, useState } from 'react'

function CountdownAR() {

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

    const formatNumber = num => num.toLocaleString("ar-EG");

    return (
        <div className={style.countdownContainer}>
            <p data-aos="fade-up" className={style.mainTitle}>متبقى</p>
            <p data-aos="fade-up" className={style.subTitle}>حتى ٩ أبريل</p>

            <div data-aos="fade-up" className={style.countdown}>
                <div>
                    <p className={style.no}>{formatNumber(timeLeft.days)}</p>
                    <p className={style.name}>أيام</p>
                </div>

                <span className={style.countdownDivider}></span>

                <div>
                    <p className={style.no}>{formatNumber(timeLeft.hours)}</p>
                    <p className={style.name}>ساعات</p>
                </div>

                <span className={style.countdownDivider}></span>

                <div>
                    <p className={style.no}>{formatNumber(timeLeft.minutes)}</p>
                    <p className={style.name}>دقائق</p>
                </div>

                <span className={style.countdownDivider}></span>

                <div>
                    <p className={style.no}>{formatNumber(timeLeft.seconds)}</p>
                    <p className={style.name}>ثوانٍ</p>
                </div>
            </div>
        </div>
    )
}

export default CountdownAR
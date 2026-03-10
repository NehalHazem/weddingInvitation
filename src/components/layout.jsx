import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BgMusic from './bgMusic'
import Countdown from './countdown'
import IntroSlide from './introSlide'
import LastSlide from './lastSlide'
import Location from './location'

function Layout() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true
        });

        AOS.refresh();
    }, [])

    return (
        <>
            <BgMusic />
            <IntroSlide />
            <Countdown />
            <Location />
            <LastSlide />
        </>
    )
}

export default Layout

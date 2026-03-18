import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import BgMusic from './../bgMusic'
import CountdownAR from './countdownAR'
import IntroSlideAR from './introSlideAR'
import LastSlideAR from './lastSlideAR'
import LocationAR from './locationAR'

function LayoutAR() {

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
            <IntroSlideAR />
            <CountdownAR />
            <LocationAR />
            <LastSlideAR />
        </>
    )
}

export default LayoutAR
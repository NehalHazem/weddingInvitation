import { useState, useEffect } from 'react'
import style from './styleAR.module.css'

function IntroSlideAR() {

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        let Body = document.querySelector('body')
        Body.style.overflow = 'hidden'
        if (showContent) {
            Body.style.overflow = 'auto'
        }
    }, [showContent])

    return (
        <>
            <div className={style.introContainer}>
                <div>
                    <p className={style.title}>بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ</p>
                    <p className={style.title2}>وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً</p>

                    <h1 className={style.names}>
                        <span>نهال</span>
                        <span>و</span>
                        <span>أحمد</span>
                    </h1>
                </div>

                <div>
                    <div className={style.divider}>
                        <span></span>
                        <span>✦</span>
                        <span></span>
                    </div>

                    <p className={style.date}>٩ أبريل ٢٠٢٦</p>
                    <p className={style.time}>الساعة ٨ مساءً</p>

                    <p className={style.details}>تفاصيل</p>

                    <div className={style.scrollArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div className={style.overlay}></div>

            <button 
                className={[style.startBtn, showContent && style.hideStartBtn].join(' ')}
                onClick={() => setShowContent(true)}
            >
                <p>يسرنا ندعوكم الى</p>

                <div className={style.tapContainer}>
                    <div className={style.tapIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v0"></path>
                            <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v6"></path>
                            <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                        </svg>
                    </div>

                    <p>اضغط للمتابعة</p>
                </div>
            </button>
        </>
    )
}

export default IntroSlideAR

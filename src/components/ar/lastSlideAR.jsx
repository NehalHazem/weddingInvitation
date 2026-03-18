import style from './styleAR.module.css'
import rings from './../../assets/media/wedding_rings.png'

function LastSlideAR() {
    return (
        <div className={style.lastSlideContainer}>
            <h1 data-aos="fade-up" className={style.names}>
                <span>نهال</span>
                <span>و</span>
                <span>أحمد</span>
            </h1>

            <p data-aos="fade-up" className={style.date}>٩ أبريل ٢٠٢٦ - الساعة ٨ مساءً</p>

            <img className={style.ringsImg} src={rings}/>
        </div>
    )
}

export default LastSlideAR

import style from './style.module.css'
import rings from './../assets/media/wedding_rings.png'

function LastSlide() {
    return (
        <div className={style.lastSlideContainer}>
            <h1 data-aos="fade-up" className={style.names}>
                <span>Ahmed</span>
                <span>&</span>
                <span>Nehal</span>
            </h1>

            <p data-aos="fade-up" className={style.date}>9 April 2026 - 08:00 PM</p>

            <img className={style.ringsImg} src={rings}/>
        </div>
    )
}

export default LastSlide

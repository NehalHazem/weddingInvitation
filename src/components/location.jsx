import style from './style.module.css'

function Location() {

    const openGoogleMaps = () => {
        const address = "Police Mosque, 2CJF+292, Orouba Axis, New Cairo 1, Cairo Governorate 4731210";
        const encodedAddress = encodeURIComponent(address);

        const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        window.open(url, "_blank");
    }

    return (
        <div className={style.locationContainer}>
            <p data-aos="fade-up" className={style.locationTitle}>Welcome!</p>
            <p data-aos="fade-up" className={style.locationPara}>We warmly invite you to celebrate our wedding day with us in the Police Mosque (Masjid El Shorta), New cairo. We look forward to sharing this unforgettable moment with you.</p>
        
            <div data-aos="fade-up" className={style.locationBox}>
                <div>
                    <p className={style.address}>Masjid El Shorta - Roof 1 <br/> New Cairo</p>
                </div>

                <div className={style.mapCont}>
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="100%"
                        style={{ 
                            border: 0, 
                            borderRadius: 20,
                        }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2382670526117!2d31.423399600000003!3d30.030021500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d21fbd77f09%3A0xafdc08b451038fdd!2sPolice%20Mosque!5e0!3m2!1sen!2seg!4v1770251719914!5m2!1sen!2seg"
                    />
                </div>

                <button 
                    className={style.mapBtn}
                    onClick={openGoogleMaps}
                >
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#835d2fb3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <div>Open in Maps</div>
                </button>
            </div>
        </div>
    )
}

export default Location

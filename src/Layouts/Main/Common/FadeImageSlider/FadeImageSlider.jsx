import styles from "./FadeImageSlider.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import React, {useEffect, useState} from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import {EffectFade, Autoplay} from "swiper/modules";
import {X} from "@phosphor-icons/react";

export const FadeImageSlider = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
    const [lastUpdated, setLastUpdated] = useState(0);
    const updateThreshold = 100;
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseMove = (e) => {
        const currentTime = new Date().getTime();
        if (currentTime - lastUpdated >= updateThreshold) {
            setPosition({x: e.clientX, y: e.clientY});
            setLastUpdated(currentTime);
        }
    };
    const buttonStyle = isHovered
        ? {top: `${position.y}px`, left: `${position.x}px`, position: 'fixed'}
        : {};


    const [videoOpen, setVideoOpen] = useState(false);


    const openVideo = () => {
        setVideoOpen(true);
    }
    const closeVideo = () => {
        setVideoOpen(false);

    }
    useEffect(() => {
        if (!videoOpen) {
            document.body.style.overflowY = 'auto';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }, [videoOpen]);



    return (
        <section className={styles.fadeImgSliderSection}>
            <div className={`${styles.fadeImgSliderVideo} ${videoOpen && styles.videoOpened}`}>
                <div className={styles.videoContainer}>
                    <div className={styles.closeVideo} onClick={closeVideo}>
                        <X />
                    </div>
                    <iframe allow="autoplay; fullscreen"
                            src={videoOpen? `https://player.vimeo.com/video/63729905?autoplay=1` : null}>
                    </iframe>
                </div>

            </div>
            <div
                className={styles.playButtonContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                onClick={openVideo}
            >

            </div>
            <div className={styles.playButton} style={buttonStyle}>
                PLAY
            </div>
            <>
                <Swiper
                    effect={"fade"}
                    modules={[EffectFade, Autoplay]}
                    autoplay={{delay: 3500, disableOnInteraction: false}}
                    allowTouchMove={false}
                    className="mySwiper"
                >
                    <SwiperSlide className={styles.imageWrapper}>
                        <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/img-116-copyright.jpg"
                             alt="Slide"/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.imageWrapper}>
                        <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/img-115-copyright.jpg"
                             alt="Slide"/>
                    </SwiperSlide>
                </Swiper>
            </>
        </section>
    );
};

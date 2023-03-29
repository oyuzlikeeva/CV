const sliderProps = {
    currentSlide: 0,
    maxSliderCounts: 3
}

const slideGalleryToSlide = (slideNumber) => {
    slideGallery(slideNumber -sliderProps.currentSlide);
}

const slideGallery = (step) => {
    const galleryLeftButton = document.getElementById('gallery-arrow_left');
    const galleryRightButton = document.getElementById('gallery-arrow_right');
    const nextSlideCount = sliderProps.currentSlide + step;

    if ( nextSlideCount > sliderProps.maxSliderCounts || nextSlideCount < 0 ) {
        return;
    }

    document.getElementById(`skill-gallery_nav-item_${sliderProps.currentSlide}`).classList.remove('active');

    sliderProps.currentSlide += step

    document.getElementById(`skill-gallery_nav-item_${sliderProps.currentSlide}`).classList.add('active');
    document.getElementById('gallery').setAttribute('style', `left: -${sliderProps.currentSlide*100}vw`)

    if (nextSlideCount === 0) {
        galleryLeftButton.classList.remove('active');
        galleryRightButton.classList.add('active');
    }

    if (nextSlideCount === sliderProps.maxSliderCounts) {
        galleryLeftButton.classList.add('active');
        galleryRightButton.classList.remove('active');
    }

    if (nextSlideCount !== 0 && nextSlideCount !== sliderProps.maxSliderCounts) {
        galleryLeftButton.classList.add('active');
        galleryRightButton.classList.add('active');
    }
}
const init = () => {
    const showNextSlide = () => {
        bgSlides('down');
    };
    const showPrevSlide = () => {
        bgSlides('up');
    };

    if (window.innerWidth >= 768) {
        window.addEventListener('wheel', (e) => {

            let delta = -e.deltaY;

            if (delta > 0) {
                if (helperInput.value == '1') {
                    console.log('scroll up');
                    helperInput.value = 0;
                    showPrevSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            } else {
                if (helperInput.value == '1') {
                    console.log('scroll down');
                    helperInput.value = 0;
                    showNextSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            }
        });
    } else {
        document.addEventListener('swiped-left', () => {
            showNextSlide();
        });

        document.addEventListener('swiped-right', () => {
            showPrevSlide();
        });
    }
};

init();
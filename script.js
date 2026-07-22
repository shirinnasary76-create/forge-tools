/* ========================================
   FORGE TOOLS
   HEADER INTERACTIONS
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       ELEMENTS
    ======================================== */

    const categoriesButton =
        document.getElementById("categoriesButton");

    const megaMenu =
        document.getElementById("megaMenu");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileNavigation =
        document.getElementById("mobileNavigation");

    const mobileClose =
        document.getElementById("mobileClose");


    /* ========================================
       MEGA MENU
    ======================================== */

    if (categoriesButton && megaMenu) {

        categoriesButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                megaMenu.classList.toggle("active");

            }
        );

    }


    /* ========================================
       CLOSE MEGA MENU
       WHEN CLICKING OUTSIDE
    ======================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                megaMenu &&
                !megaMenu.contains(event.target) &&
                !categoriesButton.contains(event.target)
            ) {

                megaMenu.classList.remove("active");

            }

        }
    );


    /* ========================================
       MOBILE MENU OPEN
    ======================================== */

    if (mobileMenuButton && mobileNavigation) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                mobileNavigation.classList.add("active");

                document.body.style.overflow = "hidden";

            }
        );

    }


    /* ========================================
       MOBILE MENU CLOSE
    ======================================== */

    if (mobileClose && mobileNavigation) {

        mobileClose.addEventListener(
            "click",
            function () {

                mobileNavigation.classList.remove("active");

                document.body.style.overflow = "";

            }
        );

    }


    /* ========================================
       CLOSE MOBILE MENU
       WHEN CLICKING A LINK
    ======================================== */

    const mobileLinks =
        mobileNavigation
        ? mobileNavigation.querySelectorAll("a")
        : [];

    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileNavigation.classList.remove("active");

                    document.body.style.overflow = "";

                }
            );

        }
    );


    /* ========================================
       ESC KEY
       CLOSE MENUS
    ======================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (megaMenu) {
                    megaMenu.classList.remove("active");
                }

                if (mobileNavigation) {

                    mobileNavigation.classList.remove(
                        "active"
                    );

                    document.body.style.overflow = "";

                }

            }

        }
    );


    /* ========================================
       STICKY HEADER
    ======================================== */

    const mainHeader =
        document.querySelector(".main-header");

    let lastScrollPosition = 0;

    window.addEventListener(
        "scroll",
        function () {

            const currentScroll =
                window.pageYOffset;

            if (
                currentScroll > 120 &&
                currentScroll < lastScrollPosition
            ) {

                mainHeader.classList.add(
                    "header-visible"
                );

            } else if (
                currentScroll > 120 &&
                currentScroll > lastScrollPosition
            ) {

                mainHeader.classList.remove(
                    "header-visible"
                );

            }

            lastScrollPosition =
                currentScroll <= 0
                    ? 0
                    : currentScroll;

        }
    );


    /* ========================================
       SEARCH INTERACTION
    ======================================== */

    const searchInput =
        document.querySelector(
            ".header-search input"
        );

    if (searchInput) {

        searchInput.addEventListener(
            "focus",
            function () {

                searchInput.parentElement.classList.add(
                    "search-focused"
                );

            }
        );

        searchInput.addEventListener(
            "blur",
            function () {

                searchInput.parentElement.classList.remove(
                    "search-focused"
                );

            }
        );

    }


    /* ========================================
       CART COUNTER DEMO
    ======================================== */

    const cartCount =
        document.querySelector(".cart-count");

    window.updateCartCount =
        function (number) {

            if (cartCount) {

                cartCount.textContent =
                    number;

            }

        };


    /* ========================================
       PAGE READY
    ======================================== */

    document.body.classList.add(
        "page-loaded"
    );

});
/* ========================================
   FORGE TOOLS
   HERO SLIDER
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const heroSlider =
        document.getElementById("heroSlider");

    if (!heroSlider) {
        return;
    }


    /* ========================================
       ELEMENTS
    ======================================== */

    const slides =
        heroSlider.querySelectorAll(
            ".hero-slide"
        );

    const dots =
        heroSlider.querySelectorAll(
            ".hero-dot"
        );

    const nextButton =
        heroSlider.querySelector(
            ".hero-next"
        );

    const prevButton =
        heroSlider.querySelector(
            ".hero-prev"
        );


    /* ========================================
       SETTINGS
    ======================================== */

    let currentSlide = 0;

    let autoPlay;

    const slideDuration = 5000;


    /* ========================================
       SHOW SLIDE
    ======================================== */

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        }

        else if (index < 0) {
            currentSlide =
                slides.length - 1;
        }

        else {
            currentSlide = index;
        }


        /* Remove active state */

        slides.forEach(
            function (slide) {

                slide.classList.remove(
                    "active"
                );

            }
        );


        dots.forEach(
            function (dot) {

                dot.classList.remove(
                    "active"
                );

            }
        );


        /* Add active state */

        slides[currentSlide]
            .classList.add(
                "active"
            );


        if (dots[currentSlide]) {

            dots[currentSlide]
                .classList.add(
                    "active"
                );

        }

    }


    /* ========================================
       NEXT SLIDE
    ======================================== */

    function nextSlide() {

        showSlide(
            currentSlide + 1
        );

    }


    /* ========================================
       PREVIOUS SLIDE
    ======================================== */

    function previousSlide() {

        showSlide(
            currentSlide - 1
        );

    }


    /* ========================================
       AUTO PLAY
    ======================================== */

    function startAutoPlay() {

        stopAutoPlay();

        autoPlay =
            setInterval(
                function () {

                    nextSlide();

                },
                slideDuration
            );

    }


    function stopAutoPlay() {

        if (autoPlay) {

            clearInterval(
                autoPlay
            );

        }

    }


    /* ========================================
       NEXT BUTTON
    ======================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            function () {

                nextSlide();

                startAutoPlay();

            }
        );

    }


    /* ========================================
       PREVIOUS BUTTON
    ======================================== */

    if (prevButton) {

        prevButton.addEventListener(
            "click",
            function () {

                previousSlide();

                startAutoPlay();

            }
        );

    }


    /* ========================================
       DOT NAVIGATION
    ======================================== */

    dots.forEach(
        function (dot, index) {

            dot.addEventListener(
                "click",
                function () {

                    showSlide(index);

                    startAutoPlay();

                }
            );

        }
    );


    /* ========================================
       PAUSE ON HOVER
    ======================================== */

    heroSlider.addEventListener(
        "mouseenter",
        function () {

            stopAutoPlay();

        }
    );


    heroSlider.addEventListener(
        "mouseleave",
        function () {

            startAutoPlay();

        }
    );


    /* ========================================
       KEYBOARD NAVIGATION
    ======================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "ArrowRight"
            ) {

                nextSlide();

                startAutoPlay();

            }


            if (
                event.key === "ArrowLeft"
            ) {

                previousSlide();

                startAutoPlay();

            }

        }
    );


    /* ========================================
       TOUCH SWIPE
    ======================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    heroSlider.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0]
                    .screenX;

        },
        {
            passive: true
        }
    );


    heroSlider.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0]
                    .screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const swipeDistance =
            touchEndX -
            touchStartX;


        if (
            Math.abs(swipeDistance)
            < 50
        ) {

            return;

        }


        if (
            swipeDistance < 0
        ) {

            nextSlide();

        }

        else {

            previousSlide();

        }


        startAutoPlay();

    }


    /* ========================================
       INITIALIZE SLIDER
    ======================================== */

    showSlide(0);

    startAutoPlay();

});

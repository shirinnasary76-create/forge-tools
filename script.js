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

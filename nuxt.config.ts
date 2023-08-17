// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";

export default defineNuxtConfig({
    alias: {
        "@": resolve(__dirname, "/")
    },
    css: [
        '~/assets/css/all.min.css',
        '~/assets/css/animate.css',
        '~/assets/css/animated-text.css',
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/bootstrap-icons.css',
        '~/assets/css/flaticon.css',
        '~/assets/css/meanmenu.min.css',
        '~/assets/css/owl.carousel.min.css',
        '~/assets/css/responsive.css',
        '~/assets/css/style.css',
        '~/assets/css/theme-default.css',
        '~/assets/css/venobox.css',
    ],
    app: {
        head: {
            script: [
                {src: "/js-files/vendor/jquery-3.6.2.min.js", body: true},
                {src: "/js-files/popper.min.js", body: true},
                {src: "/js-files/bootstrap.min.js", body: true},
                {src: "/js-files/owl.carousel.min.js", body: true},
                {src: "/js-files/jquery.counterup.min.js", body: true},
                {src: "/js-files/waypoints.min.js", body: true},
                {src: "/js-files/wow.js", body: true},
                {src: "/js-files/imagesloaded.pkgd.min.js", body: true},
                {src: "/js-files/venobox.js", body: true},
                {src: "/js-files/animated-text.js", body: true},
                {src: "/js-files/isotope.pkgd.min.js", body: true},
                // {src: "/js-files/venobox.min.js", body: true},
                {src: "/js-files/vendor/modernizr-3.5.0.min.js"},
                {src: "/js-files/jquery.meanmenu.js", body: true},
                {src: "/js-files/jquery.scrollUp.js", body: true},
                {src: "/js-files/jquery.barfiller.js", body: true},
                // {src: "/js-files/jquery.nav.js", body: true},
                // {src: "/js-files/particls.js", body: true},
                {src: "/js-files/theme.js", body: true},
            ]
        }
    }
    // build: {
    //     templates: [
    //         {src: "~/assets/js/animated-text.js"},
    //         {src: "~/assets/js/bootstrap.min.js"},
    //         {src: "~/assets/js/imagesloaded.pkgd.min.js"},
    //         {src: "~/assets/js/isotope.pkgd.min.js"},
    //         {src: "~/assets/js/jquery.barfiller.js"},
    //         {src: "~/assets/js/jquery.counterup.min.js"},
    //         {src: "~/assets/js/jquery.meanmenu.js"},
    //         {src: "~/assets/js/jquery.nav.js"},
    //         {src: "~/assets/js/jquery.scrollUp.js"},
    //         {src: "~/assets/js/owl.carousel.min.js"},
    //         {src: "~/assets/js/particls.js"},
    //         {src: "~/assets/js/popper.min.js"},
    //         {src: "~/assets/js/theme.js"},
    //         {src: "~/assets/js/waypoints.min.js"},
    //         {src: "~/assets/js/wow.js"},
    //     ]
    // }
})

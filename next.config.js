const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
    i18n: {
        // locales supported by your application
        locales: ["all", "ch", "de", "en"],
        // default locale used when the non-locale path s are visited
        defaultLocale: "all",
        // Disable the automatic redirection based on the user's preferred locale
        localeDetection: false,
    },
});
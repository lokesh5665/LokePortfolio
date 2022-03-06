const isProd = process.env.NODE_ENV === 'production'
module.exports = {
    assetPrefix: isProd ? '/LokePortfolio/' : '',
    reactStrictMode: false,
    images: {
        domains: ["avatars.githubusercontent.com"],
    }
};
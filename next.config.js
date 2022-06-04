module.exports = {
   reactStrictMode: false,
   images: {
      domains: ["junggribucket.s3.ap-northeast-2.amazonaws.com", "s3.ap-northeast-2.amazonaws.com", "i.ytimg.com"]
   },
   poweredByHeader: false,
   env: {
      S3_URL: process.env.S3_URL
   },
   typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
   },
   eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
   },
};

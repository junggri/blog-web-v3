module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["junggribucket.s3.ap-northeast-2.amazonaws.com", "s3.ap-northeast-2.amazonaws.com", "i.ytimg.com"]
  },
  poweredByHeader: false,
  env:{
    S3_URL:process.env.S3_URL
  }
};

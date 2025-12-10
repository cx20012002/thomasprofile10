const nextConfig = {
  images: {
    // 允许优化的图片格式
    formats: ["image/avif", "image/webp"],
    // 图片优化配置
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 对于 SVG 文件，Next.js 默认不会优化，所以使用 unoptimized 是合理的
  },
};

module.exports = nextConfig;


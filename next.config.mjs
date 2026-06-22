/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // (বোনাস) ভবিষ্যতে ImgBB ব্যবহার করলে এরর এড়াতে এটিও এখনই যোগ করে রাখতে পারেন
      },
    ],
  },
};

export default nextConfig;

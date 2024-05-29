/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: "images-eu.ssl-images-amazon.com",
          },
          {
            protocol: 'https',
            hostname: "i.ibb.co",
          },
          {
            protocol: 'https',
            hostname: "fakestoreapi.com",
          },
          {
            protocol: 'https',
            hostname: "minion-vinovatheme.myshopify.com",
          },
         
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.skymavis.com', 'roninchain.com'],
  },
  // Ajout de la redirection de la page d'accueil vers /wildforest
  async redirects() {
    return [
      {
        source: '/',
        destination: '/wildforest',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
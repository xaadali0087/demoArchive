// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
      },
    // distDir: 'build',
    webpack: config => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding')
      return config
    }
};

export default nextConfig;

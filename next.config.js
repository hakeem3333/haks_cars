/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


// module.exports = {
//     images: {
//       domains: ['cdn.imagin.studio'],
//     },
//   }
  
const nextConfig = {
    images: {
      domains: ['cdn.imagin.studio'],
    },
    typescript:{
      ignoreBuildErrors:true
    }
  };
  
  module.exports = nextConfig;
  
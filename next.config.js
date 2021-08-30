module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/example',
        permanent: true
      }
    ];
  }
};

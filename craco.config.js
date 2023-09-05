const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components"),
      "@public": path.resolve(__dirname, "public"),
      "@icons": path.resolve(__dirname, "src/icons"),
    },
  },
};

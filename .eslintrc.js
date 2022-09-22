module.exports = {
  root: true,
  extends: '@antfu',
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    'no-console': 'off',
    'vue/no-constant-condition': 'off',
  },
}

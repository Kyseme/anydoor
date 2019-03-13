module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    // "quotes": ["warn", "double"],
    "semi": ["error", "always"],
    "no-console":'off'
  }
}

module.exports = {
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      extends: [
	"plugin:vue/base", 
    	'plugin:vue/recommended'
  ],
  rules: {
  },
      env: {
        jest: true
      }
    }
  ]
}

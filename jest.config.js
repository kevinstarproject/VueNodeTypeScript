module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  moduleNameMapper:{
             "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
             "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
};

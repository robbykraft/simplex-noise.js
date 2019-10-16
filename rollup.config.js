import cleanup from "rollup-plugin-cleanup";
import babel from "rollup-plugin-babel";
import minify from "rollup-plugin-babel-minify";

module.exports = [{
  input: "./src/index.js",
  output: {
    name: "SimplexNoise",
    file: "simplex.js",
    format: "es",
  },
  plugins: [
    cleanup({
      comments: "none",
      maxEmptyLines: 0,
    }),
    babel({
      babelrc: false,
      presets: [["@babel/env", { modules: false }]],
    }),
  ],
},
{
  input: "src/index.js",
  output: {
    name: "SimplexNoise",
    file: "simplex.min.js",
    format: "es",
  },
  plugins: [
    cleanup({ comments: "none" }),
    babel({
      babelrc: false,
      presets: [["@babel/env", { modules: false }]],
    }),
    minify({ mangle: { names: false } }),
  ],
},
];

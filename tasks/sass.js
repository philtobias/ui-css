module.exports = function(grunt) {
  return {
    main: {
      files: {
        "./<%= pkg.config.buildDir %>/css/main.css": "./src/sass/main.scss"
      },
      options: {
        style: 'compressed'
      }
    },
    demo: {
      files: {
        "./<%= pkg.config.buildDir %>/css/demo.css": "./src/sass/demo.scss"
      },
      options: {
        style: 'compressed'
      }
    }
  };
};

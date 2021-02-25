const path = require("path");
const fs = require("fs");
const parser = require("@babel/parser");
const options = require("./webpack.config.js");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");
const Parser = {
  // 读取文件，将文件内容转化为AST语法树
  getAst: (path) => {
    const content = fs.readFileSync(path, "utf-8");
    return parser.parse(content, {
      sourceType: "module",
    });
  },
  getDependencies: (ast, filename) => {
    const dependencies = {};
    traverse(ast, {
      //遍历import模块 获取ast所需的依赖
      ImportDeclaration({ node }) {
        const dirname = path.dirname(filename);
        const filepath = `${path.join(dirname, node.source.value)}.js`;
        dependencies[node.source.value] = filepath;
      },
    });
    return dependencies;
  },
  getCode: (ast) => {
    //将ast转换为代码
    const { code } = transformFromAst(ast, null, {
      parserOpts: {
        plugins: ["@babel/preset-env"],
      },
    });
    return code;
  },
};

class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }

  run() {
      const info=this.build(this.entry);
      this.modules.push(info);
      this.modules.forEach(({dependencies})=>{
          // 递归解析所有依赖
          if(dependencies){
              for(const dependency in dependencies){
                  this.modules.push(this.build(dependencies[dependency]));
              }
          }
      })
      // 依赖关系图
      const depencyGraph=this.modules.reduce((graph,item)=>({
          ...graph,
          [item.filename]:{
            dependencies: item.dependencies,
            code: item.code,
          }
      }),{});
      console.log(depencyGraph);
      this.generate(depencyGraph);
  }

  build(filename) {
    const { getAst, getDependencies, getCode } = Parser;
    const ast = getAst(filename);
    const dependencies = getDependencies(ast, this.entry);
    const code = getCode(ast);
    return {
      filename,
      dependencies,
      code,
    };
  }

  generate(graph) {
    const filepath=path.join(this.output.path,this.output.filename);
    const bundle= `(function(graph){
      function require(module) {
        function localRequire(relativePath) {
          return require(graph[module].dependencies[relativePath])
        }
        var exports = {};
        (function(require, exports, code) {
          eval(code)
        })(localRequire, exports, graph[module].code);
        return exports;
      }
      require('${this.entry}')
    })(${graph})`;
    fs.writeFileSync(filepath,bundle,'utf-8')
  }
}

new Compiler(options).run();

# vue3项目模板搭建

使用 vue3 js less eslint-prettier
支持css自动转为viewport 集成vant（可替换为其他mobile UI框架）

## 创建项目
```
vue create vue3-mobile-prettier
```
![vue3-mobile-prettier](https://github.com/qppq54s/vue3-templates/blob/main/vue3-mobile-prettier.jpg)

## 移动端配置
- 支持css自动转为viewport
- 引入reset-mobile.css
- ui库集成（vant）

### 支持css自动转为viewport
首选安装需要的依赖
```
npm install postcss-px-to-viewport --save-dev
```
最后在 `vue.config.js`中添加配置
```
css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            [
              "postcss-px-to-viewport",
              {
                viewportWidth: 375,
              },
            ],
          ],
        },
      },
    },
  },
```

### 引入reset-mobile.css
在assets文件夹下创建css/[reset-mobile.css](https://gist.githubusercontent.com/samzeng/996361c300c5fba40439ee042f9cb309/raw/71f44058e1e13b7193117054203a5f2b946fec6a/reset-mobile.css "reset-mobile.css")

# 使用

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

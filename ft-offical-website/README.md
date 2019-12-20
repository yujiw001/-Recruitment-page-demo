This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


目录结构

项目大至的骨架，由于模块比较少，就不用二级目录分类了：

public
├── index.html // 项目的启动根
src
├── asset // 存放公共静态资源
│       ├── css
│       ├── imgs
│       └── font
├── entity // 存放业务实体TS类型定义
├── common // 存放公共代码
├── components // 存放React公共组件
├── modules
│       ├── app
│       │     ├── views
│       │     │     ├── TopNav
│       │     │     ├── BottomNav
│       │     │     ├── ...
│       │     │     └── index //导出给其它模块使用的view
│       │     ├── model  //定义ModuleState和ModuleActions
│       │     ├── api    //将本模块需要的后台api封装一下
│       │     ├── facade //导出本模块对外的逻辑接口（类型、Actions、路由默认参数）
│       │     └── index  //导出本模块实体（view和model）
│       ├── photos
│       │     ├── views
│       │     ├── model
│       │     ├── api
│       │     ├── facade
│       │     └── index
│       ├── videos
│       ├── messages
│       ├── comments
│       ├── names //定义模块名，使用枚举类型来保证不重复
│       └── index //导出模块的全局设置，如RootState类型、模块载入方式等
├── Home.js  主页 
└── index.js 启动入

请尽量按照这个目录结构来安排文件，如果有特殊需要，知会一声。

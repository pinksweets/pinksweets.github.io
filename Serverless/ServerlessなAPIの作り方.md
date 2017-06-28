<!-- TOC -->

- [1. はじめに](#1-はじめに)
- [2. 揃えるもの](#2-揃えるもの)
- [3. 作ってみよう](#3-作ってみよう)
    - [3.1. 前提条件](#31-前提条件)
    - [3.2. 環境構築](#32-環境構築)
        - [3.2.1. リポジトリを作る](#321-リポジトリを作る)
        - [3.2.2. モジュールのインストール](#322-モジュールのインストール)
        - [3.2.3. ServerlessにAWSアカウント情報を設定](#323-serverlessにawsアカウント情報を設定)
        - [3.2.4. package.jsonのscriptに追加](#324-packagejsonのscriptに追加)
        - [3.2.5. 雛形の作成](#325-雛形の作成)
        - [3.2.6. webpack.config.jsの作成](#326-webpackconfigjsの作成)
        - [3.2.7. serverless.ymlの作成](#327-serverlessymlの作成)
        - [3.2.8. tsconfig.jsonの作成](#328-tsconfigjsonの作成)
        - [3.2.9. パッケージ構成のフォルダ作成](#329-パッケージ構成のフォルダ作成)
    - [3.3. とりあえずHelloを返そう](#33-とりあえずhelloを返そう)
        - [3.3.1. 「Hello AWS Lambda」を出力するコードを作る](#331-hello-aws-lambdaを出力するコードを作る)
        - [3.3.2. ローカルでテスト](#332-ローカルでテスト)
        - [3.3.3. エンドポイントを作る](#333-エンドポイントを作る)
    - [3.4. AWS S3と連携してみよう](#34-aws-s3と連携してみよう)

<!-- /TOC -->

# 1. はじめに
ServerlessFrameworkの欠点として、モジュールのバンドル化が雑な点にあります。  
ignore指定しないと不要モジュールまでnode_modulesの中身をごそっと持っていきます。  
もちろん、テストコードもLambdaに突っ込む分には余分なものになるので、ムダノキワミ。  
仕方がないのでWebpackします。ついでに型安全なコードで書けるようにtypescriptも使ってしまいます。  

# 2. 揃えるもの
AWSのマネージドサービスを使うので、AWSアカウント。  
それに加えてTypeScriptを利用するため、相性の良さそうなVSCodeを利用します。  
※TypeScriptもVSCodeもMS製  
- AWSアカウント  
- Visual Studio Code
  - TSLint plugin

# 3. 作ってみよう
Hello LambdaなAPIを作ります。  

## 3.1. 前提条件
- nodejs 6.10以降
- yarn
- git

## 3.2. 環境構築
### 3.2.1. リポジトリを作る
```bat
mkdir {project_name}
cd {project_name}
git init
```

### 3.2.2. モジュールのインストール
```bat
yarn init -y
yarn add aws-sdk aws-lambda
yarn add serverless serverless-webpack ts-loader tslint typescript webpack webpack-node-externals -D
yarn add @types/node @types/aws-lambda @types/aws-sdk -D
```

### 3.2.3. ServerlessにAWSアカウント情報を設定
```bat
serverless config credentials --provider aws --key {aws_key} --secret {aws_secret}
```

### 3.2.4. package.jsonのscriptに追加
``` json : package.json
  "scripts": {
    "local": "node_modules\\.bin\\sls webpack serve",
    "deploy": "node_modules\\.bin\\sls deploy"
  },
```

### 3.2.5. 雛形の作成  
```bat
node_modules\.bin\sls create --template aws-nodejs
node_modules\.bin\tslint --init
```
とりあえず作られるhandler.jsとserverless.ymlは邪魔なので一旦消します。  
```bat
del handler.js serverless.yml
```

### 3.2.6. webpack.config.jsの作成
- buildフォルダを作る  
```bat
mkdir build
```
- webpack.config.js突っ込む
``` javascript : webpack.config.js
var path = require('path');
var nodeExternals = require('webpack-node-externals');
var glob = require('glob');
const base = path.resolve(__dirname, '../');
const dist = path.resolve(base, 'api/dist');
const targets = glob.sync(`${base}/api/src/*.ts`);

module.exports = {
  context: base,
  entry: targets,
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: dist,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  externals: [nodeExternals()]
};
```

### 3.2.7. serverless.ymlの作成
```yml : serverless.yml
service: serverless-api
provider:
  name: aws
  runtime: nodejs6.10
  region: ap-northeast-1
plugins:
- serverless-webpack
custom:
  webpack: ./build/webpack.config.js
  webpackIncludeModules: true
functions:
  hello:
    handler: index.hello
    events:
    - http:
        path: hello
        method: get
```

### 3.2.8. tsconfig.jsonの作成
```json : tsconfig.json
{
  "compileOnSave": true,
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "noImplicitAny": false,
    "strictNullChecks": true,
    "alwaysStrict": true,
    "preserveConstEnums": true,
    "sourceMap": true,
    "moduleResolution": "Node",
    "lib": [
      "dom",
      "es2015",
      "es5",
      "es6"
    ]
  },
  "include": [
    "api/src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

### 3.2.9. パッケージ構成のフォルダ作成
```bat
mkdir api\src
```
- api\src  
API用のコードを管理するためのフォルダ


## 3.3. とりあえずHelloを返そう
### 3.3.1. 「Hello AWS Lambda」を出力するコードを作る
``` typescript : api\src\index.ts
export function hello(event, context, callback): void {
  callback(null, {
    statusCode: 200,

    headers: {
    },

    body: JSON.stringify({
      "message": "Hello AWS Lambda"
    })
  });
}
```

### 3.3.2. ローカルでテスト
※コマンド実行後、30秒ぐらい待ってください。  
  URLが表示されても裏でwebpackが動いていて、正常に動作出来ない事があります。  
```bat
yarn local
```

### 3.3.3. エンドポイントを作る
```bat
yarn deploy
```
コマンド実行後に表示されるAPI GatewayのURLから、実行結果が確認できます。

## 3.4. AWS S3と連携してみよう

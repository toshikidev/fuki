# Fuki

A URL Shortener created using Cloudflare Worker

# API

[API Documentation (API 文档)](API.md)

# Getting start

### 去 Workers KV 中创建一个命名空间

Go to Workers KV and create a namespace.

<img src="https://jsd.toshiki.dev/npm/imst@0.0.4/20201205232805.png">

### 去 Worker 的 Settings 选选项卡中绑定 KV Namespace

Bind an instance of a KV Namespace to access its data in a Worker.

<img src="https://jsd.toshiki.dev/npm/imst@0.0.4/20201205232536.png">

### 其中 Variable name 填写`LINKS`, KV namespace 填写你刚刚创建的命名空间

Where Variable name should set as `LINKS` and KV namespace is the namespace you just created in the first step.

<img src="https://jsd.toshiki.dev/npm/imst@0.0.4/20201205232704.png">

### 复制本项目中的`index.js`的代码到 Cloudflare Worker

Copy the `index.js` code from this project to Cloudflare Worker.

### 点击 Save and Deploy

Click Save and Deploy

# Demo

https://lnks.eu.org/

Note: Because someone abuse this demo website, all the generated link will automatically expired after 24 hours. For long-term use, please deploy your own.

注意：所有由 Demo 网站生成的链接 24 小时后会自动失效，如需长期使用请自行搭建。

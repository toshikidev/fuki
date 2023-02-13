# API 接口文档

[English](API.md)

可以通过调用 API 接口，使用可编程的方式生成短链接

### 接口调用地址

自行部署的 CloudFlare Worker 地址，例如：https://fuki.andatoshiki.workers.dev 或是自行绑定的域名

### 调用方式：HTTP POST 请求格式: JSON

示例：

```
{
	"url": "https://example.com"
}
```

### 请求参数:

| 参数名 |  类型  |               说明               | 是否必须 |        示例         |
| :----: | :----: | :------------------------------: | :------: | :-----------------: |
|  url   | string | 网址（需包括 http://或 https://) |   必须   | https://example.com |

### 响应示例 (JSON)：

```
{
    "status": 200,
    "key": "/demo"
}
```

### 响应参数:

| 参数名 |  类型  |               说明               |  示例   |
| :----: | :----: | :------------------------------: | :-----: |
| status |  int   |      状态码：200 为调用成功      |   200   |
|  key   | string | 短链接后缀：需要自行添加域名前缀 | /xxxxxx |

注：接口只会返回短链接对应的 key 值，实际使用中需要添加对应的域名前缀，如：示例中返回的 key 参数是 "/demo" ，则我们需要添加 "https://fuki.andatoshiki.workers.dev" 作为前缀，将其补全成完整的 url 即可使用，即：https://fuki.andatoshiki.workers.dev/demo

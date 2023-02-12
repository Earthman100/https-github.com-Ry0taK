# Misskey CSP Logger
misskey.ioにおいてCSP関連のエラーを記録するためのパッケージ

**注意:** `/csp-error`へPOSTされた内容をそのまま`console.log`に書き出すだけのものです

# 実行手順

``` bash
git clone https://github.com/Ry0taK/misskey-csp-logger
cd misskey-csp-logger
npm i
node index.js
```

ポート3000番でlistenします

# 実行手順 (Docker)

1. `docker run -p 3000:3000 ry0tak/misskey-csp-logger`
2. 3000番でlistenします

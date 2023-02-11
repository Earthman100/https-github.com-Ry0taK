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

1. Dockerfileをビルドします
2. ポート3000番をForwardした状態で実行します
3. 指定したポートでlistenします

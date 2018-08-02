# kintone-devcamp2018

### 開催情報

2018/8/2 kintone devCamp

### セッション情報

Live Coding!!
絶対知ってほしいBabelやWebpackなどのビルド環境やPC/モバイルでのデバッグ方法

### 事前準備

- Chrome のインストール
- [chrome://flags/](chrome://flags/) で `Allow invalid certificates for resources loaded from localhost.` を `Enabled` にする
- Node のインストール
- Yarn のインストール

### 開発開始

`package.json` に記述されている必要な外部依存をインストールします。

```bash
yarn install
```

ローカルサーバー `https://localhost:8888` が立ち上げ、 [webpack.config.js](webpack.config.js) の `entry` をメモリ上にビルドします。

```bash
yarn start
```

[https://localhost:8888/index.js](https://localhost:8888/index.js) をブラウザ上から見ることができるようになっています。

kintone の `JavaScript / CSSでカスタマイズ` に URL指定で追加します。

### 本番用JavaScriptのビルド

```bash
yarn build
```

### デバッグ方法

最近のブラウザはPCとモバイルの差異が少なくなっており、同じバージョンのブラウザであればPC上で問題ないならモバイル端末上でも問題ないことが多いです。

そのため、開発中はPC上でデバッグすることを基本とし、端末依存の問題が発生した場合や、特別に動作確認しなければいけない場合に、別途デバッグできる環境を用意すると良いでしょう。

また、デバッグには開発用のデバッグと調査用のデバッグでやることが異なります。

#### 開発用のデバッグ

開発用のデバッグの目的は、円滑な開発の支援です。

ローカルサーバーを立ち上げ [HMR](https://webpack.js.org/concepts/hot-module-replacement/) することにより円滑な開発を手助けしてくれるでしょう。

Chrome の [devTools](https://developers.google.com/web/tools/chrome-devtools/?hl=ja) を使って開発を進めます。

モバイルの場合でも、基本的には Chrome の devTools の [Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/?hl=ja) を利用します。

iPhone 向けに開発する場合は、 Safari 上でユーザーエージェントを変更することで、iPhone 向けの開発を進めることができます。

#### 調査用のデバッグ

調査用のデバッグの目的は、問題の原因特定です。そのため、再現できるかが重要となります。

実機があれば一番ですが、ない場合はVMやシミュレータ・エミュレータなどを活用すると良いでしょう。

調査用のデバッグを行う場合は、基本的にはローカルサーバーではなくビルドしたJavaScriptファイルをアップロードした状態か、任意のサーバーにファイルを置いた状態で行うものを想定しています。
ローカルサーバーを見る方法がないわけではありませんが、複雑な設定を行う必要がある場合が多く、疲弊します。
それでもチャレンジしたい場合は、 `localhost 10.0.2.2 <環境>` などで検索するといくつかの情報が得られます。

##### Windows の場合

実機がない場合は、 Microsoft 公式の [VM](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) を利用すると良いでしょう。

##### iOSの場合

Xcode の Simulator を使うと良いでしょう。

Safari と Simulator を起動し、Simulator 上でデバッグしたいWebページを開きます。

PC上の Safari の開発メニューを開くと Simulator で立ち上げた端末情報があり、そこからデバッグできます。

実機がある場合は、実機の Safari の設定でWebインスペクタを有効にし、PCとコネクタで繋げることでPC上の Safari でデバッグ可能となります。

##### Androidの場合

エミュレータを利用するとよいでしょう。エミュレータは複数選択肢がありますが、ここでは [Android Studio](https://developer.android.com/studio/install?hl=ja) を用いたデバッグ方法を紹介します。

[エミュレートしたいデバイスを作成](https://developer.android.com/studio/run/managing-avds?hl=ja)します。

[ここ](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/) を参考に設定を進めます。

基本的には実機でも同じです。USBでPCに繋ぐことでデバッグが可能になります。

### 最後に

おそらくもっといい方法があると思いますので、Issues でダメ出ししていただけると幸いです。

License
------------

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.

serialLEDProgrammer For Web
===================

### 概要

フルカラーシリアルLED（WS2812系）を制御するLED演出コマンドをブラウザ上で作成できます。作成したLED演出をArduino用シールドや、開発したフルカラーLEDコントローラを介して演出することが可能になります。

![Image](https://raw.githubusercontent.com/carcon999/serialLEDProgrammerWeb/master/image/title.jpg)

-[Arduino用評価シールドとは？](http://blogs.yahoo.co.jp/carcon999/37942815.html)　(作者ブログ記事へ)  
-[フルカラーLEDコントローラ](http://blogs.yahoo.co.jp/carcon999/37853893.html)　(作者ブログ記事へ)  
-[Arduinoシールド頒布品（スイッチサイエンスさん）](http://www.switch-science.com/catalog/1739/)  

### 公開

[公開サイトリンク](http://carcon999.web.fc2.com/ledprogrammer/index.html)    
※FC2サイトへジャンプします。

### シミュレーション
![Image](https://raw.githubusercontent.com/carcon999/serialLEDProgrammerWeb/master/image/webmain.png)  

1. 画面上部のTABでLED演出を選択します。（赤枠の[System]～[Loop]）
2. パラメータを変更します。
3. レコードリストのボタンからテーブル操作を選択します。（赤枠内の[挿入] [追加] [上書]等）
4. [演出確認]ボタンで演出確認します。
5. 上記を繰り返し、目的の演出を作ります。

![Image](https://raw.githubusercontent.com/carcon999/serialLEDProgrammerWeb/master/image/sim.png)  

#### Arduino動作確認

1. 先のシミュレーションで演出を作ります。
2. [ソース生成]ボタンでArduino用コードを生成します。
3. 生成したコードを選択しコピーします。
4. Arduino IDEを起動し先のソースをペーストします。
5. Arduino IDEでスケッチ書き込みをします。
6. 成功するとLED演出が確認できます。

![Image](https://raw.githubusercontent.com/carcon999/serialLEDProgrammerWeb/master/image/ring.png)  

### その他

姉妹アプリケーションとして、Windowsアプリケーションがあります。Windowsアプリでは、シリアル通信を利用してダイレクトな演出確認が行えますが、基本的なオペレーションは同等です。詳細については下記を参照してください。

-[Windowsアプリケーション](http://blogs.yahoo.co.jp/carcon999/37808488.html)  

### UIデザインについて

本アプリケーションは、[tgck](https://github.com/tgck)さんのご協力で作成することができました。ありがとうございました。


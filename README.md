# udn-newmedia-css
Udn NewMedia Default CSS

https://udn-newmedia.github.io/udn-newmedia-css/css/style.css

引入 css 後，照定義好的 tag 開發，就有預設的空版頁面

# 聯合報新媒體中心
Long Form 預設版型，預設板型的目的為讓設計有個基礎，諸如字型大小，文章寬度等等，讓設計不是每次從0開始。

## 規格

* PC
文寬 880px
<table>
    <tr>
        <th>大標</th>
        <th>內文標</th>
        <th>內文</th>
        <th>引言</th>
        <th>圖說</th>
        <th>斷行間距</th>
        <th>行高</th>
    </tr>
    <tr>
        <td>55px</td>
        <td>30px</td>
        <td>21px</td>
        <td>32px</td>
        <td>17px</td>
        <td>50px</td>
        <td>1.5</td>
    </tr>
</table>

* PAD
文寬 100% 左右 padding 100px
<table>
    <tr>
        <th>大標</th>
        <th>內文標</th>
        <th>內文</th>
        <th>引言</th>
        <th>圖說</th>
        <th>斷行間距</th>
        <th>行高</th>
    </tr>
    <tr>
        <td>45px</td>
        <td>30px</td>
        <td>20px</td>
        <td>32px</td>
        <td>15px</td>
        <td>36px</td>
        <td>36px</td>
    </tr>
</table>

* Mobile
文寬 100% 左右 padding 20px
<table>
    <tr>
        <th>大標</th>
        <th>內文標</th>
        <th>內文</th>
        <th>引言</th>
        <th>圖說</th>
        <th>斷行間距</th>
        <th>行高</th>
    </tr>
    <tr>
        <td>40px</td>
        <td>26px</td>
        <td>18px</td>
        <td>26px</td>
        <td>15px</td>
        <td>32px</td>
        <td>32px</td>
    </tr>
</table>

* 圖片
預設 PC 16:9 PAD 16:9 Mobile 方型

* 影片
預設 PC 16:9 PAD 16:9 Mobile 方型，PC 滾動自動播放，PAD/Mobile 滾動自動無聲播放，無法自動撥放者，點按播放。

# 預覽
[預覽頁面](https://udn-newmedia.github.io/udn-newmedia-css/)

# 語法範例

*   滿版首圖
```html
<div id="cover">
    <h1>從零到爆品 洞察讀者的探索實驗</h1>
</div>
```

*   內文區塊
content 裡的&lt;br/&gt;要用&lt;p&gt;標籤包起來，這樣才有符合標準的 50px 高之換行。
```html
<div class="content container">
    <h2>【聯合報新媒體研究報告】</h2>
    <p>「誰」讀你寫的文字？</p>
    <p>這問題對內容產製者是陌生的思考情境。</p>
    <p><br/></p>
</div>
```

*   引言
```html
<div class="quote-contain">
    <div class="quote-text">許多孩子告訴我們，他們從來沒有踏進過大學一步。訪問大學生，能拓展他們的認知，也會有一個前進的目標。</div>
    <div class="quote-ref">─ 更生少年關懷協會主任 陳彥君</div>
</div>
```

*   分隔線
```html
<hr>
```

*   輪播圖
範例為三張圖之輪播，如果要新增圖片，li tag 照格式 燃後數字+1
下面整個div class item 整段複製新的再改圖片連結即可
```html
<div id="carousel" class="carousel slide container" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <img src="https://lorempixel.com/640/400">
            <div class="carousel-caption">
                圖片一
            </div>
        </div>
        <div class="item">
            <img src="https://lorempixel.com/640/400">
            <div class="carousel-caption">
                圖片二
            </div>
        </div>
        <div class="item">
            <img src="https://lorempixel.com/640/400">
            <div class="carousel-caption">
                圖片三
            </div>
        </div>
    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>
```

*   圖片嵌入
預設16:9 如為其他SIZE圖片 拿掉 lazy-contain
```html
<div class="img-contain container">
    <div class="lazy-contain">
        <img class="lazyload" data-src="https://udn.com/upf/newmedia/2017_data/20170508_marketing/image/HackNTU2017.011.png">
    </div>
    <div class="img-say">思考與讀者的切身性、關聯性何在，讓他們願意花力氣閱讀文章？</div>
</div>
```

*   youtube 嵌入
```html
<div class="iframe-contain container">
    <div class="embed-responsive embed-responsive-16by9">
        <iframe class="lazyload embed-responsive-item" data-src="https://www.youtube.com/embed/V74AxCqOTvg?rel=0" frameborder="0" allowfullscreen></iframe>
    </div>
</div>
```

*   影片
```html
<div class="video-contain">
    <video preload="metadata" class="rwd-2dv" id="movie-1" src="https://udn.com/upf/newmedia/2017_data/hk_handover_20/video/video1.mp4" playsinline data-target="1"></video>
    <div style="margin-top: -8px;" class="video-control">
        <div class="progress hidden-md hidden-lg">
            <div id="progress-bar-1" class="progress-bar progress-bar-striped"></div>
        </div>
        <div class="img-say-out volume-text hidden-md hidden-lg" data-target="1">點按開聲音</div>
        <i class="fa fa-spinner fa-pulse video-wait" data-target="1"></i>
        <i class="fa fa-play video-play hidden-md hidden-lg" data-target="1"></i>
        <i class="fa fa-volume-off volume hidden-md hidden-lg" data-target="1"></i>
        <i class="fa fa-repeat replay hidden-md hidden-lg" data-target="1"></i>
    </div>
</div>
```

*   製作人區塊
```html
<div class="people-contain container">
    <div class="row">
        <div class="col-md-2">
            <img class="lazyload" data-src="https://udn.com/upf/newmedia/2017_data/20170508_marketing/image/pm.jpg">
        </div>
        <div class="col-md-10">
            <h3><b>新媒體中心／數位內容製作 魏妤庭</b>
            <h3>一手捧書一手握鍋鏟，是個資訊怪，總好奇新技術在資訊傳遞上的應用，想辦法讓報導更貼近讀者的需要。</h3>
        </div>
    </div>
</div>
```

*   分享區塊
```html
<div class="share-block container">
    <div class="fb-like-block">
		<div class="fb-like" data-href="./index.html" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
	</div>
	<div class="line-block">
		<img class="line-share" style="position:relative;" src="//media.line.me/img/button/zh-hant/84x20.png" width="86" height="22" alt="LINE分享給朋友">
	</div>
    <div class="logo-block">
        <div class="udn-logo">
            <img class="lazyload" data-src="https://udn.com/upf/newmedia/image/udn-logo.jpg">
        </div>
        <div class="nmd-logo">
            <img class="lazyload" data-src="https://udn.com/upf/newmedia/image/nmd-logo.png">
        </div>
    </div>
</div>
```

*   製作者區塊
```html
<div class="container" id="editor">
    <div class="editor">文字：魏妤庭</div>
    <div class="editor">2017.05.08</div>
</div>
```

*   延伸閱讀
```html
<div id="report" class="container">
    <div class="row">
        <div class="col-sm-3">
            <a href="http://p.udn.com.tw/upf/newmedia/2017_data/20170303_3dmedia/index.html" target="_blank">
                <img class="lazyload" data-src="https://udn.com/upf/newmedia/2017_data/20170508_marketing/image/3Dmodel.jpg">
                <p>3D模型新聞應用 簡易入門分享</p>
            </a>
        </div>
        <div class="col-sm-3">
            <a href="http://p.udn.com.tw/upf/newmedia/2017_data/20170222_maps/index.html" target="_blank">
                <img class="lazyload" data-src="https://udn.com/upf/newmedia/2017_data/20170508_marketing/image/maps.jpg">
                <p>新聞✖地圖✖資訊 新媒體菜鳥的QGIS心得</p>
            </a>
        </div>
        <div class="col-sm-3">
            <a href="http://p.udn.com.tw/upf/newmedia/2017_data/20170208_vrarmr2/index.html" target="_blank">
                <img class="lazyload" data-src="https://udn.com/upf/newmedia/2017_data/20170508_marketing/image/vr.jpg">
                <p>實境科技發展 給媒體的未來啟示</p>
            </a>
        </div>
        <div class="col-sm-3">
            <a href="https://www.facebook.com/groups/UDNNEWMEDIA/?fref=ts" target="_blank">
                <img class="lazyload" data-src="https://udn.com/upf/newmedia/2017_data/20170508_marketing/image/salon.jpg">
                <p>聯。沙龍</p>
            </a>
        </div>
    </div>
</div>
```

*   FB 留言
```html
<div class="fb-comment-block container">
    <div class="fb-comments" data-href="https://udn.com/upf/newmedia/index.html" data-numposts="5" data-width="100%"></div>
</div>
```

*   Footer
```html
<footer>
    <span class="footer-link footer-right-board"><a href="http://www.udngroup.com/" target="_blank">聯合報系</a></span>
    <span class="footer-link footer-right-board"><a href="https://www.facebook.com/udnplus" target="_blank">粉絲團</a></span>
    <span class="footer-link footer-right-board"><a href="http://udndata.com/udnauthority.html" target="_blank">新聞授權</a></span>
    <span class="footer-link"><a href="http://www.udngroup.com/information/privacy" target="_blank">隱私權聲明</a></span>
</footer>
```

*   進度條
```html
<div id="indicator">
	<div id="indicator-bar"></div>
</div>
```

*   Head Bar
```html
<div id="head">
    <div id="icon">
        <a href="."><img src="https://udn.com/upf/newmedia/image/udn.png"></a>
    </div>
</div>
```
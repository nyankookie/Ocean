# Ocean
全球风场及洋流的流速分布图，模拟了某一时刻风和洋流的运动状态。

# 原理说明
* 新建gh-pages，用一个空白html页面替换原主题页面
* 使用leaflet导入外部地图
* 获得全球风场数据和洋流流速数据，转为json格式 [数据转换](https://github.com/cambecc/grib2json)
* 双线性插值法绘制流速图

# 感谢
[leaflet地图](http://leafletjs.com/)

[leaflet-velocity](https://github.com/danwild/leaflet-velocity)

[windy-js](https://github.com/Esri/wind-js)

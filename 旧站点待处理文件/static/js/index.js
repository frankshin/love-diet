/**
 * @Description: 给婧的早餐和午餐菜单
 * @Author:      xudengwei
 * @DateTime:    2016-06-22 16:22:19
 */

angular.module('jingbreakfast',[])
.controller('blogindex',function($scope){
    var u = navigator.userAgent.toLowerCase();
    var isWx = u.match(/MicroMessenger/i) == "micromessenger";

    $scope.data={
        "morning":[
            {
                "tit":"蛋煎饼+银耳雪梨汤",
                "description":[
                    "银耳雪梨汤可以前一天晚上熬出来，早上热一下，喝起来暖暖的。",
                    "鸡蛋煎饼做起来很简单，将鸡蛋与面粉混合均匀放入葱花和调味料搅拌均匀，放入平底锅摊好，成型后在摊一个鸡蛋在上面。",
                    "可以加入老干妈，或是香肠等卷好，切开摆放于盘中。"
                ],
                "img_url":"//smallpang.oss-cn-shanghai.aliyuncs.com/xudengweiCDN/diet/1.jpg"
            },
            {
                "tit":"茄盒+绿豆粥",
                "description":[
                    "茄盒是我最爱吃的食物之一，自己做就选了最简单的办法做。",
                    "先将肉馅按照自己的口味调好，将茄子切片，将肉馅用茄子包好。",
                    "取适量面粉和鸡蛋加入水搅拌好，包裹在茄盒上。然后就可以用电饼铛煎好。"
                ],
                "img_url":"//smallpang.oss-cn-shanghai.aliyuncs.com/xudengweiCDN/diet/2.jpg"
            },
            {
                "tit":"火腿炒面",
                "description":[
                    "将火腿、胡萝卜、葱花等切好。",
                    "将面煮熟。",
                    "先将配料放入锅中翻炒，加入鸡蛋，之后加入煮好的面条。放入豆豉、酱油、盐等炒好即可。"
                ],
                "img_url":"//smallpang.oss-cn-shanghai.aliyuncs.com/xudengweiCDN/diet/3.jpg"
            },
            {
                "tit":"杂粮粥 + 鸡蛋饼 + 果蔬",
                "description":[
                    "详见图片"
                ],
                "img_url":"//smallpang.oss-cn-shanghai.aliyuncs.com/xudengweiCDN/diet/4.png"
            },
            {
                "tit":"雨后初晴 ",
                "description":[
                    "详见图片"
                ],
                "img_url":"//smallpang.oss-cn-shanghai.aliyuncs.com/xudengweiCDN/diet/5.png"
            }
        ],
        "lunch":[
            {
                "tit":"干煸刀豆土豆 ",
                "description":[
                    "刀豆洗净滤干切成长段，用盐腌一个小时。再用油炸至表面起皱。",
                    "小土豆不去皮，洗净，蒸熟，用刀压成图中的样子",
                    "将小土豆入平锅煎至两面金黄，煎时在两面撒适量盐",
                    "锅中热油，入蒜末、花椒粒、红辣椒炸香。我不太能吃辣，所以辣椒都没有切开，你如果能吃辣的话，尽可以多加些切开的干辣椒，绝对香辣好吃",
                    "下处理好的芸豆和小土豆翻炒两三分钟",
                    "撒上芝麻，加鸡精拌匀，出锅"
                ],
                "img_url":"static/img/709058321881044033.jpg"
            },
            {
                "tit":"红烧鲫鱼（待持续优化） ",
                "description":[
                    "详见<a href='http://www.meishij.net/zuofa/hongshaojiyu_18.html'>第一步demo</a>"
                ],
                "img_url":"static/img/339463579262975286.jpg"
            }
        ]
    }

    $scope.tabshow=true;
    $scope.qiehuan=function(){
        $scope.tabshow=!$scope.tabshow;
    }

})
'use strict';

const choiceFood = require('random-weighted-choice');
const axios = require('axios');
  
const foodList = [
  [{weight: 9, id: '面包'},
  {weight: 1, id: '蛋糕'},
  {weight: 3, id: '荷包蛋'},
  {weight: 9, id: '饽饽'},
  {weight: 1, id: '油条'},
  {weight: 4, id: '馄饨'},
  {weight: 8, id: '面条'},
  {weight: 6, id: '小笼包'},
  {weight: 10, id: '玉米粥'},
  {weight: 10, id: '小米稀饭'},
  {weight: 10, id: '包子'},
  {weight: 10, id: '杂粮煎饼'},
  {weight: 6, id: '煎蛋'},
  {weight: 10, id: '水煎包'},
  {weight: 6, id: '锅贴'},
  {weight: 10, id: '酸奶'},
  {weight: 10, id: '南瓜粥'},
  {weight: 10, id: '玉米糊'},
  {weight: 10, id: '煎饼'},
  {weight: 7, id: '馒头'},
  {weight: 8, id: '燕麦片'},
  {weight: 3, id: '水煮蛋'},
  {weight: 1, id: '米粉'},
  {weight: 9, id: '豆浆'},
  {weight: 9, id: '牛奶'},
  {weight: 5, id: '花卷'},
  {weight: 6, id: '豆腐脑'},
  {weight: 10, id: '小米粥'},
  {weight: 10, id: '黑米粥'},
  {weight: 8, id: '鸡蛋饼'},
  {weight: 7, id: '鸡蛋灌饼'},
  {weight: 1, id: '汉堡包'},
  {weight: 1, id: '披萨'},
  {weight: 1, id: '三明治'},
  {weight: 4, id: '蒸饺'},
  {weight: 10, id: '白粥'},
  {weight: 5, id: '甑糕'},
  {weight: 6, id: '水果沙拉'},
  {weight: 10, id: '粥'},
  {weight: 8, id: '八宝粥'},
    {weight: 10, id: '酱饼'}
  ],
  [
  {weight: 10, id: '盖浇饭'}, 
  {weight: 4, id: '砂锅'}, 
  {weight: 4, id: '麻辣烫'}, 
  {weight: 6, id: '炒面'}, 
  {weight: 5, id: '快餐'}, 
  {weight: 1, id: '泡面'}, 
  {weight: 1, id: '自助餐'}, 
  {weight: 3, id: '川菜'}, 
  {weight: 3, id: '粤菜'}, 
  {weight: 3, id: '湘菜'}, 
  {weight: 6, id: '本帮菜'}, 
  {weight: 7, id: '兰州拉面'}, 
  {weight: 1, id: '沙县小吃'}, 
  {weight: 3, id: '茶餐厅'}, 
  {weight: 5, id: '扬州炒饭'}, 
  {weight: 9, id: '农家菜'}, 
  {weight: 1, id: '馄饨'}, 
  {weight: 1, id: '桂林米粉'},
  {weight: 1, id: '西餐'}, 
  {weight: 1, id: '味千拉面'}, 
  {weight: 9, id: '凉皮'}, 
  {weight: 1, id: '夹馍'}, 
  {weight: 4, id: '米线'}, 
  {weight: 3, id: '酸辣粉'}, 
  {weight: 10, id: '烩麻食'}, 
  {weight: 6, id: '油泼面'}, 
  {weight: 2, id: '过桥米线'}, 
  {weight: 3, id: '剪刀面'}, 
  {weight: 10,id: '刀削面'},
  {weight: 1, id:'冒菜'},
  {weight: 1,id:'火锅'},
  ],[
  {weight:10,id:'自己做'},
  {weight:10,id:'粥'},
  {weight:10,id:'水果'}
  ]
];



module.exports = function(robot) {
  robot.hear(/choiceFood(.*)/, function(res) {
    let president = res.match[1];
    if (!president) {
      president = res.random(['hello world']);
    } else {
      president = res.random(president.split(','));
    }
    res.send(
      `你们选的这个**${president}**啊，excited！`
    );
  });

  robot.hear(/吃/, function(res) {
	  var date=new Date();
	  var h=date.getHours();
	  var arr=[];
		if(parseInt(h)<10){
			res.send(`**早餐：${choiceFood(foodList[0])}**`);
		}else if(parseInt(h)>=10&&parseInt(h)<16){
			res.send(`**午餐：${choiceFood(foodList[1])}**`);
		}else{
			res.send(`**晚餐：${choiceFood(foodList[2])}**`);
		}
  });

  robot.hear(/名单/, function(res) {
    res.send(JSON.stringify(foodList));
  });


}
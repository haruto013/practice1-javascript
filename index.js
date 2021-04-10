// //変数
// let unko = 'こんにちは';

// //  unko = 'こんにちは２';
 
// //定数
// const bigUnko = 'おはようございます';

// //配列
// let inoki = ['いーち','にーい','さーん','ダーー！！'];

//ループ文
//let index = 0;
//while(index < inoki.length){ //=4
//繰り返したい命令
  //console.log(inoki[index]);
  //index++;  //index = 5
//}

 //console.log(index);

 //if /else
// if(inoki.length > 5){
//    console.log('ボンバイエ！');
//  } else {
//    console.log('ボンバ...!');
//  }


 //関数

//  const haruto = (arg) => { //function() =>と同様
//    //ここに実行したい命令を書く
//    if(inoki.length > arg){
//      console.log('ボンバイエ！');
//    } else {
//        console.log('ボンバ...!');
//    }
//  };
//  haruto(3);

// オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};




//ポップアップを呼べるやつ
// window.alert('unko');

//
// console.log(document.getElementsByTagName('button')[0]);



//event ボタン０をクリックすると何か起きる要素
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
//命令を書く
window.alert('Hello World!')
});




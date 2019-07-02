/* 
    es6 暴露成员给其他js文件使用
*/
/* 
    方法 1
*/
export default {
    name:'小明',
    say:function(){
        console.log(this.name + 'hi');
    }
}
var tit = {
    name:'小红',
    say:function(){
        console.log(this.name+ 'hi');
    }
}
/* 
    方法二 
    只能使用 import {t} from './test.js' 来接收
*/
export var t = tit;
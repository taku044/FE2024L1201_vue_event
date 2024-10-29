// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return{
           count: 1
        };
    },
    methods: {
        times(){
            this.count*=2
        },
        half(){
            this.count/=2
        },
        reset(){
            this.count=1
        },
        increment($a){
            this.count+=$a;
        },
        decrement($a){
            this.count-=$a;
        },
    }
});
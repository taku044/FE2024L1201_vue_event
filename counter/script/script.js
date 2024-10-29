// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return{
           count: 1,
           count2
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
        increment(){
            this.count+=this.count2;
        },
        decrement(){
            this.count-=this.count2;
        },
    }
});
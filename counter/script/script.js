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
            this.count*2
        },
        half(){
            this.count/2
        },
        reset(){
            this.count=1
        },
        increment(){
            this.count+a;
        },
        decrement(){
            this.count-a;
        },
    }
});
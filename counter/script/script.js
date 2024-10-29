// JavaScript用ファイル
new Vue({
    el: '#app',
    data() {
        return{
           count: 1
        };
    },
    methods: {
        increment(){
            this.count+a;
        },
        decrement(){
            this.count-a;
        },
        reset(){
            this.count=1
        },
        half(){
            this.count/2
        },
        times(){
            this.count*2
        }
    }
});
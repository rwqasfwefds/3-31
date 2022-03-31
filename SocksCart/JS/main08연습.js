const app = Vue.createApp({
    data(){
        return{
            // cart 변수 추가 : 0
            product : 'Socks',
            image : '../assets/img/green_socks.jpg',
            InStock : false,
            details : ['50% cotton', '30% wool', '20% polyester'],
            variants : [
                {
                    id : 2234, color : 'green'
                },
                {
                    id : 2235, color : 'blue'
                },
            ],
        }
    },
    methods : {
        addToCart(){
            // 카운트 변수 : cart를 1씩 증가시키셈
        }
    }
})
const app = Vue.createApp({
    data(){
        return{
            cart : 0,
            product : 'Socks',
            // 디폴트 양말 이미지 변수
            image : '../assets/img/green_socks.jpg',
            InStock : true,
            details : ['50% cotton', '30% wool', '20% polyester'],
            variants : [
                {
                    id : 2234,
                    color : 'green',
                    image : '../assets/img/green_socks.jpg'
                },
                {
                    id : 2235,
                    color : 'blue',
                    image : '../assets/img/blue_socks.jpg'
                },
            ],
        }
    },
    methods : {
        addToCart(){
            this.cart++
            // this.cart += 1
        },
        updateImage(change){
            this.image = change;
        }
    }
})
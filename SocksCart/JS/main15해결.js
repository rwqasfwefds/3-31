const app = Vue.createApp({
    data(){
        return{
            cart : 0,
            product : 'Socks',
            // 브랜드 추가
            brand : 'Vue Mastery',
            // 객체 배열에서 선택된 인덱스
            selectedVariant : 0,
            onSale : true,
            details : ['50% cotton', '30% wool', '20% polyester'],
            variants : [
                {
                    id : 2234,
                    color : 'green',
                    image : '../assets/img/green_socks.jpg',
                    quantity : 50
                },
                {
                    id : 2235,
                    color : 'blue',
                    image : '../assets/img/blue_socks.jpg',
                    quantity : 0
                },
            ],
        }
    },
    methods : {
        addToCart(){
            this.cart++
            // this.cart += 1
        },
        // deleteToCart(){
        //     if(this.cart > 0){
        //         this.cart--
        //         // this.cart -= 1
        //     }
        // },
        
        // 기본이미지를 펑션으로 변경함으로써 아래 펑션도 수정
        updateImage(index){
            this.selectedVariant = index;
        }
    },
    computed : {
        title(){
            return this.brand + ' ' + this.product
        },
        image(){
            // 기본 이미지(녹색 양말 이미지)
            return this.variants[this.selectedVariant].image
        },
        InStock(){
            return this.variants[this.selectedVariant].quantity
        },
        saleMessage(){
            return this.brand + ' ' + this.product + ' is on sale'
        }
    }
})
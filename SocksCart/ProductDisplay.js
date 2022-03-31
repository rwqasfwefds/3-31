// 전역 컴포넌트
app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            // required = premium이라는 데이터가 필수냐 아니냐를 따지는거임
            required: true,
        },
    },
    template:
    /* html */
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!-- 이미지가 들어갈 공간 -->
                <img v-bind:src="image">
            </div>

            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="onSale">{{saleMessage}}</p>
                <p v-if="InStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    v-on:mouseover="updateImage(index)"
                    class="color-circle"
                    v-bind:style="{'background-color' : variant.color}"
                ></div>
                <!-- 장바구니 버튼 -->
                <button class="button"
                        :class="{disabledButton : !InStock}"
                        :disabled="!InStock"
                        v-on:click="addToCart">
                    Add To Cart
                </button>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            // cart변수 삭제
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
                    image : './assets/img/green_socks.jpg',
                    quantity : 50
                },
                {
                    id : 2235,
                    color : 'blue',
                    image : './assets/img/blue_socks.jpg',
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
    }
});

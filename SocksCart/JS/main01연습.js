// const product = 'Socks'

// 3.x버전 Vue.createApp({}) == 2.x버전의 new Vue({}) 역할을 함 
// el : '#app'이 없음(html파일에서 마운트 해줌)
const app = Vue.createApp({
    data(){
        return{
            product : 'Lamp',
        }
    }
})

// 이렇게 바로 이쪽에서 마운트 쌉 가능
// Vue.createApp({
//     data(){
//         return{
//             product : 'Lamp'
//         }
//     }
// }).mount('#app')

// 이렇게 바로 이쪽에서 마운트 쌉 가능
// app.mount('#app')
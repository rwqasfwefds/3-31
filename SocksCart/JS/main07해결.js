const app = Vue.createApp({
    data(){
        return{
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
            size : ['10', '20']
        }
    }
})
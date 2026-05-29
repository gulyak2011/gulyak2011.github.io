let carrData = [
    {
        name: 'ПС 08 ', 
        country: 'Україна', 
        thickness: '8 мм', 
        color: 'Червоний, синій, зелений', 
        image: 'metalopro5.webp',
        Sharantia:'10 років',
        Vaga:'4 кг м²',
        min:'8°',
        price: 'від 250 грн/м2', 
        
    },
     { name: 'ПС 10', country: 'Україна', thickness: '10 мм', price: 377, color: 'Коричнівий, сірий, чорний, інші', image: 'metalopro.webp' , Sharantia:'10 років',Vaga:'5 кг м²',price: 'від 360 грн/м2',min:'12°', },
    { name: 'ПС 12', country: 'Польща', thickness: '12 мм', price:250 , color: 'Червоний', image: 'metalopro1.webp',Sharantia:'10 років',Vaga:'5 кг м²',price: 'від 220 грн/м2',min:'10°',  },
    { name: 'ПС 15', country: 'Норвегія', thickness: '15 мм', price:330 , color: 'Коричнівий', image: 'metalopro2.webp',Vaga:'4,5 кг м²',Sharantia:'10 років',min:'12°', },
    { name: 'ПС 17', country: 'Словаччина', thickness: '17 мм', price:300 , color: 'коричнівий, червоний, сірий;', image: 'metalopro3.webp' ,Vaga:'4 кг м²',Sharantia:'10 років',min:'12°', },
    { name: 'ПС 20', country: 'Італія', thickness: '20 мм', price:220 , color: 'коричнівий, червоний, сірий;', image: 'metalopro4.webp',min:'13°',Vaga:'3,5 кг м²', Sharantia:'10 років', },   

]

let carrApp = {
    data() {
        return {
            cars: carrData,
            currentCar:carrData[0],
            currentIndex:0,
        }
    },
    methods: {
        showCar(index){
            this.currentCar = carrData[index];
            this.currentIndex = index;
        }
    },
}
Vue.createApp(carrApp).mount('#vue-cont')
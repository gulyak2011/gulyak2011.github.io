let chereputsyaData = [
    {
        name: 'Voestalpine ', 
        country: 'Німечина', 
        thickness: '0.5мм, 1мм ', //товщина
        color: 'Червоний, синій, зелений', 
        image: 'metalochere.jpg',
        Sharantia:'25 років',
        Vaga:'5 кг м²',
        min:'14 °',
        price: 'від 363 грн/м2', 
        about: '',
    },
    { name: 'Модуль-Україна', country: 'Україна', thickness: '0.50мм', price: 377, color: 'Коричнівий, сірий, чорний, інші', image: 'metalochere1.jpg' , Sharantia:'10 років',Vaga:'5 кг м²',price: 'від 363 грн/м2',min:'12 °', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nemo itaque ex ea libero provident nihil laborum at iure. At blanditiis iste quibusdam molestias rem esse excepturi doloremque facere quas?',},
    { name: 'Arvedi ', country: 'Польща', thickness: '4мм, 6мм, 8мм', price:214 , color: 'Чорний', image: 'metalochere2.jpg',Sharantia:'10 років',Vaga:'5 кг м²',price: 'від 229 грн/м2',min:'10 °', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nemo itaque ex ea libero provident nihil laborum at iure. At blanditiis iste quibusdam molestias rem esse excepturi doloremque facere quas?', },
    { name: 'U.S. Steel Košice', country: 'Норвегія', thickness: '4мм, 7мм, 8мм', price:334 , color: 'Коричнівий', image: 'metalochere3.jpg',Vaga:'4,5 кг м²',Sharantia:'10 років',min:'12 °', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nemo itaque ex ea libero provident nihil laborum at iure. At blanditiis iste quibusdam molestias rem esse excepturi doloremque facere quas?', },
    { name: 'ArcelorMittal', country: 'Словаччина', thickness: '4мм, 6мм, 8мм', price:300 , color: 'коричнівий, червоний, сірий;', image: 'metalochere5.jpg' ,Vaga:'4 кг м²',Sharantia:'10 років',min:'12 °', about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nemo itaque ex ea libero provident nihil laborum at iure. At blanditiis iste quibusdam molestias rem esse excepturi doloremque facere quas?',},
    { name: 'ThyssenKrupp', country: 'Італія', thickness: '4мм, 5мм, 8мм', price:254 , color: 'коричнівий, червоний, сірий;', image: 'metalochere6.png',min:'13 °',Vaga:'3,5 кг м²', Sharantia:'10 років',about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nemo itaque ex ea libero provident nihil laborum at iure. At blanditiis iste quibusdam molestias rem esse excepturi doloremque facere quas?', },   

]

let carrApp2 = {
    data() {
        return {
            chers: chereputsyaData,
            currentChers:chereputsyaData[0],
            currentInd:0,
        }
    },
    methods: {
        showChereputsya(index){
            this.currentChers = chereputsyaData[index];
            this.currentInd = index;
        }
    },
}
Vue.createApp(carrApp2).mount('#vue-cont-2')
document.addEventListener('alpine:init' , () => {
    Alpine.data('products', () => ( {
        items: [
            {id: 1, name: 'Robusta Brazil', img: '1.jpg', price: 25000},
            {id: 2, name: 'Arabica Blend', img: '2.jpg', price: 35000},
            {id: 3, name: 'Aceh Gayo', img: '3.jpg', price: 30000},
            {id: 4, name: 'Primo Passo', img: '4.jpg', price: 30000},
            {id: 5, name: 'Sumatra Mandheling', img: '5.jpg', price: 35000},
        ],
    }));
});
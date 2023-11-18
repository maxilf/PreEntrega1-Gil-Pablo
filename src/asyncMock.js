const products = [
    {id:'1', name: 'Avena', price: '1300', category: 'Ceral', stock: '100', img:'https://cutt.ly/rwUf7ttU'},
    {id:'2', name: 'Mani King', price: '1850', category: 'Pasta mani', stock: '90',  img:'https://cutt.ly/ZwUf4vP7'},
    {id:'3', name: 'Arroz Integral', price: '990', category: 'Arroz', stock: '50', img:'https://cutt.ly/HwUf77Dw'},
    {id:'4', name: 'La Tranquilina', price: '1390', category: 'Mermelada', stock: '70', img:'https://lc.cx/hUrrir'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve (products.find(prod => prod.id === productId))
        },500)
    })
}
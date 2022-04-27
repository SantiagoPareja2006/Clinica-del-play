let producto1={
    nombre:"PS3",
    estado:"Usado",
    precio:"500000",
    foto:""
}
let producto2={
    nombre:"PS4",
    estado:"Usado",
    precio:"1000000",
    foto:""
}
let producto3={
    nombre:"PS5",
    estado:"Nuevo",
    precio:"3500000",
    foto:""
}
let producto4={
    nombre:"Control PS3",
    estado:"Usado",
    precio:"50000",
    foto:""
}
let producto5={
    nombre:"Control PS4",
    estado:"Nuevo",
    precio:"120000",
    foto:""
}
let producto6={
    nombre:"Control PS5",
    estado:"Nuevo",
    precio:"450000",
    foto:""
}
let producto7={
    nombre:"Cargador control PS4",
    estado:"Nuevo",
    precio:"45000",
    foto:""
}
let producto8={
    nombre:"Cargador control PS5",
    estado:"Nuevo",
    precio:"130000",
    foto:""
}
let producto9={
    nombre:"Xbox one X",
    estado:"Usado",
    precio:"1000000",
    foto:""
}
let producto10={
    nombre:"Xbox series S",
    estado:"Nuevo",
    precio:"1500000",
    foto:""
}
let producto11={
    nombre:"Xbox series X",
    estado:"Nuevo",
    precio:"3000000",
    foto:""
}
let producto12={
    nombre:"Control xbox one",
    estado:"Usado",
    precio:"240000",
    foto:"",
}
let producto13={
    nombre:"Control xbox series",
    estado:"Nuevo",
    precio:"300000",
    foto:""
}
let producto14={
    nombre:"Nintendo switch",
    estado:"Nuevo",
    precio:"1500000",
    foto:""
}
let producto15={
    nombre:"Control nintendo switch",
    estado:"Nuevo",
    precio:"350000",
    foto:""
}
let producto16={
    nombre:"Funda protectora nintendo switch",
    estado:"Nuevo",
    precio:"45000",
    foto:""
}
let producto17={
    nombre:"13 en 1 nintendo switch",
    estado:"Nuevo",
    precio:"40000",
    foto:""
}
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15,
    producto16,
    producto17,
)
console.log(productos)
productos.forEach(function(producto){
    console.log(producto.nombre)
})
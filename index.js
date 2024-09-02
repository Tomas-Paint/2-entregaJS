const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 300,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 3,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 5,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 7,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 11,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 15,
    nombre: "pizza con Anana",
    precio: 580,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
  {
    id:19,
    nombre:"pizza con salchicha",
    precio: 700,
    ingredientes:[ " Doble muzarella, salchicha en rodaja, oregano"]
  }
];
  


const puntoA = "----------- Id Impares -------------"
console.log(puntoA)
  

  for(i = 0; i < 6; i++){
    console.log(pizzas[i].id)
  }

  const puntoB = "----------- ¿Hay alguna pizza que valga menos de $600? -------------"
  console.log(puntoB)

  

  const ValgaMenos600 = pizzas.filter((pizza) => {
    
    if(pizza.precio <= 600){
      console.log(`Si hay pizzas que valen menos de 600, la pizza ${pizza.nombre}, vale ${pizza.precio}`)
    }
    
   
  })

  const puntoC =  "----------- El nombre de cada pizza con su respectivo precio -------------"
  console.log(puntoC)

  const Mostrar = pizzas.forEach (mostrarpizzas => {
    console.log(`Esta es la ${mostrarpizzas.nombre}, su precio es ${mostrarpizzas.precio}`)

  })

  const puntoD = "----------- Mostrar ingredientes de cada pizza -------------"
  console.log(puntoD)

  const ingredientes = pizzas.forEach(lista => {
    console.log(` ${lista.nombre}: 
      ${lista.ingredientes}`)

  })
  


  
  









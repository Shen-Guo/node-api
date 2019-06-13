const express = require('express');
const app = express();
const cors =require('cors')
const db = {
  boxes: [{
            id : 1,
            imgUrl:"clothes/dress1.jpg",
            title:"Check PInafore Dress",
            originalPrice: 49.95,
            discountedPrice:39.95,
            size: "M"
          },
          {
            id : 2,
            imgUrl:"clothes/dress2.jpg",
            title:"Dream Chaser Button Dress-Rosy",
            originalPrice: 69.95,
            discountedPrice:45.00,
            size: "M"
          },
        {
          id : 3,
          imgUrl:"clothes/dress3.jpg",
          title:"Dream Chaser Button Dress-white",
          originalPrice: 69.95,
          discountedPrice:45.00,
          size: "L"
        },
        {
          id: 4,
          imgUrl:"clothes/dress4.jpg",
          title:"Dream Chaser Button Dress -Black",
          originalPrice: 69.95,
          discountedPrice:45.00,
          size: "L"
        },
        {
          id:5,
          imgUrl:"clothes/dress5.jpg",
          title:"Pleated Skirt Midi Dress",
          originalPrice: 99.95,
          discountedPrice:59.97,
          size: "S"
        },
        {
          id: 6,
          imgUrl:"clothes/dress6.jpg",
          title:"Watercolor Floral Apron Front Dress",
          originalPrice: 89.95,
          discountedPrice: 53.97,
          size: "S"
        }],
  shoppingCartItems: [],
  size: null

}

app.use(cors())


app.get('/api/dresses',(req,res) =>{
  res.json(db)
})

app.listen(process.env.PORT,()=>{
  console.log("listening")
})
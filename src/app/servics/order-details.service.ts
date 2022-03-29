import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://st.depositphotos.com/1014511/2137/i/950/depositphotos_21378811-stock-photo-club-sandwich.jpg"
    },
    {
      id:2,
      foodName:"Chicken Biryani",
      foodDetails:"Mayabazar Special Biryani .",
      foodPrice:270,
      foodImg:"https://st2.depositphotos.com/2461383/6574/i/950/depositphotos_65743529-stock-photo-yummy-chicken-biryani.jpg"
    },
    {
      id:3,
      foodName:"Pizza",
      foodDetails:"All meat Cheesy Pizza.",
      foodPrice:400,
      foodImg:"https://st2.depositphotos.com/5260901/7749/i/950/depositphotos_77490208-stock-photo-delicious-cheese-stringy-slice-lifted.jpg"
    },
    {
      id:4,
      foodName:"Cheese cake",
      foodDetails:"Chandler & Rachel cheese cake.",
      foodPrice:500,
      foodImg:"https://st.depositphotos.com/1005893/2170/i/950/depositphotos_21708029-stock-photo-cheese-cake.jpg"
    },
    {
      id:5,
      foodName:"Noodles",
      foodDetails:"China Japan special Ramen noodles.",
      foodPrice:180,
      foodImg:"https://st2.depositphotos.com/2853475/9861/i/950/depositphotos_98615724-stock-photo-japanese-ramen-bowl.jpg"
    },
    {
      id:6,
      foodName:"Milk shake",
      foodDetails:"Special milk shake.",
      foodPrice:120,
      foodImg:"https://static8.depositphotos.com/1009628/880/i/950/depositphotos_8808878-stock-photo-milkshakes.jpg"
    },

  ]


}

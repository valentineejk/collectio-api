const restaurant=require('./restaurant.json');

export default function handler(req,res) {
    res.send(restaurant)
}
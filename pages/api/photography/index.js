const photography=require('./photography.json');

export default function handler(req,res) {
    res.send(photography)
}
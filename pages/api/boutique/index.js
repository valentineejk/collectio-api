const boutique=require('./boutique.json');

export default function handler(req,res) {
    res.send(boutique)
}
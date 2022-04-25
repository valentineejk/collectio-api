// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const halls=require('./halls.json');

export default function handler(req,res) {
  res.send(halls)
}


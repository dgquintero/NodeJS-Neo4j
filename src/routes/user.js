import { Router } from "express";

const user = Router()

user.get('/', (req,res)=> {
  const result = await user.findAll()
  res.json(result)
})
user.get('/:id', (req,res)=> {
  const result = await user.findById()
  res.json(result)
})
user.post('/', (req,res)=> {
  const result = await user.create(req.body)
  res.json(result)
})
user.put('/:id', (req,res)=> {
  const result = await user.findByIdAndUpdate()
  res.json(result)
})

user.delete('/:id', (req,res)=> {
  const result = await user.findByIdAndDelete()
  res.json(result)
})

export default user

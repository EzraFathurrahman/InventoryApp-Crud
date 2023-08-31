import { PrismaClient } from "@prisma/client"

const prisma =new PrismaClient();


export const getProduct=async(req,res)=>{
    try{
        const response=await prisma.product.findMany();
        res.status(200).json(response)
        console.log("message sent")
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
export const getProductId= async(req,res)=>{
    try{
        const response=await prisma.product.findUnique({
            where:{
                id :parseInt ( req.params?.id)}
        
            });
            res.status(200).json(response)
        }
    catch(err){
        res.status(500).json({msg:err.message})
    }
    
}
export const createProduct=async(req,res)=>{
    const {name,price}=req.body
    try{
        const product= await prisma.product.create({
            data:{
                name:name,
                price:price
            }
        })
        res.status(201).json(product);
    }
    catch(err){
        res.status(400).json({msg:err.message})
    }
}
export const updateProduct= async(req,res)=>{
    const {name,price}=req.body
    try{
        const updatedProduct= await prisma.product.update({
            where:{
                id:parseInt(req.params?.id)
            },
            data:{
                name:name,
                price:price
            }
        })
        res.status(200).json(updatedProduct)
    }catch(e){
        res.status(400).json({msg:e.message})
    }
    
}
export const deleteProduct=async(req,res)=>{
    const {name,price}=req.body
    try{
     const product=await prisma.product.delete({
        where:{
            id:parseInt(req.params?.id)
        },
     })
     res.status(200).json(product)   
    }
    catch(e){
        res.status(400).json({msg:e.message})
    }
}


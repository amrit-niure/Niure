import connectionDB from "@/lib/database";
import { NextResponse } from "next/server";
import Post from '@/modal/blogSchema'
export async function GET(req:Request,{ params }: { params: { postId: string } }){
    try {
        await connectionDB()
        console.log('connection')
        const { postId } = params
        const post = await Post.findById(postId)
        return NextResponse.json({ success:true, post:post}, { status: 200 });
    } catch (error) {
        console.log(error)
    }
}
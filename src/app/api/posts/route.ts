import connectionDB from "@/lib/database";
import { NextResponse } from "next/server";
import Post from '@/modal/blogSchema'
export async function GET(req:Request){
    try {
        await connectionDB()
        const posts = await Post.find({})
        return NextResponse.json({ success:true, posts:posts}, { status: 200 });
    } catch (error) {
        console.log(error)
    }
}
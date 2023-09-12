import connectionDB from "@/lib/database";
import { NextResponse } from "next/server";
import Post from '@/modal/blogSchema'
export const dynamic = "force-dynamic"
export async function GET(req: Request, { params }: { params: { postId: string } }) {
    try {
        await connectionDB()
        const { postId } = params

        if (!postId) {
            return NextResponse.json({ success: false, message: 'postId is required' }, { status: 400 });
        }
        // Find the post by postId
        const individualPost = await Post.findById(postId);

        if (!individualPost) {
            return NextResponse.json({ success: false, message: 'Post not found' }, { status: 400 });
        }

        return NextResponse.json({ success: true, post: individualPost }, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}


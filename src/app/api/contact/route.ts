import connectionDB from "@/lib/database";
import { NextResponse } from "next/server";
import Contact from '@/modal/contactSchema'

export async function POST(req: Request) {
    try {
        // await connectionDB()
        const data = await req.json()
        const contactData = new Contact({
            ...data,
            })
            const result=await  contactData.save();

        return NextResponse.json({ success: true,data : result }, { status: 200 });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}


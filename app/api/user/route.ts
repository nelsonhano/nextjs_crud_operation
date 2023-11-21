import { NextRequest, NextResponse } from "next/server";

import { connectDb } from "@/lib/mongodb";
import Employer from "@/model/AddEmployers";

export async function POST(req: NextRequest, res: NextResponse) {
    const {firname, number, email, status, date} = await req.json();
    
    try {
        await connectDb();
        await Employer.create({firname, number, email, status, date});
    
        console.log("value is",firname);
        console.log("value is",number);
        console.log("value is",email);
        console.log("value is",status);
        console.log("value is",date);
        
        return NextResponse.json({msg: "Hi from user routes.js"}, {status: 201})
    } catch (error) {
        return NextResponse.json({msg: "Error in data creation"})

        console.log("Error In API Routes To Make POST Request To MongoDB Database");
    }
}
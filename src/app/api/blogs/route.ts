import { NextResponse } from "next/server";
import { addPosts, getPosts } from "../../../../lib/data";


// getting all data 
export const GET = async (req: Request, res: Response) => {
  try {
    const posts = getPosts();
    return NextResponse.json({ message: "Okay", posts });
  } catch (err) {
    return NextResponse.json({ message: "error", err });
  }
};


// posting data with date and id
export const POST = async (req: Request, res: Response) => {
  const { title, desc } = await req.json();
  try {
    const post = {title , desc, date : new Date(), id : Date.now().toString()};
    addPosts(post)
    return NextResponse.json({ message: "Okay", post });
  } catch (err) {
    return NextResponse.json({ message: "error", err });
  }
};

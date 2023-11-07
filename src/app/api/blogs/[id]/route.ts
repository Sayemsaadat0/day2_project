import { NextResponse } from "next/server";
import { deletePost, getByID, updatePost } from "../../../../../lib/data";





// getting data by id 
export const GET = async (req: Request, res: Response) => {
  try {
    const id = req.url.split("blogs/")[1];
    const post = getByID(id);
    console.log(id);
    if (!post) {
      return NextResponse.json({ message: "error" });
    } else {
      return NextResponse.json({ message: "ok", post });
    }
  } catch (err) {
    return NextResponse.json({ message: "error", err });
  }
};


// updating data by id
export const PUT = async (req: Request, res: Response) => {
  try {
    const { title, desc } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePost(id, title, desc);
    return NextResponse.json({ message: "ok update" });
  } catch (err) {
    return NextResponse.json({ message: "error", err });
  }
};










export const DELETE = async (req: Request, res: Response) => {
 
  try {
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json({ message: "ok delete" });
  } catch (err) {
    return NextResponse.json({ message: "error", err });
  }
};

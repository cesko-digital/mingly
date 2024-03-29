import { authOptions } from "app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { updateProfileField } from "../profileField";


export async function POST(request: Request): Promise<Response> {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({}, { status: 401 });
  }

  const userId = parseInt(session.user.id);
  const { fieldId, value } = (await request.json()) as any ;

  if (userId === null) {
    return NextResponse.json({}, { status: 404 });
  }
 
  try {
    
    const response = await updateProfileField({
      fieldId: fieldId,
      userId: userId,
      value: value,
    });

    // Change to Czech
    return NextResponse.json({response}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update profile field" }, { status: 500 });
  }
}
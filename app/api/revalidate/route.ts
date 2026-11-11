import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const configured = process.env.REVALIDATE_SECRET;
  const provided = request.headers.get("x-revalidate-secret");
  if (!configured || provided !== configured) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true });
}

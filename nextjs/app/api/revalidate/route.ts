import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * Webhook endpoint for ISR on-demand revalidation.
 * POST /api/revalidate with { secret, slug? }
 * 
 * Set the REVALIDATE_SECRET environment variable to a long random string.
 * 
 * Usage:
 *   curl -X POST http://your-domain.com/api/revalidate \
 *     -H "Content-Type: application/json" \
 *     -d '{"secret": "YOUR_SECRET"}'
 */
export async function POST(req: Request) {
  try {
    const { secret } = await req.json();

    if (!process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { success: false, message: "REVALIDATE_SECRET environment variable is not set." },
        { status: 500 }
      );
    }

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { success: false, message: "Invalid secret." },
        { status: 401 }
      );
    }

    // Revalidate all key paths
    revalidatePath("/");
    revalidatePath("/menu/[id]", "page");
    revalidatePath("/faq");
    revalidatePath("/privacy");

    return NextResponse.json({ success: true, revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

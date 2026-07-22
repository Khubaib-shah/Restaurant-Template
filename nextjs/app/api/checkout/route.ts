import { NextResponse } from "next/server";
import { z } from "zod";

const checkoutSchema = z.object({
  fullName: z.string().min(2).max(100),
  mobileNumber: z.string().min(10).max(15),
  altMobileNumber: z.string().max(15).optional().or(z.literal("")),
  deliveryAddress: z.string().min(5).max(300),
  nearestLandmark: z.string().max(200).optional().or(z.literal("")),
  emailAddress: z.string().email().optional().or(z.literal("")),
  deliveryInstructions: z.string().max(500).optional().or(z.literal("")),
  paymentMethod: z.string(),
  changeRequest: z.string().optional().or(z.literal("")),
  items: z.array(z.any()), // Assuming cart state items are passed
});

// Basic server-side sanitization function
const sanitizeHTML = (text: string | undefined): string | undefined => {
  if (!text) return text;
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Zod Validation
    const parsedData = checkoutSchema.parse(body);

    // 2. Server-Side Sanitization of free-text fields
    const sanitizedData = {
      ...parsedData,
      fullName: sanitizeHTML(parsedData.fullName),
      deliveryAddress: sanitizeHTML(parsedData.deliveryAddress),
      nearestLandmark: sanitizeHTML(parsedData.nearestLandmark),
      deliveryInstructions: sanitizeHTML(parsedData.deliveryInstructions),
      changeRequest: sanitizeHTML(parsedData.changeRequest),
    };

    // Simulated processing...
    const generatedId = `GK-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({ success: true, orderId: generatedId, data: sanitizedData });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

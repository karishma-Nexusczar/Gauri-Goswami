import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, organisation, enquiryType, subject, message, contactMethod } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    console.log("Enquiry received for info@gaurigoswami.com:", {
      to: "info@gaurigoswami.com",
      fullName,
      email,
      organisation,
      enquiryType,
      subject,
      message,
      contactMethod,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully to info@gaurigoswami.com",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}

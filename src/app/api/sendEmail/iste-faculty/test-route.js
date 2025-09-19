export async function GET() {
  return Response.json({ message: "ISTE Faculty API route is working!", success: true });
}

export async function POST(req) {
  try {
    console.log("ISTE Faculty API route hit");
    const formData = await req.formData();
    
    console.log("FormData entries:");
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${typeof value === 'object' ? value.name : value}`);
    }

    // Extract form data
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const institution = formData.get("institution");
    const designation = formData.get("designation");
    const department = formData.get("department");
    const qualification = formData.get("qualification");
    const experience = formData.get("experience");
    const researchArea = formData.get("researchArea");
    const isteMembership = formData.get("isteMembership");
    const paperPresentation = formData.get("paperPresentation");
    const paperTitle = formData.get("paperTitle");
    const accommodationRequired = formData.get("accommodationRequired");
    const dietaryPreferences = formData.get("dietaryPreferences");
    const emergencyContact = formData.get("emergencyContact");
    const emergencyPhone = formData.get("emergencyPhone");
    const photograph = formData.get("photograph");
    const idProof = formData.get("idProof");

    // Validate required fields
    if (!fullName || !email || !phone || !institution || !designation) {
      console.log("Validation failed - missing required fields");
      return Response.json({ 
        message: "Missing required fields", 
        success: false 
      }, { status: 400 });
    }

    console.log("All required fields present, proceeding with email...");

    // For testing, just return success without sending email
    return Response.json({ 
      message: "Registration submitted successfully! (Test mode - no email sent)",
      success: true 
    });

  } catch (error) {
    console.error("Failed to process registration:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack
    });
    return Response.json({ 
      message: "Failed to submit registration. Please try again.", 
      success: false,
      error: error.message 
    }, { status: 500 });
  }
}
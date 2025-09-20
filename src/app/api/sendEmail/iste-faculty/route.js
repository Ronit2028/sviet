import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("ISTE Faculty API route accessed");
    const formData = await req.formData();

    // Log all received data
    console.log("Received form data:");
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
    const salientAchievements = formData.get("salientAchievements");
    const isteMembership = formData.get("isteMembership");
    const photograph = formData.get("photograph");
    const idProof = formData.get("idProof");

    // Validate required fields
    if (!fullName || !email || !phone || !institution || !designation || 
        !department || !qualification || !experience || !salientAchievements ||
        !photograph || !idProof) {
      console.log("Validation failed - missing required fields");
      const missingFields = [];
      if (!fullName) missingFields.push("Full Name");
      if (!email) missingFields.push("Email");
      if (!phone) missingFields.push("Phone");
      if (!institution) missingFields.push("Institution");
      if (!designation) missingFields.push("Designation");
      if (!department) missingFields.push("Department");
      if (!qualification) missingFields.push("Qualification");
      if (!experience) missingFields.push("Experience");
      if (!salientAchievements) missingFields.push("Salient Achievements");
      if (!photograph) missingFields.push("Photograph");
      if (!idProof) missingFields.push("ID Proof");
      
      return Response.json({ 
        message: `Missing required fields: ${missingFields.join(", ")}`, 
        success: false 
      }, { status: 400 });
    }

    console.log("Validation passed, preparing email...");

    let attachments = [];

    // Handle photograph upload
    if (photograph && typeof photograph === "object") {
      const buffer = Buffer.from(await photograph.arrayBuffer());
      attachments.push({
        filename: `photograph_${fullName}_${photograph.name}`,
        content: buffer,
      });
    }

    // Handle ID proof upload
    if (idProof && typeof idProof === "object") {
      const buffer = Buffer.from(await idProof.arrayBuffer());
      attachments.push({
        filename: `id_proof_${fullName}_${idProof.name}`,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "biharadmissions@sviet.ac.in",
        pass: "pvhk akwz trww emyo", // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"ISTE Faculty Convention Registration" ${email}`,
      to: "guptaniraj915@gmail.com",
      subject: `ISTE Faculty Convention Registration - ${fullName} (${institution})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1B9B7C; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">ISTE Faculty Convention Registration</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">Education-Industry Leaders Summit 2025</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">October 11, 2025 | SVIET, Chandigarh</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #1B9B7C; margin-bottom: 20px; font-size: 20px;">Faculty Registration Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone Number:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Institution:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${institution}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Designation:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${designation}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Department:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${department || 'Not provided'}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Highest Qualification:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${qualification || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Years of Experience:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${experience}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Salient Achievement (2024-25):</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${salientAchievements}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">ISTE Membership No.:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${isteMembership || 'Not provided'}</td>
              </tr>
            </table>

            <div style="background-color: #1B9B7C; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; font-size: 18px;">📎 Attachments Information</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Photograph: ${photograph ? '✅ Attached' : '❌ Not provided'}</li>
                <li>ID Proof: ${idProof ? '✅ Attached' : '❌ Not provided'}</li>
              </ul>
            </div>

            <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                <strong>Registration Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">
                <strong>Event:</strong> ISTE Faculty Convention & Education-Industry Leaders Summit 2025
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated email from ISTE Faculty Convention Registration System</p>
            <p>Swami Vivekanand Group of Institutes | www.sviet.ac.in</p>
          </div>
        </div>
      `,
      attachments,
    };

    // Send confirmation email to faculty
    const facultyMailOptions = {
      from: `"ISTE Faculty Convention" <biharadmissions@sviet.ac.in>`,
      to: email,
      subject: "Registration Confirmation - ISTE Faculty Convention 2025",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #1B9B7C; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎓 Registration Confirmed!</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">ISTE Faculty Convention 2025</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1B9B7C; margin-bottom: 20px;">Dear ${fullName},</h2>
            
            <p style="line-height: 1.6; color: #333;">
              Thank you for registering for the <strong>ISTE Faculty Convention & Education-Industry Leaders Summit 2025</strong>. Your registration has been successfully received.
            </p>
            
            <div style="background-color: #1B9B7C; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="margin: 0 0 10px 0;">📅 Event Details</h3>
              <p style="margin: 0; font-size: 18px;"><strong>Date:</strong> October 11, 2025</p>
              <p style="margin: 5px 0 0 0; font-size: 16px;"><strong>Venue:</strong> SVIET, Chandigarh</p>
            </div>

            <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0; color: #1B9B7C;">Your Registration Details:</h4>
              <p style="margin: 5px 0;"><strong>Institution:</strong> ${institution}</p>
              <p style="margin: 5px 0;"><strong>Designation:</strong> ${designation}</p>
              <p style="margin: 5px 0;"><strong>Salient Achievement:</strong> ${salientAchievements}</p>
            </div>

            <p style="line-height: 1.6; color: #333;">
              You will receive further details about the convention schedule, venue directions, and other important information via email shortly.
            </p>

            <p style="line-height: 1.6; color: #333;">
              For any queries, please contact us at <a href="mailto:hodcivil@sviet.ac.in" style="color: #1B9B7C;">hodcivil@sviet.ac.in</a>
            </p>

            <div style="border-top: 2px solid #1B9B7C; padding-top: 15px; margin-top: 25px; text-align: center;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                Swami Vivekanand Group of Institutes<br>
                www.sviet.ac.in
              </p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    console.log("Attempting to send admin email...");
    await transporter.sendMail(mailOptions);
    console.log("Admin email sent successfully");
    
    console.log("Attempting to send faculty confirmation email...");
    await transporter.sendMail(facultyMailOptions);
    console.log("Faculty confirmation email sent successfully");

    return Response.json({ 
      message: "Registration submitted successfully! Confirmation email sent.",
      success: true 
    });
    
  } catch (error) {
    console.error("Failed to send email:", error);
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
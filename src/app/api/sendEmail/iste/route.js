import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const email = formData.get("email");
    const fullName = formData.get("fullName");
    const fatherName = formData.get("fatherName");
    const gender = formData.get("gender");
    const course = formData.get("course");
    const phoneNumber = formData.get("phoneNumber");
    const collegeName = formData.get("collegeName");
    const passoutBatch = formData.get("passoutBatch");
    const rollNumber = formData.get("rollNumber");
    const currentJobProfile = formData.get("currentJobProfile");
    const companyName = formData.get("companyName");
    const designation = formData.get("designation");
    const photograph = formData.get("photograph");
    const degreeFile = formData.get("degreeFile");
    const consentForComing = formData.get("consentForComing");
    let attachments = [];

    // Handle photograph upload
    if (photograph && typeof photograph === "object") {
      const buffer = Buffer.from(await photograph.arrayBuffer());
      attachments.push({
        filename: `photograph_${fullName}_${photograph.name}`,
        content: buffer,
      });
    }

    // Handle degree file upload
    if (degreeFile && typeof degreeFile === "object") {
      const buffer = Buffer.from(await degreeFile.arrayBuffer());
      attachments.push({
        filename: `degree_${fullName}_${degreeFile.name}`,
        content: buffer,
      });
    }

    // Handle payment proof upload
    // if (paymentProof && typeof paymentProof === "object") {
    //   const buffer = Buffer.from(await paymentProof.arrayBuffer());
    //   attachments.push({
    //     filename: `payment_proof_${fullName}_${paymentProof.name}`,
    //     content: buffer,
    //   });
    // }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "biharadmissions@sviet.ac.in",
        pass: "pvhk akwz trww emyo", // Gmail App Password
      },
    });

    const mailOptions = {
      from: `"Convocation Registration" ${email}`,
      to: "hodcivil@sviet.ac.in",
      subject: `15th Convocation Registration - ${fullName} (${rollNumber})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #00112d; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">15th Convocation Registration</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">Swami Vivekanand Group of Institutes</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #fea700; margin-bottom: 20px; font-size: 20px;">Student Registration Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Father's Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${fatherName}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone Number:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${phoneNumber}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Gender:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${gender}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Course:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${course}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">College Name:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${collegeName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Passout Batch:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${passoutBatch}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Roll Number:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${rollNumber}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Current Job Profile:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${currentJobProfile}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Company/University:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${companyName || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Designation:</td>
                <td style="padding: 12px; border: 1px solid #ddd;">${designation || 'Not provided'}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Consent for Attending:</td>
                <td style="padding: 12px; border: 1px solid #ddd; color: ${consentForComing === 'yes' ? '#28a745' : '#dc3545'}; font-weight: bold;">
                  ${consentForComing === 'yes' ? 'YES - Will Attend' : 'NO - Cannot Attend'}
                </td>
              </tr>
            </table>

            <div style="background-color: #fea700; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; font-size: 18px;">📎 Attachments Information</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Passport Size Photograph: ${photograph ? '✅ Attached' : '❌ Not provided'}</li>
                <li>Degree Certificate: ${degreeFile ? '✅ Attached' : '❌ Not provided'}</li>
              </ul>
            </div>

            <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                <strong>Registration Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
              </p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">
                <strong>Event:</strong> 15th Convocation Ceremony - 20th September 2025
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>This is an automated email from SVGOI Convocation Registration System</p>
            <p>Swami Vivekanand Group of Institutes | www.sviet.ac.in</p>
          </div>
        </div>
      `,
      attachments,
    };

    // Send confirmation email to student
    const studentMailOptions = {
      from: `"SVGOI Convocation" <biharadmissions@sviet.ac.in>`,
      to: email,
      subject: "Registration Confirmation - 15th Convocation Ceremony",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #00112d; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎓 Registration Confirmed!</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">15th Convocation Ceremony</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #fea700; margin-bottom: 20px;">Dear ${fullName},</h2>
            
            <p style="line-height: 1.6; color: #333;">
              Congratulations! Your registration for the <strong>15th Convocation Ceremony</strong> has been successfully received.
            </p>
            
            <div style="background-color: #fea700; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="margin: 0 0 10px 0;">📅 Event Details</h3>
              <p style="margin: 0; font-size: 18px;"><strong>Date:</strong> 20th September 2025</p>
              <p style="margin: 5px 0 0 0; font-size: 16px;"><strong>Venue:</strong> SVGOI Auditorium, Banur</p>
            </div>

            <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0; color: #00112d;">Your Registration Details:</h4>
              <p style="margin: 5px 0;"><strong>Roll Number:</strong> ${rollNumber}</p>
              <p style="margin: 5px 0;"><strong>Course:</strong> ${course}</p>
              <p style="margin: 5px 0;"><strong>College:</strong> ${collegeName}</p>
              <p style="margin: 5px 0;"><strong>Batch:</strong> ${passoutBatch}</p>
              <p style="margin: 5px 0;"><strong>Attendance:</strong> ${consentForComing === 'yes' ? 'Will Attend ✅' : 'Cannot Attend ❌'}</p>
            </div>

            <p style="line-height: 1.6; color: #333;">
              You will receive further details about the ceremony schedule, dress code, and other important information via email shortly.
            </p>

            <p style="line-height: 1.6; color: #333;">
              For any queries, please contact us at <a href="mailto:hodcivil@sviet.ac.in" style="color: #fea700;">hodcivil@sviet.ac.in</a>
            </p>

            <div style="border-top: 2px solid #fea700; padding-top: 15px; margin-top: 25px; text-align: center;">
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
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(studentMailOptions);

    return Response.json({ 
      message: "Registration submitted successfully! Confirmation email sent.",
      success: true 
    });
    
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json({ 
      message: "Failed to submit registration. Please try again.", 
      success: false,
      error: error.message 
    }, { status: 500 });
  }
}

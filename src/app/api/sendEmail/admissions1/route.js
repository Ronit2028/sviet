import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const otp = formData.get("otp");
    const state = formData.get("state");
    const city = formData.get("city");
    const program = formData.get("program");
    const message = formData.get("message");
    const file = formData.get("file");

    let attachments = [];

    if (file && typeof file === "object") {
      const buffer = Buffer.from(await file.arrayBuffer());

      attachments.push({
        filename: file.name,
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
      from: `"Admission Portal" <${email}>`,
      to: "new_admissions@sviet.ac.in",
      subject: "New Admission Enquiry Submission",
      html: `
        <h2>Admission Enquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Program:</strong> ${program}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json({ message: "Failed to send email." }, { status: 500 });
  }
}

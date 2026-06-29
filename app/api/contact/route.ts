import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	const { nom, email, message } = await req.json();

	try {
		await resend.emails.send({
			from: "Site internet <onboarding@resend.dev>", // change après vérification domaine
			to: "titouan.hellegouarch2@gmail.com",
			subject: `Nouveau message de ${nom}`,
			html: `
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error: "Erreur envoi" }, { status: 500 });
	}
}

import { EmailTemplate } from '../../../components/component/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { name, subject, email, message } = await req.json();

    try {
        const data = await resend.emails.send({
            from: 'Portfolio <rayden@resend.dev>', // your verified domain
            to: `${email}`, // the email address you want to send a message
            subject: `${subject} `,
            react: EmailTemplate({ name, email, subject, message }),
            text: message
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
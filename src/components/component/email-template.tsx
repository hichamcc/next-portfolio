import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name, email, subject, message
}) => (
    <div>
        <p>Client :  {name}!</p>
        <p>email :  {email}!</p>
        <p>message :  {message}!</p>

    </div>
);
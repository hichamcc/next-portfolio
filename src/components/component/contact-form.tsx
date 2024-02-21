
import { useState, FormEvent } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Loading from '../component/loading'
import { useToast } from "@/components/ui/use-toast"


export function ContactForm() {
  const { toast } = useToast()


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    console.log(JSON.stringify(formData))
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
        setSending(false);
        toast({
          title: "Your message has been sent.",
          description: "I'll reach out to you ASAP!",

        })

      } else {
        console.error('Failed to send email');
        setSending(false);
        toast({
          title: "YUh oh! Something went wrong.",
          description: "ther was a problem with your request , try again!",

        })

      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSending(false);
      alert('Error sending email!');

    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className={`${sending ? 'hidden' : ''}`}>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 ">
              <Label htmlFor="name"></Label>
              <Input className="text-lg" onChange={handleChange} id="name" placeholder="Name" />
            </div>
            <div className="space-y-4 ">
              <Label htmlFor="email"></Label>
              <Input className="text-lg" onChange={handleChange} id="email" placeholder="Email" type="email" />
            </div>
          </div>
          <div className="space-y-4">
            <Label htmlFor="subject"></Label>
            <Input className="text-lg" onChange={handleChange} id="subject" placeholder="Subject" />
          </div>
          <div className="space-y-4">
            <Label htmlFor="message"></Label>
            <Textarea className="min-h-[100px] text-lg " onChange={handleChange} id="message" placeholder="Enter your message" />
          </div>
          <Button className="text-lg bg-customBlue hover:border-customBlue hover:border-2 rounded-xl mt-4">Send </Button>
        </div>
      </div>
      <div className={`${sending ? '' : 'hidden'}`}>
        <Loading text={"sending..."} />
      </div>

    </form>

  )
}

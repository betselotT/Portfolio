import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function ContactCard() {
  const [state, handleSubmit] = useForm("xyzwydnv");

  if (state.succeeded) {
    return (
      <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800 shadow-[0_0_15px_rgba(30,64,175,0.3)]">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Thank You!</h3>
          <p className="text-blue-200">Your message has been sent successfully.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-blue-900/30 backdrop-blur-sm border-blue-800 shadow-[0_0_15px_rgba(30,64,175,0.3)]">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-blue-200 block mb-2">
              Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="bg-blue-950/50 border-blue-800 text-blue-100 placeholder:text-blue-400/50 focus-visible:ring-cyan-500"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="email" className="text-blue-200 block mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="bg-blue-950/50 border-blue-800 text-blue-100 placeholder:text-blue-400/50 focus-visible:ring-cyan-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="message" className="text-blue-200 block mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className="bg-blue-950/50 border-blue-800 text-blue-100 placeholder:text-blue-400/50 focus-visible:ring-cyan-500"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]"
          >
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

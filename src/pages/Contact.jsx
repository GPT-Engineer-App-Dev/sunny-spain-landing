import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="p-4">
      <h2 className="text-3xl mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input id="name" type="text" className="mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input id="email" type="email" className="mt-1 block w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <Textarea id="message" className="mt-1 block w-full" rows="4" />
        </div>
        <Button type="submit" variant="primary">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;
import { Mail, MapPin, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-muted-foreground">Home &gt; Contact</p>
      </header>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/3 space-y-8">
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-lg font-bold">Address</h2>
              <p>295 5th St Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-lg font-bold">Phone</h2>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-lg font-bold">Working Time</h2>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </aside>
        <main className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-center">Get In Touch With Us</h2>
          <p className="text-muted-foreground mb-8">
            For more information about our products & services, please feel free to drop us an email. Our staff always be there to help you out. Do not hesitate!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <Input id="name" placeholder="Abc" className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input id="email" type="email" placeholder="Abc@d.com" className="mt-1" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <Input id="subject" placeholder="This is an optional" className="mt-1" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea id="message" placeholder="Hi! I'd like to ask about" className="mt-1" />
            </div>
            <Button type="submit" className="w-full bg-primary text-white">
              Submit
            </Button>
          </form>
        </main>
      </div>
    </div>
  )
}

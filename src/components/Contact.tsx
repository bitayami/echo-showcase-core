import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 2. Prepare the parameters for your EmailJS template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // 3. Send the email
    emailjs
      .send(
        "service_52ue1o7",
        "template_h4d9k56",
        templateParams,
        "u17gbYKJh81y9_X2y"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast({
            title: "Message Sent!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in slide-in-left">
            <Card className="card-glow border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <CardContent className="space-y-6 p-0">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out through any of these channels. I'm
                    always open to discussing new projects and opportunities.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:nkyamini@gmail.com"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">nkyamini@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:9840147578"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">9840147578</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yamini-k-4567a724"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">Yamini K</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/bitayami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium">@bitayami</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in slide-in-right">
            <Card className="card-glow border-border/50 bg-card/50 backdrop-blur-sm p-6">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-primary min-h-[150px]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 glow-border"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

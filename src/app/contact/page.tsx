"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Informasi Kontak
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <span>info@wrapist.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary" />
              <span>Jl. Padjajaran No. 123, Jakarta</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Kirim Pesan</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input
                placeholder="Your Name"
                className="bg-background border-border"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background border-border"
              />
              <Textarea
                placeholder="Your Message"
                className="bg-background border-border min-h-[120px]"
              />
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

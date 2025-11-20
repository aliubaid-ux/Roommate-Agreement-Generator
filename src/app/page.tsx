
import AgreementForm from "@/components/agreement-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
                  Roommate Agreements That Matter, Crafted By People Who've Been There.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Since 2024, building tools to prevent roommate drama. We fuse real-world experience with simple technology to create harmony in shared living spaces.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg bg-secondary/50 p-6 md:p-8">
                  <h3 className="text-2xl font-bold">Avoid Common Conflicts</h3>
                  <p className="text-muted-foreground">Our tool helps you proactively address the most common sources of roommate friction:</p>
                  <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Unpaid Rent & Utilities</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Cleaning Disputes</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Guest & Party Policies</li>
                      <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> Security Deposit Issues</li>
                  </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <AgreementForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


import AgreementForm from "@/components/agreement-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground/90">
                Prevent Roommate Drama — Make Expectations Clear
              </h1>
              <p className="text-primary-foreground/80 md:text-xl">
                Our free Roommate Agreement generator helps you create a solid contract to split rent, bills, and chores. Agree on the rules now to avoid fights later. No sign-up required.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <AgreementForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

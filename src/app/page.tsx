
import AgreementForm from "@/components/agreement-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Create a Solid Roommate Agreement, Avoid Conflict
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Use our free Roommate Agreement generator to set clear expectations on rent, bills, and chores. A clear contract prevents future problems. No sign-up required.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <AgreementForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

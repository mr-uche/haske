import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-brand-600 px-8 py-14 text-center shadow-soft sm:px-16 lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to modernize your health infrastructure?
            </h2>
            <p className="mt-3 max-w-xl text-brand-50/90">
              Talk to our team about deploying Haske Lafiya at your facility
              or across your health network.
            </p>
          </div>
          <a
            href="#footer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-soft transition hover:bg-brand-50"
          >
            Talk to sales <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

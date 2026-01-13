import { business } from "../data/business";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <div className="text-sm font-extrabold text-zinc-900">
              {business.name}
            </div>
            <div className="text-sm text-zinc-600">
              Premium mobile car detailing in {business.city}. Serving within{" "}
              {business.serviceRadiusMiles} miles.
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-extrabold text-zinc-900">
              Quick Links
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a className="text-zinc-700 hover:text-zinc-900" href="#services">
                Services
              </a>
              <a className="text-zinc-700 hover:text-zinc-900" href="#reviews">
                Reviews
              </a>
              <a className="text-zinc-700 hover:text-zinc-900" href="#quote">
                Get a Quote
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-extrabold text-zinc-900">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-zinc-700">
              <a
                className="hover:text-zinc-900"
                href={`tel:${business.phoneTel}`}
              >
                {business.phoneDisplay}
              </a>
              <a
                className="hover:text-zinc-900"
                href={`https://wa.me/${
                  business.whatsappNumber
                }?text=${encodeURIComponent(
                  `Hi ${business.name}! I'd like to book a mobile detailing service in ${business.city}.`
                )}`}
              >
                WhatsApp booking
              </a>
              <span className="text-zinc-500">
                Mobile service • {business.city}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-extrabold text-zinc-900">
              Demo Note
            </div>
            <div className="text-sm text-zinc-600">
              This is a conversion-focused demo used for Google Maps outreach
              and can be customized per client.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
          <div>
            Developed by{" "}
            <span className="font-semibold text-zinc-700">
              M.d.mohibbullah brm
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

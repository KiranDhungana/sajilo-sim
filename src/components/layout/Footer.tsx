import Link from "next/link";

function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2563eb]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="2" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </div>
      <span className="text-xl font-semibold text-gray-900">Sajilo Sim</span>
    </Link>
  );
}

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold text-gray-900">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const quickLinks = [
  { label: "Blog", href: "#" },
  { label: "Guides", href: "#" },
  { label: "About", href: "#" },
  { label: "eSIM Support", href: "#" },
  { label: "Terms & conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Delivery, refunds policy", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Affiliate", href: "#" },
  { label: "Destinations", href: "#" },
];

const partnerLinks = [
  { label: "Sajilo Sim for Resellers", href: "#" },
  { label: "Sajilo Sim for Businesses", href: "#" },
  { label: "Sajilo Sim for Affiliates", href: "#" },
];

const regionLinks = [
  { label: "eSIM for Europe", href: "#" },
  { label: "eSIM for Asia", href: "#" },
  { label: "eSIM for Americas", href: "#" },
  { label: "eSIM for Middle East", href: "#" },
  { label: "eSIM for Oceania", href: "#" },
  { label: "eSIM for Africa", href: "#" },
];

const countryLinks = [
  { label: "eSIM for USA", href: "#" },
  { label: "eSIM for Japan", href: "#" },
  { label: "eSIM for Canada", href: "#" },
  { label: "eSIM for Spain", href: "#" },
  { label: "eSIM for Italy", href: "#" },
  { label: "eSIM for UK", href: "#" },
  { label: "eSIM for UAE", href: "#" },
  { label: "eSIM for Singapore", href: "#" },
  { label: "eSIM for Turkey", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1fr_auto_auto_auto_auto]">
          {/* Brand & contact */}
          <div className="max-w-sm sm:col-span-2 md:col-span-3 lg:col-span-1">
            <FooterLogo />
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Sajilo Sim is a digital channel for telecom services, enabling
              consumers to find and buy the best eSIM offers in the world.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              14th floor, Al Sarab Tower, Abu Dhabi Global Market Square, Al
              Maryah Island, Abu Dhabi, United Arab Emirates.
            </p>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-[#38bdf8] bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                aria-haspopup="listbox"
                aria-expanded="false"
              >
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                English
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <FooterLinkColumn title="Quick Links" links={quickLinks} />
          <FooterLinkColumn title="Become a Partner" links={partnerLinks} />
          <FooterLinkColumn title="Regions" links={regionLinks} />
          <FooterLinkColumn title="Countries" links={countryLinks} />
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600">
            © 2026 SAJILO SIM LTD
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

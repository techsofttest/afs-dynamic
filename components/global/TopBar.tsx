import React from "react";
import { getContact } from "@/lib/contact";

export async function TopBar() {
  const contact = await getContact();

  // Convert phone number to a tel-friendly value
  const phoneHref = contact.phone
    ? `tel:${contact.phone.replace(/\s+/g, "")}`
    : "#";

  // Convert email to a mailto link
  const emailHref = contact.email ? `mailto:${contact.email}` : "#";

  return (
    <div className="bg-[#052636] text-white/90 text-[0.82rem] py-2">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-6">
            {/* Phone */}
            <a
              href={phoneHref}
              className="text-white/90 inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[#d98819]"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8A16 16 0 0 0 15.2 16.09l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>

              {contact.phone || "—"}
            </a>

            {/* Email */}
            <a
              href={emailHref}
              className="text-white/90 inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[#d98819]"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>

              {contact.email || "—"}
            </a>
          </div>

          {/* Opening Hours */}
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-white/90 inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[#d98819]"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>

              {contact.opening_hours || "—"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

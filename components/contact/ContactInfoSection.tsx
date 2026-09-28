import React from "react";
import type { ContactData } from "@/lib/contact";

interface ContactInfoSectionProps {
  contact?: ContactData | null;
}

export function ContactInfoSection({ contact }: ContactInfoSectionProps) {
  return (
    <section className="py-[90px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 min-[993px]:grid-cols-2 gap-[60px] items-stretch">
          {/* Image Column */}
          <div className="relative rounded-[24px] overflow-hidden border border-[#e2e8f0] h-[360px] min-[993px]:h-full fade-in">
            <img
              src="/assets/images/home-page/h1.png"
              alt="Arpan Fin Serve Office Advisory"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#052636]/85 via-[#052636]/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <div className="text-[0.82rem] font-bold tracking-widest text-white uppercase mb-1">
                Trusted Financial Partners
              </div>

              <div className="font-serif text-[1.45rem] font-bold">
                Expert Counselling &amp; Dedicated Support
              </div>
            </div>
          </div>

          {/* Details Cards Column */}
          <div className="grid grid-cols-1 min-[577px]:grid-cols-2 gap-6 fade-in delay-1">
            {/* Phone Card */}
            <div className="bg-[#f8fafc] p-6 rounded-[20px] border border-[#e2e8f0] flex flex-col justify-between">
              <div className="w-[46px] h-[46px] rounded-full bg-[#052636] text-white flex items-center justify-center shrink-0 mb-4">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8A16 16 0 0 0 15.2 16.09l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div>
                <div className="text-[0.78rem] uppercase font-bold tracking-wider text-[#64748b] mb-1">
                  Call Us
                </div>

                <div className="text-[1.08rem] font-bold text-[#052636]">
                  {contact?.phone || "—"}
                </div>

                <div className="text-[0.82rem] text-[#334155]">
                  {contact?.opening_hours || "—"}
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#f8fafc] p-6 rounded-[20px] border border-[#e2e8f0] flex flex-col justify-between">
              <div className="w-[46px] h-[46px] rounded-full bg-[#052636] text-white flex items-center justify-center shrink-0 mb-4">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>

              <div>
                <div className="text-[0.78rem] uppercase font-bold tracking-wider text-[#64748b] mb-1">
                  Email Us
                </div>

                <div className="text-[1.08rem] font-bold text-[#052636]">
                  {contact?.email || "—"}
                </div>

                <div className="text-[0.82rem] text-[#334155]">
                  We reply within 24 hours
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#f8fafc] p-6 rounded-[20px] border border-[#e2e8f0] flex flex-col justify-between">
              <div className="w-[46px] h-[46px] rounded-full bg-[#052636] text-white flex items-center justify-center shrink-0 mb-4">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <div>
                <div className="text-[0.78rem] uppercase font-bold tracking-wider text-[#64748b] mb-1">
                  Visit Office
                </div>

                <div className="text-[1.08rem] font-bold text-[#052636]">
                  Arpan Fin Serve
                </div>

                <div
                  className="text-[0.82rem] text-[#334155]"
                  dangerouslySetInnerHTML={{
                    __html: contact?.address || "—",
                  }}
                />
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-[#f8fafc] p-6 rounded-[20px] border border-[#e2e8f0] flex flex-col justify-between">
              <div className="w-[46px] h-[46px] rounded-full bg-[#052636] text-white flex items-center justify-center shrink-0 mb-4">
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              <div>
                <div className="text-[0.78rem] uppercase font-bold tracking-wider text-[#64748b] mb-1">
                  Working Hours
                </div>

                <div className="text-[1.08rem] font-bold text-[#052636]">
                  {contact?.opening_hours || "—"}
                </div>

                <div className="text-[0.82rem] text-[#334155]">
                  Sunday Closed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";

interface Contact {
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  office?: string | null;
  opening_hours?: string | null;
}

interface ContactSectionProps {
  contact?: Contact | null;
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            service: formData.service,
            message: formData.message,
          }),
        },
      );

      const responseText = await response.text();

      console.log("========== CONTACT API DEBUG ==========");
      console.log("Status:", response.status);
      console.log("Content-Type:", response.headers.get("content-type"));
      console.log("Response:", responseText);
      console.log("========================================");

      let data: any = {};

      if (responseText.trim()) {
        try {
          data = JSON.parse(responseText);
        } catch (error) {
          console.error("JSON Parse Error:", error);
          console.error("Raw Laravel Response:", responseText);

          throw new Error(
            `Laravel returned an invalid response. Status: ${response.status}`,
          );
        }
      }

      if (!response.ok) {
        if (data.errors) {
          const firstError = Object.values(data.errors)[0];

          throw new Error(
            Array.isArray(firstError) ? firstError[0] : String(firstError),
          );
        }

        throw new Error(data.message || "Something went wrong.");
      }

      setSuccessMessage(
        data.message ||
          "Thank you for reaching out! We will contact you shortly.",
      );

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Form Error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-[100px] bg-white">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 min-[993px]:grid-cols-[0.9fr_1.1fr] rounded-[20px] overflow-hidden border border-[#e2e8f0] fade-in">
          {/* LEFT SIDE */}
          <div className="relative bg-[#052636] text-white p-[50px_40px] overflow-hidden flex flex-col justify-between">
            <div className="absolute -left-[90px] -bottom-[90px] w-[260px] h-[260px] rounded-full border border-white/10 pointer-events-none" />

            <div className="absolute -left-[50px] -bottom-[50px] w-[170px] h-[170px] rounded-full border border-white/15 pointer-events-none" />

            <div className="absolute -left-[15px] -bottom-[15px] w-[90px] h-[90px] rounded-full border border-white/20 pointer-events-none" />

            <div className="absolute left-[140px] bottom-[30px] w-[45px] h-[45px] border border-white/10 rotate-45 pointer-events-none" />

            <div className="absolute left-[20px] bottom-[110px] w-[100px] h-[50px] opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-3 flex items-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819]">
                Get In Touch
              </div>

              <h2 className="!text-white text-[2.2rem] font-serif font-bold mb-4">
                Let's Build Your Financial Future.
              </h2>

              <p className="text-white/88 text-[0.95rem] mb-[36px]">
                Whether you're just starting out or looking to optimise an
                existing portfolio — our advisors are here to help. Book a free,
                no-obligation consultation today.
              </p>

              <div className="flex flex-col gap-6">
                {/* PHONE */}
                {contact?.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-[44px] h-[44px] rounded-[8px] bg-white/10 text-[#d98819] flex items-center justify-center shrink-0">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8A16 16 0 0 0 15.2 16.09l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>

                    <div>
                      <div className="text-[0.75rem] uppercase tracking-[0.08em] text-white/70">
                        Phone
                      </div>

                      <div className="text-[1rem] font-semibold text-white">
                        {contact.phone}
                      </div>
                    </div>
                  </div>
                )}

                {/* EMAIL */}
                {contact?.email && (
                  <div className="flex items-center gap-4">
                    <div className="w-[44px] h-[44px] rounded-[8px] bg-white/10 text-[#d98819] flex items-center justify-center shrink-0">
                      <svg
                        width="20"
                        height="20"
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
                      <div className="text-[0.75rem] uppercase tracking-[0.08em] text-white/70">
                        Email
                      </div>

                      <div className="text-[1rem] font-semibold text-white">
                        {contact.email}
                      </div>
                    </div>
                  </div>
                )}

                {/* OFFICE / ADDRESS */}
                {(contact?.office || contact?.address) && (
                  <div className="flex items-center gap-4">
                    <div className="w-[44px] h-[44px] rounded-[8px] bg-white/10 text-[#d98819] flex items-center justify-center shrink-0">
                      <svg
                        width="20"
                        height="20"
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
                      <div className="text-[0.75rem] uppercase tracking-[0.08em] text-white/70">
                        Office
                      </div>

                      <div className="text-[1rem] font-semibold text-white">
                        {contact.office || contact.address}
                      </div>
                    </div>
                  </div>
                )}

                {/* BUSINESS HOURS */}
                {contact?.opening_hours && (
                  <div className="flex items-center gap-4">
                    <div className="w-[44px] h-[44px] rounded-[8px] bg-white/10 text-[#d98819] flex items-center justify-center shrink-0">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                    </div>

                    <div>
                      <div className="text-[0.75rem] uppercase tracking-[0.08em] text-white/70">
                        Business Hours
                      </div>

                      <div className="text-[1rem] font-semibold text-white">
                        {contact.opening_hours}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-[50px_40px] bg-white">
            <h3 className="text-[1.8rem] text-[#052636] font-serif font-bold mb-2">
              Book a Free Consultation
            </h3>

            <p className="text-[0.9rem] text-[#334155] mb-6">
              Fill in the details and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              {/* SUCCESS MESSAGE */}
              {successMessage && (
                <div className="mb-5 rounded-[8px] border border-green-200 bg-green-50 px-4 py-3 text-[0.9rem] text-green-700">
                  {successMessage}
                </div>
              )}

              {/* ERROR MESSAGE */}
              {errorMessage && (
                <div className="mb-5 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-[0.9rem] text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* FIRST + LAST NAME */}
              <div className="grid grid-cols-1 min-[577px]:grid-cols-2 gap-4">
                <div className="mb-5 flex flex-col gap-1.5">
                  <label
                    htmlFor="firstName"
                    className="text-[0.85rem] font-semibold text-[#052636]"
                  >
                    First Name *
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    required
                    suppressHydrationWarning
                    className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[8px] font-sans text-[0.92rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-5 flex flex-col gap-1.5">
                  <label
                    htmlFor="lastName"
                    className="text-[0.85rem] font-semibold text-[#052636]"
                  >
                    Last Name *
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    suppressHydrationWarning
                    className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[8px] font-sans text-[0.92rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* PHONE + EMAIL */}
              <div className="grid grid-cols-1 min-[577px]:grid-cols-2 gap-4">
                <div className="mb-5 flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-[0.85rem] font-semibold text-[#052636]"
                  >
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    placeholder="+91 99999 99999"
                    required
                    suppressHydrationWarning
                    className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[8px] font-sans text-[0.92rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-5 flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-[0.85rem] font-semibold text-[#052636]"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    suppressHydrationWarning
                    className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[8px] font-sans text-[0.92rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div className="mb-5 flex flex-col gap-1.5">
                <label
                  htmlFor="service"
                  className="text-[0.85rem] font-semibold text-[#052636]"
                >
                  I'm interested in *
                </label>

                <select
                  id="service"
                  required
                  suppressHydrationWarning
                  className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[8px] font-sans text-[0.92rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      service: e.target.value,
                    })
                  }
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Financial Counselling">
                    Financial Counselling
                  </option>

                  <option value="Mutual Funds & Goal Planning">
                    Mutual Funds &amp; Goal Planning
                  </option>

                  <option value="Retirement Planning">
                    Retirement Planning
                  </option>

                  <option value="Estate Planning">Estate Planning</option>

                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="mb-5 flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[0.85rem] font-semibold text-[#052636]"
                >
                  Message (Optional)
                </label>

                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us briefly about your financial goals or questions..."
                  suppressHydrationWarning
                  className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[8px] font-sans text-[0.92rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                />
              </div>

              <Button
                type="submit"
                variant="amber"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send My Enquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

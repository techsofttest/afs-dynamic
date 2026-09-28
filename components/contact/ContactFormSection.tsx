"use client";
import React, { useState } from "react";
import { Button } from "../ui/Button";
import { MixedTitle } from "../ui/MixedTitle";
export function ContactFormSection() {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact/send`,
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
      console.error("Contact form submission error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-[90px] bg-[#f8fafc] border-t border-[#e2e8f0]">
      {" "}
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        {" "}
        <div className="grid grid-cols-1 min-[993px]:grid-cols-2 gap-[60px] items-stretch">
          {" "}
          {/* Form Column */}{" "}
          <div className="bg-white p-8 min-[768px]:p-10 rounded-[24px] border border-[#e2e8f0] fade-in flex flex-col justify-between">
            {" "}
            <div>
              {" "}
              <div className="text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#d98819] mb-2 flex items-center gap-2 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#d98819]">
                {" "}
                Send A Message{" "}
              </div>{" "}
              <MixedTitle
                text="Book a Free Consultation"
                as="h3"
                className="text-[2.2rem] font-sans font-bold text-[#052636] mb-3"
              />{" "}
              <p className="text-[0.95rem] text-[#334155] mb-7">
                {" "}
                Fill in your details and our team will get in touch with you
                within 24 business hours.{" "}
              </p>{" "}
              {/* Success Message */}{" "}
              {successMessage && (
                <div className="mb-6 p-3 rounded-[8px] bg-green-50 border border-green-200 text-green-700 text-[0.85rem] font-semibold flex items-center justify-between gap-3">
                  {" "}
                  <span>✓ {successMessage}</span>{" "}
                  <button
                    type="button"
                    onClick={() => setSuccessMessage("")}
                    className="text-green-700 hover:text-green-900 text-lg leading-none"
                    aria-label="Close success message"
                  >
                    {" "}
                    ×{" "}
                  </button>{" "}
                </div>
              )}{" "}
              {/* Error Message */}{" "}
              {errorMessage && (
                <div className="mb-6 p-3 rounded-[8px] bg-red-50 border border-red-200 text-red-700 text-[0.85rem] font-semibold flex items-center justify-between gap-3">
                  {" "}
                  <span>{errorMessage}</span>{" "}
                  <button
                    type="button"
                    onClick={() => setErrorMessage("")}
                    className="text-red-700 hover:text-red-900 text-lg leading-none"
                    aria-label="Close error message"
                  >
                    {" "}
                    ×{" "}
                  </button>{" "}
                </div>
              )}{" "}
              <form onSubmit={handleSubmit}>
                {" "}
                {/* Name */}{" "}
                <div className="grid grid-cols-1 min-[577px]:grid-cols-2 gap-4">
                  {" "}
                  <div className="mb-4 flex flex-col gap-1.5">
                    {" "}
                    <label
                      htmlFor="firstName"
                      className="text-[0.85rem] font-semibold text-[#052636]"
                    >
                      {" "}
                      First Name *{" "}
                    </label>{" "}
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      required
                      suppressHydrationWarning
                      className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[10px] text-[0.95rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />{" "}
                  </div>{" "}
                  <div className="mb-4 flex flex-col gap-1.5">
                    {" "}
                    <label
                      htmlFor="lastName"
                      className="text-[0.85rem] font-semibold text-[#052636]"
                    >
                      {" "}
                      Last Name *{" "}
                    </label>{" "}
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      required
                      suppressHydrationWarning
                      className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[10px] text-[0.95rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />{" "}
                  </div>{" "}
                </div>{" "}
                {/* Phone + Email */}{" "}
                <div className="grid grid-cols-1 min-[577px]:grid-cols-2 gap-4">
                  {" "}
                  <div className="mb-4 flex flex-col gap-1.5">
                    {" "}
                    <label
                      htmlFor="phone"
                      className="text-[0.85rem] font-semibold text-[#052636]"
                    >
                      {" "}
                      Phone Number *{" "}
                    </label>{" "}
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 99999 99999"
                      required
                      suppressHydrationWarning
                      className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[10px] text-[0.95rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />{" "}
                  </div>{" "}
                  <div className="mb-4 flex flex-col gap-1.5">
                    {" "}
                    <label
                      htmlFor="email"
                      className="text-[0.85rem] font-semibold text-[#052636]"
                    >
                      {" "}
                      Email Address{" "}
                    </label>{" "}
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      suppressHydrationWarning
                      className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[10px] text-[0.95rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />{" "}
                  </div>{" "}
                </div>{" "}
                {/* Service */}{" "}
                <div className="mb-4 flex flex-col gap-1.5">
                  {" "}
                  <label
                    htmlFor="service"
                    className="text-[0.85rem] font-semibold text-[#052636]"
                  >
                    {" "}
                    Service Interest *{" "}
                  </label>{" "}
                  <select
                    id="service"
                    required
                    suppressHydrationWarning
                    className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[10px] text-[0.95rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    {" "}
                    <option value="" disabled>
                      {" "}
                      Select a service{" "}
                    </option>{" "}
                    <option value="Financial Counselling">
                      {" "}
                      Financial Counselling{" "}
                    </option>{" "}
                    <option value="Mutual Funds & Goal Planning">
                      {" "}
                      Mutual Funds &amp; Goal Planning{" "}
                    </option>{" "}
                    <option value="Retirement & Estate Planning">
                      {" "}
                      Retirement &amp; Estate Planning{" "}
                    </option>{" "}
                    <option value="General Enquiry">
                      {" "}
                      General Enquiry{" "}
                    </option>{" "}
                  </select>{" "}
                </div>{" "}
                {/* Message */}{" "}
                <div className="mb-6 flex flex-col gap-1.5">
                  {" "}
                  <label
                    htmlFor="message"
                    className="text-[0.85rem] font-semibold text-[#052636]"
                  >
                    {" "}
                    Your Message (Optional){" "}
                  </label>{" "}
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your financial goals or questions..."
                    suppressHydrationWarning
                    className="w-full p-[12px_16px] border border-[#e2e8f0] rounded-[10px] text-[0.95rem] text-[#0f172a] bg-[#f8fafc] outline-none focus:border-[#d98819] focus:bg-white"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />{" "}
                </div>{" "}
                {/* Submit */}{" "}
                <Button
                  type="submit"
                  variant="amber"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {" "}
                  {isSubmitting ? "Sending..." : "Send My Message"}{" "}
                </Button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
          {/* Image Column next to Form */}{" "}
          <div className="relative rounded-[24px] overflow-hidden border border-[#e2e8f0] h-[450px] min-[993px]:h-full fade-in delay-1">
            {" "}
            <img
              src="/about/a1.png"
              alt="Family Planning Future"
              className="absolute inset-0 w-full h-full object-cover"
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#052636]/90 via-[#052636]/30 to-transparent" />{" "}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              {" "}
              <div className="w-[44px] h-[44px] rounded-full bg-[#d98819] text-white flex items-center justify-center mb-4">
                {" "}
                <svg
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />{" "}
                </svg>{" "}
              </div>{" "}
              <h4 className="font-serif text-[1.6rem] font-bold text-white mb-2">
                {" "}
                Our Commitment To You{" "}
              </h4>{" "}
              <p className="text-white/88 text-[0.95rem] leading-[1.6]">
                {" "}
                We keep all your personal and financial information strictly
                confidential. We promise transparent, unbiased guidance built
                around your unique aspirations.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

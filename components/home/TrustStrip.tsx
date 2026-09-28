import React from "react";

interface TrustItem {
  title: string;
  description: string;
}

interface TrustData {
  id: number;
  content: TrustItem[];
}

interface TrustStripProps {
  data: TrustData;
}

export function TrustStrip({ data }: TrustStripProps) {
  const icons = [
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>,
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>,
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>,
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
    </svg>,
  ];

  return (
    <div className="relative z-[10] -mt-[45px]">
      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="bg-white rounded-[20px] px-9 py-6 border border-[#e2e8f0] fade-in delay-2">
          <div className="grid grid-cols-1 min-[577px]:grid-cols-2 min-[993px]:grid-cols-4 gap-6">
            {data.content.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index < data.content.length - 1
                    ? "border-b min-[577px]:border-b-0 border-[#e2e8f0] pb-4 min-[577px]:pb-0"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="w-[46px] h-[46px] rounded-full bg-[#0b344a] text-white flex items-center justify-center shrink-0">
                  {icons[index]}
                </div>

                {/* Dynamic Content */}
                <div>
                  <div className="font-sans text-[0.95rem] font-bold text-[#0b344a] leading-[1.2]">
                    {item.title}
                  </div>

                  <div className="text-[0.8rem] text-[#64748b] font-medium">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

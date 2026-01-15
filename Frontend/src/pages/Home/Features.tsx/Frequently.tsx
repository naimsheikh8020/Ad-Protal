import { useState } from "react";

const faqs = [
  {
    question: "What is AdPortal?",
    answer:
      "AdPortal is an AI-powered advertising platform that helps you create, manage, and optimize ads across multiple platforms from one dashboard.",
  },
  {
    question: "Is it safe to connect my ad accounts?",
    answer:
      "Yes. We use official APIs and secure authentication to protect your data and ad accounts.",
  },
  {
    question: "Can AdPortal create ads for me?",
    answer:
      "Yes. Our AI can generate ad copy, creatives, and suggestions tailored to your audience and goals.",
  },
  {
    question: "Does it optimize my ads automatically?",
    answer:
      "Yes. AdPortal continuously monitors performance and automatically optimizes budgets and targeting.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "We currently support Meta (Facebook & Instagram), Google Ads, and TikTok Ads.",
  },
];

const Frequently = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* LEFT – PERFECTLY CENTERED */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-4xl font-extrabold leading-tight text-slate-900">
              Frequently Asked
              <span className="mx-3 text-blue-600">Questions</span>
            </h2>

            <p className="mt-4 max-w-md text-slate-600">
              Everything you need to know about AdPortal before getting started.
            </p>
          </div>

          {/* RIGHT – FAQ ACCORDION */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className={`group cursor-pointer rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-blue-400/40 bg-gradient-to-b from-[#0A1B4D] to-[#123A8F] shadow-lg"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                  }`}
                >
                  {/* Question */}
                  <div className="flex items-center justify-between px-6 py-5">
                    <h3
                      className={`font-semibold text-base transition-colors ${
                        isActive ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    <span
                      className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "rotate-180 border-white/30 text-white"
                          : "border-slate-300 text-slate-500 group-hover:text-blue-600"
                      }`}
                    >
                      ⌄
                    </span>
                  </div>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden px-6 transition-all duration-300 ease-out ${
                      isActive
                        ? "max-h-40 pb-5 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-blue-100">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;

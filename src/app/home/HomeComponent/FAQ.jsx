"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I book a sports court or turf?",
      answer:
        "Booking is simple! Browse our venue list or search by sport category, select your preferred date, pick an available hourly time slot from the live table, and securely proceed to checkout to instantly generate your digital match pass.",
    },
    {
      id: 2,
      question: "Can I cancel my slot after booking?",
      answer:
        "Yes, you can cancel your active reservation directly from your user profile dashboard. Please check the individual venue's specific cancellation window (typically up to 6–12 hours before match time) to stay eligible for a full refund.",
    },
    {
      id: 3,
      question: "How do refunds work for canceled bookings?",
      answer:
        "Once a valid cancellation is requested, your refund is processed automatically. The amount will be credited back to your original payment method (Mobile Banking or Debit/Credit card) within 3 to 5 business days depending on bank clearance.",
    },
    {
      id: 4,
      question: "Are there any hidden service fees or registration charges?",
      answer:
        "Absolutely not. The price displayed on the turf details page is exactly what you pay at checkout. We maintain complete pricing transparency with zero hidden transaction adjustments.",
    },
    {
      id: 5,
      question: "What happens if it rains heavily during our outdoor slot?",
      answer:
        "For unplayable weather conditions, the venue management will update the turf status. You will either receive a complementary rescheduled slot at your convenience or a full priority refund back to your account.",
    },
    {
      id: 6,
      question: "Can I modify my match timing or shift to another date?",
      answer:
        "Yes, modifications are supported if the requested alternative time slot is completely vacant. You can adjust your reservation settings via your profile without completely canceling the active order.",
    },
    {
      id: 7,
      question: "How do I show proof of my booking at the venue gate?",
      answer:
        "Simply open your sports booking app or check your email receipt to display the digital Match Pass QR code or booking ID to the ground supervisor at the entrance.",
    },
    {
      id: 8,
      question: "Can I book a ground for long-term regular team practices?",
      answer:
        "Yes, we support bulk recurring bookings for corporate events, tournaments, or seasonal team practices. Please contact our corporate support team directly through the helpdesk panel to activate automated monthly schedules.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };
  return (
    <section className="w-full bg-[#0b1220] text-slate-100 py-16 md:py-24 border-t border-slate-800/40">
      <div className="w-[90%] md:w-[80%] max-w-4xl mx-auto space-y-12">
       
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle size={14} />
            Support Center
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
              Questions
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium max-w-md mx-auto">
            Everything you need to know about slots, cancellations, and venue
            policies.
          </p>
        </div>

       
        <div className="space-y-4 pt-4">
          {faqs.map((faq) => {
            const isOpen = openIndex === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/20 transition-all duration-300 overflow-hidden"
              >
              
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-sm md:text-base text-slate-200 hover:text-white hover:bg-slate-900/40 transition-all duration-200 gap-4 group"
                >
                  <span
                    className={`transition-colors duration-200 ${isOpen ? "text-emerald-400" : ""}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-lg bg-slate-900 border border-slate-800/60 flex items-center justify-center text-slate-400 group-hover:text-white transform transition-transform duration-300 flex-shrink-0 ${
                      isOpen
                        ? "rotate-180 border-emerald-500/30 text-emerald-400"
                        : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] border-t border-slate-800/50"
                      : "max-h-0 pointer-events-none"
                  }`}
                >
                  <p className="p-5 md:p-6 text-xs md:text-sm font-medium text-slate-400 leading-relaxed bg-slate-950/20">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      
        <div className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-center max-w-md mx-auto">
          <MessageSquare size={18} className="text-emerald-400 flex-shrink-0" />
          <p className="text-xs md:text-sm font-semibold text-slate-400">
            Still have lingering questions? Contact our{" "}
            <span className="text-emerald-400 hover:underline cursor-pointer">
              Live Helpdesk
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

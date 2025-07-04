'use client';
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicTable } from "@prismicio/react";

import Image from 'next/image';
import { PrismicRichText } from "@/components/PrismicRichText";
import { commonComponents } from "@/components/PrismicSerializer";
import { Bounded } from "@/components/Bounded";
import { useState } from "react";

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs: FC<FaqsProps> = ({ slice }) => {
  
  const questions = slice?.primary?.questions;
  
  const faqs = [
    {
      question: "How can I get started?",
      answer:
        "Getting started is easy! Sign up for an account, and you'll have access to our platform's features. No credit card required for the initial signup.",
    },
    {
      question: "What is the pricing structure?",
      answer:
        "Our pricing structure is flexible. We offer both free and paid plans. You can choose the one that suits your needs and budget.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive customer support. You can reach out to our support team through various channels, including email, chat, and a knowledge base.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time without any hidden fees. We believe in providing a hassle-free experience for our users.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpen(open === idx ? null : idx);
  };

  return (
    <section className="relative bg-[#212121] text-white">
      <Bounded yPadding="base" xPadding="responsive" className="relative px-4">
        <div className="mx-auto w-full ">
          <div className="text-center">
            <PrismicRichText
              field={slice.primary.title}
              components={commonComponents}
              />
            <div className=' flex flex-row justify-center items-center mt-20 text-left sm:text-center'>
              <PrismicRichText
                field={slice.primary.description}
                components={commonComponents}
                />                
            </div>
          </div>
        </div>
        <div className="mx-auto w-full">
          <div id="list" className="grid grid-cols-1 gap-12 mt-20">
                  
            {/* { Array.isArray(questions) && questions.map((item, index)=>(
               <div key={`${index}-LoungesDetail-LIST`} id="item" className='overflow-hidden rounded-2xl cursor-pointer flex flex-col md:flex-row border'>
                
                 <div id="content" className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8">
                   <PrismicRichText
                     field={item?.title}
                     components={commonComponents}
                   />   
                 </div>
               </div>
            ))} */}
            
            <section className="py-10  sm:py-16 lg:py-24">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
               
                <div className="mx-auto mt-8 space-y-4 md:mt-16">
                    { Array.isArray(questions) && questions.map((faq, idx)=>(
                    <div
                      key={idx}
                      className="transition-all duration-200  border-gray-200 shadow-lg cursor-pointer "
                    >
                      <button
                        type="button"
                        onClick={() => handleToggle(idx)}
                        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                        aria-expanded={open === idx}
                        aria-controls={`faq-answer-${idx}`}
                      >
                        <span className="flex text-lg font-semibold text-black">
                        <PrismicRichText
                     field={faq?.title}
                     components={commonComponents}
                   />   
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={`w-6 h-6 text-gray-400 transform transition-transform duration-200 ${open === idx ? "rotate-0" : "-rotate-180"}`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {open === idx && (
                        <div
                          id={`faq-answer-${idx}`}
                          className="px-4 pb-5 sm:px-6 sm:pb-6 text-slate-800"
                        >
                          <PrismicRichText
                     field={faq?.html}
                     components={commonComponents}
                   />   
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-center text-gray-600 text-base mt-9">
                  Still have questions?
                  <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary underline ml-2">
                    Contact our support
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Faqs;

"use client";
import { FC, useState } from "react";
import Link from 'next/link';
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import emailjs, { init } from "emailjs-com";
const SERVICE = "service_0g33pau";
const TEMPLATE = "template_scllte8";
init("Cj4ceUn7ty-EX0iuD");

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#c39f77]">{children}</strong>
  ),
};

type ContactProps = SliceComponentProps<Content.ContactSlice>;

const schema = yup.object().shape({
  nameForm: yup.string().required("El nombre es obligatorio"),
  emailForm: yup.string().email("Email inválido").required("El email es obligatorio"),
  phoneForm: yup.string().matches(/^\d{9}$/, "El teléfono debe tener 9 dígitos").required("El teléfono es obligatorio"),
  messageForm: yup.string().min(3, "El mensaje debe tener al menos 3 caracteres").required("El mensaje es obligatorio"),
});

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const Contact: FC<ContactProps> = ({ slice }) => {
  const backgroundImage = slice?.primary?.backgroundimage;
  // const calltoactionlink = slice.primary.calltoactionlink;

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [emailStatus, setEmailStatus] = useState<null | 'success' | 'error'>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    setEmailStatus(null);
    console.log("email: ", data)
    try {
      const templateParams:any = {
        from_name: data.nameForm,
        to_email: data.emailForm,
        to_name: data.nameForm,
        to_phone: data.phoneForm,
        message: data.messageForm,
        reply_to: data.emailForm,
      };
      
      await emailjs.send(
        SERVICE,
        TEMPLATE,
        // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { ...templateParams },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      setEmailStatus('success');
      reset();

      // Aquí ejecutas el evento de conversión de Google Ads
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-808610482/h8JLCIyh2_YCELLVyYED'
        });
      }
    } catch (error) {
      setEmailStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#212121] text-white ">
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="base" className="relative">
      <div className=" w-full flex items-start flex-row">
          <div id="boxLeft"
              key="contact-form"
              className='min-w-[600px] w-full bg-white border border-[rgba(0,17,51,0.15)] rounded-[24px] p-[48px] flex flex-col justify-start items-start relative'
            >
              {/* <form onSubmit={e => { e.preventDefault(); handleSubmit(onSubmit)(e); console.log('submit event', e); }} className="space-y-4  w-full"> */}
              <form onSubmit={e => { e.preventDefault(); handleSubmit(onSubmit)(e); console.log('submit event', e); }} className="space-y-4  w-full">
                <div>
                  <label htmlFor="nameForm" className="block text-xl font-light text-gray-700 ">
                    {slice?.primary?.name || "name"}
                  </label>
                  <input
                    {...register('nameForm')}
                    type="text"
                    id="nameForm"
                    name="nameForm"
                    className="mt-1 mb-2 block w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary "
                  />
                  {errors.nameForm && <p className="text-red-500 text-sm mt-1">{errors.nameForm.message as string}</p>}
                </div>

                <div>
                  <label htmlFor="emailForm" className="block text-xl font-light text-gray-700 ">
                    {slice?.primary?.email || "Email"}
                  </label>
                  <input
                    {...register('emailForm')}
                    type="emailForm"
                    id="emailForm"
                    name="emailForm"
                    className="mt-1 mb-2 block w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary "
                  />
                  {errors.emailForm && <p className="text-red-500 text-sm mt-1">{errors.emailForm.message as string}</p>}
                </div>
                <div>
                  <label htmlFor="phoneForm" className="block text-xl font-light text-gray-700 ">
                    {slice?.primary?.phone || "phone"}
                  </label>
                  <input
                    {...register('phoneForm')}
                    type="text"
                    id="phoneForm"
                    name="phoneForm"
                    className="mt-1 mb-2 block w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary "
                  />
                  {errors.phoneForm && <p className="text-red-500 text-sm mt-1">{errors.phoneForm.message as string}</p>}
                </div>

                <div>
                  <label htmlFor="messageForm" className="block text-xl font-light text-gray-700 ">
                  {slice?.primary?.message || "How can we help you?"}
                  </label>
                  <textarea
                    {...register('messageForm')}
                    id="messageForm"
                    name="messageForm"
                    rows={4}
                    className="mt-1 mb-2 block w-full border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary "
                  />
                  {errors.messageForm && <p className="text-red-500 text-sm mt-1">{errors.messageForm.message as string}</p>}
                </div>

                <div className='flex justify-center items-center flex-col'>
                  <button
                    type="submit"
                    className=" w-sm rounded-md bg-[#c39f77] px-4 py-2 text-white hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : (slice?.primary?.calltoactiontext || "email Enviado")}
                  </button>
                  {emailStatus === 'success' && (
                    <p className="text-green-600 mt-2">¡Mensaje enviado correctamente!</p>
                  )}
                  {emailStatus === 'error' && (
                    <p className="text-red-600 mt-2">Hubo un error al enviar el mensaje. Intenta nuevamente.</p>
                  )}
                </div>
              </form>
            
          </div>
          <div  id="boxRight" className="ml-20">
          <div className="mb-20">
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
          </div>
            <PrismicRichText
              field={slice.primary.description}
              components={components}
            />
          </div>
      </div>
      </Bounded>
    </section>
  );
};

export default Contact;
// const Contact: FC<ContactProps> = ({ slice }) => {
//   // const backgroundImage = slice.primary.backgroundImage;
//   // const calltoactionlink = slice.primary.calltoactionlink;
//   const [isSentEmail, setIsSentEmail] = useState({
//     sentEmail: false,
//     isFailure: false,
//     title: "Page Not Found 😭",
//     text: "It looks like we can't find the page you're looking for.",
//   });
  
//   return (
//     <section className="relative bg-black text-white">
   
//       <Bounded yPadding="base" className="relative">
//       <section
//       id='features'
//       className='relative z-1 overflow-hidden'
//     >
//       <div className='relative z-1 mx-auto w-full max-w-[1170px] px-4 sm:px-8 xl:px-0'>
            
//         <div className='flex justify-center items-center flex-col'>
//           <div
//               key="contact-header"
//               className='max-w-[600px] w-full  p-[26px] flex flex-col justify-start items-start relative'
//             >
//           <div className="max-w-2xl text-left mb-10">
//             <PrismicRichText
//               field={slice.primary.title}
//               components={components}
//             />
//           </div>
//           <div className="max-w-2xl text-left text-gray-300 ">
//             <PrismicRichText
//               field={slice.primary.description}
//               components={components}
//             />
//           </div>
//           </div>
       
//             <div
//               key="contact-form"
//               className='max-w-[600px] w-full bg-white border border-[rgba(0,17,51,0.15)] rounded-[24px] p-[48px] flex flex-col justify-start items-start relative'
//             >
//                <div className="space-y-6">
           
//           </div>
              
//             { isSentEmail.sentEmail ? (
//               <>
//                 <h4 className='mb-5   font-bold  text-slate-700  text-[32px] leading-10'>
//                 {isSentEmail.title}
//                 </h4>
//                 <p className='   text-slate-700 text-[20px] mb-8  leading-6'> {isSentEmail.text}</p>

//                 <Link 
//                     href={"/"}
//                     passHref
//                     prefetch
//                     rel="noopener noreferrer nofollow" 
//                     className='inline-flex items-center gap-4 rounded-full bg-black py-2 pl-7.5 pr-2   font-medium text-white hover:bg-opacity-90 dark:bg-primary'
//                   >{"Back to home"}
//                 </Link>
//               </>
//             )
//             :(<form  className="space-y-4  w-full">
//             {/* :(<form onSubmit={handleSubmit(onSubmit)} className="space-y-4  w-full"> */}
//                 <div>
//                 <label htmlFor="name" className="block text-xl font-light text-gray-700 ">
//                     {slice?.primary?.name || "name"}
//                   </label>
//                   <input
//                     // {...register('name')}
//                     type="name"
//                     id="name"
//                     className="mt-1 mb-12 block w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary "
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-xl font-light text-gray-700 ">
//                     {slice?.primary?.email || "Email"}
//                   </label>
//                   <input
//                     // {...register('email')}
//                     type="email"
//                     id="email"
//                     className="mt-1 mb-12 block w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary "
//                   />
//                   {/* {errors.email && (
//                     <p className="-mt-10 text-sm text-red-300">{errors.email.message}</p>
//                   )} */}
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-xl font-light text-gray-700 ">
//                     {slice?.primary?.phone || "phone"}
//                   </label>
//                   <input
//                     // {...register('phone')}
//                     type="phone"
//                     id="phone"
//                     className="mt-1 mb-12 block w-full h-[48px] border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary "
//                   />
//                   {/* {errors.email && (
//                     <p className="-mt-10 text-sm text-red-300">{errors.email.message}</p>
//                   )} */}
//                 </div>

//                 <div>
//                   <label htmlFor="mensaje" className="block text-xl font-light text-gray-700 ">
                  
//                   {slice?.primary?.name || "How can we help you?"}
//                   </label>
//                   <textarea
//                     // {...register('mensaje')}
//                     id="mensaje"
//                     rows={4}
//                     className="mt-1 mb-12 block w-full border border-[rgba(0,17,51,0.15)] rounded-[6px] p-[13px] text-[rgba(0,17,51,0.8)]  text-[14px] transition-all duration-400 outline-none shadow-none focus:border-primary focus:ring-primary "
//                   />
//                   {/* {errors.mensaje && (
//                     <p className="-mt-10 text-sm text-red-300">{errors.mensaje.message}</p>
//                   )} */}
//                 </div>

//                 <div className='flex justify-center items-center flex-col'>
//                   <button
//                     type="submit"
//                     // disabled={isSubmitting}
//                     className=" w-sm rounded-md bg-[#c39f77] px-4 py-2 text-white hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
//                   >
//                     {slice?.primary?.calltoactiontext || "Send"}
//                     {/* {isSubmitting ? 'Sending...' : 'Sent'} */}
//                   </button>
                  
//                 </div>
//               </form>
//             )}
//             </div>
      
//         </div>
        

//       </div>
//     </section>
       
//             {/* <pre>{JSON.stringify(slice.primary, null, 2 )}</pre> */}
//       </Bounded>
//     </section>
//   );
// };

// export default Contact;


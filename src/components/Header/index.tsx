'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";


import logoLight from '@/../public/images/logo/logo_las_trancas.svg';
import { onScroll } from '@/libs/scrollActive';


interface HeaderProps {
  settings: any;
  navigation: any;
}

const Header = ({ settings, navigation }: HeaderProps) => {
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  const handleStickyMenu = () => {
    if (window.scrollY > 0) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    if (window.location.pathname === '/') {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-999 w-full transition-all duration-300 ease-in-out bg-[rgba(1,1,1,0.62)] ${
          stickyMenu ? 'py-4 shadow xl:py-0' : 'py-7 xl:py-0'
        }`}
      >
        <div className='relative mx-auto max-w-[1170px] items-center justify-between px-4 sm:px-8 xl:flex xl:px-0'>
          <div className='flex shrink-0 items-center justify-between'>
            <Link href='/' className='shrink-0'>
            {/* <PrismicNextLink
              href="/"
              className="text-xl font-semibold tracking-tight"
            > */}
              <Image src={logoLight} alt='Logo' className='hidden w-full dark:block' />
              <Image src={logoLight} alt='Logo' className='w-full dark:hidden' />
            {/* </PrismicNextLink> */}
            </Link>

            <div className='ml-auto mr-4 lg:hidden'>
              {/* <LanguageSwitcher /> */}
            </div>

            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              onClick={navbarToggleHandler}
              aria-label='button for menu toggle'
              className='block xl:hidden'
            >
              <span className='relative block h-5.5 w-5.5 cursor-pointer'>
                <span className='du-block absolute right-0 h-full w-full'>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && '!w-full delay-300'
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && 'delay-400 !w-full'
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && '!w-full delay-500'
                    }`}
                  ></span>
                </span>
                <span className='du-block absolute right-0 h-full w-full rotate-45'>
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && '!h-0 delay-[0]'
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                      !navbarOpen && 'dealy-200 !h-0'
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

      
          <div
            className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto ${
              navbarOpen &&
              '!visible relative mt-4 !h-auto max-h-[400px] overflow-y-scroll rounded-md bg-white p-7.5 shadow-lg dark:bg-gray-dark'
            }`}
            >
            {/* <pre>{JSON.stringify(navbarOpen, null, 2 )}</pre> */}
            <nav className='lg:mx-auto'>
              <ul className='flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-2.5'>
                {/* {menuData?.map((item:any, key) => */}
                {navigation.data?.links.map((item:any, key:number) => (
                    <li
                    key={asText(item.label)}
                      className={`${
                        item?.submenu ? 'group relative' : 'nav__menu'
                      } ${stickyMenu ? 'xl:py-4' : 'xl:py-6'}`}
                    >
                      {/* <Link
                        onClick={() => setNavbarOpen(false)}
                        href={
                          item?.path
                            ? item?.path.includes('#') && !item?.newTab
                              ? `/${item?.path}`
                              : item?.path
                            : ''
                        }
                        target={item?.newTab ? '_blank' : ''}
                        rel={item?.newTab ? 'noopener noreferrer' : ''}
                        className={`flex truncate rounded-full px-[14px] py-[3px] font-satoshi font-medium ${
                          pathUrl === item?.path
                            ? 'bg-primary/5 text-white dark:bg-white/5 dark:text-white'
                            : 'text-white hover:bg-white/5 hover:text-white dark:text-gray-5 dark:hover:bg-white/5 dark:hover:text-white'
                        } ${item?.path?.startsWith('#') ? 'menu-scroll' : ''}`}
                      > */}
                       <PrismicNextLink 
                        field={item.link}
                        onClick={() => setNavbarOpen(false)}
                        rel={item?.newTab ? 'noopener noreferrer' : ''}
                        className={`flex truncate rounded-full px-[14px] py-[3px] font-satoshi font-medium ${
                          navbarOpen 
                            ? 'text-black' 
                            : pathUrl === item?.path
                              ? 'bg-primary/5 text-white dark:bg-white/5 dark:text-white'
                              : 'text-white hover:bg-white/5 hover:text-white dark:text-gray-5 dark:hover:bg-white/5 dark:hover:text-white'
                        } ${item?.path?.startsWith('#') ? 'menu-scroll' : ''}`}
                       >
                        <PrismicText field={item.label} />
                      </PrismicNextLink>
                      {/* </Link> */}
                    </li>
                )
                )}
              </ul>
              {/* <ul className='flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-2.5'>
                {menuData?.map((item:any, key) =>
                  !item?.path && item?.submenu ? (
                    <Dropdown
                      stickyMenu={stickyMenu}
                      item={item}
                      key={key}
                      setNavbarOpen={setNavbarOpen}
                    />
                  ) : (
                    <li
                      key={key}
                      className={`${
                        item?.submenu ? 'group relative' : 'nav__menu'
                      } ${stickyMenu ? 'xl:py-4' : 'xl:py-6'}`}
                    >
                      <Link
                        onClick={() => setNavbarOpen(false)}
                        href={
                          item?.path
                            ? item?.path.includes('#') && !item?.newTab
                              ? `/${item?.path}`
                              : item?.path
                            : ''
                        }
                        target={item?.newTab ? '_blank' : ''}
                        rel={item?.newTab ? 'noopener noreferrer' : ''}
                        className={`flex truncate rounded-full px-[14px] py-[3px] font-satoshi font-medium ${
                          pathUrl === item?.path
                            ? 'bg-primary/5 text-white dark:bg-white/5 dark:text-white'
                            : 'text-white hover:bg-white/5 hover:text-white dark:text-gray-5 dark:hover:bg-white/5 dark:hover:text-white'
                        } ${item?.path?.startsWith('#') ? 'menu-scroll' : ''}`}
                      >
                        {t(item.titleKey)}
                      </Link>
                    </li>
                  )
                )}
              </ul> */}
            </nav>

            <div className='mt-7 flex items-center max-lg:flex-wrap lg:mt-0'>
              
								
                <Link 
                href="contacto"
                rel="noopener noreferrer" 
                // className='font-satoshi text-heading-4 font-bold -tracking-[1.6px] text-red-700 dark:text-white lg:text-heading-2 xl:text-[48px] xl:leading-[1.12]'
                className='items-center rounded-full bg-black py-2 px-6 font-satoshi font-medium text-white hover:bg-opacity-90 dark:bg-primary'
          
              >
                {/* <span className=' '>{t('contact')}</span> */}
                Contacto
              
              </Link>

              {/* {integrations.isI18nEnabled && (
                <div className='mx-2 max-lg:hidden'>
                  <LanguageSwitcher />
                </div>
              )} */}

              {/* {session?.user ? (
                <Account navbarOpen={navbarOpen} />
                
              ) : (
                <>
                  <Link
                    href='/auth/signin'
                    // className='px-5 py-2 font-satoshi font-medium text-slate-50 dark:text-white'
                    className='rounded-full bg-white px-5 py-2 font-satoshi font-medium text-slate-700 hover:bg-primary-dark'
                  >
                    {t('signIn')}
                  </Link>

                  <Link
										href='/auth/signup'
										className='rounded-full bg-white px-5 py-2 font-satoshi font-medium text-slate-700 hover:bg-primary-dark'
									>
										{t("signUp")}
									</Link>
                </>
              )} */}
            </div>
            {/* <!--=== Nav Right End ===--> */}
          </div>
        </div>
      </header>

      {/* <GlobalSearchModal
        searchModalOpen={searchModalOpen}
        setSearchModalOpen={setSearchModalOpen}
      /> */}
    </>
  );
};

export default Header;

import Image from "next/image";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav(params) {
  return (
    // <nav className="flex flex-row justify-between items-center h-16 bg-[#FBFBFB] md:px-28">
    //   {/* logo */}
    //   <div className="flex-shrink-1">
    //     <p className="text-4xl text-primary font-bold">R.</p>
    //   </div>  

    //   {/* menu */}
    //   <div className="flex flex-row justify-between flex-shrink-2">
    //     <p className=" mr-2 font-semibold">Home</p>
    //     <p className=" mr-2 font-semibold">About</p>
    //     <p className=" mr-2 font-semibold">Hobby</p>
    //     <p className=" mr-2 font-semibold">Blog</p>
    //   </div>
    // </nav>

    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  /> */}
                  <Link href='/'>
                    <div className="block lg:hidden h-8 w-auto cursor-pointer">
                      <p className="text-4xl text-primary font-bold">R.</p>
                    </div>
                  </Link>

                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}

                  <div className="hidden lg:block h-8 w-auto">
                    <p className="text-4xl text-primary font-bold">R.</p>
                  </div>
                </div>


              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
                  <a
                    href="#home"
                    className="border-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    About Me
                  </a>
                  <a
                    href="#hobby"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Hobby
                  </a>
                  <a
                    href="#blog"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Blog
                  </a>
                </div>


              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <a
                href="#home"
                className="bg-primary/70 border-primary text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                About Me
              </a>
              <a
                href="#hobby"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Hobby
              </a>
              <a
                href="#blog"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Blog
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  );
}

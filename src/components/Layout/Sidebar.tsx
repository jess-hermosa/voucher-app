import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store";
import { uiActions } from "@/store/ui";
import { menuActions } from "@/store/menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const { isOpen } = useAppSelector((s) => s.ui);
  const { menu } = useAppSelector((s) => s.menu);
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    dispatch(menuActions.setSelectedMenu(pathname));
  }, [pathname]);

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={() => dispatch(uiActions.toggleSidebar(null))}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => dispatch(uiActions.toggleSidebar(null))}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {menu.menuItem.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className={classNames(
                                  item.active
                                    ? "bg-gray-50 text-indigo-600"
                                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                {/* <item.icon
                                  className={classNames(
                                    item.active
                                      ? "text-indigo-600"
                                      : "text-gray-400 group-hover:text-indigo-600",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                /> */}
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <a
                          href="#"
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        >
                          <Cog6ToothIcon
                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {menu.menuItem.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          item.active
                            ? "bg-gray-50 text-indigo-600"
                            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        {/* <item.icon
                          className={classNames(
                            item.active
                              ? "text-indigo-600"
                              : "text-gray-400 group-hover:text-indigo-600",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        /> */}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                >
                  <Cog6ToothIcon
                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

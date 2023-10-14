"use client";

import { uiActions } from "@/store/ui";
import { PlusSmallIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import { useDispatch } from "react-redux";

interface Props {
  header?: string;
}

const SectionHeader: FC<Props> = ({ header }) => {
  const dispatch = useDispatch();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {header}
            </h2>
          </div>
          <div className="mt-4 flex md:ml-4 md:mt-0">
            <a
              href="#"
              className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => dispatch(uiActions.toggleSidebar("slideover"))}
            >
              <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
              New {header}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;

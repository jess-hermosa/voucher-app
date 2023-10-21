import { uiActions } from "@/store/ui";
import { PlusIcon } from "@heroicons/react/20/solid";
import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { useDispatch } from "react-redux";

interface Props {
  listname: string;
}

const EmptyList: FC<Props> = ({ listname }) => {
  const dispatch = useDispatch();

  return (
    <div className="text-center pt-36">
      <DocumentPlusIcon className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">
        No {listname}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new {listname}.
      </p>
      <div className="mt-6">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => dispatch(uiActions.toggleSidebar("slideover"))}
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New {listname}
        </button>
      </div>
    </div>
  );
};
export default EmptyList;

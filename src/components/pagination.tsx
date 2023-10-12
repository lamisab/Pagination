import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import i18n from "src/core/configs/i18n";

type Props = {
  totalPage: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
};

function Pagination(props: Props) {
  return (
    <nav
      aria-label="Page navigation"
      className=" pt-10 inset-y-0 pl-12 top-[584px] container"
    >
      <ul className="inline-flex gap-3">
        <li>
          <button
            className="flex rounded-full border-[1px] w-8 h-8 items-center bg-[white] border-[#E6E6E6] justify-center"
            onClick={() => props.onPageChange(1)}
          >
            {i18n.language === "ar" ? (
              <ChevronDoubleLeftIcon
                strokeWidth={2}
                className="h-3 w-3 text-[#615d5d]"
              />
            ) : (
              <ChevronDoubleRightIcon
                strokeWidth={2}
                className="h-3 w-3 text-[#615d5d]"
              />
            )}
          </button>
        </li>
        <li>
          <button
            className="flex rounded-full border-[1px] w-8 h-8 items-center bg-white border-lightgray justify-center"
            onClick={() =>
              props.onPageChange(props.page === 1 ? 1 : props.page - 1)
            }
          >
            {i18n.language === "ar" ? (
              <ChevronLeftIcon
                strokeWidth={2}
                className="h-3 w-3 cursor-pointer"
              />
            ) : (
              <ChevronRightIcon
                strokeWidth={2}
                className="h-3 w-3 cursor-pointer"
              />
            )}
          </button>
        </li>
        {/* If the totalPage was less than 5 pages
         will display all number of pages */}
        {props.totalPage < 5 ? (
          Array(props.totalPage)
            .fill("")
            .map((_, index) => {
              return (
                <li key={index}>
                  <button
                    className={`w-8 h-8 rounded-[18px]  ${
                      index + 1 === props.page
                        ? " bg-orange500 text-whiteColor text-[13px]"
                        : "border border-lightgray bg-white font-sans text-[13px]"
                    }`}
                    onClick={() => props.onPageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              );
            })
        ) : (
          <>
            {/* ... 333 */}
            {props.page >= props.totalPage - 2 ? (
              <>
                <button
                  className="w-8 h-8 rounded-[18px]  bg-white text-[13px]"
                  onClick={() => {
                    props.onPageChange(props.page);
                  }}
                >
                  ...
                </button>
                {[
                  props.totalPage - 2,
                  props.totalPage - 1,
                  props.totalPage,
                ].map((val, index) => {
                  return (
                    <li key={index}>
                      <button
                        className={`w-8 h-8 rounded-[18px] ${
                          val === props.page
                            ? " bg-orange500 text-whiteColor text-[13px]"
                            : " border border-lightgray bg-white font-sans text-[13px]"
                        }`}
                        onClick={() => props.onPageChange(val)}
                      >
                        {val}
                      </button>
                    </li>
                  );
                })}
              </>
            ) : (
              <>
                {/* ... 222 ... */}
                {props.page === props.totalPage / 2 ? (
                  <>
                    <button
                      className="w-8 h-8 rounded-[18px]  bg-white text-[13px]"
                      onClick={() => {
                        props.onPageChange(props.page);
                      }}
                    >
                      ...
                    </button>
                    {[props.page, props.page + 1, props.page + 2].map(
                      (val, index) => {
                        return (
                          <li key={index}>
                            <button
                              className={`w-8 h-8 rounded-[18px] ${
                                val === props.page
                                  ? " bg-orange500 text-whiteColor text-[13px]"
                                  : " border border-lightgray bg-white font-sans text-[13px]"
                              }`}
                              onClick={() => props.onPageChange(val)}
                            >
                              {val}
                            </button>
                          </li>
                        );
                      }
                    )}
                    <button
                      className="w-8 h-8 rounded-[18px]  bg-white text-[13px]"
                      onClick={() => {
                        props.onPageChange(props.page);
                      }}
                    >
                      ...
                    </button>
                  </>
                ) : (
                  <>
                    {/* 111 ... 111 */}
                    {[props.page, props.page + 1, props.page + 2].map(
                      (val, index) => {
                        return (
                          <li key={index}>
                            <button
                              className={`w-8 h-8 rounded-[18px]  ${
                                val === props.page
                                  ? " bg-orange500 text-whiteColor text-[13px]"
                                  : " border border-lightgray bg-white font-sans text-[13px]"
                              }`}
                              onClick={() => props.onPageChange(val)}
                            >
                              {val}
                            </button>
                          </li>
                        );
                      }
                    )}
                    <button
                      className="w-8 h-8 rounded-[18px]  bg-white text-[13px]"
                      onClick={() => {
                        props.onPageChange(props.page);
                      }}
                    >
                      ...
                    </button>
                    {[
                      props.totalPage - 2,
                      props.totalPage - 1,
                      props.totalPage,
                    ].map((val, index) => {
                      return (
                        <li key={index}>
                          <button
                            className={`w-8 h-8 rounded-[18px] ${
                              val === props.page
                                ? " bg-orange500 text-whiteColor text-[13px]"
                                : " border border-lightgray bg-white font-sans text-[13px]"
                            }`}
                            onClick={() => props.onPageChange(val)}
                          >
                            {val}
                          </button>
                        </li>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </>
        )}

        <li>
          <button
            className="flex rounded-full border-[1px] w-8 h-8 items-center bg-[white] border-[#E6E6E6] justify-center"
            onClick={() =>
              props.onPageChange(
                props.page === props.totalPage
                  ? props.totalPage
                  : props.page + 1
              )
            }
          >
            {i18n.language === "ar" ? (
              <ChevronRightIcon
                strokeWidth={2}
                className="h-3 w-3 text-[#615d5d]"
              />
            ) : (
              <ChevronLeftIcon
                strokeWidth={2}
                className="h-3 w-3 text-[#615d5d]"
              />
            )}
          </button>
        </li>
        <li>
          <button
            className="flex rounded-full border-[1px] w-8 h-8 items-center bg-[white] border-[#E6E6E6] justify-center"
            onClick={() => props.onPageChange(props.totalPage)}
          >
            {i18n.language === "ar" ? (
              <ChevronDoubleRightIcon
                strokeWidth={2}
                className="h-3 w-3 text-[#615d5d]"
              />
            ) : (
              <ChevronDoubleLeftIcon
                strokeWidth={2}
                className="h-3 w-3 text-[#615d5d]"
              />
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

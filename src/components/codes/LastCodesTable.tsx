import CodesTableHead from "./CodesTableHead";
import CodesTableRow from "./CodesTableRow";
import SearchIcon from "../global/SearchIcon";

export default function LastCodesTable() {
  const codes = [
    {
      id: 1,
      code: "8dj29dj20e",
      duration: "1 year",
      price: 100.0,
      date: "18/01/2022",
      status: "pending",
    },
    {
      id: 2,
      code: "8dj29dj20e",
      duration: "2 year",
      price: 200.0,
      date: "18/01/2022",
      status: "redeemed",
    },
    {
      id: 3,
      code: "8dj29dj20e",
      duration: "3 year",
      price: 300.0,
      date: "18/01/2022",
      status: "cancelled",
    },
    {
      id: 4,
      code: "8dj29dj20e",
      duration: "2 year",
      price: 200.0,
      date: "18/01/2022",
      status: "pending",
    },
    {
      id: 5,
      code: "8dj29dj20e",
      duration: "1 year",
      price: 100.0,
      date: "18/01/2022",
      status: "paid",
    },
    {
      id: 6,
      code: "8dj29dj20e",
      duration: "3 year",
      price: 300.0,
      date: "18/01/2022",
      status: "paid",
    },
    {
      id: 7,
      code: "8dj29dj20e",
      duration: "2 year",
      price: 200.0,
      date: "18/01/2022",
      status: "pending",
    },
    {
      id: 8,
      code: "8dj29dj20e",
      duration: "1 year",
      price: 100.0,
      date: "18/01/2022",
      status: "cancelled",
    },
    {
      id: 9,
      code: "8dj29dj20e",
      duration: "2 year",
      price: 200.0,
      date: "18/01/2022",
      status: "redeemed",
    },
  ];

  return (
    <div className="bg-white last-codes-section">
      <div className=" w-full max-w-siteContainer mx-auto relative pt-20 pb-28">
        <div className="w-full flex items-center justify-between">
          <div className="w-1/3">
            <div>
              <h3 className="pb-[10px]">Last codes</h3>
              <p>Find below the last codes you have created</p>
            </div>
          </div>
          <div className="flex flex-grow justify-end">
            <form action="" className="max-w-[310px] flex-grow">
              <div className="relative">
                <span className="absolute top-[15px] left-[15px]">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search code"
                  className="w-full border border-MidGray rounded-full placeholder:text-MidGray placeholder:font-quicksand placeholder:font-bold h-[48px] px-[45px] focus:border-brandBlue"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full mt-[40px]">
          <div className="table bg-white w-full rounded-lg">
            <CodesTableHead />
            {codes.map((item) => (
              <CodesTableRow code={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

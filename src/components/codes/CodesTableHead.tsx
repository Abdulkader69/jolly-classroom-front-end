import DownArrowIcon from "../global/DownArrowIcon";

export default function CodesTableHead() {
  return (
    <div className="table-head flex items-center justify-between bg-SoftGray px-12 py-4 overflow-hidden rounded-head">
      <div className="max-w-[270px] flex-grow">
        <h4>Code</h4>
      </div>
      <div className="max-w-[170px] min-w-[170px] flex-grow">
        <h4>Subscription duration</h4>
      </div>
      <div className="max-w-[205px] min-w-[110px] flex-grow flex items-center justify-between">
        <h4>Creation date</h4>
        <DownArrowIcon />
      </div>
      <div className="max-w-[190px] flex-grow flex items-center justify-between">
        <h4>State</h4>
        <span className="cursor-pointer">
          <DownArrowIcon />
        </span>
      </div>
    </div>
  );
}

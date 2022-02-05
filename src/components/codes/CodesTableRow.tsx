import CopyIcon from "../global/CopyIcon";
import PrintIcon from "../global/PrintIcon";

export default function CodesTableRow({ code }) {
  let statusClass = "bg-SoftGray text-MidGray";
  if (code.status === "redeemed") {
    statusClass = "bg-Yellow/30 text-Yellow/90";
  } else if (code.status === "paid") {
    statusClass = "bg-Green/30 text-Green/80";
  } else if (code.status === "cancelled") {
    statusClass = "bg-red-100 text-red-300";
  }

  return (
    <div className="bg-LightGray table-item flex items-center justify-between px-12 py-4 transition ease-in hover:bg-SoftGray/60">
      <div className="max-w-[270px] flex-grow flex items-center">
        <span className="mr-[10px]">{code.code}</span>
        <button className="bg-BrandBlue/10 w-[36px] h-[36px] rounded-md flex items-center justify-center mx-[5px]">
          <CopyIcon />
        </button>
        <button className="bg-BrandBlue/10 w-[36px] h-[36px] rounded-md flex items-center justify-center mx-[5px]">
          <PrintIcon />
        </button>
      </div>
      <div className="max-w-[170px] flex-grow text-right">
        {code.duration} ({code.price}.00€)
      </div>
      <div className="max-w-[205px] min-w-[110px] flex-grow">{code.date}</div>
      <div className="max-w-[190px] flex-grow text-center">
        <span
          className={`flex items-center justify-center w-full h-[32px] p-[4px] rounded-md text-[12px] ${statusClass} capitalize`}
        >
          {code.status}
        </span>
      </div>
    </div>
  );
}

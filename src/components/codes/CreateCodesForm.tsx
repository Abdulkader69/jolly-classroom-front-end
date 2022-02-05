import { useState, SetStateAction } from 'react';
export default function CreateCodesForm() {
  const years = [
    { id: 1, name: '1 year', value: 1 },
    { id: 2, name: '2 years', value: 2 },
    { id: 3, name: '3 years', value: 3 },
  ];
  const [code, setCode] = useState('');
  const [selectedYear, setSelectedYear] = useState(1);

  const handleCodeInput = (value: SetStateAction<string>) => {
    setCode(value);
  };

  const handleSetYear = (value: SetStateAction<number>) => {
    setSelectedYear(value);
  };

  const handleFormSubmission = () => {
    console.log(`Code: ${code} - Year: ${selectedYear}`);
  };

  return (
    <div className="create-code-section w-full bg-LightGray max-w-siteContainer mx-auto flex relative pt-20 pb-28">
      <div className="w-full flex items-center">
        <div className="w-1/3">
          <div>
            <h3 className="pb-[10px]">Create your codes</h3>
            <p>
              Create codes to sell Jolly Classroom subscriptions to your
              customers
            </p>
          </div>
        </div>
        <div className="w-2/3 pl-[80px]">
          <form action="" className="flex items-center">
            <div className="max-w-[120px] flex-grow">
              <div className="relative">
                <label
                  htmlFor="numberOfCodes"
                  className="font-quicksand font-bold text-BrandBlue text-[12px] block bg-LightGray absolute left-[20px] top-[-9px] px-[5px]"
                >
                  Nº of codes
                </label>
                <input
                  type="text"
                  id="numberOfCodes"
                  name="numberOfCodes"
                  placeholder="0"
                  className="rounded-full w-full border border-BrandBlue h-[48px] bg-transparent px-[20px] py-[3px] placeholder:text-MidGray"
                  onChange={(e) => handleCodeInput(e.target.value)}
                />
                <span className="block text-[12px] text-MidGray w-full absolute text-center bottom-[-20px]">
                  50 codes máx.
                </span>
              </div>
            </div>
            <div className="flex flex-1 justify-between px-[7px]">
              {years.map((year) => {
                return (
                  <button
                    key={year.id}
                    value={year.value}
                    className={`rounded-full px-[10px] bg-white max-w-[100px] w-full h-[48px] shadow-header border mx-[2px] transition-all duration-300 hover:border-BrandBlue ${
                      year.value === selectedYear
                        ? 'selected border-BrandBlue'
                        : 'border-transparent'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSetYear(year.value);
                    }}
                  >
                    {year.name}
                  </button>
                );
              })}
            </div>
            <div className="max-w-[270px] flex-grow">
              <button
                className="rounded-full px-[10px] py-[4px] h-[48px] font-quicksand font-bold w-full text-white bg-BrandBlue disabled:bg-SoftGray disabled:text-[#D5D7E1] disabled:cursor-not-allowed hover:bg-BrandBlue"
                disabled={code ? false : true}
                onClick={(e) => {
                  e.preventDefault();
                  handleFormSubmission();
                }}
              >
                Create Codes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

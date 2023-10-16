import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard2 = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="relative bg-ghostwhite w-full h-[1024px] overflow-hidden text-left text-sm text-light-bulma1 font-montserrat">
      <div className="absolute top-[calc(50%_-_472px)] left-[43px] w-[280px] h-[944px] text-lg text-light-goten">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl [background:linear-gradient(180deg,_#4285f4,_#3c83f9)]" />
        <div className="absolute top-[87.92%] left-[17.86%] text-sm">Help</div>
        <div className="absolute top-[91.84%] left-[17.86%] text-sm">
          Contact Us
        </div>
        <div className="absolute top-[43.64%] left-[31.43%]">Settings</div>
        <div className="absolute top-[37.08%] left-[31.43%]">Users</div>
        <div className="absolute top-[30.51%] left-[31.43%]">Schedules</div>
        <div className="absolute top-[23.94%] left-[31.43%]">Transactions</div>
        <b className="absolute top-[17.37%] left-[31.43%]">Dashboard</b>
        <img
          className="absolute h-[2.2%] w-[6.43%] top-[23.94%] right-[75.71%] bottom-[73.86%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/transaction-icon.svg"
        />
        <img
          className="absolute h-[2.07%] w-[6.96%] top-[30.64%] right-[75.45%] bottom-[67.29%] left-[17.59%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/schedule-icon2.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.43%] top-[17.58%] right-[75.71%] bottom-[80.51%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/dashboard-icon2.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.09%] top-[43.86%] right-[76.06%] bottom-[54.24%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/setting-icon.svg"
        />
        <img
          className="absolute h-[1.91%] w-[6.43%] top-[37.29%] right-[75.71%] bottom-[60.81%] left-[17.86%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/user-icon2.svg"
        />
        <b className="absolute top-[6.36%] left-[17.86%] text-17xl">Board.</b>
      </div>
      <div className="absolute top-[140.5px] left-[390px] w-[1000px] flex flex-row items-start justify-start gap-[17px] text-2xs font-lato">
        <div className="relative w-[237.32px] h-[120px]">
          <div className="absolute top-[0px] left-[0px] shadow-[3px_4px_11px_rgba(98,_98,_98,_0.15)] w-[237.32px] h-[120px]">
            <div className="absolute top-[0px] left-[0px] w-[237.32px] h-[120px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-light-goten box-border border-[2px] border-solid border-gainsboro-100" />
            </div>
            <div className="absolute top-[57.69px] left-[26.84px] w-[133.13px]" />
          </div>
          <div className="absolute top-[18.31px] left-[26.84px] rounded-[50%] bg-mediumaquamarine w-[31.83px] h-[31.83px]" />
          <img
            className="absolute h-[14.37%] w-[7.86%] top-[20.54%] right-[78.05%] bottom-[65.09%] left-[14.08%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector11.svg"
          />
        </div>
        <div className="relative w-[237.32px] h-[120px]">
          <div className="absolute top-[0px] left-[0px] shadow-[3px_4px_11px_rgba(98,_98,_98,_0.15)] w-[237.32px] h-[120px]">
            <div className="absolute top-[0px] left-[0px] w-[237.32px] h-[120px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-light-goten box-border border-[2px] border-solid border-gainsboro-100" />
            </div>
            <div className="absolute top-[57.69px] left-[26.84px] w-[133.13px]" />
          </div>
          <div className="absolute top-[18.31px] left-[26.84px] rounded-[50%] bg-burlywood w-[31.83px] h-[31.83px]" />
          <img
            className="absolute h-[14.33%] w-[6.28%] top-[21.35%] right-[78.85%] bottom-[64.31%] left-[14.88%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector6.svg"
          />
          <div className="absolute top-[57.69px] left-[26.84px] flex flex-row items-end justify-start gap-[18px]">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative inline-block w-[124px]">
                Total Transactions
              </div>
              <b className="relative text-2xl inline-block font-open-sans w-[124px]">
                1,520
              </b>
            </div>
            <div className="relative rounded-15xl bg-honeydew w-[47px] h-6 overflow-hidden shrink-0 text-center text-3xs text-supportive-roshi-100 font-paragraph-text-md-s">
              <div className="absolute top-[4px] left-[9px] tracking-[0.5px] leading-[16px] uppercase font-semibold">
                +1.7%
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[237.32px] h-[120px]">
          <div className="absolute top-[0px] left-[0px] shadow-[3px_4px_11px_rgba(98,_98,_98,_0.15)] w-[237.32px] h-[120px]">
            <div className="absolute top-[0px] left-[0px] w-[237.32px] h-[120px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-light-goten box-border border-[2px] border-solid border-gainsboro-100" />
            </div>
            <div className="absolute top-[57.69px] left-[26.84px] w-[133.13px]" />
          </div>
          <div className="absolute top-[17.38px] left-[23.66px] rounded-[50%] bg-lightpink w-[31.83px] h-[31.83px]" />
          <div className="absolute top-[57.69px] left-[23.66px] flex flex-row items-end justify-start gap-[19px]">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative inline-block w-[124px]">Total Likes</div>
              <b className="relative text-5xl inline-block font-open-sans w-[124px]">
                9,721
              </b>
            </div>
            <div className="relative rounded-15xl bg-honeydew w-[47px] h-6 overflow-hidden shrink-0 text-center text-3xs text-supportive-roshi-100 font-paragraph-text-md-s">
              <div className="absolute top-[4px] left-[8px] tracking-[0.5px] leading-[16px] uppercase font-semibold">
                +1.4%
              </div>
            </div>
          </div>
          <img
            className="absolute h-[14.17%] w-[6.95%] top-[20.66%] right-[79.85%] bottom-[65.17%] left-[13.2%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector12.svg"
          />
        </div>
        <div className="relative w-[237.32px] h-[120px]">
          <div className="absolute top-[0px] left-[0px] shadow-[3px_4px_11px_rgba(98,_98,_98,_0.15)] w-[237.32px] h-[120px]">
            <div className="absolute top-[0px] left-[0px] w-[237.32px] h-[120px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-light-goten box-border border-[2px] border-solid border-gainsboro-100" />
            </div>
            <div className="absolute top-[57.69px] left-[26.84px] w-[133.13px]" />
          </div>
          <div className="absolute top-[18.31px] left-[23.66px] rounded-[50%] bg-lightsteelblue w-[31.83px] h-[31.83px]" />
          <div className="absolute top-[57.69px] left-[23.66px] flex flex-row items-end justify-start gap-[19px]">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative inline-block w-[124px]">Total Users</div>
              <b className="relative text-5xl inline-block font-open-sans w-[124px]">
                9,721
              </b>
            </div>
            <div className="relative rounded-15xl bg-honeydew w-[47px] h-6 overflow-hidden shrink-0 text-center text-3xs text-supportive-roshi-100 font-paragraph-text-md-s">
              <div className="absolute top-[4px] left-[8px] tracking-[0.5px] leading-[16px] uppercase font-semibold">
                +4.2%
              </div>
            </div>
          </div>
          <img
            className="absolute h-[10.97%] w-[8.51%] top-[23.03%] right-[78.94%] bottom-[66%] left-[12.55%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector14.svg"
          />
        </div>
      </div>
      <div className="absolute top-[198px] left-[417px] w-[189px] flex flex-row items-end justify-between text-2xs font-lato">
        <div className="flex flex-col items-start justify-start gap-[2px]">
          <div className="relative inline-block w-[124px]">Total Revenues</div>
          <b className="relative text-2xl inline-block font-open-sans w-[124px]">
            $2,129,430
          </b>
        </div>
        <div className="relative rounded-15xl bg-honeydew w-[47px] h-6 overflow-hidden shrink-0 text-center text-3xs text-supportive-roshi-100 font-paragraph-text-md-s">
          <div className="absolute top-[4px] left-[8px] tracking-[0.5px] leading-[16px] uppercase font-semibold">
            +2.5%
          </div>
        </div>
      </div>
      <div className="absolute top-[242px] left-[390px] w-[1000px] h-[418.33px] font-lato">
        <div className="absolute top-[59.33px] left-[0px] w-[1000px] h-[359px]">
          <div className="absolute h-[101.11%] w-[100.4%] top-[-0.56%] right-[-0.2%] bottom-[-0.56%] left-[-0.2%] rounded-xl bg-light-goten shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro-100" />
        </div>
        <div className="absolute top-[108.33px] left-[808px] inline-block w-[42px]">
          Guest
        </div>
        <div className="absolute top-[108.33px] left-[906px] inline-block w-[34px]">
          User
        </div>
        <b className="absolute top-[89.33px] left-[40px] text-lg inline-block font-montserrat w-[93px]">
          Activities
        </b>
        <div className="absolute top-[0px] left-[40px] w-[124px] h-[133.33px] text-secondary-text font-montserrat">
          <div className="absolute top-[116.33px] left-[0px] inline-block w-[111px]">
            May - June 2021
          </div>
          <img
            className="absolute h-[2.47%] w-[6.45%] top-[0%] right-[0%] bottom-[97.53%] left-[93.55%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector9.svg"
          />
        </div>
        <div className="absolute top-[164.33px] left-[40px] w-[921px] h-[212px] text-secondary-text">
          <div className="absolute top-[0px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              500
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker1" />
          </div>
          <div className="absolute top-[78px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              300
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker1" />
          </div>
          <div className="absolute top-[39px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              400
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker1" />
          </div>
          <div className="absolute top-[117px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              200
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker1" />
          </div>
          <div className="absolute top-[156px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              100
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker1" />
          </div>
          <div className="absolute top-[195px] left-[17.23px] w-[903.77px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[9.12px]">
              0
            </div>
            <div className="absolute top-[9.5px] left-[22.27px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker1" />
          </div>
        </div>
        <div className="absolute top-[113.33px] left-[787.53px] rounded-[50%] bg-light-red w-2.5 h-2.5" />
        <div className="absolute top-[113.33px] left-[885px] rounded-[50%] bg-light-green w-2.5 h-2.5" />
      </div>
      <div className="absolute top-[699px] left-[390px] w-[480px] h-64">
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-[101.56%] w-[100.83%] top-[-0.78%] right-[-0.42%] bottom-[-0.78%] left-[-0.42%] rounded-xl bg-light-goten shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro-100" />
        </div>
        <div className="absolute top-[72px] left-[244px] w-[98px] h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-darkseagreen w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Basic Tees</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
            55%
          </div>
        </div>
        <div className="absolute top-[31px] left-[327px] w-[97px] h-[15px] text-xs text-secondary-text">
          <div className="absolute top-[0px] left-[0px] inline-block w-[97px]">
            May - June 2021
          </div>
        </div>
        <div className="absolute top-[129px] left-[244px] w-[168px] h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-khaki w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Custom Short Pants</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
            31%
          </div>
        </div>
        <div className="absolute top-[186px] left-[244px] w-32 h-9">
          <div className="absolute top-[3px] left-[0px] rounded-[50%] bg-lightcoral w-[11px] h-[11px]" />
          <b className="absolute top-[0px] left-[21px]">Super Hoodies</b>
          <div className="absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text">
            14%
          </div>
        </div>
        <b className="absolute top-[30px] left-[40px] text-lg">Top products</b>
      </div>
      <img
        className="absolute h-[0.52%] w-[0.35%] top-[47.46%] right-[5.56%] bottom-[52.03%] left-[94.1%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/schedules-card.svg"
      />
      <div className="absolute top-[615px] left-[569px] w-[648px] h-[19px] text-secondary-text font-open-sans">
        <div className="absolute top-[0px] left-[0px] font-lato">Week 1</div>
        <div className="absolute top-[0px] left-[200px]">Week 2</div>
        <div className="absolute top-[0px] left-[400px]">Week 3</div>
        <div className="absolute top-[0px] left-[600px]">Week 4</div>
      </div>
      <div className="absolute top-[71px] left-[390px] w-[1000px] h-[32.93px] text-5xl">
        <b className="absolute top-[0px] left-[0px]">Dashboard</b>
        <div className="absolute top-[0px] left-[713px] w-[197.6px] h-[32.93px] text-sm text-light-grey font-lato">
          <input
            className="[border:none] bg-[transparent] absolute top-[0px] left-[0px] w-[197.6px] h-[32.93px]"
            type="text"
          />
          <div className="absolute top-[6px] left-[15px]">Search...</div>
          <img
            className="absolute top-[9px] left-[153px] w-[12.71px] h-3"
            alt=""
            src="/search-icon.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[970px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/mask-group@2x.png"
        />
        <img
          className="absolute h-[63.43%] w-[1.8%] top-[19.91%] right-[5.76%] bottom-[16.67%] left-[92.44%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector15.svg"
        />
      </div>
      <img
        className="absolute h-[19.04%] top-[40.53%] bottom-[40.43%] left-[calc(50%_-_167.22px)] rounded max-h-full w-[38.41px]"
        alt=""
        src="/bar-1-1.svg"
      />
      <img
        className="absolute h-[13.47%] top-[46.13%] bottom-[40.4%] left-[calc(50%_+_29.64px)] rounded max-h-full w-[38.41px]"
        alt=""
        src="/bar-1-11.svg"
      />
      <img
        className="absolute h-[15.35%] top-[44.24%] bottom-[40.4%] left-[calc(50%_+_429.64px)] rounded max-h-full w-[38.41px]"
        alt=""
        src="/bar-1-12.svg"
      />
      <img
        className="absolute h-[7.51%] top-[52.08%] bottom-[40.4%] left-[calc(50%_+_229px)] rounded max-h-full w-[38.41px]"
        alt=""
        src="/bar-1-13.svg"
      />
      <img
        className="absolute h-[15.23%] top-[44.47%] bottom-[40.3%] left-[calc(50%_-_118.91px)] rounded max-h-full w-[38.41px]"
        alt=""
        src="/bar-1-14.svg"
      />
      <img
        className="absolute h-[17.1%] top-[42.6%] bottom-[40.3%] left-[calc(50%_+_77.95px)] rounded max-h-full w-[38.41px]"
        alt=""
        src="/bar-1-15.svg"
      />
      <img
        className="absolute h-[13.03%] top-[46.67%] bottom-[40.3%] left-[calc(50%_+_477.95px)] rounded max-h-full w-[38.41px]"
        alt=""
        src="/bar-1-16.svg"
      />
      <img
        className="absolute h-[11.43%] top-[48.27%] bottom-[40.3%] left-[calc(50%_+_277.32px)] rounded max-h-full w-[38.41px]"
        alt=""
        src="/bar-1-17.svg"
      />
      <div className="absolute top-[775px] left-[430px] w-[141.98px] h-[141.98px]">
        <div className="absolute top-[0px] left-[0px] w-[141.98px] h-[141.98px]">
          <img
            className="absolute h-[99.93%] w-[72.39%] top-[-0.11%] right-[43.65%] bottom-[0.18%] left-[-16.04%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/donut-chart1.svg"
          />
          <div className="absolute h-[20.29%] top-[41.3%] bottom-[38.41%] left-[calc(50%_-_28.49px)]" />
        </div>
        <img
          className="relative w-[79.22px] h-[141.97px]"
          alt=""
          src="/donut-12.svg"
        />
        <img
          className="relative w-[76.84px] h-[79.45px]"
          alt=""
          src="/donut-11.svg"
        />
        <img
          className="absolute h-[11.34%] w-[11.67%] top-[88.53%] right-[47.87%] bottom-[0.13%] left-[40.46%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/ellipse-41.svg"
        />
      </div>
      <div className="absolute top-[699px] left-[910px] w-[480px] h-64 text-base text-secondary-text font-paragraph-text-md-s">
        <div className="absolute h-[101.56%] w-[100.83%] top-[-0.78%] right-[-0.42%] bottom-[-0.78%] left-[-0.42%] rounded-xl bg-light-goten shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro-100" />
        <div className="absolute h-[45.62%] w-[17.08%] top-[27.19%] right-[41.46%] bottom-[27.19%] left-[41.46%] flex flex-col items-center justify-center gap-[16px]">
          <img
            className="relative w-[76.78px] h-[76.78px] cursor-pointer"
            alt=""
            src="/group-75582.svg"
            onClick={onGroupClick}
          />
          <div className="relative leading-[24px] font-semibold">
            Add Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;

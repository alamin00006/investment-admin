import React from "react";

const Financials = () => {
  return (
    <div className="form-style1">
      <div className="row">
        <h4 className="title fz17 mb40 mt30">Asset Value</h4>
        {/* End col-12 */}

        {/* <SelectMulitField /> */}

        <div className="col-sm-6 col-xl-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Total Project Value :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Total Project Value"
              name="totalProjectValue"
            />
          </div>
        </div>
        <div className="col-sm-6 col-xl-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Minimum Investment Value :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Total Investment Value"
              name="minimumInvestmentValue"
            />
          </div>
        </div>
        {/* End col-4 */}

        <div className="col-sm-6 col-xl-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Notary fee (0.75%) :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Notary fee"
              name="notaryFee"
            />
          </div>
        </div>
        <div className="col-sm-6 col-xl-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Sharikana fee (5%) :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Sharikana Fee"
              name="sharikanaFee"
            />
          </div>
        </div>
      </div>
      <h4 className="title fz17 mb40 mt30">Annual Return</h4>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Annual return :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Annual return Value"
              name="yearlyReturnValue"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Half Yearly Return :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Half Yearly Return Value"
              name="halfYearlyRetunrValue"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Monthly return :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Monthly Return Value"
              name="monthlyReturnValue"
            />
          </div>
        </div>

        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Project annual capital appreciation:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Project annual capital appreciation"
              name="projectAnnualCapitalAppreciation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;

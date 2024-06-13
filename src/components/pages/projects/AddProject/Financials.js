import { toLocaleString } from "@/data/mobileMenuItems";
import React from "react";

const Financials = ({
  setAssetValue,
  setNotaryFee,
  setSharikanaFee,
  projectValue,
}) => {
  return (
    <div className="form-style1 asset-Value">
      <div className="row">
        <h4 className="title fz17 mb40 mt30">Asset Value</h4>
        {/* End col-12 */}

        {/* <SelectMulitField /> */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Project Asset Value :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Total Project Value"
              name="projectAssetValue"
              onChange={(e) => setAssetValue(e.target.value)}
            />
          </div>
        </div>

        {/* End col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Notary fee (0.75%) :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Notary fee"
              name="notaryFee"
              onChange={(e) => setNotaryFee(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Sharikana fee (5%) :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Sharikana Fee"
              name="sharikanaFee"
              onChange={(e) => setSharikanaFee(e.target.value)}
            />
          </div>
        </div>
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
              disabled
              value={projectValue}
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
      </div>
      <h4 className="title fz17 mb40 mt30">Return</h4>
      <div className="row">
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Annual Return minimum:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Annual return Value"
              name="yearlyReturnValueMinimum"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Annual Return maximum:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Annual return Value"
              name="yearlyReturnValueMaximum"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Half Yearly Return minimum:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Half Yearly Return Value"
              name="halfYearlyRetunrValueMinimum"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Half Yearly Return maximum:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Half Yearly Return Value"
              name="halfYearlyRetunrValueMaximum"
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

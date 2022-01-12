import React, { useState } from "react"
import roundToTwo from "../utils/calculatePrice"

const Position = ({ removePosition, id }) => {
  const minus50 = value => roundToTwo(value - value * 0.5)

  const minus30 = value => roundToTwo(value - value * 0.3)

  const minus15 = value => roundToTwo(value - value * 0.15)

  const plus10 = value => roundToTwo(value * 0.1 + value)

  const plus30 = value => roundToTwo(value * 0.3 + value)

  const plus50 = value => roundToTwo(value * 0.5 + value)

  const [value, setValue] = useState(0)

  return (
    <>
      <article className="message m-6">
        <div className="message-header">
          <p>Position</p>
          <button
            className="delete"
            aria-label="delete"
            onClick={() => removePosition(id)}
          ></button>
        </div>
        <div className="box">
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label">Contract</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Price"
                    onChange={e => setValue(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label">Symbol</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Ticker" />
                </div>
                <p className="help">Optional</p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label has-text-danger">-50%</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="SL"
                    value={!isNaN(value) ? minus50(value) : ""}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label has-text-danger">-30%</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="SL"
                    value={!isNaN(value) ? minus30(value) : ""}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label has-text-danger">-15%</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="SL"
                    value={!isNaN(value) ? minus15(value) : ""}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label has-text-primary-dark">+10%</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={!isNaN(value) ? plus10(value) : ""}
                    readOnly={true}
                  />
                </div>

                <p className="help">OK to grab alert under 10%</p>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label has-text-primary-dark">+30%</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={!isNaN(value) ? plus30(value) : ""}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <label className="label has-text-primary-dark">+50%</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={!isNaN(value) ? plus50(value) : ""}
                    readOnly={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Position

import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          {/* konten 1 */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* data 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineering</h3>
                <span className="qualification__subtitle">
                  Indonesia - Public Vocational High School 4 Malang
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2019-2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* data 2 */}
            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">test</h3>
                <span className="qualification__subtitle">
                  Public Vocational High School 4 Malang
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil- calendar-alt">2019-2022</i>
                </div>
              </div>
            </div>
            {/* data 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineering</h3>
                <span className="qualification__subtitle">
                  Indonesia - Public Vocational High School 4 Malang
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2019-2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* data 4 */}
            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">test</h3>
                <span className="qualification__subtitle">
                  Public Vocational High School 4 Malang
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil- calendar-alt">2019-2022</i>
                </div>
              </div>
            </div>
          </div>
          {/* konten 2 */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            {/* data 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Engineering 2</h3>
                <span className="qualification__subtitle">
                  Indonesia - Public Vocational High School 4 Malang
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2019-2022</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            {/* data 2 */}
            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">test 2</h3>
                <span className="qualification__subtitle">
                  Public Vocational High School 4 Malang
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil- calendar-alt">2019-2022</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

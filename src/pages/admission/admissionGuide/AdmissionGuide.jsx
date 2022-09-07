import React from "react";
import Navigation from "../../../components/Navigation/Navigation";
import Banner from "../../../image/admission.jpg";
import Footer from "../../footer/Footer";
import "./AdmissionGuide.css";

const AdmissionGuide = () => {
  return (
    <div>
      <Navigation />
      <div className="imgHeader">
        <img src={Banner} alt="nasdec royal school building" id="overlay" />
        {/* <h1> Contact Us</h1> */}
      </div>
      <div className="admissionContent">
        <h1>Admission Procedure for Nursery/Basic School</h1>
        <ul className="admissionList">
          <li>Purchase an application form for =N= 6,000.00</li>
          <li>
            Submit application form with the following documents: 2 recent
            Passport Photographs (not more than 6 months old). Photocopy of
            candidate’s birth certificate.
          </li>
          <li>
            Informal assessment for preschoolers and entrance exam for Primary
            1-5
          </li>
          <li>
            Successful candidates will be informed via sms, email or phone call.
          </li>
          <li>A provisional letter of admission is issued for collection.</li>
          <li>
            Acceptance letter signed and returned with all required payment.
          </li>
          <li>Payments are made through a designated bank</li>
          <li>
            Applicants will be informed on the scheduled date for entrance.
          </li>
        </ul>

        <br />
        <br />
        <h1>Admission to Junior School</h1>
        <p>
          Students seeking admission into JSS 1/Year 7 will take the standard
          entrance examination consisting of three papers (English, Mathematics
          and Non-verbal Reasoning). <br /> The tests are designed to assess and
          analyse a candidate’s current academic level, taking into account the
          prior level learning within the context of the national Primary
          curriculum at a level to Primary Year 5. There are no practice papers.
          The school simply wants to know the individual applicants academic
          level relative to the three papers on the day.
        </p>

        <br />
        <br />
        <h2>Admission Procedure</h2>
        <br />
        <p>
          <b>STEP 1:</b> Obtain an application form (=N= 5,000.00)
        </p>
        <p>
          <b>STEP 2:</b> Submit completed application form with the following
          documents: Photocopy of original birth certificate. Two (2) recent
          passport photographs.
        </p>
        <p>
          <b>STEP 3:</b> Decide when convenient to take the assessment and
          inform the school. As a matter of policy, we do not publish or discuss
          candidates’ scores.
        </p>
        <p>
          <b>STEP 4:</b> A brief interview of about 30mins conducted by the Head
          of School with the candidate and parents in attendance (where
          possible) is part of our initial assessment process.
        </p>
        <p>
          <b>STEP 5:</b> An offer of provisional admission is made to a
          successful candidate pending the payment of the acceptance fees.
        </p>

        <p>
          <b>STEP 6:</b> The acceptance fees has to be paid by the date
          indicated on the admission/offer letter in order to secure or
          guarantee a place at Nasdec Royal School.
        </p>
        <p>
          Admission will not be based on ethnic, religious or social grounds. As
          many students transfer from various curricula, prospective students
          are required to take an entrance examination. We also conduct an
          informal interview with the student which forms part of the overall
          assessment. <br />
          Admission is at the school’s discretion and the school’s decision is
          final. However, unsuccessful applicants may apply again at a later
          date if they believe they will perform better at the entrance
          examinations. <br />
          The school’s objective is not to arbitrarily exclude students but
          rather to select the most suitable applicants based on the school’s
          assessment criteria including the prospective student’s academic
          performance and potential. Only if a student fails to show basic
          understanding, or shows a lack of potential will they be refused
          admission. <br />
          The school will provide an admission pack with all school information,
          the long-term calendar, and uniform lists. Uniforms are available from
          designated outfitters. It is important to organize and book items well
          ahead of resumption.
        </p>

        <br />
        <br />
        <h2>For Secondary School Transfer Student</h2>
        <p>
          For students joining at JS2 and other classes, the offer of admission
          is made following the submission of completed questionnaires,
          reference letters and recent reports from the child’s previous school.
          <br />
          Transfer students are also required to sit for examinations:
        </p>
        <ul className="admissionList">
          <li>
            English language, Mathematics and Basic science for Junior Secondary
            School
          </li>
          <li>
            English language, Mathematics and Biology for Senior Secondary
            School Admission Policy
          </li>
          <li>
            Nasdec Royal Schools will admit students/pupils in line with the
            school’s philosophy and professional discretion of the school.
          </li>
          <li>
            Students seeking admission into Year 7 at the start of a school year
            in September must reach the age of 10 years by the 30th September in
            that same year.
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default AdmissionGuide;

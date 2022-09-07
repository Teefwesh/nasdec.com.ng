import React from "react";
import "./FaqRight.css";

const FaqRight = () => {
  return (
    <div className="rightSide">
      <h3>1. What is admission process</h3>
      <br />
      <p>
        An interview is scheduled for candidates in Nursery One while a written
        test is first administered to candidates in other classes, followed by
        an oral interview. <br />A provisional Letter of Admission, Parents’
        Undertaking and Illness Indemnity forms are issued to successful
        candidates within the space of one week after the interview. <br />
        Acceptance of admission must be communicated after payment of fees has
        been made in designated banks and proof of payment sent to the business
        office within a period of two weeks. <br /> Parents receive a welcome
        pack giving them information on what and how they are expected to
        prepare the child(ren) for resumption.
      </p>

      <br />
      <br />
      <h3>2. What age is eligible?</h3>
      <br />
      <p>
        Creche: 3 months <br />
        Play Class: 18 Months <br />
        Nursery One: 3 years <br />
        Primary: 5 Years <br />
        Secondary: 11 Years
      </p>
      <br />
      <br />

      <h3>3. What is the cost of admission form?</h3>
      <br />
      <p>
        Application forms for Creche, Play Class and Nursery cost N5,000.00
        (Five thousand naira) only. <br /> Application forms for Primary cost
        N10, 000.00 (Ten thousand naira) only <br /> Application forms for
        Secondary cost N15, 000.00 (Fifteen thousand naira) only
      </p>

      <br />
      <br />
      <h3>4. What do student like about Nasdec Royal School?</h3>
      <br />
      <ul className="learningList faqList">
        <li>The teachers really want to help you</li>
        <li>Happy atmosphere</li>
        <li>It’s cool to do well here</li>
      </ul>

      <br />
      <br />
      <h3>5. What are the main strengths of the school?</h3>
      <br />
      <ul className="learningList faqList">
        <li>Committed teachers with high expectations of pupils</li>
        <li>Adherence to the ideal of an all-round education</li>
        <li>High quality pastoral care</li>
        <li>Keeping pupils/students challenged and interested in learning</li>
        <li>Personalised programmes of support</li>
        <li>Small class sizes</li>
      </ul>
    </div>
  );
};

export default FaqRight;

import React from 'react';

import './Terms.scss';

import { Navbar } from '../../../components';
import { Footer } from '../../../container';

const Terms = () => {
  return (
    <div>
        <Navbar />

        <section className="heading-link">
            <h3>Terms and Conditions</h3>
            <p> <a href="/">home</a> / terms </p>
        </section>

        <section className="content">
            <h3>
              These are some Terms and Conditions you have to follow while using our website : 
            </h3><br />

            <div className="terms">
              <p><span>1. Use of TestWizard:</span> By accessing and using the TestWizard website, you agree to be bound by these terms
                  and conditions.
                  If you do not agree with these terms and conditions, you should not use the TestWizard website.
              </p><br />

              <p><span>2. User Account:</span> To access some of the features of TestWizard, you may need to create a user account. You
                  agree to provide
                  accurate and complete information when creating your account, and to keep your account information
                  up-to-date. You are
                  responsible for maintaining the confidentiality of your account login information and for all activities
                  that occur
                  under your account.</p><br />

              <p><span>3. Intellectual Property:</span> The content of the TestWizard website, including text, graphics, logos, images,
                  and software, is
                  the property of TestWizard or its content suppliers and is protected by copyright and other intellectual
                  property laws.
                  You may not use any of this content without prior written permission from TestWizard.</p><br />

              <p><span>4. Use of Content:</span> You may access and use the content of TestWizard for personal, non-commercial use only.
                  You may not
                  modify, reproduce, distribute, display, or perform the content of TestWizard without prior written
                  permission from
                  TestWizard.</p><br />

              <p><span>5. User Conduct:</span> You agree to use TestWizard only for lawful purposes and in accordance with these terms
                  and conditions.
                  You may not use TestWizard to engage in any conduct that could damage, disable, overburden, or impair
                  TestWizard or its
                  servers, or interfere with any other party's use of TestWizard.</p><br />
                  
              <p><span>6. Disclaimer:</span> TestWizard provides its services "as is" and makes no warranties, express or implied, with
                  respect to the
                  content of the TestWizard website or the accuracy or completeness of any information contained on the
                  TestWizard
                  website. TestWizard disclaims all warranties, express or implied, including, without limitation, implied
                  warranties of
                  merchantability, fitness for a particular purpose, and non-infringement.</p><br />

              <p><span>7. Limitation of Liability:</span> In no event shall TestWizard or its affiliates be liable for any direct,
                  indirect, incidental,
                  special, or consequential damages arising out of or in connection with the use or inability to use the
                  TestWizard
                  website, even if TestWizard has been advised of the possibility of such damages.</p><br />

              <p><span>8. Changes to Terms and Conditions:</span> TestWizard reserves the right to change these terms and conditions at
                  any time without
                  prior notice. Your continued use of TestWizard after any such changes constitutes your acceptance of the
                  new terms and
                  conditions.</p><br />

              <p><span>9. Governing Law:</span> These terms and conditions shall be governed by and construed in accordance with the laws
                  of the
                  jurisdiction where TestWizard is based, without regard to conflicts of law principles.</p><br />

              <p><span>10. Third-Party Websites:</span> TestWizard may provide links to third-party websites that are not owned or
                  controlled by
                  TestWizard. TestWizard has no control over, and assumes no responsibility for, the content, privacy
                  policies, or
                  practices of any third-party websites. You acknowledge and agree that TestWizard shall not be
                  responsible or liable,
                  directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with
                  use of or
                  reliance on any such content, goods, or services available on or through any such third-party websites.
              </p><br />

              <p><span>11. Termination:</span> TestWizard may terminate your access to the TestWizard website at any time, without notice,
                  if it believes,
                  in its sole discretion, that you have violated these terms and conditions or any applicable law or
                  regulation.</p><br />

              <p><span>12. Indemnification:</span> You agree to indemnify, defend, and hold harmless TestWizard and its affiliates,
                  officers, directors,
                  employees, agents, and licensors from and against any claims, actions, suits, or proceedings, as well as
                  any and all
                  losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising out of
                  or in connection
                  with your use of the TestWizard website or your breach of these terms and conditions.</p><br />

              <p><span>13. User Submissions:</span> TestWizard may allow you to submit comments, feedback, suggestions, or other
                  information to TestWizard
                  through the TestWizard website. You agree that any such submissions will be deemed non-confidential and
                  non-proprietary,
                  and TestWizard shall have no obligation of any kind with respect to such submissions. You warrant that
                  any such
                  submissions are your own original work, and that you have the right to make such submissions without
                  violating any
                  third-party rights.</p><br />

              <p><span>14. Entire Agreement:</span> These terms and conditions constitute the entire agreement between you and TestWizard
                  with respect to
                  your use of the TestWizard website, and supersede all prior or contemporaneous communications and
                  proposals, whether
                  oral or written, between you and TestWizard.</p><br />

              <p><span>15. Waiver and Severability:</span> The failure of TestWizard to enforce any right or provision of these terms and
                  conditions shall
                  not be deemed a waiver of such right or provision. If any provision of these terms and conditions is
                  found by a court of
                  competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to
                  give effect to
                  the parties' intentions as reflected in the provision, and the other provisions of these terms and
                  conditions shall
                  remain in full force and effect.</p><br />
          </div>
      </section>

        <Footer />
    </div>
  )
}

export default Terms
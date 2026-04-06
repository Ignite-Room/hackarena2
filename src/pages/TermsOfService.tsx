import type { FC } from "react";
import { LegalLayout } from "./LegalLayout";

export const TermsOfService: FC = () => (
  <LegalLayout title="Terms of Service">
    <p>
      These Terms of Service ("Terms") govern your participation in <strong>HackArena 2.0</strong>,
      organized by <strong>Ignite Room</strong>. By registering or participating, you agree to these Terms.
    </p>

    <h2>1. Eligibility</h2>
    <ul>
      <li>Participants must be currently enrolled students at a recognized educational institution in India.</li>
      <li>Participants must be at least 18 years of age, or have parental/guardian consent.</li>
      <li>Employees and immediate family members of Ignite Room and its affiliates are not eligible.</li>
    </ul>

    <h2>2. Registration & Participation</h2>
    <ul>
      <li>Registration must be completed via the official Unstop platform.</li>
      <li>Each team may participate in <strong>only one zonal round</strong>. Participating in multiple zonals is strictly prohibited and will result in immediate disqualification.</li>
      <li>If any team member is found participating with a different team in another zonal, <strong>both teams</strong> will be disqualified.</li>
      <li>All registration information must be accurate and truthful.</li>
    </ul>

    <h2>3. Intellectual Property</h2>
    <ul>
      <li>All projects created during HackArena 2.0 remain the intellectual property of the respective teams.</li>
      <li>Teams grant Ignite Room a non-exclusive, royalty-free license to showcase, feature, and promote submitted projects for marketing purposes.</li>
      <li>Submissions must be original work. Use of pre-existing codebases must be clearly disclosed.</li>
    </ul>

    <h2>4. Code of Conduct</h2>
    <p>
      All participants must adhere to our <a href="/code-of-conduct">Code of Conduct</a>. Violations may result in
      disqualification and removal from the event.
    </p>

    <h2>5. Prizes & Awards</h2>
    <ul>
      <li>Prize distribution is at the sole discretion of Ignite Room and its judging panel.</li>
      <li>Prizes are non-transferable and cannot be exchanged for cash (unless specified as cash prizes).</li>
      <li>Winners may be required to provide valid identification and tax documentation.</li>
      <li>Taxes on prizes, if applicable, are the responsibility of winners.</li>
    </ul>

    <h2>6. Liability</h2>
    <p>
      Ignite Room is not liable for any loss, damage, or injury sustained during HackArena 2.0 events,
      including travel to/from venues. Participants attend at their own risk.
    </p>

    <h2>7. Modifications</h2>
    <p>
      We reserve the right to modify event schedules, rules, prize structures, or these Terms at any time.
      Participants will be notified of material changes via email.
    </p>

    <h2>8. Governing Law</h2>
    <p>
      These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
      jurisdiction of courts in New Delhi.
    </p>

    <h2>9. Contact</h2>
    <p>
      Questions about these Terms? Email us at <a href="mailto:admin@igniteroom.in">admin@igniteroom.in</a>.
    </p>
  </LegalLayout>
);

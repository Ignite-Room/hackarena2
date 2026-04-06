import type { FC } from "react";
import { LegalLayout } from "./LegalLayout";

export const PrivacyPolicy: FC = () => (
  <LegalLayout title="Privacy Policy">
    <p>
      This Privacy Policy describes how <strong>Ignite Room</strong> ("we", "our", or "us") collects,
      uses, and protects your personal information when you use the HackArena 2.0 website and participate
      in our events.
    </p>

    <h2>1. Information We Collect</h2>
    <h3>Personal Information</h3>
    <p>When you register for HackArena 2.0, we may collect:</p>
    <ul>
      <li>Full name, email address, and phone number</li>
      <li>Educational institution and year of study</li>
      <li>Team details and project submissions</li>
      <li>GitHub, LinkedIn, or other professional profile links</li>
    </ul>

    <h3>Automatically Collected Information</h3>
    <ul>
      <li>Device information (browser type, operating system)</li>
      <li>IP address and approximate geographic location</li>
      <li>Pages visited, time spent, and interaction data</li>
      <li>Cookies and similar tracking technologies</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <ul>
      <li>Processing your hackathon registration and participation</li>
      <li>Communicating event updates, schedules, and announcements</li>
      <li>Evaluating submissions and determining winners</li>
      <li>Improving our events and website experience</li>
      <li>Sharing with sponsors and partners (with your consent)</li>
      <li>Complying with legal obligations</li>
    </ul>

    <h2>3. Data Sharing</h2>
    <p>
      We do not sell your personal information. We may share data with trusted third parties including
      event sponsors, venue partners, and technology providers solely for event-related purposes.
      Registration is processed via <strong>Unstop</strong>, whose own privacy policy applies to data
      collected on their platform.
    </p>

    <h2>4. Data Security</h2>
    <p>
      We implement industry-standard security measures to protect your data, including encryption in
      transit (HTTPS), secure storage, and access controls. However, no method of electronic transmission
      or storage is 100% secure.
    </p>

    <h2>5. Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
      <li>Access, correct, or delete your personal data</li>
      <li>Withdraw consent for data processing</li>
      <li>Request a copy of your data in a portable format</li>
      <li>Object to certain types of data processing</li>
    </ul>

    <h2>6. Data Retention</h2>
    <p>
      We retain personal data for as long as necessary to fulfill the purposes described in this policy,
      typically for up to 2 years after the event concludes, unless a longer retention period is required
      by law.
    </p>

    <h2>7. Contact Us</h2>
    <p>
      For privacy-related inquiries, contact us at{" "}
      <a href="mailto:admin@igniteroom.in">admin@igniteroom.in</a>.
    </p>
  </LegalLayout>
);

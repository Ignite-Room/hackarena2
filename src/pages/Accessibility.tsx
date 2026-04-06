import type { FC } from "react";
import { LegalLayout } from "./LegalLayout";

export const Accessibility: FC = () => (
  <LegalLayout title="Accessibility">
    <p>
      Ignite Room is committed to ensuring that HackArena 2.0 is accessible and inclusive for all
      participants, including those with disabilities.
    </p>

    <h2>1. Website Accessibility</h2>
    <p>We strive to meet WCAG 2.1 Level AA standards. Our website includes:</p>
    <ul>
      <li>Semantic HTML structure for screen reader compatibility</li>
      <li>Keyboard navigable interactive elements</li>
      <li>Sufficient color contrast ratios</li>
      <li>Descriptive alt text for images</li>
      <li>Responsive design for all device sizes</li>
    </ul>

    <h2>2. Event Accessibility</h2>
    <p>At our physical events, we provide:</p>
    <ul>
      <li>Wheelchair-accessible venues where possible</li>
      <li>Accommodation for dietary restrictions (vegetarian, vegan, allergies)</li>
      <li>Quiet spaces for participants who need them</li>
      <li>Flexible participation options where feasible</li>
    </ul>

    <h2>3. Accommodation Requests</h2>
    <p>
      If you require specific accommodations to participate in HackArena 2.0, please reach out to us at
      least 7 days before the event at <a href="mailto:admin@igniteroom.in">admin@igniteroom.in</a>. We
      will do our best to accommodate your needs.
    </p>

    <h2>4. Feedback</h2>
    <p>
      We welcome feedback on the accessibility of our website and events. If you encounter any barriers
      or have suggestions for improvement, please email us at{" "}
      <a href="mailto:admin@igniteroom.in">admin@igniteroom.in</a>.
    </p>

    <h2>5. Continuous Improvement</h2>
    <p>
      We are continuously working to improve the accessibility and usability of the HackArena 2.0
      experience. We regularly review our website and event procedures to identify and address accessibility
      barriers.
    </p>
  </LegalLayout>
);

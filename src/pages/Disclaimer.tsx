import type { FC } from "react";
import { LegalLayout } from "./LegalLayout";

export const Disclaimer: FC = () => (
  <LegalLayout title="Disclaimer">
    <p>
      The information provided on the HackArena 2.0 website is for general informational purposes only.
      While we strive to keep information accurate and up-to-date, Ignite Room makes no representations
      or warranties of any kind about the completeness, accuracy, reliability, or availability of the
      information, products, services, or related graphics contained on this website.
    </p>

    <h2>1. Event Information</h2>
    <ul>
      <li>Event dates, venues, and schedules are subject to change without prior notice.</li>
      <li>Prize amounts and sponsor benefits are indicative and may be modified.</li>
      <li>We reserve the right to cancel, postpone, or modify the event due to unforeseen circumstances.</li>
    </ul>

    <h2>2. External Links</h2>
    <p>
      This website may contain links to external sites (e.g., Unstop for registration). Ignite Room has
      no control over the content, privacy policies, or practices of third-party websites and assumes no
      responsibility for them.
    </p>

    <h2>3. No Professional Advice</h2>
    <p>
      Nothing on this website constitutes professional, legal, or financial advice. Participants should
      seek independent advice where necessary.
    </p>

    <h2>4. Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by applicable law, Ignite Room shall not be liable for any indirect,
      incidental, special, consequential, or punitive damages arising from your participation in HackArena
      2.0 or use of this website.
    </p>

    <h2>5. Media & Photography</h2>
    <p>
      By attending HackArena 2.0, you consent to being photographed, filmed, or recorded. These materials
      may be used for promotional purposes. If you do not wish to be featured, please notify the organizing
      team at the event.
    </p>

    <h2>6. Contact</h2>
    <p>
      For any questions or concerns regarding this disclaimer, please contact{" "}
      <a href="mailto:admin@igniteroom.in">admin@igniteroom.in</a>.
    </p>
  </LegalLayout>
);

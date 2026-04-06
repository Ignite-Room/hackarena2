import type { FC } from "react";
import { LegalLayout } from "./LegalLayout";

export const CodeOfConduct: FC = () => (
  <LegalLayout title="Code of Conduct">
    <p>
      HackArena 2.0 is dedicated to providing a safe, respectful, and harassment-free experience for
      everyone, regardless of gender, gender identity, sexual orientation, disability, physical appearance,
      race, ethnicity, age, religion, or technology choices.
    </p>

    <h2>1. Expected Behavior</h2>
    <ul>
      <li>Be respectful, considerate, and collaborative.</li>
      <li>Exercise empathy and kindness toward other participants.</li>
      <li>Respect differing viewpoints and experiences.</li>
      <li>Give and gracefully accept constructive feedback.</li>
      <li>Focus on what is best for the community and the event.</li>
    </ul>

    <h2>2. Unacceptable Behavior</h2>
    <ul>
      <li>Harassment, intimidation, or discrimination in any form.</li>
      <li>Offensive verbal comments related to personal characteristics.</li>
      <li>Inappropriate physical contact or unwelcome attention.</li>
      <li>Deliberate sabotage of other teams' work or submissions.</li>
      <li>Publishing others' private information without consent.</li>
      <li>Disruptive behavior during presentations, workshops, or judging.</li>
      <li>Any form of plagiarism or presentation of others' work as your own.</li>
    </ul>

    <h2>3. Academic Integrity</h2>
    <ul>
      <li>All code submitted must be written during the hackathon window.</li>
      <li>Use of open-source libraries is permitted but must be disclosed.</li>
      <li>AI-generated code is permitted, but the ideation and integration must be original.</li>
      <li>Pre-existing projects may not be submitted.</li>
    </ul>

    <h2>4. Consequences</h2>
    <p>
      Participants asked to stop unacceptable behavior are expected to comply immediately. Violations may
      result in:
    </p>
    <ul>
      <li>A verbal warning from organizers.</li>
      <li>Removal from the event without refund or compensation.</li>
      <li>Disqualification from current and future Ignite Room events.</li>
      <li>Reporting to relevant authorities if required by law.</li>
    </ul>

    <h2>5. Reporting</h2>
    <p>
      If you experience or witness unacceptable behavior, please report it immediately to event organizers
      or email <a href="mailto:admin@igniteroom.in">admin@igniteroom.in</a>. All reports will be handled
      with discretion and confidentiality.
    </p>

    <h2>6. Scope</h2>
    <p>
      This Code of Conduct applies to all HackArena 2.0 events, venues, online platforms, and
      communications, including social media channels associated with the event.
    </p>
  </LegalLayout>
);

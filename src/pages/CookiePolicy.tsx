import type { FC } from "react";
import { LegalLayout } from "./LegalLayout";

export const CookiePolicy: FC = () => (
  <LegalLayout title="Cookie Policy">
    <p>
      This Cookie Policy explains how <strong>Ignite Room</strong> uses cookies and similar tracking
      technologies on the HackArena 2.0 website.
    </p>

    <h2>1. What Are Cookies?</h2>
    <p>
      Cookies are small text files stored on your device when you visit a website. They help the site
      remember your preferences and improve your browsing experience.
    </p>

    <h2>2. Types of Cookies We Use</h2>

    <h3>Essential Cookies</h3>
    <p>
      Required for the website to function properly. These cannot be disabled. They handle basic
      functions like page navigation and access to secure areas.
    </p>

    <h3>Analytics Cookies</h3>
    <p>
      Help us understand how visitors interact with our website by collecting anonymous usage data.
      We use this to improve the website experience.
    </p>

    <h3>Functional Cookies</h3>
    <p>
      Remember your preferences such as theme settings and language choices to provide a personalized
      experience.
    </p>

    <h2>3. Third-Party Cookies</h2>
    <p>
      Our website may include content or services from third parties (e.g., Unstop registration,
      embedded videos). These third parties may set their own cookies. We have no control over
      third-party cookies.
    </p>

    <h2>4. Managing Cookies</h2>
    <p>
      You can control cookies through your browser settings. Most browsers allow you to:
    </p>
    <ul>
      <li>View and delete existing cookies</li>
      <li>Block all or specific cookies</li>
      <li>Set preferences for certain websites</li>
    </ul>
    <p>
      Please note that disabling cookies may affect the functionality of our website.
    </p>

    <h2>5. Updates to This Policy</h2>
    <p>
      We may update this Cookie Policy from time to time. Changes will be posted on this page with an
      updated "Last Modified" date.
    </p>

    <h2>6. Contact</h2>
    <p>
      Questions about our use of cookies? Contact us at{" "}
      <a href="mailto:admin@igniteroom.in">admin@igniteroom.in</a>.
    </p>
  </LegalLayout>
);

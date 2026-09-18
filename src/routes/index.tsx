import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";

import alissaAsset from "@/assets/mohammed-alissa.png.asset.json";
import jihadAsset from "@/assets/jihad-turk.jpeg.asset.json";
import lauraAsset from "@/assets/laura-herman.jpeg.asset.json";
import amraAsset from "@/assets/amra-sabic-elrayess.jpeg.asset.json";
import andrewAsset from "@/assets/andrew-sollinger.jpeg.asset.json";
import antonAsset from "@/assets/anton-leis-garcia.jpeg.asset.json";
import treyAsset from "@/assets/trey-guinn.jpeg.asset.json";
import royaAsset from "@/assets/roya-rahmani.jpeg.asset.json";
import malalaAsset from "@/assets/malala-yousafzai.jpeg.asset.json";
import moratinosAsset from "@/assets/miguel-angel-moratinos.jpeg.asset.json";
import sarnaAsset from "@/assets/rabbi-yehuda-sarna.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI for Everyone | Muslim World League" },
      {
        name: "description",
        content:
          "Agenda for AI for Everyone: Advancing Access and Opportunity in the Age of AI, 22 September 2026 at Cipriani 42nd Street, New York.",
      },
      { property: "og:title", content: "AI for Everyone | Muslim World League" },
      {
        property: "og:description",
        content: "A high-level dinner during the United Nations General Assembly High-Level Week.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventAgenda,
});

type Portrait = { name: string; role: string; src: string; position?: string };

const portraits: Portrait[] = [
  { name: "H.E. Sheikh Dr. Mohammed Alissa", role: "Keynote speaker", src: alissaAsset.url, position: "object-top" },
  { name: "Dr. Trey Guinn", role: "Master of Ceremonies", src: treyAsset.url },
  { name: "H.E. Miguel Ángel Moratinos", role: "Special remarks", src: moratinosAsset.url },
  { name: "Rabbi Yehuda Sarna", role: "Panel I speaker", src: sarnaAsset.url },
  { name: "Dr. Jihad Turk", role: "Panel I speaker", src: jihadAsset.url },
  { name: "Andrew Sollinger", role: "Panel I moderator", src: andrewAsset.url },
  { name: "Amb. Roya Rahmani", role: "Panel II speaker", src: royaAsset.url },
  { name: "Antón Leis García", role: "Panel II speaker", src: antonAsset.url },
  { name: "Laura Herman", role: "Panel II speaker", src: lauraAsset.url },
  { name: "Dr. Amra Sabic El-Rayess", role: "Panel II moderator", src: amraAsset.url },
  { name: "Malala Yousafzai", role: "Closing remarks", src: malalaAsset.url },
];

const agenda = [
  { time: "6:00", meridiem: "PM", title: "Registration & reception", detail: "Welcome to Cipriani 42nd Street." },
  { time: "6:30", meridiem: "PM", title: "Welcoming remarks", detail: "Master of Ceremonies, Dr. Trey Guinn.", photo: treyAsset.url, photoAlt: "Dr. Trey Guinn" },
  { time: "6:35", meridiem: "PM", title: "Keynote address", detail: "H.E. Sheikh Dr. Mohammed Alissa, Secretary General, Muslim World League.", photo: alissaAsset.url, photoAlt: "H.E. Sheikh Dr. Mohammed Alissa" },
  { time: "6:45", meridiem: "PM", title: "Special remarks", detail: "H.E. Miguel Ángel Moratinos, Under-Secretary-General and High Representative of the UN Alliance of Civilizations.", photo: moratinosAsset.url, photoAlt: "H.E. Miguel Ángel Moratinos" },
  { time: "6:55", meridiem: "PM", title: "Panel I · Faith and AI", detail: "Rabbi Yehuda Sarna, Dr. Jihad Turk and Father Davide Meli. Moderated by Andrew Sollinger, CEO and publisher of Foreign Policy magazine.", feature: true },
  { time: "7:25", meridiem: "PM", title: "Panel II · AI and Global Development", detail: "Amb. Roya Rahmani, Antón Leis García and Laura Herman. Moderated by Dr. Amra Sabic El-Rayess, Executive Director of the International Interfaith Research Lab at Teachers College, Columbia University.", feature: true },
  { time: "7:45", meridiem: "PM", title: "Short film", detail: "MWL global projects and AI initiative." },
  { time: "8:00", meridiem: "PM", title: "Closing remarks", detail: "Ms. Malala Yousafzai, Nobel Peace Prize Laureate and education activist.", photo: malalaAsset.url, photoAlt: "Malala Yousafzai" },
  { time: "8:20", meridiem: "– 8:45 PM", title: "Networking reception", detail: "The evening concludes." },
];

function BrandMark() {
  return (
    <div className="brand-lockup" aria-label="Muslim World League">
      <div className="brand-seal" aria-hidden="true"><span>MWL</span></div>
      <div><strong>Muslim World League</strong><span>رابطة العالم الإسلامي</span></div>
    </div>
  );
}

function EventAgenda() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="event-nav">
        <BrandMark />
        <a className="nav-date" href="#agenda"><span>UNGA High-Level Week</span><strong>22 September 2026</strong></a>
      </header>

      <section className="hero-band">
        <div className="hero-fan" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="hero-copy animate-rise">
          <p className="eyebrow">A high-level dinner event</p>
          <h1>AI for <em>Everyone</em></h1>
          <p className="hero-subtitle">Advancing Access and Opportunity<br />in the Age of AI</p>
          <div className="event-facts">
            <span><CalendarDays aria-hidden="true" /> Tuesday, 22 September 2026</span>
            <span><Clock3 aria-hidden="true" /> 6:00–8:45 PM</span>
            <span><MapPin aria-hidden="true" /> Cipriani 42nd Street, New York</span>
          </div>
        </div>
        <a className="agenda-jump" href="#agenda" aria-label="View the evening agenda"><ArrowDown /></a>
      </section>

      <section id="agenda" className="agenda-section">
        <div className="section-heading">
          <div><p className="eyebrow">The evening</p><h2>Program agenda</h2></div>
          <p>Ideas, faith and global action<br />at one table.</p>
        </div>
        <div className="timeline">
          {agenda.map((item, index) => (
            <article className={`timeline-row${item.feature ? " timeline-feature" : ""}`} key={item.time + item.title}>
              <div className="timeline-time"><strong>{item.time}</strong><span>{item.meridiem}</span></div>
              <div className="timeline-marker"><span>{index + 1}</span></div>
              <div className="timeline-copy">
                {item.feature && <span className="session-label"><Sparkles aria-hidden="true" /> Featured discussion</span>}
                <h3>{item.title}</h3><p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="voices-section">
        <div className="section-heading">
          <div><p className="eyebrow">Across disciplines</p><h2>Voices shaping<br />the conversation</h2></div>
          <p>Leaders in faith, policy,<br />education and development.</p>
        </div>
        <div className="portrait-grid">
          {portraits.map((person, index) => (
            <figure className={`portrait-card portrait-${index + 1}`} key={person.name}>
              <img src={person.src} alt={person.name} className={person.position ?? ""} />
              <figcaption><span>{person.role}</span><strong>{person.name}</strong></figcaption>
            </figure>
          ))}
        </div>
        <p className="portrait-note">Additional speaker portraits can be added as they become available.</p>
      </section>

      <footer className="event-footer">
        <div className="footer-mark"><BrandMark /></div>
        <div><span>Venue</span><strong>Cipriani 42nd Street</strong><p>110 East 42nd Street, New York</p></div>
        <div><span>Date</span><strong>22 September 2026</strong><p>Doors open at 6:00 PM</p></div>
      </footer>
    </main>
  );
}
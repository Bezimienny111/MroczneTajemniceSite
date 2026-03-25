import Layout from "@theme/Layout";
import styles from "./historia.module.css";

const timelineData = [
  {
    year: "2025",
    events: [
      {
        date: "31.12.2025",
        text: "Patch 2.5.1.2",
        source: "https://sefaris.eu/mroczne-tajemnice-2-5",
      },
      {
        date: "26.12.2025",
        text: "Patch 2.5.1.1",
        source: "https://sefaris.eu/mroczne-tajemnice-2-5",
      },
      {
        date: "24.12.2025",
        text: "Duża aktualizacja 2.5.1 do Mrocznych Tajemnic",
        source: "https://sefaris.eu/mroczne-tajemnice-2-5",
      },
      {
        date: "20.09.2025",
        text: "Patch 2.5.0.4",
        source: "https://sefaris.eu/mroczne-tajemnice-2-5",
      },
      {
        date: "03.09.2025",
        text: "Patch 2.5.0.3",
        source: "https://sefaris.eu/mroczne-tajemnice-2-5",
      },
      {
        date: "01.09.2025",
        text: "Patch 2.5.0.1 i patch 2.5.0.2",
        source: "https://sefaris.eu/mroczne-tajemnice-2-5",
      },
      {
        date: "31.08.2025",
        text: "Premiera Mrocznych Tajemnic 2.5",
        source: "https://sefaris.eu/mroczne-tajemnice-2-5",
        highlight: true,
      },
      {
        date: "16.03.2025",
        text: "Oficjalna zapowiedź Mrocznych Tajemnic 2.5 autorstwa Bezimienny111",
        source: "https://youtu.be/wjbE0nnDrdw",
      },
    ],
  },
  {
    year: "2014",
    events: [
      {
        date: "05.02.2014",
        text: "Premiera submoda do Mrocznych Tajemnic autorstwa Graveira",
        source: "https://themodders.org/index.php?topic=21368.0",
      },
    ],
  },
  {
    year: "2010",
    events: [
      {
        date: "~2010",
        text: "Premiera patcha 2.02 — ostatniego oficjalnego patcha od Poziomkaz",
        dateUnknown: true,
        highlight: true,
      },
      {
        date: "30.04.2010",
        text: "Oficjalna premiera Mrocznych Tajemnic 2.0 i premierowy patch 2.01",
        source: "https://tawerna-gothic.pl/",
        highlight: true,
      },
      {
        date: "24.04.2010",
        text: "Zapowiedź oficjalnej daty premiery na 30.04.2010",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "21.04.2010",
        text: '"Premiera" Mrocznych Tajemnic 2.0 — żart primaaprilisowy (Archiwum z bardzo długim hasłem do wypakowania)',
        source: "https://tawerna-gothic.pl/",
        joke: true,
      },
      {
        date: "19.01.2010",
        text: "Informacja o opóźnieniu Mrocznych Tajemnic 2.0",
        source: "https://tawerna-gothic.pl/",
      },
    ],
  },
  {
    year: "2009",
    events: [
      {
        date: "14.11.2009",
        text: "Trailer i przedpremierowa recenzja Mrocznych Tajemnic 2.0",
        source: "https://tawerna-gothic.pl/",
        extraLink: {
          url: "https://polter.pl/gry/Gothic-Mroczne-Tajemnice-szczypta-refleksji-c20771",
          label: "Recenzja na Polter.pl",
        },
      },
      {
        date: "05.08.2009",
        text: "Prezentacja próbki dubbingu",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "15.05.2009",
        text: "Rozpoczęcie prac nad niemiecką wersją Mrocznych Tajemnic",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "06.05.2009",
        text: "Udostępniono pełen spis kodów na przedmioty i postacie",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "25.04.2009",
        text: "Premiera angielskiej wersji Mrocznych Tajemnic",
        source: "https://tawerna-gothic.pl/",
        highlight: true,
      },
      {
        date: "22.04.2009",
        text: "Informacja o kolejnym opóźnieniu prac nad dubbingiem",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "01.04.2009",
        text: "Primaaprilisowy żart o porzuceniu prac nad dubbingiem i patchem do Mrocznych Tajemnic",
        source: "https://tawerna-gothic.pl/",
        joke: true,
      },
    ],
  },
  {
    year: "2008",
    events: [
      {
        date: "02.12.2008",
        text: "Kolejny nabór do testów dubbingu",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "09.02.2008",
        text: "Ruszył nabór do beta testów dubbingu Mrocznych Tajemnic",
        source: "https://tawerna-gothic.pl/",
      },
    ],
  },
  {
    year: "2007",
    events: [
      {
        date: "21.04.2007",
        text: "Patch 1.03",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "16.04.2007",
        text: "Patche 1.01 i 1.02",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "23.03.2007",
        text: "Premiera Mrocznych Tajemnic!",
        source: "https://tawerna-gothic.pl/",
        highlight: true,
      },
      {
        date: "16.03.2007",
        text: "Zapowiedź premiery Mrocznych Tajemnic na 23 marca 2007",
        source: "https://tawerna-gothic.pl/",
      },
    ],
  },
  {
    year: "2006",
    events: [
      {
        date: "22.12.2006",
        text: "Przesunięcie premiery Mrocznych Tajemnic",
        source: "https://tawerna-gothic.pl/",
      },
      {
        date: "09.10.2006",
        text: "Zapowiedź premiery Mrocznych Tajemnic na listopad 2006",
        source: "https://tawerna-gothic.pl/",
      },
    ],
  },
];

function ExtraLinkTooltip({ url, label }) {
  return (
    <span className={styles.tooltipWrapper}>
      <span className={styles.tooltipIcon}>📜</span>
      <span className={styles.tooltipBubble}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </span>
    </span>
  );
}

export default function Historia() {
  return (
    <Layout
      title="Historia"
      description="Historia modyfikacji Mroczne Tajemnice"
    >
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Historia</h1>
          <div className={styles.content}>
            <p className={styles.subtitle}>
              Kalendarium modyfikacji <strong>Mroczne Tajemnice</strong> — od
              najnowszych do najstarszych wydarzeń.
            </p>
            <p className={styles.note}>
              ⚠️ Niestety strona{" "}
              <a
                href="https://tawerna-gothic.pl"
                target="_blank"
                rel="noopener noreferrer"
              >
                tawerna-gothic.pl
              </a>{" "}
              (na dzień 25.03.2026) nie działa poprawnie — odnośniki do
              konkretnych historycznych newsów nie działają. Wszystkie wpisy
              można odnaleźć w sekcji{" "}
              <a
                href="https://tawerna-gothic.pl/modyfikacje/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tawerna-gothic.pl/modyfikacje/
              </a>
              .
            </p>
            {timelineData.map((yearGroup) => (
              <div key={yearGroup.year} className={styles.yearGroup}>
                <div className={styles.yearBadge}>{yearGroup.year}</div>
                <div className={styles.yearEvents}>
                  {yearGroup.events.map((event, idx) => (
                    <div
                      key={idx}
                      className={`${styles.event} ${
                        event.highlight ? styles.eventHighlight : ""
                      } ${event.joke ? styles.eventJoke : ""} ${
                        event.dateUnknown ? styles.eventUnknown : ""
                      }`}
                    >
                      <div className={styles.eventDot} />
                      <div className={styles.eventBody}>
                        <span className={styles.eventDate}>{event.date}</span>
                        <span className={styles.eventText}>
                          {event.text}
                          {event.extraLink && (
                            <ExtraLinkTooltip
                              url={event.extraLink.url}
                              label={event.extraLink.label}
                            />
                          )}
                        </span>
                        {event.source && (
                          <a
                            href={event.source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.sourceLink}
                            title={event.source}
                          >
                            źródło
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

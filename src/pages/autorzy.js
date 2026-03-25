import Layout from "@theme/Layout";
import styles from "./autorzy.module.css";

const poziomkazTeam = [
  {
    name: "Siekacz",
    role: "Szef projektu, Reżyseria, Skrypty, Grafika 2D, Level Design",
  },
  { name: "Shergar", role: "Reżyseria, Skrypty, Grafika 2D, Level Design" },
  { name: "Zdunek", role: "Reżyseria, Grafika 3D, Level Design, Filmy" },
  { name: "Fenix", role: "Skrypty" },
  { name: "Ojciec Redaktor", role: "Skrypty, Level Design, Filmy, Muzyka" },
  { name: "Lord Michał VIII", role: "Skrypty" },
  { name: "Bruce", role: "Korekta" },
  { name: "Elvans", role: "Grafika 3D" },
  { name: "Drow", role: "Grafika 2D" },
  { name: "Som3", role: "Grafika 2D" },
  { name: "BroV@r", role: "Filmy (credits)" },
  { name: "Dreamerion", role: "Muzyka" },
  { name: "VZP", role: "Muzyka" },
];

const poziomkazTesterzy =
  "Avertheme, Drow, Fenix, Ghorri, HerrFlick, Inez, Jandułka_Jamkonorek, Kerht, Lares, Luk_asz, Lukis17, Marcel, Śmierć, Vhailor, Vierzba, Wujek Herr Flicka";

const poziomkazTesterzyDubbingu =
  "Adi1993, BroV@R, Bradock, Bruce, DonGringo, Dreamerion, Dreyhal, GornSnk, Marzec, Mecin, Patryk.nowy88, Radixxx, Varrok, Xardas22, Zsuetam";

const beziTeam = [
  {
    category: "Twórca",
    members: [
      {
        name: "Bezimienny111",
        role: "Pomysłodawca, skrypty, spacer, fabuła i dialogi",
      },
    ],
  },
  {
    category: "Zespół projektowy",
    members: [
      {
        name: "Deetom554",
        role: "Członek zespołu projektowego, tester, autor solucji",
      },
      { name: "Delph", role: "Członek zespołu projektowego, tester" },
      {
        name: "Paweu",
        role: "Członek zespołu projektowego, tester, autor solucji",
      },
    ],
  },
  {
    category: "Wsparcie programistyczne",
    members: [
      {
        name: "GnomoslaQ",
        role: "Biblioteka rozszerzająca możliwości silnika gry",
      },
    ],
  },
  {
    category: "3D i Grafika",
    members: [
      { name: "Wogor", role: "Modele 3D i tekstury" },
      { name: "31.", role: "Grafika menu, ekranów ładowania i logo" },
    ],
  },
  {
    category: "Pomysłodawcy i korekty",
    members: [
      {
        name: "Boris",
        role: "Pomysły fabularne: wątek myśliwych, korekta wielu dialogów",
      },
      { name: "Wagon", role: "Pomysły fabularne: wątek Kosiarza" },
      { name: "Iza", role: "Testerka, pomysły fabularne, balans" },
      { name: "MasqueradeBreaker", role: "Wsparcie w korekcie tekstów" },
    ],
  },
  {
    category: "Wsparcie merytoryczne",
    members: [
      { name: "fyryNy", role: "Grafika menu statystyk, wsparcie merytoryczne" },
      { name: "Buzka", role: "Wsparcie merytoryczne" },
      { name: "Sebastian.", role: "Wsparcie merytoryczne, menu craftingu" },
      { name: "Splash", role: "Wsparcie merytoryczne" },
      { name: "Boguś", role: "Wsparcie merytoryczne" },
    ],
  },
  {
    category: "Testerzy",
    members: [
      { name: "MALT", role: "Tester" },
      { name: "Baniu34", role: "Tester" },
      { name: "KamiloS", role: "Tester" },
      { name: "@PunaLive", role: "Tester" },
      { name: "Hexen", role: "Tester" },
      { name: "nimteo", role: "Tester" },
      { name: "Ahain", role: "Tester" },
      { name: "Qłaczek", role: "Tester" },
      { name: "Letor", role: "Tester" },
      { name: "Vezok", role: "Tester" },
    ],
  },
  {
    category: "Pozostałe",
    members: [
      { name: "Mathev", role: "Zasoby mod Runą i Mieczem, dubbing" },
      { name: "Chrząszcz Trzcinowy", role: "Dubbing" },
    ],
  },
];

function TeamTable({ title, subtitle, members, extraSections, videoSrc }) {
  return (
    <div className={styles.tableWrapper}>
      <h2 className={styles.tableTitle}>{title}</h2>
      <p className={styles.tableSubtitle}>{subtitle}</p>
      <div className={styles.gridHeader}>
        <span>Imię / Nick</span>
        <span>Rola</span>
      </div>
      {members.map((m, i) => (
        <div key={i} className={styles.gridRow}>
          <span>{m.name}</span>
          <span>{m.role}</span>
        </div>
      ))}
      {extraSections &&
        extraSections.map((section, i) => (
          <div key={i} className={styles.extraSection}>
            <div className={styles.categoryLabel}>{section.label}</div>
            <p className={styles.commaList}>{section.content}</p>
          </div>
        ))}
      {videoSrc && (
        <div className={styles.videoSection}>
          <div className={styles.categoryLabel}>Dubbing</div>
          <p className={styles.commaList}>Do obejrzenia na filmiku poniżej</p>
          <video className={styles.creditsVideo} controls>
            <source src={videoSrc} type="video/mp4" />
            Twoja przeglądarka nie wspiera odtwarzania wideo.
          </video>
        </div>
      )}
    </div>
  );
}

function CategorizedTeam({ title, subtitle, categories }) {
  return (
    <div className={styles.tableWrapper}>
      <h2 className={styles.tableTitle}>{title}</h2>
      <p className={styles.tableSubtitle}>{subtitle}</p>
      <div className={styles.gridHeader}>
        <span>Imię / Nick</span>
        <span>Rola</span>
      </div>
      {categories.map((cat, ci) => (
        <div key={ci} className={styles.categoryBlock}>
          <div className={styles.categoryLabel}>{cat.category}</div>
          {cat.members.map((m, i) => (
            <div key={i} className={styles.gridRow}>
              <span>{m.name}</span>
              <span>{m.role}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Autorzy() {
  return (
    <Layout
      title="Autorzy modyfikacji"
      description="Autorzy modyfikacji Mroczne Tajemnice i Mroczne Tajemnice 2.5"
    >
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Autorzy modyfikacji</h1>
          <div className={styles.tablesRow}>
            <TeamTable
              title="The PoziomkaZ"
              subtitle="Autorzy oryginalnych Mrocznych Tajemnic"
              members={poziomkazTeam}
              extraSections={[
                { label: "Testerzy", content: poziomkazTesterzy },
                {
                  label: "Testerzy Dubbingu",
                  content: poziomkazTesterzyDubbingu,
                },
              ]}
              videoSrc="/img/video/credits.mp4"
            />
            <CategorizedTeam
              title="Zespół Bezimiennego111"
              subtitle="Mroczne Tajemnice 2.5"
              categories={beziTeam}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

import Layout from "@theme/Layout";
import styles from "./autorzy.module.css";

const poziomkazTeam = [
  { name: "Autor 1", role: "Rola / opis" },
  { name: "Autor 2", role: "Rola / opis" },
  { name: "Autor 3", role: "Rola / opis" },
];

const beziTeam = [
  {
    category: "Twórca",
    members: [
      { name: "Bezimienny111", role: "Pomysłodawca, skrypty, spacer, fabuła i dialogi" },
    ],
  },
  {
    category: "Zespół projektowy",
    members: [
      { name: "Deetom554", role: "Członek zespołu projektowego, tester, autor solucji" },
      { name: "Delph", role: "Członek zespołu projektowego, tester" },
      { name: "Paweu", role: "Członek zespołu projektowego, tester, autor solucji" },
    ],
  },
  {
    category: "Wsparcie programistyczne",
    members: [
      { name: "GnomoslaQ", role: "Biblioteka rozszerzająca możliwości silnika gry" },
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
      { name: "Boris", role: "Pomysły fabularne: wątek myśliwych, korekta wielu dialogów" },
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

function TeamTable({ title, subtitle, members }) {
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

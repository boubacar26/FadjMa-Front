import styles from "../../../styles/Main.module.css";
import DashboardCard from "../components/DashboardCard";
import CardBlock from "../components/CardBlock";

const Dashboard: React.FC = () => {
  const cardData1 = [
    { value: "298", label: "Nombre total de medicaments" },
    { value: "24", label: "Groupes de medecine" },
  ];

  const cardData2 = [
    { value: "70 298", label: "Quantite de medicaments" },
    { value: "24", label: "Groupes de medecine" },
  ];

  const cardData3 = [
    { value: "298", label: "Nombre total de fournisseurs" },
    { value: "24", label: "Groupes de medecine" },
  ];

  const cardData4 = [
    { value: "298", label: "Nombre total de medicaments" },
    { value: "24", label: "Groupes de medecine" },
  ];

  return (
    <>
      <div
        className="flex justify-between mt-5 p-4"
        style={{ width: "91%", margin: "auto" }}
      >
        <div>
          <h2 style={{ fontWeight: "700", fontSize: "24px" }}>
            Tableau de bord
          </h2>
          <p style={{ fontWeight: "400", fontSize: "14px" }}>
            Un aperçu rapide des données de votre pharmacie
          </p>
        </div>
        <div>
          <button className={`${styles.bouton}`}>Telecharger le rapport</button>
        </div>
      </div>
      <DashboardCard />
      <div className="card">
        <div className="flex justify-around">
          <CardBlock
            title="Inventaire"
            linkText="Allez dans Configuration »"
            data={cardData1}
          />
          <CardBlock
            title="Rapport rapide"
            linkText="Janvier 2022"
            data={cardData2}
          />
        </div>
        <div className="flex justify-around mt-9">
          <CardBlock
            title="Ma pharmacie"
            linkText="Accédez à la gestion des utilisateurs »"
            data={cardData3}
          />
          <CardBlock
            title="Client"
            linkText="Allez a la page client »"
            data={cardData4}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

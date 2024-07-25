import Card from "./Card";
import vector from "../../../public/Vector.png";
import vector1 from "../../../public/Vector(1).png";
import vector2 from "../../../public/Vector(2).png";
import vector3 from "../../../public/Vector(3).png";

const DashboardCard = () => {
  return (
    <div className="flex justify-around mt-5">
      <Card
        imageSrc={vector}
        title="Bien"
        subtitle="Statut de l'inventaire"
        bgColor="#01A76887"
        footerText="Afficher le rapport détaillé"
        borderColor="border border-[#01A768]"
      />
      <Card
        imageSrc={vector1}
        title="4.800.432 FCFA"
        subtitle="Revenu: janvier 2022"
        bgColor="#FED60087"
        footerText="Afficher le rapport détaillé"
        borderColor="border border-[#FED600]"
      />
      <Card
        imageSrc={vector2}
        title="298"
        subtitle="Médicaments disponibles"
        bgColor="#03A9F587"
        footerText="Visiter l'inventaire"
        borderColor="border border-[#03A9F5]"
      />
      <Card
        imageSrc={vector3}
        title="01"
        subtitle="Pénurie de médicaments"
        bgColor="#F0483E87"
        footerText="Résoudre maintenant"
        borderColor="border border-[#F0483E4D]"
      />
    </div>
  );
};

export default DashboardCard;

import styles from "../../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around p-3">
        <div className="input">
          <input
            type="text"
            className={`${styles.recherche}`}
            placeholder="Recherchez n'importe quoi ici."
          />
        </div>
        <div className="langue mt-4">
          <select
            name="langue"
            id="langue-select"
            style={{ backgroundColor: "#fff" }}
          >
            <option value="">是 Francais(France)</option>
            <option value="goldfish">Anglais(Etats-Unis)</option>
          </select>
        </div>
        <div className="details text-right">
          <h5>
            <span className="inline-block rounded-full" style={{ backgroundColor: "#FED600", width: "18px", height: "18px"}}></span> Bonjour
          </h5>
          <div className="flex">
            <p>14 janvier 2022</p>
            <p className="ml-4">22:12:40</p>
          </div>
        </div>
      </div>
    </>
  );
}

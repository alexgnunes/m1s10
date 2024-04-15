import "../styles/IsActive.css";

function IsActive({ isActive }) {
  return (
    <h3 className={isActive ? "active" : "inactive"}>
      {isActive ? "Ativo" : "Inativo"}
    </h3>
  );
}

export default IsActive;

import Profile from "./profile/Profile";
import './App.css';

function App() {
  const alertMyName = name => alert(name);
  const styleObject = { border: "2px solid blue", width: "45%", margin: "auto", padding: "15px", textAlign: "left", backgroundColor: "rgb(190, 223, 245)" };
  return (
    <div style={styleObject}>
      <Profile nom="JABRI" prenom="Khelifa" bio="ABC" profession="Etudiant" handleName={alertMyName} />
    </div>
  );
}

export default App;

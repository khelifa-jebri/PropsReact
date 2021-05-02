import Image from "./Image"
import PropTypes from "prop-types";
const Profile = props => {
    const styleObject = { color: "blue", fontWeight: "bold", margin: "auto", fontSize:"22px"};
    const styleObject2 = { color: "red", fontWeight: "bold", margin: "auto", fontSize:"22px" };
    return (
        <div className="card" style={{ width: "70%", margin: "auto" }}>
            <Image url='/profile.jpg' alternative="Image du profile!!!" largeur="200" />
            <div className="card-body">
                <h3 className="card-title"> Informations personnelles :</h3>
                <p className="card-text"><span style={styleObject}>Nom : </span><span style={styleObject2}>{props.nom}</span></p>
                <p className="card-text"><span style={styleObject}>Prenom :</span><span style={styleObject2}> {props.prenom}</span></p>
                <p className="card-text"><span style={styleObject}>Bio :</span><span style={styleObject2}> {props.bio}</span></p>
                <p className="card-text"><span style={styleObject}>Profession :</span><span style={styleObject2}> {props.profession}</span></p>
                <button type="button" className="btn btn-primary" onClick={() => props.handleName(`Hi, my name is : ${props.nom} ${props.prenom}`)}>
                    Click Here !
            </button>
            </div>
        </div>
    );
}

// Set default props
Profile.defaultProps = {
    nom: "Jabri",
    prenom: "Khalifa",
    bio: "ABC",
    profession: "Etudiant"
};

Profile.prototype = {
    nom: PropTypes.string,
    prenom: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}

export default Profile;
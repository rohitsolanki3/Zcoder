import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPen, faUniversity } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
// importing profile page css
import "./sidebar.css";
// fetching user data from backend
import { useEffect, useState } from "react";
function Sidebar() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/user/details");
      setUser(response.data);
    };
    fetchUser();
  }, []);

  return (
    <div className="profile-card">
      <div className="edit-icon">
        <FontAwesomeIcon icon={faPen} />
      </div>
      <div className="profile-image"></div>
      <h2>Rohit Solanki</h2>
      <p>#Destroyer8935</p>
      <div className="social-icons">
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className="contact-info">
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>rohit6june2004@gmail.com</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faUniversity} />
          <span>INDIAN INSTITUTE OF TECHNOLOGY GUWAHATI</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
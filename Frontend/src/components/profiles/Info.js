import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import PlaceIcon from "@mui/icons-material/Place";
import Place from "@mui/icons-material/Place";

export default function Info({ email, phone, website, location }) {
  return (
    <div className="info">
      <table className="tablemain">
        <tr className="tablerow">
          <td>
            <div className="iconcircle">
              <EmailIcon />
            </div>
          </td>
          <td>{email}</td>
        </tr>
        <tr className="tablerow">
          <td>
            <div className="iconcircle">
              <PhoneIcon />
            </div>
          </td>
          <td>{phone}</td>
        </tr>
        <tr className="tablerow">
          <td>
            <div className="iconcircle">
              <LanguageIcon />
            </div>
          </td>
          <td>{website}</td>
        </tr>
        <tr className="tablerow">
          <td>
            <div className="iconcircle">
              <PlaceIcon />
            </div>
          </td>
          <td>{location}</td>
        </tr>
      </table>
    </div>
  );
}

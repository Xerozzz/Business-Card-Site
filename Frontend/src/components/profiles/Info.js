import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Info({ email, phone }) {
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
      </table>
    </div>
  );
}

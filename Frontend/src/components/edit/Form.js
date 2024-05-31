import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function Form({ data }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    var email = form.get("email");
    var phone = form.get("phone");
    var company = form.get("company");
    var role = form.get("role");
    var datapack = {
      email: email,
      phone: phone,
      company: company,
      role: role,
    };

    axios
      .put(`http://localhost:8800/edit/${data.username}`, { datapack })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          defaultValue={data.email}
          name="email"
          label="Email"
          variant="filled"
        />
        <TextField
          defaultValue={data.phone}
          name="phone"
          label="Phone"
          variant="filled"
        />
        <TextField
          name="company"
          defaultValue={data.company}
          label="Company"
          variant="filled"
        />
        <TextField
          defaultValue={data.role}
          name="role"
          label="Role"
          variant="filled"
        />
        <Button variant="outlined" color="secondary" type="submit">
          Edit
        </Button>
      </form>
    </div>
  );
}

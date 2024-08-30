import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Appli() {
  const [title, setTitle] = useState("");
  const [desp, setDesp] = useState("");
  const [value, setValue] = useState([]);
  const [update, setUpdate] = useState(false); // if while clicking the card the value reach to 4 then the inputs and button should be disappear
  const [name, setName] = useState("");

  useEffect(() => {
    if (value.length < 4) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }

    const filteredValues = value.filter((item) => item.title !== name);

    setValue(filteredValues);

    setName("");
  }, [value, name]);

  return (
    <Grid container xs={12}>
      <Grid container item xs={12} sx={{ display: update ? "flex" : "none" }}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "150px" }}
        >
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            onChange={(e) => setDesp(e.target.value)}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          <Button
            variant="contained"
            sx={{
              width: "220px",
              height: "50px",
            }}
            onClick={() => {
              setValue([...value, { title, desp }]);
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <Grid container item xs={12} sx={{ justifyContent: "center" }}>
        {value.map((item) => (
          <Applicatn title={item.title} desp={item.desp} setName={setName} />
        ))}
      </Grid>
    </Grid>
  );
}

function Applicatn(Props) {
  // let { setName, title, desp } = Props;

  return (
    <Grid container>
      <Grid
        item
        xs={10}
        sx={{
          padding: "50px 30px",
          backgroundColor: "red",
          marginLeft: "200px",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        <h1>{Props.title}</h1>
        <p> {Props.desp}</p>
        <Button
          variant="contained"
          sx={{
            width: "220px",
            height: "50px",
          }}
          onClick={() => Props.setName(Props.title)}
        >
          Click
        </Button>
      </Grid>
    </Grid>
  );
}

export default Appli;

const express = require("express");
const uniqid = require("uniqid");
const app = express();

const PORT = 2000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Employee Database");
});

const employees = [
  {
    id: uniqid.time(),
    full_name: "mamang",
    occupation: "webdev",
    gender: "pria",
  },
  {
    id: uniqid.time(),
    full_name: "jamet",
    occupation: "UI/UX",
    gender: "pria",
  },
  {
    id: uniqid.time(),
    full_name: "rajip",
    occupation: "UI/UX",
    gender: "pria",
  },
  {
    id: uniqid.time(),
    full_name: "monyong",
    occupation: "webdev",
    gender: "pria",
  },
];

app.get("/employees", (req, res) => {
  if (employees.length) {
    res.status(200).json({
      message: "fetch sukses",
      result: employees,
    });
  } else {
    res.status(404).send("no employees found");
  }
});

app.get("/employees/:id", (req, res) => {
  const employeeId = req.params.id;

  const findIndex = employees.findIndex((val) => {
    return val.id == employeeId;
  });

  if (findIndex == -1) {
    res.status(400).json({
      message: `employee dengan id ${employeeId} tidak ketemu`,
    });
    return;
  } else {
    res.status(200).json({
      message: `employee dengan id ${employeeId}`,
      result: employees[findIndex],
    });
  }
});

app.post("/employees", (req, res) => {
  const data = req.body;

  if (!(data.full_name && data.occupation && data.gender)) {
    res.status(400).json({
      message: "employee data tidak boleh kosong",
    });
    return;
  }

  const newEmployee = {
    ...data,
    id: uniqid.time(),
  };

  employees.push(data);

  res.status(201).json({
    message: "added employee",
    result: newEmployee,
  });
});
app.patch("/employees/:id", (req, res) => {
  const employeeId = req.params.id;
  const data = req.body;

  const findIndex = employees.findIndex((val) => {
    return val.id == employeeId;
  });

  if (findIndex == -1) {
    res.status(400).json({
      message: `employee dengan id ${employeeId} tidak ketemu`,
    });
    return;
  } else {
    res.status(200).json({
      message: `employee berhasil dipatch`,
      result: data,
    });
  }

  employees[findIndex] = {
    ...employees[findIndex],
    ...data
  }

});

app.delete("/employees/:id", (req, res) => {
  const employeeId = req.params.id;

  const findIndex = employees.findIndex((val) => {
    return val.id == employeeId;
  });

  if (findIndex == -1) {
    res.status(400).json({
      message: `User with ID ${employeeId}, not found`,
    });
    return;
  }

  employees.splice(findIndex, 1);

  res.status(200).json({
    message: "employee deleted",
  });
});

app.get("/employees", (req, res) => {});

app.listen(PORT, () => {
  console.log("server running in port", PORT);
});

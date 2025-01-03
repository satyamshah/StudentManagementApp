export const headers = ["Name", "Age", "Class", "Phone Number", "Actions"];

function createData(name, age, standard, phoneNumber, actions) {
    return { name, age, standard, phoneNumber, actions };
  }
  
export const rows = [
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
const namaProvinsi = [
    {"id":"10","nama":""},
];

const displayResult = (result) => {
    result.forEach((element) => {
      const newOption = document.createElement("result");
      if (element.id == 1);
      newOption.text = element.nama;
      provinsi.appendChild(newOption);
    });
};
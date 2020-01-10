function teste() {
  let valores = {};
  let meuForm = document.querySelectorAll("form input");

  meuForm.forEach(item => {
    if (item.value) {
      valores[item.name] = item.value;
    }
  });

  console.log(valores);
}

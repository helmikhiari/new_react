export function SamarTbki() {
  let aux = "samar tebki";
  const changeAux = () => {
    aux = "Samar ferhana";
    console.log(aux);
  };
  return <h1 onClick={changeAux}>{aux}</h1>;
}

export default SamarTbki;

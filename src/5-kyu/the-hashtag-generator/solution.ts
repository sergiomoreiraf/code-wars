export function generateHashtag(str: string): string | false {
  const retorno = str.split(' ').reduce((total, part) => {
    part = part.substring(0, 1).toUpperCase() + part.substring(1).toLowerCase();
    return total + part;
  }, '#');
  if (retorno === '#' || retorno.length > 140) {
    return false;
  }
  return retorno;
}

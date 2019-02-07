function narcissistic(value) {
  let res = +0;

  value.toString().split('').map( e => res += Math.pow(e, value.toString().length));
  return (value == res) ? true : false;
}
export default function(type, target) {
  return state => search =>
    state[type].filter(item => item[target].includes(search));
}

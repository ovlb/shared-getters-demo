export default function(type) {
  return state => state[type].filter(item => item.published);
}

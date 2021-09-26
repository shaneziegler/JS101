const getUid = (() => {
  let uid = 0;
  return () => ++uid;
})();

debugger;

console.log(getUid());
debugger;
console.log(getUid());

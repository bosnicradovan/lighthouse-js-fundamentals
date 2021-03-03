for (let i = 100; i <= 200; i++) {
  let loo = i % 3 === 0;
  let lhl = i % 4 === 0;
  console.log(loo ? lhl ? "LoopyLighthouse" : "Loopy" : lhl ? "Lighthouse" : i);
}
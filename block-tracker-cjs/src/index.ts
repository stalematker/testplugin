/* eslint-disable @typescript-eslint/no-var-requires */
const overnode = require("overnode");

function activate() {
  console.log("block-tracker-cjs activated:", overnode);
  setInterval(async () => {
    console.log("block-tracker-cjs - getBlockNumber:", await overnode.commands.getBlockNumber());
  }, 1000);
}

module.exports = {
  activate,
};

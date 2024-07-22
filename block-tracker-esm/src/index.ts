// eslint-disable-next-line import/no-unresolved
import * as overnode from "overnode";

export function activate() {
  console.log("block-tracker-esm activated:", overnode);
  setInterval(async () => {
    console.log("block-tracker-esm - getBlockNumber:", await overnode.commands.getBlockNumber());
  }, 1000);
}

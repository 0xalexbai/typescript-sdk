import { Connection } from "@solana/web3.js";
import { OrcaPoolConfig, OrcaPool, OrcaFarmConfig, OrcaFarm } from "..";
import { orcaPoolConfigs, orcaFarmConfigs } from "../constants";
import { OrcaFarmImpl } from "./orca/farm/orca-farm";
import { OrcaRobustPoolImpl } from "./orca/pool/orca-robust-pool";

export class OrcaFactory {
  getPool(connections: Array<Connection>, config: OrcaPoolConfig): OrcaPool {
    return new OrcaRobustPoolImpl(connections, orcaPoolConfigs[config]);
  }

  getFarm(connection: Connection, config: OrcaFarmConfig): OrcaFarm {
    return new OrcaFarmImpl(connection, orcaFarmConfigs[config]);
  }
}

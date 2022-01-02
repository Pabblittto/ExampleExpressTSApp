import { Connection, ConnectionOptions, createConnection } from "typeorm";

export const basicConnectionName = "basic";

export class DatabaseConnection {
  private static initConnection = async () => {
    return await createConnection();
  };

  private static connection: Connection | undefined;

  static getConnection = async () => {
    if (!this.connection) {
      return this.initConnection();
    }

    return this.connection;
  };
}

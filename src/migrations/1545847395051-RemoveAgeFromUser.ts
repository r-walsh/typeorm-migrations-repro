import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RemoveAgeFromUser1545847395051 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.dropColumn("user", "age");
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.addColumn(
      "user",
      new TableColumn({ name: "age", type: "number" })
    );
  }
}

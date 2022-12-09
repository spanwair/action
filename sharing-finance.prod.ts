/// <reference path="type.d.ts" />

import { getManager } from "typeorm";

export const script = async () => {
  const manager = getManager();
  const workLogIds = await manager.query(`SELECT id FROM "work_log" WHERE "projectGuideId" IS NULL`);
  console.log(
    "Number of worklogs without projectGuideId: ",
    workLogIds.length,
    workLogIds.length ? `specifically: ${JSON.stringify(workLogIds)}` : ""
  );
  for (const { id: workLogId } of workLogIds) {
    console.log("workLogId :>> ", workLogId);
    const workLogRecord = await manager.query(
      `SELECT contract_code FROM "work_log_record" WHERE "workLogId" = '${workLogId}'`
    );
    const contractCode = workLogRecord[0].contract_code;
    if (contractCode) {
      console.log("contractCode :>> ", contractCode);
      const contract = await manager.query(`SELECT id FROM "contract" WHERE "code" = '${contractCode}'`);
      const contractId = contract[0].id;
      if (contractId) {
        console.log("contractId :>> ", contractId);
        const projectGuideIds = await manager.query(
          `SELECT id FROM "project_guide" WHERE "contract" = '${contractId}'`
        );
        const projectGuideId = projectGuideIds[0].id;
        if (projectGuideId) {
          console.log("projectGuideId :>> ", projectGuideId);
          const contract = await manager.query(
            `UPDATE "work_log" SET "projectGuideId" = '${projectGuideId}' WHERE id = '${workLogId}'`
          );
          console.log("contract :>> ", contract);
        }
      }
    }
  }
};

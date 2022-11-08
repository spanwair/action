/// <reference path="type.d.ts" />

import { getManager } from "typeorm";

export const script1 = async () => {
  const manager = getManager();
  const records: WorkRecod[] = await manager.query(`SELECT * FROM "work_log_record" WHERE "department" IS NULL`);
  for (const record of records) {
    const [fn, sn] = record.worker_name.split(" ");
    console.log("fn, sn :>> ", fn, sn);
    const attendanceBlocks: AttendanceBlock[] = await manager.query(
      `SELECT "startedByAttendanceEntry" FROM "attendance_block" WHERE "startedByAttendanceEntry"::jsonb @> '{"person":{"firstName": "${fn}", "lastName": "${sn}"}}'`
    );
    const { id, name } = attendanceBlocks.map((ab) => ab.startedByAttendanceEntry.person?.departments?.[0] || {})[0];
    if (id && name) {
      await manager.query(
        `UPDATE "work_log_record" SET "department" = '${JSON.stringify({ id, name })}' WHERE id = '${record.id}'`
      );
    }
  }
};

export const script = async () => {
  const manager = getManager();
  const records: Started_by_attendance_entry_id[] = await manager.query(
    `SELECT started_by_attendance_entry_id, id FROM "work_log_record" WHERE "department" IS NULL`
  );
  for (const { id: recordId, started_by_attendance_entry_id: atId } of records) {
    const attendanceBlocks: AttendanceBlock[] = await manager.query(
      `SELECT "startedByAttendanceEntry" FROM "attendance_block" WHERE "startedByAttendanceEntryId" = '${atId}'`
    );
    const { id, name } = attendanceBlocks.map((ab) => ab.startedByAttendanceEntry.person?.departments?.[0] || {})[0];
    if (id && name) {
      await manager.query(
        `UPDATE "work_log_record" SET "department" = '${JSON.stringify({ id, name })}' WHERE id = '${recordId}'`
      );
    }
  }
};

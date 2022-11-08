interface WorkRecod {
  id: "bc8b4916-ef67-4211-8319-8cf6a50f68bf";
  workLogId: null;
  type: "H";
  started_by_attendance_entry_id: "77913b06-c87a-427e-b9c0-978b76ca5309";
  worker_name: "Jan Duda";
  contract_code: "122064";
  date_from: "2022-10-30T22:01:47.000Z";
  date_to: "2022-10-30T22:34:30.000Z";
  created_at: "2022-10-31T10:06:04.625Z";
  updated_at: "2022-10-31T10:06:04.625Z";
  department: { id: string; name: string } | null;
}

interface Started_by_attendance_entry_id {
  id: string;
  started_by_attendance_entry_id: string;
}

interface AttendanceBlock {
  startedByAttendanceEntry: {
    id: "2dcaa94d-0207-4677-a2c9-4130a5a7bf0b";
    entryTimestamp: "2022-10-11T15:06:42.240+00:00";
    dateTime: "2022-09-14 10:08:37";
    start: true;
    activity: {
      id: "eb749d09-7e54-4180-af39-43ec7b451136";
      entryTimestamp: "2021-05-13T10:03:24.519+00:00";
      guid: "034f90f2-34a7-4c82-8800-4ea70b463e78";
      mark: "customActivity";
      name: "Terén - Praha";
      number: null;
      shortcut: null;
      color: "#FF9615";
      description: "";
      counted: false;
      dataType: "Duration";
      dailyDataType: "Duration";
      monthlyDataType: "Duration";
      renamedStart: "";
      startIcon: "PLAY";
      startColor: "#FF9615";
      displayStart: true;
      selectStartTimes: [];
      renamedStop: "";
      stopIcon: "STOP";
      stopColor: "#FF9615";
      displayStop: true;
      selectStopTimes: [];
      canBeRequested: false;
      canBePlanned: false;
      departments: [];
      tags: ["$activity.displayEmptyValues"];
    };
    project: {
      id: "14069ac0-99b1-4d92-83c3-65880b198c39";
      entryTimestamp: "2022-10-11T08:19:41.018+00:00";
      active: true;
      guid: "31c2fb01-8d29-46c2-94ca-759d630ff725";
      mark: "customProject";
      name: "34118k";
      description: "Dolina Lysolaje EFG FERI";
      shortcut: "34118k";
      color: "#F8FF61";
      icon: "folder";
      validFrom: "01.10.2021";
      validTo: "31.12.2222";
      departments: [];
      categories: [];
    };
    description: null;
    entryMethod: null;
    origin: "personal-attendance-app";
    person: {
      id: "3a09ea17-5f88-4ea9-afbb-751322caffed";
      entryTimestamp: "2022-05-24T09:46:36.886+00:00";
      firstName: "Petr";
      lastName: "Majdloch";
      number: "011";
      dateOfBirth: null;
      birthNumber: "";
      email: "majdloch@3g.cz";
      phoneNumber: null;
      jobPosition: "zaměstnanec";
      employmentContract: null;
      bankAccountNumber: null;
      consentToBeingPhotographed: false;
      employmentStartDate: "01.01.2021";
      employmentEndDate: null;
      hourSalary: null;
      weeklyWorkHourFund: null;
      weeklyWorkHourFundTotal: null;
      address: null;
      departments: [
        {
          id: "90c0c68a-34b5-427b-bd2d-2688d302b510";
          entryTimestamp: "2022-05-24T09:46:36.632+00:00";
          name: "Stavby";
          nameComplete: "Stavby";
          inGraphId: "0001";
          hierarchy: "0001";
          hidden: false;
        }
      ];
      tags: ["dontInformAboutNewRequests"];
      presenceCardIds: [];
    };
  };
  endedByAttendanceEntry: {
    id: "6a1df810-8bd7-4f70-b630-a7338dfd4a19";
    entryTimestamp: "2022-10-11T15:06:42.240+00:00";
    dateTime: "2022-09-14 11:10:10";
    start: true;
    activity: {
      id: "eb749d09-7e54-4180-af39-43ec7b451136";
      entryTimestamp: "2021-05-13T10:03:24.519+00:00";
      guid: "034f90f2-34a7-4c82-8800-4ea70b463e78";
      mark: "customActivity";
      name: "Terén - Praha";
      number: null;
      shortcut: null;
      color: "#FF9615";
      description: "";
      counted: false;
      dataType: "Duration";
      dailyDataType: "Duration";
      monthlyDataType: "Duration";
      renamedStart: "";
      startIcon: "PLAY";
      startColor: "#FF9615";
      displayStart: true;
      selectStartTimes: [];
      renamedStop: "";
      stopIcon: "STOP";
      stopColor: "#FF9615";
      displayStop: true;
      selectStopTimes: [];
      canBeRequested: false;
      canBePlanned: false;
      departments: [];
      tags: ["$activity.displayEmptyValues"];
    };
    project: {
      id: "29540d12-d7f8-4413-8fce-f00910622bf8";
      entryTimestamp: "2022-09-19T14:18:12.781+00:00";
      active: true;
      guid: "c89514bb-2066-4019-865d-e41d421c0e90";
      mark: "customProject";
      name: "121022c";
      description: "HOUSLE Lysolaje FERI";
      shortcut: "121022c";
      color: "#FF6915";
      icon: "folder";
      validFrom: "31.05.2021";
      validTo: "31.12.2222";
      departments: [];
      categories: [];
    };
    description: null;
    entryMethod: null;
    origin: "personal-attendance-app";
    person: {
      id: "3a09ea17-5f88-4ea9-afbb-751322caffed";
      entryTimestamp: "2022-05-24T09:46:36.886+00:00";
      firstName: "Petr";
      lastName: "Majdloch";
      number: "011";
      dateOfBirth: null;
      birthNumber: "";
      email: "majdloch@3g.cz";
      phoneNumber: null;
      jobPosition: "zaměstnanec";
      employmentContract: null;
      bankAccountNumber: null;
      consentToBeingPhotographed: false;
      employmentStartDate: "01.01.2021";
      employmentEndDate: null;
      hourSalary: null;
      weeklyWorkHourFund: null;
      weeklyWorkHourFundTotal: null;
      address: null;
      departments: [
        {
          id: "90c0c68a-34b5-427b-bd2d-2688d302b510";
          entryTimestamp: "2022-05-24T09:46:36.632+00:00";
          name: "Stavby";
          nameComplete: "Stavby";
          inGraphId: "0001";
          hierarchy: "0001";
          hidden: false;
        }
      ];
      tags: ["dontInformAboutNewRequests"];
      presenceCardIds: [];
    };
  };
  id: "81383fac-9bda-42e2-a657-7bf55b0498ac";
  startedByAttendanceEntryId: "2dcaa94d-0207-4677-a2c9-4130a5a7bf0b";
  startedByAttendanceEntryTimestamp: "2022-10-11T15:06:42.240+00:00";
  endedByAttendanceEntryTimestamp: "2022-10-11T15:06:42.240+00:00";
  endedByAttendanceEntryId: "6a1df810-8bd7-4f70-b630-a7338dfd4a19";
  dateFrom: "2022-09-14T08:08:37.000Z";
  dateTo: "2022-09-14T09:10:10.000Z";
  lastReceived: "2022-10-31T09:10:13.233Z";
  deletedAt: null;
}

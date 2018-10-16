// Only for setup
import uuid from "uuid/v1";

export const users = [
  {
    id: uuid(),
    name: "John",
    groups: ["staff", "student"]
  },
  {
    id: uuid(),
    name: "George",
    groups: ["student"]
  },
  {
    id: uuid(),
    name: "Sue",
    groups: ["employer"]
  },
  {
    id: uuid(),
    name: "Clemmy",
    groups: []
  }
];

export const groups = [
  {
    value: "staff",
    label: "Staff"
  },
  {
    value: "employer",
    label: "Employer"
  },
  {
    value: "student",
    label: "Student"
  }
];

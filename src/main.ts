import {
  selectUsers,
  insertUser,
  updateUserExample,
  deleteUserExample,
} from "./queries";

async function main() {
  // insertUser();
  // await selectUsers();
  // await updateUserExample();
  // await deleteUserExample();
  await selectUsers();
}
main();

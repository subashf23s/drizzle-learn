import {
  selectUsers,
  insertUser,
  updateUserExample,
  deleteUserExample,
  insertPost,
  selectPostsofUser,
} from "./queries";

async function main() {
  // insertUser();
  // await selectUsers();
  // await updateUserExample();
  // await deleteUserExample();
  // await selectUsers();
  // await insertPost();
  await selectPostsofUser("10f0038a-dd41-4289-8084-6a421804a13c");
}
main();

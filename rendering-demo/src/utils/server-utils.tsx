import "server-only";

export const serverSideFunction = () => {
  console.log(`
        use multiple libraires,
        use environments variables,
        interact with a database,
        process confidential information`);
  return "server result";
};

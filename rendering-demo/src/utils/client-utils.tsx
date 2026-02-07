import "client-only";

export const clientSideFunction = () => {
  console.log(
    `use window object,
        user localStorage,`,
  );

  return "client result";
};

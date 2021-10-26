export const classes = (...args: any[]) =>
  args.filter((arg) => !!arg).join(" ");

export const formattedDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

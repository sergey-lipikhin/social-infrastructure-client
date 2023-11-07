export async function wait() {
  const time = process.env.NODE_ENV === 'development'
    ? 1000
    : 0;

  return new Promise<void>((resolve) => setTimeout(() => resolve(), time));
}

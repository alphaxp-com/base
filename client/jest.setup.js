global.fetch = jest.fn(
  () =>
    new Promise((resolve, reject) => ({
      catch: reject,
      json: resolve,
    }))
);

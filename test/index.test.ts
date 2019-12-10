const KellarClient = require('../src/index');

describe("Test the client ", () => {
    test("It should create a client", () => {
      const client = new KellarClient({ apiKey: 'foo', modelId: 'bar'});
      expect(client).toBeInstanceOf(KellarClient);
    });
    test("Generate data", async () => {
      const client = new KellarClient({ apiKey: '', modelId: ''});
      let spy = jest.spyOn(client, 'generate').mockImplementation(() =>  Promise.resolve([]));
      const result = await client.generate();
      expect(await client.generate()).toStrictEqual([]);
      expect(client.generate).toHaveBeenCalled()
    })
  });
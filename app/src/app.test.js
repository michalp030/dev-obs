const request = require("supertest");
const { createApp } = require("../src/app");

describe("API", () => {
  test("GET / returns status ok", async () => {
    const app = createApp();
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
  });

  test("GET /products returns items array", async () => {
    const app = createApp();
    const res = await request(app).get("/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.items)).toBe(true);
    expect(res.body.items.length).toBeGreaterThan(0);
  });
});
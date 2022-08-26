const jestConfig = require("./jest.config");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 6000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 4000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  }, 5000);
});

test("The h1 header content of enterprise page'", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/enterprise");
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual(
    "Enterprise · A smarter way to work together · GitHub"
  );
  page.close();
}, 2000);

test("The h1 header content of pricing page'", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/pricing");
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual("Pricing · Plans for every developer · GitHub");
  page.close();
}, 5000);

test("The h1 header content of marketplace page'", async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/marketplace");
  await page.waitForSelector("h1");
  const title2 = await page.title();
  expect(title2).toEqual(
    "GitHub Marketplace · to improve your workflow · GitHub"
  );
  page.close();
}, 3000);

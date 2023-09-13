import { test } from "@playwright/test";

import { MapPage } from "./MapPage";

test.describe("Layers", () => {
  test.describe("ol-source-bingmaps", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/bing/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-cluster", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/cluster/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-image-static", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/imagestatic/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-image-wms", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/imagewms/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-osm", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/osm/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-stamen", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/stamen/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-tianditu", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/tianditu/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-tile-arcgis-rest", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/arcgisrest/");
      await map.waitUntilReady();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-tile-json", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/tilejson/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-tile-wms", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/tilewms/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-vector", () => {
    test("should render (using ol-feature)", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/vector/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot(0);
    });

    test("should render (using url)", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/vector/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot(1);
    });
  });

  test.describe("ol-source-vector-tile", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/vectortile/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });

  test.describe("ol-source-webglpoints", () => {
    test("should render (using url)", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/webglpoints/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot(0);
    });

    test("should render (using ol-feature)", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/webglpoints/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot(1);
    });
  });

  test.describe("ol-source-xyz", () => {
    test("should render", async ({ page }) => {
      const map = new MapPage(page);
      map.goto("/componentsguide/sources/xyz/");
      await map.waitUntilReady();
      await map.waitUntilCanvasLoaded();
      map.checkCanvasScreenshot();
    });
  });
});

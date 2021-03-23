import { Connection } from "typeorm";
import { assetsMock } from "../../../db/mocks";
import { Asset } from "../../../entity/Asset";
import { connectionTest, graphQLTest } from "../../../utils/test";

let conn: Connection;
let asset: Asset;
// let expectedAsset: {
//   name: string;
//   serialNumber: string;
//   className: string;
//   tier6Name: string;
//   hardwareId: string;
//   make: string;
//   gsmActiveSim: string;
//   equipmentDescription: string;
//   model: string;
//   languageCode: string;
//   category: AssetCategory;
// };

beforeAll(async () => {
  conn = await connectionTest(true);
  asset = await assetsMock();
});

afterAll(async () => {
  if (conn) {
    await conn.close();
  }
});

const assetQueryById = `
  {
    asset(id: "1") {
      id,
      name,
      serialNumber,
      className,
      tier6Name,
      hardwareId,
      make,
      gsmActiveSim,
      equipmentDescription,
      model,
      languageCode,
      category {
        id,
        name
      }
    }
  }
`;

it("query asset by id", async () => {
  const response = await graphQLTest({
    source: assetQueryById,
  });
  const {
    name,
    serialNumber,
    className,
    tier6Name,
    hardwareId,
    make,
    gsmActiveSim,
    equipmentDescription,
    model,
    languageCode,
    category,
  } = asset;
  expect(response).toMatchObject({
    data: {
      asset: {
        id: "1",
        name,
        serialNumber,
        className,
        tier6Name,
        hardwareId,
        make,
        gsmActiveSim,
        equipmentDescription,
        model,
        languageCode,
        category: {
          id: "1",
          name: category.name,
        },
      },
    },
  });
});

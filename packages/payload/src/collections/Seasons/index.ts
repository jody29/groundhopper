import type { CollectionConfig } from "payload";

export const Seasons: CollectionConfig = {
  slug: "seasons",
  admin: { useAsTitle: "name" },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};

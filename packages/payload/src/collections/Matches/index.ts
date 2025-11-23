import type { CollectionConfig } from "payload";

export const Matches: CollectionConfig = {
  slug: "matches",
  fields: [
    {
      name: "homeTeam",
      type: "text",
      required: true,
    },
    {
      name: "awayTeam",
      type: "text",
      required: true,
    },
    {
      name: "season",
      type: "relationship",
      relationTo: "seasons",
      required: true,
    },
    {
      name: "seasonName",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.seasonName) {
          const existing = await req.payload.find({
            collection: "seasons",
            where: { name: { equals: data.seasonName } },
          });

          if (existing.docs.length > 0) {
            data.season = existing.docs[0]?.id;
          } else {
            const newSeason = await req.payload.create({
              collection: "seasons",
              data: {
                name: data.seasonName,
              },
            });

            data.season = newSeason.id;
          }
        }

        return data;
      },
    ],
  },
};

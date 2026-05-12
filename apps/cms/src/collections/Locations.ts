import type { CollectionConfig } from "payload";

export const Locations: CollectionConfig = {
  slug: "locations",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "coordinates",
      type: "text",
      admin: {
        description: 'Latitude, Longitude (e.g. "5.5333, -73.3667")',
      },
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};

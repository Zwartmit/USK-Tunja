import type { CollectionConfig } from "payload";

export const Sketches: CollectionConfig = {
  slug: "sketches",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "technique",
      type: "select",
      options: [
        { label: "Watercolor", value: "watercolor" },
        { label: "Ink", value: "ink" },
        { label: "Graphite", value: "graphite" },
        { label: "Digital", value: "digital" },
        { label: "Mixed", value: "mixed" },
      ],
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      hasMany: false,
      required: true,
    },
    {
      name: "event",
      type: "relationship",
      relationTo: "events",
      hasMany: false,
    },
    {
      name: "location",
      type: "relationship",
      relationTo: "locations",
      hasMany: false,
    },
  ],
};

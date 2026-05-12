import type { CollectionConfig } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "name",
    description: "Catalog of sketchers (not login users).",
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
      name: "instagramHandle",
      type: "text",
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      name: "profileImage",
      type: "upload",
      relationTo: "media",
    },
  ],
};

import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "sessionNumber",
      type: "number",
      required: true,
      unique: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "time",
      type: "text",
    },
    {
      name: "meetingPoint",
      type: "text",
    },
    {
      name: "materialsSuggested",
      type: "textarea",
    },
    {
      name: "groupPhoto",
      type: "upload",
      relationTo: "media",
    },
  ],
};

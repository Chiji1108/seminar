export default {
  name: "sns",
  title: "SNS",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "type",
          type: "string",
          options: {
            list: ["twitter", "instagram", "facebook", "youtube", "tiktok"],
            layout: "radio",
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: "url",
          type: "url",
          title: "URL",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};

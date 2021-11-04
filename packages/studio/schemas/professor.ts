import { MdPerson } from "react-icons/md";

export default {
  name: "professor",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      type: "url",
      title: "URL",
      description: "SFCの教員紹介ページ",
    },
    {
      name: "image",
      type: "image",
      description: "写真使用の許可を頂いている場合のみ",
    },
    {
      name: "sns",
      type: "sns",
      title: "SNS",
    },
  ],
  select: {
    title: "name",
    subtitle: "url",
    media: "image",
  },
};

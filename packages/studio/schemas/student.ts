import { MdPerson } from "react-icons/md";
export default {
  name: "student",
  title: "Student",
  icon: MdPerson,
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description:
        "顔写真またはアイコン（SNSのアイコンの流用を許可してくれていたらそれ使う）",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "attributes",
      title: "Attributes",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      description: "学部学年や役職などのタグ",
    },
    {
      name: "sns",
      title: "SNS",
      type: "sns",
    },
  ],
  select: {
    title: "name",
    media: "image",
  },
};

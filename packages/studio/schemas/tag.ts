import { MdTag } from "react-icons/md";

export default {
  name: "tag",
  title: "Tag",
  icon: MdTag,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "color",
      type: "color",
    },
  ],
};

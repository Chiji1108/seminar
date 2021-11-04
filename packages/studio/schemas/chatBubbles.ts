export default {
  name: "chatBubbles",
  title: "Chat bubbles",
  description: "チャット風の一言コメント",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
        {
          name: "avatar",
          description: "喋っている人（生徒や先生、運営やOBなど）",
          type: "reference",
          to: [{ type: "student" }, { type: "professor" }],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "comment",
          title: "Comment",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "isRightSide",
          title: "on the right side",
          description: "会話形式みたいに右側に持ってくるか",
          type: "boolean",
          initialValue: false,
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};

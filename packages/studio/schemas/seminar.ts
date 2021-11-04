import { MdClass } from "react-icons/md";

export default {
  name: "seminar",
  title: "Seminar",
  icon: MdClass,
  type: "document",
  fieldsets: [
    { name: "basic", title: "Basic info" },
    { name: "additional", title: "Additional info" },
    { name: "content", title: "Main contents" },
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "研究会の名前",
      fieldset: "basic",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      description: "SemiZemiでのURL",
      fieldset: "basic",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "超短い説明",
      fieldset: "basic",
      validation: (Rule) => Rule.required().max(30),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fieldset: "basic",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      fieldset: "basic",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      description: "タグ",
      of: [
        {
          type: "reference",
          to: { type: "tag" },
        },
      ],
      fieldset: "basic",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      fieldset: "additional",
      name: "professors",
      type: "array",
      of: [
        {
          name: "professor",
          type: "reference",
          to: [{ type: "professor" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      fieldset: "additional",
      name: "homepageUrl",
      title: "Homepage URL",
      type: "url",
    },
    {
      fieldset: "additional",
      name: "sfcUrl",
      title: "SFC's introducing URL",
      description: '"SFCの現場"',
      type: "url",
    },
    {
      fieldset: "additional",
      name: "syllabus",
      title: "Syllabus URLs",
      type: "object",
      fields: [
        { name: "a", type: "url" },
        { name: "b", type: "url" },
        { name: "specialProject", type: "url" },
      ],
    },
    {
      fieldset: "additional",
      name: "contacts",
      type: "object",
      fields: [
        {
          name: "email",
          title: "E-mail",
          type: "string",
          validation: (Rule) =>
            Rule.regex(
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              {
                name: "email", // Error message is "Does not match email-pattern"
                invert: false, // Boolean to allow any value that does NOT match pattern
              }
            ),
        },
        {
          name: "line",
          title: "LINE QR",
          type: "image",
        },
      ],
    },
    {
      fieldset: "additional",
      name: "sns",
      title: "SNS",
      type: "sns",
    },
    {
      fieldset: "additional",
      name: "languages",
      type: "array",
      of: [{ name: "name", type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      fieldset: "additional",
      name: "numberOfStudents",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      fieldset: "additional",
      name: "dateEstablished",
      type: "date",
    },
    {
      fieldset: "additional",
      name: "percentageOfOnline",
      description: "オンラインとオンキャンパスの割合",
      options: { columns: 2 },
      type: "object",
      fields: [
        {
          name: "online",
          type: "number",
          validation: (Rule) => Rule.required().integer().min(0).max(10),
          initialValue: 5,
        },
        {
          name: "onCampus",
          type: "number",
          validation: (Rule) => Rule.required().integer().min(0).max(10),
          initialValue: 5,
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "brief",
      title: "Brief",
      type: "object",
      description: "概要",
      fields: [
        {
          name: "content",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "chatBubbles",
          type: "chatBubbles",
        },
      ],
      fieldset: "content",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "activities",
      type: "object",
      fields: [
        {
          name: "contents",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  title: "Title",
                  name: "title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                },
                {
                  title: "Photo",
                  name: "photo",
                  type: "image",
                },
                {
                  title: "Content",
                  name: "content",
                  type: "array",
                  of: [
                    {
                      type: "block",
                    },
                  ],
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: "chatBubbles",
          type: "chatBubbles",
        },
      ],
      description: "具体的な活動やプロジェクト(最近のでも過去でも)",
      fieldset: "content",
      validation: (Rule) => Rule.required(),
    },
    {
      fieldset: "content",
      name: "honestOpinion",
      title: "Honest opinion",
      description: "内部のホンネ",
      type: "object",
      fields: [
        {
          title: "Good point",
          name: "good",
          description: "魅力",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        },
        {
          title: "Bad point",
          name: "bad",
          description: "大変なところ",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: "chatBubbles",
          type: "chatBubbles",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      fieldset: "content",
      name: "requirements",
      description: "募集要項",
      type: "object",
      fields: [
        {
          name: "motivationLetterExists",
          description: "書類選考の有無",
          type: "boolean",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "interviewExists",
          description: "面接の有無",
          type: "boolean",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "content",
          description: "概要（ここ何書くか詰めたい）",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "idealCandidateProfile",
          description: "求める人物像",
          type: "array",
          of: [
            {
              type: "string",
            },
          ],
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: "applicationMethod",
          description: "応募方法・更新先など",
          type: "array",
          of: [
            {
              type: "block",
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "chatBubbles",
          type: "chatBubbles",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "thumbnail",
    },
  },
};

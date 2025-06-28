import { defineField, defineType } from 'sanity'

export const waitlistType = defineType({
  name: 'waitlist',
  title: 'Waitlist Signups',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'signupDate',
      title: 'Signup Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          { title: 'Popup (5 seconds)', value: 'popup-timer' },
          { title: 'Download Button', value: 'download-button' },
          { title: 'Other', value: 'other' },
        ],
      },
      initialValue: 'popup-timer',
    }),
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'firstName',
      date: 'signupDate',
    },
    prepare(selection) {
      const { title, subtitle, date } = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${new Date(date).toLocaleDateString()}`,
      }
    },
  },
})
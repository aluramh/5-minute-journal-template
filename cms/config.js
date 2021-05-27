// NOTE: - If you want to test changes made to your config.yml file locally,
// swap out "git-gateway" with "test-repo" and navigate to localhost:3000/admin
// to view Netlify CMS locally (you can't make changes or read actual content from Git
// this way, but it's great to verify how things will look).
const backendName = "git-gateway";
// const backendName = "test-repo";

export default {
  cms_manual_init: true,
  backend: {
    name: backendName,
    branch: "main",
  },
  media_folder: "public/img",
  public_folder: "img",
  collections: [
    {
      name: "blog-posts",
      label: "Blog Posts",
      folder: "_posts",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
      fields: [
        {
          label: "Template Key",
          name: "templateKey",
          widget: "hidden",
          default: "blog-post",
        },

        // ANCHOR: - Before the day starts

        // Title for today
        {
          label: "Title for today",
          name: "title",
          widget: "string",
          required: false,
          hint: "You can add a title to remember this memorable day",
        },

        {
          label: "Before the day starts",
          name: "dayStart",
          widget: "object",
          hint: "This are the main things to remember at the start of your day",
          fields: [
            // Grateful things
            {
              label: "I am grateful for...",
              name: "iAmGratefulFor",
              widget: "object",
              hint: "Things I am grateful for today. There are always at least 3 things to be thankful for every day.",
              fields: [
                {
                  label: "The 1st thing I am grateful for is...",
                  name: "gratefulThing1",
                  widget: "string",
                },
                {
                  label: "The 2nd thing I am grateful for is...",
                  name: "gratefulThing2",
                  widget: "string",
                },
                {
                  label: "Finally, I am also grateful for...",
                  name: "gratefulThing3",
                  widget: "string",
                },
              ],
            },

            // Today would be great if
            {
              label: "What would make today great?",
              name: "whatWouldMakeTodayGreat",
              widget: "object",
              fields: [
                {
                  label: "This would make today great...",
                  name: "todayGreat1",
                  widget: "string",
                },
                {
                  label: "Today will be splendid if...",
                  name: "todayGreat2",
                  widget: "string",
                },
                {
                  label: "Last but not least...",
                  name: "todayGreat3",
                  widget: "string",
                },
              ],
            },

            // Daily affirmation
            {
              label: "Daily affirmation. I am...",
              name: "dailyAffirmation",
              widget: "string",
              hint: "This is the place where you can brag about how amazing you are!",
            },
          ],
        },

        // ANCHOR: - After the day

        {
          label: "At the end of the day",
          name: "dayEnd",
          widget: "object",
          hint: "Let's recap how you did this extraordinary day",
          fields: [
            // Grateful things
            {
              label: "3 amazing things that happened today",
              name: "amazingThingsThatHappened",
              widget: "object",
              hint: "Amazing things I things that happened today",
              fields: [
                {
                  label: "The 1st thing amazing thing was...",
                  name: "gratefulThing1",
                  widget: "string",
                  default: " ",
                },
                {
                  label: "I was astonished today because...",
                  name: "gratefulThing2",
                  widget: "string",
                  default: " ",
                },
                {
                  label: "The last astounding thing was...",
                  name: "gratefulThing3",
                  widget: "string",
                  default: " ",
                },
              ],
            },

            // Today better
            {
              label: "How could I have made today even better?",
              name: "couldHaveMadeTodayBetter",
              widget: "string",
              hint: "There is always room to grow and be better",
              default: " ",
            },
          ],
        },

        // Today's date
        {
          label: "Today's date",
          name: "date",
          widget: "datetime",
          date_format: "DD-MMM-YYYY",
          format: "LLL",
          picker_utc: false,
        },

        // Optional fields to embellish the post, if desired
        {
          label: "Featured Image",
          name: "featuredimage",
          widget: "image",
          required: false,
          hint: "If you believe there is an image that captures the essence of today, you can add it here",
        },
        {
          label: "Tags",
          name: "tags",
          widget: "list",
          required: false,
        },
      ],
    },
  ],
};

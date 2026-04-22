export const blogPosts = [
  {
    slug: "write-a-screener-that-filters-right-participants",
    category: "Research Methods",
    title: "How to Write a Screener That Actually Filters the Right Participants",
    excerpt:
      "A screener is only as good as the assumptions behind it. Here's how to build one that works for qualitative and quantitative studies alike.",
    readTime: "6 min read",
    date: "Jan 2025",
    content: [
      {
        heading: "Start from research risk, not demographics",
        text: "Before writing questions, identify the assumptions that could invalidate your study. Build your screener around those risks first, then layer in demographic and behavioral constraints.",
      },
      {
        heading: "Use disqualifiers carefully",
        text: "Too many hard disqualifiers can over-filter your sample and slow recruitment. Keep only exclusion criteria that are directly tied to data quality.",
      },
      {
        heading: "Pilot and iterate",
        text: "Run your screener on a small batch first, review quality outcomes, and refine wording. A short pilot often improves completion rates and relevance significantly.",
      },
    ],
  },
  {
    slug: "recruiting-b2b-respondents-how-to-do-it-right",
    category: "B2B Research",
    title: "Recruiting B2B Respondents: Why It's Hard and How to Do It Right",
    excerpt:
      "B2B recruitment fails most often because of vague targeting criteria. We break down the key variables that separate good profiles from wasted incentive budgets.",
    readTime: "8 min read",
    date: "Dec 2024",
    content: [
      {
        heading: "Define role precision",
        text: "Job title alone is rarely enough in B2B studies. Include decision authority, product exposure, and recent project context to avoid irrelevant interviews.",
      },
      {
        heading: "Align incentives with respondent value",
        text: "Senior B2B participants need compensation that reflects opportunity cost. Underpricing slows fieldwork and lowers response quality.",
      },
      {
        heading: "Operational rigor matters",
        text: "Fast response, clear scheduling windows, and manual verification dramatically reduce no-shows and improve completion rates in B2B projects.",
      },
    ],
  },
  {
    slug: "research-in-new-markets-before-you-recruit",
    category: "Global Research",
    title: "Research in New Markets: What to Know Before You Recruit Internationally",
    excerpt:
      "Language, incentive norms, and platform availability vary dramatically by country. Here's a practical guide to international participant recruitment.",
    readTime: "7 min read",
    date: "Dec 2024",
    content: [
      {
        heading: "Local expectations shape response rates",
        text: "Incentives, communication style, and preferred channels differ by region. A global process without local adaptation usually produces uneven quality.",
      },
      {
        heading: "Plan for translation and moderation",
        text: "Localized screeners and moderator support reduce misinterpretation and improve consistency across countries.",
      },
      {
        heading: "Normalize quality checks",
        text: "Use equivalent quality criteria globally and monitor completion behavior in each market to catch anomalies early.",
      },
    ],
  },
  {
    slug: "how-many-participants-do-you-need",
    category: "UX Research",
    title: "How Many Participants Do You Actually Need? A Practical Guide",
    excerpt:
      "The classic answer is 5 — but that depends heavily on your methodology and goals. We walk through the decision framework we use with our clients.",
    readTime: "5 min read",
    date: "Nov 2024",
    content: [
      {
        heading: "Match sample size to decision confidence",
        text: "Early discovery can use small samples, while prioritization or segmentation decisions need broader representation. Define confidence needs first.",
      },
      {
        heading: "Use waves, not one giant batch",
        text: "Two smaller waves with iteration between them often outperform one large wave in both insight quality and speed.",
      },
      {
        heading: "Avoid false precision",
        text: "Treat participant counts as practical decision tools, not fixed formulas. Context and study design matter most.",
      },
    ],
  },
  {
    slug: "outsourcing-recruitment-common-mistakes",
    category: "Research Ops",
    title: "Outsourcing Recruitment: What Research Teams Get Wrong",
    excerpt:
      "Handing off recruitment is more than finding a vendor. Here are the common mistakes teams make and how to avoid them for a smoother, faster study.",
    readTime: "6 min read",
    date: "Nov 2024",
    content: [
      {
        heading: "Brief quality determines recruitment quality",
        text: "A vague brief leads to mismatched respondents. Document target profile, exclusions, and quality thresholds before kickoff.",
      },
      {
        heading: "Define ownership and cadence",
        text: "Assign clear ownership for approvals and set update rhythm early. Most delays come from unclear decision loops, not sourcing constraints.",
      },
      {
        heading: "Measure outcomes, not activity",
        text: "Track show rates, data quality, and timeline variance. These metrics reveal whether your recruitment process is truly improving.",
      },
    ],
  },
  {
    slug: "interviews-vs-surveys-right-method",
    category: "Methodology",
    title: "Interviews vs. Surveys: Choosing the Right Method for Your Research Question",
    excerpt:
      "Different questions need different methods. This guide helps you decide when to talk to people and when to send a survey — and how to scope each correctly.",
    readTime: "7 min read",
    date: "Oct 2024",
    content: [
      {
        heading: "Use interviews for ambiguity",
        text: "When you need to understand motivations, language, and context, interviews uncover nuance that closed-ended surveys cannot capture.",
      },
      {
        heading: "Use surveys for patterns",
        text: "When you need directional confidence across segments, surveys are faster to scale and easier to quantify.",
      },
      {
        heading: "Mix methods intentionally",
        text: "A strong sequence is often interviews first, surveys second. Qualitative insights inform survey design and improve quantitative reliability.",
      },
    ],
  },
];

export const getBlogPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug);

export const getRelatedArticles = (slug, limit = 3) =>
  blogPosts.filter((post) => post.slug !== slug).slice(0, limit);

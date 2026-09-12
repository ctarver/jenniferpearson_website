// Single source of truth for site-wide facts and copy.
// Edit values here to update them everywhere across the site.

export const site = {
  name: 'Jennifer Pearson, LCSW',
  shortName: 'Jennifer Pearson',
  credential: 'LCSW',
  role: 'Licensed Clinical Social Worker',
  licenseNumber: '67898',
  tagline: "This is hard. I'm glad you're here.",
  description:
    'Warm, compassionate therapy for adults across Texas. Jennifer Pearson, LCSW offers secure telehealth counseling statewide, plus in-person sessions on Wednesdays in Arlington, TX, for anxiety, depression, ADHD, burnout, grief, and life transitions.',
  url: 'https://jenniferpearsonlcsw.com',

  email: 'hello@jenniferpearsonlcsw.com',
  phone: '(817) 900-2251',
  phoneHref: 'tel:+18179002251',

  // Telehealth-primary practice across Texas, with in-person sessions on Wednesdays
  // at the Arlington office.
  location: {
    region: 'North Texas',
    state: 'TX',
    areaServed: 'Telehealth across Texas',
    inPersonDay: 'Wednesdays',
    office: {
      line1: '1112 E Copeland Rd, Ste 420',
      city: 'Arlington',
      state: 'TX',
      zip: '76011',
      // Keyless Google Maps embed + a "get directions" link, both built from the address.
      mapEmbedUrl:
        'https://www.google.com/maps?q=1112+E+Copeland+Rd+Ste+420+Arlington+TX+76011&output=embed',
      directionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=1112+E+Copeland+Rd+Ste+420+Arlington+TX+76011',
    },
  },

  hours: [
    { days: 'Monday – Thursday', time: '8:00am – 5:00pm' },
    { days: 'Friday', time: '7:00am – 1:00pm' },
  ],

  // Web3Forms public access key, injected from the PUBLIC_WEB3FORMS_KEY env var at build time.
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fees & Insurance', href: '/fees-insurance' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Crisis Resources', href: '/crisis' },
] as const;

export type Service = {
  title: string;
  blurb: string;
};

export const services: Service[] = [
  {
    title: 'Anxiety',
    blurb:
      'Quiet the racing thoughts and constant worry. Learn to feel steadier and more present in your day-to-day life.',
  },
  {
    title: 'Depression',
    blurb:
      'When everything feels heavy or numb, we work gently toward connection, meaning, and small steps forward.',
  },
  {
    title: 'Bipolar disorder',
    blurb:
      'Steadier ground through the highs and the lows, support for understanding your patterns, easing the intensity, and building a life that feels like your own.',
  },
  {
    title: 'Trauma / PTSD',
    blurb:
      'Move at your own pace in a safe, affirming space as you process difficult experiences and reclaim a sense of safety.',
  },
  {
    title: 'OCD',
    blurb:
      'Find relief from intrusive thoughts and the compulsions meant to quiet them, learning to meet anxiety in a new way rather than be ruled by it.',
  },
  {
    title: 'ADHD',
    blurb:
      'Understand how your brain works and build systems and self-compassion that actually fit you, especially after a later-in-life diagnosis.',
  },
  {
    title: 'Chronic illness',
    blurb:
      'Living with chronic and complex illness, chronic pain, and medical stress, met with the depth of years in medical social work.',
  },
  {
    title: 'Burnout & life transitions',
    blurb:
      "For those who've been holding it together for everyone else, through new roles and seasons of change. Rediscover rest, boundaries, and your footing.",
  },
  {
    title: 'Relationships',
    blurb:
      'Navigate conflict, communication, and connection, with partners, family, or yourself, including the strain of caregiving and the grief that comes with loss.',
  },
];

// Concise focus-area options for the contact form checklist. Kept separate from
// `services` (which drives the richer Services/Home marketing cards) so the form
// can stay short and plainly worded.
export const focusAreas: string[] = [
  'Anxiety',
  'Depression',
  'Bipolar disorder',
  'Trauma / PTSD',
  'OCD',
  'ADHD',
  'Grief',
  'Chronic illness',
  'Burnout & life transitions',
  'Relationships',
];

export const insurances = [
  'Aetna',
  'Cigna / Evernorth',
  'UnitedHealthcare / Optum',
  'Blue Cross Blue Shield',
];

export const insurancesNotAccepted = ['Medicaid', 'Medicare'];

export type Modality = {
  name: string;
  blurb: string;
};

export const modalities: Modality[] = [
  {
    name: 'Acceptance & Commitment Therapy (ACT)',
    blurb:
      'Making room for difficult thoughts and feelings while taking steps toward what matters most to you.',
  },
  {
    name: 'Dialectical Behavior Therapy (DBT)',
    blurb:
      'Practical skills for managing intense emotions, tolerating distress, and steadying relationships.',
  },
  {
    name: 'Cognitive Behavioral Therapy (CBT)',
    blurb:
      'Noticing the links between thoughts, feelings, and actions, and gently shifting unhelpful patterns.',
  },
  {
    name: 'Eye Movement Desensitization and Reprocessing (EMDR)',
    blurb:
      'A structured approach to processing trauma and distressing memories so they lose their grip.',
  },
];

export type Experience = {
  title: string;
  org: string;
  orgUrl?: string;
  location?: string;
  period: string;
  note?: string;
};

export const experience: Experience[] = [
  {
    title: 'Clinical Therapist',
    org: 'Accepted Therapy Services',
    orgUrl: 'http://www.acceptedtherapy.com/',
    location: 'Fort Worth, TX',
    period: 'May 2023 – May 2026',
    note: 'Providing individual psychotherapy to adults.',
  },
  {
    title: 'Medical Social Worker',
    org: "Cook Children's Medical Center",
    orgUrl: 'https://www.cookchildrens.org/',
    location: 'Fort Worth, TX',
    period: 'Jan 2020 – Sept 2022',
    note: 'Supporting families in cardiac intensive care, step-down, and palliative care.',
  },
  {
    title: 'Graduate Social Work Intern',
    org: "Texas Children's Hospital",
    orgUrl: 'https://www.texaschildrens.org/',
    location: 'Houston, TX',
    period: 'Aug 2018 – May 2019',
    note: 'Supporting children with cystic fibrosis and their families across inpatient and outpatient pulmonology.',
  },
  {
    title: 'Graduate Social Work Intern',
    org: 'The Monarch School and Institute',
    orgUrl: 'https://www.monarchschool.org/',
    location: 'Houston, TX',
    period: 'Sep 2017 – May 2018',
    note: 'Providing support at a therapeutic school for students with neurological differences.',
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'How do I get started?',
    answer:
      "The easiest way is to fill out the contact form and tell me a little about what's bringing you in. My practice is currently full, so I'm adding new clients to my waitlist, I'll personally reach back out as soon as a spot opens up and do my best to give you a sense of timing. When there's room, we'll set up a free, no-pressure consultation to see whether we're a good fit. If you'd rather not wait, I'm glad to help point you toward other therapists who may have availability.",
  },
  {
    question: 'What is the free consultation like?',
    answer:
      "Once a spot opens up, we'll start with a short, casual conversation, no paperwork or pressure. You can share what you're hoping to work on, ask me anything, and get a feel for how I work. If it feels like a match, we'll find a time to begin. If I'm not the right therapist for you, I'm glad to help point you somewhere that fits better.",
  },
  {
    question: 'How do we meet for sessions?',
    answer:
      "Most of my sessions are secure online video (telehealth), available to anyone located in Texas, so you can meet from wherever you're most comfortable, with no commute. I also offer in-person sessions on Wednesdays at my Arlington office, if meeting face-to-face feels better for you. We'll find the mix and rhythm that fit your life.",
  },
  {
    question: 'Who do you work with?',
    answer:
      'I work with adults. People come to me for all kinds of reasons, anxiety, depression, adult ADHD, burnout, grief, trauma, relationship struggles, and the big and small transitions that come with being human. I have a special interest in supporting neurodivergent adults, including those diagnosed later in life.',
  },
  {
    question: 'What happens in the first session?',
    answer:
      "Mostly, we get to know each other. I'll ask about what brought you in, a bit of your history, and what you'd like to be different. There's no right way to do it and nothing you need to prepare. Early sessions are about building trust and getting a shared sense of where we're headed, at a pace that feels comfortable for you.",
  },
  {
    question: 'How does scheduling work?',
    answer:
      "We set up your first appointment during the consultation. Most people start out meeting weekly, which helps us build momentum, and once things feel established we can move to weekly or biweekly depending on what you need. Your goals guide how long we work together; there's no fixed number of sessions.",
  },
  {
    question: 'How much does a session cost?',
    answer:
      "The self-pay rate is $150 per session. If you're using insurance, your cost depends on your specific plan and benefits, which is exactly what I'll help you sort out before we begin. It's always a good idea to call the member services number on your insurance card and ask about your outpatient mental health coverage too. You can also check your benefits on the insurance verification page.",
  },
  {
    question: 'Do you take insurance?',
    answer:
      "Yes. I'm in-network with Aetna, Cigna / Evernorth, UnitedHealthcare / Optum, and Blue Cross Blue Shield. I'm not able to accept Medicaid or Medicare at this time. Coverage and costs can vary a lot from plan to plan, so I'd encourage you to check directly with your insurer about your mental health benefits. If you're not sure what your plan covers, I'm also happy to verify your benefits for you, just share a few details on the insurance verification page.",
  },
  {
    question: 'What if you don’t take my insurance, or I’d rather not use it?',
    answer:
      'Self-pay is always welcome at $150 per session, and some people prefer it for privacy or flexibility. I also keep a limited number of sliding-scale and reduced-fee spots for uninsured clients who need them, so please ask. Under the No Surprises Act, I can also give you a Good Faith Estimate of costs up front.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      "Life happens, and I just ask for as much notice as you can give. A session cancelled within 24 hours of your appointment is considered a late cancellation, with an $80 fee, though genuine emergencies and illness are the exception. The sooner you let me know, the easier it is to find another time that works.",
  },
  {
    question: 'What is your no-show policy?',
    answer:
      "If you don't make it to a session and haven't been in touch (arriving more than ten minutes late without notice), it's counted as a no-show, and the full $150 session fee applies. If something urgent and documented came up, just reach out, I'll always work with you on it.",
  },
  {
    question: 'How can I reach you between sessions?',
    answer:
      "I'm reachable by email during business hours and will get back to you as soon as I can, usually within about two business days. Please keep messages general; my email is HIPAA-compliant, but it's best for scheduling and quick logistics rather than urgent needs. If something urgent comes up, a short-notice telehealth session may be possible.",
  },
  {
    question: 'Is what I share confidential?',
    answer:
      "Yes. What you share in therapy stays between us, with a few legal exceptions every therapist is required to follow: if there's a serious risk of harm to you or someone else, suspected abuse or neglect of a child or vulnerable adult, or a court order. I'll always talk you through these so nothing comes as a surprise.",
  },
  {
    question: 'What if I’m in crisis?',
    answer:
      'This website and my inbox are not monitored for emergencies. If you or someone you love is in immediate danger, call 911. You can also call or text the 988 Suicide & Crisis Lifeline any time, day or night. I keep a full list of national and North Texas crisis resources on the Crisis Resources page.',
  },
];

export type CrisisResource = {
  name: string;
  contact: string;
  contactHref?: string;
  note?: string;
};

export const crisisNational: CrisisResource[] = [
  {
    name: '988 Suicide & Crisis Lifeline',
    contact: 'Call or text 988',
    contactHref: 'tel:988',
    note: 'Free, confidential support 24/7. Chat at 988lifeline.org.',
  },
  {
    name: 'Crisis Text Line',
    contact: 'Text HOME to 741741',
    contactHref: 'sms:741741?&body=HOME',
    note: 'Free, 24/7 text support with a trained crisis counselor.',
  },
  {
    name: 'SAMHSA National Helpline',
    contact: '1-800-662-4357',
    contactHref: 'tel:18006624357',
    note: 'Treatment referral and information for mental health and substance use, 24/7.',
  },
  {
    name: 'The Trevor Project (LGBTQ+ youth)',
    contact: '1-866-488-7386',
    contactHref: 'tel:18664887386',
    note: 'Crisis support for LGBTQ+ young people. Text START to 678-678.',
  },
  {
    name: 'Trans Lifeline',
    contact: '1-877-565-8860',
    contactHref: 'tel:18775658860',
    note: 'Peer support run by and for trans people.',
  },
  {
    name: 'Veterans Crisis Line',
    contact: 'Call 988, then press 1',
    contactHref: 'tel:988',
    note: 'Or text 838255. Support for veterans and their loved ones.',
  },
];

export const crisisLocal: CrisisResource[] = [
  {
    name: 'MHMR of Tarrant County Crisis Line',
    contact: '1-800-866-2465',
    contactHref: 'tel:18008662465',
    note: '24/7 local crisis assessment and mobile crisis outreach.',
  },
  {
    name: 'North Texas Behavioral Health Authority',
    contact: '1-866-260-8000',
    contactHref: 'tel:18662608000',
    note: 'Crisis line serving Dallas and surrounding counties.',
  },
  {
    name: 'Suicide & Crisis Center of North Texas',
    contact: '214-828-1000',
    contactHref: 'tel:12148281000',
    note: 'Local crisis line and support services.',
  },
  {
    name: '2-1-1 Texas',
    contact: 'Call or text 211',
    contactHref: 'tel:211',
    note: 'Connection to local health and community resources.',
  },
];

export const pillars = [
  {
    tag: 'INTEGRATION',
    title: 'Systems Integration Architecture',
    body: 'EHRs, ATSs, dental PMS, clearinghouses. I\u2019ve turned brittle point-to-point integrations into scalable platforms at every company I\u2019ve joined.',
  },
  {
    tag: 'TRANSLATION',
    title: 'Engineering-to-Business Translation',
    body: 'Former software engineer. I read the architecture, not just the spec \u2014 and collapse strategy decks into briefs CTOs and CPOs both sign.',
  },
  {
    tag: 'SYSTEMS',
    title: 'Operational Systematization',
    body: '2\u00d7 Roadmap Team of the Year. I build the intake systems and prioritization frameworks product orgs are missing. I fix how teams decide what to ship.',
  },
  {
    tag: 'EXECUTION',
    title: 'Cross-Functional Authority',
    body: 'The PM who can review a pull request, redesign a connector architecture, and rewrite the GTM narrative in the same week.',
  },
];

export const caseStudies = [
  {
    id: 'eligibility-ai',
    tag: 'Shipped \u2014 DentalXChange',
    company: 'DentalXChange',
    period: 'Dec 2025 \u2014 Present',
    title: 'Eligibility AI: making benefit data trustworthy enough to act on',
    stat: '$2M',
    statLabel: 'enterprise pipeline unlocked',
    summary:
      'Defined the writeback architecture that lets AI-generated eligibility data flow back into every major dental PMS \u2014 turning a reporting feature into a point-of-care decision tool.',
    problem:
      'Eligibility AI could tell a practice what a patient\u2019s benefits looked like, but the data had nowhere to go. Front-desk staff still had to re-key results into Dentrix, Open Dental, Denticon, or Eaglesoft by hand, so the "AI" insight lived in a browser tab instead of the workflow where decisions actually get made. Enterprise buyers had flagged this gap directly: writeback was the line item blocking signature.',
    approach:
      'I mapped the eligibility data model against the write paths of all four major PMS platforms \u2014 each with different field structures, auth models, and tolerance for automated writes. Rather than building four one-off integrations, I defined a shared writeback schema that the connector layer could translate per-platform, so new PMS support became a mapping exercise instead of a new integration project. I worked sessions with the Open Dental and DBS/Open Dental teams directly to validate the approach against real practice data before it went to engineering.',
    impact:
      'The architecture became the unlock for deals that had been stalled on this exact gap \u2014 roughly $2M in enterprise pipeline became viable once eligibility data could land directly in the system staff already use, and it set the pattern Reconcile AI later reused for EOB writeback.',
  },
  {
    id: 'schema-agnostic-ats',
    tag: 'Shipped \u2014 Radancy',
    company: 'Radancy',
    period: 'Feb 2023 \u2014 Dec 2025',
    title: 'From 100+ one-off integrations to one data layer',
    stat: '62%',
    statLabel: 'CRM accuracy gain',
    summary:
      'Re-architected Radancy\u2019s ATS integration platform from brittle point-to-point connections into a schema-agnostic data layer \u2014 then rebuilt the delivery model so new connectors shipped in days, not months.',
    problem:
      'Every new enterprise client meant a new point-to-point integration to their ATS \u2014 each one hand-coded against that vendor\u2019s quirks. With 100+ clients, the integration team was maintaining a sprawling set of one-off mappings that broke whenever a vendor changed their schema, and the ML models downstream were only as good as the messiest connector feeding them. The release backlog had grown to six months.',
    approach:
      'I led the re-architecture toward a schema-agnostic data layer: a normalized internal model that every ATS connector mapped into, so the ML and matching layer downstream never had to know which ATS the data came from. In parallel, I rebuilt the connector delivery model end-to-end \u2014 standardizing how connectors were spec\u2019d, tested, and shipped \u2014 and authored the org-wide intake and prioritization framework that took planning cycles from three weeks down to five days (Roadmap Team of the Year, 2024). I also scoped and shipped a self-serve integration UI with AI-assisted field mapping, so configuration work that used to require an engineer could be done by an implementation specialist.',
    impact:
      'The normalized data layer drove a 62% accuracy gain in CRM data and a 53% lift in applicant-to-hire conversion, while expanding platform reach 40% across the client base. The delivery rebuild cut deployment time 45% and cleared the six-month backlog in a single quarter. The self-serve UI cut setup time 22%, reduced integration costs 30%, and freed 400+ engineering hours per quarter.',
  },
  {
    id: 'health-note-onboarding',
    tag: 'Shipped \u2014 Health Note',
    company: 'Health Note',
    period: 'Feb 2022 \u2014 Feb 2023',
    title: 'Cutting time-to-revenue in half as founding PM',
    stat: '115\u219260',
    statLabel: 'days to revenue',
    summary:
      'As one of two founding product hires, built the customer admin dashboard that turns a new client from a sales conversation into a live, HL7/FHIR-connected patient intake instance \u2014 with almost no engineering involvement.',
    problem:
      'Health Note\u2019s digital intake product was strong, but every new health system client took 115 days from signed contract to live instance \u2014 each one requiring engineers to manually configure forms, EHR connections, and account settings. At Series A, that engineering drag was the ceiling on growth.',
    approach:
      'I owned the roadmap for turning onboarding into a product surface instead of a services engagement. I designed and built a customer admin dashboard that could spin up a fully configured Health Note instance from a few lines of input \u2014 practice details, EHR type, and an email address \u2014 handling the HL7/FHIR connection setup that previously required an engineer to hand-configure for each of the platform\u2019s 500K+ patient base of health system clients.',
    impact:
      'Time-to-revenue dropped from 115 to 60 days, removing the single biggest bottleneck between a signed contract and recognized revenue \u2014 a structural contribution to the 28% year-over-year revenue growth during my time there.',
  },
  {
    id: 'recovery-ai',
    tag: 'Self-Initiated \u2014 In Progress',
    company: 'DentalXChange',
    period: '2026 \u2014 Proposed by me, in development',
    title: 'Recovery AI: closing the loop Reconcile AI opens',
    stat: 'In Dev',
    statLabel: 'self-proposed product',
    summary:
      'A product I conceived, scoped, and am building the case for end to end: an auto-resubmission API that takes a flagged, denied claim out of Reconcile AI and turns it into a corrected, resubmitted one \u2014 without a human leaving the screen.',
    problem:
      'Reconcile AI\u2019s connector model \u2014 which I architected \u2014 matches EOBs and flags payment discrepancies and denials. But flagging isn\u2019t fixing. Once a claim is flagged, staff still have to manually diagnose the denial reason, correct the claim, and resubmit it to the payer outside the tool entirely. That manual handoff is exactly where the reconciliation-hour savings leak back out.',
    approach:
      'Nobody asked for this one \u2014 I saw the gap in the system I\u2019d already built and proposed Recovery AI on my own. It\u2019s a new capability layered directly on Reconcile AI: an API endpoint that takes a flagged claim, maps its denial reason to a correction template, and auto-resubmits it to the payer for the categories of denial that follow predictable patterns, with a review queue inside the Reconcile AI UI for everything else. I\u2019ve scoped the architecture and API contract and am building the business case to bring to engineering.',
    impact:
      'Still early, but the framing is direct: Reconcile AI was projected to cut manual reconciliation hours 60%+. Recovery AI targets the step right after \u2014 resubmission \u2014 which is where most of that recovered time currently goes straight back into staff workload.',
  },
  {
    id: 'linkedu',
    tag: 'Self-Directed Concept',
    company: 'Independent product strategy',
    period: 'Full strategy deck, built solo',
    title: 'LinkedU: the job platform LinkedIn isn\u2019t building for new grads',
    stat: '$1.59B',
    statLabel: 'estimated TAM',
    summary:
      'A complete product strategy for a LinkedIn-branded mobile app built for the 96 million recent grads job-hunting worldwide \u2014 swipe-based matching, data-driven resume building, and a go-to-market built for where Gen Z actually spends time.',
    problem:
      'Recent grads are applying into a black hole: roughly 90% of their applications get no response, and only 2% lead to an interview \u2014 even when applicants meet 90%+ of the listed qualifications. Half don\u2019t feel prepared for the job search at all, and 88% say their university didn\u2019t prepare them for their career. Meanwhile only 17% of recent grads use LinkedIn for job search, despite it being the dominant professional network \u2014 a clear sign the product isn\u2019t built for them.',
    approach:
      'I designed LinkedU as a standalone product strategy from zero: a LinkedIn-branded experience aimed squarely at new grads, with jobs funneled in only if they\u2019re explicitly entry-level. The core loop is a gamified, swipe-based job matching interface paired with a data-driven profile builder that converts a user\u2019s skills and achievements into a resume recruiters actually respond to. I built out the full roadmap \u2014 premium recruiter chat, resume builder, mentorship, application tracking \u2014 scored each item on value versus effort, defined a monetization model (sponsored listings, premium employer filters, application credits), a go-to-market plan centered on TikTok/Instagram and university career centers, and a KPI framework for acquisition, retention, and time-to-hire.',
    impact:
      'Sized the opportunity at roughly $1.59B TAM, applying LinkedIn\u2019s reported ARPU to the 96M recent-grad segment of the 235M college graduates worldwide \u2014 with a phased roadmap prioritized by the same value-to-effort discipline that won Roadmap Team of the Year, applied here to a product built from a blank page.',
  },
];

export const experience = [
  {
    company: 'DentalXChange',
    role: 'Senior Technical Product Manager \u2014 Platform Strategy',
    period: 'Dec 2025 \u2014 Present',
    location: 'Miami',
    detail: 'Own platform strategy across xConnect, Connectors, and DMD \u2014 every major dental PMS, 3M+ annual transactions, 1,800+ practices. Report directly to the CTO.',
  },
  {
    company: 'Radancy',
    role: 'Technical Product Manager \u2014 Integrations Platform',
    period: 'Feb 2023 \u2014 Dec 2025',
    location: 'Remote',
    detail: 'ATS Integrations Platform serving 100+ enterprise clients. Re-architected the data layer, rebuilt connector delivery, and authored the org-wide roadmap framework.',
  },
  {
    company: 'Health Note',
    role: 'Founding Product Manager',
    period: 'Feb 2022 \u2014 Feb 2023',
    location: 'Remote',
    detail: 'Digital patient intake for a Series A health-tech serving 500K+ patients. Owned the roadmap and led HL7/FHIR EHR integrations.',
  },
  {
    company: 'Regions Bank',
    role: 'Software Engineer \u2192 Product Manager',
    period: 'Feb 2021 \u2014 Feb 2022',
    location: 'Remote',
    detail: 'Redesigned Mosaic, the bank\u2019s HR ops platform \u2014 300+ initiatives tracked, task completion +50%, 70% dashboard adoption in 90 days. Innovation Excellence Award, 2021.',
  },
  {
    company: 'Minden Press-Herald',
    role: 'Editor & Software Engineer',
    period: 'Jul 2018 \u2014 Feb 2021',
    location: 'Minden, LA',
    detail: 'Rebuilt the publication\u2019s digital infrastructure and launched a subscription product \u2014 readership +13.4%, sports revenue +46%. Swept four Louisiana Sports Writing Awards.',
  },
];

export const contact = {
  name: 'JJ Marshall',
  location: 'Miami, FL',
  phone: '318.210.4144',
  email: 'johnjamesmarshalljr@gmail.com',
  linkedin: 'linkedin.com/in/jjmarshalljr',
  linkedinUrl: 'https://linkedin.com/in/jjmarshalljr',
};

export const socials = {
  youtube: 'https://www.youtube.com/@jjgabbana',
  tiktok: 'https://tiktok.com/@jj_gabbana',
  facebook: 'https://www.facebook.com/jjgabbanagucci',
};

export const creative = [
  {
    tag: 'REACH',
    stat: '100K+',
    title: 'Followers across TikTok, Instagram & Facebook',
    body: 'A media presence built from scratch, one ballroom video essay and clip breakdown at a time \u2014 same instinct as the connector work: take something dense and make it land for the audience in front of you.',
    link: socials.tiktok,
    linkLabel: 'TikTok \u2192',
  },
  {
    tag: 'MUSIC',
    stat: '20 yrs',
    title: 'Grammy-nominated ballroom producer & DJ',
    body: 'Two decades producing and DJing in ballroom \u2014 Godfather of House Gabbana, booked internationally, with a Digitakt-to-Ableton pipeline turning out new tracks for upcoming sets.',
    link: socials.facebook,
    linkLabel: 'Facebook \u2192',
  },
  {
    tag: 'COMMUNITY',
    stat: 'Global',
    title: 'Building and leading ballroom culture worldwide',
    body: 'As Godfather of House Gabbana, I judge, mentor, and build community across one of ballroom\u2019s most recognized houses \u2014 the same cross-functional, people-first leadership that shows up in how I run product.',
    link: socials.youtube,
    linkLabel: 'YouTube \u2192',
  },
  {
    tag: 'PRODUCTION',
    stat: 'Solo',
    title: 'Video & photo editing \u2014 every asset, self-produced',
    body: 'Every video essay, clip breakdown, and visual on this site and across my channels is shot, edited, and produced by me \u2014 from concept to final cut.',
    link: socials.youtube,
    linkLabel: 'Watch \u2192',
  },
];

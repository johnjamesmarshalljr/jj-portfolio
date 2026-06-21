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
    tag: 'BUILD',
    title: 'Still a Working Engineer',
    body: 'I shipped production code at Regions Bank before product, and I still write and ship it today \u2014 The Let Out is a Next.js 14 / Supabase platform I built solo, full stack, not a prototype.',
  },
  {
    tag: 'EXECUTION',
    title: 'Cross-Functional Authority',
    body: 'The PM who can review a pull request, redesign a connector architecture, and rewrite the GTM narrative in the same week.',
  },
];

export const caseStudies = [
  {
    id: 'the-let-out',
    tag: 'Built Solo \u2014 Live Product',
    company: 'The Let Out',
    period: '2026 \u2014 Designed, built & shipped solo',
    title: 'The Let Out: the system of record ballroom never had',
    stat: '100%',
    statLabel: 'solo-built, full stack',
    summary:
      'A Next.js 14 / Supabase community platform built end-to-end by me \u2014 forum, houses, balls, results, lineages, calendar, and a live SoundCloud radio \u2014 designed to be the structural home Facebook groups and Instagram threads can\u2019t replace.',
    problem:
      'Ballroom\u2019s entire institutional memory \u2014 house lineages, ball results, who walked what category and won \u2014 lives scattered across Facebook groups, Instagram captions, and group chats. Nothing is structured, nothing is searchable, and nothing treats the culture\u2019s history as data worth preserving. As someone inside the culture as Godfather of House Gabbana, I felt that gap directly: there was no system of record, because no platform built for general social use was ever going to become one.',
    approach:
      'I designed and built The Let Out myself, full stack: Next.js 14 on the frontend, Supabase for auth, database, and storage. The data model treats houses, members, balls, and categories as structured, linked entities \u2014 not posts \u2014 so lineage and results become queryable history instead of scrollback. I shipped a forum, house profiles, a ball calendar, a results system, and House Gabbana Radio, a persistent SoundCloud-based audio bar, all myself \u2014 architecture, UI, and deployment. The visual direction (dark aubergine palette, ink/gold/magenta/violet) was built to feel like it belongs to the culture, not borrowed from a generic SaaS template.',
    impact:
      'The platform is functionally complete and live. The current focus is adoption \u2014 getting the community using it as the default record \u2014 not adding features, because the hard problem was never "can this be built," it was "does ballroom have a structural home yet." Now it does.',
  },
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

export const essays = [
  {
    id: 'shortcut-is-a-mirage',
    number: '01',
    category: 'AI & Craft',
    date: 'February 2026',
    title: 'The Shortcut is a Mirage',
    dek: 'On software, maturity, and the work that matters',
    body: [
      'Software development is not an automatable task. It requires accountability \u2014 like anything with value.',
      'When someone pitches automating a $140K salary, of course companies pay attention. But there\u2019s a reason that job pays well. In SaaS, the software IS the product.',
      'My personal thesis on maturity comes down to two things: holding contradictions instead of thinking in binaries, and accepting that there is no shortcut.',
      'I can build a SPA in an hour with Claude. But the demo isn\u2019t the product. What you call a shortcut today is tech debt tomorrow.',
      'Humans create the agents. Humans decide what to measure and how. Data is human-made. AI is human-made.',
      'The shortcut is a mirage.',
    ],
  },
  {
    id: 'study-video-games',
    number: '02',
    category: 'Product Thinking',
    date: 'February 2026',
    title: 'Study Video Games',
    dek: 'The best product case studies are hiding in plain sight',
    body: [
      'Want to get better at product? Study video games.',
      'Not because it\u2019s trendy \u2014 because the entire history of the industry is documented, recent enough to trace in real time, and built by teams solving the exact same problems we all face: scope creep, platform shifts, user obsession vs. business reality.',
      'The development cycles, the platform wars, the products that defined entire generations of users \u2014 it\u2019s all there.',
      'You can learn big-P Product from studying any industry. But few industries let you watch the full arc \u2014 from garage experiment to global platform \u2014 with this much transparency.',
    ],
  },
  {
    id: 'process-isnt-the-enemy',
    number: '03',
    category: 'Systems',
    date: 'February 2026',
    title: 'Process Isn\u2019t the Enemy of Speed. Chaos Is.',
    dek: 'What intake systems reveal about product culture',
    body: [
      'Show me how work enters your product org and I\u2019ll tell you if it actually works.',
      'Not the roadmap. Not the retros. Not the tools.',
      'How does a request go from "someone has an idea" to "engineering is building it"? Is there a system? Is there a business case? Does someone with context decide what matters \u2014 or does the loudest voice win?',
      'Most orgs skip this part. They jump straight to execution frameworks and quarterly planning without ever defining how work enters the pipeline in the first place.',
      'The unsexy truth: a clear intake process \u2014 where requests are prioritized against defined business objectives, not gut feelings \u2014 does more for shipping velocity than any reorg, new tool, or methodology ever will.',
      'Process isn\u2019t the enemy of speed. Chaos is.',
    ],
  },
  {
    id: 'trap-of-being-good',
    number: '04',
    category: 'Career',
    date: 'February 2026',
    title: 'The Trap of Being Good at Your Job',
    dek: 'Useful gets you in the building. Intentional gets you where you want to go.',
    body: [
      'Nobody talks about the trap of being good at your job.',
      'I\u2019ve always been the person who solves problems and relieves pressure in a room. That\u2019s how I got into rooms in the first place. But once people realize you\u2019re valuable, you get invited to everything. Every meeting, every thread, every fire drill. And before you know it, your calendar owns you and you haven\u2019t built anything in weeks.',
      'This is where most careers stall. Not from a lack of skill, but a lack of boundaries. The thing that got you in the door becomes the thing that keeps you stuck once you\u2019re inside.',
      'The shift I\u2019m working on is moving from "how do I get in the room" to "is this room worth my time." That means saying no, getting told no, and protecting my capacity the same way I\u2019d protect a product roadmap \u2014 against every well-intentioned distraction.',
      'Being useful gets you in the building. Being intentional gets you where you actually want to go.',
    ],
  },
  {
    id: 'leadership-shield-or-funnel',
    number: '05',
    category: 'Leadership',
    date: 'February 2026',
    title: 'Leadership: Shield or Funnel',
    dek: 'The environment determines the output. The team didn\u2019t change. The conditions did.',
    body: [
      'Product organizations that ship and ones that just spin have one difference: whether leadership absorbs pressure or passes it down.',
      'McKinsey\u2019s Product Management Index found fewer than half of PMs feel prepared to play the roles expected of them. Only 35% have clarity on what it takes to advance. But the stat no survey captures is how many PMs were sold a vision in the interview that never materialized. You get hired to build and ship product. Own a roadmap. Work closely with engineering. Drive strategy. Then you show up and the real job is managing legacy debt, dragging a half-dead product up a hill nobody internally believes in, or becoming a buffer between anxious executives and confused engineers. Product manager to project janitor, and nobody told you the switch happened.',
      'That bait-and-switch is more common than anyone wants to admit, and it\u2019s a leadership problem. Everything breaks when leadership pushes stress downstream instead of processing it into clarity. New urgent meeting. New ask with no context. Priorities shift with no explanation. The team absorbs the chaos and gets blamed when nothing ships.',
      'It doesn\u2019t stop at the PM. When PMs are buried in reactive work, engineers lose clear requirements and build against a moving target. Sprints fill with fire drills instead of roadmap items. Technical debt compounds because nobody has room to address it.',
      'Good product leadership means being the filter between organizational noise and your team\u2019s ability to execute. It means translating pressure into clear priorities instead of forwarding the anxiety. It means building systems so work enters the pipeline through defined business objectives, not whoever panicked last.',
      'The best leaders I\u2019ve worked with had one thing in common: their teams rarely felt the chaos above them. Not because there wasn\u2019t any, but because leadership absorbed it and translated pressure into direction.',
      'The worst did the opposite. Megaphones for every fire drill. And the PMs underneath them weren\u2019t managing products. They were managing their boss\u2019s emotions.',
      'The environment determines the output. Put a great PM and great engineers in a dysfunctional org and they\u2019ll look average. Put those same people somewhere with clear ownership, real trust, and leadership that shields instead of funnels, and they\u2019ll build something meaningful. The team didn\u2019t change. The conditions did.',
      'Product leadership isn\u2019t about having all the answers. It\u2019s about creating the conditions where talented people can do what you hired them to do.',
    ],
  },
  {
    id: 'stop-redesigning-the-showcase',
    number: '06',
    category: 'Product Thinking',
    date: 'February 2026',
    title: 'Stop Redesigning the Showcase. Fix the Product.',
    dek: 'What the NBA taught me about product lip service',
    body: [
      'I played basketball my whole life \u2014 D1, overseas in China and Spain. The NBA has a product problem, and it\u2019s not the All-Star Game.',
      'The All-Star Game is the symptom. Every year they roll out a new format \u2014 East vs. West, captain\u2019s draft, mini tournament, USA vs. World \u2014 hoping the packaging fixes the product. It doesn\u2019t.',
      'The real problem: 82 games is too many. Stars rest through marquee matchups. The regular season barely matters. Timeouts and commercials turn a 48-minute game into a 3-hour broadcast. The product is bloated.',
      'The fix is obvious. Shorten the season. Cut the timeouts. Make every game matter. But that means fewer tickets, fewer broadcasts, less short-term revenue. No owner wants that trade.',
      'So they redecorate the All-Star Weekend instead and call it progress.',
      'Sound familiar? Every product org does this. The product is bloated, the users are disengaged, and leadership knows it. But instead of cutting what doesn\u2019t work, they rebrand the process, reorganize the team, launch a new initiative. Anything that looks like change without actually risking anything.',
      'Stop redesigning the showcase. Fix the product.',
    ],
  },
  {
    id: 'spinner-vs-narration',
    number: '07',
    category: 'Product Thinking',
    date: 'February 2026',
    title: 'The Spinner vs. The Narration',
    dek: 'Communication maturity is knowing when to stop communicating',
    body: [
      'The most mature product teams aren\u2019t asking how to communicate more. They\u2019re asking when to stop.',
      'Think about how AI tools work now. Claude doesn\u2019t just process in silence \u2014 it tells you exactly what it\u2019s doing. "Extracting content. Cleaning the HTML. Cross-referencing sources." Visible progress. You know it\u2019s working.',
      'But now the next question is emerging: do I actually need all of that?',
      'Sometimes the narration becomes noise. You just want the output.',
      'That tension \u2014 too little communication vs. too much \u2014 is one of the most sophisticated problems a product team can have.',
      'Most teams will never get there.',
      'They\u2019re still in the whack-a-mole phase. Ten requests in five different channels. No triage. No visibility into what\u2019s happening or why. Customers waiting in silence while the team is buried.',
      'The goal isn\u2019t to narrate everything. The goal is to know your product, your team, and your customer well enough to deliver exactly the right signal at the right moment.',
      'That takes depth most orgs aren\u2019t even close to.',
    ],
  },
  {
    id: 'i-enjoy-working',
    number: '08',
    category: 'Philosophy',
    date: 'February 2026',
    title: 'I Enjoy Working',
    dek: 'We\u2019re not rejecting work. We\u2019re rejecting places where trust never existed.',
    body: [
      'I enjoy working.',
      'Solving a real problem with people I like, building something cool \u2014 that feels good. That gives me purpose and fuels the rest of my life.',
      'We spend so much of our lives working. I\u2019ve been iterating on my own approach for decades trying to find the right balance.',
      'Here\u2019s what I\u2019ve learned: the great PMs, the great founders, the people who build things worth building \u2014 they embrace contradictions. They know which fires are worth fighting. They have such a strong sense of self that prioritization comes naturally.',
      'Transcending "the grind" starts with knowing the people around you well enough to stop assuming the worst. Not reading every email as an attack. Not treating every disagreement as a threat.',
      'When you truly know someone \u2014 when there\u2019s real trust in the room \u2014 you stop wasting energy on defense and start spending it on the work.',
      'That\u2019s what makes an environment worth showing up to: the feeling that the people around you are on your side.',
      'Most of us aren\u2019t rejecting work. We\u2019re rejecting places where that feeling never existed.',
      'We don\u2019t have to choose between our sanity and our careers. We do have to be intentional about what we build \u2014 and who we build it with.',
    ],
  },
  {
    id: 'desperation-is-a-bad-negotiator',
    number: '09',
    category: 'Career',
    date: 'March 2026',
    title: 'Desperation is a Bad Negotiator',
    dek: 'Clarity is the only thing that keeps you from trading one bad situation for another',
    body: [
      'Desperation is a bad negotiator.',
      'In dating, in your career \u2014 it doesn\u2019t matter. When you need something too badly, you stop evaluating clearly. Every option looks better than it is. Every red flag gets explained away.',
      'The fix isn\u2019t more options. It\u2019s clarity. And clarity doesn\u2019t come from looking harder \u2014 it comes from stopping.',
      'Three questions worth sitting with regardless of where you are: If everything changed tomorrow, what would you refuse to compromise on? What have you consistently wanted across every role, every city, every chapter? What are you tolerating that you said you never would?',
      'But what if you\u2019re already in it? Already desperate, already compromised?',
      'You build leverage. Not by escaping \u2014 by making yourself harder to ignore. You do the work in front of you well enough that you have options. You invest in something outside the situation that reminds you who you are. You stop making the thing you need the only thing you\u2019re focused on.',
      'Desperation shrinks when you have somewhere else to put your energy.',
      'The answers don\u2019t just help you find the next thing. They help you stop chasing the wrong one.',
    ],
  },
  {
    id: 'your-anxiety-is-not-your-teams-emergency',
    number: '10',
    category: 'Leadership',
    date: 'March 2026',
    title: 'Your Anxiety is Not Your Team\u2019s Emergency',
    dek: 'On fake transformations and the leaders who fund them',
    body: [
      '"We\u2019re becoming product-led."',
      'Sure you are.',
      'You\u2019ve got sprint ceremonies and a roadmap in Jira. Meetings about meetings. Feedback loops that go nowhere. PMs spending more time managing up than building anything.',
      'That\u2019s not product-led. That\u2019s the appearance of process as a substitute for actual decision-making.',
      'The best managers I\u2019ve had did the opposite. They absorbed the chaos from above so it never reached me. When I was spiraling, they brought my anxiety down instead of adding to it. They were present before things went wrong \u2014 not just when the pressure hit.',
      'That\u2019s the job. Not redistributing stress. Containing it.',
      'The manager who only shows up when something\u2019s on fire isn\u2019t engaged. They\u2019re just running a different kind of anxiety response. And their team knows the difference.',
      'Real transformation requires leaders who make calls instead of scheduling alignment. Who give their people context and cover \u2014 not pressure campaigns. Who are consistent, not just available in a crisis.',
      'No retro fixes that. No org chart redesign fixes that.',
      'Your anxiety is not your team\u2019s emergency.',
    ],
  },
];

export const essaysPdfUrl = '/JJ_Product_Essays.pdf';

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

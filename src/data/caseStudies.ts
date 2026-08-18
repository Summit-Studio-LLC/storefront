export type CaseStudyStatus = 'live' | 'active' | 'paused';

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryTag: string;
  client: string;
  /** Public site for the product, when there is one worth linking. */
  productUrl?: string;
  /** Screenshot of the running product, captured from productUrl. */
  image: string;
  imageAlt: string;
  /** Caption under the hero image. Use it to say what the screenshot is actually showing. */
  imageNote?: string;
  /** Material Symbols Outlined ligature, used where an image would be too heavy. */
  icon: string;
  /**
   * `live` — shipped and in customers' hands.
   * `active` — being built right now.
   * `paused` — real work exists, but it is not the current focus.
   */
  status: CaseStudyStatus;
  /** One plain sentence on where the project actually stands today. */
  statusNote?: string;
  services: string[];
  duration: string;
  problem: string;
  /** Only ever real, verifiable numbers. Omitted entirely when there are none. */
  stats?: { value: string; label: string }[];
  discovery: string[];
  keyTakeaway: string;
  solution: string[];
  /** Before/after outcomes. Omitted for work that has not shipped results yet. */
  results?: { before: string; after: string }[];
  tags?: string[];
  lookingForward: {
    intro: string;
    items: string[];
    outro: string;
  };
  cta: {
    headline: string;
    subtext: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

export const statusMeta: Record<
  CaseStudyStatus,
  {
    badge: string;
    badgeClass: string;
    detailClass: string;
    dotClass: string;
    pulse: boolean;
    footerIcon: string;
  }
> = {
  live: {
    badge: 'Live',
    badgeClass: 'bg-white/95 text-forest',
    detailClass: 'bg-forest/10 text-forest',
    dotClass: 'bg-forest',
    pulse: false,
    footerIcon: 'check_circle',
  },
  active: {
    badge: 'In Progress',
    badgeClass: 'bg-white/95 text-forest',
    detailClass: 'bg-accent/10 text-accent',
    dotClass: 'bg-accent',
    pulse: true,
    footerIcon: 'construction',
  },
  paused: {
    badge: 'Paused',
    badgeClass: 'bg-white/90 text-stone',
    detailClass: 'bg-stone/10 text-stone',
    dotClass: 'bg-stone/60',
    pulse: false,
    footerIcon: 'pause_circle',
  },
};

/** Array order sets the order of the showcase grid on /case-studies. */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'league-handicap',
    title: 'From Spreadsheet Chaos to Automated Platform',
    subtitle:
      'How a PGA Professional spotted a gap in the golf industry — and we built the product that fills it.',
    category: 'Product Development',
    categoryTag: 'Product Development',
    client: 'Albatross Systems LLC',
    productUrl: 'https://leaguehandicap.com',
    image: '/case-studies/league-handicap.webp',
    imageAlt:
      'The League Handicap dashboard showing member counts, active leagues, and recent activity',
    imageNote:
      "League Handicap's public read-only demo, which runs on sample data rather than a real course's members.",
    icon: 'sports_golf',
    status: 'live',
    tags: ['Web Platform', 'SaaS', 'Product Development'],
    services: [
      'Workflow Automation',
      'Data Import & Integration',
      'Reporting & Dashboards',
      'Database Architecture',
      'Billing & Subscription Setup',
    ],
    duration: 'Under 1 month',
    problem:
      'No software existed for per-league handicap calculations. Every golf course was stuck doing it by hand — and nobody had built the product to fix it.',
    stats: [
      { value: '<3 wks', label: 'build time' },
      { value: '~1 mo', label: 'to first paying customer' },
      { value: 'Growing', label: 'new courses every week' },
    ],
    discovery: [
      'Josh Riches is a PGA Professional who grew league participation at his course by 547% — from 46 members to over 250. That growth revealed a problem every golf course shares — and nobody had solved it.',
      "Every week after a round, league coordinators everywhere sit down with a spreadsheet. They export scores, manually look up each player's history, calculate new handicap numbers using that league's specific rules, update the sheet, and double-check their math. Then they do it again for the next league — which has entirely different rules.",
      "There was no software that handled this. The tools that exist either force a one-size-fits-all formula or only handle tournament scoring. None of them understood that a golfer playing in three different leagues has three different handicaps, each calculated differently. Josh didn't just see his own headache — he saw a gap in the market.",
      "He had tried working with another engineer to build a solution. The project hadn't gotten far. The problem was clear, the market opportunity was real, and he needed a partner who could move fast and build it right.",
    ],
    keyTakeaway:
      "Josh didn't just need his own spreadsheet automated — he saw that every golf course had the same problem and nobody was solving it. We built the product to fill that gap, and it was live and selling to its first customer in under a month.",
    solution: [
      'We started with the spreadsheet. Josh walked through exactly how he calculated handicaps — step by step, rule by rule, league by league. That conversation was the entire spec.',
      "From there, the build took just under three weeks. We built it as a product from day one — not a one-off tool for a single course, but a platform any golf course could use. Scores upload from a single file, the system matches players, applies each league's specific rules, and calculates handicaps automatically.",
      'We made it auditable — every calculation is traceable. When a member questions their number, the math is transparent and on record. We built the reports — handicap lists, individual breakdowns, multi-league summaries. Ready to print, download, or email directly to members.',
      'We handled the edge cases — mixed leagues with different tee boxes, senior players with different defaults, courses with multiple rating sets. All configurable per league, per course.',
      'The platform went live and sold its first paying customer the following week. Total time from first conversation to revenue: approximately one month.',
    ],
    results: [
      {
        before: 'An unsolved industry-wide problem',
        after: 'A product that fills the gap — used by multiple courses',
      },
      {
        before: 'Hours of weekly spreadsheet work per league',
        after: 'Single file upload, handicaps calculated in seconds',
      },
      {
        before: 'Manual lookups and formula errors',
        after: 'Fully automated, auditable calculations',
      },
      {
        before: 'No revenue from the process',
        after: 'Recurring revenue, acquiring new clients every week',
      },
      {
        before: 'Previous engineering attempt stalled',
        after: 'Production-ready in under 3 weeks',
      },
    ],
    lookingForward: {
      intro:
        'League Handicap is acquiring new golf courses every week. The platform already supports multiple courses running concurrent leagues with independent rules and configurations. The roadmap includes:',
      items: [
        'Expanded course onboarding — streamlining setup so new courses can be live in minutes',
        'Direct integrations — moving beyond file upload toward real-time score syncing with scoring platforms',
        'Member-facing features — giving individual golfers visibility into their own handicap history and progression across leagues',
        'Mobile experience — making handicap data accessible from the course, not just the pro shop office',
      ],
      outro:
        'What started as one PGA Professional spotting a market gap is becoming the infrastructure that golf leagues run on.',
    },
    cta: {
      headline: "Got a process that's eating your time?",
      subtext: "We've turned spreadsheets into software before. Let's talk about yours.",
      buttonLabel: 'Schedule a Conversation',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'starcard',
    title: "Rebuilding a small town's discount card as an app",
    subtitle:
      'A paper card with one flat discount printed on the back kept good merchants off it entirely. We built the phone version, and a fundraiser around it.',
    category: 'Mobile App',
    categoryTag: 'Mobile App',
    client: 'StarCard, Cookeville TN — built and maintained by Summit Studio',
    productUrl: 'https://thestarcard.com',
    image: '/case-studies/starcard.webp',
    imageAlt: 'The StarCard site showing the membership card and a merchant offer',
    icon: 'loyalty',
    status: 'active',
    statusNote:
      'As of August 2026 the app and the web portals are built and running against real data, with app store submission, the live-mode payment cutover, and a final legal pass still open before launch.',
    tags: ['Mobile App', 'iOS & Android', 'Payments'],
    services: [
      'Mobile App Development',
      'Product Strategy',
      'Admin & Merchant Portals',
      'Payments & Payouts',
      'Cloud Infrastructure',
      'Brand & Design System',
    ],
    duration: 'In development',
    problem:
      "The Star Card was a piece of plastic with one discount printed on the back: 10% off, everywhere, no exceptions. Merchants whose margins couldn't absorb a flat 10% across the whole store simply didn't join. And a card sitting in a wallet reports nothing, so nobody could tell who used it, where, or whether it was worth buying again next year.",
    discovery: [
      "The existing Star Card was a physical loyalty card with one uniform 10% discount printed on the back, and that single number was the constraint. A shop whose margins cannot absorb 10% across everything on the shelves does not join. The program's ceiling showed up as businesses quietly declining rather than as customers complaining.",
      'Moving the program onto a phone answered three problems at once. Let each merchant write their own offer and the shops that were locked out can come in. Take away the card and there is nothing to lose or leave at home. Put it on a screen and the program can finally see what happens after someone buys a membership.',
      "Most of the constraints were about the counter. Merchants in a town this size are not going to install software, scan anything, or learn a device to honor a discount they're already paying for out of their own margin. Whatever we built had to work if the only thing the merchant ever does is look at a phone someone hands across the register.",
      'The other constraint was how these cards actually sell. Discount cards in this market largely move through school and club fundraisers, which run on order forms, inventory, and a delivery day. That reshaped the second half of the product. If a card sells through a link instead of a catalog, most of the machinery of running a fundraiser simply goes away.',
    ],
    keyTakeaway:
      "The card's real defect was the single number on the back, not the plastic. Once each merchant writes their own offer, the shops that were locked out can join, and the offer becomes something that can change month to month. The phone was the means. The flexibility was the point.",
    solution: [
      'The customer app is Flutter, iOS and Android from one codebase. Members browse participating shops as a grid or on a map, search by name or category, and open a shop for its current offer, hours, phone, and directions. Sign-in runs through Better Auth with Google, Microsoft, or email and password. A savings tab totals what the member has actually saved across the year, which is the honest argument for renewing.',
      "Redemption asks nothing of the merchant — no app to install, no hardware to buy, no device to learn. The member taps Redeem, and the app shows the offer terms, their name, and a live timestamp, valid for a few minutes so a screenshot doesn't travel. The merchant looks at the screen and applies the discount. That tap writes the redemption, and the offer's estimated value gets copied onto the row at the moment it happens, so the savings total stays correct even after the merchant changes the offer.",
      'Nearby alerts run on the device. A member who opts in gets a push when they are close to a participating shop with a live offer, and their location is matched against nearby shops entirely on the phone. It never leaves the device. Matching, dwell, and throttling all happen locally; the server only ever hears that something fired, with no coordinates attached. iOS monitors 20 regions at a time, so the app ranks the nearest set and re-ranks when the member walks or drives out of the area those cover. We wrote a field-test checklist for it, because unit tests prove the rules and only a real walk proves the operating system wakes the app.',
      'The web side is a single Next.js deploy carrying several audiences behind one login. StarCard staff manage merchants, offers, memberships, and announcements. Shop owners get their own portal to edit their offer and read their own numbers: the funnel from profile views through to redemptions, and repeat customer rate. There is a printable counter sign and window cling generated per shop. Summit Studio has an operator view for billing reconciliation, tenant and database health, and emergency controls. Roles are rows in a grants table rather than a column on the user, so one person can hold several of them without a migration.',
      "The fundraiser side wasn't in the original spec at all. An organization runs a season and every kid selling gets their own link. The kids have no accounts: a parent receives a single-use 30-minute email token, stored only as a hash, that trades for a 90-day sliding session, because asking children to invent passwords was never going to be the answer. Sales through a link are credited to that kid, deep links survive an app install so a tap before download still attributes correctly, and the organization's share is released to their Stripe connected account 14 days after the sale, with the split configurable per campaign.",
    ],
    lookingForward: {
      intro:
        "The software is close to finished. What's left is mostly the kind of work that doesn't show up in a diff.",
      items: [
        'App store submission — the listing copy and the App Store and Play privacy label answers are written and waiting to be entered at submission time',
        'The live-mode payment cutover — Connect is wired and verified end to end in sandbox',
        'The merchant network build-out — the public shop directory is built and stays behind a feature flag until the network is ready to stand behind',
        'A first fundraiser season with a local organization, and fixing whatever a real season breaks, which will be something',
        'Legal review of the member, merchant and organizer terms alongside the privacy policy',
      ],
      outro:
        'None of that is interesting work, and it is exactly where products like this stall. It launches when those are closed and not before.',
    },
    cta: {
      headline: 'Have something on paper that belongs on a phone?',
      subtext:
        'We build the app, the admin behind it, and the parts nobody thinks about until launch week.',
      buttonLabel: 'Schedule a Conversation',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'heros-rise',
    title: 'Building a rules engine that AI can safely edit',
    subtitle:
      'Phil has spent a decade hand-translating tabletop rules on paper. Hero’s Rise is the attempt to hand that job to software without letting the software make things up.',
    category: 'Product Development',
    categoryTag: 'Product Development',
    client: "Hero's Rise, an in-house product built by a small founding team",
    productUrl: 'https://herosrise.com',
    image: '/case-studies/heros-rise.webp',
    imageAlt: "The Hero's Rise site introducing the cross-system game master companion",
    icon: 'casino',
    status: 'active',
    statusNote:
      'As of August 2026 the Pathfinder 1e engine core and the GM portal are built and under test, with spells, feats and traits shipped and the remaining content types still to run through the pipeline. The AI harness is designed but not built, and the validation site is up ahead of a launch that has not happened.',
    tags: ['AI & Automation', 'Web Platform', 'Product Development'],
    services: [
      'Product Strategy',
      'Rules Engine Architecture',
      'AI Systems Design',
      'Full-Stack Development',
      'Infrastructure & Cost Modeling',
    ],
    duration: 'In active development',
    problem:
      'A tabletop roleplaying game runs on a rulebook thousands of pages long, and one person at the table, the game master, is expected to hold all of it. Every group also invents its own rules on top of that, so the book is never the whole answer. When a question comes up mid-session, four adults sit and wait while somebody flips pages and does arithmetic.',
    discovery: [
      'Phil has been running tabletop games for over a decade, mostly Pathfinder, with detours into D&D and whatever else caught his attention. Over those years he built a stack of handwritten conversions: a mechanic he liked from one game, redone in the math of the game his table was actually playing. Noah is the engineering half and the newest game master in the room. The question the product starts from is why any of that translation is still happening on paper.',
      "The tools that exist solve a different problem. Roll20 and Foundry are virtual tabletops, built for groups playing over video with maps and tokens. D&D Beyond manages characters for one publisher's catalog. All of them automate the rules as published. None of them can automate the rule your table invented last Tuesday, and Foundry's per-system plugins are walled off from each other by design, which is the exact wall Phil kept climbing over by hand.",
      'In May they put up a small site to test the idea on strangers instead of friends. It has a waitlist, a survey, and a page of worked conversions Phil wrote out longhand so a visitor could judge the concept rather than a promise. The rules for that site were written down before it was built: no fake signup counters, no manufactured scarcity, no invented testimonials, no exit popups, and the what-we’re-hearing panel stays hidden until there are real responses behind the numbers. It is still up.',
      "By July the plan had changed shape. Mixing mechanics across game systems is still where this goes, but it now arrives through per-system engines built deep first, because a translation between two games is worthless if neither side's math is trustworthy. That set the hard constraint on everything after it. An AI improvising rules arithmetic at the table is worse than no tool at all, because a wrong number delivered confidently goes straight onto a player's character sheet.",
    ],
    keyTakeaway:
      'The engine is the authority. It is ordinary deterministic TypeScript, and every number the table sees comes out of it. The AI never does table math; it writes code, proves that code with tests it wrote separately, and hands the game master a diff to approve or throw away.',
    solution: [
      'The first thing built was the engine, and there is no AI in it. It is pure TypeScript with no I/O and no framework dependencies, split into plan and apply. Plan takes an intent and the current state, consumes all the randomness, and emits events with the dice results already baked in. Apply is a pure function that folds an event into state. A session is therefore an append-only log that replays identically in a browser, on a server, in a test, or inside a sandbox.',
      'Then the rules content, which is the part nobody wants to do. 623 spells, 162 feats and 355 traits are modeled as mechanics rather than stored as text. A pipeline classifies each entry, writes the module, and separately writes an oracle test from the source text alone, with no sight of the module it is checking. Every entry is cross-checked against two published sources with real citation URLs. The three test suites now run past 2,200 tests. When a batch fails, the working assumption is that the instructions were wrong rather than the entries, and that has held at roughly five prompt bugs for every genuine content defect.',
      'A campaign is an instance: its own fork of the engine source, its house rules, its notes, and its event log. When the GM asks for a change in plain language, the request goes to an isolated microVM where a coding model edits that fork’s source, writes tests for the new behavior, and runs the entire regression suite. What comes back to the GM is a diff, the test results, and a preview. Approve, and the change compiles into a versioned bundle that takes effect at the next session boundary, never in the middle of a fight. Reject, and nothing moved. Rollback is a version pointer.',
      'The GM portal is built and running against typed fixtures. Seven tabs cover the session, the shared log, the party, the compendium, house rulings, the translation bench, and scheduling. It is a React app on a NestJS API with Better Auth and Postgres behind it, and a Playwright test walks the whole login-to-session journey against real servers and a real database. Fixtures first was deliberate: settling the shape of every payload before the database arrives makes the database a swap instead of a rewrite.',
      'The business model was decided before the code that depends on it. Engines, character sheets, dice and exports are MIT-licensed and self-hostable, so a campaign stays a folder you can take with you. The subscription buys hosting and the AI features. Rules content carries its own separate license from the first commit, OGL 1.0a for Pathfinder and the CC-BY-4.0 5.1 SRD for D&D, never the copyrighted books. Cost is instrumented per job from the first test session, because the price of an AI rule change is a real line item, and an open-weight coding model runs one for cents rather than dollars.',
    ],
    lookingForward: {
      intro:
        'The engine is deliberately ahead of everything else. The order from here is set by what a launch actually requires.',
      items: [
        'Magic items and gear, then races and monsters. The remaining content types run through the same pipeline in the order the source registry sets.',
        'The harness prototype and a model bake-off. Open-weight coding models get run against real rule-change jobs and scored on tool-call reliability, test quality, and dollars per job. That benchmark then stays as a permanent eval, rerun whenever a model or an engine version changes.',
        'Instance persistence and the approval flow. Sandbox integration plus the diff-and-approve screen are what turn the harness from a script into a product.',
        'A D&D 5.1 SRD engine alongside Pathfinder 1e. Launch waits for both, since Pathfinder 1e on its own reaches only a small slice of the tables that would use this.',
        'A decision on session audio. Transcribing every player on a separate microphone costs roughly five times a single mixed track with speaker labels, and it is the largest line in the cost model.',
      ],
      outro:
        "None of this has been proven at a table other than the founders' own. That is the next real test, and it is the one that decides how deep the rest of this gets built.",
    },
    cta: {
      headline: 'Building something where the math has to be right?',
      subtext:
        "We build AI features that prove their work instead of asking you to trust them. Let's talk about yours.",
      buttonLabel: 'Schedule a Conversation',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'shiptide',
    title: 'Turning messy carrier data into invoices that hold up',
    subtitle:
      "Warehouses that ship other companies' packages lose real money in the gap between what carriers charge them and what they bill their customers. ShipTide was built to close that gap.",
    category: 'SaaS Platform',
    categoryTag: 'SaaS Platform',
    client: 'Summit Studio internal product, built for small and mid-sized 3PLs',
    image: '/case-studies/shiptide.webp',
    imageAlt: 'The ShipTide dashboard showing revenue, margin, shipment volume, and carrier spend',
    imageNote:
      "The ShipTide dashboard running locally. The figures shown are placeholder UI data, not a customer's numbers.",
    icon: 'local_shipping',
    status: 'paused',
    statusNote:
      'As of August 2026, ShipTide has a working quote-to-price pipeline, carrier rate card ingestion, and multi-tenant auth running against a real database, and active development is paused while other work takes priority.',
    tags: ['SaaS', 'AI & Automation', 'Data Integration'],
    services: [
      'Product Strategy',
      'Data Pipeline Engineering',
      'AI-Assisted Data Mapping',
      'Pricing & Rate Engine',
      'Database Architecture',
      'Multi-Tenant SaaS Platform',
    ],
    duration: 'Roughly two weeks of concentrated build in March 2026, paused since',
    problem:
      'A 3PL is a warehouse business that stores and ships packages on behalf of other companies. It buys shipping in volume from UPS, FedEx, and USPS at negotiated rates, then rebills its own customers at marked-up rates set per contract. The margin lives entirely in the gap between those two numbers, and most 3PLs cannot see that gap clearly until weeks after the boxes are gone.',
    discovery: [
      'Picture the billing lead at a 3PL doing month-end close. Carrier invoices arrive weekly as enormous files, one line per package, full of surcharges nobody quoted. The warehouse system has its own record of what actually shipped. The customer contract lives in a spreadsheet somebody built two years ago and nobody has opened since. Getting from those three sources to one invoice the customer will pay without arguing is manual reconciliation work, every month.',
      'The same spreadsheet problem shows up earlier, at the quoting stage. When a 3PL wants to win a new account, the prospect sends a file of their historical shipments. Someone opens it, works out what the columns mean, looks up the origin and destination ZIP pair on each row to find the carrier’s zone, hunts down the right cell in a rate card, applies markup, adds fuel, and totals it. The prospect files are never in the same format twice. The rate cards are not much better: UPS publishes one service per sheet, FedEx stacks several services vertically inside a single sheet, and DHL only publishes PDFs.',
      'Two things constrained the design. The data never arrives clean, and any product that assumes otherwise dies during onboarding. And a 3PL will not rip out its warehouse management system to try billing software. The WMS is where receiving, picking, inventory, and labor tracking already live. Asking an operator to replace it is asking them to bet the business on a tool they have not used yet.',
      'The build opened with a teardown of prior art in this category, and a read on where the market was already crowded followed a week later. That reading was useful mostly as a list of things not to hand-build: a data mapper with shipping logic tangled into its core, a rules engine that had grown into its own maintenance problem, and a sync layer wired tightly to a single warehouse vendor. Each was a tax that bought nothing a customer could see.',
    ],
    keyTakeaway:
      "Not replacing the WMS is the whole strategy. ShipTide sits on top of whatever a 3PL already runs and takes responsibility for one thing: the money. That narrows the product enough to actually finish it, and it drops the adoption question from 'migrate your operation' down to 'send us a file.'",
    solution: [
      "The bid pipeline rests on Anvil, a separate TypeScript data mapping engine built before any shipping logic went near it. Anvil takes an arbitrary spreadsheet, infers its shape, and proposes a mapping into a target schema. An LLM handles the semantic guesswork about what a column named 'Ship To Zip' or 'dest_postal' is supposed to mean. Anvil knows nothing about shipping. ShipTide plugs into it through a domain package that supplies the carrier rate and shipment schemas along with the load adapters, so Anvil can be pointed at an entirely different domain by a different product later.",
      "On top of that sits the bid workflow, a four-phase wizard: Collect, Process, Price, Deliver. Collect takes the prospect's shipment file and walks the user through the generated column mapping, shown either as a visual set of connection lines or as a details table. Process runs the ETL, resolves each shipment's origin and destination ZIP pair to a carrier zone, then matches it against imported rate cards, rounded up to the next carrier weight break the way the carriers do it themselves. Price opens the markup editor. Deliver produces the review screen and the export, including a net rate sheet and a shipment-by-shipment comparison against what the prospect pays today.",
      'Carrier rate cards get their own import pipeline. An LLM inspects a sample of sheets from an uploaded XLSX and returns a config describing where the rate data starts, which column holds weight, which columns are zones, and what service each sheet represents. A deterministic extractor then does the actual parsing from that config, so the model is used to recognize layout rather than to read numbers. Rate cards are versioned with full history and per-version ingest details, because a rate card that changed quietly is a billing dispute waiting to happen.',
      'Markup resolves in a defined order. A rule set on a specific service beats one set on a carrier, which beats the account default. Rules are either a percentage or a flat amount, with an optional per-shipment floor. Fuel surcharges apply separately at different rates for ground and air, since the carriers treat them differently. Every quoted rate stores its base cost, its markup amount, the rule that produced it, and its fuel component, so any number on an invoice can be taken back apart later.',
      "What runs today is Next.js 16 and Postgres with Drizzle, tRPC between the web app and a NestJS server, and Better Auth for organization-scoped tenancy. Temporal is wired in but still carries only a scaffold workflow. Where the prior art hand-built these particular pieces, ShipTide's architecture decisions mostly say reuse, and those are recorded as ADRs rather than built yet: GoRules for the business rules engine instead of custom condition trees, dlt as a small Python sidecar for data sync instead of a bespoke orchestrator, and a single Postgres with a partitioning strategy written down instead of a two-database split. Keeping the decisions and their reasoning on the record is why the project can be picked back up without re-deriving any of it.",
    ],
    lookingForward: {
      intro:
        'Work stopped at the start of April 2026 with quoting functional and billing not yet begun. Resuming means picking up at the exact point the strategy memo always identified as the step that gets paid for.',
      items: [
        'Billing: reconciling carrier invoices and WMS records against contract rules to produce customer invoices. The dashboard routes exist as placeholders; the logic behind them does not.',
        'Bill now, true up later: carrier invoices arrive late and incomplete, so the system has to bill on estimates and correct in a later period without breaking the audit trail.',
        'Organization plugin and role-based access: login, verification, and password reset already work, but invitations and per-role permissions are still unchecked boxes.',
        "Zone normalization: carriers label zones differently, with UPS using forms like '102' where FedEx uses '2'. Mapping carrier-specific labels onto standard zones is a known follow-up.",
        'A security and tenancy hardening pass, which has to land before the system goes anywhere near real customer data.',
      ],
      outro:
        'The work is real, it runs, and it is documented well enough that restarting is a matter of days rather than weeks. Whether it restarts depends on whether a 3PL with this problem shows up wanting it finished.',
    },
    cta: {
      headline: 'Is your margin buried in a spreadsheet?',
      subtext:
        'If your business runs on files nobody trusts and math nobody wants to redo, that is a solvable problem.',
      buttonLabel: 'Schedule a Conversation',
      buttonHref: '/contact',
    },
  },
  {
    slug: 'attest',
    title: "The scorecard problem League Handicap couldn't reach",
    subtitle:
      'League Handicap automated the handicap math for course administrators. Attest goes after the step before it: the paper scorecard, and the person retyping it into Golf Genius by hand.',
    category: 'Mobile App',
    categoryTag: 'Mobile App',
    client: 'Summit Studio, with Josh Riches on golf operations',
    productUrl: 'https://attest.golf',
    image: '/case-studies/attest.webp',
    imageAlt:
      'The Attest site showing live hole-by-hole scoring on a phone and watch beside the admin leaderboard',
    icon: 'verified',
    status: 'paused',
    statusNote:
      'As of August 2026, Attest exists as a working Flutter app, admin dashboard, API, and Golf Genius extension with a signed Android release build, and active development has been paused since May while League Handicap gets the hours.',
    tags: ['Mobile App', 'AI & Automation', 'Offline-First'],
    services: [
      'Mobile App Development',
      'Offline-First Architecture',
      'Wearable & Device Integration',
      'AI Document Parsing',
      'Browser Extension',
      'Product & UX Design',
    ],
    duration: 'About three and a half weeks of active build in April and May 2026',
    problem:
      'Golf leagues still run on paper. A player writes scores on a card, a playing partner signs it, and then a golf assistant sits down and retypes every number into Golf Genius. There are two places for a number to go wrong, and one of them is a paid employee doing data entry.',
    discovery: [
      'League Handicap solved the calculation. A course uploads a file of scores, the platform applies each league’s rules, and handicaps come out the other end. But that file has to exist first, and where it comes from is a golf assistant at a keyboard.',
      "The rest of the week runs the way league golf always has. Members play. Someone in the group keeps the card. Players sign each other's cards, which is how league golf has verified scores for as long as there have been leagues. The cards come back to the pro shop in a pile. Then somebody types.",
      "The obvious fix is an API. Golf Genius has one, and its read side is fine: seasons, events, rosters, rounds, courses, divisions, players. There is no endpoint for posting a score. Score entry happens through the Golf Genius app or the manager web interface and nowhere else, and Josh's read is that this is deliberate. Golf Genius is the system of record for tournament management and USGA posting, and it isn't going anywhere. Whatever Attest did, it had to feed Golf Genius rather than compete with it.",
      "The rest of the constraints came from the course. League golfers skew 45 to 70 and up, and the design target is members who are not tech-forward. Cell coverage on a course is notoriously bad. And in a league's first week, maybe five of forty members will have the app at all, so any verification scheme that requires both players to be running it fails on the day it matters most.",
    ],
    keyTakeaway:
      "The paper scorecard isn't really the problem. The retyping is. Once the build was aimed at that, the question became how a number gets from a golfer's head into Golf Genius with a witness attached and nobody transcribing it in between.",
    solution: [
      'Attest is designed to take a score three ways and land all of them in the same place. One of the three runs today: live scoring, one hole per screen, plus and minus buttons around a default of par, swipe to move on. The other two are specified and not yet wired — photographing a finished paper card and having a model parse it into hole-by-hole scores, and an admin entering a card on behalf of a member who has no intention of installing anything.',
      'Verification replaces the signature, and the version the product is named for is still on the drawing board. The design is a Bluetooth handshake: the scorer taps Verify, their phone broadcasts a short-lived token, the partner’s phone picks it up, pulls the scorecard from its own local database, and the partner approves. Forty bytes out, sixty back, with the scorecard itself never going over the air. The screen is built and the byte-level protocol is specified; the Bluetooth transport underneath it is not wired yet. What the database does record today is which method produced an attestation, so an admin reviewing a season can tell an in-person signature from a remote approval.',
      "That works in a league where everyone has the app, which no league is on week one. So the launch method is deliberately dumber: the verifier signs on the scorer's phone and types their name, the same choreography as passing a paper card across the cart. One phone per group is enough to start. Bluetooth and push-based remote verification turn on as adoption grows.",
      "Then the scores have to reach Golf Genius, and there's no API for that. The last mile is a Chrome side-panel extension. The admin exports verified scorecards from Attest as an XLSX, opens the Golf Genius scorecards page they already have access to, and drags the file into the panel. The extension reads the round roster off the page, matches each row by Golf Genius handle, shows every match and mismatch before anything is submitted, and posts through the same form the admin would otherwise fill in by hand. It runs inside the admin's own browser session. No credentials are stored and no third party touches the course's Golf Genius account.",
      "Underneath all of it: a Flutter app for iOS and Android, a Next.js admin dashboard, a marketing site, and a tRPC API over Postgres. Offline-first through PowerSync, because the back nine has no signal and the app can't stall mid-round waiting for a network. There's an Apple Watch companion in prototype, and a signed Android release build sitting one Play Console submission away from internal testing.",
    ],
    lookingForward: {
      intro:
        "Attest is paused. League Handicap is the product with paying courses on it, and that's where the hours have gone. Resuming Attest means finishing a short list, not starting over.",
      items: [
        "Store submission. The Android release build is signed and the domain is owned. What's left is the Play Console listing, the data safety questionnaire, and a privacy route on attest.golf.",
        "Parsing accuracy on real cards. The photo parser needs a test set of actual scorecards from several courses, in both single-player and group formats, before it's trusted in a live league.",
        "Phone-based identity claim. Members with no email on file can't finish the OTP claim flow yet. The Twilio A2P campaign was awaiting approval when work stopped.",
        'One friendly league. The plan was always a small launch with the whole workflow intact end to end, entry through export, rather than a partial rollout.',
        'Pricing. Attest is meant to be sold per league with members free. A per-league figure is modeled internally but has not been tested against a real course.',
      ],
      outro:
        "None of that is research work. It's a finish list against a codebase that runs today. When a course asks for it, or when League Handicap's roadmap walks into the same paper card, the work is there to pick back up.",
    },
    cta: {
      headline: 'Does your workflow end with someone retyping it?',
      subtext:
        "That's usually where the errors and the hours are hiding. Let's take a look at yours.",
      buttonLabel: 'Schedule a Conversation',
      buttonHref: '/contact',
    },
  },
];

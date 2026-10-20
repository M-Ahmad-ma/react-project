/* ==========================================================================
   Careers — open roles at the factory.
   ⚠  PLACEHOLDER CONTENT — salaries, shifts and copy are illustrative.
   ========================================================================== */

export const JOB_DEPARTMENTS = [
  { id: "all", label: "All Roles" },
  { id: "flavour", label: "Flavour & R&D" },
  { id: "production", label: "Production" },
  { id: "quality", label: "Quality" },
  { id: "sales", label: "Sales" },
  { id: "logistics", label: "Logistics" },
  { id: "marketing", label: "Marketing" },
];

export const JOBS = [
  {
    slug: "senior-flavour-developer",
    title: "Senior Flavour Developer",
    department: "flavour",
    type: "Full-time",
    location: "Dockside Kitchen, Harbour East",
    shift: "Day shift · Mon–Fri",
    salary: "$68k – $84k",
    icon: "spark",
    summary:
      "Lead the seasoning blends behind every Crispo bag, from first bench trial to the line that ships nationwide.",
    responsibilities: [
      "Develop and cost new seasoning blends alongside the head of flavour.",
      "Run bench trials and sensory panels with the whole team.",
      "Write the production spec so every batch tastes the same.",
      "Keep an eye on the ingredient market and propose smarter sourcing.",
    ],
    requirements: [
      "5+ years in food development, seasoning or ready-to-eat.",
      "Confident writing specifications a factory can actually follow.",
      "Palate you can trust — and the paperwork to back it up.",
      "Bonus: experience with fried or savoury snack formats.",
    ],
    benefits: ["Relocation support", "Tasting budget", "Profit share"],
  },
  {
    slug: "fryer-line-supervisor",
    title: "Fryer Line Supervisor",
    department: "production",
    type: "Full-time",
    location: "Dockside Kitchen, Harbour East",
    shift: "Night shift · Tue–Sat",
    salary: "$52k – $61k",
    icon: "bowl",
    summary:
      "Run the fryer line through the night shift — temperature, timing, oil life and a batch you are proud to sign off.",
    responsibilities: [
      "Lead the line team through every shift, start to finish.",
      "Hold oil quality and fry times to spec, every single batch.",
      "Log downtime, waste and yield so the numbers stay honest.",
      "Train new starters on the line until they can run it alone.",
    ],
    requirements: [
      "3+ years running a food production or fryer line.",
      "Food safety certification, or the drive to earn one.",
      "Calm, clear instructions in a fast, loud room.",
      "Comfortable working a shift schedule that includes weekends.",
    ],
    benefits: ["Night shift premium", "Meals on shift", "Overtime paid"],
  },
  {
    slug: "packaging-technician",
    title: "Packaging Technician",
    department: "production",
    type: "Full-time",
    location: "Packaging Hall, Westfield",
    shift: "Day shift · Mon–Fri",
    salary: "$38k – $44k",
    icon: "bowl",
    summary:
      "Keep the line moving — bags sealed, dates right and every order packed to go out on the same truck.",
    responsibilities: [
      "Set up and run the packing line for each product changeover.",
      "Check weights, seal quality and date coding on every run.",
      "Keep the line stocked and flag anything that is running low.",
      "Support changeovers and line clearance with the floor team.",
    ],
    requirements: [
      "1+ year in a production, packing or warehouse environment.",
      "Good hands and a careful eye for detail.",
      "Happy to be on your feet and part of a close team.",
      "Machine experience is welcome, not required.",
    ],
    benefits: ["Meals on shift", "Free weekly bag", "Paid training"],
  },
  {
    slug: "qa-lab-assistant",
    title: "QA Lab Assistant",
    department: "quality",
    type: "Full-time",
    location: "Quality Lab, Dockside",
    shift: "Day shift · Mon–Fri",
    salary: "$42k – $48k",
    icon: "leaf",
    summary:
      "Work alongside the quality manager — moisture, salt, oil and the shelf-life data behind every claim we make.",
    responsibilities: [
      "Run daily quality checks across raw stock and finished batches.",
      "Keep lab records accurate and audit-ready.",
      "Support sensory panels with the flavour team.",
      "Flag anything out of spec before it reaches a customer.",
    ],
    requirements: [
      "Degree or diploma in food science, nutrition or chemistry.",
      "1+ year in a QC or laboratory role — food, beverage or pharma.",
      "Precise, methodical documentation habits.",
      "Comfortable around basic lab equipment.",
    ],
    benefits: ["Lab training budget", "Certification support", "Profit share"],
  },
  {
    slug: "wholesale-account-executive",
    title: "Wholesale Account Executive",
    department: "sales",
    type: "Full-time",
    location: "Hybrid · Dockside",
    shift: "Field based · Mon–Fri",
    salary: "$55k + commission",
    icon: "handshake",
    summary:
      "Grow Crispo on every shelf in the country — grocers, market halls, cafés and the shops that already call us every week.",
    responsibilities: [
      "Own a patch of accounts from first meeting to repeat orders.",
      "Run tasting sessions and build the wholesale price list.",
      "Keep stockists stocked and their margins healthy.",
      "Report the pipeline and the wins, honestly and on time.",
    ],
    requirements: [
      "3+ years in FMCG, wholesale or foodservice sales.",
      "Genuinely comfortable knocking on shop doors.",
      "A driver who can read a P&L and still enjoy the job.",
      "Full clean licence for the field visits.",
    ],
    benefits: ["Company car", "Commission + bonus", "Tasting budget"],
  },
  {
    slug: "delivery-driver",
    title: "Delivery Driver",
    department: "logistics",
    type: "Full-time",
    location: "Westfield Depot",
    shift: "Early shift · Mon–Sat",
    salary: "$44k – $49k",
    icon: "truck",
    summary:
      "Get every order to the customer inside the promise we print on the box — usually within twenty-four hours of packing.",
    responsibilities: [
      "Run the local and regional delivery routes on time.",
      "Check loads, secure pallets and keep the van presentable.",
      "Log the paperwork and flag any delivery that needs attention.",
      "Be the face of Crispo at the door.",
    ],
    requirements: [
      "Full clean licence and a good driving record.",
      "2+ years in delivery, distribution or a similar role.",
      "Punctual, professional and happy to help with the drop.",
      "Good local knowledge of the delivery routes.",
    ],
    benefits: ["Company van", "Fuel allowance", "Free weekly bag"],
  },
  {
    slug: "marketing-intern",
    title: "Marketing Intern",
    department: "marketing",
    type: "Internship",
    location: "Dockside Studio, Harbour East",
    shift: "Summer · Mon–Fri",
    salary: "$18 / hour",
    icon: "heart",
    summary:
      "Spend a summer making the best chips in the country look as good online as they taste — content, social and one very good campaign.",
    responsibilities: [
      "Photograph and edit product shots for social and the site.",
      "Write captions, short copy and recipe cards.",
      "Help plan, shoot and edit one small campaign.",
      "Keep the content calendar moving every week.",
    ],
    requirements: [
      "Studying marketing, food media, design or communications.",
      "A decent eye and comfort working with a phone camera.",
      "Clear, friendly writing — you will not be writing legal copy.",
      "Available for the whole summer, three to five days a week.",
    ],
    benefits: ["Paid internship", "Free weekly bag", "Real mentoring"],
  },
];

export const CAREERS_POINTS = [
  {
    icon: "bowl",
    title: "You make the actual thing",
    text: "Not a slide about the actual thing. Your hands are on the line that ships.",
  },
  {
    icon: "users",
    title: "A kitchen, not a cubicle",
    text: "Small team, flat structure, and the person who fixed it gets the credit.",
  },
  {
    icon: "spark",
    title: "We taste things for a living",
    text: "It is a strange job. We do not recommend it to anyone who wants a quiet one.",
  },
  {
    icon: "heart",
    title: "Benefits that matter",
    text: "Free bags, real meals on shift, profit share and paid training.",
  },
];

export const CAREERS_BENEFITS = [
  { icon: "bowl", title: "A bag every week", text: "Freshly packed, straight off the line." },
  { icon: "leaf", title: "Food safety training", text: "Certified, paid for, and fully on the clock." },
  { icon: "calendar", title: "Real holiday", text: "Paid leave plus bank holidays off." },
  { icon: "heart", title: "Private health cover", text: "From day one, for every full-time role." },
  { icon: "spark", title: "Profit share", text: "A slice of the year the company had a good one." },
  { icon: "users", title: "Paid volunteering", text: "One day a year, on the company." },
];

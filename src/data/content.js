// All site content lives here so it can later be served by an API / CMS.
// Facts are taken from the current MICA website (micaeduco.com). Anything marked
// "placeholder" is NOT real MICA data and must be replaced before real use.

export const CONTACT = {
  phoneDisplay: '0651-2330432',
  phoneHref: 'tel:+916512330432',
  email: 'micaeduco@gmail.com',
  emailHref: 'mailto:micaeduco@gmail.com',
  addressLines: ['Opposite Ranchi Club Gate, 2nd Floor, Ganga Apartment', 'Main Road, Ranchi, 834001'],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/micaeduco13/' },
    { label: 'X', href: 'https://x.com/micaeduco13' },
    { label: 'LinkedIn', href: 'https://in.linkedin.com/company/mica-educational-co-pvt-ltd' },
  ],
  currentSite: 'https://micaeduco.com/',
  careersUrl: 'https://micaeduco.com/careers.php',
};

// ---------------------------------------------------------------------------
// Audiences (from the three visitor types in the brief)
// ---------------------------------------------------------------------------
export const AUDIENCE_ORDER = ['schools', 'partners', 'students'];

export const AUDIENCES = {
  schools: {
    slug: 'schools',
    label: 'Schools',
    roleLabel: 'I run or work in a school',
    roleSub: 'Principals, management, computer teachers',
    title: 'Everything a school needs to teach, run and assess IT',
    blurb:
      'From the software that runs your school office to the textbooks, teacher training and exam processing, MICA supports schools end to end. More than 150 schools already work with us.',
    wants: [
      'Computer education for students',
      'School ERP and management software',
      'Exam evaluation and assessment',
      'IT infrastructure and lab maintenance',
    ],
    desiredAction: 'Explore school solutions',
    cta: { label: 'Request a school demo', type: 'demo' },
    lineIds: ['erp', 'itedu', 'books', 'omr', 'hardware', 'udaan'],
    proofTitle: 'School software already in use',
    proofItems: [
      'Parinam: evaluate academic performance of students',
      'Vetan: staff affairs and payroll',
      'Pustakalaya: library automation',
      'Fee Collection: automated fee handling',
      'Time-Table: schedule and display the school routine',
      'e-Suchna: web-based messaging; Pariksha: online class assessment',
    ],
    faqs: [
      {
        q: 'Which software products can my school use?',
        a: 'MICA offers packages for results (Parinam), payroll (Vetan), library (Pustakalaya), fee collection, time-table, web-based messaging (e-Suchna), online assessment (Pariksha) and website design. Training and support come with them.',
      },
      {
        q: 'Which education boards do your books and curriculum follow?',
        a: 'MICA says its books are aligned with NEP guidelines and its IT education programme is kept updated for CBSE, ICSE, JAC and other boards.',
      },
      {
        q: 'Do you train our teachers?',
        a: 'Yes. MICA runs ICT training, including for teachers from non-IT backgrounds, and states that it has been selected by CBSE for capacity-building programmes for in-service teachers.',
      },
      {
        q: 'Can you run our admission tests or exams?',
        a: 'MICA provides OMR-based exam processing: sheet design and printing, scanning, verification, evaluation and reports in Excel that can be merged with your school database.',
      },
      {
        q: 'What happens after I send an enquiry?',
        a: 'Your enquiry is routed to the MICA unit that handles what you asked about, and that team contacts you by your preferred method. (Proposed flow for this prototype.)',
      },
    ],
    caseStudies: [
      { title: 'School ERP rollout', note: 'Add: school name, city, modules adopted, time saved.' },
      { title: 'Computer-education programme', note: 'Add: school, classes covered, results or student outcomes.' },
      { title: 'OMR exam processing', note: 'Add: exam type, number of candidates, turnaround time.' },
    ],
  },

  partners: {
    slug: 'partners',
    label: 'Institutions & Partners',
    roleLabel: 'I represent an institution, business or government body',
    roleSub: 'Departments, corporates, training partners',
    title: 'A technology and training partner for institutions and government programmes',
    blurb:
      'MICA runs helpline and call-centre projects, delivers government-empanelled skill training, processes exams at scale and builds software. Talk to us about collaborating.',
    wants: [
      'IT services and software development',
      'Skill-training collaboration and government projects',
      'Helpline and grievance-redressal operations',
      'Exam evaluation and hardware / IT maintenance',
    ],
    desiredAction: 'Start a partnership discussion',
    cta: { label: 'Start a partnership discussion', type: 'partnership' },
    lineIds: ['helpline', 'skills', 'omr', 'erp', 'hardware'],
    proofTitle: 'Government and programme credentials (as stated by MICA)',
    proofItems: [
      'NULM training centres in Jharkhand and Odisha',
      'Training under PMKVY 2.0',
      'Project Implementing Agency for Aajeevika skill training (Ministry of Rural Development)',
      'Empanelled with UD&HD, Government of Jharkhand, and SUDA, Government of Odisha',
      'PIA with MANAS for Entrepreneurship & Skill Development Programmes',
      'Helpline projects: Women Helpline, Elder Helpline, JSDMS, DWSD support',
    ],
    faqs: [
      {
        q: 'What kinds of partnerships does MICA take up?',
        a: 'Skill-training delivery under government schemes, helpline and call-centre operations, software and web development, exam processing and IT maintenance. Choose "Start a partnership discussion" in the enquiry form and describe your need.',
      },
      {
        q: 'Which government programmes has MICA worked with?',
        a: 'MICA lists NULM, PMKVY 2.0, Aajeevika skill training, MANAS and empanelments with state urban development bodies in Jharkhand and Odisha.',
      },
      {
        q: 'Which certifications does MICA hold?',
        a: 'ISO 9001:2015, ISO/IEC 20000-1:2018, ISO 27001:2022, ISO 18001:2007, ISO 21001:2018 and COPC 2014 for call-centre services.',
      },
      {
        q: 'Which helpline projects does MICA run?',
        a: 'Women Helpline, Elder Helpline, JSDMS and DWSD support services, plus the SAMVAD communication and grievance-redressal service.',
      },
    ],
    caseStudies: [
      { title: 'Helpline project', note: 'Add: department, scope, call volumes, resolution rate.' },
      { title: 'Skill-training programme', note: 'Add: scheme, centres, candidates trained and placed.' },
      { title: 'Software or web project', note: 'Add: client, problem solved, outcome.' },
    ],
  },

  students: {
    slug: 'students',
    label: 'Students & Candidates',
    roleLabel: 'I am a student, parent or job-seeker',
    roleSub: 'Courses, competitions, early learning, careers',
    title: 'Courses, competitions and early learning that lead somewhere',
    blurb:
      'Job-oriented skill courses, a state-level IT talent competition for school students, and a play school for young children. See what is available and ask us.',
    wants: [
      'Information about available courses',
      'Training and placement opportunities',
      'IT quiz and talent competition for school students',
      'Early learning for young children',
    ],
    desiredAction: 'Explore training',
    cta: { label: 'Ask about courses', type: 'course' },
    lineIds: ['skills', 'udaan', 'play'],
    proofTitle: 'What you can train for (as stated by MICA)',
    proofItems: [
      'Sewing Machine Operator, Embroidery Machine Operator, Hand Embroiderer, Fashion Designer',
      'IT, electronics, ITES (BPO) and management skills',
      'Soft-skills training: communication, personality building, time management',
      'On-the-job training, group discussion and placement facilitation',
    ],
    faqs: [
      {
        q: 'Which courses are available?',
        a: 'MICA lists skill training in IT, apparel, electronics, ITES (BPO) and management skills, plus soft-skills training. Ask about the current batches through the enquiry form.',
      },
      {
        q: 'What is Udaan?',
        a: 'Udaan is MICA\'s state-level IT talent competition for school students, held since 2007 (earlier called All Jharkhand IT Talent Search and EDUCO IT Quiz).',
      },
      {
        q: 'How do I register for Udaan?',
        a: 'Placeholder: registration steps and dates are not published on the current site. MICA to add them here.',
      },
      {
        q: 'Where is the play school?',
        a: 'Bachpan Play School is at New Anantpur, Doranda, Ranchi, run by MICA\'s social wing MINERVA since 2012.',
      },
      {
        q: 'I want to work at MICA. Where do I apply?',
        a: 'The current site lists openings for IT faculty / computer teacher, call operator, branding and marketing executive and HR executive on its Careers page.',
      },
    ],
    caseStudies: [
      { title: 'Graduate story', note: 'Add: name, course, current job or business.' },
      { title: 'Udaan winner', note: 'Add: school, year, what the competition led to.' },
      { title: 'Placement outcome', note: 'Add: batch, employer, number placed.' },
    ],
  },
};

// ---------------------------------------------------------------------------
// Business lines: plain-language name first, MICA's own unit name second.
// ---------------------------------------------------------------------------
export const LINES = [
  {
    id: 'erp',
    name: 'School software (ERP)',
    unit: 'Soft Solution',
    mono: 'ERP',
    tagline: 'Software that runs the school office',
    description:
      'Ready-to-use packages for results, payroll, fees, library and timetables, delivered with training and at-hand support.',
    highlights: ['Parinam (results) and Vetan (payroll)', 'Pustakalaya (library) and Fee Collection', 'Time-Table, e-Suchna, Pariksha, website design'],
    audiences: ['schools', 'partners'],
    page: 'https://micaeduco.com/Soft-solution.php',
  },
  {
    id: 'itedu',
    name: 'IT education in schools',
    unit: 'Composite Computer Education',
    mono: 'IT',
    tagline: 'A complete computer-education programme',
    description:
      'Academic support, lab monitoring, exam blueprints and question papers, plus teacher workshops, for 150+ partner schools.',
    highlights: ['Lab registers, assignments and expert visits', 'Teacher training, including non-IT teachers', 'Updated for CBSE, ICSE, JAC and other boards'],
    audiences: ['schools'],
    page: 'https://micaeduco.com/IT-education.php',
  },
  {
    id: 'books',
    name: 'Computer books for schools',
    unit: 'MICA Educo Publishers',
    mono: 'BK',
    tagline: 'Class I to X computer and AI textbooks',
    description:
      'Textbooks aligned with NEP guidelines, with lab assignments, projects and screenshots. Publishing since 2005.',
    highlights: ['AI for School (Classes I to VIII)', 'Composite Compunik (I to VIII), Computer Application (I to VII)', 'Computers for School (VI to VIII), IT 402 (IX to X)'],
    audiences: ['schools'],
    page: 'https://micaeduco.com/books-publication.php',
  },
  {
    id: 'omr',
    name: 'Exam evaluation (OMR)',
    unit: 'Exam Evaluation & Assessment',
    mono: 'OMR',
    tagline: 'Fast, accurate OMR-based exam processing',
    description:
      'For admission tests, monthly exams and appraisal exams: from sheet design to scanning, evaluation and reports.',
    highlights: ['OMR sheet design and printing', 'Scanning, verification and evaluation', 'Excel reports merged with your database'],
    audiences: ['schools', 'partners'],
    page: 'https://micaeduco.com/Exam-evaluation.php',
  },
  {
    id: 'hardware',
    name: 'Hardware and IT maintenance',
    unit: 'Jaan Tek',
    mono: 'HW',
    tagline: 'Keep labs, smart boards and networks running',
    description:
      'Economical repair and maintenance rather than costly replacement, with engineers for labs, networks and smart boards.',
    highlights: ['Interactive smart-board repair', 'Networking: routers, switches, LAN', 'PC repair, software installation, lab set-up'],
    audiences: ['schools', 'partners'],
    page: 'https://micaeduco.com/ITES-Hardware_Maintenance.php',
  },
  {
    id: 'udaan',
    name: 'IT quiz and talent search',
    unit: 'Udaan (earlier ITTSE / EDUCO IT Quiz)',
    mono: 'Q',
    tagline: 'State-level IT competition for school students',
    description:
      'Running since 2007. MICA states it has enabled participation of about 7 lakh students from government, aided and private schools.',
    highlights: ['Inter-house quizzes inside schools', 'State-level final', 'Backed under Digital India in 2015 (as stated by MICA)'],
    audiences: ['schools', 'students'],
    page: 'https://micaeduco.com/IT-talent.php',
  },
  {
    id: 'helpline',
    name: 'Helpline and call centres',
    unit: 'Samvad & Samadhan',
    mono: 'HL',
    tagline: 'Grievance redressal and helpline operations',
    description:
      'Social-sector helplines and call-centre operations with COPC certification for call-centre services.',
    highlights: ['Women Helpline and Elder Helpline', 'JSDMS and DWSD support services', 'Feedback management and resolution tracking'],
    audiences: ['partners'],
    page: 'https://micaeduco.com/Helpline-Call-center.php',
  },
  {
    id: 'skills',
    name: 'Skill development courses',
    unit: 'MICA Skill & Training',
    mono: 'SK',
    tagline: 'Job-oriented training with government programmes',
    description:
      'Training since 2013 for employability, with empanelments under government schemes, soft-skills training and teacher capacity-building.',
    highlights: ['NULM, PMKVY 2.0, Aajeevika, MANAS', 'Apparel, IT, electronics, ITES and management skills', 'CBSE-selected teacher training programmes'],
    audiences: ['partners', 'students'],
    page: 'https://micaeduco.com/Skill-development-course.php',
  },
  {
    id: 'play',
    name: 'Play school',
    unit: 'Bachpan Play School (by MINERVA)',
    mono: 'PS',
    tagline: 'Early learning in Doranda, Ranchi',
    description:
      'A child-centred play school set up in 2012 by MICA\'s social wing, with free evening classes for children of the locality.',
    highlights: ['Activity-based early learning', 'Free evening classes at New Anantpur', 'Located in Doranda, Ranchi'],
    audiences: ['students'],
    page: 'https://micaeduco.com/play-school.php',
  },
];

// ---------------------------------------------------------------------------
// Proof: only figures that agree across the current site's pages are shown as
// headline stats. Others are listed in the README as inconsistent.
// ---------------------------------------------------------------------------
export const PROOF_STATS = [
  { value: '20+', label: 'years of service' },
  { value: '150+', label: 'partner schools' },
  { value: '5+', label: 'states' },
  { value: '~7 lakh', label: 'students in Udaan competitions' },
];

export const PROOF_NOTE =
  'Figures as published on micaeduco.com. MICA should confirm them before launch: several numbers differ between pages of the current site.';

export const CERTS = [
  { code: 'ISO 9001:2015', what: 'Quality management' },
  { code: 'ISO/IEC 20000-1:2018', what: 'IT service management' },
  { code: 'ISO 27001:2022', what: 'Information security' },
  { code: 'ISO 21001:2018', what: 'Educational organisations' },
  { code: 'ISO 18001:2007', what: 'Occupational health and safety' },
  { code: 'COPC 2014', what: 'Call-centre services' },
];

export const TIMELINE = [
  { year: '2002', text: 'Starts inter-house IT quiz contests in client schools.' },
  { year: '2005', text: 'First computer textbooks published under MICA Educo Publishers.' },
  { year: '2007', text: 'Launches the All Jharkhand IT Talent Search, a state-level competition.' },
  { year: '2012', text: 'Competition renamed EDUCO IT Quiz; Bachpan Play School set up.' },
  { year: '2013', text: 'Begins skill-development training for employability.' },
  { year: '2015', text: 'Competition becomes Udaan, backed under Digital India.' },
];

export const PRESENCE = ['Jharkhand', 'West Bengal', 'Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Odisha'];

// ---------------------------------------------------------------------------
// Enquiry form options
// ---------------------------------------------------------------------------
export const ENQUIRY_AUDIENCES = [
  { value: 'schools', label: 'A school (principal, management, teacher)' },
  { value: 'partners', label: 'An institution, business or government body' },
  { value: 'students', label: 'A student, parent or job-seeker' },
  { value: 'other', label: 'Something else' },
];

export const ENQUIRY_TYPES = {
  schools: [
    { value: 'demo', label: 'Request a demo' },
    { value: 'quote', label: 'Get a quote' },
    { value: 'teacher', label: 'Teacher training' },
    { value: 'books', label: 'Books and sample copies' },
    { value: 'general', label: 'General question' },
  ],
  partners: [
    { value: 'partnership', label: 'Start a partnership discussion' },
    { value: 'project', label: 'Discuss a project or tender' },
    { value: 'training', label: 'Skill-training collaboration' },
    { value: 'general', label: 'General question' },
  ],
  students: [
    { value: 'course', label: 'Ask about courses' },
    { value: 'udaan', label: 'Udaan quiz registration' },
    { value: 'play', label: 'Play school admission' },
    { value: 'job', label: 'Careers at MICA' },
    { value: 'general', label: 'General question' },
  ],
  other: [{ value: 'general', label: 'General question' }],
};

// Proposed routing, shown to the visitor so they know who will reply.
export function routeFor(lineId, audience) {
  const line = LINES.find((l) => l.id === lineId);
  if (line) return line.unit;
  if (audience === 'schools') return 'School solutions team';
  if (audience === 'partners') return 'Partnerships and projects team';
  if (audience === 'students') return 'Training and courses team';
  return 'MICA front desk';
}

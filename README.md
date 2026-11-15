# MICA Website Redesign Prototype

A front-end demonstration of how MICA Educational Co. Pvt. Ltd.'s website could make its services easier to understand, help visitors find the information relevant to them, and make the next step clearer.

This prototype was developed from the website audit of MICA's existing website. It is a proposed redesign, not a replacement for the live website.

## 1. Why this prototype was created

The audit identified a few issues that could make it difficult for a first-time visitor to understand and use the existing website:

- The homepage heading did not clearly explain what MICA does.
- Important services were not immediately visible to visitors.
- Service names and MICA's internal unit names were presented inconsistently across pages.
- The website did not clearly guide different visitor groups to relevant services.
- Most calls to action were generic, rather than helping visitors take a service-specific next step.
- The main enquiry form did not collect enough information to understand and route different types of enquiries.
- Some figures and experience claims differed between pages and needed confirmation.
- More real client examples, project details and clearer trust information would help visitors assess MICA.

The prototype focuses on the parts of these findings that can be demonstrated through a front-end redesign.

## 2. What the prototype demonstrates

### Homepage

- Opens with a plain-language description of MICA's work.
- Directs visitors towards three audience groups: Schools, Institutions & Partners, and Students & Candidates.
- Displays MICA's service areas using plain-language names, with the related MICA unit name shown alongside.
- Allows visitors to filter services by audience.
- Presents selected company figures and a clear enquiry route.

### Audience pages

The same page template is used for three visitor groups:

- `/for/schools`
- `/for/partners`
- `/for/students`

Each page presents relevant services, supporting information, FAQs and a related call to action. The aim is to reduce the effort required for visitors to find information relevant to them.

### Enquiry page

- Collects the visitor's audience, enquiry type and contact details.
- Shows relevant fields based on the selected audience.
- Can pre-fill the audience, enquiry type and service when a visitor arrives from a related page.
- Includes basic client-side validation.
- Shows the proposed MICA team that would handle the enquiry.
- Displays a confirmation state after submission.

**Important:** The enquiry form is a front-end demonstration only. It does not send, store or email enquiry details to MICA. The confirmation and team-routing information demonstrate a proposed flow, not a verified live MICA process.

### About page

- Places service names beside the related MICA unit names.
- Shows the milestones and locations represented in the prototype content.
- Includes a clearly marked placeholder for leadership and team information that needs to be supplied by MICA.

## 3. Technology used

| Area | Technology |
| --- | --- |
| Front end | React 18 |
| Language | JavaScript and JSX |
| Routing | React Router 6 using `BrowserRouter` |
| Build tool | Vite 5 |
| Styling | Plain CSS |
| Fonts | DM Sans and Fraunces via Google Fonts |

There is currently no backend, database, authentication system or external enquiry API.

## 4. Run the project locally

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

### Create a production build

```bash
npm run build
```

The production files are generated in the `dist/` directory.

### Preview the production build

```bash
npm run preview
```

## 5. Project structure

```text
mica-prototype/
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Faq.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Icon.jsx
│   │   ├── LineCard.jsx
│   │   ├── ProofStrip.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── content.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Audience.jsx
│   │   ├── Enquiry.jsx
│   │   └── Home.jsx
│   ├── services/
│   │   └── enquiryService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

### Code organisation

- `src/data/content.js` contains the audience information, service content, contact details, proof points, FAQs and enquiry options.
- `src/components/` contains reusable interface elements shared across pages.
- `src/pages/` contains the homepage, audience pages, enquiry page and About page.
- `src/services/enquiryService.js` contains the current front-end enquiry simulation. It is the intended integration point for a future API.
- `src/styles.css` contains the visual styling and responsive layout rules.
- `src/App.jsx` defines the application routes and shared page layout.

## 6. Content accuracy and placeholders

The content was organised using information reviewed on MICA's existing website. Before this prototype is used as a live company website or public source of information, MICA should review and approve the content.

The following points need particular attention:

- **Conflicting figures:** The audit found different figures across the existing website for graduates trained, candidates trained, teachers trained, years of experience, and projects or clients. The prototype uses selected headline figures, but these should be confirmed by MICA before publication.
- **Credentials and programme claims:** Government programme participation, empanelments, certifications and other credentials should be checked for current validity and approved wording.
- **Placeholder content:** Success stories, leadership/team information and Udaan registration details are marked as placeholders. They are examples of content that could be added, not real MICA information.
- **Proposed enquiry routing:** The team-routing labels and suggested enquiry journey are design proposals. MICA should confirm the actual responsible teams and response process.
- **Contact details:** The contact information is reproduced from the reviewed website and should be verified before launch.
- **Brand assets:** The current prototype uses a text-based wordmark. The official MICA logo and approved brand assets should replace it when supplied.

The audit also identified content and website issues that are outside the scope of this front-end demonstration, including confirming client identities, adding verified case studies, correcting source-site content inconsistencies and reviewing the live mobile experience on actual devices.

## 7. Current limitations

- The project is a static front-end prototype.
- Enquiry submissions are simulated in the browser and are not delivered to MICA.
- There is no staff dashboard or enquiry-management workflow.
- There is no database or persistent storage.
- There is no login, role-based access control or API security.
- The content is maintained in a JavaScript data file rather than a CMS.
- The prototype's claims, credentials, contact details and placeholder sections require review and approval by MICA.

## 8. Possible next phase

If the prototype is approved, a backend could be developed using Java 21, Spring Boot and PostgreSQL.

A possible architecture is:

```text
React frontend
      |
      | HTTPS / JSON
      v
Spring Boot REST API
      |
      v
PostgreSQL database
```

Possible backend work:

1. Create a public endpoint to receive validated enquiries.
2. Store enquiries in PostgreSQL.
3. Route enquiries to the appropriate MICA team after MICA confirms the routing rules.
4. Add authenticated staff access to view and update enquiry status.
5. Add email notifications if required.
6. Move service and audience content to an API or content-management system if the site needs regular updates.
7. Add server-side validation, spam protection, rate limiting and appropriate access controls.

This is a suggested future direction, not functionality included in the current prototype.

## 9. Deployment notes

The application currently uses `BrowserRouter`, and the Vite configuration uses the root base path. A production host must therefore serve `index.html` for application routes such as `/for/schools` and `/enquiry`.

The repository includes a `public/_redirects` file intended for hosts that support Netlify-style redirect rules. Confirm the hosting provider's routing configuration before deployment. The current redirect file alone does not guarantee compatibility with every static host.

## 10. Before presenting or publishing

- Replace all placeholder content with approved MICA information, or keep it clearly marked.
- Confirm all statistics, certifications, programme claims and contact details.
- Obtain the official logo and approved brand assets.
- Confirm the enquiry routing and response process with MICA.
- Test the pages at mobile, tablet and desktop sizes.
- Test keyboard navigation, form validation and page navigation.
- Run `npm run build` and resolve any build errors.
- Configure the production host to support `BrowserRouter` routes.
- Do not describe the enquiry form as live until it is connected to a working backend.

---

**Project status:** Front-end redesign prototype for review.  
**Backend status:** Not implemented.  
**Enquiry delivery:** Simulated only; no enquiry is sent to MICA.

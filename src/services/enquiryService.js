// Front-end only for now: nothing leaves the browser.
//
// When the Spring Boot backend is added, replace the body of submitEnquiry with:
//
//   const res = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiries`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(payload),
//   });
//   if (!res.ok) throw new Error('Could not send enquiry');
//   return res.json();
//
// The payload shape below is the proposed Enquiry data model (see README).

export async function submitEnquiry(payload) {
  await new Promise((resolve) => setTimeout(resolve, 600));
  // eslint-disable-next-line no-console
  console.info('[prototype] enquiry captured locally, not sent anywhere', payload);
  return { ok: true, reference: 'MICA-' + Date.now().toString(36).toUpperCase() };
}

import { serverBaseUrl } from "./baseUrl";


export const getAllInvests = async () => {
  const res = await fetch(`${serverBaseUrl}/invest`, {
    next: {
      revalidate: 2,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch Project Type");
  }

  return res.json();
};
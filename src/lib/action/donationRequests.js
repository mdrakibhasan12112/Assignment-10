'use server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const createDonation = async newDonationData => {
  const res = await fetch(`${baseUrl}/api/donationRequests`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newDonationData),
  });

  return res.json();
};

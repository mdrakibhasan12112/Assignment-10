const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getDonationRequests = async (requesterEmail, status = 'pending') => {
  const res = await fetch(
    `${baseUrl}/api/donationRequests?requesterEmail=${requesterEmail}&donationStatus=${status}`,
  );
  return res.json();
};

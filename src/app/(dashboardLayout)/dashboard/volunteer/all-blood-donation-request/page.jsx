export default function AllBloodDonationRequest() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">All Blood Donation Requests</h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="table">
          <thead>
            <tr>
              <th>Recipient</th>
              <th>Blood Group</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahim</td>
              <td>A+</td>
              <td>25 Jun</td>
              <td>Pending</td>
              <td>
                <button className="btn btn-sm">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
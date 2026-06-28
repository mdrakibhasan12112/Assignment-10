// 'use client';
// import React, { useState, useMemo } from 'react';
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Chip,
//   Pagination,
//   Button,
//   Tooltip,
// } from '@heroui/react';
// import { Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

// export default function DonationRequestsTable({
//   donations,
//   onEdit,
//   onDelete,
//   onStatusChange,
// }) {
//   const [page, setPage] = useState(1);
//   const rowsPerPage = 5;

//   const safeDonations = donations || [];

//   // পেজিনেশন অনুযায়ী ডাটা স্লাইস
//   const items = useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;
//     return safeDonations.slice(start, end);
//   }, [page, safeDonations, rowsPerPage]);

//   const pages = Math.ceil(safeDonations.length / rowsPerPage) || 1;

//   const getStatusColor = status => {
//     switch (status) {
//       case 'pending':
//         return 'warning';
//       case 'inprogress':
//         return 'primary';
//       case 'done':
//         return 'success';
//       case 'canceled':
//         return 'danger';
//       default:
//         return 'default';
//     }
//   };

//   return (
//     <div className="flex flex-col gap-6 w-full items-center dark text-foreground">
//       {/* 📊 মেইন টেবিল কন্টেইনার */}
//       <Table
//         aria-label="Blood Donation Requests Table"
//         classNames={{
//           base: 'max-w-full overflow-x-auto w-full',
//           wrapper:
//             'bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-2xl rounded-[24px] p-6 !table-auto',
//           th: 'bg-slate-800/90 text-slate-400 font-semibold text-xs border-b border-slate-700/50 py-4 px-4 text-left uppercase tracking-wider',
//           td: 'py-5 px-4 text-sm border-b border-slate-800/60 text-slate-300 font-normal',
//         }}
//       >
//         <TableHeader>
//           <TableColumn>Recipient Name</TableColumn>
//           <TableColumn>Blood Group</TableColumn>
//           <TableColumn>Location (District/Upazila)</TableColumn>
//           <TableColumn>Hospital & Address</TableColumn>
//           <TableColumn>Date & Time</TableColumn>
//           <TableColumn>Status</TableColumn>
//           <TableColumn className="text-center">Actions</TableColumn>
//         </TableHeader>

//         {/* ⚡ ফিক্সড: TableBody-তে ডাইনামিক `items` প্রোপ্রার্টি এবং কলব্যাক ফাংশন ব্যবহার করা হয়েছে */}
//         <TableBody items={items} emptyContent={'No donation requests found.'}>
//           {item => (
//             <TableRow
//               key={item._id?.toString() || item._id}
//               className="hover:bg-slate-800/40 transition-colors"
//             >
//               <TableCell className="text-slate-200 font-medium">
//                 {item.recipientName || '—'}
//               </TableCell>

//               <TableCell>
//                 <span className="inline-block px-3 py-1 bg-red-950/40 text-red-400 border border-red-900/50 rounded-lg text-xs font-bold min-w-[42px] text-center">
//                   {item.bloodGroup}
//                 </span>
//               </TableCell>

//               <TableCell className="text-xs text-slate-300 font-medium">
//                 {item.upazila}, {item.district}
//               </TableCell>

//               <TableCell>
//                 <div className="text-xs max-w-[200px] truncate">
//                   <div className="text-slate-300 font-medium">
//                     {item.hospitalName}
//                   </div>
//                   <div className="text-slate-400 mt-0.5">
//                     {item.fullAddress}
//                   </div>
//                 </div>
//               </TableCell>

//               <TableCell>
//                 <div className="text-xs text-slate-300 font-medium">
//                   <div>{item.donationDate}</div>
//                   <div className="text-slate-400 mt-0.5">
//                     {item.donationTime}
//                   </div>
//                 </div>
//               </TableCell>

//               <TableCell>
//                 <Chip
//                   className="capitalize font-medium text-[11px] px-2"
//                   color={getStatusColor(item.donationStatus)}
//                   size="sm"
//                   variant="flat"
//                 >
//                   {item.donationStatus}
//                 </Chip>
//               </TableCell>

//               {/* 🎬 অ্যাকশন বাটনসমূহ */}
//               <TableCell>
//                 <div className="flex items-center justify-center gap-2">
//                   <Tooltip content="Edit Request" color="foreground">
//                     <Button
//                       isIconOnly
//                       size="sm"
//                       variant="light"
//                       className="text-blue-400 hover:bg-blue-950/40"
//                       onClick={() => onEdit?.(item)}
//                     >
//                       <Edit2 size={16} />
//                     </Button>
//                   </Tooltip>

//                   <Tooltip content="Delete Request" color="danger">
//                     <Button
//                       isIconOnly
//                       size="sm"
//                       variant="light"
//                       className="text-red-400 hover:bg-red-950/40"
//                       onClick={() => onDelete?.(item)}
//                     >
//                       <Trash2 size={16} />
//                     </Button>
//                   </Tooltip>

//                   {item.donationStatus === 'inprogress' && (
//                     <>
//                       <Tooltip content="Mark as Done" color="success">
//                         <Button
//                           isIconOnly
//                           size="sm"
//                           variant="light"
//                           className="text-green-400 hover:bg-green-950/40"
//                           onClick={() => onStatusChange?.(item._id, 'done')}
//                         >
//                           <CheckCircle size={16} />
//                         </Button>
//                       </Tooltip>

//                       <Tooltip content="Cancel Request" color="danger">
//                         <Button
//                           isIconOnly
//                           size="sm"
//                           variant="light"
//                           className="text-amber-500 hover:bg-amber-950/40"
//                           onClick={() => onStatusChange?.(item._id, 'canceled')}
//                         >
//                           <XCircle size={16} />
//                         </Button>
//                       </Tooltip>
//                     </>
//                   )}
//                 </div>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>

//       {/* 📊 পেজিনেশন */}
//       <div className="flex w-full justify-center mt-4 z-10">
//         <Pagination
//           isCompact
//           showControls
//           showShadow
//           color="danger"
//           page={page}
//           total={pages}
//           onChange={page => setPage(page)}
//           classNames={{
//             wrapper:
//               'gap-1 bg-slate-950 border border-slate-800 shadow-2xl p-2 rounded-xl flex items-center',
//             item: 'text-white bg-slate-800 hover:bg-slate-700 font-bold min-w-[36px] h-9 rounded-lg transition-all text-center flex items-center justify-center cursor-pointer',
//             cursor:
//               'bg-red-600 text-white font-extrabold shadow-lg shadow-red-600/50 rounded-lg min-w-[36px] h-9',
//             prev: 'text-white bg-slate-800 hover:bg-slate-700 min-w-[36px] h-9 rounded-lg flex items-center justify-center font-bold',
//             next: 'text-white bg-slate-800 hover:bg-slate-700 min-w-[36px] h-9 rounded-lg flex items-center justify-center font-bold',
//           }}
//         />
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useState, useMemo } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Pagination,
  Button,
  Tooltip,
} from '@heroui/react';
import { Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function DonationRequestsTable({
  donations,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5; // Change to 10 if you want more rows per page

  const safeDonations = donations || [];

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return safeDonations.slice(start, end);
  }, [page, safeDonations, rowsPerPage]);

  const pages = Math.ceil(safeDonations.length / rowsPerPage) || 1;

  const getStatusColor = status => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'inprogress':
        return 'primary';
      case 'done':
        return 'success';
      case 'canceled':
        return 'danger';
      default:
        return 'default';
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full items-center dark text-foreground">
      <Table
        aria-label="Blood Donation Requests Table"
        classNames={{
          base: 'w-full',
          wrapper:
            'bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-2xl rounded-[24px] p-6',
          table: 'w-full min-w-full', // Important for full width
          th: 'bg-slate-800/90 text-slate-400 font-semibold text-xs border-b border-slate-700/50 py-4 px-4 text-left uppercase tracking-wider',
          td: 'py-5 px-4 text-sm border-b border-slate-800/60 text-slate-300 font-normal whitespace-normal break-words',
        }}
      >
        <Table.ScrollContainer>
          <Table.Content>
            <TableHeader>
              <TableColumn className="w-1/6">Recipient Name</TableColumn>
              <TableColumn className="w-20">Blood Group</TableColumn>
              <TableColumn className="w-1/5">
                Location (District/Upazila)
              </TableColumn>
              <TableColumn className="w-2/5">Hospital & Address</TableColumn>
              <TableColumn className="w-28">Date & Time</TableColumn>
              <TableColumn className="w-24">Status</TableColumn>
              <TableColumn className="text-center w-32">Actions</TableColumn>
            </TableHeader>

            <TableBody items={items} emptyContent="No donation requests found.">
              {item => (
                <TableRow key={String(item._id)}>
                  <TableCell className="text-slate-200 font-medium">
                    {item.recipientName || '—'}
                  </TableCell>

                  <TableCell>
                    <span className="inline-block px-3 py-1 bg-red-950/40 text-red-400 border border-red-900/50 rounded-lg text-xs font-bold min-w-[42px] text-center">
                      {item.bloodGroup}
                    </span>
                  </TableCell>

                  <TableCell className="text-xs text-slate-300 font-medium">
                    {item.upazila}, {item.district}
                  </TableCell>

                  <TableCell>
                    <div className="text-xs">
                      <div className="text-slate-300 font-medium">
                        {item.hospitalName}
                      </div>
                      <div className="text-slate-400 mt-0.5">
                        {item.fullAddress}
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="text-xs text-slate-300 font-medium">
                      <div>{item.donationDate}</div>
                      <div className="text-slate-400 mt-0.5">
                        {item.donationTime}
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>
                    <Chip
                      className="capitalize font-medium text-[11px] px-2"
                      color={getStatusColor(item.donationStatus)}
                      size="sm"
                      variant="flat"
                    >
                      {item.donationStatus}
                    </Chip>
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <Tooltip content="Edit Request" color="foreground">
                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          className="text-blue-400 hover:bg-blue-950/40"
                          onClick={() => onEdit?.(item)}
                        >
                          <Edit2 size={16} />
                        </Button>
                      </Tooltip>

                      <Tooltip content="Delete Request" color="danger">
                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          className="text-red-400 hover:bg-red-950/40"
                          onClick={() => onDelete?.(item)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </Tooltip>

                      {item.donationStatus === 'inprogress' && (
                        <>
                          <Tooltip content="Mark as Done" color="success">
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="text-green-400 hover:bg-green-950/40"
                              onClick={() => onStatusChange?.(item._id, 'done')}
                            >
                              <CheckCircle size={16} />
                            </Button>
                          </Tooltip>

                          <Tooltip content="Cancel Request" color="danger">
                            <Button
                              isIconOnly
                              size="sm"
                              variant="light"
                              className="text-amber-500 hover:bg-amber-950/40"
                              onClick={() =>
                                onStatusChange?.(item._id, 'canceled')
                              }
                            >
                              <XCircle size={16} />
                            </Button>
                          </Tooltip>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>

      {/* Pagination - Only show if more than 1 page */}
      {pages > 1 && (
        <div className="flex w-full justify-center mt-4 z-10">
          <Pagination
            isCompact
            showControls
            showShadow
            color="danger"
            page={page}
            total={pages}
            onChange={setPage}
            classNames={{
              wrapper:
                'gap-1 bg-slate-950 border border-slate-800 shadow-2xl p-2 rounded-xl flex items-center',
              item: 'text-white bg-slate-800 hover:bg-slate-700 font-bold min-w-[36px] h-9 rounded-lg transition-all',
              cursor:
                'bg-red-600 text-white font-extrabold shadow-lg shadow-red-600/50 rounded-lg',
              prev: 'text-white bg-slate-800 hover:bg-slate-700 min-w-[36px] h-9 rounded-lg',
              next: 'text-white bg-slate-800 hover:bg-slate-700 min-w-[36px] h-9 rounded-lg',
            }}
          />
        </div>
      )}
    </div>
  );
}

import DashboardSidebar from '@/components/DashboardSidebar';

const DashboardLayout = ({ children }) => {

  return (
    <div className="bg-[#070b19]  min-h-screen flex">
      <aside>
        <DashboardSidebar></DashboardSidebar>
      </aside>
      <div >{children}</div>
    </div>
  );
};

export default DashboardLayout;

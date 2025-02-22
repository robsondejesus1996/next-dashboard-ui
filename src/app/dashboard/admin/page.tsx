import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3">
      <div className="flex gap-4 justity-between flex-wrap">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="saff"/>
      </div>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart/>
        </div>
        <div className="w-full lg:w-2/3 h-[450px]"></div>
      </div>
      <div className=""></div>
      </div>
      <div className="w-full lg:w-1/3">r</div>
    </div>
  )
}
export default AdminPage;
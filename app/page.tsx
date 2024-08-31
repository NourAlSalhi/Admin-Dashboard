import { Card } from "@/components";
import { Profile, Categories } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-5">
      <Card
        label="Posts"
        count={100}
        icon={<Profile className="text-slate-500 size-12" />}
      />
      <Card
        label="Categories"
        count={12}
        icon={<Categories className="text-slate-500 size-12" />}
      />
      <Card
        label="Users"
        count={250}
        icon={<Profile className="text-slate-500 size-12" />}
      />
      <Card
        label="Comments"
        count={1200}
        icon={<Categories className="text-slate-500 size-12" />}
      />
    </div>
  );
}

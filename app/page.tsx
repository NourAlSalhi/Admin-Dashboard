import { Card, Comment, Folder, Post, Profile } from "@/components";
import { AnalyticsChart, PostsTable } from "./components";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 mb-5">
        <Card
          label="Posts"
          count={60}
          icon={
            <Post className="text-slate-500 md:size-10 lg:size-12 size-12" />
          }
        />
        <Card
          label="Categories"
          count={10}
          icon={
            <Folder className="text-slate-500 md:size-10 lg:size-12 size-12" />
          }
        />
        <Card
          label="Users"
          count={750}
          icon={
            <Profile className="text-slate-500 md:size-10 lg:size-12 size-12" />
          }
        />
        <Card
          label="Comments"
          count={1200}
          icon={
            <Comment className="text-slate-500 md:size-10 lg:size-12 size-12" />
          }
        />
      </div>
      <div>
        <AnalyticsChart />
      </div>
      <div className="mt-5">
        <PostsTable limit={5} title="Latest Posts" />
      </div>
    </div>
  );
}

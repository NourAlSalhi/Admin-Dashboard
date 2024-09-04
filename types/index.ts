export interface Post {
    id: string;
    title: string;
    body: string;
    author: string;
    date: string;
    comments: PostComment[];
  }
  
  export interface PostComment {
    id: string;
    text: string;
    username: string;
  }
  
export interface AnalyticsItem {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }
  
export type Page =
  | "dashboard"
  | "documents"
  | "history"
  | "statistics"
  | "processing"
  | "result"
  | "feedback"
  | "error";

export type UserProfile = {
  avatar: string;
  name: string;
  organization: string;
};
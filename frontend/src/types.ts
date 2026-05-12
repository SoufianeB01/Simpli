export type Page =
  | "dashboard"
  | "documents"
  | "processing"
  | "result"
  | "feedback"
  | "error";

export type UserProfile = {
  avatar: string;
  name: string;
  organization: string;
};
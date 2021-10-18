import api from "@/helpers/api";
import packageJson from "../../package.json";

export type Release = {
  tag_name: string;
  body: string;
  created_at: string;
};

export type State = {
  settings: Record<string, any>;
  version: string;
  loading: boolean;
  releases: Release[];
};

export const state: State = {
  settings: api.fetchSettings(),
  version: packageJson.version,
  loading: false,
  releases: [],
};

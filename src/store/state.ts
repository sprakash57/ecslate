import api from "@/helpers/api";
import packageJson from "../../package.json";

export type Release = {
  name: string;
  body: string;
  published_at: string;
};

export type State = {
  settings: Record<string, any>;
  version: string;
  loading: boolean;
  releases: Release[];
  newUpdate: string;
  updateCheckError: boolean;
};

export const state: State = {
  settings: api.fetchSettings(),
  version: packageJson.version,
  loading: false,
  releases: [],
  newUpdate: "",
  updateCheckError: false,
};

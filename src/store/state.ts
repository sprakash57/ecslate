import api from "@/helpers/api";

export type State = {
    settings: Record<string, any>
}

export const state = {
    settings: api.fetchSettings()
}
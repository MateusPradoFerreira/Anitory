import { useQuery } from "react-query";
import { API } from "../services/api";

async function getFetch(ctx) {
    const [, path] = ctx.queryKey;
    const { data } = await API.get(path);
    return data;
}

export default function useAnimeQuery(path) {
    return useQuery(['animeSession', path], getFetch, { cacheTime: 1000 * 60 * 5 }); // 5 minutes
}
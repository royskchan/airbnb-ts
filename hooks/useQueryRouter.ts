import { useRouter } from "next/navigation";

interface RouteQuery {
  [key: string]: string;
}

interface QueryRouter {
  push: (path: string, query?: RouteQuery) => void;
}

const useQueryRouter = (): QueryRouter => {
  const router = useRouter();

  const queryRouter: QueryRouter = {
    push: (path: string, query?: RouteQuery) => {
      let queryStr = "";

      for (const key in query) {
        if (queryStr) {
          queryStr = `${queryStr}&`;
        }
        queryStr = `${queryStr}${key}=${query[key]}`;
      }

      if (queryStr) {
        router.push(`${path}?${queryStr}`);
      } else {
        router.push(path);
      }
    },
  };

  return queryRouter;
};

export default useQueryRouter;

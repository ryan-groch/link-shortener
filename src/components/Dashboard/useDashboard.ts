import { useSession } from "next-auth/react";
import { useState } from "react";
import { trpc } from "../../utils/trpc";

const useDashboard = () => {
  // const searchState = useState("");
  useSession();

  const urlsQuery = trpc.shortUrl.getUrls.useQuery();

  return urlsQuery;
};

export default useDashboard;

import { auth } from "@/lib/firebase-admin";
import { getAllSites, getUserSites } from "@/lib/db-admin";

const handler = async (req, res) => {
  const result = await getAllSites();

  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { sites } = await getUserSites(uid);

    res.status(200).json({ sites });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import profile from "@/data/profile.json"; // adjust path if needed

export default function handler(req, res) {
  res.status(200).json(profile.about);
}

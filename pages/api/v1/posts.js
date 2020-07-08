import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const postData = req.body;
    console.log(postData);

    return res.json({ status: "SAVING POST", ...postData });
  } else {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = response.data;

    return res.json(posts.slice(0, 20));
  }
};

import { Button } from "@mui/material";
import { client } from "../../libs/client";
import type { NextPage } from "next";
import { Blog } from "../../types/blogs";

type Props = {
  blogs: Array<Blog>;
};

const Home: NextPage<Props> = (props) => {
  const blogs = props;
  console.log(blogs);
  return <Button variant="contained">test</Button>;
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
    revalidate: 600,
  };
};

export default Home;

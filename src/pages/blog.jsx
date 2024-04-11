import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/blog/view';



// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Home | Sunsea-Natural </title>
      </Helmet>

      <BlogView />
    </>
  );
}

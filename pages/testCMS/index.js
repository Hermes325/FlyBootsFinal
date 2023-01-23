import React from "react";
import { request } from "../../lib/datocms";

export const pageQuery = `
  query {
    datoCmsSite {
      faviconMetaTags {
        tags
      }
    }
    datoCmsBoot {
      seoMetaTags {
        tags
      }
      catalogImages {
        alt
        gatsbyImageData
      }
      catalogTitle
      description1
      description2
    }
  }
`;

// export async function getStaticProps() {
//   const data = await request({
//     query: pageQuery,
//   });
//   return {
//     props: { data },
//   };
// }

export async function getStaticProps() {
  const data = "huy";
  return {
    props: { data },
  };
}

function testCMS({ data }) {
  return <div>{JSON.stringify(data, null, 2)}</div>;
}

export default testCMS;

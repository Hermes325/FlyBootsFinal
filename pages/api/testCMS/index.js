import React from "react";
import { request } from "../../lib/datocms";

export const pageQuery = `
  query {
    allBoots {
      id
      snikersTitle
      _status
      _firstPublishedAt
    }
  
    _allBootsMeta {
      count
    }
  }
`;

export async function getStaticProps() {
  const data = await request({
    query: pageQuery,
  });
  console.log(data);
  return {
    props: { data },
  };
}

function testCMS({ data }) {
  console.log(data);
  return <div>{JSON.stringify(data, null, 2)}</div>;
}

export default testCMS;

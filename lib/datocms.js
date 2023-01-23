// import { GraphQLClient } from "graphql-request";
// export function request({ query, variables, includeDrafts, excludeInvalid }) {
//     const headers = {
//         authorization: `Bearer ${process.env.eac83496c71333525d781c9f123e43}`,
//     };
//     if (includeDrafts) {
//         headers['X-Include-Drafts'] = 'true';
//     }
//     if (excludeInvalid) {
//         headers['X-Exclude-Invalid'] = 'true';
//     }
//     const client = new GraphQLClient('https://graphql.datocms.com', { headers });
//     return client.request(query, variables);
// }
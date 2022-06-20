import gql from "graphql-tag";

const POSTS_QUERY = gql`
query Post {
  posts {
    data {
      id
      attributes {
        Title
        Content
        Published_date
        Cover {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;

export default POSTS_QUERY;

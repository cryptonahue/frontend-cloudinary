import gql from "graphql-tag";

const POSTS_QUERY = gql`
  query Post {
    posts {
      data {
        id
        attributes {
          title
          content
          published_date
          cover {
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

import { useStaticQuery, graphql } from "gatsby";

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
  query HeaderQuery {
    wpMenu(name: {eq: "Main Menu"}) {
      menuItems {
        nodes {
          label
          url
          parentId
          id
          childItems {
            nodes {
              label
              title
              url
              id
            }
          }
        }
      }
    }
  }
  
  `)

  return data
}
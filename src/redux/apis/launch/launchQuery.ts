const getLaunchesQuery = (word: string): string => `
  {
    launchesPast (limit: 100, find:{ mission_name: "${word}" }) {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      ships {
        name
        image
      }
    }
  }
`;

export default getLaunchesQuery;

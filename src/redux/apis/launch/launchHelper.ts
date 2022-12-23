import { LaunchesResponse } from 'types/launchesResponseType';
import { LaunchResponse } from 'types/launchResponseType';
import { LaunchType } from 'types/launchType';

const getLinkUrl = (launch: LaunchResponse): string => {
  if (launch?.links) {
    return (launch.links.article_link || launch.links.video_link) ?? '';
  }

  return '';
};

const getImageUrl = (launch: LaunchResponse): string => {
  const length = launch.ships?.length;

  if (length) {
    return launch.ships[0]?.image ?? '';
  }

  return '';
};

const normalizeLaunches = (data: LaunchesResponse): LaunchType[] => {
  const result: LaunchType[] = [];

  data?.launchesPast.forEach((launch) => {
    if (launch) {
      result.push({
        linkUrl: getLinkUrl(launch),
        imageUrl: getImageUrl(launch),
        missionName: launch.mission_name ?? '',
        rocketName: launch.rocket?.rocket_name ?? '',
        launchSite: launch.launch_site?.site_name_long ?? '',
      });
    }
  });

  return result;
};

export default normalizeLaunches;

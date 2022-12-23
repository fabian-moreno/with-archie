import { LaunchLinks } from 'types/launchLinksType';
import { LaunchSite } from 'types/launchSiteType';
import { Rocket } from 'types/rocketType';
import { Ship } from 'types/shipType';

export interface LaunchResponse {
  mission_name: string;
  launch_site: LaunchSite;
  links: LaunchLinks;
  rocket: Rocket;
  ships: Ship[];
}

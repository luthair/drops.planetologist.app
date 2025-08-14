import type { DropsPeriod } from "~/types";
import dropsData from "~/content/drops-campaigns.json";
import siteContent from "~/content/site-content.json";
import config from "~/content/config.json";

// Transform JSON data to match our TypeScript interfaces
export function getDropsCampaigns(): DropsPeriod[] {
  return dropsData.campaigns.map(campaign => ({
    ...campaign,
    startDate: new Date(campaign.startDate),
    endDate: new Date(campaign.endDate)
  }));
}

// Get site content
export function getSiteContent() {
  return siteContent;
}

// Get configuration
export function getConfig() {
  return config;
}

// Get active campaigns (dynamically determined by date range)
export function getActiveCampaigns(): DropsPeriod[] {
  const now = new Date();
  return getDropsCampaigns().filter(campaign => 
    now >= campaign.startDate && now <= campaign.endDate
  );
}

// Get upcoming campaigns (dynamically determined by date range)
export function getUpcomingCampaigns(): DropsPeriod[] {
  const now = new Date();
  return getDropsCampaigns().filter(campaign => 
    now < campaign.startDate
  );
}

// Get ended campaigns (dynamically determined by date range)
export function getEndedCampaigns(): DropsPeriod[] {
  const now = new Date();
  return getDropsCampaigns().filter(campaign => 
    now > campaign.endDate
  );
}

// Helper to check if a campaign is currently active (dynamically determined)
export function isCampaignActive(campaign: DropsPeriod): boolean {
  const now = new Date();
  return now >= campaign.startDate && now <= campaign.endDate;
}

// Helper to get campaign status
export function getCampaignStatus(campaign: DropsPeriod): 'active' | 'upcoming' | 'ended' {
  const now = new Date();
  if (now >= campaign.startDate && now <= campaign.endDate) return 'active';
  if (now < campaign.startDate) return 'upcoming';
  return 'ended';
}

// Get campaign by ID
export function getCampaignById(id: string): DropsPeriod | undefined {
  return getDropsCampaigns().find(campaign => campaign.id === id);
}

# Content Management Guide

This guide shows you how to manage content for your Dune: Awakening Drops Tracker using JSON files.

## 📁 Content Files

All content is stored in the `src/content/` directory:

- **`drops-campaigns.json`** - Manage drops campaigns
- **`site-content.json`** - Update text content throughout the site
- **`config.json`** - Site configuration and settings

## 🎯 Managing Drops Campaigns

### Adding a New Campaign

1. Open `src/content/drops-campaigns.json`
2. Add a new campaign object to the `campaigns` array:

```json
{
  "id": "unique-campaign-id-2024",
  "title": "Your Campaign Title",
  "startDate": "2024-03-01T00:00:00.000Z",
  "endDate": "2024-03-31T23:59:59.000Z",
  "isActive": true,
  "imageUrl": "/images/campaigns/your-campaign-image.jpg",
  "gameTitle": "Dune: Awakening",
  "requirements": [
    "Watch for 30 mins to unlock item A",
    "Watch for 1 hour to unlock item B",
    "Watch for 2 hours to unlock item C",
    "Must have linked Steam and Twitch with Dune: Awakening account"
  ]
}
```

### Editing Existing Campaigns

- **Update dates**: Modify `startDate` and `endDate` (use ISO format)
- **Change rewards**: Edit the `requirements` array
- **Update image**: Replace the `imageUrl`

**Note**: 
- Campaign status (Active/Upcoming/Ended) is **automatically determined** by comparing current date to `startDate` and `endDate`
- The `isActive` field is kept for data completeness but **not used** - status is dynamic
- The `description` and `gameTitle` fields are kept in the JSON for data completeness but are not displayed in the UI
- Only the campaign title, image, dates, and requirements are shown to users

### Campaign Ordering & Status

**Automatic Status Detection:**
- **Active**: Current date is between `startDate` and `endDate`
- **Upcoming**: Current date is before `startDate`
- **Ended**: Current date is after `endDate`

**Sorting Order:**
1. **Active campaigns first** - Currently running campaigns appear at the top
2. **Then by start date** - Newest to oldest (most recent campaigns higher up)

This ensures users always see the most relevant and recent campaigns first, with no manual intervention required!

**Benefits:**
- ✅ **Set and Forget** - Add campaigns with future dates, they'll automatically go live
- ✅ **No Manual Updates** - Campaigns automatically change from Upcoming → Active → Ended
- ✅ **Always Accurate** - Status reflects real-time state based on current date
- ✅ **Less Maintenance** - No need to update the site just to activate/deactivate campaigns

### Date Format

Always use ISO 8601 format: `"2024-12-31T23:59:59.000Z"`

## 📝 Updating Site Content

### Header Text

Edit `src/content/site-content.json`:

```json
{
  "header": {
    "title": "Your Site Title",
    "subtitle": "Your subtitle text"
  }
}
```

### Section Titles

```json
{
  "streamers": {
    "sectionTitle": "Live Streamers Section Title",
    "sectionSubtitle": "Subtitle for streamers section"
  },
  "drops": {
    "sectionTitle": "Drops Section Title",
    "sectionSubtitle": "Drops section description"
  }
}
```

### Footer & Meta

```json
{
  "footer": {
    "text": "Your footer text",
    "disclaimer": "Your disclaimer"
  },
  "meta": {
    "title": "Page title for SEO",
    "description": "Meta description for SEO"
  }
}
```

## ⚙️ Configuration Options

Edit `src/content/config.json`:

```json
{
  "site": {
    "refreshInterval": 30000,  // How often to refresh streamers (ms)
    "showOfflineStreamers": false
  },
  "features": {
    "autoRefresh": true,
    "showViewerCounts": true,
    "showStreamThumbnails": true
  }
}
```

## 🚀 Deploying Changes

After editing any JSON file:

1. **Test locally**: `npm run dev`
2. **Build**: `npm run build` 
3. **Deploy** your changes

Changes take effect immediately after deployment - no cache clearing needed!

## 📋 Quick Checklist

When adding a new drops campaign:

- [ ] Unique `id` (use kebab-case)
- [ ] Clear, engaging `title`
- [ ] Detailed `description`
- [ ] Correct `startDate` and `endDate`
- [ ] Set `isActive: true`
- [ ] High-quality `imageUrl`
- [ ] Clear `requirements` list
- [ ] Test locally before deploying

## 🎨 Image Management

### Adding Campaign Images

1. **Add image to folder**: Place your image in `/public/images/campaigns/`
2. **Use descriptive names**: `observer-drops-3.jpg`, `support-creator.png`
3. **Update JSON**: Reference as `"/images/campaigns/filename.jpg"`

### Image Guidelines

For campaign images:
- **Size**: 800x450px (16:9 aspect ratio recommended)
- **Format**: JPG or PNG
- **File size**: Under 500KB for fast loading
- **Quality**: High resolution, visually appealing
- **Content**: Relevant to the campaign theme

### Example Usage

```json
{
  "id": "my-campaign",
  "title": "My Campaign",
  "imageUrl": "/images/campaigns/my-campaign.jpg"
}
```

## 💡 Tips

- Keep campaign IDs descriptive: `dune-launch-2024` not `campaign1`
- Use consistent date formats
- Test all changes locally first
- Keep backup copies of working configurations
- Use descriptive commit messages when deploying

---

Need help? Check the JSON syntax or contact support!

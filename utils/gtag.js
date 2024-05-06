import siteMetadata from '@/data/siteMetadata'

export const GA_TRACKING_ID = siteMetadata.analytics.googleAnalytics.googleAnalyticsId

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

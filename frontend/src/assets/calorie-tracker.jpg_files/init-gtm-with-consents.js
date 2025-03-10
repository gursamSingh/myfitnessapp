/* eslint-disable no-unused-vars */

/**
 * Based on the initialization script provided by GTM, with consent management added.
 * See an example of the original gtm-provided script at https://support.google.com/tagmanager/answer/14847097?hl=en&ref_topic=14841964&sjid=12714413042606432948-NA
 * @param {string} containerId - GTM container ID
 * @param {object} options - Options object
 */
async function initializeGTM(containerId, options) {
  const US_ADVERTISING_CATEGORY_ID = '648c9c48e17a3c7a82360c52'
  const US_FUNCTIONAL_CATEGORY_ID = '648c9c48e17a3c7a82360c53'
  const consentVendors = {
    UK_TRADE_DESK: '5e865b36b8e05c48537f60a7',
    GOOGLE_ADVERTISING_PRODUCTS: '5f1aada6b8e05c306c0597d7',
    TV_SQUARED: '60b9f62ca2286310c34ce6a2',
    BRANCH: '5f1b2fbeb8e05c306f2a1efb',
    GOOGLE_ANALYTICS: '5e542b3a4cd8884eb41b5a72',
    META: '6373bbf7836c13052fd486cc',
    PINTEREST: '61eebb2c293cdf2be2787376',
    TIK_TOK: '5e7f6927b8e05c4e491e7380',
  }

  try {
    const consents = await getConsents()
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(consents)

    // The code below is provided directly by Google Tag Manager, see: https://support.google.com/tagmanager/answer/14847097?hl=en&ref_topic=14841964&sjid=13320317595787202296-NA
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    })
    const firstScript = document.getElementsByTagName('script')[0]
    const gtmScript = document.createElement('script')
    gtmScript.async = true
    gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + containerId
    firstScript.parentNode.insertBefore(gtmScript, firstScript)
    // End GTM provided code
  } catch (e) {
    console.debug(`GTM initialize failed: + ${e.message}`)
  }

  async function getConsents() {
    const tcfStatus = await checkTcfStatus()

    return new Promise((resolve, reject) => {
      if (tcfStatus.gdprApplies) {
        window.__tcfapi('getCustomVendorConsents', 2, (data, success) => {
          if (!success) {
            reject('Failed to get TCF consents')
          }
          const consentResults = {}
          for (const [vendorName, vendorId] of Object.entries(consentVendors)) {
            const consented = data.grants[vendorId]?.vendorGrant
            consentResults[
              `${vendorName.toLowerCase()}_consent_accepted`
            ] = consented
          }

          resolve(consentResults)
        })
      } else {
        window.__gpp('getUserConsentsUsnat', (data, success) => {
          if (!success) {
            reject('Failed to get USNAT consents')
          }

          resolve({
            advertising_cookie_consent_accepted: data.categories.find(
              ({ _id }) => _id === US_ADVERTISING_CATEGORY_ID,
            ).consented,
            functional_cookie_consent_accepted: data.categories.find(
              ({ _id }) => _id === US_FUNCTIONAL_CATEGORY_ID,
            ).consented,
          })
        })
      }
    })
  }
}

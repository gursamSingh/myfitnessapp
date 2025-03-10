/**
 * Based on the initialization script provided by Branch.io, with consent management added.
 * @param {string} containerId - Branch key
 * @param {object} options - Options object
 */
async function initializeBranchWithConsents(branchKey, options) {
  const BRANCH_VENDOR_ID = '5f1b2fbeb8e05c306f2a1efb'
  const US_FUNCTIONAL_CATEGORY_ID = '648c9c48e17a3c7a82360c53'

  branchSetup()

  const tcfStatus = await checkTcfStatus()

  if (tcfStatus.gdprApplies) {
    window.__tcfapi('getCustomVendorConsents', 2, (data, success) => {
      if (!success) {
        throw new Error('Failed to get TCF consents')
      }
      const tracking_disabled = !data.grants[BRANCH_VENDOR_ID]?.vendorGrant
      window.branch.init(branchKey, { tracking_disabled })
    })
  } else {
    window.__gpp('getUserConsentsUsnat', (data, success) => {
      if (!success) {
        throw new Error('Failed to get USNAT consents')
      }
      const tracking_disabled = !data.categories.find(
        ({ _id }) => _id === US_FUNCTIONAL_CATEGORY_ID,
      ).consented
      window.branch.init(branchKey, { tracking_disabled })
    })
  }
}

// The contents of this function are provided directly by Branch.io - see: https://help.branch.io/developers-hub/docs/web-basic-integration
function branchSetup() {
  ;(function (b, r, a, n, c, h, _, s, d, k) {
    if (!b[n] || !b[n]._q) {
      for (; s < _.length; ) c(h, _[s++])
      d = r.createElement(a)
      d.async = 1
      d.src = 'https://cdn.branch.io/branch-latest.min.js'
      k = r.getElementsByTagName(a)[0]
      k.parentNode.insertBefore(d, k)
      b[n] = h
    }
  })(
    window,
    document,
    'script',
    'branch',
    function (b, r) {
      b[r] = function () {
        b._q.push([r, arguments])
      }
    },
    { _q: [], _v: 1 },
    'addListener applyCode autoAppIndex banner closeBanner closeJourney creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode trackCommerceEvent logEvent disableTracking'.split(
      ' ',
    ),
    0,
  )
}

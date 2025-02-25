/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

(function () {
    'use strict';

    // test to see if users are clicking on the wordmark in the header of the SEM landing pages
    function handleWordmarkClick(event) {
        var label = event.target.innerText;
        // UA
        window.dataLayer.push({
            event: 'sem-wordmark-click',
            label: label + ' SEM landing page'
        });
        // GA4
        window.dataLayer.push({
            event: 'widget_action',
            type: 'sem-wordmark-click',
            label: label
        });
    }

    var wordmark = document.querySelector('.sem-landing-nav-icon');
    wordmark.addEventListener('click', handleWordmarkClick);
})();

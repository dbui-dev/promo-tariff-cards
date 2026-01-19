(() => {
  // Constant variables
  const tariffList = [
    {
      capacity: "128GB",
      allowance: "Unlimited",
      upfront: "30.00",
      monthly: "45.31",
      deviceCost: "21.36",
      airtimeCost: "23.95",
      benefits: [
        "Roam freely in the EU, up to 25GB",
        "Unlimited UK Minutes & texts",
      ],
    },
    {
      capacity: "128GB",
      allowance: "100GB",
      upfront: "30.00",
      monthly: "38.31",
      deviceCost: "21.36",
      airtimeCost: "16.95",
      benefits: [
        "Roam freely in the EU, up to 25GB",
        "Unlimited UK Minutes & texts",
      ],
    },
    {
      capacity: "256GB",
      allowance: "Unlimited",
      upfront: "30.00",
      monthly: "52.30",
      deviceCost: "23.03",
      airtimeCost: "29.27",
      benefits: [
        "Roam freely in the EU, up to 25GB",
        "Unlimited UK Minutes & texts",
      ],
    },
    {
      capacity: "256GB",
      allowance: "75GB",
      upfront: "30.00",
      monthly: "48.00",
      deviceCost: "23.03",
      airtimeCost: "24.97",
      benefits: [
        "Roam freely in the EU, up to 25GB",
        "Unlimited UK Minutes & texts",
      ],
    },
  ];

  const offerPopupTitle =
    "Get the Galaxy S25 for an exclusive price. Ends January 31";

  const offerPopupContent = `<div style="padding: 2rem">
    <p class="_margin_bottom-xs">Data allowances must be used within the month and cannot be carried over, unless eligible for data rollover. Subject to availability. Ends 31
    January 2026.</p>
    <p class="_margin_bottom-xs">UK calls/texts to standard UK landlines and mobiles and when roaming in our Europe Zone. Europe Zone data only. Fair usage policy
    applies. Special and out of bundle numbers chargeable.</p>
    <p class="_margin_bottom-xs">O2 Refresh custom plans: Direct purchases only. Pay the cash price for your device or
    spread the cost over 3 to 36 months (excludes dongles). The device cost will be the same whatever you choose. There may be an upfront cost. You
    can pay off your Device Plan at any time and choose to keep your Airtime Plan, upgrade it, or leave. If you are in the first 24 months of your Device
    Plan and you cancel your Airtime Plan you will have to pay the remainder of your Device Plan in full. After 24 months you can keep your Airtime
    Plan, upgrade it, or end it without affecting your Device Plan.<p>
    <p class="_margin_bottom-xs">UK data only. Fair Usage policy applies. Devices are subject to availability. 0% APR.
    Finance subject to status and credit checks. 18+. Direct Debit. Credit provided by Telefonica UK Ltd, RG2 6UU, UK. Telefonica UK is authorised and
    regulated by the FCA for consumer credit and insurance. Terms apply, <a href="https://www.o2.co.uk/termsandconditions" target="_blank">o2.co.uk/termsandconditions</a>.</p>
    </div>`;

  // Register change observer to apply promo tariff cards when original content has loaded
  setupChangeObserver();

  /**
   * Contains logic for binding the tariff data to the card template and adding the elements to dom
   */
  function addPromoTariffCards(currentTariffList) {
    const template = (
      product
    ) => `<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 _margin_bottom-l _margin_top-xs ng-tns-c250-8 db-cro-promo-1 ng-star-inserted">
            <o2uk-commercial-tariff-card class="ng-tns-c250-8 tariff-card">
              <div class="tariff-card__roof" style="background-color: #953698">
                <div class="tariff-card__roof-inner ng-star-inserted"><p class="tariff-card__roof-inner-text">Online Exclusive</p></div>
              </div>
              <div class="new-tariff-card__container ng-star-inserted">
              	<div>
                	${planInfoTemplate(product)}
                  <o2uk-new-tariff-card-price-block class="new-tariff-price-block commercial-tariff-card__price-block">
                    ${pricesBlockTemplate(product)}
                    ${priceRiseTemplate(product)}
                    ${priceMonthlyCostTemplate(product)}
                  </o2uk-new-tariff-card-price-block>
                </div>
                <div class="new-tariff-card__flex-column">
                  ${promoBlockTemplate(product)}
                  <button type="button" role="button" o2uk-primary-button=""
                    autotest-target="sim-add-to-basket-at-id"
                    class="mat-focus-indicator tariff-card__add-button mat-button-base o2uk-primary-button ng-star-inserted change-plan-cta"
                    aria-label="Choose this plan Unlimited tariff plan"><span class="mat-button-wrapper"> Choose this plan
                    </span>
                    <div matripple="" aria-hidden="true" class="mat-ripple mat-button-ripple"></div>
                    <div aria-hidden="true" class="mat-button-focus-overlay"></div>
                  </button>
                </div>
              </div>
            </o2uk-commercial-tariff-card>
          </div>`;

    // Builds the plan info content and fair use link where applicable
    const planInfoTemplate = (product) => `
      <div class="new-tariff-card-plan-info">
        <div class="new-tariff-card-plan-info__allowance"><span>${
          product.allowance
        }</span>
          ${fairUseLink(product.allowance)}
        </div>
        <div class="new-tariff-card-plan-info__type-wrapper"><o2uk-link
            class="o2uk-link__container ng-star-inserted"><button type="button"
              class="o2uk-link ng-star-inserted"><span class="ng-star-inserted"><span
                  class="o2uk-link-text ng-star-inserted"></span></span></button></o2uk-link>
        </div>
        <div class="new-tariff-card-plan-info__contract-length">36 month contract</div>
      </div>`;

    // Builds the prices block template, which displays the upfront and monthly cost
    const pricesBlockTemplate = (
      product
    ) => `<div class="new-tariff-price-block__prices ng-star-inserted"><o2uk-price
      class="new-tariff-price-block__prices_upfront">
      <div class="o2uk-price ng-star-inserted">
        <div class="o2uk-price__amount ng-star-inserted"><span class="sr-only ng-star-inserted"> ${
          product.upfront
        } UPFRONT
          </span>
          <div aria-hidden="true" class="o2uk-price__amount-sign ng-star-inserted">£</div>
          <div aria-hidden="true" class="o2uk-price__amount-integer">${
            product.upfront.split(".")[0]
          }</div>
          <div class="o2uk-price__amount-decimal o2uk-price__amount-decimal_medium"><span
              aria-hidden="true">.${product.upfront.split(".")[1]}</span></div>
        </div>
        <div aria-hidden="true" class="o2uk-price__hint ng-star-inserted">UPFRONT</div>
      </div>
    </o2uk-price><span class="new-tariff-price-block__prices_plus">+</span><o2uk-price-new
      class="o2uk-price new-tariff-price-block__prices new-tariff-price-block__prices_monthly new-tariff-price-block__prices_monthly_right o2uk-price_right-aligned ng-star-inserted">
      <div class="o2uk-price__amount ng-star-inserted"><span class="sr-only ng-star-inserted"> £${
        product.monthly
      } monthly
        </span>
        <div aria-hidden="true" role="presentation" class="o2uk-price__amount-sign"> £ </div>
        <div aria-hidden="true" role="presentation" class="o2uk-price__amount-integer"> ${
          product.monthly.split(".")[0]
        } </div>
        <div class="o2uk-price__amount-decimal o2uk-price__amount-decimal_medium"><span aria-hidden="true"
            role="presentation" class="font font_light"> .${
              product.monthly.split(".")[1]
            } </span></div>
      </div>
      <div aria-hidden="true" role="presentation"
        class="o2uk-price__hint o2uk-price__hint_uppercase ng-star-inserted">Monthly</div>
    </o2uk-price-new></div>`;

    // Builds the price rise section
    const priceRiseTemplate = (
      product
    ) => `<div class="commercial-tariff-card__price-wrapper commercial-tariff-card__price-wrapper_upfront commercial-tariff-card__price-wrapper-column ng-star-inserted">
      <div class="new-tariff-price-block__price-rise-container price-rise ng-star-inserted">
        <div class="price-rise-item ng-star-inserted"><span>From Apr 2026 bill</span><span>£${(
          parseFloat(product.monthly) + 2.5
        ).toFixed(2)}</span></div>
        <div class="price-rise-item ng-star-inserted"><span>From Apr 2027 bill</span><span>£${(
          parseFloat(product.monthly) + 5.0
        ).toFixed(2)}</span></div>

        <div class="price-rise-link">
          <span class="sr-only">Price rises every April bill thereafter by £2.50. See plan
            information|see-plan-information</span>
          <span aria-hidden="true">Price rises every April bill thereafter by £2.50.
            <button class="o2uk-link see-plan-info-cta" null="" data-id="see-plan-information" autotest-target="undefined"
              aria-haspopup="null">
              See plan information
            </button></span>
          <span role="button" class="sr-only" aria-disabled="undefined">See plan information</span>
        </div>
      </div>`;

    // Builds the monthly cost breakdown element
    const priceMonthlyCostTemplate = (
      product
    ) => `<div class="new-tariff-price-block__monthly-cost ng-star-inserted">
              <p class="new-tariff-price-block__monthly-cost-title">Monthly cost breakdown:</p><o2uk-amount-info-monthly isapipriceactive="true" islarge="true" istexttooneline="true"
                class="amount-info-monthly font font_bold new-tariff-price-block__monthly-cost-amount amount-info-monthly_large"><div footnotelink="">£${product.deviceCost} Device + £${product.airtimeCost} Airtime</div></o2uk-amount-info-monthly>
            </div>
          </div>`;

    // Builds the promo block element including the benefits list
    const promoBlockTemplate = (product) => `<o2uk-new-tariff-promo-block
          class="new-tariff-promo-wrapper tariff-card-promo-block">
          <div class="new-tariff-promo-block">
            <div class="ng-star-inserted">
              <div class="new-tariff-promo-block-primary__section-title">Offer</div>
              <div class="ng-star-inserted"><button class="db-popup new-tariff-promo-block-primary__container"
                  style="background-color: #953698">
                  <div class="new-tariff-promo-block-primary__title"><span
                      class="o2uk-icon-font icon-chevron-normal new-tariff-promo-block-primary__title-icon"></span>Get the Galaxy S25 for an exclusive low price. Ends 31 January.</div>
                </button></div>
            </div><o2uk-inline-accordion svgclasslist="o2uk-link-svg o2uk-link-svg_xs"
              class="new-tariff-promo-block-benefits _margin_top-xs o2uk-inline-accordion ng-star-inserted"><o2uk-expansion-panel
                class="o2uk-expansion-panel mat-expansion-panel o2uk-expansion-panel_simple ng-tns-c54-12"><o2uk-expansion-panel-header
                  role="button"
                  class="benefits-expansion-panel o2uk-expansion-panel-header mat-expansion-panel-header mat-focus-indicator ng-tns-c55-13 ng-tns-c54-12 o2uk-expansion-panel-header_clickable ng-star-inserted"
                  tabindex="0" id="mat-expansion-panel-header-4" aria-controls="cdk-accordion-child-4"
                  aria-expanded="false" aria-disabled="false"><span class="o2uk-content ng-tns-c55-13">
                    <div
                      class="o2uk-link__container link link_size_bold link_size_large o2uk-inline-accordion__dropdown-arrow-no-outline ng-star-inserted">
                      <div aria-hidden="true" role="presentation" class="o2uk-expansion-panel_button"><span
                          class="o2uk-svg-resolver dropdown-chevron o2uk-expansion-panel_button-icon o2uk-icon-font icon-chevron-down o2uk-link-svg o2uk-link-svg_xs ng-star-inserted"></span>
                      </div>
                    </div><strong
                      class="o2uk-inline-accordion__text o2uk-inline-accordion__text_indent ng-star-inserted"> View (${
                        product.benefits.length
                      })
                      benefits </strong>
                  </span>
                  <div aria-hidden="true"
                    class="o2uk-panel-icon o2uk-expansion-indicator o2uk-svg_bold o2uk-icon-font icon-chevron-down ng-star-inserted"
                    style="transform: rotate(0deg);"></div>
                </o2uk-expansion-panel-header>
                <div
                  class="o2uk-expansion-panel-content ng-tns-c54-12 ng-trigger ng-trigger-bodyExpansion o2uk-expansion-panel-content_init-modal"
                  id="cdk-accordion-child-4" aria-labelledby="mat-expansion-panel-header-4"
                  style="height: 0px; visibility: hidden;">
                  <div class="o2uk-expansion-panel-body ng-tns-c54-12">
                    <div body="" class="new-tariff-promo-block-benefits__container ng-tns-c54-12">
                  		${benefitsListItems(product.benefits)}
                    </div>
                </div>
              </o2uk-expansion-panel></o2uk-inline-accordion>
          </div>
        </div>
        </o2uk-new-tariff-promo-block>`;

    // Will return the fair use link where allowance is "Unlimited"
    const fairUseLink = (allowance) =>
      allowance === "Unlimited"
        ? `<div class="new-tariff-card-plan-info__fair-usage-link ng-star-inserted"><a
                href="https://www.o2.co.uk/termsandconditions/mobile/o2-consumer-fair-usage-policy" target="_blank">Fair
                usage applies<span class="sr-only" style="position: absolute !important;">&nbsp;Opens in new
                  tab</span></a></div>`
        : "";

    // Build elements to display the benefit list of a tariff
    const benefitsListItems = (benefits) => {
      let benefitList = "";
      const benefitRowTemplate = (
        benefitText
      ) => `<div class="new-tariff-promo-block-benefits__offer ng-star-inserted">
              <p>${benefitText}</p><o2uk-link svgid="icon-info-roundel"
                wrapperclass="new-tariff-promo-block-benefits__offer-button" svgclass="o2uk-link-svg_no_margin"
                class="o2uk-link__container ng-star-inserted"><button type="button"
                  class="new-tariff-promo-block-benefits__offer-button o2uk-link o2uk-link-svg_margin_right o2uk-link-svg_right o2uk-link_size_large ng-star-inserted"
                  aria-label="Show offer info" aria-haspopup="dialog"><span
                    class="o2uk-icon-font o2uk-link-svg icon-info-roundel o2uk-link-svg_l o2uk-link-svg_no_margin ng-star-inserted"></span></button></o2uk-link>
            </div>`;

      if (benefits && benefits.length > 0) {
        benefitList = benefits.map((benefit) => benefitRowTemplate(benefit));
      }

      return benefitList.join("");
    };

    // Apply promo tariff cards to row container
    currentTariffList.map((tariff) => {
      $("o2uk-device-tariff-cards .ng-trigger-tariffCardsAnimation .row")
        .prepend(template(tariff))
        .hide()
        .fadeIn();
    });
  }

  /**
   * Returns tariffs which match the capacity which is currently selected in device params
   */
  function getTariffsForSelectedCapacity() {
    const selectedCapacity = $(
      "o2uk-device-params .o2uk-pills__button_selected"
    )
      .find(".o2uk-pills__label")
      .text();

    return tariffList.filter((tariff) => tariff.capacity === selectedCapacity);
  }

  /**
   * Observer to check when an element exists in dom.
   * Will unsubscribe when it has been detected.
   */
  function waitForElement(root, selector, timeout = 1000) {
    let timeoutId;
    return new Promise((resolve, reject) => {
      let element = root.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type !== "childList") {
            return;
          }
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType !== Node.ELEMENT_NODE) {
              return;
            }
            if (node.matches(selector)) {
              observer.disconnect();
              clearTimeout(timeoutId);
              resolve(node);
              return;
            }

            element = root.querySelector(selector);
            if (element) {
              observer.disconnect();
              clearTimeout(timeoutId);
              resolve(element);
            }
          });
        });
      });

      observer.observe(root, { childList: true, subtree: true });

      timeoutId = setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element not found: ${selector}`));
      }, timeout);
    });
  }

  /**
   * Used to detect when the loading animation completes fading out so we can apply our promo tariff cards.
   *
   * Assumes that the loading animation is triggered when the page content is loaded to cover case
   * of running on page load.
   *
   * Observer will also continue to run on page to detect any changes to device params e.g. capacity
   * so that the promo cards can be removed/added each time.
   */
  function setupChangeObserver() {
    console.log("==>begin change observer");
    const config = {
      attributes: true,
      characterData: false,
      childList: false,
      subtree: false,
    };
    let isLoaded = false;
    const callback = (mutationList) => {
      for (const mutation of mutationList) {
        if (
          mutation.attributeName === "style" &&
          mutation.target.className === "o2uk-buble-loader_fade-out"
        ) {
          // Will only apply the promo tariff cards when the parent element exists in dom
          waitForElement(document, "o2uk-commercial-tariff-card", 5000).then(
            () => {
              console.log(
                "==>o2uk-buble-loader complete - add promo tariff cards",
                mutation
              );
              $(".db-cro-promo-1").remove();
              addPromoTariffCards(getTariffsForSelectedCapacity());
              if (!isLoaded) {
                bindEvents();
              }
              isLoaded = true;
            }
          );
        }
      }
    };
    const observer = new MutationObserver(callback);
    const targetNode = document.querySelector(
      "#o2uk-buble-loader.o2uk-buble-loader_fade-out"
    );
    observer.observe(targetNode, config);
  }

  /**
   * Setup event handlers for elements added dynamically to dom
   */
  function bindEvents() {
    // Handler for opening offer popup
    $(document).on(
      "click",
      ".db-popup .new-tariff-promo-block-primary__title",
      () => addDialogPopup($("body"), offerPopupTitle, offerPopupContent)
    );

    // Copy click event for see plan info popup
    $(document).on("click", ".see-plan-info-cta", () =>
      $(".price-rise-link .o2uk-link").last().click()
    );

    // Copy click event for change plan cta
    $(document).on("click", ".change-plan-cta", () =>
      $(".tariff-card__add-button").last().click()
    );

    // Toggle the benefits block display and heading
    $(document).on("click", ".benefits-expansion-panel", (currentElement) => {
      const elementHeader = $(currentElement)[0].currentTarget;
      const elementContent =
        $(currentElement)[0].currentTarget.nextElementSibling;
      const numberOfBenefits = $(elementContent).find(
        ".new-tariff-promo-block-benefits__offer"
      ).length;
      $(elementContent).css({ height: "auto", visibility: "visible" });
      $(elementContent).slideToggle(400, () => {
        if (
          $(elementHeader).find(
            ".o2uk-expansion-panel_button .icon-chevron-down"
          ).length > 0
        ) {
          $(elementHeader)
            .find(".dropdown-chevron")
            .removeClass("icon-chevron-down")
            .addClass("icon-chevron-up");
          $(elementHeader)
            .find(".o2uk-inline-accordion__text")
            .text("Hide benefits");
        } else {
          $(elementHeader)
            .find(".dropdown-chevron")
            .removeClass("icon-chevron-up")
            .addClass("icon-chevron-down");
          $(elementHeader)
            .find(".o2uk-inline-accordion__text")
            .text(`View (${numberOfBenefits}) benefits`);
        }
      });
    });
  }

  /**
   * Displays dialog popup control.
   *
   * Includes event handler for removal of popup upon actioning close cta.
   */
  function addDialogPopup(element, title, content) {
    const dialogPopup = `<div class="cdk-overlay-container db-promo-tariff_overlay">
                    <div class="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
                    <div class="cdk-global-overlay-wrapper" dir="ltr" style="justify-content: center; align-items: center;">
                      <div class="cdk-overlay-pane" style="pointer-events: auto; position: static;">
                        <div tabindex="-1" aria-modal="true" class="o2uk-dialog-container mat-dialog-container" role="dialog"
                          style="transform: none; opacity: 1;">
                          <div class="o2uk-container no-gutters-xs o2uk-container_height ">
                            <div class="row o2uk-container_height ">
                              <div class=" col-xs-4 col-sm-8 col-md-skip-2 col-md-8">
                                <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
                                <div cdktrapfocus="" class="o2uk-dialog-content-parent ">
                                  <o2uk-volt-dialog class="volt-dialog">
                                    <div class="o2uk-dialog-title" id="o2uk-dialog-title-0">
                                      <div class="o2uk-dialog-title__content">
                                        <h2 tabindex="-1" class="h3">${title}</h2>
                                        <o2uk-dialog-cross>
                                          <button type="button" role="button" class="o2uk-dialog-title__button "><span
                                              class="o2uk-svg o2uk-svg_size_m o2uk-dialog-title__button-svg o2uk-icon-font icon-cross"></span>
                                            <span class="sr-only">Close Dialog</span>
                                          </button>
                                        </o2uk-dialog-cross>
                                      </div>
                                    </div>
                                    <o2uk-dialog-content class="o2uk-dialog-content mat-dialog-content">
                                      ${content}
                                    </o2uk-dialog-content>
                                  </o2uk-volt-dialog>
                                </div>
                                <div tabindex="0" class="cdk-visually-hidden cdk-focus-trap-anchor" aria-hidden="true"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>`;

    element.append(dialogPopup).fadeIn(500);

    $(
      ".db-promo-tariff_overlay .o2uk-dialog-title__button, .db-promo-tariff_overlay .cdk-overlay-dark-backdrop"
    ).on("click", () => {
      $(".db-promo-tariff_overlay .cdk-overlay-pane").addClass(
        "cdk-overlay-pane--close"
      );
      $(".db-promo-tariff_overlay .cdk-overlay-dark-backdrop").removeClass(
        "cdk-overlay-backdrop-showing"
      );
      window.setTimeout(() => {
        $(".db-promo-tariff_overlay").remove();
      }, 250);
    });
  }
})();

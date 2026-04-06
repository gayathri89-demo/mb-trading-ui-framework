# Overview

This project is a Cypress-based Web UI Automation Framework built to validate key user flows on the MultiBank platform.

The goal of this framework is not just to automate tests, but to reflect real-world automation practices — focusing on maintainability, reliability, and clean structure.

Through this project, I’ve implemented:

- A Page Object Model (POM) structure to keep tests clean and reusable
- Fixture-driven test data to avoid hard-coded values where possible
- Cross-browser execution support
- Basic strategies to handle dynamic UI behavior and flaky elements
- CI/CD integration using GitHub Actions
- Automated reporting using Mochawesome

# Tech Stack
- Cypress (E2E Testing)
- JavaScript (ES6)
- Mochawesome (Reporting)
- GitHub Actions (CI/CD)

# Project Structure

mb-trading-ui-framework/
├─ cypress/
│  ├─ e2e/                         # Test specs organized by feature
│  │  ├─ navigation/
│  │  │  └─ topNavigation.cy.js
│  │  ├─ trading/
│  │  │  └─ spotTrading.cy.js
│  │  └─ content/
│  │     ├─ banners.cy.js
│  │     ├─ downloadLinks.cy.js
│  │     ├─ homepageSmoke.cy.js
│  │     └─ whyMultibank.cy.js
│  │
│  ├─ pageObjects/                 # Page Object Model classes
│  │  ├─ BasePage.js
│  │  ├─ HomePage.js
│  │  ├─ NavigationPage.js
│  │  ├─ SpotTradingPage.js
│  │  └─ AboutPage.js
│  │
│  ├─ fixtures/             # External test data (no hardcoding)
│  │  ├─ navigation.json
│  │  ├─ trading.json
│  │  ├─ content.json
│  │  └─ example.json
│  │
│  ├─ support/                    # Custom commands & global config
│  │  ├─ commands.js
│  │  └─ e2e.js
│  │
│  ├─ reports/                    # Mochawesome reports
│  │  ├─ mochawesome/
│  │  ├─ merged.json
│  │  └─ report.html
│  │
│  ├─ screenshots/                # Failure screenshots
│  └─ videos/                     # Test execution recordings
│
├─ .github/
│  └─ workflows/
│     ├─ ui-tests.yml             # Cypress CI execution
│     └─ lighthouse.yml           # Performance audit (bonus)
│
├─ cypress.config.js              # Cypress configuration
├─ .lighthouserc.json            # Lighthouse config
├─ package.json                  # Dependencies & scripts
├─ README.md                     # Documentation
└─ .gitignore

The structure is designed to be easy to scale, with clear separation between test logic, data, and reusable components.

# Setup Instructions
1. Clone the repository
git clone https://github.com/gayathri89-demo/mb-trading-ui-framework.git
cd mb-trading-ui-framework
2. Install dependencies
npm install
3. Open Cypress Test Runner
npx cypress open
4. Run tests via CLI
npm run test
# Environment Configuration

Base URLs are defined in cypress.config.js:

env: {
     tradeHomepageUrl: "https://trade.mb.io/homepage",
      exploreUrl: "https://mb.io/en-AE/explore",
      bannersUrl: "https://mb.io/en-AE",
      companyUrl: "https://mb.io/en-AE/company"
}

# Note:
Most URLs are centralized, but a few places still use hard-coded values.
This is an area that can be improved by fully moving to environment-driven configuration.

# Test Coverage
- Navigation & Layout
Verifies top navigation menu visibility
Validates menu items and links
Ensures navigation works correctly
- Trading Functionality
Checks visibility of the spot trading section
Verifies presence of trading pairs
Performs basic validation on displayed data
Note:
Some checks (like specific trading pairs such as MBG) are currently hard-coded and can be improved using fixtures.
- Content Validation
Validates marketing banners
Verifies download section links
Checks “Why MultiBank” page content

# Test Design Approach

While building this framework, I focused on keeping tests:

Independent (no shared state between tests)
Simple and readable
Free from fixed waits like cy.wait(5000)
Built using reusable commands and page objects
Stable using Cypress’ built-in retry mechanism

# Handling Flakiness

To improve test stability, the framework follows a few practical strategies:

- Pages are validated for basic visibility using a reusable command (`waitForPage`)
- Elements are scrolled into view before performing assertions or interactions
- Cypress’s built-in retry mechanism is used instead of fixed waits

# Current limitations:

- Page readiness is not fully validated using `document.readyState`
- Network-level control using `cy.intercept()` is not yet implemented

# Cross-Browser Testing

You can run tests across browsers using:

npm run test:chrome
npm run test:edge
npm run test:firefox

- Note:
The CI pipeline currently runs tests on Chrome and Edge.

# Reporting
Generate reports
npm run test
npm run report:merge
npm run report:generate

Output
- cypress/reports/report.html
- Mochawesome JSON output
- Merged report data
- HTML report, screenshots, and videos.

Reports include:

- HTML test reports
- Screenshots for failures
- Test execution videos

# CI/CD Integration

The framework includes a GitHub Actions workflow:

.github/workflows/ui-tests.yml

It automatically runs on:

Push
Pull requests

And:

Executes tests
Runs across browsers
Uploads screenshots and videos as artifacts

# Assumptions & Trade-offs (Creative solutions to common automation challenges)

One of the key challenges in this project is the login flow, which is protected by CAPTCHA and OTP/MFA verification.

While trying to automate authentication, I explored the API layer directly. However:

The login request returned “Captcha validation failed”
The MFA endpoint returned “OTP hasn't been requested”

This clearly shows that the system is designed to prevent automated login attempts, and authentication cannot proceed without real user interaction.

Since CAPTCHA and OTP are intentional security mechanisms, I did not attempt to bypass or simulate them. Doing so would not reflect real-world or ethical testing practices.

Instead, the framework focuses on publicly accessible flows, where automation is stable and meaningful.

For production-grade automation, a better approach would be:

- Using a pre-authenticated session provided by QA
- Using a test account with CAPTCHA/OTP disabled
- Running tests in a controlled lower environment

# Engineering Decisions & Problem Solving

This framework demonstrates practical solutions to real-world automation challenges:

- Deterministic Test Scope

Automation focuses on public, stable user flows on mb.io, including:

- Navigation and layout validation
- Spot trading data visibility (public explore page)
- Marketing content and download CTA validation
- Company content validation (e.g., “Why MultiBank Group”)
- Download app link that navigates to playstore/app store

These flows are fully deterministic and suitable for reliable UI automation.

# Handling CAPTCHA & OTP (Authentication Limitation)

The authenticated trading platform (trade.mb.io) is protected by:

- CAPTCHA (bot protection)
- OTP (multi-factor authentication)

These mechanisms are intentionally designed to prevent automated access and cannot be reliably bypassed in a standard UI automation framework without:

- a test-only environment with CAPTCHA disabled
- pre-authenticated sessions
- backend-supported test tokens or mocks

### Therefore, login and authenticated trading flows are intentionally excluded.

This is a deliberate engineering decision, not a missing feature, ensuring:

test stability
reproducibility
alignment with real-world automation best practices


# How to Extend the Framework

- Add new page objects → cypress/pageObjects
- Add test data → cypress/fixtures
- Add new test cases → cypress/e2e
- Extend reusable commands → cypress/support/commands.js

# Cloud/Grid Execution

Not fully implemented; current framework supports cross-browser execution and a GitHub Actions matrix and can be extended to BrowserStack, Sauce Labs, or Cypress Cloud.

# Author

Gayathri

# Key Highlights
- Clean and scalable project structure
- Practical use of Cypress for real-world UI testing
- CI/CD ready
- Cross-browser support
- Designed with real constraints and trade-offs in mind

# Performance Testing (Lighthouse CI)

Performance auditing is implemented using Lighthouse CI to evaluate the quality and performance of public user-facing pages.

- Coverage

The following deterministic public pages are audited:

Homepage → https://mb.io/en-AE
Explore page → https://mb.io/en-AE/explore

- Implementation

Lighthouse CI configuration is maintained in:

.lighthouserc.json

CI workflow is defined in:

.github/workflows/lighthouse.yml

- Performance audits are executed automatically on:
every push
pull requests

- Metrics Evaluated

The following Lighthouse categories are validated:

1.  Performance
2.  Accessibility
3.  Best Practices
4.  SEO

- Viewing Reports

Lighthouse reports are generated during CI runs and uploaded to temporary public storage.

To view reports:

1. Go to GitHub → Actions
2. Open Lighthouse CI workflow
3. Select a run
4. Open the step: Run Lighthouse CI
5. Click the generated report link

- Design Decision for Performance testing

Performance testing is implemented separately from Cypress functional tests to:

- maintain separation of concerns
- avoid flakiness in UI test execution
- align with real-world CI practices

# Test Evidence

- Sample Test Execution Report
A sample Mochawesome HTML report is included in the repository:

cypress/reports/merged.json
cypress/reports/report.html

# Repository Link

https://github.com/gayathri89-demo/mb-trading-ui-automation
// Project-specific evidence only. See docs/portfolio-content-review.md.
export const projects = [
  {
    "id": 1,
    "title": "Richie",
    "subtitle": "Leading product and engineering for a 50,000+ user fintech app",
    "description": "At Chase Alpha, I combined hands-on Flutter development with technical and product leadership for Richie: advisory, broker-connected trading, learning, social feeds and subscriptions across iOS and Android.",
    "role": "Tech Lead & Product Lead",
    "tags": [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "REST APIs",
      "Razorpay",
      "Shorebird",
      "Firebase Analytics",
      "MoEngage",
      "FCM",
      "Branch.io",
      "LinkRunner",
      "Python"
    ],
    "category": "Mobile App",
    "contributions": [
      "Led four engineers through planning, code review and two-week delivery cycles.",
      "Owned backend architecture, authentication and API integrations.",
      "Integrated Zerodha and Angel One brokerage connections, Razorpay payments and subscriptions.",
      "Managed store releases and production fixes, including Shorebird patches.",
      "Built a Python-based support and sales bot, with analytics, messaging and deep-link integrations."
    ],
    "metrics": [
      {
        "value": "50,000+",
        "label": "Users",
        "note": "Résumé-reported; snapshot date not specified."
      },
      {
        "value": "4",
        "label": "Engineers led",
        "note": "Chase Alpha team."
      },
      {
        "value": "2 weeks",
        "label": "Release cadence",
        "note": "Aligned with sprint cycles."
      }
    ],
    "reliability": {
      "value": "100%",
      "note": "Crash-free performance reported in the résumé for Richie. Measurement dates, app versions and user/session denominator have not been supplied; this is not a current live measurement."
    },
    "image": "/projects/richie.png",
    "organization": "Chase Alpha",
    "period": "Jul 2023 – Mar 2026",
    "appStoreUrl": "https://apps.apple.com/in/app/richie-stocks-options-app/id1659006578",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.chasealpha.richie",
    "gallery": [
      "/projects/richie-ps1.webp",
      "/projects/richie-ps2.webp",
      "/projects/richie-ps3.webp"
    ],
    "status": "Delivered project",
    "scopeNote": "",
    "ownership": "Led a four-engineer team and owned technical delivery, product priorities and production releases.",
    "headline": "Led four engineers · 50,000+ users",
    "architecture": [
      "Flutter client with authenticated backend APIs for financial workflows.",
      "User-shared implementation excerpts show GoRouter/ShellRoute navigation, Riverpod state and shared API response handling.",
      "Broker integrations: Zerodha and Angel One; payments and subscriptions: Razorpay.",
      "Product engagement: Firebase Analytics, MoEngage, FCM, Branch.io and LinkRunner."
    ],
    "delivery": [
      "Two-week sprints and a matching release cadence, including planning and code reviews.",
      "App Store and Google Play submission, versioning and production hotfix ownership.",
      "Shorebird code-push patches for critical fixes."
    ],
    "automationNote": "Release automation: Shorebird patches are documented. A project-specific CI pipeline is not recorded.",
    "outcome": "Delivered advisory, trading, learning and subscription features for a fintech audience.",
    "architectureNote": "Richie code shared in September 2025 demonstrates GoRouter/ShellRoute navigation, Riverpod screen state, Firebase Analytics navigation observation and a shared client-side ApiHelper with ApiSuccess/ApiError handling. These development excerpts establish implementation choices, not a complete architecture audit or proof of production deployment. The email-verification snapshot includes unfinished verification logic.",
    "platform": "Flutter · iOS & Android",
    "caseStudy": {
      "brief": "Richie combines investment advisory, social feeds, academy content, brokerage connections and subscription plans in one mobile product. My work covered the customer-facing app, its backend integrations, delivery coordination and production support.",
      "challenge": "Coordinate connected financial and content journeys across iOS and Android, while shipping on a two-week rhythm and responding to production issues.",
      "accountability": "I translated stakeholder requirements into technical specifications and prioritised roadmaps, planned work, reviewed code and stayed hands-on in Flutter. My remit also included backend architecture, authentication, APIs and store-release management.",
      "workstreams": [
        {
          "title": "Broker-connected trading",
          "work": "Integrated Zerodha and Angel One so users could connect brokerage accounts and trade within Richie. Owned the authentication and API integration work supporting financial workflows.",
          "result": "Broker connections became part of the app’s trading journey."
        },
        {
          "title": "Advisory, learning and subscriptions",
          "work": "Shipped investment advisory, social feeds, academy content and subscription plans. Integrated Razorpay for payment flows and subscription payments.",
          "result": "A connected product offering across advisory, content and paid access."
        },
        {
          "title": "Engagement and attribution",
          "work": "Integrated Firebase Analytics (GA4) and MoEngage for event tracking, FCM for notifications, and Branch.io and LinkRunner for deep linking and attribution.",
          "result": "Instrumentation, messaging and link handling supported the mobile experience."
        },
        {
          "title": "Team delivery and production ownership",
          "work": "Led and mentored four engineers through sprint planning, task allocation and code review. Managed versioning, App Store and Google Play submissions, debugging and hotfixes.",
          "result": "A documented two-week release cadence aligned with sprint cycles."
        }
      ],
      "system": [
        {
          "title": "Customer-facing application",
          "items": [
            "Flutter / Dart on iOS and Android",
            "GoRouter + ShellRoute around tab navigation",
            "Riverpod in the email-verification flow",
            "Query-driven advice, feed and academy destinations"
          ]
        },
        {
          "title": "Financial workflows",
          "items": [
            "Shared ApiHelper with explicit success/error response handling",
            "Backend architecture and authentication ownership",
            "Zerodha / Angel One connections; Razorpay payments"
          ]
        },
        {
          "title": "Engagement and measurement",
          "items": [
            "FirebaseAnalyticsObserver on navigation",
            "Firebase Analytics (GA4), MoEngage and FCM",
            "Branch.io and LinkRunner deep links / attribution"
          ]
        },
        {
          "title": "Operations and support",
          "items": [
            "App Store / Google Play submission and versioning",
            "Shorebird code-push hotfixes",
            "Python-based Rasabot for support and sales"
          ]
        }
      ],
      "decisions": [
        {
          "title": "Use a shared navigation shell for product journeys",
          "approach": "Richie’s shared router uses GoRouter and ShellRoute around its tab interface. Route parameters carry advice filters, feed filters and academy quick-access destinations; startup routing considers login state and a saved destination. These route definitions were also the basis for a marketing-team request to target campaign links at specific app screens.",
          "result": "Explicit destinations for Feed, Advices, Home, Trades and Academy, plus payment-return parameters for course, webinar and mentorship flows, are present in the shared router."
        },
        {
          "title": "Keep verification state and API outcomes explicit",
          "approach": "The shared email-verification flow uses Riverpod state and a common ApiHelper, with distinct ApiSuccess and ApiError handling. OTP resend/countdown and progression into personal-details or KYC screens are represented in that code.",
          "result": "The development excerpt shows separate API success/failure handling, state-driven resend timing and routing within a profile/KYC journey. Its OTP-verification implementation was unfinished in that snapshot, so it is not presented as proof of a completed verification feature."
        },
        {
          "title": "Pair planned releases with a critical-fix path",
          "approach": "Managed two-week store releases and used Shorebird code-push patches for critical fixes.",
          "result": "The résumé records shipping critical fixes without waiting for store review. A measured reduction in release lead time is not available."
        },
        {
          "title": "Connect product planning to engineering execution",
          "approach": "Translated stakeholder requirements into prioritised roadmaps and technical specifications, then coordinated four engineers through planning, allocation and reviews.",
          "result": "Release cadence stayed aligned with two-week sprint cycles while I remained hands-on in development."
        },
        {
          "title": "Make production stability part of delivery ownership",
          "approach": "Combined proactive debugging, rapid hotfixes and release management with ownership of store submissions and versioning.",
          "result": "The résumé reports 100% crash-free performance for Richie. The reporting window, app versions and denominator have not been supplied."
        }
      ],
      "support": {
        "description": "I built Rasabot, a Python-based support and sales bot. This was a separate automation contribution alongside mobile delivery, with the following results reported in my résumé.",
        "metrics": [
          {
            "value": "92%",
            "label": "User queries resolved autonomously"
          },
          {
            "value": "15%",
            "label": "Reported sales increase"
          },
          {
            "value": "90%",
            "label": "Reported support-time reduction"
          }
        ],
        "note": "Historical résumé-reported results. Reporting dates, sample sizes, comparison baselines and measurement method are not available; these are not current live measurements or independently verified causal estimates."
      },
      "galleryCaptions": [
        "Broker-account connection and account controls, shown in existing Richie promotional artwork.",
        "Investment-plan discovery and product detail, shown in existing Richie promotional artwork.",
        "Advisory and subscription benefits, shown in existing Richie promotional artwork."
      ]
    }
  },
  {
    "id": 2,
    "title": "Guidel",
    "subtitle": "AI city & travel audio guide",
    "description": "An AI-based city guide developed as part of the AppKnit mobile project portfolio.",
    "role": "Mobile Developer",
    "tags": [
      "Flutter",
      "Dart",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Built and shipped the cross-platform city-guide application.",
      "Integrated APIs and backend services for the mobile experience.",
      "Supported release delivery and production issue resolution."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "image": "/projects/guidel.png",
    "organization": "AppKnit",
    "appStoreUrl": "https://apps.apple.com/us/app/guidel-ai-audio-city-guide/id6479697130",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.cityguide.guidel",
    "status": "Delivered project",
    "gallery": [],
    "scopeNote": "",
    "ownership": "Implemented and shipped the city-guide app within the AppKnit portfolio.",
    "headline": "Flutter city-guide delivery",
    "architecture": [
      "Flutter/Dart mobile client integrated with REST APIs and backend services."
    ],
    "delivery": [
      "Supported store-release delivery and production issue resolution."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Delivered a cross-platform AI-based city-guide experience.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android"
  },
  {
    "id": 3,
    "title": "ShiftBOOKD",
    "subtitle": "Native iOS salon booking",
    "description": "A salon appointment-booking application built with native iOS interfaces.",
    "role": "iOS Developer",
    "tags": [
      "Swift",
      "Storyboards",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Built native iOS booking features using Storyboards.",
      "Integrated APIs for the mobile application.",
      "Handled feature development and App Store submission."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "image": "/projects/shiftbookd.png",
    "organization": "AppKnit",
    "appStoreUrl": "https://apps.apple.com/us/app/shiftbookd/id1507908655",
    "status": "Delivered project",
    "gallery": [],
    "scopeNote": "",
    "ownership": "Owned native iOS feature development, API integration and App Store submission.",
    "headline": "Native iOS · Storyboards",
    "architecture": [
      "Swift native iOS client with Storyboard-based interfaces.",
      "Backend API integration for the salon-booking application."
    ],
    "delivery": [
      "Handled feature development through App Store submission."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Delivered native iOS salon-booking functionality.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Native iOS"
  },
  {
    "id": 4,
    "title": "Evexia",
    "subtitle": "Native iOS health monitoring",
    "description": "A health-monitoring application delivered as part of the AppKnit project portfolio.",
    "role": "iOS Developer",
    "tags": [
      "Swift",
      "SwiftUI",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Built the native iOS application using SwiftUI.",
      "Integrated backend APIs and supported testing, releases and maintenance."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "image": "/projects/evexia.jpg",
    "organization": "AppKnit",
    "status": "Delivered project",
    "gallery": [],
    "scopeNote": "",
    "ownership": "Implemented native iOS health-monitoring UI and backend integration.",
    "headline": "Native iOS · SwiftUI",
    "architecture": [
      "Swift and SwiftUI native iOS application.",
      "REST API integration with the health-monitoring backend."
    ],
    "delivery": [
      "Supported testing, release delivery and maintenance."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Delivered the native iOS health-monitoring application.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Native iOS"
  },
  {
    "id": 7,
    "title": "Sparks",
    "subtitle": "Dating for single parents",
    "description": "A dating application designed for single parents.",
    "role": "Mobile Developer · End-to-End Delivery",
    "tags": [
      "Flutter",
      "Dart",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Led application delivery from design handoff through store release.",
      "Integrated APIs and backend services for the mobile experience.",
      "Supported production stability and release delivery."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "image": "/projects/sparks.png",
    "organization": "AppKnit",
    "status": "Delivered project",
    "gallery": [],
    "scopeNote": "",
    "ownership": "Led application delivery from design handoff through store release.",
    "headline": "End-to-end delivery owner",
    "architecture": [
      "Flutter/Dart cross-platform application backed by REST APIs.",
      "Mobile integration with backend services for the dating experience."
    ],
    "delivery": [
      "Owned delivery from design handoff to App Store and Google Play release.",
      "Supported production stability and release fixes."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Shipped a dating application focused on single parents.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android"
  },
  {
    "id": 8,
    "title": "AiCrix",
    "subtitle": "AI cricket analytics",
    "description": "A cricket analytics product connecting a mobile application with prediction services, subscriptions and the Aira chatbot.",
    "role": "Senior Product Engineer · Solo Engineering Owner",
    "tags": [
      "Flutter",
      "FastAPI",
      "Supabase",
      "Python"
    ],
    "category": "Mobile App",
    "contributions": [
      "Owned mobile delivery and supporting services from architecture through releases.",
      "Built FastAPI and Supabase services providing prediction data and chatbot access.",
      "Implemented RevenueCat subscriptions and server-side purchase verification.",
      "Integrated AdMob and Meta Audience Network mediation.",
      "Maintained GitHub Actions checks and error monitoring with Crashlytics and Sentry."
    ],
    "metrics": [
      {
        "value": "5,000+",
        "label": "Registered users",
        "note": "Résumé-reported snapshot; not a live counter."
      },
      {
        "value": "761",
        "label": "Monthly active users",
        "note": "Résumé-reported; reporting month not specified."
      },
      {
        "value": "1,000+",
        "label": "Downloads in one month",
        "note": "Résumé-reported; reporting month not specified."
      },
      {
        "value": "15,000+",
        "label": "Prediction records",
        "note": "Résumé-reported backend data volume."
      }
    ],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "image": "/projects/aicrix.png",
    "organization": "Veloria Tech",
    "websiteUrl": "https://aicrix.com/",
    "appStoreUrl": "https://apps.apple.com/in/app/aicrix-ai-cricket-predictions/id6759485224",
    "playStoreUrl": "https://play.google.com/store/apps/details?id=com.veloria.aicrix",
    "status": "Delivered project",
    "gallery": [],
    "scopeNote": "",
    "ownership": "Solo engineer owning mobile, backend and AI service delivery, monetisation and production support.",
    "headline": "Solo ownership · 5,000+ users",
    "architecture": [
      "Flutter client connected to FastAPI and Supabase services.",
      "Backend services expose a 10-model ML ensemble, prediction records and the Aira chatbot.",
      "RevenueCat subscriptions with server-side verification through Google Play Developer API and Supabase Edge Functions.",
      "AdMob with Meta Audience Network mediation."
    ],
    "delivery": [
      "Maintained GitHub Actions checks.",
      "Monitored errors with Firebase Crashlytics and Sentry, and service availability with StatusCake.",
      "Owned releases, subscription integration and production support."
    ],
    "automationNote": "CI: GitHub Actions checks are documented. Automatic store deployment is not established.",
    "outcome": "Built a subscription-supported cricket analytics platform with 5,000+ registered users.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android"
  },
  {
    "id": 9,
    "title": "Arentzo",
    "subtitle": "Peer-to-peer rental marketplace",
    "description": "A rental marketplace for cars, bikes, electronics and furniture, with listings, authentication, payments and subscriptions.",
    "role": "Senior Product Engineer · End-to-End Owner",
    "tags": [
      "Mobile Development",
      "Supabase",
      "Payments"
    ],
    "category": "Mobile App",
    "contributions": [
      "Owned mobile and backend delivery from requirements through store submission preparation.",
      "Built listing, authentication, payment and subscription flows.",
      "Researched competing platforms and prepared ASO metadata and a pre-launch waitlist."
    ],
    "metrics": [
      {
        "value": "4",
        "label": "Rental categories",
        "note": "Cars, bikes, electronics and furniture."
      },
      {
        "value": "25+",
        "label": "Competitors researched",
        "note": "Résumé-reported product research scope."
      }
    ],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "organization": "Veloria Tech",
    "status": "Pre-launch",
    "websiteUrl": "https://arentzo.com/",
    "gallery": [],
    "image": "/projects/arentzo-rental-marketplace-concept.webp",
    "scopeNote": "",
    "ownership": "Owned mobile and backend delivery, from requirements to store-submission preparation.",
    "headline": "End-to-end product ownership",
    "architecture": [
      "Mobile application integrated with Supabase.",
      "Implemented listings, authentication, payments and subscription flows across four rental categories."
    ],
    "delivery": [
      "Prepared App Store and Google Play submissions.",
      "Researched 25+ competing platforms and prepared ASO metadata and a pre-launch waitlist."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Prepared a four-category rental marketplace for launch; adoption metrics are not yet reported.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Mobile + backend",
    "visualKind": "concept"
  },
  {
    "id": 10,
    "title": "OpenKitchen",
    "subtitle": "Food delivery & food-focused social media",
    "description": "A mobile food platform combining food delivery and food-focused social media.",
    "role": "Mobile Developer · End-to-End Delivery",
    "tags": [
      "Flutter",
      "Dart",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Led application delivery from design handoff through store release.",
      "Integrated APIs and backend services for food and community experiences.",
      "Supported testing and release delivery across mobile platforms."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "organization": "AppKnit",
    "websiteUrl": "https://www.openkitchenapp.com/",
    "status": "Delivered project",
    "gallery": [],
    "image": "/projects/openkitchen-food-community-concept.webp",
    "scopeNote": "",
    "ownership": "Led food-platform delivery from design handoff through store release.",
    "headline": "End-to-end delivery owner",
    "architecture": [
      "Flutter/Dart client integrated with mobile REST APIs.",
      "Backend integration supporting food delivery and food-focused community experiences."
    ],
    "delivery": [
      "Owned delivery from design handoff through App Store and Google Play release.",
      "Supported testing and release fixes."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Delivered food ordering and community experiences in one mobile product.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android",
    "visualKind": "concept"
  },
  {
    "id": 11,
    "title": "SwissSense",
    "subtitle": "Basketball coaching",
    "description": "A basketball-coaching mobile application delivered at AppKnit.",
    "role": "Mobile Developer · End-to-End Delivery",
    "tags": [
      "Flutter",
      "Dart",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Led application delivery from design handoff through store release.",
      "Integrated mobile APIs and backend services.",
      "Supported testing, production fixes and release delivery."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "organization": "AppKnit",
    "status": "Delivered project",
    "gallery": [],
    "image": "/projects/swisssense-basketball-concept.webp",
    "scopeNote": "",
    "ownership": "Led the basketball-coaching app from design handoff through store release.",
    "headline": "End-to-end delivery owner",
    "architecture": [
      "Flutter/Dart mobile application with REST API integration.",
      "Connected mobile coaching experiences to backend services."
    ],
    "delivery": [
      "Owned delivery from design handoff through App Store and Google Play release.",
      "Supported testing, production fixes and release delivery."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Shipped a basketball-coaching mobile application.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android",
    "visualKind": "concept"
  },
  {
    "id": 12,
    "title": "Groupia",
    "subtitle": "Native iOS event booking",
    "description": "An event-booking application delivered at AppKnit, with native iOS development using SwiftUI.",
    "role": "iOS Developer",
    "tags": [
      "Swift",
      "SwiftUI",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Built the native iOS application using SwiftUI.",
      "Integrated backend APIs and supported testing, releases and maintenance."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "organization": "AppKnit",
    "websiteUrl": "https://www.groupia.com/groupia-app",
    "status": "Delivered project",
    "gallery": [],
    "image": "/projects/groupia-events-concept.webp",
    "scopeNote": "",
    "ownership": "Implemented the native iOS event-booking application and backend integration.",
    "headline": "Native iOS · SwiftUI",
    "architecture": [
      "Swift and SwiftUI native iOS application.",
      "REST APIs connect the event-booking interface with backend services."
    ],
    "delivery": [
      "Supported testing, release delivery and maintenance."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Delivered native iOS event-booking experiences.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Native iOS",
    "visualKind": "concept"
  },
  {
    "id": 13,
    "title": "Dopoxy",
    "subtitle": "Learning platform · Delivered version",
    "description": "The learning-platform version of Dopoxy described in the résumé. This case study covers that delivered work, not later product changes.",
    "role": "Mobile Developer",
    "tags": [
      "Flutter",
      "Dart",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Built and shipped the cross-platform learning application.",
      "Integrated APIs and backend services.",
      "Supported release delivery and production issue resolution."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "organization": "AppKnit",
    "scopeNote": "The current store listing describes a different product positioning. A store link is intentionally omitted until the delivered version is reconciled.",
    "status": "Delivered project",
    "gallery": [],
    "image": null,
    "ownership": "Implemented and shipped the learning-platform version described in the résumé.",
    "headline": "Flutter learning-platform delivery",
    "architecture": [
      "Flutter/Dart learning application connected to backend REST APIs."
    ],
    "delivery": [
      "Supported store-release delivery and production issue resolution."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Delivered a cross-platform learning app; later product positioning is outside this case study.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android"
  },
  {
    "id": 14,
    "title": "BEATBoXX",
    "subtitle": "Boxing coaching",
    "description": "A boxing-coaching application delivered as part of the AppKnit mobile portfolio.",
    "role": "Mobile Developer",
    "tags": [
      "Flutter",
      "Dart",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Built and shipped the cross-platform coaching application.",
      "Integrated APIs and backend services.",
      "Supported release delivery and production issue resolution."
    ],
    "metrics": [],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "organization": "AppKnit",
    "appStoreUrl": "https://apps.apple.com/gb/app/beatboxx/id1473917314",
    "status": "Delivered project",
    "gallery": [],
    "image": null,
    "scopeNote": "",
    "ownership": "Implemented and shipped the cross-platform boxing-coaching application.",
    "headline": "Flutter coaching-app delivery",
    "architecture": [
      "Flutter/Dart application with REST API and backend-service integration."
    ],
    "delivery": [
      "Supported store-release delivery and production issue resolution."
    ],
    "automationNote": "Project-specific CI/CD tooling is not recorded.",
    "outcome": "Delivered a mobile boxing-coaching application.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android"
  },
  {
    "id": 15,
    "title": "IoT Home Automation",
    "subtitle": "UnoLabs internship project",
    "description": "A Flutter home-automation application developed during a three-month internship. The product’s public name is not recorded in the résumé.",
    "role": "Flutter Application Developer · Intern",
    "tags": [
      "Flutter",
      "Dart",
      "REST APIs"
    ],
    "category": "Mobile App",
    "contributions": [
      "Developed responsive Flutter screens and reusable cross-platform UI components.",
      "Integrated REST APIs with loading states and error handling.",
      "Assisted with debugging, UI testing and layout fixes under senior developer guidance."
    ],
    "metrics": [
      {
        "value": "3 months",
        "label": "Internship duration",
        "note": "15 September to 15 December 2021."
      }
    ],
    "reliability": {
      "value": "Not published",
      "note": "A project-specific crash-free rate and measurement period are not available."
    },
    "organization": "UnoLabs Private Limited",
    "period": "15 Sep – 15 Dec 2021",
    "status": "Internship project",
    "gallery": [],
    "image": null,
    "scopeNote": "",
    "ownership": "Contributed Flutter UI and API integration under senior developer guidance.",
    "headline": "Internship · Responsive Flutter UI",
    "architecture": [
      "Reusable Flutter UI components for Android and iOS.",
      "REST API integration with loading states and error handling."
    ],
    "delivery": [
      "Assisted with debugging, UI testing and layout fixes during a three-month internship."
    ],
    "automationNote": "No independent release ownership or CI/CD implementation is claimed.",
    "outcome": "Built responsive home-automation screens and reusable cross-platform components.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android"
  }
];

export const projectDetails = Object.fromEntries(projects.map(project => [project.id, project]));

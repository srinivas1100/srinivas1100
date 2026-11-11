// Project-specific evidence only. See docs/portfolio-content-review.md.
export const projects = [
  {
    "id": 1,
    "title": "Richie",
    "subtitle": "Leading product and engineering for a 50,000+ user fintech app",
    "description": "As Tech Lead and Lead Mobile Application Developer at Chase Alpha, I led Richie’s engineering delivery while building its Flutter mobile experience across iOS and Android: advisory, broker-connected trading, learning, social feeds and subscriptions.",
    "role": "Tech Lead & Lead Mobile Application Developer",
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
    "ownership": "Led a four-engineer team while owning hands-on mobile development, architecture decisions, backend integrations and release delivery.",
    "headline": "Led four engineers · 50,000+ users",
    "architecture": [
      "Clean, modular mobile architecture with Riverpod for state management.",
      "GoRouter and ShellRoute for shared tab navigation and URL-driven destinations.",
      "Shared API handling, routing, utilities and reusable UI components.",
      "Broker integrations with Zerodha and Angel One; Razorpay payments and subscriptions.",
      "Firebase Analytics, MoEngage, FCM, Branch.io and LinkRunner for engagement and attribution."
    ],
    "delivery": [
      "Two-week sprints and a matching release cadence, including planning and code reviews.",
      "App Store and Google Play submission, versioning and production hotfix ownership.",
      "Shorebird code-push patches for critical fixes."
    ],
    "automationNote": "Used CI/CD pipelines for deployment and release management, with two-week store releases and Shorebird critical patches.",
    "outcome": "Delivered advisory, trading, learning and subscription features for a fintech audience.",
    "platform": "Flutter · iOS & Android",
    "caseStudy": {
      "brief": "Richie combines investment advisory, social feeds, academy content, brokerage connections and subscription plans in one mobile product. My work covered the customer-facing app, its backend integrations, delivery coordination and production support.",
      "challenge": "Coordinate connected financial and content journeys across iOS and Android, while shipping on a two-week rhythm and responding to production issues.",
      "accountability": "I combined technical leadership with mobile implementation: turning stakeholder requirements into technical specifications, guiding the team’s architecture and code quality, and taking features through integration, releases and production support.",
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
            "Riverpod for application state management",
            "GoRouter + ShellRoute for shared tab navigation",
            "URL-driven content destinations and filters"
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
          "title": "Keep the mobile architecture modular",
          "approach": "Used Riverpod for state management, shared API handling for client requests and reusable UI components for common interactions.",
          "result": "Clear responsibilities for application state, integrations, navigation and reusable interface elements."
        },
        {
          "title": "Make product navigation explicit",
          "approach": "Organised tab navigation with GoRouter and ShellRoute, using route parameters for content destinations, filters and campaign links.",
          "result": "A shared navigation structure across Feed, Advices, Home, Trades and Academy."
        },
        {
          "title": "Connect technical leadership to delivery",
          "approach": "Translated stakeholder needs into technical specifications and prioritised work, then led planning, allocation, mentoring and code reviews for four engineers.",
          "result": "A two-week delivery rhythm with hands-on mobile engineering throughout."
        },
        {
          "title": "Pair planned releases with urgent fixes",
          "approach": "Managed store submissions and versioning alongside CI/CD release workflows, with Shorebird patches for critical issues.",
          "result": "Regular store releases and a fast path for critical fixes without waiting for store review."
        }
      ],
      "support": {
        "description": "Built Rasabot, a Python-based support and sales bot, alongside mobile delivery and team leadership.",
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
        "note": "Historical résumé-reported outcomes; reporting periods and comparison baselines are not available."
      },
      "galleryCaptions": [
        "Broker-account connection and account controls, shown in existing Richie promotional artwork.",
        "Investment-plan discovery and product detail, shown in existing Richie promotional artwork.",
        "Advisory and subscription benefits, shown in existing Richie promotional artwork."
      ],
      "quality": {
        "practices": [
          {
            "title": "Clean, modular implementation",
            "detail": "Contributed to clean, modular architecture, separating shared API handling, routes, constants, loading utilities and reusable input/feedback widgets."
          },
          {
            "title": "State management and resource lifecycle",
            "detail": "Used Riverpod for mobile application state management. Shared API handling exposes explicit success/error outcomes, with timer, controller and focus-node cleanup for screen resources."
          },
          {
            "title": "Performance and memory diagnostics",
            "detail": "Performed time profiling and memory-leak analysis to identify and resolve performance bottlenecks. Production monitoring, debugging and rapid hotfixes supported ongoing stability."
          },
          {
            "title": "Code review and engineering guidance",
            "detail": "Led four engineers with mentoring, task allocation and code reviews while remaining hands-on in Flutter development. Requirements and technical specifications were connected to prioritised sprint work."
          }
        ],
        "testing": "Combined scenario validation, debugging, performance profiling and production monitoring with issue resolution and rapid hotfixes.",
        "cicd": "Used CI/CD pipelines for deployments and release management. Delivery combined a two-week store cadence, submission/versioning ownership and Shorebird patches for urgent fixes."
      },
      "leadership": [
        "Led and mentored four engineers through planning, task allocation and code reviews.",
        "Translated stakeholder requirements into technical specifications and prioritised delivery plans.",
        "Guided architecture decisions, production issue resolution and two-week releases."
      ],
      "mobileEngineering": [
        "Built Flutter features across advisory, trading, learning, social feeds and subscriptions.",
        "Used Riverpod for state management within a clean, modular mobile architecture.",
        "Owned API integrations, store submissions, versioning and production fixes."
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
      "Google Maps API",
      "Google Places API",
      "GPT-4",
      "Firebase"
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
    "outcome": "Delivered a Flutter city guide with location-based recommendations, personalized AI audio and scan-and-listen discovery.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android",
    "projectCaseStudy": {
      "title": "A mobile city guide built around AI-assisted discovery.",
      "brief": "Guidel combines location-based city recommendations with AI-generated audio about monuments and historical sites.",
      "challenge": "Connect maps, place discovery, image recognition and personalized audio in a Flutter city-guide experience.",
      "responsibilities": [
        {
          "title": "Mobile implementation",
          "items": [
            "Built location-based recommendations and integrated personalized AI audio.",
            "Developed scan-and-listen using image recognition and Google Places API."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Supported store-release delivery and production issue resolution."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Location-based recommendations",
          "detail": "Built real-time location-based recommendations using Google Maps API."
        },
        {
          "title": "Personalized AI audio",
          "detail": "Integrated GPT-4-powered personalized audio experiences for monuments and historical sites."
        },
        {
          "title": "Scan and listen",
          "detail": "Developed a scan-and-listen feature using image recognition and Google Places API."
        },
        {
          "title": "Mobile integration and release support",
          "detail": "Built the Flutter app, integrated backend services and supported release delivery and production issue resolution."
        }
      ],
      "system": [
        {
          "title": "Mobile experience",
          "items": [
            "Flutter / Dart",
            "Location-based recommendations",
            "AI audio and scan-and-listen"
          ]
        },
        {
          "title": "Supporting services",
          "items": [
            "Google Maps API and Google Places API",
            "GPT-4",
            "Firebase"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Multi-service integration",
          "detail": "Connected location, place information and AI audio services in the Flutter experience."
        },
        {
          "title": "Release stability",
          "detail": "Supported release delivery and production issue resolution."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "Store delivery",
          "detail": "Supported store-release delivery and production issue resolution."
        },
        {
          "title": "Product outcome",
          "detail": "Delivered a cross-platform AI-based city-guide experience."
        }
      ]
    }
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
    "platform": "Native iOS",
    "projectCaseStudy": {
      "title": "Native iOS delivery for salon appointment booking.",
      "brief": "ShiftBOOKD is a salon-booking app built with Swift and Storyboard-based native iOS interfaces.",
      "challenge": "Deliver native booking features, integrate the app with backend APIs and prepare the product for App Store submission.",
      "responsibilities": [
        {
          "title": "Mobile implementation",
          "items": [
            "Built native iOS booking features using Storyboards.",
            "Integrated APIs for the mobile application."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Handled feature development through App Store submission."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Native iOS salon booking",
          "detail": "Built native iOS booking features using Storyboards."
        },
        {
          "title": "Backend integration",
          "detail": "Backend API integration for the salon-booking application."
        },
        {
          "title": "Release support",
          "detail": "Handled feature development through App Store submission."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Swift / Storyboards",
            "Native iOS interfaces"
          ]
        },
        {
          "title": "Integration boundary",
          "items": [
            "REST API integration",
            "Connection to supporting backend services"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Integrated mobile delivery",
          "detail": "Integrated APIs for the mobile application."
        },
        {
          "title": "Release stability",
          "detail": "Handled feature development and App Store submission."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "App Store submission",
          "detail": "Handled feature development through App Store submission."
        },
        {
          "title": "Product outcome",
          "detail": "Delivered native iOS salon-booking functionality."
        }
      ]
    }
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
    "platform": "Native iOS",
    "projectCaseStudy": {
      "title": "A native iOS experience for health monitoring.",
      "brief": "Evexia is a health-monitoring application implemented with Swift and SwiftUI.",
      "challenge": "Build the native iOS experience, connect it to backend services and support testing, releases and ongoing maintenance.",
      "responsibilities": [
        {
          "title": "Mobile implementation",
          "items": [
            "Built the native iOS application using SwiftUI.",
            "Integrated backend APIs and supported testing, releases and maintenance."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Supported testing, release delivery and maintenance."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Native iOS health monitoring",
          "detail": "Built the native iOS application using SwiftUI."
        },
        {
          "title": "Backend integration",
          "detail": "REST API integration with the health-monitoring backend."
        },
        {
          "title": "Release support",
          "detail": "Supported testing, release delivery and maintenance."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Swift / SwiftUI",
            "Native iOS interfaces"
          ]
        },
        {
          "title": "Integration boundary",
          "items": [
            "REST API integration",
            "Connection to supporting backend services"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Integrated mobile delivery",
          "detail": "Integrated backend APIs and supported testing, releases and maintenance."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "Store delivery",
          "detail": "Supported testing, release delivery and maintenance."
        },
        {
          "title": "Product outcome",
          "detail": "Delivered the native iOS health-monitoring application."
        }
      ]
    }
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
    "platform": "Flutter · iOS & Android",
    "projectCaseStudy": {
      "title": "A cross-platform dating product for single parents.",
      "brief": "Sparks serves a specific audience: single parents looking for a dating experience.",
      "challenge": "Take the application from design handoff through mobile implementation, backend integration and store release.",
      "responsibilities": [
        {
          "title": "End-to-end application delivery",
          "items": [
            "Led application delivery from design handoff through store release.",
            "Integrated APIs and backend services for the mobile experience."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Owned delivery from design handoff to App Store and Google Play release.",
            "Supported production stability and release fixes."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Dating for single parents",
          "detail": "Led application delivery from design handoff through store release."
        },
        {
          "title": "Backend integration",
          "detail": "Mobile integration with backend services for the dating experience."
        },
        {
          "title": "Delivery ownership",
          "detail": "Owned delivery from design handoff to App Store and Google Play release."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Flutter / Dart",
            "Cross-platform iOS and Android delivery"
          ]
        },
        {
          "title": "Integration boundary",
          "items": [
            "REST API integration",
            "Connection to supporting backend services"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Integrated mobile delivery",
          "detail": "Integrated APIs and backend services for the mobile experience."
        },
        {
          "title": "Release stability",
          "detail": "Supported production stability and release delivery."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "Store delivery",
          "detail": "Owned delivery from design handoff to App Store and Google Play release."
        },
        {
          "title": "Product outcome",
          "detail": "Shipped a dating application focused on single parents."
        }
      ]
    }
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
      "Python",
      "Rasa",
      "GitHub Actions"
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
    "automationNote": "GitHub Actions CI/CD, pytest, ML snapshot tests, Rasa NLU tests and n8n automation are documented in the project experience.",
    "outcome": "Built a subscription-supported cricket analytics platform with 5,000+ registered users.",
    "architectureNote": "Implementation scope is documented above. A named architecture pattern or project-specific state-management choice has not been confirmed.",
    "platform": "Flutter · iOS & Android",
    "projectCaseStudy": {
      "title": "Owning a cricket analytics product from mobile to AI services.",
      "brief": "AiCrix connects mobile cricket analytics with prediction services, the Aira chatbot, subscriptions and advertising. I owned the mobile app and supporting services as a solo engineer.",
      "challenge": "Bring prediction data, chatbot access and paid subscriptions into one product while operating its backend, releases and production monitoring.",
      "responsibilities": [
        {
          "title": "Solo engineering ownership",
          "items": [
            "Owned mobile app delivery and supporting services from architecture to production support.",
            "Built FastAPI and Supabase services for predictions and chatbot access."
          ]
        },
        {
          "title": "Monetisation & operations",
          "items": [
            "Implemented RevenueCat subscriptions and server-side purchase verification.",
            "Integrated advertising and maintained CI checks, error monitoring and service-availability monitoring."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Mobile product and AI services",
          "detail": "Connected the mobile product to FastAPI and Supabase services. Built a 10-model ML pipeline spanning XGBoost, LightGBM and LSTM/Keras, with feature engineering, training, inference and monitoring."
        },
        {
          "title": "Subscriptions and purchase verification",
          "detail": "Implemented RevenueCat subscriptions with server-side purchase verification using the Google Play Developer API and Supabase Edge Functions."
        },
        {
          "title": "Advertising monetisation",
          "detail": "Integrated AdMob and Meta Audience Network mediation alongside the subscription offering."
        },
        {
          "title": "Production ownership",
          "detail": "Maintained GitHub Actions checks, tracked errors with Firebase Crashlytics and Sentry, and monitored service availability with StatusCake."
        },
        {
          "title": "Conversational AI",
          "detail": "Built Aira with Rasa NLU/Core, a custom action server, multi-turn dialogue and localization."
        }
      ],
      "system": [
        {
          "title": "Mobile client",
          "items": [
            "Flutter mobile app",
            "Prediction data and Aira chatbot access"
          ]
        },
        {
          "title": "Application services",
          "items": [
            "FastAPI / Python",
            "Supabase PostgreSQL, Row Level Security, pgvector and Edge Functions",
            "Rasa NLU/Core and a custom action server",
            "10-model ML ensemble"
          ]
        },
        {
          "title": "Monetisation",
          "items": [
            "RevenueCat subscriptions",
            "Google Play Developer API purchase verification",
            "AdMob and Meta Audience Network mediation"
          ]
        },
        {
          "title": "Operational tooling",
          "items": [
            "GitHub Actions CI/CD and n8n",
            "pytest, ML snapshot tests and Rasa NLU tests",
            "Firebase Crashlytics, Sentry and StatusCake"
          ]
        }
      ],
      "qualityTitle": "CI checks, reliability & purchase validation",
      "quality": [
        {
          "title": "Continuous integration and required checks",
          "detail": "Implemented GitHub Actions CI/CD with pytest, ML snapshot tests and Rasa NLU tests as required checks, alongside n8n automation."
        },
        {
          "title": "Production visibility",
          "detail": "Used Crashlytics and Sentry for error tracking and StatusCake for service-availability monitoring."
        },
        {
          "title": "Server-side purchase verification",
          "detail": "Implemented subscription verification using the Google Play Developer API and Supabase Edge Functions."
        },
        {
          "title": "End-to-end accountability",
          "detail": "Owned architecture, API integration, monetisation, releases and production support as the product’s solo engineer."
        },
        {
          "title": "Data access and service boundaries",
          "detail": "Worked with Supabase PostgreSQL schema, Row Level Security, pgvector and Edge Functions behind FastAPI services."
        }
      ],
      "deliveryTitle": "Shipping and operating a monetised product",
      "release": [
        {
          "title": "Mobile and service delivery",
          "detail": "Managed mobile and backend delivery with GitHub Actions CI/CD, required validation checks and production monitoring."
        },
        {
          "title": "Product reach",
          "detail": "The résumé reports 5,000+ registered users, 761 monthly active users and 1,000+ downloads in one month, alongside subscription revenue."
        }
      ]
    }
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
    "visualKind": "concept",
    "projectCaseStudy": {
      "title": "Building a rental marketplace across four product categories.",
      "brief": "Arentzo brings cars, bikes, electronics and furniture into a peer-to-peer rental marketplace with listings, authentication, payments and subscriptions.",
      "challenge": "Own mobile and backend delivery from requirements through launch preparation, while shaping the product around market research.",
      "responsibilities": [
        {
          "title": "Mobile & backend ownership",
          "items": [
            "Owned requirements-to-delivery implementation for the app and supporting backend.",
            "Built listings, authentication, payments and subscription flows."
          ]
        },
        {
          "title": "Launch preparation",
          "items": [
            "Prepared iOS and Android store submissions.",
            "Researched 25+ competitors and prepared ASO metadata and the pre-launch waitlist."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Four-category marketplace",
          "detail": "Built the mobile product around rentals for cars, bikes, electronics and furniture."
        },
        {
          "title": "Core app and backend flows",
          "detail": "Implemented listings, authentication, payments and subscriptions with Supabase integrations."
        },
        {
          "title": "Product research",
          "detail": "Analysed 25+ competing platforms to shape product requirements and launch preparation."
        },
        {
          "title": "Store readiness",
          "detail": "Owned App Store and Google Play submission preparation, ASO metadata and a pre-launch waitlist."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Rental listings across four categories",
            "Authentication, payments and subscriptions"
          ]
        },
        {
          "title": "Backend integration",
          "items": [
            "Supabase services",
            "Mobile-to-backend integration for core marketplace flows"
          ]
        }
      ],
      "qualityTitle": "Delivery ownership & launch readiness",
      "quality": [
        {
          "title": "Cross-stack implementation",
          "detail": "Owned mobile and backend work together, connecting the app’s core marketplace journeys to Supabase."
        },
        {
          "title": "Requirements-driven delivery",
          "detail": "Used competitor research to inform product requirements and prepared the product for iOS and Android submission."
        }
      ],
      "deliveryTitle": "Pre-launch preparation",
      "release": [
        {
          "title": "Preparing both stores",
          "detail": "Managed release preparation and submission work for iOS and Android."
        },
        {
          "title": "Launching with a defined scope",
          "detail": "Prepared ASO metadata and a pre-launch waitlist for the four-category marketplace. The project remains described as pre-launch."
        }
      ]
    }
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
    "visualKind": "concept",
    "projectCaseStudy": {
      "title": "Food delivery and a food-focused community in one app.",
      "brief": "OpenKitchen combines food delivery with food-focused social media in a cross-platform mobile product.",
      "challenge": "Carry two connected product experiences through design handoff, mobile development, backend integration and store release.",
      "responsibilities": [
        {
          "title": "End-to-end application delivery",
          "items": [
            "Led application delivery from design handoff through store release.",
            "Integrated APIs and backend services for food and community experiences."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Owned delivery from design handoff through App Store and Google Play release.",
            "Supported testing and release fixes."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Food delivery & food-focused social media",
          "detail": "Led application delivery from design handoff through store release."
        },
        {
          "title": "Backend integration",
          "detail": "Backend integration supporting food delivery and food-focused community experiences."
        },
        {
          "title": "Delivery ownership",
          "detail": "Owned delivery from design handoff through App Store and Google Play release."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Flutter / Dart",
            "Cross-platform iOS and Android delivery"
          ]
        },
        {
          "title": "Integration boundary",
          "items": [
            "REST API integration",
            "Connection to supporting backend services"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Integrated mobile delivery",
          "detail": "Integrated APIs and backend services for food and community experiences."
        },
        {
          "title": "Testing & maintenance",
          "detail": "Supported testing and release delivery across mobile platforms."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "Store delivery",
          "detail": "Owned delivery from design handoff through App Store and Google Play release."
        },
        {
          "title": "Product outcome",
          "detail": "Delivered food ordering and community experiences in one mobile product."
        }
      ]
    }
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
    "visualKind": "concept",
    "projectCaseStudy": {
      "title": "Taking a basketball-coaching app from design to release.",
      "brief": "SwissSense is a mobile basketball-coaching application delivered at AppKnit.",
      "challenge": "Own application delivery from design handoff through implementation, API integration and release on both mobile stores.",
      "responsibilities": [
        {
          "title": "End-to-end application delivery",
          "items": [
            "Led application delivery from design handoff through store release.",
            "Integrated mobile APIs and backend services."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Owned delivery from design handoff through App Store and Google Play release.",
            "Supported testing, production fixes and release delivery."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Basketball coaching",
          "detail": "Led application delivery from design handoff through store release."
        },
        {
          "title": "Backend integration",
          "detail": "Connected mobile coaching experiences to backend services."
        },
        {
          "title": "Delivery ownership",
          "detail": "Owned delivery from design handoff through App Store and Google Play release."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Flutter / Dart",
            "Cross-platform iOS and Android delivery"
          ]
        },
        {
          "title": "Integration boundary",
          "items": [
            "REST API integration",
            "Connection to supporting backend services"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Integrated mobile delivery",
          "detail": "Integrated mobile APIs and backend services."
        },
        {
          "title": "Testing & maintenance",
          "detail": "Supported testing, production fixes and release delivery."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "Store delivery",
          "detail": "Owned delivery from design handoff through App Store and Google Play release."
        },
        {
          "title": "Product outcome",
          "detail": "Shipped a basketball-coaching mobile application."
        }
      ]
    }
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
    "visualKind": "concept",
    "projectCaseStudy": {
      "title": "Native iOS delivery for event booking.",
      "brief": "Groupia is an event-booking application built with Swift and SwiftUI for native iOS.",
      "challenge": "Connect the event-booking interface to backend services and support the app through testing, release delivery and maintenance.",
      "responsibilities": [
        {
          "title": "Mobile implementation",
          "items": [
            "Built the native iOS application using SwiftUI.",
            "Integrated backend APIs and supported testing, releases and maintenance."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Supported testing, release delivery and maintenance."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Native iOS event booking",
          "detail": "Built the native iOS application using SwiftUI."
        },
        {
          "title": "Backend integration",
          "detail": "REST APIs connect the event-booking interface with backend services."
        },
        {
          "title": "Release support",
          "detail": "Supported testing, release delivery and maintenance."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Swift / SwiftUI",
            "Native iOS interfaces"
          ]
        },
        {
          "title": "Integration boundary",
          "items": [
            "REST API integration",
            "Connection to supporting backend services"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Integrated mobile delivery",
          "detail": "Integrated backend APIs and supported testing, releases and maintenance."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "Store delivery",
          "detail": "Supported testing, release delivery and maintenance."
        },
        {
          "title": "Product outcome",
          "detail": "Delivered native iOS event-booking experiences."
        }
      ]
    }
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
    "image": "/projects/dopoxy-learning-concept.webp",
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
    "platform": "Flutter · iOS & Android",
    "projectCaseStudy": {
      "title": "Cross-platform delivery for a learning application.",
      "brief": "This Dopoxy case study covers the learning-platform version I delivered at AppKnit.",
      "challenge": "Build the Flutter learning experience, integrate backend APIs and support release delivery and production issues.",
      "responsibilities": [
        {
          "title": "Mobile implementation",
          "items": [
            "Built and shipped the cross-platform learning application.",
            "Integrated APIs and backend services."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Supported store-release delivery and production issue resolution."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Learning platform · Delivered version",
          "detail": "Built and shipped the cross-platform learning application."
        },
        {
          "title": "Backend integration",
          "detail": "Flutter/Dart learning application connected to backend REST APIs."
        },
        {
          "title": "Release support",
          "detail": "Supported store-release delivery and production issue resolution."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Flutter / Dart",
            "Cross-platform iOS and Android delivery"
          ]
        },
        {
          "title": "Integration boundary",
          "items": [
            "REST API integration",
            "Connection to supporting backend services"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Integrated mobile delivery",
          "detail": "Integrated APIs and backend services."
        },
        {
          "title": "Release stability",
          "detail": "Supported release delivery and production issue resolution."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "Store delivery",
          "detail": "Supported store-release delivery and production issue resolution."
        },
        {
          "title": "Product outcome",
          "detail": "Delivered a cross-platform learning app; later product positioning is outside this case study."
        }
      ]
    },
    "visualKind": "concept"
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
    "image": "/projects/beatboxx-boxing-concept.webp",
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
    "platform": "Flutter · iOS & Android",
    "projectCaseStudy": {
      "title": "A cross-platform mobile product for boxing coaching.",
      "brief": "BEATBoXX is a mobile boxing-coaching application delivered within the AppKnit portfolio.",
      "challenge": "Implement the Flutter coaching application, connect backend services and support the product through release and maintenance.",
      "responsibilities": [
        {
          "title": "Mobile implementation",
          "items": [
            "Built and shipped the cross-platform coaching application.",
            "Integrated APIs and backend services."
          ]
        },
        {
          "title": "Release & production support",
          "items": [
            "Supported store-release delivery and production issue resolution."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Boxing coaching",
          "detail": "Built and shipped the cross-platform coaching application."
        },
        {
          "title": "Backend integration",
          "detail": "Flutter/Dart application with REST API and backend-service integration."
        },
        {
          "title": "Release support",
          "detail": "Supported store-release delivery and production issue resolution."
        }
      ],
      "system": [
        {
          "title": "Mobile application",
          "items": [
            "Flutter / Dart",
            "Cross-platform iOS and Android delivery"
          ]
        },
        {
          "title": "Integration boundary",
          "items": [
            "REST API integration",
            "Connection to supporting backend services"
          ]
        }
      ],
      "qualityTitle": "Implementation quality & production support",
      "quality": [
        {
          "title": "Integrated mobile delivery",
          "detail": "Integrated APIs and backend services."
        },
        {
          "title": "Release stability",
          "detail": "Supported release delivery and production issue resolution."
        },
        {
          "title": "Engineering context at AppKnit",
          "detail": "My senior engineering work at AppKnit included code reviews, reusable mobile components, requirements and delivery estimates, and collaboration with design, backend and product teams."
        }
      ],
      "deliveryTitle": "From implementation to release",
      "release": [
        {
          "title": "Store delivery",
          "detail": "Supported store-release delivery and production issue resolution."
        },
        {
          "title": "Product outcome",
          "detail": "Delivered a mobile boxing-coaching application."
        }
      ]
    },
    "visualKind": "concept"
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
    "image": "/projects/iot-home-automation-concept.webp",
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
    "platform": "Flutter · iOS & Android",
    "projectCaseStudy": {
      "title": "Responsive Flutter foundations for home automation.",
      "brief": "During my UnoLabs internship, I contributed to an IoT home-automation application under senior developer guidance.",
      "challenge": "Build reusable cross-platform UI, integrate API data and handle loading, errors and layout issues across screen sizes.",
      "responsibilities": [
        {
          "title": "Flutter implementation",
          "items": [
            "Developed responsive screens and reusable UI components for Android and iOS.",
            "Integrated REST API data with loading states and error handling."
          ]
        },
        {
          "title": "Supervised engineering practice",
          "items": [
            "Assisted with debugging, UI tests and layout fixes.",
            "Worked with senior developers and incorporated implementation feedback."
          ]
        }
      ],
      "workstreams": [
        {
          "title": "Responsive UI",
          "detail": "Adapted home-automation screens to different device sizes using Flutter."
        },
        {
          "title": "Reusable components",
          "detail": "Implemented cross-platform UI components for consistent Android and iOS behaviour."
        },
        {
          "title": "API-driven screens",
          "detail": "Fetched and displayed backend data, including loading and error states."
        },
        {
          "title": "Debugging and UI testing",
          "detail": "Assisted with testing, debugging and layout fixes under senior developer guidance."
        }
      ],
      "system": [
        {
          "title": "Flutter UI",
          "items": [
            "Reusable cross-platform components",
            "Responsive Android and iOS layouts"
          ]
        },
        {
          "title": "Data handling",
          "items": [
            "REST API integration",
            "Explicit loading states",
            "Error handling"
          ]
        }
      ],
      "qualityTitle": "UI testing, debugging & responsive behaviour",
      "quality": [
        {
          "title": "Test and refine the interface",
          "detail": "Assisted with UI testing and corrected layout issues across device sizes."
        },
        {
          "title": "Build with feedback",
          "detail": "Collaborated with senior developers, incorporated feedback and maintained reusable components during the three-month internship."
        }
      ],
      "deliveryTitle": "Internship contribution",
      "release": [
        {
          "title": "Three months of supervised delivery",
          "detail": "Contributed from 15 September to 15 December 2021 as a Flutter Application Developer intern."
        },
        {
          "title": "Implementation outcome",
          "detail": "Built responsive home-automation screens, reusable components and API-driven UI with loading and error handling."
        }
      ]
    },
    "visualKind": "concept"
  }
];

export const projectDetails = Object.fromEntries(projects.map(project => [project.id, project]));

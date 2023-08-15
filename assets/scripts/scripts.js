const livemode = false;

 function mockRapidApiFetch(url, options) {
    const payload = {
        status: "OK",
        request_id: "7aeb35fd-adb5-41a1-b854-f231151ed26c",
        parameters: { query: "concerts in nashville", start: 0 },
        data: [
            {
                event_id: "/g/11kpdr0rf8",
                name: "Ryman VIP Tour",
                link: "https://www.soundwavesgo.com/events/nashville/turnpike-troubadours-with-pony-bradshaw-6742717",
                description:
                    "See the Turnpike Troubadours in Nashville for THREE shows! Tickets on Sale. The concerts are scheduled for August 10, 11, and 12, 2023. Guests, Pony Bradshaw (Aug …",
                start_time: "2023-08-10 20:00:00",
                end_time: "2023-08-13 01:59:59",
                is_virtual: false,
                thumbnail:
                    "https://images.discovery-prod.axs.com/2023/01/ryman-vip-tour_01-30-23_7_63d7fead42f92.jpg",
                ticket_links: [
                    {
                        source: "AXS.com",
                        link: "https://www.axs.com/events/484207/turnpike-troubadours-tickets",
                    },
                ],
                info_links: [
                    {
                        source: "SoundWaves at Gaylord Opryland Resort",
                        link: "https://www.soundwavesgo.com/events/nashville/turnpike-troubadours-with-pony-bradshaw-6742717",
                    },
                    {
                        source: "Nashville Theatre",
                        link: "https://www.nashville-theatre.com/theaters/rymanauditorium/turnpike-troubadours.php",
                    },
                    {
                        source: "Nashville.com",
                        link: "https://www.nashville.com/event/turnpike-troubadours-2023-tour-nashville-ryman-auditorium/",
                    },
                    {
                        source: "Do615",
                        link: "https://do615.com/events/2023/8/10/turnpike-troubadours-with-pony-bradshaw-8-10-and-lance-roark-8-11-tickets",
                    },
                    {
                        source: "Eventbrite",
                        link: "https://www.eventbrite.com/e/turnpike-troubadours-tickets-tickets-645747336667?aff=ebdssbdestsearch&from=791a1bd9275511ee9013fabc282ddd4a",
                    },
                ],
                venue: {
                    google_id: "0x886466593b49eb95:0x63007995492245ab",
                    name: "Ryman Auditorium",
                    phone_number: "+16158893060",
                    website:
                        "https://www.ryman.com/?utm_campaign=ryman&utm_medium=organicsearch&utm_source=googlemybusiness&utm_audience=tofu_googlemybusiness&utm_content=brandstory_google_my_business_website_link",
                    review_count: 14641,
                    rating: 4.8,
                    subtype: "live_music_venue",
                    subtypes: [
                        "live_music_venue",
                        "art",
                        "attraction",
                        "auditorium",
                        "business_related",
                        "business_service",
                        "concert_hall",
                        "culture",
                        "education_and_culture",
                        "entertainment",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "gift_shop",
                        "hall",
                        "museum",
                        "music",
                        "nightlife",
                        "novelty_store",
                        "performing_arts",
                        "performing_arts_theater",
                        "places_of_interest",
                        "public_api_establishment",
                        "shopping",
                        "store",
                        "tourism",
                        "tourist_attraction",
                        "travel",
                        "vacances",
                    ],
                    full_address:
                        "116 5th Avenue North, Nashville, TN 37219, United States",
                    latitude: 36.161247,
                    longitude: -86.77847,
                    street_number: "116",
                    street: "5th Avenue North",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/04041r",
                },
                tags: ["concert", "music", "show"],
                language: "en",
            },
            {
                event_id: "/g/11tstvd1wy",
                name: "Vance Joy",
                link: "https://nashvilledowntown.com/do/vance-joy-1",
                description:
                    "Aussie singer Vance Joy will perform live at Nashville's Ryman Auditorium on September 1 and September 2 at 8:00pm.",
                start_time: "2023-09-01 20:00:00",
                end_time: "2023-09-03 01:59:59",
                is_virtual: false,
                thumbnail:
                    "https://citysparkstorage.blob.core.windows.net/portalimages/portalimages/4c5de605-fb72-4f1a-a01d-fd9085b50023.large.png",
                ticket_links: [
                    {
                        source: "\n\u0004lusg",
                        link: "https://calendar.nashvillescene.com/cal/2881806",
                    },
                    {
                        source: "\n\u0007AXS.com",
                        link: "https://www.axs.com/nz/events/470016/vance-joy-tickets",
                    },
                ],
                info_links: [
                    {
                        source: "Nashville Downtown Partnership",
                        link: "https://nashvilledowntown.com/do/vance-joy-1",
                    },
                    {
                        source: "WKRN",
                        link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show/?start=2020-03-04#!/details/Dan-Sultan/11635809/2023-09-01T20",
                    },
                    {
                        source: "Nashville Scene Events",
                        link: "https://calendar.nashvillescene.com/cal/2881806",
                    },
                    {
                        source: "Bandsintown",
                        link: "https://www.bandsintown.com/e/104143865-vance-joy-at-ryman-auditorium",
                    },
                    {
                        source: "Nashville Theatre",
                        link: "https://www.nashville-theatre.com/theaters/rymanauditorium/vance-joy.php",
                    },
                ],
                venue: {
                    google_id: "0x886466593b49eb95:0x63007995492245ab",
                    name: "Ryman Auditorium",
                    phone_number: "+16158893060",
                    website:
                        "https://www.ryman.com/?utm_campaign=ryman&utm_medium=organicsearch&utm_source=googlemybusiness&utm_audience=tofu_googlemybusiness&utm_content=brandstory_google_my_business_website_link",
                    review_count: 14641,
                    rating: 4.8,
                    subtype: "live_music_venue",
                    subtypes: [
                        "live_music_venue",
                        "art",
                        "attraction",
                        "auditorium",
                        "business_related",
                        "business_service",
                        "concert_hall",
                        "culture",
                        "education_and_culture",
                        "entertainment",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "gift_shop",
                        "hall",
                        "museum",
                        "music",
                        "nightlife",
                        "novelty_store",
                        "performing_arts",
                        "performing_arts_theater",
                        "places_of_interest",
                        "public_api_establishment",
                        "shopping",
                        "store",
                        "tourism",
                        "tourist_attraction",
                        "travel",
                        "vacances",
                    ],
                    full_address:
                        "116 5th Avenue North, Nashville, TN 37219, United States",
                    latitude: 36.161247,
                    longitude: -86.77847,
                    street_number: "116",
                    street: "5th Avenue North",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/04041r",
                },
                tags: ["concert", "music", "show"],
                language: "en",
            },
            {
                event_id: "/g/11j_050vx8",
                name: "Nate Smith Country",
                link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show?start=2023-06-21#!/details/Thomas-Rhett-Home-Team-Tour-23/11109221/2023-09-29T19",
                description:
                    "Thomas Rhett will perform live at Bridgestone Arena on September 29 at 7:30PM.",
                start_time: "2023-09-29 19:00:00",
                end_time: "2023-09-30 23:00:00",
                is_virtual: false,
                thumbnail:
                    "https://citysparkstorage.blob.core.windows.net/portalimages/portalimages/YeE6GfUMM0u_OpC_fPDcuw.large.png",
                ticket_links: [
                    {
                        source: "\n\u0004lusg",
                        link: "https://calendar.nashvillescene.com/cal/2766361",
                    },
                    {
                        source: "\n\u0007AXS.com",
                        link: "https://www.axs.com/events/456064/thomas-rhett-tickets",
                    },
                    {
                        source: "\n\u0004evyy",
                        link: "https://do615.com/artists/cole-swindell",
                    },
                ],
                info_links: [
                    {
                        source: "WKRN",
                        link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show?start=2023-06-21#!/details/Thomas-Rhett-Home-Team-Tour-23/11109221/2023-09-29T19",
                    },
                    {
                        source: "Nashville Scene Events",
                        link: "https://calendar.nashvillescene.com/cal/2766361",
                    },
                    {
                        source: "Nashville Theatre",
                        link: "https://www.nashville-theatre.com/theaters/bridgestone-arena/thomas-rhett-customer-reviews.php",
                    },
                    {
                        source: "Live Nation",
                        link: "https://www.livenation.com/event/G5viZ9p6EhMNL/thomas-rhett-home-team-tour-23",
                    },
                    {
                        source: "AARP Local",
                        link: "https://local.aarp.org/event/thomas-rhett-home-team-tour-23-2023-09-29-tm-nashville-tn.html",
                    },
                ],
                venue: {
                    google_id: "0x8864665ec38d6447:0xa900537ecd3f6612",
                    name: "Bridgestone Arena",
                    phone_number: "+16157702000",
                    website: "http://www.bridgestonearena.com/",
                    review_count: 14212,
                    rating: 4.7,
                    subtype: "arena",
                    subtypes: [
                        "arena",
                        "association_or_organization",
                        "athletic_field",
                        "athletics",
                        "club",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "hockey",
                        "hockey_club",
                        "hockey_rink",
                        "places_of_interest",
                        "potentially_sensitive_entity",
                        "public_api_establishment",
                        "recreation",
                        "sports",
                        "sports_activity_location",
                        "sports_club",
                        "sports_complex",
                        "stadium",
                    ],
                    full_address: "501 Broadway, Nashville, TN 37203, United States",
                    latitude: 36.159172,
                    longitude: -86.778496,
                    street_number: "501",
                    street: "Broadway",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/02z6zt",
                },
                tags: ["music", "show"],
                language: "en",
            },
            {
                event_id: "/g/11sjyndknw",
                name: "Guns N' Roses",
                link: "http://www.thefairgrounds.com/events/GunsNRoses.asp",
                description:
                    "Carrie Underwood | Saturday, 26 August 2023 | GEODIS Park",
                start_time: "2023-08-26 18:00:00",
                end_time: "2023-08-26 22:00:00",
                is_virtual: false,
                thumbnail:
                    "https://dynamicmedia.livenationinternational.com/Media/k/m/a/6a68dcda-0f7c-47a9-8bb6-3097a9ff31ec.jpg",
                ticket_links: [
                    {
                        source: "Live Nation",
                        link: "https://www.livenation.co.uk/artist-carrie-underwood-210599",
                    },
                    {
                        source: "Bandsintown",
                        link: "https://www.bandsintown.com/e/1027598458-guns-n'-roses-at-geodis-park",
                    },
                    {
                        source: "SuiteHop",
                        link: "https://suitehop.com/concerts/guns-n-roses/guns-n-roses-august-26-2023-600-pm/private-suite-357664",
                    },
                ],
                info_links: [
                    {
                        source: "The Fairgrounds Nashville",
                        link: "http://www.thefairgrounds.com/events/GunsNRoses.asp",
                    },
                    {
                        source: "SoundWaves at Gaylord Opryland Resort",
                        link: "https://www.soundwavesgo.com/events/nashville/guns-n-roses-with-carrie-underwood-6822848",
                    },
                    {
                        source: "WSMV",
                        link: "https://www.wsmv.com/2023/05/31/guns-n-roses-adds-carrie-underwood-nashville-show-geodis-park/",
                    },
                    {
                        source: "WVLT",
                        link: "https://www.wvlt.tv/2023/05/31/guns-n-roses-adds-carrie-underwood-nashville-show-geodis-park/",
                    },
                    {
                        source: "WKRN",
                        link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show/?start=2023-07-23#!/details/Guns-N-Roses/11624231/2023-08-26T18",
                    },
                ],
                venue: {
                    google_id: "0x88646597c0ab718d:0x32dd703449e1ccee",
                    name: "Geodis Park",
                    phone_number: "+16157012500",
                    website: "https://www.nashvillesc.com/stadium/",
                    review_count: 741,
                    rating: 4.5,
                    subtype: "stadium",
                    subtypes: [
                        "stadium",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "places_of_interest",
                        "public_api_establishment",
                        "recreation",
                        "sports",
                        "sports_activity_location",
                        "sports_complex",
                    ],
                    full_address: "501 Benton Avenue, Nashville, TN, United States",
                    latitude: 36.1302,
                    longitude: -86.76557,
                    street_number: "501",
                    street: "Benton Avenue",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/g/11rbfr9lxy",
                },
                tags: ["concert", "music", "rock", "show"],
                language: "en",
            },
            {
                event_id: "/g/11kj2b7g0n",
                name: "Vince Gill",
                link: "https://www.axs.com/nz/events/478162/amy-grant-vince-gill-christmas-at-the-ryman-tickets",
                description:
                    "Gametime is offering last-minute concert tickets to Amy Grant at Ryman Auditorium in Nashville, TN",
                start_time: "2023-12-22 15:00:00",
                end_time: "2023-12-22 19:00:00",
                is_virtual: false,
                thumbnail:
                    "https://images.discovery-prod.axs.com/2023/03/uploadedimage-jpg_641fca1e85841.jpg",
                ticket_links: [
                    {
                        source: "AXS.com",
                        link: "https://www.axs.com/events/478162/amy-grant-vince-gill-christmas-at-the-ryman-tickets",
                    },
                ],
                info_links: [
                    {
                        source: "Bandsintown",
                        link: "https://www.bandsintown.com/e/104275337-vince-gill-at-ryman-auditorium",
                    },
                    {
                        source: "Nashville Theatre",
                        link: "https://www.nashville-theatre.com/theaters/rymanauditorium/tickets.php?eventName=Vince+Gill&cmsEventId=02399&buy=true&history=seating&utc=1703273400&vsShowId=4358704&floorImg=https%3A%2F%2Fd2o50i5c2dr30a.cloudfront.net%2F71a6cf9d-eaff-4acd-aea8-b5785cbbff33.jpg&xyz=y",
                    },
                    {
                        source: "AARP Local",
                        link: "https://local.aarp.org/event/amy-grant-and-vince-gill-2023-12-22-jb-nashville-tn.html",
                    },
                    {
                        source: "SeatGeek",
                        link: "https://seatgeek.com/amy-grant-tickets/nashville-tennessee-ryman-auditorium-2023-12-22-3-pm/concert/6006468",
                    },
                    {
                        source: "Do615",
                        link: "https://do615.com/events/2023/12/22/amy-grant-vince-gill-christmas-at-the-ryman-tickets",
                    },
                ],
                venue: {
                    google_id: "0x886466593b49eb95:0x63007995492245ab",
                    name: "Ryman Auditorium",
                    phone_number: "+16158893060",
                    website:
                        "https://www.ryman.com/?utm_campaign=ryman&utm_medium=organicsearch&utm_source=googlemybusiness&utm_audience=tofu_googlemybusiness&utm_content=brandstory_google_my_business_website_link",
                    review_count: 14641,
                    rating: 4.8,
                    subtype: "live_music_venue",
                    subtypes: [
                        "live_music_venue",
                        "art",
                        "attraction",
                        "auditorium",
                        "business_related",
                        "business_service",
                        "concert_hall",
                        "culture",
                        "education_and_culture",
                        "entertainment",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "gift_shop",
                        "hall",
                        "museum",
                        "music",
                        "nightlife",
                        "novelty_store",
                        "performing_arts",
                        "performing_arts_theater",
                        "places_of_interest",
                        "public_api_establishment",
                        "shopping",
                        "store",
                        "tourism",
                        "tourist_attraction",
                        "travel",
                        "vacances",
                    ],
                    full_address:
                        "116 5th Avenue North, Nashville, TN 37219, United States",
                    latitude: 36.161247,
                    longitude: -86.77847,
                    street_number: "116",
                    street: "5th Avenue North",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/04041r",
                },
                tags: ["concert", "music", "show"],
                language: "en",
            },
            {
                event_id: "/g/11kjg8xj3k",
                name: "Avenged Sevenfold: North American Tour with Falling In Reverse",
                link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show?start=2023-06-21#!/details/Avenged-Sevenfold-North-American-Tour-with-Falling-In-Reverse/11843016/2023-09-22T18",
                description: "All support acts are subject to change without notice.",
                start_time: "2023-09-22 18:30:00",
                end_time: "2023-09-22 22:30:00",
                is_virtual: false,
                thumbnail:
                    "https://citysparkstorage.blob.core.windows.net/portalimages/portalimages/773de138-3269-48d0-a752-94e4e9a11ffc.large.png",
                ticket_links: [
                    {
                        source: "\n\u0004lusg",
                        link: "https://calendar.nashvillescene.com/cal/2992554",
                    },
                    {
                        source: "Bandsintown",
                        link: "https://www.bandsintown.com/e/1028266546-avenged-sevenfold-at-bridgestone-arena",
                    },
                    {
                        source: "\n\bSeatGeek",
                        link: "https://seatgeek.com/avenged-sevenfold-tickets/nashville",
                    },
                    {
                        source: "Vivid Seats",
                        link: "https://www.vividseats.com/avenged-sevenfold-tickets-nashville-bridgestone-arena-9-22-2023--concerts-hard-rock/production/4379365",
                    },
                    {
                        source: "\n\fticketmaster",
                        link: "https://www.1029thebuzz.com/events/369237",
                    },
                ],
                info_links: [
                    {
                        source: "WKRN",
                        link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show?start=2023-06-21#!/details/Avenged-Sevenfold-North-American-Tour-with-Falling-In-Reverse/11843016/2023-09-22T18",
                    },
                    {
                        source: "Nashville Lifestyles",
                        link: "https://nashvillelifestyles.com/events/avenged-sevenfold-falling-reverse-life-dream...tour-2023/",
                    },
                    {
                        source: "Nashville Scene Events",
                        link: "https://calendar.nashvillescene.com/cal/2992554",
                    },
                    {
                        source: "Nashville Theatre",
                        link: "https://www.nashville-theatre.com/theaters/bridgestone-arena/avenged-sevenfold.php",
                    },
                    {
                        source: "Live Nation",
                        link: "https://www.livenation.com/event/G5viZ9IQ-2wgA/avenged-sevenfold-north-american-tour-with-falling-in-reverse",
                    },
                ],
                venue: {
                    google_id: "0x8864665ec38d6447:0xa900537ecd3f6612",
                    name: "Bridgestone Arena",
                    phone_number: "+16157702000",
                    website: "http://www.bridgestonearena.com/",
                    review_count: 14212,
                    rating: 4.7,
                    subtype: "arena",
                    subtypes: [
                        "arena",
                        "association_or_organization",
                        "athletic_field",
                        "athletics",
                        "club",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "hockey",
                        "hockey_club",
                        "hockey_rink",
                        "places_of_interest",
                        "potentially_sensitive_entity",
                        "public_api_establishment",
                        "recreation",
                        "sports",
                        "sports_activity_location",
                        "sports_club",
                        "sports_complex",
                        "stadium",
                    ],
                    full_address: "501 Broadway, Nashville, TN 37203, United States",
                    latitude: 36.159172,
                    longitude: -86.778496,
                    street_number: "501",
                    street: "Broadway",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/02z6zt",
                },
                tags: ["concert", "music", "rock", "show"],
                language: "en",
            },
            {
                event_id: "/g/11t_zbhh_7",
                name: "Vince Gill & Amy Grant",
                link: "https://www.axs.com/uk/events/478137/amy-grant-vince-gill-christmas-at-the-ryman-tickets",
                description:
                    "Buy Amy Grant Parking in Nashville passes from Vivid Seats for the concert on 12/16/2023 and shop with confidence thanks to our 100% Buyer Guarantee.",
                start_time: "2023-12-16 15:00:00",
                end_time: "2023-12-16 19:00:00",
                is_virtual: false,
                thumbnail:
                    "https://images.discovery-prod.axs.com/2023/03/uploadedimage-jpg_641fc84ebb684.jpg",
                ticket_links: [
                    {
                        source: "AXS.com",
                        link: "https://www.axs.com/events/477749/amy-grant-vince-gill-christmas-at-the-ryman-tickets",
                    },
                ],
                info_links: [
                    {
                        source: "Bandsintown",
                        link: "https://www.bandsintown.com/e/104296964-amy-grant-at-ryman-auditorium",
                    },
                    {
                        source: "Nashville Theatre",
                        link: "https://www.nashville-theatre.com/theaters/rymanauditorium/vince-gill-amy-grant-customer-reviews.php",
                    },
                    {
                        source: "AARP Local",
                        link: "https://local.aarp.org/event/amy-grant-w-vince-gill-2023-12-16-tm-nashville-tn.html",
                    },
                    {
                        source: "SeatGeek",
                        link: "https://seatgeek.com/amy-grant-tickets/nashville-tennessee-ryman-auditorium-2023-12-16-3-pm/concert/6006473",
                    },
                    {
                        source: "Vivid Seats",
                        link: "https://www.vividseats.com/amy-grant-tickets-nashville-ryman-auditorium-12-16-2023--concerts-pop/production/4358699",
                    },
                ],
                venue: {
                    google_id: "0x886466593b49eb95:0x63007995492245ab",
                    name: "Ryman Auditorium",
                    phone_number: "+16158893060",
                    website:
                        "https://www.ryman.com/?utm_campaign=ryman&utm_medium=organicsearch&utm_source=googlemybusiness&utm_audience=tofu_googlemybusiness&utm_content=brandstory_google_my_business_website_link",
                    review_count: 14641,
                    rating: 4.8,
                    subtype: "live_music_venue",
                    subtypes: [
                        "live_music_venue",
                        "art",
                        "attraction",
                        "auditorium",
                        "business_related",
                        "business_service",
                        "concert_hall",
                        "culture",
                        "education_and_culture",
                        "entertainment",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "gift_shop",
                        "hall",
                        "museum",
                        "music",
                        "nightlife",
                        "novelty_store",
                        "performing_arts",
                        "performing_arts_theater",
                        "places_of_interest",
                        "public_api_establishment",
                        "shopping",
                        "store",
                        "tourism",
                        "tourist_attraction",
                        "travel",
                        "vacances",
                    ],
                    full_address:
                        "116 5th Avenue North, Nashville, TN 37219, United States",
                    latitude: 36.161247,
                    longitude: -86.77847,
                    street_number: "116",
                    street: "5th Avenue North",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/04041r",
                },
                tags: ["concert", "music", "show"],
                language: "en",
            },
            {
                event_id: "/g/11v06dl749",
                name: "$UICIDEBOY$",
                link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show/?ser=First%2520Tennessee%2520Park#!/details/-uicideboy-present-Grey-Day-Tour-2023-with-Ghostemane-more/11991927/2023-09-19T18",
                description:
                    "Hip hop duo $uicideboy$ will be launching another version of their Grey Day Tour across America in 2023 to support their latest album 'Sing Me a Lullaby, My Sweet Temptation'. The new 40-city jaunt kicks off August 25th in Birmingham and stretche...",
                start_time: "2023-09-19 18:30:00",
                end_time: "2023-09-19 21:30:00",
                is_virtual: false,
                thumbnail:
                    "https://citysparkstorage.blob.core.windows.net/portalimages/portalimages/e4843cfb-7988-4606-9c63-8029d08ce321.large.JPG",
                ticket_links: [
                    {
                        source: "\n\u0004lusg",
                        link: "https://calendar.nashvillescene.com/cal/3043890",
                    },
                    {
                        source: "\n\u0007AXS.com",
                        link: "https://www.axs.com/events/485675/uicideboy-tickets",
                    },
                ],
                info_links: [
                    {
                        source: "WKRN",
                        link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show/?ser=First%2520Tennessee%2520Park#!/details/-uicideboy-present-Grey-Day-Tour-2023-with-Ghostemane-more/11991927/2023-09-19T18",
                    },
                    {
                        source: "Nashville Lifestyles",
                        link: "https://nashvillelifestyles.com/events/suicideboys-ghostemane-city-morgue-grey-day-tour-0/",
                    },
                    {
                        source: "Nashville Scene Events",
                        link: "https://calendar.nashvillescene.com/cal/3043890",
                    },
                    {
                        source: "Bandsintown",
                        link: "https://www.bandsintown.com/e/104442639-dollaruicideboydollar-at-bridgestone-arena",
                    },
                    {
                        source: "Live Nation",
                        link: "https://www.livenation.com/event/G5viZ9nnmPgkL/uicideboy-present-grey-day-tour-2023-with-ghostemane-more",
                    },
                ],
                venue: {
                    google_id: "0x8864665ec38d6447:0xa900537ecd3f6612",
                    name: "Bridgestone Arena",
                    phone_number: "+16157702000",
                    website: "http://www.bridgestonearena.com/",
                    review_count: 14212,
                    rating: 4.7,
                    subtype: "arena",
                    subtypes: [
                        "arena",
                        "association_or_organization",
                        "athletic_field",
                        "athletics",
                        "club",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "hockey",
                        "hockey_club",
                        "hockey_rink",
                        "places_of_interest",
                        "potentially_sensitive_entity",
                        "public_api_establishment",
                        "recreation",
                        "sports",
                        "sports_activity_location",
                        "sports_club",
                        "sports_complex",
                        "stadium",
                    ],
                    full_address: "501 Broadway, Nashville, TN 37203, United States",
                    latitude: 36.159172,
                    longitude: -86.778496,
                    street_number: "501",
                    street: "Broadway",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/02z6zt",
                },
                tags: ["concert", "music", "show"],
                language: "en",
            },
            {
                event_id: "/g/11v0c8nzyn",
                name: "Kristin Chenoweth",
                link: "https://www.bandsintown.com/t/1028517199?came_from=209",
                description:
                    "Buy Kristin Chenoweth in Nashville tickets from Vivid Seats for the concert on 01/21/2024 and shop with confidence thanks to our 100% Buyer Guarantee.",
                start_time: "2024-01-21 14:00:00",
                end_time: "2024-01-21 17:00:00",
                is_virtual: false,
                ticket_links: [
                    {
                        source: "Bandsintown",
                        link: "https://www.bandsintown.com/e/104438636-kristin-chenoweth-at-schermerhorn-symphony-center",
                    },
                    {
                        source: "Vivid Seats",
                        link: "https://www.vividseats.com/kristin-chenoweth-tickets-nashville-schermerhorn-symphony-center-1-21-2024--concerts-adult-contemporary/production/4425346",
                    },
                    {
                        source: "prf",
                        link: "https://www.jambase.com/show/kristin-chenoweth-schermerhorn-symphony-center-20240121",
                    },
                    {
                        source: "linksynergy",
                        link: "https://www.jambase.com/show/kristin-chenoweth-schermerhorn-symphony-center-20240121",
                    },
                ],
                info_links: [
                    {
                        source: "SeatGeek",
                        link: "https://seatgeek.com/kristin-chenoweth-tickets/nashville-tennessee-schermerhorn-symphony-center-2024-01-21-2-pm/concert/6082014",
                    },
                    {
                        source: "Shazam",
                        link: "https://www.shazam.com/event/73d653de-8231-4a9a-ac88-245fa5c14e1e",
                    },
                    {
                        source: "Artelize",
                        link: "https://artelize.com/artist/6190_id_Kristin_Chenoweth",
                    },
                    {
                        source: "RateYourSeats.com",
                        link: "https://www.rateyourseats.com/mobile/tickets/events/kristin-chenoweth-january-21-2024-4425346",
                    },
                    {
                        source: "JamBase",
                        link: "https://www.jambase.com/show/kristin-chenoweth-schermerhorn-symphony-center-20240121",
                    },
                ],
                venue: {
                    google_id: "0x8864665c734e4075:0x3840832e3053989a",
                    name: "Nashville Symphony Schermerhorn Symphony Center",
                    phone_number: "+16156876400",
                    website: "http://www.nashvillesymphony.org/",
                    review_count: 3005,
                    rating: 4.9,
                    subtype: "concert_hall",
                    subtypes: [
                        "concert_hall",
                        "art",
                        "attraction",
                        "auditorium",
                        "ceremonial_occasions",
                        "culture",
                        "education_and_culture",
                        "entertainment",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "hall",
                        "live_music_venue",
                        "music",
                        "nightlife",
                        "performing_arts",
                        "personal_services",
                        "places_of_interest",
                        "public_api_establishment",
                        "services",
                        "tourism",
                        "tourist_attraction",
                        "travel",
                        "vacances",
                        "wedding_service",
                        "wedding_venue",
                        "weddings",
                    ],
                    full_address: "1 Symphony Place, Nashville, TN 37201, United States",
                    latitude: 36.159935,
                    longitude: -86.77596,
                    street_number: "1",
                    street: "Symphony Place",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/052pr2",
                },
                tags: ["concert", "music", "show"],
                language: "en",
            },
            {
                event_id: "/g/11shvlqwlc",
                name: "Rob Zombie and Alice Cooper: Freaks on Parade 2023 Tour",
                link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show?start=2023-06-21#!/details/Rob-Zombie-and-Alice-Cooper-Freaks-on-Parade-2023-Tour/11874011/2023-09-12T18",
                description:
                    "Shock rock supremes Rob Zombie and Alice Cooper will perform live at Nashville's Bridgestone Arena on September 12 at 6:00PM. Tickets are on sale NOW - Use special code 327RK20 to get %20 off!",
                start_time: "2023-09-12 18:00:00",
                end_time: "2023-09-12 22:00:00",
                is_virtual: false,
                thumbnail:
                    "https://citysparkstorage.blob.core.windows.net/portalimages/portalimages/SbRkpmLQlU6B4y2F1e6OYQ.large.jpg",
                ticket_links: [
                    {
                        source: "\n\u0004lusg",
                        link: "https://calendar.nashvillescene.com/cal/2866548",
                    },
                    {
                        source: "Bandsintown",
                        link: "https://www.bandsintown.com/e/104080020-rob-zombie-at-bridgestone-arena",
                    },
                ],
                info_links: [
                    {
                        source: "WKRN",
                        link: "https://www.wkrn.com/community-calendar1/?_escaped_fragment_=/show?start=2023-06-21#!/details/Rob-Zombie-and-Alice-Cooper-Freaks-on-Parade-2023-Tour/11874011/2023-09-12T18",
                    },
                    {
                        source: "Nashville Lifestyles",
                        link: "https://nashvillelifestyles.com/events/rob-zombie-alice-cooper-freaks-parade-tour/",
                    },
                    {
                        source: "Nashville Scene Events",
                        link: "https://calendar.nashvillescene.com/cal/2866548",
                    },
                    {
                        source: "SuiteHop",
                        link: "https://suitehop.com/venues/bridgestone-arena-suites/rob-zombie-and-alice-cooper-september-12-2023-600-pm",
                    },
                    {
                        source: "Nashville Theatre",
                        link: "https://www.nashville-theatre.com/theaters/bridgestone-arena/rob-zombie-and-alice-cooper.php",
                    },
                ],
                venue: {
                    google_id: "0x8864665ec38d6447:0xa900537ecd3f6612",
                    name: "Bridgestone Arena",
                    phone_number: "+16157702000",
                    website: "http://www.bridgestonearena.com/",
                    review_count: 14212,
                    rating: 4.7,
                    subtype: "arena",
                    subtypes: [
                        "arena",
                        "association_or_organization",
                        "athletic_field",
                        "athletics",
                        "club",
                        "entertainment_and_recreation",
                        "establishment",
                        "establishment_poi",
                        "event_venue",
                        "feature",
                        "hockey",
                        "hockey_club",
                        "hockey_rink",
                        "places_of_interest",
                        "potentially_sensitive_entity",
                        "public_api_establishment",
                        "recreation",
                        "sports",
                        "sports_activity_location",
                        "sports_club",
                        "sports_complex",
                        "stadium",
                    ],
                    full_address: "501 Broadway, Nashville, TN 37203, United States",
                    latitude: 36.159172,
                    longitude: -86.778496,
                    street_number: "501",
                    street: "Broadway",
                    city: "Nashville",
                    state: "Tennessee",
                    country: "US",
                    timezone: "America/Chicago",
                    google_mid: "/m/02z6zt",
                },
                tags: ["concert", "music", "rock", "show"],
                language: "en",
            },
        ],
    };

    return {
        json: () => payload,
    };
}

// ...
const apiKey = "FxPVrp5JjGn7rG5QR2c3H3qhNClz0Tkp";
const listEl = document.querySelector("#events ul");
const favoritesListEl = document.querySelector("#favorites");
// const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=concert`;
const api2URL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=${apiKey}`;

const url =
    "https://real-time-events-search.p.rapidapi.com/search-events?query=Concerts%20in%20Nashville&start=0";
const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "9bd041fa6bmshcc6f6801efb512fp1bc8e9jsn33f8d2b24803",
        "X-RapidAPI-Host": "real-time-events-search.p.rapidapi.com",
    },
};

const options2 = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "133fbda330msh8b862db29762994p175fdejsn0b19badc8128",
        "X-RapidAPI-Host": "real-time-events-search.p.rapidapi.com",
    },
};

const phillipOptions = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "3c83379acbmsh638dd9f350b4a3ep1bb596jsnba8a4b9f73d6",
        "X-RapidAPI-Host": "real-time-events-search.p.rapidapi.com",
    },
};

const events = [];

Promise.all([
    fetch(api2URL),
    livemode
        ? fetch(url, phillipOptions)
        : mockRapidApiFetch(url, phillipOptions),
])
    .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
    )
    .then((dataArray) => {
        console.log(dataArray)
        
        const ticketmasterData = dataArray[0];
        const rapidAPIData = dataArray[1];
        testSort(ticketmasterData._embedded.events, rapidAPIData.data)
        // Process Ticketmaster API data
        let ticketmasterEvents = ticketmasterData._embedded.events;
        for (let i = 0; i < ticketmasterEvents.length; i++) {
            // createEventElement(ticketmasterEvents[i]);
            events.push(ticketmasterEvents[i]);
        }

        // Process RapidAPI data
        if (rapidAPIData) {
            let rapidAPIEvents = rapidAPIData.data;
            for (let i = 0; i < rapidAPIEvents.length; i++) {
                // createRapidAPIEventElement(rapidAPIEvents[i]);
                events.push(rapidAPIEvents[i]);
                
            }
        }
        
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// Function to create Ticketmaster Event elements
function createEventElement(event) {
    let eventName = document.createElement("h3");
    eventName.textContent = event.name;
    let liEl = document.createElement("li");
    liEl.setAttribute("event-id", event.id);
    let name = document.createElement("p");
    name.textContent = event.name;
    let dateEl = document.createElement("p");
    let date = new Date(event.dates.start.dateTime);
    dateEl.textContent = date.toLocaleString();
    let venue = document.createElement("p");
    venue.textContent = event._embedded.venues[0].name;
    let imageEl = document.createElement("p");
    let image = document.createElement("img");
    image.src = event.images[0].url;
    let btn = document.createElement("button");
    btn.className = "buy-button waves-effect waves-yellow btn";
    btn.textContent = "Buy Tickets";
    btn.onclick = function () {
        window.location.assign(event.url);
    };

    // Add To Favorites Button for Ticketmaster
    let btnAddToFavorites = document.createElement('button');
    btnAddToFavorites.textContent = 'Add to Favorites';
    btnAddToFavorites.className = 'fav-btn waves-effect waves-yellow btn';

    const favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];
    for (let i = 0; i < favoritesArray.length; i++) {
        if (event.id === favoritesArray[i].id) {
            isButtonClicked = true;
            btnAddToFavorites.disabled = true; // 
            btnAddToFavorites.textContent = 'Added to Favorites';
        };
    };

    btnAddToFavorites.onclick = function () {
        var foundFavorites = false;
        console.log(event);
        const favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];
        for (let i = 0; i < favoritesArray.length; i++) {
            if (event.id === favoritesArray[i].id) {
                foundFavorites = true;
            };
        };

        if (!foundFavorites) {
            favoritesArray.push(event);
            localStorage.setItem('favorites', JSON.stringify(favoritesArray));
            renderFavorites();
        }

        isButtonClicked = true;
        btnAddToFavorites.disabled = true;
        btnAddToFavorites.textContent = 'Added to Favorites';
    } // End Favorites

    let anchor = document.createElement('a');
    anchor.id = `event-${event.id}`;
    anchor.appendChild(eventName);

    liEl.append(anchor, eventName, dateEl, venue, image, btn, btnAddToFavorites);
    listEl.append(liEl);
} // End TicketMaster API

// Function to create RapidAPI event elements
function createRapidAPIEventElement(event) {
  let liEl = document.createElement("li");
  liEl.className = "event-item";
  liEl.setAttribute("event-id", event.id);
  let anchor = document.createElement('a');
  anchor.id = `event-${event.id}`; 
  anchor.className = 'event-anchor';
  let eventName = document.createElement("h3");
  eventName.textContent = event.name;
  let dateEl = document.createElement("p");
  let date = new Date(event.start_time);
  dateEl.textContent = date.toLocaleString();
  let venue = document.createElement("p");
  venue.textContent = event.venue.name;
  let image = document.createElement("img");
  image.className = "event-image";
  image.src = event.thumbnail ?? "";
  let btn = document.createElement("button");
  btn.className = "buy-button waves-effect waves-yellow btn";
  btn.textContent = "Buy Tickets";
  btn.onclick = function () {
    window.location.assign(event.ticket_links[0].link);
  };

  // Add To Favorites Button for Rapid API
  let btnAddToFavorites = document.createElement('button');
  btnAddToFavorites.textContent = 'Add to Favorites';
  btnAddToFavorites.className = 'fav-btn waves-effect waves-yellow btn';

    liEl.append(anchor, eventName, dateEl, venue, image, btn, btnAddToFavorites);
    listEl.append(liEl);
} // End RapidAPI

// Scrolling to Event Function
function scrollToEvent(eventId) {
    const eventListItem = document.querySelector(`#events ul li[event-id="${eventId}"]`);
    if (eventListItem) {
        eventListItem.scrollIntoView({ behavior: 'smooth' });
    }
}

//Render Favorites Function
function renderFavorites() {
    const favoritesListEl = document.getElementById('favorites-list');
    const eventsListEl = document.getElementById('events-list');

    favoritesListEl.innerHTML = '';

    const favoritesArray = JSON.parse(localStorage.getItem('favorites')) || [];
    for (let i = 0; i < favoritesArray.length; i++) {
        let link = document.createElement('a');
        link.href = `#event-${favoritesArray[i].id}`;
        link.textContent = favoritesArray[i].name;

        let liEl = document.createElement('li');
        liEl.appendChild(link);
        favoritesListEl.appendChild(liEl);
    }

}

window.addEventListener('load', renderFavorites);

function testSort(dataArray, dataArray2) {
    console.log("sortStarted")
    // var testArray = [{ dates: { start: { dateTime: "2023-09-22T23:30:00Z" } } }, { start_time: "2023-09-12 18:00:00" }]
    var testArray = dataArray.concat(dataArray2)
    testArray.sort(function (object1, object2) {
        const date1 = object1.start_time || object1.dates.start.dateTime
        const date2 = object2.start_time || object2.dates.start.dateTime
        return new Date(date1) - new Date(date2)
    })
    console.log(testArray)
    generateEvents(testArray)
}
 function generateEvents(eventArray) {
    for (let i = 0; i < eventArray.length; i++) {
    if(eventArray[i].start_time){
        createRapidAPIEventElement(eventArray[i])

    } else{
        createEventElement(eventArray[i])
    }
        
    }
 }
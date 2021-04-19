var config = {
    style: 'mapbox://styles/branigan/cjzsvonse027m1co4nkxp13b3',
    accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    showMarkers: false,
    theme: 'light',
    title: 'CEMS: Critical Events Monitoring System',
    subtitle: 'See how we report and respond to critical events',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            alignment: 'right',
            title: 'Community Reporting(?)',
            image: 'images/image8.png',
            description: 'Community members act as data sources and harvesters and report the conflict incident via SMS or two-way radio.',
            location: {
                center: [115.13080, 13.97790],
                zoom: 6.83,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        },

        {
            id: 'bike-lanes',
            alignment: 'left',
            title: 'Title 2',
            image: 'images/image7.png',
            description: 'Given their local knowledge, community members, law enforcers, and traditional and religious leaders often provide immediate response to quickly avoid further escalation. This multifaceted assembly also ensures a well-rounded and inclusive response.',
            location: {
                center: [-75.13901, 39.97085],
                zoom: 11.62,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [
                {
                    layer: 'phl-bike-network',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            alignment: 'right',
            title: 'Title 3',
            image: 'images/image10.jpg',
            description: 'Key personnel verify the incidents and input the data to the CEMS encoding platform. They may also advise effective response to local authorities, traditional leaders, and religious leaders depending on the nature of the conflict.',
            location: {
                center: [-75.16468, 39.94503],
                zoom: 13.15,
                pitch: 60.00,
                bearing: -16.80
            },
            onChapterEnter: [
                {
                    layer: 'indego-stations',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
        {
            id: 'belmont',
            alignment: 'left',
            title: 'Title 3',
            image: 'images/image2.png',
            description: 'Monitoring and responding to critical events that may lead to conflict strings are tackled with much consideration and urgency to prevent further escalation.',
            location: {
                center: [-75.20325, 39.99574],
                zoom: 14.99,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [
                {
                    layer: 'belmont',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'belmont',
                    opacity: 0
                }
            ]
        },
        {
            id: 'wiss',
            alignment: 'right',
            title: 'Title 3',
            image: 'images/image4.jpg',
            description: 'The verified incident report is then analyzed and processed by International Alert and the Early Response Network’s core team.',
            location: {
                center: [-75.21223, 40.05028],
                zoom: 13.08,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [
                {
                    layer: 'wissahickon',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'wissahickon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack',
            alignment: 'left',
            title: 'Title 3',
            image: 'images/image3.png',
            description: 'The data gathered from this are recorded and goes through a strict encoding process while ensuring interoperability with other tools.',
            location: {
                center: [-75.05685, 40.06839],
                zoom: 13.73,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [
                {
                    layer: 'pennypack',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pennypack',
                    opacity: 0
                }
            ]
        },
        {
            id: 'pennypack2',
            alignment: 'right',
            title: 'Title 3',
            image: 'images/image5.jpg',
            description: 'All data collected from the CEMS could work with other platforms and used for long-term conflict and risk planning and development led by external stakeholders.',
           location: {
                center: [-75.13080, 39.97790],
                zoom: 9.83,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'phl-city-limits',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'phl-city-limits',
                    opacity: 0
                }
            ]
        }
    ]
};

import React, { Component } from 'react';  
/*Contexts data for ModelContext*/   
export const SocialContext = [
                                {
                                    collapseId: 'collapse1',
                                    attributeName: 'Fellow passengers',
                                    attributeDescr: 'For instance, a big group of elementary school pupils traveling in the same bus may make the whole trip a chaotic experience. This relates to the “unspoken rules” of bus travel, such as making space for fellow passengers or having travel cards ready when entering the bus, speaking too loudly, using inappropriate language, or littering the bus. Some participants were annoyed with families with small kids. However, most participants were understanding regarding children with bad temper',
                                    attributeQuote: 'The pool of fellow passengers is always different [and] you usually don’t even pay attention to them. However, at worst they can ruin the whole trip.',
                                    relatedPersonas: [
                                        {
                                            personaName:'Edward Enjoyer',
                                            personaLink:'/toolkit/personas/edward',
                                        },
                                        {
                                            personaName:'Isac isolation',
                                            personaLink:'/toolkit/personas/isac',
                                        }
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'General',
                                            sensorLink:"/sensordata",

                                        },
                                        {
                                            sensorName:'Position and location',
                                            sensorLink:"/sensordata",
                                        }
                                    ],                                    
                                }, 
                                {
                                    collapseId: 'collapse2',
                                    attributeName: 'Disruptive behaviour',
                                    attributeDescr: 'Suspicious people may cause feelings of insecurity. Even though passengers usually feel very safe in the bus, there are times when they feel insecure due to some ill-mannered people. Situations with disruptive behaviour are rare, but very distinctive and unforgettable. Such people, and even a suspicion of that may ruin the trip.',
                                    attributeQuote: 'On my way home from work, there was a guy sitting behind me and he seemed a bit too troubled. It felt really uncomfortable, and thus I was on the alert the whole trip.',
                                    relatedPersonas: [
                                        {
                                            personaName:'Edward Enjoyer',
                                            personaLink:'/toolkit/personas/edward',
                                        },
                                        {
                                            personaName:'Isac isolation',
                                            personaLink:'/toolkit/personas/isac',
                                        },
                                        {
                                            personaName:'Rachel Relaxed',
                                            personaLink:'/toolkit/personas/rachel',
                                        }
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'General',
                                            sensorLink:"/sensordata",

                                        },
                                        {
                                            sensorName:'Position and location',
                                            sensorLink:"/sensordata",
                                        }
                                    ],  
                                }, 
                                {
                                    collapseId: 'collapse3',
                                    attributeName: 'Social encounters with unfamiliar people',
                                    attributeDescr: 'It may cause varying effects. Encounters with very talkative people made some participants feel uneasy. Participants who were travelling with kids had experienced situations where other passengers had given nasty comments regarding the kids, for instance when the child was crying. However, some participants told that they tend to socialize with the fellow passengers.',
                                    attributeQuote: 'I prefer talking to other people, since I don’t use mobile devices in the bus.',
                                    relatedPersonas: [
                                        {
                                            personaName:'Edward Enjoyer',
                                            personaLink:'/toolkit/personas/edward',
                                        },
                                        {
                                            personaName:'Isac isolation',
                                            personaLink:'/toolkit/personas/isac',
                                        }
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'General',
                                            sensorLink:"/sensordata",

                                        },
                                        {
                                            sensorName:'Position and location',
                                            sensorLink:"/sensordata",
                                        }
                                    ],  
                                },
                                {
                                    collapseId: 'collapse4',
                                    attributeName: 'Bus driver',
                                    attributeDescr: 'His or her willingness to serve and help, as well as greet the passengers are part of a good travel experience. All participants agreed that it is important to get a greeting from the driver when entering the bus. Hovewer sometimes this is not the case (1). \n\nThe participants also stated that it would be nice to get direction or help from the driver in situations where you are unsure where to go, or when to get off.The driver has an important role of making the bus feel safe. Several participants brought up that it often seems that the driver is not focusing on the events happening inside the bus (2). ',
                                    attributeQuote:'"(1) Overly excited drivers annoy me especially in the morning. It’s the time when I’m the least positive." \n\n (2) "It would be good if the drivers wouldn’t allow disruptive behaviour at all, and would kick out the badly behaving people faster"',
                                    relatedPersonas: [
                                        {
                                            personaName:'Olivia Off-line',
                                            personaLink:'/toolkit/personas/olivia',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'General',
                                            sensorLink:"/sensordata",
                                        },
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        }
                                    ],  
                                }
];
export const PhysicalContext = [
                                {
                                    collapseId: 'collapse1',
                                    attributeName: 'Air quality',
                                    attributeDescr: 'Crucial factor considering a pleasant travel experience. Poor indoor air is often the result of faults in the aircondition. Especially old buses tend to smell, whereas the newmodels are smell-free. The smell of fumes and diesel are absentfrom the electric buses, making them more pleasant vehicles to ridewith. Fellow passengers can also cause strong smells, due topersonal hygiene or use of perfumes. Indoor temperature can be challenging to control, making the bus an unpleasant environmentat times. ',
                                    attributeQuote: '-No quotes-',
                                    relatedPersonas: [
                                        {
                                            personaName:'Olivia Off-line',
                                            personaLink:'/toolkit/personas/olivia',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle status',
                                            sensorLink:"/sensordata",
                                        }
                                    ],  
                                }, 
                                {
                                    collapseId: 'collapse2',
                                    attributeName: 'Cleanliness of the interior',
                                    attributeDescr: 'It is not only the matter of visual appearance but also a hygiene factor such as temporary mess. The new buses are cleaner, less smelly and they feel more hygienic.',
                                    attributeQuote: 'I’ve seen vomit in a bus many times and still the bus has been in traffic normally',
                                    relatedPersonas: [
                                        {
                                            personaName:'Olivia Off-line',
                                            personaLink:'/toolkit/personas/olivia',
                                        }
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle status',
                                            sensorLink:"/sensordata",
                                        },
                                    ],  
                                },  
                                {
                                    collapseId: 'collapse3',
                                    attributeName: 'Soundscape of the bus',
                                    attributeDescr: 'Combination of the noise causedby the vehicle and the fellow passengers. The sound of the motorwas perceived different in the new electric buses and the older buses. The electric bus is silent, which is considered pleasing whether you are inside or outside the vehicle. The alert and warning sounds – for example the sound of the stop button differ in different bus models. In some buses, there is no sound at all, making it challenging for the passenger to know whether their signal is registered. On the other hand, silent bus ride brings out the other sounds. Since the electric buses are silent, other sounds and noises are easier to hear and spot, which has its downsides.',
                                    attributeQuote: 'Now you can hear what other people are talking in the bus',
                                    relatedPersonas: [
                                        {
                                            personaName:'Olivia Off-line',
                                            personaLink:'/toolkit/personas/olivia',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle status',
                                            sensorLink:"/sensordata",
                                        },
                                    ],  
                                }, 
                                {
                                    collapseId: 'collapse4',
                                    attributeName: 'The state and model of the vehicle',
                                    attributeDescr: 'This part affects several things. Smoothness of the ride is better in the electric bus, providing a more relaxing experience. (1) The layout of the seats differs in different models and brands. In the buses of Tampere, the usual layout is that all seats are facing front, expect the one row in the quartets. However, in the new electric buses the layout is different: half ofthe seats are rear facing. This feature was disliked.(2)',
                                    attributeQuote: '(1) If you have ridden an old bus earlier that dayand then you take the electric bus, it almost feels luxuriousexperience \n\n (2) It is awkwardwhen you have to stare each other the whole trip',
                                    relatedPersonas: [
                                        {
                                            personaName:'Olivia Off-line',
                                            personaLink:'/toolkit/personas/olivia',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle status',
                                            sensorLink:"/sensordata",
                                        },
                                    ],  
                                }, 
];
export const TaskContext = [
                                {
                                    collapseId: 'collapse1',
                                    attributeName: 'Actions and routines',
                                    attributeDescr: 'They make traveling easy and relaxing. Bus as afamiliar action context made the traveling activities easy, relaxing and carefree. For some, bus journeys were considered personal quality time. (1) \n\n For the participants traveling with kids, bus was sometimesconsidered a more convenient choice. (2) \n\n Familiarity of the route affects the travel experience and theactivities during the trip. It is easier to relax during familiar routes,whereas when traveling on unknown bus lines one must be moreaware of the surrounding environment and observe the bus routewith the help of journey planner applications. Hence, the unfamiliarroutes are often more stressful and allow people to focus on and doless activities.Selecting seats. Some participants stated that they prefer certainseats in the bus, for instance a seat from the front or facing the frontto avoid getting nauseous. The reason could also be socially motivated. (3) \n\n The best option for many was to get to sit alone, without anyone sitting nextto them. Many people also have regular seats. For one participanttraveling with kids, it was important to get to sit in the quartet (two seat rows facing each other) so that they could all sit together.  (4)',
                                    attributeQuote: '(1)It takes half an hour for me to get to work and during that time I’ve learned to "reset" myself completely \n\n (2) With a double stroller, it iseasier to take the bus. Otherwise you have to first fold the stroller,then pack it into the car with all the other stuff and then – once youhave reached your destination, unpack everything \n\n (3) I never sit on the rear facing seats, because I don’twant to stare inside the bus full of people \n\n (4) We often take the bus 33, because there’s always seats. In that bus,there’s always the same people and I think they have started to savethe quartet for us, since they know that we are three kids and me.It’s always free when we enter the bus',
                                    relatedPersonas: [
                                        {
                                            personaName:'Rachel Relaxed',
                                            personaLink:'/toolkit/personas/rachel',
                                        },
                                        {
                                            personaName:'Emma Efficient',
                                            personaLink:'/toolkit/personas/emma',
                                        }
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        },
                                    ],  
                                }, 
                                {
                                    collapseId: 'collapse2',
                                    attributeName: 'Peak hours and traffic jams',
                                    attributeDescr: 'They impact the choice of the bus line. Some participants stated that during the peak hours they choose less crowded bus lines. For some people, the crowded buses were unpleasant and stressful experiences. Many also stated that they try to avoid travelingat all during the busiest time of the day because they dislikecrowded buses.  ',
                                    attributeQuote: 'I become anxious in acrowded bus. I might start panicking if the crowd blocks my wayout',
                                    relatedPersonas: [
                                        {
                                            personaName:'Rachel Relaxed',
                                            personaLink:'/toolkit/personas/rachel',
                                        },
                                        {
                                            personaName:'Emma Efficient',
                                            personaLink:'/toolkit/personas/emma',
                                        }
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        },
                                    ],  
                                }, 
                                {
                                    collapseId: 'collapse3',
                                    attributeName: 'Driver’s actions',
                                    attributeDescr: 'Specifically, the driving style is important to theexperience and the possibility to conduct tasks in the bus. The newelectric buses were smooth and in the hands of skilful driver verypleasant experiences. The electric buses also include screensshowcasing the energy flow based on the driver’s actions. Several participants had noticed this screen and gotten genuinely interested in the technology. \n\n Driver’s attentive actions have a great impact on the way peoplefeel about buses. One participant traveling with a stroller told howsome drivers seem to ignore the signals for stopping the bus. The participants also shared situations where the doors hadbeen closed before they had exited or entered the bus, causing veryunpleasant situations.',
                                    attributeQuote: 'Istarted to wonder if I’m not pushing the button correctly',
                                    relatedPersonas: [
                                        {
                                            personaName:'Rachel Relaxed',
                                            personaLink:'/toolkit/personas/rachel',
                                        },
                                        {
                                            personaName:'Emma Efficient',
                                            personaLink:'/toolkit/personas/emma',
                                        },
                                        {
                                            personaName:'Olivia Off-line',
                                            personaLink:'/toolkit/personas/olivia',
                                        }
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        },
                                    ],  
                                }, 
];
export const TemporalContext = [
                                {
                                    collapseId: 'collapse1',
                                    attributeName: 'Time of day',
                                    attributeDescr: 'It impacts the passenger’s mood, motivations and activities. According to the diaries, traveling to leisure activities was related to a more positive feeling also with the bus trip.',
                                    attributeQuote: 'I often use my phone when I travel to work in the mornings. I like to read and check the news before the day starts. This is not as important when I’m going home in the afternoon',
                                    relatedPersonas: [
                                        {
                                            personaName:'Emma Efficient',
                                            personaLink:'/toolkit/personas/emma',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        },
                                        {
                                            sensorName:'Position and location',
                                            sensorLink:"/sensordata",
                                        }
                                    ],  
                                },                                 
                                {
                                    collapseId: 'collapse2',
                                    attributeName: 'Length of the trip',
                                    attributeDescr: 'It impacts the nature and traveller’s activities. Short trips (less than 10 minutes) are more often spent on passive activities, such as listening to music or simply relaxing. Longer trips (more than 10 minutes) provide a setting for task that require focus and immersion such as reading books and emailing, but also sleeping.',
                                    attributeQuote: '-No quotes-',
                                    relatedPersonas: [
                                        {
                                            personaName:'Emma Efficient',
                                            personaLink:'/toolkit/personas/emma',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Position and location',
                                            sensorLink:"/sensordata",
                                        },
                                    ],  
                                }, 
];
export const Passenger = [
                                {
                                    collapseId: 'collapse1',
                                    attributeName: 'Ecological or green values',
                                    attributeDescr: 'They were considered important in public transportation. This value was highlighted especially when traveling by modern vehicles that run with electricity. Thus, the energy consumption of vehicles could be visualized and communicated to the passengers, even in real time. This could even result more people being aware of the environment. The same channel could also be used to promote other ways to green or ecofriendly lifestyle.',
                                    attributeQuote: '-No quotes-',
                                    relatedPersonas: [
                                        {
                                            personaName:'All archetypes',
                                            personaLink:'/toolkit/personas',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Any group',
                                            sensorLink:"/sensordata",
                                        }
                                    ]  
                                },                                 
                                {
                                    collapseId: 'collapse2',
                                    attributeName: 'Being affordable and saving money',
                                    attributeDescr: 'People value public transportation not only because of the green values, but also because it is an affordable option compared to private cars. Thus, the heavy users of public transport could be rewarded with better prices or for instance an online lottery based on the travel card usage. This could motivate people to use the services more and also create a “fun-factor” to the mundane everyday routine.',
                                    attributeQuote: '-No quotes-',
                                    relatedPersonas: [
                                        {
                                            personaName:'All archetypes',
                                            personaLink:'/toolkit/personas',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Any group',
                                            sensorLink:"/sensordata",
                                        }
                                    ]    
                                },                                  
                                {
                                    collapseId: 'collapse3',
                                    attributeName: 'Novel technology experiences',
                                    attributeDescr: 'They can satisfy curiosity and increase self-esteem of technology-savvy passengers. The transportation field is expected to change drastically within the following years. In the middle of the transition towards modern and more holistic mobility services, the modern buses – such as electric buses – should be utilized to communicate the technological shift that enables better travel experiences. This could be supported for instance, by presenting new types of displays and interaction techniques in the bus, such as playful gesture-based interactions',
                                    attributeQuote: '-No quotes-',
                                    relatedPersonas: [
                                        {
                                            personaName:'All archetypes',
                                            personaLink:'/toolkit/personas',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Any group',
                                            sensorLink:"/sensordata",
                                        }
                                    ]    
                                }, 
];
export const DigitalServices = [
                                {
                                    collapseId: 'collapse1',
                                    attributeName: 'Journey planners',
                                    attributeDescr: 'Even when traveling on familiar routes, several participants mentioned using journey planners to follow the route, schedule and location of connecting buses. As expected, people also used journey planners to plan their daily schedules related to bus travel.',
                                    attributeQuote: 'I have the journey planner open when I’m in the bus. I like to follow the map and see where the blue dot (the bus) is, how many stops there is before my destination, and so on',
                                    relatedPersonas: [
                                        {
                                            personaName:'All archetypes',
                                            personaLink:'/toolkit/personas',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Any group',
                                            sensorLink:"/sensordata",
                                        }
                                    ]  
                                },                                 
                                {
                                    collapseId: 'collapse2',
                                    attributeName: 'Entertainment applications',
                                    attributeDescr: 'Listening to music or other audio content such as podcasts or e-books when traveling by bus is common. Reading newspapers, magazines or other content is another area of digital consumption.',
                                    attributeQuote: 'When I travel alone, I often check the news and social media. It’s my private time when I can focus and immerse myself with the content of the articles',
                                    relatedPersonas: [
                                        {
                                            personaName:'All archetypes',
                                            personaLink:'/toolkit/personas',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Any group',
                                            sensorLink:"/sensordata",
                                        }
                                    ]    
                                },                                  
                                {
                                    collapseId: 'collapse3',
                                    attributeName: 'Social media and messaging',
                                    attributeDescr: 'Checking emails and other messages was very common during the bus journeys (1). The traveling activities vary a lot whether traveling alone or with a companion – like with kids (2).',
                                    attributeQuote: '(1) I tend to check the email in the bus. It’s a perfect 15-minute slot for such small tasks \n\n (2) If I don’t have the stroller and kids to worry about, I spend the whole journey with my phone: email, Facebook, basically anything. I’m so immersed that I sometimes even might forget to press the stop-button',
                                    relatedPersonas: [
                                        {
                                            personaName:'All archetypes',
                                            personaLink:'/toolkit/personas',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Any group',
                                            sensorLink:"/sensordata",
                                        }
                                    ]    
                                },                                  
                                {
                                    collapseId: 'collapse4',
                                    attributeName: 'Other digital tasks',
                                    attributeDescr: 'Most of the participants stated that they utilise the travel time to “get things done”, whether checking emails or planning the grocery shopping for the week. Other digital activities to fill the idle time include activities, such as making shopping lists or book keeping, and studying languages.',
                                    attributeQuote: '-No quotes-',                                    
                                    relatedPersonas: [
                                        {
                                            personaName:'All archetypes',
                                            personaLink:'/toolkit/personas',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Any group',
                                            sensorLink:"/sensordata",
                                        }
                                    ]    
                                },                                  
                                {
                                    collapseId: 'collapse5',
                                    attributeName: 'Non users',
                                    attributeDescr: 'Those who do not use mobile devices at all or use them rarely when traveling. For some, the reasons were social. Another motivation is to have screen-free time, for example if work is heavily digital. Thus, these passengers rely more on the selection of on-board digital services showcased on the public screens',
                                    attributeQuote: 'I like to see the people and the scenery. I rather interact with the fellow passengers than with my mobile device',                  
                                    relatedPersonas: [
                                        {
                                            personaName:'Olivia  Off-line',
                                            personaLink:'/toolkit/olivia',
                                        },
                                    ],
                                    relatedSensors: [
                                        {
                                            sensorName:'Any group',
                                            sensorLink:"/sensordata",
                                        }
                                    ]    
                                }, 
];



export const SocialContextNav = [
    
                                {
                                    prevContext: 'Public Transportation',
                                    prevContextLink: '/toolkit/model/publictransportation',
                                    nextContext: 'Task Context',
                                    nextContextLink: '/toolkit/model/task',
                                }
    
];
export const PhysicalContextNav = [
    
                                {
                                    prevContext: 'Temporal Context',
                                    prevContextLink: '/toolkit/model/temporal',
                                    nextContext: 'Digital Services',
                                    nextContextLink: '/toolkit/model/digitalservices',
                                }
    
];
export const TaskContextNav = [
    
                                {
                                    prevContext: 'Social Context',
                                    prevContextLink: '/toolkit/model/social',
                                    nextContext: 'Temporal Context',
                                    nextContextLink: '/toolkit/model/temporal',
                                }
    
];
export const TemporaryContextNav = [
    
                                {
                                    prevContext: 'Task Context',
                                    prevContextLink: '/toolkit/model/task',
                                    nextContext: 'Physical Context',
                                    nextContextLink: '/toolkit/model/physical',
                                }
    
];
export const DigitalNav = [
    
                                {
                                    prevContext: 'Physical Context',
                                    prevContextLink: '/toolkit/model/physical',
                                    nextContext: 'Passenger',
                                    nextContextLink: '/toolkit/model/passenger',
                                }
    
];
export const PassengerNav = [
    
                                {
                                    prevContext: 'Digital Services',
                                    prevContextLink: '/toolkit/model/digitalservices',
                                    nextContext: 'Public Transportation',
                                    nextContextLink: '/toolkit/model/publictransportation',
                                }
    
];
export const TransportationNav = [
    
                                {
                                    prevContext: 'Passenger',
                                    prevContextLink: '/toolkit/model/passenger',
                                    nextContext: 'Social Context',
                                    nextContextLink: '/toolkit/model/social',
                                }
    
];
/*Personas data for Persona*/ 
export const EdwardEnjoyer = [
                                {
                                    avatarLink:'/img/personas/edward.png',
                                    bio: '68, pensioner',
                                    quote: 'Bus journeys are one of the essential parts of the everyday social activities. It’s nice to be surrounded with people and occasionally have conversations. Thebest trips are the ones shared with an old friend!',
                                    travels: 'Daily – shopping and leisure trips.',
                                    mobile: 'Occasionally – mostly text messages and calls. Might leave the phone also home.',
                                    needs: 'Getting a seat, being social – fellow passengers and driver, timetables andother relevant journey related info presented in the bus and bus stops.',
                                    
                                    relatedPapers: [
                                        {
                                            paperTitle:'User Needs and Expectations for Future Traveling Services in Buses (2016)',
                                            paperLink:'https://dl.acm.org/citation.cfm?id=2996733',
                                        },
                                    ],
                                    relatedCards: [
                                        {
                                            cardTitle:'Subtle opportunities for social interaction',
                                            cardLink:"/toolkit/contextcards",
                                        },
                                    ],  
                                    relatedContexts: [
                                        {
                                            contextTitle:'Social Context',
                                            contextLink:"/toolkit/model/social",
                                        },
                                        {
                                            contextTitle:'Passenger',
                                            contextLink:"/toolkit/model/passenger",
                                        },
                                        {
                                            contextTitle:'Digital Services',
                                            contextLink:"/toolkit/model/digitalservices",
                                        },
                                    ],  
                                    relatedSensors: [
                                        {
                                            sensorName:'General',
                                            sensorLink:"/sensordata",
                                        },
                                        {
                                            sensorName:'Position and location',
                                            sensorLink:"/sensordata",
                                        },
                                    ],
                                    
                                    prevPersona: 'Emma Efficient', 
                                    nextPersona: 'Olivia Off-line',   
                                    prevPersonaLink: '/toolkit/personas/emma', 
                                    nextPersonaLink: '/toolkit/personas/olivia'
                                }

];
export const OliviaOffline = [
                                {
                                    avatarLink:'/img/personas/olivia.png',
                                    bio: '50 years, office worker',
                                    quote: 'Bus journeys are free of mobile device usage. Enough time is spent staring at a screen at work, and besides, she’s not even wearing herreading glasses. Strong odors, heatand poor air quality irritate her.',
                                    travels: 'Daily – to work.',
                                    mobile: 'Doesn’t use mobile phone at all during bus trips.',
                                    needs: 'Air quality (temperature, odors), crowdedness, the service attitude of the driver, being on schedule, and choosing an environmentally friendly travel mode.',
                                    
                                    relatedPapers: [
                                        {
                                            paperTitle:'User Needs and Expectations for Future Traveling Services in Buses (2016)',
                                            paperLink:'https://dl.acm.org/citation.cfm?id=2996733',
                                        },
                                    ],
                                    relatedCards: [
                                        {
                                            cardTitle:'Making the ecological values visible',
                                            cardLink:"/toolkit/contextcards",
                                        },
                                        {
                                            cardTitle:'Getting to know the personality of the driver',
                                            cardLink:"/toolkit/contextcards",
                                        },
                                    ],  
                                    relatedContexts: [
                                        {
                                            contextTitle:'Social Context',
                                            contextLink:"/toolkit/model/social",
                                        },
                                        {
                                            contextTitle:'Physical Context',
                                            contextLink:"/toolkit/model/physical",
                                        },
                                        {
                                            contextTitle:'Task Context',
                                            contextLink:"/toolkit/model/task",
                                        },

                                        {
                                            contextTitle:'Passenger',
                                            contextLink:"/toolkit/model/passenger",
                                        },
                                        {
                                            contextTitle:'Digital Services',
                                            contextLink:"/toolkit/model/digitalservices",
                                        },
                                    ],  
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        },
                                    ], 
                                    
                                    prevPersona: 'Edward Enjoyer', 
                                    nextPersona: 'Rachel Relaxed',
                                    prevPersonaLink: '/toolkit/personas/edward', 
                                    nextPersonaLink: '/toolkit/personas/rachel'
                                }

];
export const RachelRelaxed = [
                                {
                                    avatarLink:'/img/personas/rachel.png',
                                    bio: '35 years, worker and mother of small kids',
                                    quote: 'Bus journeys are private quality time when I’m able to relax and have time for myself. I put my headphones on, press play and zone out. Of course this changes, when I have the kids with me.',
                                    travels: 'Daily – to work.',
                                    mobile: 'When traveling alone, uses mobile device for passive entertainment (music, audio books). When traveling with kids, mobile phone provides entertainment for the kids (games, videos). ',
                                    needs: 'Noise, getting a seat, being on time, disruptive behavior of fellow passengers',
                                    
                                    relatedPapers: [
                                        {
                                            paperTitle:'User Needs and Expectations for Future Traveling Services in Buses (2016)',
                                            paperLink:'https://dl.acm.org/citation.cfm?id=2996733',
                                        },
                                    ],
                                    relatedCards: [
                                        {
                                            cardTitle:'Atmosphere of relaxation',
                                            cardLink:"/toolkit/contextcards",
                                        },
                                        {
                                            cardTitle:'Entertaining activities',
                                            cardLink:"/toolkit/contextcards",
                                        },
                                    ],  
                                    relatedContexts: [
                                        {
                                            contextTitle:'Social Context',
                                            contextLink:"/toolkit/model/social",
                                        },
                                        {
                                            contextTitle:'Task Context',
                                            contextLink:"/toolkit/model/task",
                                        },

                                        {
                                            contextTitle:'Passenger',
                                            contextLink:"/toolkit/model/passenger",
                                        },
                                        {
                                            contextTitle:'Digital Services',
                                            contextLink:"/toolkit/model/digitalservices",
                                        },                                        
                                    ],  
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        },
                                    ], 
                                    
                                    prevPersona: 'Olivia Off-line', 
                                    nextPersona: 'Isac Isolation',
                                    prevPersonaLink: '/toolkit/personas/olivia', 
                                    nextPersonaLink: '/toolkit/personas/isac'
                                }

];
export const IsacIsolation = [
                                {
                                    avatarLink:'/img/personas/isac.png',
                                    bio: '23 years, student',
                                    quote: 'Hopes to be left alone when traveling. Isolates himself from the fellow passengers by immersing into the mobile phone. Social only via smartphone or when  traveling with friends.',
                                    travels: 'Everywhere, mainly to school',
                                    mobile: 'Constant – Uses mobile phone to communicate with friends, listen to music and for various types of entertainment.',
                                    needs: 'Fellow passengers – being left alone',
                                    
                                    relatedPapers: [
                                        {
                                            paperTitle:'User Needs and Expectations for Future Traveling Services in Buses (2016)',
                                            paperLink:'https://dl.acm.org/citation.cfm?id=2996733',
                                        },
                                    ],
                                    relatedCards: [
                                        {
                                            cardTitle:'Entertaining activities',
                                            cardLink:"/toolkit/contextcards",
                                        },
                                    ],  
                                    relatedContexts: [
                                        {
                                            contextTitle:'Social Context',
                                            contextLink:"/toolkit/model/social",
                                        },

                                        {
                                            contextTitle:'Passenger',
                                            contextLink:"/toolkit/model/passenger",
                                        },
                                        {
                                            contextTitle:'Digital Services',
                                            contextLink:"/toolkit/model/digitalservices",
                                        },                                        
                                    ],  
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        },
                                        {
                                            sensorName:'Speed',
                                            sensorLink:"/sensordata",
                                        },
                                    ], 
                                    
                                    prevPersona: 'Rachel Relaxed', 
                                    nextPersona: 'Emma Efficient',
                                    prevPersonaLink: '/toolkit/personas/rachel', 
                                    nextPersonaLink: '/toolkit/personas/emma'
                                }
];
export const EmmaEfficient = [
                                {
                                    avatarLink:'/img/personas/emma.png',
                                    bio: '29 years, student and entrepreneur',
                                    quote: 'Effective utilization of bus trips makes the otherwise extremely busy days easier. Suitable tasks to conduct in the bus are for example: reading and answering to e-mails, making shopping lists.',
                                    travels: 'All trips, mostly to university or to work',
                                    mobile: 'All the time! Digital tasks vary depending on the length of the journey.',
                                    needs: 'Noise, getting a seat, timetable - being on time, disruptive behavior of fellow passengers',
                                    
                                    relatedPapers: [
                                        {
                                            paperTitle:'User Needs and Expectations for Future Traveling Services in Buses (2016)',
                                            paperLink:'https://dl.acm.org/citation.cfm?id=2996733',
                                        },
                                    ],
                                    relatedCards: [
                                        {
                                            cardTitle:'Informative communication',
                                            cardLink:"/toolkit/contextcards",
                                        },
                                    ],  
                                    relatedContexts: [
                                        {
                                            contextTitle:'Temporal Context',
                                            contextLink:"/toolkit/model/temporal",
                                        },
                                        {
                                            contextTitle:'Task Context',
                                            contextLink:"/toolkit/model/task",
                                        },

                                        {
                                            contextTitle:'Passenger',
                                            contextLink:"/toolkit/model/passenger",
                                        },
                                        {
                                            contextTitle:'Digital Services',
                                            contextLink:"/toolkit/model/digitalservices",
                                        },                                        
                                    ],  
                                    relatedSensors: [
                                        {
                                            sensorName:'Vehicle Status',
                                            sensorLink:"/sensordata",
                                        },
                                        {
                                            sensorName:'Position and location',
                                            sensorLink:"/sensordata",
                                        },
                                        {
                                            sensorName:'Speed',
                                            sensorLink:"/sensordata",
                                        },
                                    ], 
                                    prevPersona: 'Isac Isolation', 
                                    nextPersona: 'Edward Enjoyer', 
                                    prevPersonaLink: '/toolkit/personas/isac', 
                                    nextPersonaLink: '/toolkit/personas/edward'
                                }
];
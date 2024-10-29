export default[    
    {
        name:"Customer Persona Generator",
        desc:'Build detailed customer personas to enhance your marketing strategies..',
        category:'Marketing',
        icon:'https://cdn-icons-png.flaticon.com/128/1661/1661662.png',
        aiPrompt:'Create a customer persona using the provided business details and target audience. Analyze key attributes such as demographics, interests, motivations, challenges, and purchasing behaviors. Include sections on basic info (name, age range, location), demographics, pain points, trigger points, preferred channels, communication style, and purchasing behavior. Summarize key insights and actionable points for effective engagement',
        slug:'customer-persona-generation',
        form:[
            {
                label:'Enter the business type',
                field:'input',
                name:'business_type',
                required:true,
                "keyword": "Business Context: Knowing the type of business helps tailor the persona to specific industry nuances."
            },
            {
                label:'Enter your target audience (age range, interests, profession)',
                field:'textarea',
                name:'target_audience',
                "required": true,
                "keyword": "Demographic Information: Understanding the target audience’s age range and interests helps define core characteristics and needs."
            },

        ]

    },
    {
        name:'Marketing Idea Generator',
        desc:'Get 10 actionable ideas to solve your marketing problems.Skip the overthinking ',
        category:'Marketing',
        icon:'https://cdn-icons-png.flaticon.com/128/3820/3820331.png',
        aiPrompt:'Generate ten actionable marketing ideas for given business description and  addressing given marketing problem. Include engaging titles, implementation details, objectives, expected impacts, and success measurement suggestions for each idea ',
        slug:'generate-marketing-idea',
        form:[
            {
                label:'Enter your business description',
                field:'textarea',
                name:'business_description',
                required:true
            },
            {
                label:'Describe your marketing problem',
                field:'textarea',
                name:'marketing_problem',
                

            },

        ]

    },
    
    {
        name:'Business Idea Generator',
        desc:'Get 10 unique ideas for your next profitable business. Ditch never-ending brainstorms. ',
        category:'Business',
        icon:'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        aiPrompt:`Generate a list of ten innovative business ideas  targeting given   Target Audience, considering given  the entrepreneur's personal interest in Personal Interest. Focus on actionable solutions that enhance customer experiences and improve operational efficiency, ensuring relevance to the target audience's needs.`,
        slug:'business-idea-generation',
        form:[
            {
                label:'Enter your target audience',
                field:'input',
                name:'target_audience',
                required:true
            },
            {
                "label": "Enter your personal interests",
                "field": "textarea",
                "name": "personal_interests",
                "required": true
            }
        ]
    },
    
    {
        name: "Business Idea Validator",
        desc: "Get honest feedback about your business idea. Build something people want.",
        category: "Business Tools",
        icon: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",  
        aiPrompt: "Provide constructive feedback in bullet points about the feasibility, potential challenges, and target audience alignment based on the provided business idea and target audience.",
        slug: "business-idea-validator",
        form: [
            {
                label: "Enter your business idea",
                field: "textarea",
                name: "business_idea",
                required: true
            },
            {
                label: "Describe your target audience",
                field: "textarea",
                name: "target_audience",
                required: true
            }
        ]
    },
    
    {
        name: "Value Proposition Generator",
        desc: "Sell the transformation from using your product. Double your conversion today.",
        category: "Business Tools",
        icon: "https://cdn-icons-png.flaticon.com/128/2920/2920322.png",  
        aiPrompt: "Generate a detailed value proposition that emphasizes the transformation your product offers. Start by clearly articulating the key benefits your product provides to the target audience, ensuring these benefits resonate with their specific needs and pain points. Highlight how your solution effectively challenges the status quo and stands out from competitors by showcasing unique features that attract users. Additionally, address the common barriers that your audience faces and explain how your product overcomes these challenges, creating a compelling case for why they should choose your solution over others. This should result in a persuasive narrative that not only captures attention but also drives conversions.",

        slug: "value-proposition-generator",
        form: [
            {
                label: "Enter your business description",
                field: "textarea",
                name: "business_description",
                required: true
            },
            {
                label: "Describe your target audience",
                field: "textarea",
                name: "target_audience",
                required: true
            }
        ]
    },
    
    
    {
        name: "Business Plan Generator",
        desc: "You are 10 marketing decisions away from being profitable. Get the right directions to grow faster.",
        category: "Business Tools",
        icon: "https://cdn-icons-png.flaticon.com/128/4203/4203333.png",
        aiPrompt: "Generate a detailed business plan for a business description and target  audience. Cover key aspects including the primary audience and their needs, the specific problem your product addresses, the value and benefits that make it attractive, what sets your product apart from competitors, the existing market behavior and how your product disrupts it, a comparison with alternatives emphasizing your product's advantages, strategies to introduce the product and generate excitement, a pricing strategy that is attractive and affordable, how to acquire the first 10 paying customers, and strategies for scaling the business by identifying promising growth channels.",
        slug: "business-plan-generator",
        form: [
            {
                label: "Enter your business description",
                field: "textarea",
                name: "business_description",
                required: true
            },
            {
                label: "Describe your target audience",
                field: "textarea",
                name: "target_audience",
                required: true
            }
        ]
    },
    
    {
        name: "Elevator Pitch Generator",
        desc: "Sell your product in 30 seconds effortlessly. Become a pro at storytelling.",
        category: "Business Tools",
        icon: "https://cdn-icons-png.flaticon.com/128/9458/9458260.png",
        aiPrompt: "Generate a detailed and engaging elevator pitch that begins with a compelling overview of the business's purpose and unique selling points. Clearly explain your commitment to addressing the specific problem your product solves, showcasing its main strengths and features. Highlight the urgency of the moment by emphasizing why now is the ideal time for your target audience to act. Finally, make your product stand out by articulating what sets it apart from competitors, ensuring the pitch is concise enough to be delivered in under 30 seconds while maintaining clarity and impact.",
        slug: "elevator-pitch-generator",
        form: [
            {
                label: "Enter your business name",
                field: "input",
                name: "business_name",
                required: true
            },
            {
                label: "Provide your business description",
                field: "textarea",
                name: "business_description",
                required: true
            },
            {
                label: "Describe your target audience",
                field: "textarea",
                name: "target_audience"
            }
        ]
    },
    
    {
        name: "Product Description Generator",
        desc: "Explain your product without marketing gibberish. Sell it effortlessly.",
        category: "Business Tools",
        icon: "https://cdn-icons-png.flaticon.com/128/2800/2800039.png",
        aiPrompt: "Create a detailed and engaging product description that begins with a concise summary of your product, aiming to capture attention in just 10 seconds. Then, showcase at least five key benefits of the product, clearly articulating how it enhances the user experience and solves their problems. Make your product stand out by highlighting its unique features and advantages over competitors. Finally, include a gentle nudge to encourage the audience to try your product, emphasizing the value they will gain from making the switch.",

        slug: "product-description-generator",
        form: [
            {
                label: "Enter your business name",
                field: "input",
                name: "business_name",
                required: true
            },
            {
                label: "Provide your business description",
                field: "textarea",
                name: "business_description",
                required: true
            },
            {
                label: "Describe your target audience",
                field: "textarea",
                name: "target_audience",
                required: true
            }
        ]
    },
    {
        name: "SWOT Analysis Generator",
        desc: "Understand your product strategy in 10 seconds. Get ahead of your competitors.",
        category: "Business Tools",
        icon: "https://cdn-icons-png.flaticon.com/128/3438/3438884.png",
        aiPrompt: "Generate a comprehensive SWOT analysis that evaluates the internal and external factors affecting the business based on the provided business type and target audience. For internal factors, assess how your product contributes to success by identifying the advantages that support your growth and the disadvantages that may sabotage your efforts. For external factors, analyze how the market impacts your journey by identifying trends that can accelerate your growth and challenges that may slow you down. Provide actionable insights on how to leverage positive trends while mitigating risks.",

        slug: "swot-analysis-generator",
        form: [
            {
                label: "Enter your business type",
                field: "input",
                name: "business_type",
                required: true
            },
            {
                label: "Describe your target audience",
                field: "textarea",
                name: "target_audience",
                required: true
            }
        ]
    },

   

]

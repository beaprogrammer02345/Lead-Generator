export default[
    {
        name:'Marketing Idea Generator',
        desc:'An AI tool that generates creative marketing ideas based on your business description and marketing challenges. ',
        category:'Marketing',
        icon:'https://cdn-icons-png.flaticon.com/128/3820/3820331.png',
        aiPrompt:'Give me 1 creative marketing ideas in bullet point format based on the provided business description and marketing problem, and display the results in Rich text editor format within 10 words. and give me two llead from any resource to this anything but real user should be ',
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
        name:"Customer Persona Generator",
        desc:'An AI tool that creates a customer persona based on minimal input information, helping businesses understand their target audience better.',
        category:'Marketing',
        icon:'https://cdn-icons-png.flaticon.com/128/1661/1661662.png',
        aiPrompt:'Build a persona by analyzing provided business details, including attributes such as demographics, interests, pain points, and purchasing behaviors.',
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
                label:'Enter your target audience (age range, interests)',
                field:'textarea',
                name:'target_audience',
                "required": true,
                "keyword": "Demographic Information: Understanding the target audience’s age range and interests helps define core characteristics and needs."
            },

        ]

    },
    
    {
        name:'Business Idea Generator',
        desc:'An AI tool that serves as your personal business idea creator, generating catchy and viable business concepts based on your target audience and personal interests.',
        category:'Business',
        icon:'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        aiPrompt:'Generate top 1 business ideas in bullet point format based on the provided target audience and personal interest within 10 words only',
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
        "name": "Business Idea Validator",
        "desc": "Get honest feedback about your business idea. Build something people want.",
        "category": "Business Tools",
        "icon": "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",  
        "aiPrompt": "Provide constructive feedback in bullet points about the feasibility, potential challenges, and target audience alignment based on the provided business idea and target audience.",
        "slug": "business-idea-validator",
        "form": [
            {
                "label": "Enter your business idea",
                "field": "textarea",
                "name": "business_idea",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "target_audience",
                "required": true
            }
        ]
    },
    
    {
        "name": "Value Proposition Generator",
        "desc": "Sell the transformation from using your product. Double your conversion today.",
        "category": "Business Tools",
        "icon": "https://cdn-icons-png.flaticon.com/128/2920/2920322.png",  
        "aiPrompt": "Generate a concise value proposition (in 4-5 sentences) highlighting the transformation, benefits, and target audience alignment based on the provided business description and target audience.",
        "slug": "value-proposition-generator",
        "form": [
            {
                "label": "Enter your business description",
                "field": "textarea",
                "name": "business_description",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "target_audience",
                "required": true
            }
        ]
    },
    
    
    {
        "name": "Business Plan Generator",
        "desc": "You are 10 marketing decisions away from being profitable. Get the right directions to grow faster.",
        "category": "Business Tools",
        "icon": "https://cdn-icons-png.flaticon.com/128/4203/4203333.png",
        "aiPrompt": "Generate a concise business plan outline in bullet points, covering key areas like value proposition, marketing strategy, revenue streams, and customer base, based on the provided business description and target audience.",
        "slug": "business-plan-generator",
        "form": [
            {
                "label": "Enter your business description",
                "field": "textarea",
                "name": "business_description",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "target_audience",
                "required": true
            }
        ]
    },
    
    {
        "name": "Elevator Pitch Generator",
        "desc": "Sell your product in 30 seconds effortlessly. Become a pro at storytelling.",
        "category": "Business Tools",
        "icon": "https://cdn-icons-png.flaticon.com/128/9458/9458260.png",
        "aiPrompt": "Generate a concise and engaging elevator pitch, summarizing the business's purpose, unique selling points, and value to the target audience in under 30 seconds.",
        "slug": "elevator-pitch-generator",
        "form": [
            {
                "label": "Enter your business name",
                "field": "input",
                "name": "business_name",
                "required": true
            },
            {
                "label": "Provide your business description",
                "field": "textarea",
                "name": "business_description",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "target_audience"
            }
        ]
    },
    
    {
        "name": "Product Description Generator",
        "desc": "Explain your product without marketing gibberish. Sell it effortlessly.",
        "category": "Business Tools",
        "icon": "https://cdn-icons-png.flaticon.com/128/2800/2800039.png",
        "aiPrompt": "Create a concise and compelling product description based on the provided business name, description, and target audience.",
        "slug": "product-description-generator",
        "form": [
            {
                "label": "Enter your business name",
                "field": "input",
                "name": "business_name",
                "required": true
            },
            {
                "label": "Provide your business description",
                "field": "textarea",
                "name": "business_description",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "target_audience",
                "required": true
            }
        ]
    },
    {
        "name": "SWOT Analysis Generator",
        "desc": "Understand your product strategy in 10 seconds. Get ahead of your competitors.",
        "category": "Business Tools",
        "icon": "https://cdn-icons-png.flaticon.com/128/3438/3438884.png",
        "aiPrompt": "Generate a comprehensive SWOT analysis based on the provided business type and target audience.",
        "slug": "swot-analysis-generator",
        "form": [
            {
                "label": "Enter your business type",
                "field": "input",
                "name": "business_type",
                "required": true
            },
            {
                "label": "Describe your target audience",
                "field": "textarea",
                "name": "target_audience",
                "required": true
            }
        ]
    },

   

]
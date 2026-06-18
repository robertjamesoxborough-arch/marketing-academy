// ==================== DATA: LEARNING PATHS ====================
const learningPaths = {
    seo: {
        id: 'seo',
        title: 'Search Engine Optimisation',
        icon: 'S',
        iconClass: 'path-icon-seo',
        description: 'Master how search engines work and how to get your content found organically. From keyword research to technical SEO.',
        level: 'Beginner → Advanced',
        lessons: 18,
        time: '~12 hours',
        tags: ['beginner', 'intermediate', 'advanced'],
        sources: ['Ahrefs Academy', 'Semrush Academy', 'Moz Academy', 'Google Search Central'],
        modules: [
            {
                title: 'How Search Engines Work',
                badge: 'Beginner',
                badgeClass: 'badge-beginner',
                projectTitle: 'SEO Foundation Audit',
                projectDescription: 'Apply what you have learnt in this module by conducting a baseline SEO audit of your own website, or any site you have access to. Check how many pages Google has indexed using a site: search, confirm Search Console is set up and showing data, identify the search intent behind your homepage, and document three keyword opportunities. Save your findings — you will build on this audit throughout the path.',
                lessons: [
                    { id: 'seo-1-1', title: 'What is SEO and Why It Matters', duration: '20 min', xp: 50 },
                    { id: 'seo-1-2', title: 'How Google Crawls, Indexes, and Ranks Pages', duration: '30 min', xp: 75 },
                    { id: 'seo-1-3', title: 'Understanding Search Intent', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Keyword Research',
                badge: 'Beginner',
                badgeClass: 'badge-beginner',
                projectTitle: 'Target Keyword List',
                projectDescription: 'Using the tools and methods from this module, build a keyword list of at least 20 target keywords for your site or a client site. For each keyword, record the estimated search volume, difficulty score, and intent type. Group them into topic clusters and highlight your top five priority keywords — the ones you will create or optimise content around first.',
                lessons: [
                    { id: 'seo-2-1', title: 'How to Find Keywords People Actually Search For', duration: '30 min', xp: 75 },
                    { id: 'seo-2-2', title: 'Keyword Difficulty and Search Volume', duration: '25 min', xp: 60 },
                    { id: 'seo-2-3', title: 'Long-Tail Keywords and Topic Clusters', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'On-Page SEO',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                projectTitle: 'On-Page SEO Audit and Rewrite',
                projectDescription: 'Pick three pages on your website and conduct a full on-page SEO audit of each. Rewrite the title tags, meta descriptions, and H1s using your target keywords. Check internal linking and image alt text. Document what you changed and why, and note which improvements you expect to have the most impact on rankings and click-through rate.',
                lessons: [
                    { id: 'seo-3-1', title: 'Title Tags, Meta Descriptions, and Headers', duration: '25 min', xp: 60 },
                    { id: 'seo-3-2', title: 'Content Optimisation for Search', duration: '35 min', xp: 80 },
                    { id: 'seo-3-3', title: 'Internal Linking Strategy', duration: '25 min', xp: 60 },
                    { id: 'seo-3-4', title: 'Image Optimisation and Alt Text', duration: '20 min', xp: 50 },
                ]
            },
            {
                title: 'Technical SEO',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                projectTitle: 'Technical SEO Fixes List',
                projectDescription: 'Run your site through Google PageSpeed Insights and the Mobile-Friendly Test. Check your robots.txt and sitemap.xml for issues. Audit for structured data opportunities. Produce a prioritised list of at least five technical issues you found, how you would fix each one, and an estimate of the SEO impact. Aim to actually fix at least two of them before moving to the next module.',
                lessons: [
                    { id: 'seo-4-1', title: 'Site Speed and Core Web Vitals', duration: '30 min', xp: 75 },
                    { id: 'seo-4-2', title: 'Mobile-First Indexing', duration: '20 min', xp: 50 },
                    { id: 'seo-4-3', title: 'Structured Data and Schema Markup', duration: '30 min', xp: 75 },
                    { id: 'seo-4-4', title: 'Crawl Budget and XML Sitemaps', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Link Building and Authority',
                badge: 'Advanced',
                badgeClass: 'badge-advanced',
                projectTitle: 'Link Building Outreach Plan',
                projectDescription: 'Research ten websites in your niche that would be realistic targets for a backlink. For each one, document the site URL, domain authority score, the type of content they link to, and your proposed outreach angle (guest post, resource page inclusion, digital PR, broken link replacement, etc.). Write one outreach email template you could send to at least five of these targets immediately.',
                lessons: [
                    { id: 'seo-5-1', title: 'How Backlinks Work and Why They Matter', duration: '25 min', xp: 60 },
                    { id: 'seo-5-2', title: 'Link Building Strategies That Actually Work', duration: '40 min', xp: 100 },
                    { id: 'seo-5-3', title: 'Digital PR and Content-Led Link Building', duration: '35 min', xp: 80 },
                    { id: 'seo-5-4', title: 'Measuring SEO Success', duration: '30 min', xp: 75 },
                ]
            }
        ]
    },
    'paid-search': {
        id: 'paid-search',
        title: 'Paid Search Advertising',
        icon: 'P',
        iconClass: 'path-icon-paid',
        description: 'Learn to run profitable Google Ads and Microsoft Ads campaigns. From account setup to advanced bidding strategies.',
        level: 'Beginner → Advanced',
        lessons: 16,
        time: '~10 hours',
        tags: ['beginner', 'intermediate', 'advanced'],
        sources: ['Google Skillshop', 'Microsoft Advertising Learning Lab', 'Semrush Academy'],
        modules: [
            {
                title: 'Paid Search Fundamentals',
                badge: 'Beginner',
                badgeClass: 'badge-beginner',
                lessons: [
                    { id: 'ps-1-1', title: 'How Paid Search Works (The Auction Model)', duration: '25 min', xp: 60 },
                    { id: 'ps-1-2', title: 'Account Structure: Campaigns, Ad Groups, Keywords', duration: '30 min', xp: 75 },
                    { id: 'ps-1-3', title: 'Match Types and Negative Keywords', duration: '25 min', xp: 60 },
                    { id: 'ps-1-4', title: 'Writing Effective Search Ads', duration: '30 min', xp: 75 },
                ]
            },
            {
                title: 'Campaign Management',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                lessons: [
                    { id: 'ps-2-1', title: 'Bidding Strategies Explained', duration: '30 min', xp: 75 },
                    { id: 'ps-2-2', title: 'Quality Score and Ad Rank', duration: '25 min', xp: 60 },
                    { id: 'ps-2-3', title: 'Conversion Tracking and Goals', duration: '30 min', xp: 75 },
                    { id: 'ps-2-4', title: 'Display Network vs Search Network', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Optimisation and Scaling',
                badge: 'Advanced',
                badgeClass: 'badge-advanced',
                lessons: [
                    { id: 'ps-3-1', title: 'Search Query Reports and Refinement', duration: '25 min', xp: 60 },
                    { id: 'ps-3-2', title: 'Ad Extensions and Assets', duration: '20 min', xp: 50 },
                    { id: 'ps-3-3', title: 'Audience Targeting in Search', duration: '30 min', xp: 75 },
                    { id: 'ps-3-4', title: 'Smart Bidding and Automation', duration: '35 min', xp: 80 },
                    { id: 'ps-3-5', title: 'Shopping Ads and Performance Max', duration: '30 min', xp: 75 },
                    { id: 'ps-3-6', title: 'Paid Search Reporting and ROAS', duration: '30 min', xp: 75 },
                    { id: 'ps-3-7', title: 'Microsoft Ads: Key Differences and Opportunities', duration: '25 min', xp: 60 },
                    { id: 'ps-3-8', title: 'Scaling Campaigns Profitably', duration: '35 min', xp: 80 },
                ]
            }
        ]
    },
    'social-ads': {
        id: 'social-ads',
        title: 'Social Media Advertising',
        icon: 'A',
        iconClass: 'path-icon-social',
        description: 'Master paid social across Meta, LinkedIn, TikTok, and Snapchat. Audience targeting, creative strategy, and measurement.',
        level: 'Beginner → Advanced',
        lessons: 20,
        time: '~14 hours',
        tags: ['beginner', 'intermediate', 'advanced'],
        sources: ['Meta Blueprint', 'LinkedIn Marketing Labs', 'TikTok Academy', 'Snapchat Focus'],
        modules: [
            {
                title: 'Social Advertising Foundations',
                badge: 'Beginner',
                badgeClass: 'badge-beginner',
                lessons: [
                    { id: 'sa-1-1', title: 'The Social Advertising Landscape', duration: '20 min', xp: 50 },
                    { id: 'sa-1-2', title: 'Choosing the Right Platform for Your Audience', duration: '25 min', xp: 60 },
                    { id: 'sa-1-3', title: 'Campaign Objectives and the Marketing Funnel', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Meta Advertising (Facebook & Instagram)',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                lessons: [
                    { id: 'sa-2-1', title: 'Meta Ads Manager: Structure and Setup', duration: '30 min', xp: 75 },
                    { id: 'sa-2-2', title: 'Audience Targeting: Core, Custom, and Lookalike', duration: '35 min', xp: 80 },
                    { id: 'sa-2-3', title: 'Ad Formats and Creative Best Practices', duration: '30 min', xp: 75 },
                    { id: 'sa-2-4', title: 'The Meta Pixel and Conversions API', duration: '30 min', xp: 75 },
                    { id: 'sa-2-5', title: 'Meta Advantage+ and Automation', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'LinkedIn, TikTok, and Beyond',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                lessons: [
                    { id: 'sa-3-1', title: 'LinkedIn Ads for B2B Marketing', duration: '30 min', xp: 75 },
                    { id: 'sa-3-2', title: 'TikTok Ads: Creative-First Advertising', duration: '30 min', xp: 75 },
                    { id: 'sa-3-3', title: 'Snapchat Ads and AR Marketing', duration: '25 min', xp: 60 },
                    { id: 'sa-3-4', title: 'Pinterest Ads for Discovery Marketing', duration: '20 min', xp: 50 },
                ]
            },
            {
                title: 'Advanced Social Strategy',
                badge: 'Advanced',
                badgeClass: 'badge-advanced',
                lessons: [
                    { id: 'sa-4-1', title: 'Creative Testing Frameworks', duration: '30 min', xp: 75 },
                    { id: 'sa-4-2', title: 'Attribution and Cross-Platform Measurement', duration: '35 min', xp: 80 },
                    { id: 'sa-4-3', title: 'Retargeting and Remarketing Strategies', duration: '30 min', xp: 75 },
                    { id: 'sa-4-4', title: 'Scaling Social Ad Spend Profitably', duration: '35 min', xp: 80 },
                    { id: 'sa-4-5', title: 'UGC and Influencer-Driven Ads', duration: '25 min', xp: 60 },
                    { id: 'sa-4-6', title: 'Building a Multi-Platform Social Strategy', duration: '35 min', xp: 80 },
                ]
            }
        ]
    },
    content: {
        id: 'content',
        title: 'Content & Inbound Marketing',
        icon: 'C',
        iconClass: 'path-icon-content',
        description: 'Build a content engine that attracts, engages, and converts. Content strategy, blogging, email, and inbound methodology.',
        level: 'Beginner → Advanced',
        lessons: 22,
        time: '~15 hours',
        tags: ['beginner', 'intermediate', 'advanced'],
        sources: ['HubSpot Academy', 'Content Marketing Institute', 'Mailchimp Marketing Library'],
        modules: [
            {
                title: 'Content Marketing Fundamentals',
                badge: 'Beginner',
                badgeClass: 'badge-beginner',
                lessons: [
                    { id: 'cm-1-1', title: 'What is Content Marketing and Why It Works', duration: '20 min', xp: 50 },
                    { id: 'cm-1-2', title: 'The Inbound Methodology: Attract, Engage, Delight', duration: '25 min', xp: 60 },
                    { id: 'cm-1-3', title: 'Understanding Your Audience: Buyer Personas', duration: '30 min', xp: 75 },
                    { id: 'cm-1-4', title: 'Content Formats: Blog, Video, Podcast, Social', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Content Strategy',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                lessons: [
                    { id: 'cm-2-1', title: 'Building a Content Calendar', duration: '25 min', xp: 60 },
                    { id: 'cm-2-2', title: 'Writing Content That Ranks and Converts', duration: '35 min', xp: 80 },
                    { id: 'cm-2-3', title: 'Content Distribution Channels', duration: '25 min', xp: 60 },
                    { id: 'cm-2-4', title: 'Repurposing Content Across Platforms', duration: '20 min', xp: 50 },
                    { id: 'cm-2-5', title: 'Lead Magnets and Gated Content', duration: '30 min', xp: 75 },
                ]
            },
            {
                title: 'Email Marketing',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                lessons: [
                    { id: 'cm-3-1', title: 'Email Marketing Fundamentals', duration: '25 min', xp: 60 },
                    { id: 'cm-3-2', title: 'Building and Segmenting Email Lists', duration: '30 min', xp: 75 },
                    { id: 'cm-3-3', title: 'Writing Emails That Get Opened and Clicked', duration: '30 min', xp: 75 },
                    { id: 'cm-3-4', title: 'Email Automation and Sequences', duration: '35 min', xp: 80 },
                    { id: 'cm-3-5', title: 'Deliverability and Compliance', duration: '20 min', xp: 50 },
                ]
            },
            {
                title: 'Advanced Content Systems',
                badge: 'Advanced',
                badgeClass: 'badge-advanced',
                lessons: [
                    { id: 'cm-4-1', title: 'Content-Led Growth: Building a Content Moat', duration: '35 min', xp: 80 },
                    { id: 'cm-4-2', title: 'Marketing Funnels and Conversion Paths', duration: '30 min', xp: 75 },
                    { id: 'cm-4-3', title: 'Content Performance Measurement', duration: '25 min', xp: 60 },
                    { id: 'cm-4-4', title: 'Building a Content Team and Process', duration: '30 min', xp: 75 },
                    { id: 'cm-4-5', title: 'Thought Leadership and Brand Publishing', duration: '25 min', xp: 60 },
                    { id: 'cm-4-6', title: 'AI in Content Marketing: What Works', duration: '30 min', xp: 75 },
                    { id: 'cm-4-7', title: 'Social Media Organic Strategy', duration: '30 min', xp: 75 },
                    { id: 'cm-4-8', title: 'Community Building as a Marketing Channel', duration: '25 min', xp: 60 },
                ]
            }
        ]
    },
    analytics: {
        id: 'analytics',
        title: 'Data & Analytics',
        icon: 'D',
        iconClass: 'path-icon-analytics',
        description: 'Measure what matters. Google Analytics, attribution, conversion tracking, and turning data into marketing decisions.',
        level: 'Beginner → Advanced',
        lessons: 15,
        time: '~10 hours',
        tags: ['beginner', 'intermediate', 'advanced'],
        sources: ['Google Analytics Learning', 'Google Skillshop', 'CXL Institute'],
        modules: [
            {
                title: 'Analytics Foundations',
                badge: 'Beginner',
                badgeClass: 'badge-beginner',
                lessons: [
                    { id: 'an-1-1', title: 'Why Marketing Analytics Matters', duration: '20 min', xp: 50 },
                    { id: 'an-1-2', title: 'Google Analytics 4: Setup and Interface', duration: '30 min', xp: 75 },
                    { id: 'an-1-3', title: 'Key Metrics Every Marketer Must Know', duration: '25 min', xp: 60 },
                    { id: 'an-1-4', title: 'Setting Up Goals and Conversions', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Measurement and Tracking',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                lessons: [
                    { id: 'an-2-1', title: 'UTM Parameters and Campaign Tracking', duration: '25 min', xp: 60 },
                    { id: 'an-2-2', title: 'Event Tracking and Custom Dimensions', duration: '30 min', xp: 75 },
                    { id: 'an-2-3', title: 'Understanding User Behaviour Reports', duration: '30 min', xp: 75 },
                    { id: 'an-2-4', title: 'Building Marketing Dashboards', duration: '35 min', xp: 80 },
                ]
            },
            {
                title: 'Advanced Analytics',
                badge: 'Advanced',
                badgeClass: 'badge-advanced',
                lessons: [
                    { id: 'an-3-1', title: 'Attribution Models Explained', duration: '35 min', xp: 80 },
                    { id: 'an-3-2', title: 'Multi-Touch Attribution in Practice', duration: '30 min', xp: 75 },
                    { id: 'an-3-3', title: 'Cohort Analysis and Retention Metrics', duration: '30 min', xp: 75 },
                    { id: 'an-3-4', title: 'Marketing Mix Modelling Overview', duration: '25 min', xp: 60 },
                    { id: 'an-3-5', title: 'Privacy, Cookies, and the Future of Tracking', duration: '25 min', xp: 60 },
                    { id: 'an-3-6', title: 'Data Storytelling: Presenting Insights', duration: '25 min', xp: 60 },
                    { id: 'an-3-7', title: 'Server-Side Tracking Fundamentals', duration: '30 min', xp: 75 },
                ]
            }
        ]
    },
    growth: {
        id: 'growth',
        title: 'Growth & Experimentation',
        icon: 'G',
        iconClass: 'path-icon-growth',
        description: 'Advanced growth marketing: A/B testing, conversion rate optimisation, growth loops, and scaling strategies.',
        level: 'Intermediate → Expert',
        lessons: 14,
        time: '~10 hours',
        tags: ['intermediate', 'advanced'],
        sources: ['CXL Institute', 'Reforge', 'Demand Curve'],
        modules: [
            {
                title: 'Growth Marketing Principles',
                badge: 'Intermediate',
                badgeClass: 'badge-intermediate',
                lessons: [
                    { id: 'gr-1-1', title: 'What is Growth Marketing?', duration: '20 min', xp: 50 },
                    { id: 'gr-1-2', title: 'The Growth Framework: Acquisition, Activation, Retention', duration: '30 min', xp: 75 },
                    { id: 'gr-1-3', title: 'Finding Your Growth Levers', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Experimentation and Testing',
                badge: 'Advanced',
                badgeClass: 'badge-advanced',
                lessons: [
                    { id: 'gr-2-1', title: 'A/B Testing Fundamentals', duration: '30 min', xp: 75 },
                    { id: 'gr-2-2', title: 'Statistical Significance and Sample Size', duration: '30 min', xp: 75 },
                    { id: 'gr-2-3', title: 'Building an Experimentation Culture', duration: '25 min', xp: 60 },
                    { id: 'gr-2-4', title: 'Prioritisation Frameworks: ICE and RICE', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Conversion Rate Optimisation',
                badge: 'Advanced',
                badgeClass: 'badge-advanced',
                lessons: [
                    { id: 'gr-3-1', title: 'CRO Foundations: Where to Start', duration: '25 min', xp: 60 },
                    { id: 'gr-3-2', title: 'Landing Page Optimisation', duration: '35 min', xp: 80 },
                    { id: 'gr-3-3', title: 'Form Optimisation and Friction Reduction', duration: '25 min', xp: 60 },
                ]
            },
            {
                title: 'Growth Systems',
                badge: 'Expert',
                badgeClass: 'badge-expert',
                lessons: [
                    { id: 'gr-4-1', title: 'Growth Loops vs Funnels', duration: '30 min', xp: 75 },
                    { id: 'gr-4-2', title: 'Viral Loops and Referral Systems', duration: '30 min', xp: 75 },
                    { id: 'gr-4-3', title: 'Building Scalable Growth Systems', duration: '35 min', xp: 80 },
                ]
            }
        ]
    }
};

// ==================== DATA: LESSON CONTENT ====================
const lessonContent = {
    'seo-1-1': {
        title: 'What is SEO and Why It Matters',
        body: `
            <h2>What is Search Engine Optimisation?</h2>
            <p>Search Engine Optimisation (SEO) is the practice of improving your website so it appears prominently in search results when people look for topics relevant to your business. Done well, it brings a steady flow of high-intent visitors without paying for every click.</p>
            <p>In 2026, that definition comes with an important addendum: SEO is not just about ranking on page one. Google now serves many queries through AI Overviews — AI-generated summaries at the top of results — and through AI Mode, a conversational interface that synthesises answers from multiple sources. Strong SEO means earning a place in those AI-generated results too.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>SEO is not about gaming algorithms. It is about genuinely being the best resource for a given search query — and making sure Google can recognise that. The two goals have always been the same; only the tactics for achieving them evolve.</p>
            </div>

            <h2>Why SEO Matters for Marketers</h2>
            <p>Organic search remains one of the highest-value traffic sources available to any business:</p>
            <ul>
                <li><strong>Compounding returns</strong> — A page that earns strong rankings can generate traffic for months or years without ongoing ad spend. Paid campaigns stop the moment you pause them.</li>
                <li><strong>High intent</strong> — People searching on Google are actively looking for answers, products, or services. Intent-matched traffic converts better than most other channels.</li>
                <li><strong>Trust and credibility</strong> — Organic results carry an implicit endorsement that paid slots do not. Users know the difference.</li>
                <li><strong>AI Overviews visibility</strong> — Sites cited in AI-generated answers gain visibility even when a user does not click through to a result. Building the authority to be cited is now part of the SEO brief.</li>
            </ul>

            <h2>The Three Pillars of SEO</h2>
            <p>All SEO activity falls into three interdependent areas:</p>
            <ol>
                <li><strong>Technical SEO</strong> — Ensuring search engines can crawl, index, and render your site correctly. This covers site speed, Core Web Vitals, mobile-first structure, and clean site architecture.</li>
                <li><strong>On-Page SEO</strong> — Optimising individual pages through content quality, E-E-A-T signals, keyword relevance, and structured heading hierarchies.</li>
                <li><strong>Off-Page SEO</strong> — Building your site's authority through genuine editorial backlinks, digital PR, and the credibility signals that come with being cited as a trusted source.</li>
            </ol>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>If you are new to SEO, start with on-page fundamentals: write genuinely useful content for real people, structure it clearly, and demonstrate relevant expertise. Technical and off-page work compound on top of a strong content foundation — not the other way around.</p>
            </div>

            <h2>E-E-A-T: The Standard Google Judges Content By</h2>
            <p>Google evaluates content quality through a framework called <strong>E-E-A-T</strong>: Experience, Expertise, Authoritativeness, and Trustworthiness. These signals inform the quality rating guidelines used by Google's human evaluators, which in turn shape how algorithms are tuned.</p>
            <ul>
                <li><strong>Experience</strong> — Has the author actually done what they are writing about?</li>
                <li><strong>Expertise</strong> — Do they have the knowledge and skill to be a credible source?</li>
                <li><strong>Authoritativeness</strong> — Is the site recognised as a go-to source in its field?</li>
                <li><strong>Trustworthiness</strong> — Is the site honest, accurate, and safe to use?</li>
            </ul>
            <p>Google's March and May 2026 Core Updates confirmed the direction of travel: original, expert-attributed, people-first content is gaining visibility. Thin, assembled, or generic content continues to lose it.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: GEO — Generative Engine Optimisation</div>
                <p><strong>Generative Engine Optimisation (GEO)</strong> is the emerging practice of optimising content to be cited in AI-generated answers — Google's AI Overviews, AI Mode, and similar features. The principles overlap strongly with good SEO: be authoritative, be specific, answer questions directly. GEO adds a practical layer: structure your content so AI systems can extract a clear, accurate answer and attribute it to your source. Think concise definitions, direct answers near headings, and verifiable claims backed by data.</p>
            </div>
        `,
        quiz: {
            question: 'Which of the following best describes why SEO delivers "compounding returns"?',
            options: [
                'Because Google charges less over time',
                'Because a well-ranked page can generate traffic for months or years without ongoing cost',
                'Because search engines prefer older websites',
                'Because you earn interest on your SEO investment'
            ],
            correct: 1,
            explanation: 'Unlike paid ads (which stop generating traffic when you stop paying), a page that ranks well in organic search can continue to attract visitors for a long time, making it a compounding investment.'
        },
        setupGuide: [
            { step: 1, title: 'Create a Google Search Console account', description: 'Go to search.google.com/search-console and sign in with your Google account. Search Console is the primary free tool for seeing how Google views your site — index coverage, search queries, and crawl issues all live here.' },
            { step: 2, title: 'Add and verify your website', description: 'Click "Add property" and enter your site URL. Verify ownership using the HTML tag method (paste a small meta tag into your site header) or the DNS record method via your domain registrar. Google walks you through both options.' },
            { step: 3, title: 'Submit your XML sitemap', description: 'Once verified, go to Sitemaps in the left menu and enter your sitemap URL — typically yourdomain.com/sitemap.xml. Submitting a sitemap ensures Google can discover all your pages, not just those it finds through links.' },
            { step: 4, title: 'Review the Index Coverage report', description: 'Open the Index Coverage report (under Indexing) to see which pages Google has indexed and which have issues. Note any pages marked as Error or Excluded — these are pages Google cannot or will not show in search results.' },
            { step: 5, title: 'Run a site: search in Google', description: 'Open Google and search site:yourdomain.com with no space after the colon. The number of results is an estimate of your indexed pages. Compare this to the actual number of pages on your site to spot indexing gaps.' },
        ],
        tasks: [
            'Run a site:yourdomain.com search in Google and count how many pages are indexed',
            'Set up Google Search Console and verify ownership of your site',
            'Check the Index Coverage report and note any errors or excluded pages',
            'Find a competitor ranking on Google for a term you want to target — note their page title and meta description',
            'Write down three questions your ideal customer types into Google before finding a business like yours',
        ],
        reflection: 'After running the site: search and reviewing Search Console, what did you discover about your current visibility in Google? Were there any surprises?',
    },
    'seo-1-2': {
        title: 'How Google Crawls, Indexes, and Ranks Pages',
        body: `
            <h2>The Three Stages of Search</h2>
            <p>Every page that appears in Google results has been through three stages: crawling, indexing, and ranking. Understanding this pipeline tells you exactly where to focus your SEO attention at any given time.</p>

            <h2>Stage 1: Crawling</h2>
            <p>Google uses automated software called Googlebot to discover web pages. Googlebot moves across the web by following links, reading XML sitemaps, and drawing on signals from other Google services. It visits pages and downloads their content to be processed.</p>
            <p>Googlebot cannot crawl a page if:</p>
            <ul>
                <li>No links point to it — it is an orphan page with no discoverable path</li>
                <li>It is blocked by your robots.txt file</li>
                <li>The server is too slow or returns errors when Googlebot visits</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Crawling is the prerequisite to everything else. A page that is not crawled cannot be indexed; a page that is not indexed cannot rank. Technical SEO problems at the crawl stage prevent all downstream SEO work from having any effect.</p>
            </div>

            <h2>Stage 2: Indexing</h2>
            <p>Once crawled, Google analyses the page and decides whether to add it to its index — the massive database of pages eligible to appear in search results. During indexing, Google reads the text, processes images and video, and notes structural signals like the title tag, headings, and schema markup.</p>
            <p>Pages may be crawled but not indexed if Google judges them to be low quality, near-duplicates of other pages, or if the page includes a noindex directive. The Index Coverage report in Google Search Console shows which of your pages are indexed and which are excluded, along with the reason.</p>

            <h2>Stage 3: Ranking</h2>
            <p>When a user runs a search, Google queries its index in real time and ranks pages using hundreds of signals. By 2026, the signals that carry most weight cluster around a few clear themes:</p>
            <ul>
                <li><strong>Relevance</strong> — How precisely does the page address the specific query and intent behind it?</li>
                <li><strong>E-E-A-T</strong> — Does the content reflect real Experience, genuine Expertise, recognised Authoritativeness, and strong Trustworthiness? These signals have grown in influence through every major update since 2022.</li>
                <li><strong>Information Gain</strong> — Does this page add something new to the existing body of content on this topic? Pages that simply restate what every other page already says earn less ranking reward than pages that contribute an original angle, data point, or perspective.</li>
                <li><strong>Authority</strong> — How many high-quality, relevant sites link to this page and this domain overall?</li>
                <li><strong>Page Experience</strong> — Core Web Vitals (LCP, INP, CLS), mobile usability, and safe browsing all factor in. INP — which measures how quickly the page responds to user interactions — replaced the older FID metric and is now a firm ranking consideration.</li>
                <li><strong>Freshness</strong> — For time-sensitive topics, content that has been recently reviewed and updated holds an advantage.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Search <code>site:yourdomain.com</code> in Google to see all indexed pages from your site. If the count is significantly lower than the number of pages you have published, you have an indexing problem worth investigating in Search Console.</p>
            </div>

            <h2>How AI Overviews Fit In</h2>
            <p>Since 2024, Google has placed AI-generated summaries — called AI Overviews — above the traditional organic results for many queries. The sources cited inside those summaries are drawn from Google's index. This means ranking well is still the foundation of appearing in AI Overviews: Google does not cite pages it has not indexed and does not trust. Strong E-E-A-T, clear structure, and authoritative content are the same signals that determine both organic rankings and AI Overview inclusion.</p>
        `,
        quiz: {
            question: 'What is the correct order of how Google processes a web page?',
            options: [
                'Ranking → Indexing → Crawling',
                'Indexing → Crawling → Ranking',
                'Crawling → Indexing → Ranking',
                'Crawling → Ranking → Indexing'
            ],
            correct: 2,
            explanation: 'Google first discovers (crawls) a page, then processes and stores it (indexes), and finally determines where it should appear in search results (ranks).'
        },
        setupGuide: [
            { step: 1, title: 'Check your robots.txt file', description: 'Go to yourdomain.com/robots.txt in your browser. This file tells crawlers which pages and directories to skip. Look for any Disallow rules that could be blocking important pages from being crawled.' },
            { step: 2, title: 'Use the URL Inspection tool in Search Console', description: 'Open Google Search Console, click URL Inspection in the left menu, and enter your homepage URL. Click "Request indexing" if the page is not indexed. The tool shows you exactly how Googlebot sees that page and when it was last crawled.' },
            { step: 3, title: 'Check your sitemap status in Search Console', description: 'Go to Index > Sitemaps in Search Console. You should see your sitemap URL listed with a status of "Success" and a count of submitted versus indexed URLs. A large gap between submitted and indexed pages signals a problem.' },
            { step: 4, title: 'Review the Coverage report', description: 'Go to Index > Coverage in Search Console. Review the Error, Valid with warnings, and Excluded categories. Click into each issue type to see which pages are affected and read the recommended fix.' },
            { step: 5, title: 'Check for noindex tags on important pages', description: 'On any key page (homepage, a product page, a blog post), right-click and select View Page Source. Press Ctrl+F and search for "noindex". If you find a noindex meta tag on a page you want indexed, that is the cause of your indexing issue.' },
        ],
        tasks: [
            'Open yourdomain.com/robots.txt and note whether any important directories or pages are being blocked',
            'Use Search Console URL Inspection to check the crawl status and last crawl date for your homepage',
            'Identify one page on your site that you expect to be indexed but which may not appear in a site: search',
            'Open the Coverage report in Search Console and record how many pages are in each status category',
            'Check three key pages for noindex meta tags by viewing the page source',
        ],
        reflection: 'After checking your robots.txt and the Coverage report, what crawl or indexing issues did you find — and which one would have the biggest impact to fix?',
    },
    'seo-1-3': {
        title: 'Understanding Search Intent',
        body: `
            <h2>What is Search Intent?</h2>
            <p>Search intent — sometimes called user intent — is the underlying reason a person runs a particular search. The words in a query are a surface signal; the intent behind them is what Google is really trying to satisfy. Matching your content to intent is one of the most decisive factors in whether a page ranks or not.</p>
            <p>If Google's results for a query are all blog posts and you have built a product page, you will not rank — regardless of how well optimised the page is in every other respect. Intent alignment is the prerequisite that makes everything else work.</p>

            <h2>The Four Types of Search Intent</h2>

            <h3>1. Informational Intent</h3>
            <p>The searcher wants to learn or understand something.</p>
            <ul>
                <li>"what is a pillar page"</li>
                <li>"how to set up Google Search Console"</li>
                <li>"what does INP measure"</li>
            </ul>
            <p><strong>Best content format:</strong> In-depth guides, tutorials, explainer articles, how-to posts</p>

            <h3>2. Navigational Intent</h3>
            <p>The searcher wants to reach a specific website or page they already know about.</p>
            <ul>
                <li>"Ahrefs login"</li>
                <li>"Google Search Console"</li>
                <li>"Semrush keyword tool"</li>
            </ul>
            <p><strong>Best content format:</strong> Your own brand pages — homepage, login page, key landing pages</p>

            <h3>3. Commercial Investigation</h3>
            <p>The searcher is evaluating options before making a decision.</p>
            <ul>
                <li>"best SEO audit tools"</li>
                <li>"Ahrefs vs Semrush 2026"</li>
                <li>"keyword research tool reviews"</li>
            </ul>
            <p><strong>Best content format:</strong> Comparison guides, curated lists, product reviews, tool round-ups</p>

            <h3>4. Transactional Intent</h3>
            <p>The searcher is ready to take an action — buy, sign up, download, book.</p>
            <ul>
                <li>"buy Ahrefs subscription"</li>
                <li>"free keyword rank tracker"</li>
                <li>"SEO agency London"</li>
            </ul>
            <p><strong>Best content format:</strong> Product pages, pricing pages, category pages, free trial landing pages</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Pointing a product page at an informational query — or a blog post at a transactional one — is one of the most common and costly SEO errors. If your content format does not match what Google already ranks for a query, you are competing against the intent signal itself. Always check the SERP before writing a single word of content.</p>
            </div>

            <h2>How AI Overviews Are Changing the SERP</h2>
            <p>Since 2024, Google's AI Overviews have changed what the search results page looks like for many informational queries. An AI-generated summary now sits above organic listings, synthesising answers from multiple sources. For some queries, this pushes traditional blue links further down the page.</p>
            <p>This does not change how intent alignment works — but it does affect strategy for informational content. Pages that are cited in AI Overviews tend to be authoritative, structured clearly, and written with direct answers near relevant headings. Informational content that earns AI Overview citations can generate brand visibility even without a direct click.</p>

            <h2>How to Determine Search Intent</h2>
            <p>The simplest method — and the most reliable — is to search the keyword yourself in an incognito window and read what Google returns:</p>
            <ol>
                <li>Search your target keyword</li>
                <li>Note whether an AI Overview appears and, if so, what it says</li>
                <li>Look at the top five organic results — content type, format, and angle</li>
                <li>Read the People Also Ask questions to surface sub-intents</li>
                <li>Check the Related Searches section at the bottom of the page</li>
            </ol>
            <p>The results Google shows are the result of testing at scale. If every top result is a how-to guide, a how-to guide is what users are asking for. Match it — then ask what more you can add that none of those results currently offer.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Intent changes over time. A query that once showed product pages may now trigger an AI Overview or an informational result after a Google update. Re-check the SERP for your target keywords every six months — your content format may need to evolve with it.</p>
            </div>
        `,
        quiz: {
            question: 'Someone searches "best email marketing tools 2026". What type of search intent is this?',
            options: [
                'Informational — they want to learn about email marketing',
                'Navigational — they want to find a specific tool',
                'Commercial Investigation — they are researching before choosing a tool',
                'Transactional — they are ready to purchase immediately'
            ],
            correct: 2,
            explanation: '"Best [product] [year]" queries are classic commercial investigation intent. The searcher is comparing options and hasn\'t decided yet. The best content format would be a comparison or "best of" list.'
        },
        setupGuide: [
            { step: 1, title: 'Pick one target keyword and search it in Google', description: 'Choose a keyword you want your site to rank for. Open an incognito browser window (to avoid personalisation) and search for it. Note the types of content on the first page — are they blog posts, product pages, how-to guides, or comparison articles?' },
            { step: 2, title: 'Analyse the top 5 results in detail', description: 'Open each of the top 5 results and note the content type (article, landing page, video), content format (listicle, guide, definition, comparison), and content angle (beginner-focused, local, review-based, date-specific). This tells you what Google has decided satisfies this intent.' },
            { step: 3, title: 'Expand the People Also Ask section', description: 'Back on the search results page, click each People Also Ask question to expand it. These questions reveal the sub-intents and follow-up questions searchers have around your keyword. They are also excellent content ideas and FAQ material.' },
            { step: 4, title: 'Scroll to Related Searches at the bottom of the page', description: 'The Related Searches section at the bottom of Google results shows semantically related queries people search after your keyword. These reveal intent variations — some may be more specific (transactional) and some more general (informational).' },
            { step: 5, title: 'Map your existing page against the dominant intent', description: 'Open the page you currently have (or plan to create) for this keyword. Compare its format and angle to what Google is ranking on page one. If you have a product page but Google shows blog posts, you have an intent mismatch that will prevent ranking.' },
        ],
        tasks: [
            'Pick 5 keywords you want to rank for and classify each as informational, navigational, commercial investigation, or transactional',
            'Search each keyword in an incognito window and note the dominant content type Google returns for each',
            'Identify one page on your site where the content format does not match the search intent of its target keyword',
            'Find two People Also Ask questions from your niche that you could create content specifically to answer',
            'Review one top-ranking competitor page for your main keyword — list three intent signals it includes that your current page lacks',
        ],
        reflection: 'Which of your existing pages has the biggest mismatch between its content format and the likely search intent of the people finding it — and what would you change?',
    },

    // ==================== PAID SEARCH LESSONS ====================
    'ps-1-1': {
        title: 'How Paid Search Works (The Auction Model)',
        body: `
            <h2>What is Paid Search?</h2>
            <p>Paid search advertising — also known as PPC (Pay-Per-Click) — lets you place ads at the top of search engine results pages when people search for terms relevant to your business. The two major platforms are <strong>Google Ads</strong> and <strong>Microsoft Advertising</strong>, which together cover the vast majority of search volume in most English-speaking markets.</p>
            <p>In 2026, paid search has expanded well beyond traditional keyword-triggered text ads. Google's fastest-growing product — <strong>AI Max for Search</strong> — uses AI to extend query matching beyond the keywords you explicitly bid on and to dynamically personalise ad assets for each searcher. The advertiser's job has shifted: from managing individual keywords to providing high-quality signals — strong conversion data, compelling creative assets, and clear business goals.</p>

            <h2>The Auction Model</h2>
            <p>Every time someone runs a search, an instant auction happens behind the scenes. Here is how it works:</p>
            <ol>
                <li><strong>You set targeting and goals</strong> — The keywords or topics you want to reach, and the conversions you want to drive</li>
                <li><strong>You set bids or a bid strategy</strong> — Either manually or through Smart Bidding, which uses machine learning to bid at auction time</li>
                <li><strong>A user searches</strong> — Google checks which advertisers are eligible for that query</li>
                <li><strong>The auction runs</strong> — Google calculates Ad Rank for all eligible advertisers and determines which ads to show and in what order</li>
                <li><strong>Ads appear</strong> — Winning ads are displayed, and you only pay when someone clicks</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The highest bidder does not always win. Google uses <strong>Ad Rank</strong> — a combination of your bid, Quality Score (ad relevance, expected CTR, and landing page experience), and the expected impact of your ad assets. A well-crafted ad with a lower bid can outrank a poorly crafted ad with a higher one.</p>
            </div>

            <h2>The Ad Rank Formula</h2>
            <p>Ad Rank determines your ad position:</p>
            <p><strong>Ad Rank = Bid × Quality Score × Expected Impact of Assets</strong></p>
            <p>This means you can improve your position by:</p>
            <ul>
                <li>Increasing your bid (costs more money)</li>
                <li>Improving your Quality Score (free and sustainable)</li>
                <li>Adding high-quality, relevant ad assets (free and impactful)</li>
            </ul>

            <h2>How You Pay</h2>
            <p>You do not pay your maximum bid — you pay just enough to beat the Ad Rank of the advertiser below you. This generalised second-price mechanism means efficiency matters enormously: a higher-quality ad pays less per click for the same position than a lower-quality one.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Focus on Quality Score first. Improving your ad relevance, expected click-through rate, and landing page experience consistently lowers your cost-per-click while maintaining or improving your position. Better quality means the same budget delivers more clicks.</p>
            </div>

            <h2>Why Paid Search Remains Powerful</h2>
            <ul>
                <li><strong>Intent-based</strong> — People are actively searching for what you offer; this is the highest-intent advertising format available</li>
                <li><strong>Measurable</strong> — You can track every click, conversion, and pound spent down to the keyword or query</li>
                <li><strong>Fast</strong> — Unlike SEO, you can appear at the top of results within hours of setting up a campaign</li>
                <li><strong>AI-accelerated</strong> — Tools like AI Max for Search and Smart Bidding now handle optimisation work that previously required constant manual management</li>
            </ul>
        `,
        quiz: {
            question: 'In Google Ads, what determines your ad position in search results?',
            options: [
                'Only your bid amount — the highest bidder wins',
                'Ad Rank — a combination of bid, Quality Score, and expected impact of extensions',
                'Your total advertising budget',
                'How long you have been advertising on Google'
            ],
            correct: 1,
            explanation: 'Google uses Ad Rank, which considers your bid amount, Quality Score (relevance, expected CTR, landing page quality), and the expected impact of ad extensions. This means a well-crafted ad can outrank a higher bidder.'
        }
    },
    'ps-1-2': {
        title: 'Account Structure: Campaigns, Ad Groups, Keywords',
        body: `
            <h2>Why Account Structure Matters</h2>
            <p>A well-structured Google Ads account is not just about organisation — it is about providing the clearest possible signals to Google's machine learning systems. Modern paid search is driven by Smart Bidding and AI optimisation. The better you structure your account to feed those systems clean data, specific goals, and relevant creative assets, the better they perform. Think of your job as a signal provider, not a manual controller.</p>

            <h2>The Three Levels</h2>
            <p>Google Ads accounts follow a hierarchy:</p>

            <h3>1. Account Level</h3>
            <p>Your top-level container. Account-level settings include billing, user access, conversion goals, and audience lists shared across all campaigns.</p>

            <h3>2. Campaign Level</h3>
            <p>Campaigns are your major organisational units. Each campaign has its own:</p>
            <ul>
                <li><strong>Budget</strong> — Daily or monthly spend limit</li>
                <li><strong>Bid strategy</strong> — Smart Bidding goal (Target CPA, Target ROAS, Maximise Conversions) or manual bidding</li>
                <li><strong>Targeting</strong> — Geographic locations, languages, devices, and network settings</li>
                <li><strong>Campaign type</strong> — Search, Performance Max, Shopping, Display, Video, or Demand Gen</li>
                <li><strong>Negative keywords</strong> — Now applicable at campaign level for Performance Max campaigns as well as Search</li>
            </ul>

            <h3>3. Ad Group Level</h3>
            <p>Ad groups sit inside campaigns and contain closely related keywords and the ads that serve them. Each ad group should focus on one tight theme, with keywords and ad copy that closely match each other.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Modern account structure serves Smart Bidding, not manual control. Rather than creating dozens of granular ad groups to control bids, create logical groupings that help Google understand your goals and give its bidding algorithms clean, sufficient conversion data to optimise against.</p>
            </div>

            <h2>A Practical Structure Example</h2>
            <p>For a software business:</p>
            <ul>
                <li><strong>Campaign:</strong> Brand — Target ROAS, protecting branded search terms</li>
                <li><strong>Campaign:</strong> Core Product — Maximise Conversions, targeting high-intent product keywords</li>
                <li><strong>Campaign:</strong> Competitor — Separate budget and messaging, monitored closely</li>
                <li><strong>Campaign:</strong> Performance Max — asset groups and conversion signals for Google to find incremental reach across all channels</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Consolidate where possible. Fewer campaigns with more data each perform better than many small campaigns starved of conversion signals. If a campaign is generating fewer than 30 conversions per month, consider merging it with another to give Smart Bidding enough data to function effectively.</p>
            </div>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Over-fragmenting campaigns and ad groups in pursuit of manual control. Splitting into hundreds of tiny ad groups made sense in the era of manual CPC bidding. With Smart Bidding, fragmentation starves the algorithm of data and hurts performance. Simplify your structure and let the system optimise within broader, data-rich campaigns.</p>
            </div>
        `,
        quiz: {
            question: 'Why should you keep ad groups tightly themed with closely related keywords?',
            options: [
                'It makes your account look neater',
                'Google requires a maximum of 5 keywords per ad group',
                'It improves Quality Score, lowers costs, and makes ads more relevant to searchers',
                'It helps you spend your budget faster'
            ],
            correct: 2,
            explanation: 'Tightly themed ad groups mean your ads are directly relevant to the keywords triggering them. This improves click-through rates, Quality Score, and ultimately lowers your cost-per-click.'
        }
    },
    'ps-1-3': {
        title: 'Match Types and Negative Keywords',
        body: `
            <h2>What Are Match Types?</h2>
            <p>Match types tell Google how closely a user's search query must relate to your keyword before your ad is eligible to appear. In 2026, all three match types have broadened significantly from their original definitions — understanding what each actually does today is essential for managing where your budget goes.</p>

            <h2>The Three Match Types</h2>

            <h3>1. Broad Match</h3>
            <p>Broad match is now the widest and most AI-driven match type. Rather than matching on literal word variations, Google's systems match on <strong>semantic intent</strong> — the meaning behind the search, not the specific words used. Combined with Smart Bidding, broad match uses your conversion data to bid aggressively on searches likely to convert and conservatively on those that are not.</p>
            <ul>
                <li>Keyword: <code>project management software</code></li>
                <li>May match: "team task tracking app," "best tools for coordinating remote teams," "how to manage projects effectively"</li>
            </ul>
            <p>Broad match works best when paired with Smart Bidding and a healthy conversion history. Without Smart Bidding, it can waste budget on semantically adjacent but commercially irrelevant queries.</p>

            <h3>2. Phrase Match</h3>
            <p>Phrase match covers searches that include the meaning of your keyword phrase in roughly the same conceptual order. The query must preserve the core intent but can include additional words before or after.</p>
            <ul>
                <li>Keyword: <code>"project management software"</code></li>
                <li>May match: "best project management software for small teams," "project management software free trial"</li>
                <li>Less likely to match: "how to manage projects" (too different in intent)</li>
            </ul>

            <h3>3. Exact Match</h3>
            <p>Exact match delivers the tightest control. Your ad shows for searches with the same meaning as your keyword — close variants and rewordings of the same intent are included, but searches with clearly different intent are not.</p>
            <ul>
                <li>Keyword: <code>[project management software]</code></li>
                <li>May match: "project management tool," "software for project management"</li>
                <li>Will not match: "free project management software" (different modifier changes the intent)</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Broad match in 2026 operates on <strong>semantic intent</strong>, not literal text. Google's systems understand that "team coordination app" and "project management software" serve similar intents. This makes broad match far more powerful than it once was — but also more reliant on high-quality conversion data to bid wisely. Without clean conversion signals, broad match wastes budget indiscriminately.</p>
            </div>

            <h2>Negative Keywords: Your Essential Control Layer</h2>
            <p>Negative keywords remain one of the most impactful levers in paid search, particularly as match types have broadened and AI Max for Search expands query coverage further. They prevent your ads appearing for searches that, despite matching your keyword's intent, are not commercially relevant to your business.</p>
            <p>For a premium project management tool, useful negatives might include:</p>
            <ul>
                <li><code>-free</code> — users looking for no-cost tools</li>
                <li><code>-template</code> — users wanting templates, not software</li>
                <li><code>-tutorial</code> — learning, not buying intent</li>
                <li><code>-Excel</code> — users looking for spreadsheet solutions</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Review your Search Terms Report at least weekly. Sort by cost (highest first) to find the most expensive irrelevant queries first. Build shared negative keyword lists by theme — "free/cheap," "jobs/careers," "DIY/how-to" — and apply them across all relevant campaigns simultaneously.</p>
            </div>
        `,
        quiz: {
            question: 'What is the primary purpose of negative keywords in paid search?',
            options: [
                'To increase the number of searches your ads appear for',
                'To prevent your ads from showing for irrelevant searches, saving budget',
                'To make your ads appear in a lower position',
                'To target competitors\' brand names'
            ],
            correct: 1,
            explanation: 'Negative keywords block your ads from showing for searches that aren\'t relevant to your business. This prevents wasted clicks and budget, improving overall campaign efficiency and ROI.'
        }
    },
    'ps-1-4': {
        title: 'Writing Effective Search Ads',
        body: `
            <h2>The Anatomy of a Search Ad in 2026</h2>
            <p>Google Search ads are built using <strong>Responsive Search Ads (RSAs)</strong> — the default and only standard Search ad format. You supply multiple creative components and Google's AI assembles and tests the best combinations for each search context. With AI Max for Search, Google can also dynamically adapt these assets based on the query and the user's context, making asset quality more important than ever.</p>
            <p>The components of an RSA:</p>
            <ul>
                <li><strong>Headlines</strong> — Up to 15 headlines (30 characters each). Google shows up to 3 at once.</li>
                <li><strong>Descriptions</strong> — Up to 4 descriptions (90 characters each). Google shows up to 2 at once.</li>
                <li><strong>Display URL paths</strong> — Two short text fields that appear in the ad URL (e.g., /project-management/free-trial)</li>
                <li><strong>Ad assets</strong> — Additional components like sitelinks, callouts, image assets, call assets, and lead form assets that expand your ad and improve Ad Rank</li>
            </ul>

            <h2>Principles of Effective Ad Copy</h2>

            <h3>Match the Search Intent</h3>
            <p>Your ad should directly address what the searcher is looking for. If someone searches "project management software for remote teams," your headlines should speak to remote work, team coordination, and the specific value you offer — not just generic product claims.</p>

            <h3>Include the Keyword</h3>
            <p>Having the search term or a close variation in your headline improves relevance and Quality Score. Google also bolds matching terms in search results, which draws the eye and improves click-through rate.</p>

            <h3>Highlight Your Unique Value</h3>
            <p>Specific claims consistently outperform vague ones:</p>
            <ul>
                <li>"Save 6 Hours Per Project" beats "Save Time"</li>
                <li>"Rated 4.8/5 by 12,000 Teams" beats "Highly Rated"</li>
                <li>"Free 30-Day Trial, No Card Required" beats "Try Free"</li>
            </ul>

            <h3>Include a Clear Call to Action</h3>
            <p>Tell people exactly what to do next: "Start Free Trial," "Get a Custom Quote," "Book a 15-Minute Demo," "Download the Guide." A specific CTA consistently outperforms a vague one.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Write at least 10 varied headlines and 3–4 descriptions to give Google meaningful options to test. Cover different themes: benefits, social proof, offers, CTAs, and keyword-rich headlines. Pin your most critical headline (such as your brand name or core offer) to position 1 to ensure it always appears — but leave the rest unpinned so the algorithm can find the best-performing combinations.</p>
            </div>

            <h2>Asset Diversity Matters More Than Ever</h2>
            <p>With AI Max for Search dynamically adapting how assets are assembled and served, providing diverse, high-quality assets is no longer optional — it is the primary creative lever available to advertisers. Thin or repetitive assets limit what the system can do. Treat each headline and description as a distinct, standalone message rather than a variation of the same sentence.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Pinning too many headlines overrides Google's ability to test and optimise combinations. Pin only what genuinely must appear in every combination — typically your core offer or brand name in position 1. Leave the rest unpinned so the algorithm can find what actually performs best with real users.</p>
            </div>
        `,
        quiz: {
            question: 'Why is it important to include the target keyword in your search ad headline?',
            options: [
                'Google requires it or your ad won\'t run',
                'It improves relevance, Quality Score, and the keyword appears bold in results — catching the user\'s eye',
                'It automatically increases your bid',
                'It guarantees your ad will appear in position 1'
            ],
            correct: 1,
            explanation: 'Including the keyword improves your ad\'s relevance to the search query, which helps Quality Score. Additionally, matching terms appear bold in search results, making your ad stand out visually.'
        }
    },

    // ==================== SOCIAL ADS LESSONS ====================
    'sa-1-1': {
        title: 'The Social Advertising Landscape',
        body: `
            <h2>Why Social Media Advertising Matters</h2>
            <p>Social media advertising targets people based on <strong>who they are</strong> — their professional identity, interests, life stage, and behaviour — rather than what they happen to be searching for right now. This makes it the primary tool for demand generation: reaching people who do not yet know they need your product and building the awareness that makes future search and conversion campaigns work.</p>

            <h2>The Major Platforms</h2>

            <h3>Meta (Facebook, Instagram, and Threads)</h3>
            <p>The largest social advertising ecosystem, with billions of monthly active users across Facebook, Instagram, and — now accessible through Ads Manager — <strong>Threads</strong>. Meta's AI-driven <strong>Advantage+</strong> campaign structure has become the primary way advertisers operate on the platform, shifting budget allocation and placement decisions to the algorithm. Best for:</p>
            <ul>
                <li>B2C businesses of all sizes</li>
                <li>Ecommerce and direct-to-consumer brands</li>
                <li>Lead generation at scale</li>
                <li>Retargeting across a broad inventory of placements</li>
            </ul>

            <h3>LinkedIn</h3>
            <p>The professional network with over 1 billion members. Unique in offering targeting by job title, seniority, company size, and industry — and now with native CRM integration that lets advertisers measure pipeline and revenue impact directly within Campaign Manager. Best for:</p>
            <ul>
                <li>B2B marketing and lead generation</li>
                <li>Employer branding and professional services</li>
                <li>Account-based marketing at scale</li>
                <li>Thought leadership and executive brand building</li>
            </ul>

            <h3>TikTok</h3>
            <p>A platform built around short-form video and creator-led content, with over 1 billion monthly users. Following the resolution of TikTok's US structural uncertainty in January 2026, it is now operating as a stable advertising channel. <strong>Smart+</strong> is TikTok's unified AI campaign type, offering module-level automation control across targeting, creative, budget, and placements. Best for:</p>
            <ul>
                <li>Reaching 18–34 demographics with entertainment-first content</li>
                <li>Ecommerce through TikTok Shop</li>
                <li>Creator-led and UGC-style campaigns that generate authentic engagement</li>
            </ul>

            <h3>Snapchat</h3>
            <p>Strong with younger audiences (primarily 13–34), with unique AR advertising capabilities. Best for brands targeting Gen Z with immersive, interactive experiences and local campaigns.</p>

            <h3>Pinterest</h3>
            <p>A visual discovery and planning platform. Users come with purchase intent — actively searching for ideas and products. Best for home, fashion, food, and lifestyle brands where purchase decisions begin with visual inspiration.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Each platform has a distinct user mindset. Facebook and Instagram users are socialising and scrolling. LinkedIn users are in professional mode. TikTok users want to be entertained. Pinterest users are planning future purchases. Your creative must match the mindset of the moment, not just the demographic of the user.</p>
            </div>

            <h2>Social Ads vs Search Ads</h2>
            <ul>
                <li><strong>Search ads</strong> — Demand capture: targeting people who are already searching for solutions</li>
                <li><strong>Social ads</strong> — Demand generation: reaching people before they search, building the intent that search campaigns then capture</li>
            </ul>
            <p>The most effective strategies use both in sequence: social advertising builds awareness and consideration, search captures the demand it creates.</p>
        `,
        quiz: {
            question: 'What is the fundamental difference between social advertising and search advertising?',
            options: [
                'Social ads are always cheaper than search ads',
                'Search ads target based on what people search; social ads target based on who people are',
                'Social ads only work for B2C businesses',
                'Search ads are more creative than social ads'
            ],
            correct: 1,
            explanation: 'Search advertising captures existing demand (targeting by search queries), while social advertising generates demand by targeting people based on demographics, interests, and behaviours — regardless of whether they\'re actively searching.'
        }
    },

    // ==================== CONTENT MARKETING LESSONS ====================
    'cm-1-1': {
        title: 'What is Content Marketing and Why It Works',
        body: `
            <h2>Defining Content Marketing</h2>
            <p>Content marketing is the practice of creating and distributing valuable, relevant content to attract and retain a clearly defined audience — and ultimately drive profitable customer action. Instead of interrupting people with promotional messages, you earn their attention by being genuinely useful. In return, they trust you, return to you, and eventually buy from you.</p>

            <h2>Why Content Marketing Works in 2026</h2>
            <p>Content marketing aligns with how buyers actually make decisions — and those decisions now increasingly start with AI tools, not search engines:</p>
            <ol>
                <li><strong>Research happens before the first visit</strong> — Buyers research via ChatGPT, Perplexity, and Google's AI Overviews before they ever reach your website. Your content needs to be present in those answers, not just search results.</li>
                <li><strong>60% of searches end without a click</strong> — AI-generated summaries answer questions directly in the search results. Content must be structured to be cited, not just ranked.</li>
                <li><strong>Trust is earned through consistency</strong> — Helpful, original content builds credibility over time in a way that advertising cannot replicate.</li>
                <li><strong>It compounds</strong> — A strong video, guide, or tool continues attracting attention long after it is published, unlike an ad that stops the moment you stop paying for it.</li>
                <li><strong>It fuels every other channel</strong> — Good content powers SEO, email, social, paid, and sales enablement simultaneously.</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Content marketing is not about creating content for its own sake. It is about creating the right content, in the right format, for the right audience, at the right stage of their journey — and structuring it so it can be found by both people and AI platforms alike.</p>
            </div>

            <h2>Content Marketing vs Traditional Advertising</h2>
            <ul>
                <li><strong>Traditional advertising</strong> interrupts and says "buy this" — you pay for attention and it disappears when the budget stops</li>
                <li><strong>Content marketing</strong> attracts by being genuinely useful — you invest in assets that grow in value over time</li>
            </ul>

            <h2>The Format Landscape Has Changed</h2>
            <p>Short-form video is now the highest-ROI content format, not the blog post. This does not make blogging obsolete — written content remains essential for SEO depth and AI citations — but the starting point for audience building and engagement in 2026 is video. The most effective content systems treat one strong insight as raw material that becomes a short video, a blog post, an email, and a series of social posts simultaneously.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Do not think in content types. Think in ideas. One insight from a customer conversation, a failed experiment, or an industry trend becomes a short-form video, a written article, an email, and three social posts. The system multiplies your effort — but the insight has to be genuinely yours, not recycled from what everyone else is saying.</p>
            </div>
        `,
        quiz: {
            question: 'Why does content marketing "compound" over time?',
            options: [
                'Because content gets cheaper to produce the more you make',
                'Because a single piece of quality content can continue attracting traffic and building trust for months or years',
                'Because Google automatically promotes older content',
                'Because your audience grows by exactly 10% each month'
            ],
            correct: 1,
            explanation: 'Unlike paid advertising (which stops working when you stop paying), a well-crafted blog post, video, or guide can continue ranking in search results and attracting visitors for a long time — making each piece an investment that compounds.'
        }
    },

    // ==================== ANALYTICS LESSONS ====================
    'an-1-1': {
        title: 'Why Marketing Analytics Matters',
        body: `
            <h2>The Role of Analytics in Marketing</h2>
            <p>Marketing analytics is the practice of measuring, managing, and analysing marketing performance data so that you can make better decisions. The word "decisions" matters here. Analytics is not a reporting function — it is a decision-support function. Every dashboard, every report, and every data point should ultimately connect to a choice: where to spend budget, which campaigns to scale, which audiences to prioritise, and where to stop wasting money.</p>

            <h2>What Analytics Answers</h2>
            <p>Good marketing analytics answers practical business questions:</p>
            <ul>
                <li><strong>Which channels are genuinely driving revenue?</strong> — Not just clicks or traffic, but actual business outcomes</li>
                <li><strong>Where in the journey are we losing people?</strong> — Where visitors drop off and why</li>
                <li><strong>Is our marketing spend working?</strong> — Are we making more than we spend, and which channels deliver the best returns</li>
                <li><strong>What should we do differently?</strong> — The question every piece of analysis should end with</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The three-tier measurement framework is now standard thinking for professional marketers. Tier 1: GA4 for cross-channel analysis and full-funnel visibility. Tier 2: Platform self-reported data (Meta Ads Manager, Google Ads, LinkedIn Campaign Manager) for in-platform optimisation. Tier 3: CRM and revenue data for true ROI, connecting ad spend to actual customer value. These three sources tell different stories — understanding how they relate is what separates good analysts from data collectors.</p>
            </div>

            <h2>The Core Marketing Metrics</h2>
            <p>Every marketer should understand these foundational metrics across traffic, engagement, and conversion:</p>
            <ul>
                <li><strong>Sessions and users</strong> — Visits and unique visitors; GA4 distinguishes total users from active users (those with an engaged session)</li>
                <li><strong>Engagement rate</strong> — The percentage of sessions lasting 10+ seconds, with 2+ page views, or including a conversion. More meaningful than bounce rate, which GA4 has replaced.</li>
                <li><strong>Conversion rate</strong> — The percentage of sessions that complete a desired action. The metric that connects traffic to business value.</li>
                <li><strong>Cost per acquisition (CPA)</strong> — Total marketing spend divided by conversions. The efficiency measure for any paid activity.</li>
                <li><strong>Return on ad spend (ROAS)</strong> — Revenue generated per pound spent. Always cross-reference against CRM data for accuracy.</li>
                <li><strong>Customer lifetime value (LTV)</strong> — Total revenue per customer over their lifetime. The metric that tells you how much you can afford to spend acquiring each one.</li>
            </ul>

            <h2>The Analytics Mindset</h2>
            <p>Good analysts do not just report numbers — they make numbers mean something. That requires:</p>
            <ol>
                <li><strong>Starting with the question, not the data</strong> — "What do we need to decide?" should come before opening any dashboard</li>
                <li><strong>Looking for patterns across time</strong> — Trends matter more than individual data points</li>
                <li><strong>Connecting data to decisions</strong> — Every piece of analysis should end with a recommendation</li>
                <li><strong>Using all three measurement tiers</strong> — No single data source tells the full story</li>
            </ol>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Do not track everything — track what connects to decisions. Start with the five metrics that most directly relate to your current business goals and build from there. A dashboard with three actionable metrics drives better decisions than one with thirty data points and no clear purpose.</p>
            </div>
        `,
        quiz: {
            question: 'What is the most important principle of marketing analytics?',
            options: [
                'Track as many metrics as possible to have the most data',
                'Only look at traffic numbers because they\'re the most important',
                'Focus on metrics that connect to business decisions and actions',
                'Wait until you have a year of data before drawing any conclusions'
            ],
            correct: 2,
            explanation: 'The most valuable analytics are actionable. Every metric you track should connect to a decision you can make. Tracking everything creates noise; tracking the right things creates clarity.'
        }
    },

    // ==================== GROWTH LESSONS ====================
    'gr-1-1': {
        title: 'What is Growth Marketing?',
        body: `
            <h2>Growth Marketing Defined</h2>
            <p>Growth marketing is a data-driven, experiment-led approach to marketing that focuses on the entire customer lifecycle — not just acquisition. While traditional marketing often focuses on getting people through the door, growth marketing optimises every stage: acquisition, activation, retention, revenue, and referral.</p>

            <h2>Growth Marketing vs Traditional Marketing</h2>
            <ul>
                <li><strong>Traditional marketing</strong> focuses primarily on awareness and acquisition</li>
                <li><strong>Growth marketing</strong> optimises the full funnel from first touch to loyal customer</li>
                <li><strong>Traditional marketing</strong> relies on best practices and intuition</li>
                <li><strong>Growth marketing</strong> relies on experiments and data</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Growth marketing was pioneered by companies like Dropbox, Airbnb, and Facebook, who couldn't afford massive ad budgets. Instead, they built growth into their products and used systematic experimentation to find scalable channels.</p>
            </div>

            <h2>The AARRR Framework (Pirate Metrics)</h2>
            <p>Growth marketers typically think about the customer lifecycle using this framework:</p>
            <ol>
                <li><strong>Acquisition</strong> — How do people find you? (SEO, ads, social, referrals)</li>
                <li><strong>Activation</strong> — Do they have a great first experience? (onboarding, first value moment)</li>
                <li><strong>Retention</strong> — Do they come back? (email, product, community)</li>
                <li><strong>Revenue</strong> — Do they pay you? (pricing, upsells, expansion)</li>
                <li><strong>Referral</strong> — Do they tell others? (referral programmes, word of mouth)</li>
            </ol>

            <h2>The Experimentation Mindset</h2>
            <p>At its core, growth marketing is about running experiments. The process looks like this:</p>
            <ol>
                <li><strong>Observe</strong> — Look at your data and identify opportunities</li>
                <li><strong>Hypothesise</strong> — "If we change X, we expect Y to happen because Z"</li>
                <li><strong>Test</strong> — Run a controlled experiment</li>
                <li><strong>Measure</strong> — Did the hypothesis hold true?</li>
                <li><strong>Learn</strong> — Document the insight whether the test won or lost</li>
                <li><strong>Iterate</strong> — Apply what you learned and test the next idea</li>
            </ol>

            <div class="callout callout-warning">
                <div class="callout-title">Important</div>
                <p>Growth marketing is not about "hacks" or shortcuts. It's a disciplined, systematic approach to finding what works and scaling it. The companies that grow fastest are the ones that run the most experiments per unit of time.</p>
            </div>

            <h2>Skills of a Growth Marketer</h2>
            <ul>
                <li>Data analysis and analytics</li>
                <li>A/B testing and experimentation</li>
                <li>Channel expertise (SEO, paid, email, etc.)</li>
                <li>Copywriting and conversion optimisation</li>
                <li>Basic understanding of product and engineering</li>
                <li>Comfort with ambiguity and failure (most experiments fail)</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Before learning advanced growth tactics, master the fundamentals: analytics, one acquisition channel, and copywriting. Growth marketing amplifies good fundamentals — it can't fix broken basics.</p>
            </div>
        `,
        quiz: {
            question: 'What does the AARRR (Pirate Metrics) framework stand for?',
            options: [
                'Advertising, Analytics, Reporting, Research, Results',
                'Acquisition, Activation, Retention, Revenue, Referral',
                'Awareness, Action, Response, Reach, Return',
                'Audience, Ads, Remarketing, Revenue, Ranking'
            ],
            correct: 1,
            explanation: 'AARRR stands for Acquisition, Activation, Retention, Revenue, and Referral. It maps the complete customer lifecycle and helps growth marketers identify where the biggest opportunities for improvement exist.'
        }
    }
};

// ==================== DATA: PLACEMENT QUIZ ====================
const placementQuestions = [
    {
        question: 'Have you ever run an online marketing campaign?',
        options: ['Never', 'A few basic campaigns', 'Many campaigns across channels', 'I manage marketing professionally']
    },
    {
        question: 'How familiar are you with Google Analytics?',
        options: ['Never used it', 'Looked at it a few times', 'Use it regularly', 'I set up advanced tracking and reports']
    },
    {
        question: 'Have you ever managed a paid advertising budget?',
        options: ['Never', 'Small budget (<£1,000/month)', 'Medium budget (£1K–£10K/month)', 'Large budget (£10K+/month)']
    },
    {
        question: 'How would you describe your SEO knowledge?',
        options: ['Don\'t know what SEO stands for', 'Know the basics', 'Comfortable with keyword research and on-page SEO', 'I handle technical SEO and link building strategies']
    },
    {
        question: 'Have you ever created a content marketing strategy?',
        options: ['No', 'I\'ve written some blog posts', 'I\'ve planned a content calendar and strategy', 'I\'ve built full content operations with measurement']
    },
    {
        question: 'What\'s your experience with email marketing?',
        options: ['None', 'Sent a few newsletters', 'Run segmented campaigns with automation', 'Build complex nurture flows and measure LTV impact']
    },
    {
        question: 'How comfortable are you with A/B testing?',
        options: ['Don\'t know what it is', 'Understand the concept', 'Ran a few tests', 'Run systematic experimentation programmes']
    },
    {
        question: 'What best describes your marketing goals?',
        options: ['Want to learn marketing from scratch', 'Want to improve existing skills', 'Want to specialise in specific channels', 'Want to learn advanced growth strategies']
    }
];

// ==================== STATE ====================
let currentQuizQuestion = 0;
let quizAnswers = [];
let userProgress = loadProgress();

function loadProgress() {
    try {
        const saved = localStorage.getItem('marketingAcademyProgress');
        return saved ? JSON.parse(saved) : {
            completedLessons: [],
            completedQuizzes: [],
            xp: 0,
            streak: 0,
            lastVisit: null,
            level: null,
            activity: []
        };
    } catch {
        return { completedLessons: [], completedQuizzes: [], xp: 0, streak: 0, lastVisit: null, level: null, activity: [] };
    }
}

function saveProgress() {
    try {
        localStorage.setItem('marketingAcademyProgress', JSON.stringify(userProgress));
    } catch { /* ignore */ }
    updateUI();
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        userProgress = { completedLessons: [], completedQuizzes: [], xp: 0, streak: 0, lastVisit: null, level: null, activity: [] };
        saveProgress();
        renderProgressPage();
    }
}

// ==================== NAVIGATION ====================
function showPage(pageId) {
    hideNextLessonPanel();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
    if (activeLink) activeLink.classList.add('active');
    window.scrollTo(0, 0);
    closeMobileMenu();

    if (pageId === 'learning-paths') renderPathsPage();
    if (pageId === 'progress') renderProgressPage();
    if (pageId === 'start-here') initQuiz();
}

function showPath(pathId) {
    hideNextLessonPanel();
    const path = learningPaths[pathId];
    if (!path) return;
    renderPathDetail(path);
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-path-detail').classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const lpLink = document.querySelector('.nav-link[data-page="learning-paths"]');
    if (lpLink) lpLink.classList.add('active');
    window.scrollTo(0, 0);
    closeMobileMenu();
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

function closeMobileMenu() {
    document.getElementById('navLinks').classList.remove('open');
}

// ==================== QUIZ ====================
function initQuiz() {
    currentQuizQuestion = 0;
    quizAnswers = [];
    document.getElementById('placementQuiz').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const q = placementQuestions[currentQuizQuestion];
    const progress = ((currentQuizQuestion) / placementQuestions.length) * 100;
    document.getElementById('quizProgressBar').style.width = progress + '%';
    document.getElementById('quizProgressText').textContent = `Question ${currentQuizQuestion + 1} of ${placementQuestions.length}`;

    document.getElementById('quizBody').innerHTML = `
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
            ${q.options.map((opt, i) => `
                <div class="quiz-option ${quizAnswers[currentQuizQuestion] === i ? 'selected' : ''}"
                     onclick="selectQuizAnswer(${i})">${opt}</div>
            `).join('')}
        </div>
    `;

    document.getElementById('quizPrev').style.display = currentQuizQuestion > 0 ? 'inline-flex' : 'none';
    document.getElementById('quizNext').textContent = currentQuizQuestion === placementQuestions.length - 1 ? 'See Results' : 'Next';
}

function selectQuizAnswer(index) {
    quizAnswers[currentQuizQuestion] = index;
    document.querySelectorAll('#quizBody .quiz-option').forEach((el, i) => {
        el.classList.toggle('selected', i === index);
    });
}

function nextQuestion() {
    if (quizAnswers[currentQuizQuestion] === undefined) return;
    if (currentQuizQuestion < placementQuestions.length - 1) {
        currentQuizQuestion++;
        renderQuizQuestion();
    } else {
        showQuizResult();
    }
}

function prevQuestion() {
    if (currentQuizQuestion > 0) {
        currentQuizQuestion--;
        renderQuizQuestion();
    }
}

function showQuizResult() {
    const score = quizAnswers.reduce((sum, a) => sum + a, 0);
    const maxScore = placementQuestions.length * 3;
    const percentage = score / maxScore;

    let level, title, description, paths, color;

    if (percentage < 0.25) {
        level = 'Beginner';
        title = 'Welcome! Let\'s start from the foundations.';
        description = 'You\'re new to marketing — that\'s perfectly fine. We\'ll start with the fundamentals and build up your knowledge step by step. No jargon, no overwhelm.';
        paths = ['SEO Foundations', 'Content Marketing Basics', 'Analytics Setup', 'Understanding Paid Ads'];
        color = '#D1FAE5';
    } else if (percentage < 0.5) {
        level = 'Intermediate';
        title = 'Nice. You\'ve got the basics — let\'s go deeper.';
        description = 'You understand marketing fundamentals. Now it\'s time to master specific channels and learn to measure what works.';
        paths = ['On-Page SEO Mastery', 'Google Ads Campaigns', 'Meta Advertising', 'Email Automation'];
        color = '#DBEAFE';
    } else if (percentage < 0.75) {
        level = 'Advanced';
        title = 'Solid skills. Time to optimise and scale.';
        description = 'You\'re an experienced marketer. Let\'s focus on advanced strategy, multi-channel campaigns, and conversion optimisation.';
        paths = ['Advanced SEO', 'Social Ads Strategy', 'Attribution Modelling', 'CRO Fundamentals'];
        color = '#FEF3C7';
    } else {
        level = 'Expert';
        title = 'You\'re experienced. Let\'s talk growth systems.';
        description = 'You\'ve got deep marketing knowledge. Our advanced paths will cover growth loops, experimentation frameworks, and scaling strategies.';
        paths = ['Growth Loops & Flywheels', 'Experimentation Frameworks', 'Advanced Attribution', 'Building Marketing Systems'];
        color = '#FEE2E2';
    }

    userProgress.level = level;
    saveProgress();

    document.getElementById('placementQuiz').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';

    document.getElementById('resultLevel').textContent = level;
    document.getElementById('resultLevel').style.background = color;
    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultDescription').textContent = description;
    document.getElementById('resultPaths').innerHTML = paths.map(p =>
        `<span class="result-path-badge">${p}</span>`
    ).join('');
}

// ==================== LEARNING PATHS PAGE ====================
function renderPathsPage() {
    const container = document.getElementById('pathsContainer');
    let html = '<div class="paths-grid">';
    for (const [id, path] of Object.entries(learningPaths)) {
        const completedCount = path.modules.reduce((sum, m) =>
            sum + m.lessons.filter(l => userProgress.completedLessons.includes(l.id)).length, 0
        );
        const totalCount = path.modules.reduce((sum, m) => sum + m.lessons.length, 0);
        const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

        html += `
            <div class="path-card" data-tags='${JSON.stringify(path.tags)}' onclick="showPath('${id}')">
                <div class="path-icon ${path.iconClass}">${path.icon}</div>
                <h3>${path.title}</h3>
                <p>${path.description}</p>
                <div class="path-meta">
                    <span>${path.lessons} lessons</span>
                    <span>${path.time}</span>
                </div>
                <div class="path-level">${path.level}</div>
                ${percent > 0 ? `
                    <div style="margin-top:12px">
                        <div class="path-progress-bar-wrapper">
                            <div class="path-progress-bar-fill" style="width:${percent}%"></div>
                        </div>
                        <span style="font-size:0.8rem;color:var(--primary);font-weight:600">${percent}% complete</span>
                    </div>
                ` : ''}
            </div>
        `;
    }
    html += '</div>';
    container.innerHTML = html;
}

function filterPaths(filter) {
    document.querySelectorAll('.filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('#pathsContainer .path-card').forEach(card => {
        if (filter === 'all') {
            card.style.display = '';
        } else {
            const tags = JSON.parse(card.dataset.tags);
            card.style.display = tags.includes(filter) ? '' : 'none';
        }
    });
}

// ==================== PATH DETAIL ====================
function renderPathDetail(path) {
    const container = document.getElementById('pathDetailContent');
    const completedCount = path.modules.reduce((sum, m) =>
        sum + m.lessons.filter(l => userProgress.completedLessons.includes(l.id)).length, 0
    );
    const totalCount = path.modules.reduce((sum, m) => sum + m.lessons.length, 0);

    let html = `
        <div class="path-detail-header">
            <div class="path-icon ${path.iconClass}" style="width:56px;height:56px;font-size:1.5rem">${path.icon}</div>
            <div>
                <h1>${path.title}</h1>
                <p>${path.description}</p>
            </div>
        </div>
        <div class="path-detail-meta">
            <div class="meta-item"><strong>Lessons</strong>${totalCount}</div>
            <div class="meta-item"><strong>Duration</strong>${path.time}</div>
            <div class="meta-item"><strong>Level</strong>${path.level}</div>
            <div class="meta-item"><strong>Progress</strong>${completedCount}/${totalCount} complete</div>
        </div>
        <div class="ad-slot ad-slot-inline"><div class="ad-placeholder">Advertisement</div></div>
    `;

    path.modules.forEach((mod, mi) => {
        html += `
            <div class="module">
                <div class="module-header">
                    <div class="module-number">${mi + 1}</div>
                    <span class="module-title">${mod.title}</span>
                    <span class="module-badge ${mod.badgeClass}">${mod.badge}</span>
                </div>
                <div class="lesson-list">
                    ${mod.lessons.map(lesson => {
                        const completed = userProgress.completedLessons.includes(lesson.id);
                        return `
                            <div class="lesson-item ${completed ? 'completed' : ''}" onclick="openLesson('${path.id}', '${lesson.id}')">
                                <div class="lesson-check">${completed ? '&#10003;' : ''}</div>
                                <div class="lesson-info">
                                    <div class="lesson-name">${lesson.title}</div>
                                    <div class="lesson-duration">${lesson.duration}</div>
                                </div>
                                <div class="lesson-xp">+${lesson.xp} XP</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });

    html += `
        <div style="margin-top:24px">
            <h3 style="margin-bottom:8px">Knowledge Sources</h3>
            <p style="color:var(--text-light);font-size:0.9rem">This path's curriculum is built by studying and synthesising knowledge from:</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:12px">
                ${path.sources.map(s => `<span class="source-badge" style="background:var(--bg-alt);color:var(--text);border:1px solid var(--border)">${s}</span>`).join('')}
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// ==================== LESSON VIEW ====================
function renderSetupGuideTab(setupGuide) {
    if (!setupGuide || !setupGuide.length) {
        return '<p class="tab-coming-soon">Setup guide coming soon.</p>';
    }
    return '<div class="setup-steps">' + setupGuide.map(function (item) {
        return '<div class="setup-step"><div class="setup-step-number">' + item.step + '</div><div class="setup-step-content"><div class="setup-step-title">' + item.title + '</div><div class="setup-step-desc">' + item.description + '</div></div></div>';
    }).join('') + '</div>';
}

function renderTasksTab(lessonId, tasks, reflection) {
    if (!tasks || !tasks.length) {
        return '<p class="tab-coming-soon">Tasks coming soon.</p>';
    }
    var saved = JSON.parse(localStorage.getItem('tasks_' + lessonId) || '[]');
    var savedReflection = localStorage.getItem('reflection_' + lessonId) || '';
    var html = '<div class="task-checklist">';
    tasks.forEach(function (task, i) {
        var checked = saved[i] ? 'checked' : '';
        html += '<div class="task-item"><label><input type="checkbox" ' + checked + ' onchange="saveTaskState(\'' + lessonId + '\', ' + i + ', this.checked)"><span>' + task + '</span></label></div>';
    });
    html += '</div>';
    if (reflection) {
        html += '<div class="reflection-box"><label class="reflection-label">' + reflection + '</label><textarea class="reflection-textarea" id="reflectionText_' + lessonId + '" placeholder="Write your thoughts here...">' + savedReflection + '</textarea><button class="btn btn-outline btn-sm" id="saveReflectionBtn_' + lessonId + '" onclick="saveReflection(\'' + lessonId + '\')">Save reflection</button></div>';
    }
    return html;
}

function switchLessonTab(tabName, lessonId) {
    document.querySelectorAll('.lesson-tab').forEach(function (t) {
        t.classList.toggle('active', t.dataset.tab === tabName);
    });
    ['learn', 'setup', 'tasks'].forEach(function (name) {
        var el = document.getElementById('tab-' + name + '-' + lessonId);
        if (el) el.classList.toggle('active', name === tabName);
    });
}

function saveTaskState(lessonId, taskIndex, checked) {
    var key = 'tasks_' + lessonId;
    var saved = JSON.parse(localStorage.getItem(key) || '[]');
    saved[taskIndex] = checked;
    localStorage.setItem(key, JSON.stringify(saved));
}

function saveReflection(lessonId) {
    var textarea = document.getElementById('reflectionText_' + lessonId);
    var btn = document.getElementById('saveReflectionBtn_' + lessonId);
    if (!textarea || !btn) return;
    localStorage.setItem('reflection_' + lessonId, textarea.value);
    btn.textContent = 'Saved!';
    btn.disabled = true;
    setTimeout(function () {
        btn.textContent = 'Save reflection';
        btn.disabled = false;
    }, 2000);
}

function completeModuleProject(pathId, moduleIndex) {
    var key = 'moduleProject_' + pathId + '_' + moduleIndex;
    localStorage.setItem(key, 'true');
    var btn = document.getElementById('moduleProjectBtn_' + pathId + '_' + moduleIndex);
    if (btn) {
        btn.textContent = 'Completed ✓';
        btn.className = 'btn btn-success module-project-btn';
        btn.disabled = true;
    }
}

function openLesson(pathId, lessonId) {
    hideNextLessonPanel();
    const path = learningPaths[pathId];
    if (!path) return;

    const content = lessonContent[lessonId];
    const allLessons = path.modules.flatMap(m => m.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    const lesson = allLessons[currentIndex];

    if (!lesson) return;

    // Render sidebar
    const sidebar = document.getElementById('lessonSidebar');
    let sidebarHtml = `<div class="sidebar-title">${path.title}</div>`;
    path.modules.forEach(mod => {
        sidebarHtml += `<div style="font-size:0.75rem;font-weight:700;color:var(--text-lighter);margin:12px 0 4px;text-transform:uppercase">${mod.title}</div>`;
        mod.lessons.forEach(l => {
            const isActive = l.id === lessonId;
            const isCompleted = userProgress.completedLessons.includes(l.id);
            sidebarHtml += `<div class="sidebar-lesson ${isActive ? 'active' : ''} ${isCompleted ? 'completed-lesson' : ''}" onclick="openLesson('${pathId}', '${l.id}')">${l.title}</div>`;
        });
    });
    sidebar.innerHTML = sidebarHtml;

    // Render main content
    const main = document.getElementById('lessonMain');
    const isCompleted = userProgress.completedLessons.includes(lessonId);

    let bodyContent = '';
    if (content) {
        bodyContent = content.body;
        if (content.quiz) {
            bodyContent += `
                <div class="inline-quiz" id="lessonQuiz">
                    <h3>Quick Check</h3>
                    <p class="quiz-question">${content.quiz.question}</p>
                    <div class="quiz-options">
                        ${content.quiz.options.map((opt, i) => `
                            <div class="quiz-option" onclick="checkLessonQuiz(${i}, ${content.quiz.correct}, '${lessonId}', '${pathId}')">${opt}</div>
                        `).join('')}
                    </div>
                    <div class="quiz-feedback" id="quizFeedback"></div>
                </div>
            `;
        }
    } else {
        bodyContent = `
            <div class="callout callout-info">
                <div class="callout-title">Coming Soon</div>
                <p>This lesson's full content is being prepared. In the meantime, you can explore the topic using the resources listed in our Resource Library.</p>
            </div>
            <h2>What You'll Learn</h2>
            <p>This lesson covers: <strong>${lesson.title}</strong>. Once complete, you'll have practical knowledge you can apply immediately.</p>
            <p>Check back soon for the full interactive lesson, or mark it as studied if you've covered this topic elsewhere.</p>
        `;
    }

    // Build module project card if this is the last lesson in a module that has a project
    var moduleProjectHtml = '';
    path.modules.forEach(function (mod, modIdx) {
        var lastLesson = mod.lessons[mod.lessons.length - 1];
        if (lastLesson && lastLesson.id === lessonId && mod.projectTitle) {
            var projectKey = 'moduleProject_' + pathId + '_' + modIdx;
            var isDone = localStorage.getItem(projectKey) === 'true';
            moduleProjectHtml = '<div class="module-project-card"><div class="module-project-label">MODULE PROJECT</div><div class="module-project-title">' + mod.projectTitle + '</div><p class="module-project-desc">' + mod.projectDescription + '</p><button class="btn ' + (isDone ? 'btn-success' : 'btn-outline') + ' module-project-btn" id="moduleProjectBtn_' + pathId + '_' + modIdx + '" onclick="completeModuleProject(\'' + pathId + '\', ' + modIdx + ')" ' + (isDone ? 'disabled' : '') + '>' + (isDone ? 'Completed ✓' : 'I\'ve completed this ✓') + '</button></div>';
        }
    });

    main.innerHTML = `
        <div class="lesson-breadcrumb">${path.title} <span>→</span> ${lesson.title}</div>
        <h1>${lesson.title}</h1>
        <div class="lesson-meta-bar">
            <span>${lesson.duration}</span>
            <span>+${lesson.xp} XP</span>
            ${isCompleted ? '<span style="color:var(--success);font-weight:600">Completed</span>' : ''}
        </div>
        <div class="lesson-tabs">
            <button class="lesson-tab active" data-tab="learn" onclick="switchLessonTab('learn', '${lessonId}')">Learn</button>
            <button class="lesson-tab" data-tab="setup" onclick="switchLessonTab('setup', '${lessonId}')">Setup Guide</button>
            <button class="lesson-tab" data-tab="tasks" onclick="switchLessonTab('tasks', '${lessonId}')">Tasks</button>
        </div>
        <div class="tab-content active" id="tab-learn-${lessonId}">
            <div class="lesson-body">
                ${bodyContent}
            </div>
        </div>
        <div class="tab-content" id="tab-setup-${lessonId}">
            ${renderSetupGuideTab(content ? content.setupGuide : null)}
        </div>
        <div class="tab-content" id="tab-tasks-${lessonId}">
            ${renderTasksTab(lessonId, content ? content.tasks : null, content ? content.reflection : null)}
        </div>
        ${moduleProjectHtml}
        <div class="lesson-complete-btn">
            ${!isCompleted ? `<button class="btn btn-success btn-lg" onclick="completeLesson('${pathId}', '${lessonId}', ${lesson.xp})">Mark as Complete — Earn ${lesson.xp} XP</button>` : '<button class="btn btn-outline btn-lg" disabled>Lesson Completed</button>'}
        </div>
        <div class="lesson-nav">
            ${currentIndex > 0 ? `<button class="btn btn-outline" onclick="openLesson('${pathId}', '${allLessons[currentIndex - 1].id}')">Previous Lesson</button>` : '<span></span>'}
            ${currentIndex < allLessons.length - 1 ? `<button class="btn btn-primary" onclick="openLesson('${pathId}', '${allLessons[currentIndex + 1].id}')">Next Lesson</button>` : `<button class="btn btn-primary" onclick="showPath('${pathId}')">Back to Path Overview</button>`}
        </div>
    `;

    // Show lesson page
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-lesson').classList.add('active');
    window.scrollTo(0, 0);
}

function checkLessonQuiz(selected, correct, lessonId, pathId) {
    const feedback = document.getElementById('quizFeedback');
    const options = document.querySelectorAll('#lessonQuiz .quiz-option');

    options.forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === correct) {
            opt.style.borderColor = 'var(--success)';
            opt.style.background = '#D1FAE5';
        }
        if (i === selected && i !== correct) {
            opt.style.borderColor = 'var(--danger)';
            opt.style.background = '#FEE2E2';
        }
    });

    const content = lessonContent[lessonId];
    if (selected === correct) {
        feedback.className = 'quiz-feedback correct';
        feedback.innerHTML = `<strong>Correct!</strong> ${content.quiz.explanation}`;
        if (!userProgress.completedQuizzes.includes(lessonId)) {
            userProgress.completedQuizzes.push(lessonId);
            userProgress.xp += 25;
            saveProgress();
        }
        const pathName = pathId && learningPaths[pathId] ? learningPaths[pathId].title : '';
        showNextLessonPanel(getNextLesson(lessonId), pathName);
    } else {
        feedback.className = 'quiz-feedback incorrect';
        feedback.innerHTML = `<strong>Not quite.</strong> ${content.quiz.explanation}`;
    }
}

function completeLesson(pathId, lessonId, xp) {
    if (!userProgress.completedLessons.includes(lessonId)) {
        userProgress.completedLessons.push(lessonId);
        userProgress.xp += xp;
        userProgress.activity.unshift({
            type: 'lesson',
            lessonId,
            pathId,
            xp,
            date: new Date().toISOString()
        });
        if (userProgress.activity.length > 50) userProgress.activity = userProgress.activity.slice(0, 50);

        // Streak
        const today = new Date().toDateString();
        if (userProgress.lastVisit !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            if (userProgress.lastVisit === yesterday) {
                userProgress.streak++;
            } else {
                userProgress.streak = 1;
            }
            userProgress.lastVisit = today;
        }

        saveProgress();
    }
    openLesson(pathId, lessonId);
    showNextLessonPanel(getNextLesson(lessonId), learningPaths[pathId].title);
}

// ==================== NEXT LESSON PANEL ====================
function getNextLesson(currentLessonId) {
    for (const [pathKey, path] of Object.entries(learningPaths)) {
        for (let mIdx = 0; mIdx < path.modules.length; mIdx++) {
            const module = path.modules[mIdx];
            for (let lIdx = 0; lIdx < module.lessons.length; lIdx++) {
                if (module.lessons[lIdx].id !== currentLessonId) continue;
                if (lIdx + 1 < module.lessons.length) {
                    const next = module.lessons[lIdx + 1];
                    return { id: next.id, title: next.title, pathId: pathKey, pathName: path.title, moduleIndex: mIdx, lessonIndex: lIdx + 1 };
                }
                if (mIdx + 1 < path.modules.length) {
                    const next = path.modules[mIdx + 1].lessons[0];
                    return { id: next.id, title: next.title, pathId: pathKey, pathName: path.title, moduleIndex: mIdx + 1, lessonIndex: 0 };
                }
                return null;
            }
        }
    }
    return null;
}

function positionNextLessonPanel() {
    const panel = document.getElementById('nextLessonPanel');
    const lessonMain = document.getElementById('lessonMain');
    if (!panel || !lessonMain) return;
    if (window.innerWidth > 768) {
        const rect = lessonMain.getBoundingClientRect();
        panel.style.left = rect.left + 'px';
        panel.style.width = rect.width + 'px';
    }
}

function showNextLessonPanel(nextLesson, pathName) {
    const panel = document.getElementById('nextLessonPanel');
    if (!panel) return;
    const nlpNext = panel.querySelector('.nlp-next');
    const nlpComplete = panel.querySelector('.nlp-complete');

    if (nextLesson) {
        document.getElementById('nlpPathName').textContent = nextLesson.pathName;
        document.getElementById('nlpLessonTitle').textContent = nextLesson.title;
        document.getElementById('nlpStartBtn').onclick = function () { openLesson(nextLesson.pathId, nextLesson.id); };
        nlpNext.style.display = 'flex';
        nlpComplete.style.display = 'none';
    } else {
        document.getElementById('nlpCompletedPath').textContent = pathName || '';
        nlpNext.style.display = 'none';
        nlpComplete.style.display = 'flex';
    }

    positionNextLessonPanel();
    panel.style.display = 'block';
    requestAnimationFrame(() => panel.classList.add('nlp-visible'));
}

function hideNextLessonPanel() {
    const panel = document.getElementById('nextLessonPanel');
    if (!panel) return;
    panel.classList.remove('nlp-visible');
    panel.style.display = 'none';
}

// ==================== RESOURCES PAGE ====================
function filterResources(category) {
    document.querySelectorAll('.resource-filters .filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    document.querySelectorAll('.resource-card').forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            card.classList.toggle('hidden', card.dataset.category !== category);
        }
    });
}

// ==================== PROGRESS PAGE ====================
function renderProgressPage() {
    document.getElementById('totalXP').textContent = userProgress.xp.toLocaleString();
    document.getElementById('lessonsCompleted').textContent = userProgress.completedLessons.length;
    document.getElementById('quizzesCompleted').textContent = userProgress.completedQuizzes.length;
    document.getElementById('currentStreak').textContent = userProgress.streak;

    // Path progress
    const list = document.getElementById('pathProgressList');
    let html = '';
    for (const [id, path] of Object.entries(learningPaths)) {
        const allLessons = path.modules.flatMap(m => m.lessons);
        const completed = allLessons.filter(l => userProgress.completedLessons.includes(l.id)).length;
        const total = allLessons.length;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

        html += `
            <div class="path-progress-item" style="cursor:pointer" onclick="showPath('${id}')">
                <div class="path-progress-icon ${path.iconClass}">${path.icon}</div>
                <div class="path-progress-info">
                    <div class="path-progress-name">${path.title}</div>
                    <div class="path-progress-bar-wrapper">
                        <div class="path-progress-bar-fill" style="width:${percent}%"></div>
                    </div>
                </div>
                <div class="path-progress-percent">${percent}%</div>
            </div>
        `;
    }
    list.innerHTML = html;

    // Activity
    const activityEl = document.getElementById('activityList');
    if (userProgress.activity.length === 0) {
        activityEl.innerHTML = '<p class="empty-state">Complete lessons and quizzes to see your activity here.</p>';
    } else {
        let actHtml = '';
        userProgress.activity.slice(0, 10).forEach(act => {
            const path = learningPaths[act.pathId];
            const allLessons = path ? path.modules.flatMap(m => m.lessons) : [];
            const lesson = allLessons.find(l => l.id === act.lessonId);
            const date = new Date(act.date);
            const dateStr = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
            actHtml += `
                <div style="padding:12px 16px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:12px">
                    <div style="width:8px;height:8px;border-radius:50%;background:var(--success);flex-shrink:0"></div>
                    <div style="flex:1">
                        <div style="font-size:0.9rem"><strong>Completed:</strong> ${lesson ? lesson.title : act.lessonId}</div>
                        <div style="font-size:0.8rem;color:var(--text-lighter)">${path ? path.title : ''} — ${dateStr}</div>
                    </div>
                    <div style="font-size:0.85rem;font-weight:600;color:var(--primary)">+${act.xp} XP</div>
                </div>
            `;
        });
        activityEl.innerHTML = `<div style="border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden">${actHtml}</div>`;
    }
}

// ==================== UI UPDATES ====================
function updateUI() {
    document.getElementById('xpBadge').textContent = userProgress.xp + ' XP';
    document.getElementById('streakBadge').textContent = userProgress.streak + ' day streak';
}

// ==================== SCROLL EFFECTS ====================
window.addEventListener('resize', () => {
    const panel = document.getElementById('nextLessonPanel');
    if (panel && panel.classList.contains('nlp-visible')) positionNextLessonPanel();
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// ==================== INIT ====================
updateUI();

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
            <p>Search Engine Optimisation (SEO) is the practice of improving your website so it appears higher in search engine results when people search for topics related to your business. The goal is simple: get more of the right people to find your website through organic (non-paid) search.</p>

            <p>When someone types a query into Google, the search engine evaluates hundreds of pages and decides which ones best answer that query. SEO is the process of making sure your pages are among those top results.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>SEO is not about tricking search engines. It's about genuinely being the best result for a given search query — and making sure search engines can understand that.</p>
            </div>

            <h2>Why SEO Matters for Marketers</h2>
            <p>Organic search is consistently one of the largest sources of website traffic for most businesses. Here's why it matters:</p>
            <ul>
                <li><strong>Free traffic</strong> — Unlike paid ads, you don't pay per click. Once you rank, the traffic comes without ongoing ad spend.</li>
                <li><strong>High intent</strong> — People searching on Google are actively looking for information, products, or services. This makes search traffic highly valuable.</li>
                <li><strong>Compounding returns</strong> — A well-optimised page can generate traffic for months or years. Paid ads stop the moment you stop paying.</li>
                <li><strong>Trust and credibility</strong> — Users tend to trust organic results more than ads.</li>
            </ul>

            <h2>The Three Pillars of SEO</h2>
            <p>All SEO work falls into three main categories:</p>
            <ol>
                <li><strong>Technical SEO</strong> — Making sure search engines can crawl and index your site properly. This includes site speed, mobile friendliness, and site structure.</li>
                <li><strong>On-Page SEO</strong> — Optimising the content and HTML of individual pages. This includes title tags, headers, content quality, and keyword usage.</li>
                <li><strong>Off-Page SEO</strong> — Building your site's authority through external signals, primarily backlinks from other websites.</li>
            </ol>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>New to SEO? Don't try to master everything at once. Start with on-page SEO (writing great content for your audience), then layer in technical and off-page work as you grow.</p>
            </div>

            <h2>SEO vs Paid Search</h2>
            <p>Many marketers wonder whether to invest in SEO or paid search (Google Ads). The short answer: both have their place.</p>
            <ul>
                <li><strong>SEO</strong> is a long-term investment. It takes time to build but delivers compounding value.</li>
                <li><strong>Paid search</strong> delivers immediate visibility but costs money for every click.</li>
                <li>The best marketers use both — paid search for immediate results and testing, SEO for sustainable growth.</li>
            </ul>

            <h2>What You'll Learn in This Path</h2>
            <p>By the end of this learning path, you'll understand:</p>
            <ul>
                <li>How search engines discover and rank content</li>
                <li>How to research keywords your audience is actually searching for</li>
                <li>How to optimise your pages to rank higher</li>
                <li>How to build your site's authority through link building</li>
                <li>How to measure and report on SEO performance</li>
            </ul>
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
        }
    },
    'seo-1-2': {
        title: 'How Google Crawls, Indexes, and Ranks Pages',
        body: `
            <h2>The Three Stages of Search</h2>
            <p>Before a page appears in search results, it goes through three stages: crawling, indexing, and ranking. Understanding this process is fundamental to doing SEO well.</p>

            <h2>Stage 1: Crawling</h2>
            <p>Google uses automated programs called "crawlers" (or "spiders") to discover web pages. The main crawler is called Googlebot.</p>
            <p>Googlebot finds pages by:</p>
            <ul>
                <li>Following links from pages it already knows about</li>
                <li>Reading XML sitemaps submitted by website owners</li>
                <li>Using data from various Google services</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>If a page has no links pointing to it and isn't in a sitemap, Google may never discover it. This is why internal linking and sitemaps matter.</p>
            </div>

            <h2>Stage 2: Indexing</h2>
            <p>After crawling a page, Google tries to understand what it's about. This is called indexing. During indexing, Google:</p>
            <ul>
                <li>Analyses the text content, images, and videos on the page</li>
                <li>Stores information about the page in its massive database (the "index")</li>
                <li>Notes signals like the page title, headings, and key phrases</li>
            </ul>
            <p>Not all pages get indexed. Google may skip pages that are low quality, duplicate, or blocked by the site owner.</p>

            <h2>Stage 3: Ranking</h2>
            <p>When someone searches, Google looks through its index to find the most relevant and useful pages. It then ranks them using hundreds of factors (called "ranking signals").</p>
            <p>Key ranking factors include:</p>
            <ul>
                <li><strong>Relevance</strong> — How well the page matches the search query</li>
                <li><strong>Quality</strong> — The depth, accuracy, and usefulness of the content</li>
                <li><strong>Authority</strong> — How many high-quality websites link to this page</li>
                <li><strong>User experience</strong> — Page speed, mobile friendliness, and ease of use</li>
                <li><strong>Freshness</strong> — How recently the content was updated (for time-sensitive topics)</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>You can check if your pages are indexed by searching <code>site:yourdomain.com</code> in Google. This shows all indexed pages from your site.</p>
            </div>

            <h2>What This Means for Your SEO Strategy</h2>
            <p>Understanding this three-stage process tells you exactly what to focus on:</p>
            <ol>
                <li><strong>Make your site crawlable</strong> — Use clear navigation, internal links, and submit a sitemap</li>
                <li><strong>Make your content indexable</strong> — Write unique, high-quality content that's easy for Google to understand</li>
                <li><strong>Earn rankings</strong> — Create the most useful content for your target keywords and build authority through backlinks</li>
            </ol>
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
        }
    },
    'seo-1-3': {
        title: 'Understanding Search Intent',
        body: `
            <h2>What is Search Intent?</h2>
            <p>Search intent (also called "user intent") is the reason behind a search query — what the person actually wants when they type something into Google.</p>
            <p>Understanding search intent is one of the most important skills in SEO. If your content doesn't match what the searcher wants, it won't rank — no matter how well it's optimised.</p>

            <h2>The Four Types of Search Intent</h2>

            <h3>1. Informational Intent</h3>
            <p>The user wants to learn something.</p>
            <ul>
                <li>"what is SEO"</li>
                <li>"how to bake sourdough bread"</li>
                <li>"marketing funnel stages"</li>
            </ul>
            <p><strong>Best content format:</strong> Blog posts, guides, tutorials, videos</p>

            <h3>2. Navigational Intent</h3>
            <p>The user wants to reach a specific website or page.</p>
            <ul>
                <li>"HubSpot login"</li>
                <li>"Google Analytics"</li>
                <li>"Ahrefs blog"</li>
            </ul>
            <p><strong>Best content format:</strong> Your homepage or key landing pages</p>

            <h3>3. Commercial Investigation</h3>
            <p>The user is researching before making a decision.</p>
            <ul>
                <li>"best SEO tools"</li>
                <li>"Semrush vs Ahrefs"</li>
                <li>"email marketing platform reviews"</li>
            </ul>
            <p><strong>Best content format:</strong> Comparison guides, reviews, "best of" lists</p>

            <h3>4. Transactional Intent</h3>
            <p>The user is ready to take action (buy, sign up, download).</p>
            <ul>
                <li>"buy running shoes online"</li>
                <li>"Ahrefs pricing"</li>
                <li>"free SEO audit tool"</li>
            </ul>
            <p><strong>Best content format:</strong> Product pages, pricing pages, landing pages</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Many marketers try to rank a product page for an informational query. For example, targeting "what is email marketing" with a pricing page. This rarely works because the intent doesn't match.</p>
            </div>

            <h2>How to Determine Search Intent</h2>
            <p>The simplest method: search the keyword yourself and look at what Google already ranks.</p>
            <ol>
                <li>Search your target keyword in Google</li>
                <li>Look at the top 5 results</li>
                <li>Note the content type (blog, product page, video?)</li>
                <li>Note the content format (guide, listicle, comparison?)</li>
                <li>Note the angle (beginner-focused, budget-focused, specific year?)</li>
            </ol>
            <p>The results Google already shows are your strongest signal. Google has tested what satisfies users for that query — match it.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Always check search intent before writing content. Spending hours creating a detailed guide is wasted if Google shows product pages for that keyword.</p>
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
        }
    },

    // ==================== PAID SEARCH LESSONS ====================
    'ps-1-1': {
        title: 'How Paid Search Works (The Auction Model)',
        body: `
            <h2>What is Paid Search?</h2>
            <p>Paid search advertising (also called PPC — Pay-Per-Click) lets you place ads at the top of search engine results pages. When someone searches for a keyword you're targeting, your ad can appear above the organic results.</p>
            <p>The two major paid search platforms are <strong>Google Ads</strong> (dominant globally) and <strong>Microsoft Advertising</strong> (Bing, Yahoo, and partner sites).</p>

            <h2>The Auction Model</h2>
            <p>Every time someone searches, an instant auction happens behind the scenes. Here's how it works:</p>
            <ol>
                <li><strong>You choose keywords</strong> — The search terms you want your ads to show for</li>
                <li><strong>You set a bid</strong> — The maximum you're willing to pay per click</li>
                <li><strong>Someone searches</strong> — Google checks which advertisers are targeting that keyword</li>
                <li><strong>The auction runs</strong> — Google evaluates all eligible ads and decides which to show, and in what order</li>
                <li><strong>Ads appear</strong> — Winning ads are displayed, and you only pay when someone clicks</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The highest bidder doesn't always win. Google uses <strong>Ad Rank</strong> — a combination of your bid, ad quality, expected click-through rate, and landing page experience. A lower bid with a better ad can beat a higher bid with a poor ad.</p>
            </div>

            <h2>The Ad Rank Formula</h2>
            <p>Ad Rank determines your ad position. It's calculated as:</p>
            <p><strong>Ad Rank = Bid × Quality Score × Expected Impact of Extensions</strong></p>
            <p>This means you can improve your position by:</p>
            <ul>
                <li>Increasing your bid (costs more money)</li>
                <li>Improving your Quality Score (free and sustainable)</li>
                <li>Adding useful ad extensions (free)</li>
            </ul>

            <h2>How You Pay</h2>
            <p>You don't actually pay your maximum bid. You pay just enough to beat the advertiser below you — this is called <strong>second-price auction</strong> (though Google's system is more complex now).</p>
            <p>For example: if your max bid is £5 and the next advertiser's Ad Rank requires you to pay £3.20 to stay above them, you pay £3.20 per click.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Focus on Quality Score first. Improving your ad relevance, click-through rate, and landing page experience can dramatically lower your cost-per-click while maintaining or improving your ad position.</p>
            </div>

            <h2>Why Paid Search is Powerful</h2>
            <ul>
                <li><strong>Intent-based</strong> — People are actively searching for what you offer</li>
                <li><strong>Measurable</strong> — You can track every click, conversion, and pound spent</li>
                <li><strong>Fast</strong> — Unlike SEO, you can appear at the top of results within hours</li>
                <li><strong>Controllable</strong> — You set budgets, targeting, and schedules precisely</li>
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
            <h2>Why Structure Matters</h2>
            <p>Good account structure is the foundation of every successful paid search campaign. A well-organised account gives you better control, clearer reporting, and typically lower costs.</p>

            <h2>The Three Levels</h2>
            <p>Google Ads accounts are organised in a hierarchy:</p>

            <h3>1. Account Level</h3>
            <p>Your top-level container. One account per business is typical. Here you set billing, user access, and account-wide settings.</p>

            <h3>2. Campaign Level</h3>
            <p>Campaigns are your major organisational units. Each campaign has its own:</p>
            <ul>
                <li><strong>Budget</strong> — Daily or monthly spend limit</li>
                <li><strong>Targeting</strong> — Geographic locations, languages, devices</li>
                <li><strong>Bidding strategy</strong> — How you want to optimise (clicks, conversions, etc.)</li>
                <li><strong>Network</strong> — Search, Display, Shopping, etc.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Best Practice</div>
                <p>Organise campaigns by theme, product line, or marketing objective. For example: "Brand Terms", "Competitor Terms", "Product A — Search", "Product B — Search".</p>
            </div>

            <h3>3. Ad Group Level</h3>
            <p>Inside each campaign, ad groups contain closely related keywords and the ads that target them. Think of ad groups as "topic clusters."</p>
            <ul>
                <li>Each ad group should focus on one tight theme</li>
                <li>Keywords in the same ad group should be closely related</li>
                <li>Ads in the group should be directly relevant to those keywords</li>
            </ul>

            <h2>The Golden Rule of Structure</h2>
            <p><strong>Keep your ad groups tightly themed.</strong> When keywords and ads are closely matched, your Quality Score improves, your costs decrease, and your ads become more relevant to searchers.</p>

            <h2>Example Structure</h2>
            <p>For a shoe retailer:</p>
            <ul>
                <li><strong>Campaign:</strong> Running Shoes</li>
                <li><strong>Ad Group 1:</strong> Men's Running Shoes (keywords: "men's running shoes", "running shoes for men")</li>
                <li><strong>Ad Group 2:</strong> Women's Running Shoes (keywords: "women's running shoes", "ladies running shoes")</li>
                <li><strong>Ad Group 3:</strong> Trail Running Shoes (keywords: "trail running shoes", "off-road running shoes")</li>
            </ul>
            <p>Each ad group gets ads written specifically for that theme, making them more relevant and improving performance.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Dumping all keywords into one ad group. This makes your ads generic and kills your Quality Score. Take the time to group related keywords together.</p>
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
            <p>When you add keywords to your campaigns, you need to tell Google how closely a search query must match your keyword before your ad can appear. This is done through <strong>match types</strong>.</p>

            <h2>The Three Match Types</h2>

            <h3>1. Broad Match</h3>
            <p>The widest reach. Your ad may show for searches that are related to your keyword, including synonyms, related topics, and variations.</p>
            <ul>
                <li>Keyword: <code>running shoes</code></li>
                <li>Could match: "best trainers for jogging", "athletic footwear", "marathon shoe reviews"</li>
            </ul>
            <p><strong>When to use:</strong> When you want maximum reach, especially with Smart Bidding which can optimise within broad match.</p>

            <h3>2. Phrase Match</h3>
            <p>Your ad shows for searches that include the meaning of your keyword. The query must contain your keyword concept in the right order.</p>
            <ul>
                <li>Keyword: <code>"running shoes"</code></li>
                <li>Could match: "best running shoes for flat feet", "buy running shoes online"</li>
                <li>Won't match: "shoes for running errands" (different meaning)</li>
            </ul>
            <p><strong>When to use:</strong> When you want a balance of reach and control.</p>

            <h3>3. Exact Match</h3>
            <p>The tightest control. Your ad shows only for searches that have the same meaning as your keyword.</p>
            <ul>
                <li>Keyword: <code>[running shoes]</code></li>
                <li>Could match: "running shoes", "shoes for running"</li>
                <li>Won't match: "best running shoes 2026" or "running shoe reviews"</li>
            </ul>
            <p><strong>When to use:</strong> When you want precise targeting and tight budget control.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Over the years, Google has made all match types broader. Even "exact match" now matches close variants. This makes negative keywords even more important.</p>
            </div>

            <h2>Negative Keywords: Your Defence System</h2>
            <p>Negative keywords prevent your ads from showing for irrelevant searches. They're just as important as the keywords you target.</p>
            <p>For example, if you sell premium running shoes, you might add these negatives:</p>
            <ul>
                <li><code>-free</code> (don't want people looking for free shoes)</li>
                <li><code>-cheap</code> (wrong audience for premium products)</li>
                <li><code>-repair</code> (not looking to buy)</li>
                <li><code>-used</code> (you sell new products)</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Review your Search Terms Report weekly. It shows exactly what people searched before clicking your ad. Add any irrelevant terms as negatives. This is one of the highest-impact optimisation tasks in paid search.</p>
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
            <h2>The Anatomy of a Search Ad</h2>
            <p>Google search ads (Responsive Search Ads) have several components:</p>
            <ul>
                <li><strong>Headlines</strong> — Up to 15 headlines (30 characters each). Google tests combinations and shows up to 3 at once.</li>
                <li><strong>Descriptions</strong> — Up to 4 descriptions (90 characters each). Google shows up to 2 at once.</li>
                <li><strong>Display URL path</strong> — Short text that appears in the URL (e.g., /running-shoes)</li>
                <li><strong>Extensions</strong> — Additional information like sitelinks, callouts, phone numbers</li>
            </ul>

            <h2>Principles of Effective Ad Copy</h2>

            <h3>1. Match the Search Intent</h3>
            <p>Your ad should directly address what the searcher is looking for. If someone searches "buy running shoes online", your headline should include those concepts.</p>

            <h3>2. Include the Keyword</h3>
            <p>Having the search term (or close variation) in your headline improves relevance and Quality Score. It also appears <strong>bold</strong> in the search results, catching the eye.</p>

            <h3>3. Highlight Your Unique Value</h3>
            <p>What makes you different from every other advertiser? Include:</p>
            <ul>
                <li>Specific offers ("20% Off This Week")</li>
                <li>Social proof ("Rated 4.8/5 by 10,000+ Customers")</li>
                <li>Unique benefits ("Free Next-Day Delivery")</li>
                <li>Urgency ("Limited Stock Available")</li>
            </ul>

            <h3>4. Include a Clear Call to Action</h3>
            <p>Tell people what to do: "Shop Now", "Get a Free Quote", "Book Your Demo", "Download the Guide".</p>

            <h3>5. Use Numbers and Specifics</h3>
            <p>"Save 30%" is more compelling than "Big Savings". "500+ 5-Star Reviews" beats "Highly Rated".</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Write at least 8-10 varied headlines and 3-4 descriptions. Google's machine learning will test combinations and find the best-performing mix. Pin your most important headline to position 1 if it must always show.</p>
            </div>

            <h2>Common Ad Copy Mistakes</h2>
            <ul>
                <li><strong>Too generic</strong> — "We're the best" tells the searcher nothing specific</li>
                <li><strong>No differentiation</strong> — If your ad looks like everyone else's, there's no reason to click yours</li>
                <li><strong>Missing CTA</strong> — Always tell the user what action to take</li>
                <li><strong>Ignoring the landing page</strong> — Your ad promise must match what the user finds when they click</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Important</div>
                <p>Google now uses Responsive Search Ads (RSAs) as the default format. You provide multiple headlines and descriptions, and Google's AI assembles the best combination for each search. Provide variety in your assets so Google has meaningful options to test.</p>
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
            <p>Social media advertising is one of the fastest-growing areas of digital marketing. Unlike search advertising (where you target people based on what they're searching), social advertising targets people based on <strong>who they are</strong> — their demographics, interests, behaviours, and connections.</p>

            <h2>The Major Platforms</h2>

            <h3>Meta (Facebook & Instagram)</h3>
            <p>The largest social advertising platform. Nearly 3 billion monthly active users across Facebook and Instagram. Best for:</p>
            <ul>
                <li>B2C businesses of all sizes</li>
                <li>Ecommerce and direct-to-consumer brands</li>
                <li>Local businesses</li>
                <li>Lead generation</li>
            </ul>

            <h3>LinkedIn</h3>
            <p>The professional network with 900+ million members. Best for:</p>
            <ul>
                <li>B2B marketing and lead generation</li>
                <li>Recruiting and employer branding</li>
                <li>Professional services marketing</li>
                <li>Targeting by job title, company, and industry</li>
            </ul>

            <h3>TikTok</h3>
            <p>The fastest-growing platform with over 1 billion monthly users. Best for:</p>
            <ul>
                <li>Reaching younger demographics (18-34)</li>
                <li>Brand awareness through creative content</li>
                <li>Ecommerce (especially with TikTok Shop)</li>
                <li>Viral and trend-driven campaigns</li>
            </ul>

            <h3>Snapchat</h3>
            <p>Strong with younger audiences, especially 13-24 year olds. Best for:</p>
            <ul>
                <li>Reaching Gen Z</li>
                <li>AR (augmented reality) experiences</li>
                <li>Local and event-based marketing</li>
            </ul>

            <h3>Pinterest</h3>
            <p>A visual discovery platform where users actively plan purchases. Best for:</p>
            <ul>
                <li>Home decor, fashion, food, and lifestyle brands</li>
                <li>Products with strong visual appeal</li>
                <li>Reaching users in "planning mode"</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Insight</div>
                <p>Each platform has a different user mindset. Facebook users are socialising. LinkedIn users are in professional mode. TikTok users want entertainment. Pinterest users are planning. Your creative and messaging must match the platform mindset.</p>
            </div>

            <h2>Social Ads vs Search Ads</h2>
            <ul>
                <li><strong>Search ads</strong> = demand capture (people are already searching for solutions)</li>
                <li><strong>Social ads</strong> = demand generation (you're reaching people who might not be actively looking)</li>
            </ul>
            <p>The best marketing strategies use both: social to create awareness and interest, search to capture people when they're ready to act.</p>
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
            <p>Content marketing is the practice of creating and distributing valuable, relevant content to attract and retain a clearly defined audience — and ultimately drive profitable customer action.</p>
            <p>Instead of directly pitching your product, you provide genuinely useful information that helps your audience solve problems. In return, they trust you, remember you, and eventually buy from you.</p>

            <h2>Why Content Marketing Works</h2>
            <p>Content marketing works because it aligns with how modern consumers make decisions:</p>
            <ol>
                <li><strong>People research before buying</strong> — Most buyers consume 3-5 pieces of content before talking to sales</li>
                <li><strong>Trust is earned, not demanded</strong> — Helpful content builds trust over time</li>
                <li><strong>It compounds</strong> — A good blog post can drive traffic for years (unlike an ad that stops when you stop paying)</li>
                <li><strong>It supports every channel</strong> — Content fuels SEO, social media, email, and paid campaigns</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Content marketing is not about creating content for its own sake. It's about creating the right content for the right audience at the right stage of their journey.</p>
            </div>

            <h2>Content Marketing vs Traditional Advertising</h2>
            <ul>
                <li><strong>Traditional advertising</strong> interrupts people and says "buy this"</li>
                <li><strong>Content marketing</strong> attracts people by being genuinely helpful</li>
            </ul>
            <p>Think about it: would you rather read a helpful guide on "how to choose running shoes" or see a banner ad saying "Buy our shoes"? The guide builds trust. The ad just asks for money.</p>

            <h2>Types of Content Marketing</h2>
            <ul>
                <li><strong>Blog posts and articles</strong> — The backbone of most content strategies</li>
                <li><strong>Videos</strong> — Tutorials, explainers, behind-the-scenes</li>
                <li><strong>Podcasts</strong> — Audio content for commuters and multitaskers</li>
                <li><strong>Email newsletters</strong> — Direct relationship with your audience</li>
                <li><strong>Social media content</strong> — Short-form content for engagement</li>
                <li><strong>Ebooks and guides</strong> — In-depth content often used for lead generation</li>
                <li><strong>Case studies</strong> — Proof that your approach works</li>
                <li><strong>Infographics</strong> — Visual data and concepts</li>
            </ul>

            <h2>The Content Marketing Flywheel</h2>
            <p>The best content marketing creates a virtuous cycle:</p>
            <ol>
                <li>Create helpful content</li>
                <li>People find it through search and social</li>
                <li>They trust you and subscribe/follow</li>
                <li>You nurture them with more relevant content</li>
                <li>They become customers and advocates</li>
                <li>Advocates share your content, bringing more people in</li>
            </ol>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start with one content format you can do consistently (usually blogging). Quality and consistency beat volume. One excellent post per week outperforms five mediocre ones.</p>
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
            <p>Marketing analytics is the practice of measuring, managing, and analysing marketing performance data to maximise effectiveness and optimise return on investment.</p>
            <p>Without analytics, you're guessing. With analytics, you're making decisions based on evidence.</p>

            <h2>What Analytics Answers</h2>
            <p>Good marketing analytics answers critical questions:</p>
            <ul>
                <li><strong>Where is our traffic coming from?</strong> — Which channels drive visitors</li>
                <li><strong>What are visitors doing on our site?</strong> — Which pages they visit, how long they stay</li>
                <li><strong>What's converting?</strong> — Which campaigns and pages generate leads or sales</li>
                <li><strong>What's our ROI?</strong> — Are we making more than we're spending</li>
                <li><strong>Where are we losing people?</strong> — Where visitors drop off in the journey</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>"Half the money I spend on advertising is wasted; the trouble is I don't know which half." — John Wanamaker (1838-1922). Analytics exists to solve this exact problem.</p>
            </div>

            <h2>The Core Marketing Metrics</h2>
            <p>Every marketer should understand these foundational metrics:</p>

            <h3>Traffic Metrics</h3>
            <ul>
                <li><strong>Sessions</strong> — Number of visits to your website</li>
                <li><strong>Users</strong> — Number of unique visitors</li>
                <li><strong>Traffic source</strong> — Where visitors come from (organic, paid, social, direct, referral)</li>
            </ul>

            <h3>Engagement Metrics</h3>
            <ul>
                <li><strong>Bounce rate</strong> — Percentage of visitors who leave after viewing one page</li>
                <li><strong>Pages per session</strong> — How many pages visitors view on average</li>
                <li><strong>Average session duration</strong> — How long visitors spend on your site</li>
            </ul>

            <h3>Conversion Metrics</h3>
            <ul>
                <li><strong>Conversion rate</strong> — Percentage of visitors who complete a desired action</li>
                <li><strong>Cost per acquisition (CPA)</strong> — How much you spend to acquire one customer</li>
                <li><strong>Return on ad spend (ROAS)</strong> — Revenue generated per pound spent on ads</li>
            </ul>

            <h2>The Analytics Mindset</h2>
            <p>Good analysts don't just report numbers. They:</p>
            <ol>
                <li><strong>Ask the right questions</strong> — Start with "what do we need to know?" not "what data do we have?"</li>
                <li><strong>Look for patterns</strong> — Trends over time matter more than individual data points</li>
                <li><strong>Connect data to decisions</strong> — Every insight should lead to an action</li>
                <li><strong>Test assumptions</strong> — Use data to validate or disprove hypotheses</li>
            </ol>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Don't track everything — track what matters. Start with 3-5 key metrics that directly relate to your business goals. You can always add more later. Clarity beats comprehensiveness.</p>
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

    main.innerHTML = `
        <div class="lesson-breadcrumb">${path.title} <span>→</span> ${lesson.title}</div>
        <h1>${lesson.title}</h1>
        <div class="lesson-meta-bar">
            <span>${lesson.duration}</span>
            <span>+${lesson.xp} XP</span>
            ${isCompleted ? '<span style="color:var(--success);font-weight:600">Completed</span>' : ''}
        </div>
        <div class="lesson-body">
            ${bodyContent}
        </div>
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

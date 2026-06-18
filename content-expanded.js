// Expanded lesson content — loaded after app.js
Object.assign(lessonContent, {

    // ==================== SEO MODULE 2: KEYWORD RESEARCH ====================

    'seo-2-1': {
        title: 'How to Find Keywords People Actually Search For',
        body: `
            <h2>Starting With Seed Keywords</h2>
            <p>Keyword research is the foundation of every SEO strategy. It tells you what your audience is searching for so you can create content that meets their needs. The process starts with <strong>seed keywords</strong> — broad terms that describe your product, service, or topic.</p>
            <p>To brainstorm seed keywords, think about:</p>
            <ul>
                <li><strong>What you sell or offer</strong> — List your products, services, and core topics</li>
                <li><strong>How customers describe their problems</strong> — Use their language, not your internal jargon</li>
                <li><strong>What competitors rank for</strong> — Check their top pages for keyword ideas</li>
            </ul>

            <h2>Free Keyword Discovery Methods</h2>
            <p>You don't need expensive tools to start finding keywords. Google itself is your best free resource:</p>
            <ul>
                <li><strong>Google Autocomplete</strong> — Start typing a query and note what Google suggests. These are real searches people make.</li>
                <li><strong>People Also Ask</strong> — The expandable question boxes in search results reveal related queries and subtopics.</li>
                <li><strong>Related Searches</strong> — Scroll to the bottom of any search results page for more keyword variations.</li>
                <li><strong>Google Keyword Planner</strong> — Free inside Google Ads, it shows estimated search volumes and keyword ideas based on your seed terms.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Type an underscore _ in the middle of a Google search (e.g., "best _ for beginners") and autocomplete will fill in the blank with popular searches. This reveals keyword patterns you might never think of.</p>
            </div>

            <h2>Competitor Keyword Analysis</h2>
            <p>One of the fastest ways to find keywords is to look at what your competitors already rank for. Tools like Ahrefs, SEMrush, or Ubersuggest let you enter a competitor's domain and see their top-ranking keywords. Focus on keywords where competitors rank on page one but not in the top three — these represent realistic opportunities.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best keyword research combines multiple methods: brainstorming, Google's free tools, and competitor analysis. No single method gives you the full picture.</p>
            </div>

            <h2>Organising Your Keywords</h2>
            <p>Once you have a list, group keywords by topic and intent. A spreadsheet with columns for keyword, search volume, difficulty, and intent type (informational, commercial, transactional) keeps everything manageable. This grouped list becomes the backbone of your content plan.</p>
        `,
        quiz: {
            question: 'Which of these is the BEST free method to discover what people actually search for?',
            options: [
                'Asking your sales team what they think customers search',
                'Google Autocomplete and People Also Ask boxes',
                'Guessing based on your product names',
                'Copying your homepage text into a keyword tool'
            ],
            correct: 1,
            explanation: 'Google Autocomplete and People Also Ask reflect real search behaviour from millions of users. While sales team input is valuable for brainstorming, Google\'s own suggestions are based on actual search data.'
        }
    },

    'seo-2-2': {
        title: 'Keyword Difficulty and Search Volume',
        body: `
            <h2>What Search Volume Tells You</h2>
            <p><strong>Search volume</strong> is an estimate of how many times a keyword is searched per month. Higher volume means more potential traffic, but it also usually means more competition. Search volume is typically shown as a monthly average and can vary by country or region.</p>
            <p>Important caveats about search volume:</p>
            <ul>
                <li><strong>It's an estimate</strong> — Tools use different data sources, so numbers vary between platforms</li>
                <li><strong>Seasonality matters</strong> — "Christmas gifts" spikes in November, not July</li>
                <li><strong>Zero volume doesn't mean zero searches</strong> — Many valuable long-tail terms show as zero but still drive traffic</li>
            </ul>

            <h2>Understanding Keyword Difficulty</h2>
            <p>Keyword difficulty (KD) scores estimate how hard it will be to rank on page one for a given term. Most tools score this from 0 to 100. The score is primarily based on the strength and number of backlinks pointing to the pages that currently rank in the top results.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Keyword difficulty is relative to your site's authority. A KD of 40 might be easy for a large established site but nearly impossible for a brand-new blog. Always assess difficulty in context.</p>
            </div>

            <h2>Finding the Sweet Spot</h2>
            <p>The ideal keywords sit in the overlap between decent search volume and achievable difficulty. This is sometimes called the "keyword sweet spot." For newer sites, prioritise:</p>
            <ul>
                <li><strong>Low difficulty (KD 0–30)</strong> with moderate volume (100–1,000 searches/month)</li>
                <li><strong>High commercial intent</strong> — A keyword with 200 monthly searches that leads to sales is better than one with 10,000 searches from casual browsers</li>
                <li><strong>Topic authority</strong> — Keywords closely related to topics you already cover, where you can build clusters of supporting content</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Chasing only high-volume keywords is one of the biggest SEO mistakes. New sites should build authority with easier keywords first, then gradually target more competitive terms as domain strength grows.</p>
            </div>

            <h2>Putting It Together</h2>
            <p>Create a prioritised keyword list by scoring each keyword on volume, difficulty, and relevance to your business. A simple priority formula: <strong>Priority = (Volume × Relevance) ÷ Difficulty</strong>. This helps you focus your content efforts where they'll have the greatest impact.</p>
        `,
        quiz: {
            question: 'A new website should typically target keywords with which characteristics?',
            options: [
                'Highest search volume regardless of difficulty',
                'Low difficulty and moderate volume with commercial intent',
                'Only zero-volume keywords to avoid competition',
                'The same keywords as the market leader'
            ],
            correct: 1,
            explanation: 'New sites should target low-difficulty keywords with moderate volume and commercial intent. This builds domain authority gradually while still driving meaningful traffic that can convert.'
        }
    },

    'seo-2-3': {
        title: 'Long-Tail Keywords and Topic Clusters',
        body: `
            <h2>What Are Long-Tail Keywords?</h2>
            <p><strong>Long-tail keywords</strong> are longer, more specific search phrases — typically three or more words. While each individual long-tail keyword gets fewer searches, collectively they make up the majority of all search queries. More importantly, they tend to convert better because the searcher knows exactly what they want.</p>
            <p>Examples:</p>
            <ul>
                <li><strong>Head term:</strong> "running shoes" (high volume, high competition)</li>
                <li><strong>Long-tail:</strong> "best running shoes for flat feet under £100" (lower volume, much less competition, higher purchase intent)</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Long-tail keywords convert 2–3x better than head terms on average because they capture people further along in their decision-making process. Someone searching "buy Nike Pegasus 40 size 10" is much closer to purchasing than someone searching "running shoes."</p>
            </div>

            <h2>The Topic Cluster Model</h2>
            <p>Modern SEO rewards topical authority — showing search engines that you comprehensively cover a subject. The <strong>topic cluster model</strong> is a content architecture that organises your pages into interconnected groups:</p>
            <ul>
                <li><strong>Pillar page</strong> — A comprehensive, long-form page covering a broad topic (e.g., "The Complete Guide to Running Shoes")</li>
                <li><strong>Cluster pages</strong> — Individual pages that cover specific subtopics in depth (e.g., "Best Running Shoes for Flat Feet," "How to Choose Running Shoe Size")</li>
                <li><strong>Internal links</strong> — Every cluster page links to the pillar page and vice versa, creating a hub-and-spoke structure</li>
            </ul>

            <h2>Why Topic Clusters Work</h2>
            <p>Search engines understand topical relationships. When you have a pillar page linked to 10–15 cluster pages all covering related subtopics, Google recognises your site as an authority on that topic. This lifts rankings across the entire cluster, not just individual pages.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start by mapping your core topics (5–7 pillars), then brainstorm 10–20 subtopic keywords for each. Use keyword research to validate which subtopics have search demand. Build the pillar page first, then create cluster content over time.</p>
            </div>

            <h2>Building Your First Topic Cluster</h2>
            <p>Pick your strongest topic area. Write the pillar page as a broad overview (2,000+ words), then identify the most valuable long-tail subtopics. Create one cluster page per subtopic, each targeting a specific long-tail keyword. Link everything together and watch your topical authority grow.</p>
        `,
        quiz: {
            question: 'In a topic cluster model, what is the role of the pillar page?',
            options: [
                'A short page that links out to external resources',
                'A comprehensive page on a broad topic that links to related cluster pages',
                'A landing page designed only for paid traffic',
                'A technical sitemap page for search engines'
            ],
            correct: 1,
            explanation: 'The pillar page is a comprehensive overview of a broad topic that acts as the hub, linking to and from all related cluster pages. This structure signals topical authority to search engines.'
        }
    },

    // ==================== SEO MODULE 3: ON-PAGE SEO ====================

    'seo-3-1': {
        title: 'Title Tags, Meta Descriptions, and Headers',
        body: `
            <h2>Title Tags: Your Most Important On-Page Element</h2>
            <p>The <strong>title tag</strong> is the clickable headline that appears in search results. It is the single most important on-page SEO element because it directly tells search engines and users what your page is about.</p>
            <p>Best practices for title tags:</p>
            <ul>
                <li><strong>Keep it under 60 characters</strong> — Longer titles get truncated in search results</li>
                <li><strong>Put the primary keyword near the front</strong> — Front-loaded keywords carry more weight</li>
                <li><strong>Make it compelling</strong> — Your title competes with nine other results for the click</li>
                <li><strong>Each page needs a unique title</strong> — Duplicate titles confuse search engines</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Add power words like "Complete," "Ultimate," "Step-by-Step," or the current year to boost click-through rate. Compare: "SEO Guide" vs "The Complete SEO Guide (2024)" — the second gets more clicks.</p>
            </div>

            <h2>Meta Descriptions</h2>
            <p>The <strong>meta description</strong> is the summary text below the title in search results. While it doesn't directly affect rankings, it heavily influences click-through rate (CTR), which indirectly impacts your SEO performance.</p>
            <ul>
                <li><strong>Keep it under 155 characters</strong> — Google truncates longer descriptions</li>
                <li><strong>Include a call to action</strong> — "Learn how," "Discover," "Find out" encourage clicks</li>
                <li><strong>Include your target keyword</strong> — Google bolds matching words, making your result stand out</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Google often rewrites meta descriptions if it thinks its own snippet better matches the query. This is normal and happens to roughly 60–70% of pages. Still write good descriptions — they're used when they're relevant.</p>
            </div>

            <h2>Header Hierarchy (H1–H6)</h2>
            <p>Headers structure your content for both readers and search engines. Think of them as an outline:</p>
            <ul>
                <li><strong>H1</strong> — One per page, typically matches or closely resembles the title tag. This is your main heading.</li>
                <li><strong>H2</strong> — Major sections within the page. Use these to break content into logical chunks.</li>
                <li><strong>H3–H6</strong> — Subsections within H2 blocks. Use them for detailed breakdowns.</li>
            </ul>
            <p>Include relevant keywords in your headers naturally. Headers help Google understand your content structure and can directly generate featured snippet results.</p>
        `,
        quiz: {
            question: 'What is the recommended maximum length for a title tag?',
            options: [
                '30 characters',
                '60 characters',
                '100 characters',
                '160 characters'
            ],
            correct: 1,
            explanation: 'Title tags should be kept under 60 characters to avoid being truncated in search results. This ensures users see your full title and primary keyword.'
        }
    },

    'seo-3-2': {
        title: 'Content Optimisation for Search',
        body: `
            <h2>Writing Content That Search Engines Love</h2>
            <p>Content optimisation means creating pages that satisfy both search engines and human readers. The goal isn't keyword stuffing — it's creating genuinely useful content structured in a way that search engines can easily understand and rank.</p>

            <h2>Keyword Placement</h2>
            <p>Where you place your target keyword matters more than how often you use it:</p>
            <ul>
                <li><strong>Title tag and H1</strong> — Essential for signalling the page's main topic</li>
                <li><strong>First 100 words</strong> — Mention your keyword early in the content</li>
                <li><strong>Subheadings (H2/H3)</strong> — Use keyword variations naturally in section headers</li>
                <li><strong>Throughout the body</strong> — Use the keyword and related terms naturally. Aim for a natural reading experience, not a specific keyword density.</li>
                <li><strong>URL slug</strong> — Keep it short and include the primary keyword</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: E-E-A-T</div>
                <p>Google evaluates content on <strong>Experience, Expertise, Authoritativeness, and Trustworthiness</strong> (E-E-A-T). Show real experience with your topic, cite credible sources, display author credentials, and ensure your site looks trustworthy. This is especially critical for health, finance, and legal content.</p>
            </div>

            <h2>Content Length and Depth</h2>
            <p>There's no magic word count. The right length is whatever it takes to comprehensively answer the searcher's question. However, studies consistently show that longer, more thorough content tends to rank higher because it better satisfies user intent. Check what currently ranks for your target keyword and aim to be at least as thorough.</p>

            <h2>Formatting for Featured Snippets</h2>
            <p>Featured snippets appear at the top of search results in a box. To optimise for them:</p>
            <ul>
                <li>Answer the question directly in 40–60 words right after a relevant heading</li>
                <li>Use numbered or bulleted lists for step-by-step or list-based queries</li>
                <li>Use tables for comparison data</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Update your content regularly. Google favours fresh content, especially for topics that change over time. Add a "Last updated" date and review your top pages quarterly to keep them current and competitive.</p>
            </div>
        `,
        quiz: {
            question: 'What does E-E-A-T stand for in Google\'s content quality guidelines?',
            options: [
                'Engagement, Efficiency, Accuracy, Traffic',
                'Experience, Expertise, Authoritativeness, Trustworthiness',
                'Evaluation, Enhancement, Analytics, Testing',
                'Exposure, Engagement, Authority, Tracking'
            ],
            correct: 1,
            explanation: 'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses these criteria to assess content quality, particularly for topics that could impact people\'s health, finances, or safety.'
        }
    },

    'seo-3-3': {
        title: 'Internal Linking Strategy',
        body: `
            <h2>Why Internal Links Matter</h2>
            <p><strong>Internal links</strong> are hyperlinks that point from one page on your site to another page on the same site. They serve three critical functions: they help users navigate your content, they help search engines discover and crawl your pages, and they distribute ranking authority (link equity) throughout your site.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Internal links are one of the few SEO levers entirely within your control. Unlike backlinks, you don't need anyone else's permission. A well-planned internal linking structure can significantly boost underperforming pages.</p>
            </div>

            <h2>Types of Internal Links</h2>
            <ul>
                <li><strong>Navigational links</strong> — Your main menu, footer links, and breadcrumbs. These define your site's architecture.</li>
                <li><strong>Contextual links</strong> — Links within your content body that point to related pages. These carry the most SEO weight because they're editorially placed and relevant.</li>
                <li><strong>Related content links</strong> — "You might also like" or "Related articles" sections at the bottom of pages.</li>
            </ul>

            <h2>Anchor Text Best Practices</h2>
            <p>The clickable text of a link (anchor text) tells search engines what the target page is about. Use descriptive, keyword-rich anchor text rather than generic phrases like "click here." For example, link using "keyword research guide" instead of "read more about it here."</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Don't use identical anchor text for every internal link pointing to the same page. Vary your anchor text naturally. Over-optimised anchor text can look manipulative to search engines.</p>
            </div>

            <h2>Fixing Orphan Pages</h2>
            <p>An <strong>orphan page</strong> is a page with no internal links pointing to it. Search engines struggle to find and rank orphan pages because there's no path to crawl to them. Audit your site regularly to identify orphan pages and add relevant internal links to them from existing content.</p>

            <h2>Practical Internal Linking Process</h2>
            <p>Each time you publish new content, find 3–5 existing pages that naturally relate and add contextual links from those pages to the new one. Also add 2–3 links from the new page back to relevant existing content. This creates a web of interconnected content that strengthens your entire site.</p>
        `,
        quiz: {
            question: 'What is an orphan page?',
            options: [
                'A page that has been deleted from the site',
                'A page with no internal links pointing to it',
                'A page that only has external backlinks',
                'A page with a 404 error'
            ],
            correct: 1,
            explanation: 'An orphan page is a page that exists on your site but has no internal links pointing to it. Search engines struggle to discover these pages, which means they rarely get indexed or ranked.'
        }
    },

    'seo-3-4': {
        title: 'Image Optimisation and Alt Text',
        body: `
            <h2>Why Image Optimisation Matters</h2>
            <p>Images often account for the largest portion of a page's total file size. Unoptimised images slow down page load times, which hurts both user experience and search rankings. Google has explicitly stated that page speed is a ranking factor, and images are usually the biggest opportunity to improve it.</p>

            <h2>Choosing the Right File Format</h2>
            <ul>
                <li><strong>WebP</strong> — The current standard for web images. Offers 25–35% smaller files than JPEG/PNG with comparable quality. Supported by all modern browsers.</li>
                <li><strong>AVIF</strong> — Next-generation format with even better compression than WebP. Browser support is growing but not yet universal.</li>
                <li><strong>JPEG</strong> — Good fallback for photographs. Use quality settings of 75–85% for a good balance of quality and file size.</li>
                <li><strong>PNG</strong> — Use only when you need transparency. File sizes are larger than JPEG/WebP.</li>
                <li><strong>SVG</strong> — Ideal for logos, icons, and illustrations. Scales to any size without quality loss.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use the HTML <code>&lt;picture&gt;</code> element to serve WebP to supporting browsers and JPEG as a fallback. This gives you the best compression with universal compatibility.</p>
            </div>

            <h2>Writing Effective Alt Text</h2>
            <p><strong>Alt text</strong> (alternative text) describes an image for screen readers and search engines. It's critical for accessibility and helps your images appear in Google Image search results.</p>
            <ul>
                <li><strong>Be descriptive and specific</strong> — "Golden retriever playing fetch on a beach" not "dog"</li>
                <li><strong>Include keywords naturally</strong> — Only when they genuinely describe the image</li>
                <li><strong>Keep it under 125 characters</strong> — Screen readers may cut off longer text</li>
                <li><strong>Don't start with "image of" or "picture of"</strong> — Screen readers already announce it as an image</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Keyword-stuffing alt text hurts both accessibility and SEO. Writing "SEO SEO guide SEO tips SEO tutorial" as alt text for a screenshot looks spammy. Describe what the image actually shows.</p>
            </div>

            <h2>Lazy Loading and Image Sitemaps</h2>
            <p>Use <strong>lazy loading</strong> (the <code>loading="lazy"</code> attribute) on images below the fold so they only load as users scroll to them. This dramatically improves initial page load speed. For image-heavy sites, submit an <strong>image sitemap</strong> to help Google discover and index your images faster.</p>
        `,
        quiz: {
            question: 'Which image format generally offers the best compression for photographs on the web?',
            options: [
                'PNG',
                'SVG',
                'WebP',
                'BMP'
            ],
            correct: 2,
            explanation: 'WebP offers 25–35% smaller file sizes than JPEG with comparable quality, making it the current best standard for web photographs. It is supported by all modern browsers.'
        }
    },

    // ==================== SEO MODULE 4: TECHNICAL SEO ====================

    'seo-4-1': {
        title: 'Site Speed and Core Web Vitals',
        body: `
            <h2>Why Site Speed Matters for SEO</h2>
            <p>Google has confirmed that page speed is a ranking factor for both desktop and mobile searches. Slow pages also have higher bounce rates — studies show that 53% of mobile users abandon a site that takes longer than 3 seconds to load. Speed isn't just about SEO; it directly impacts conversions and revenue.</p>

            <h2>Core Web Vitals Explained</h2>
            <p>Core Web Vitals are Google's specific metrics for measuring user experience on a page:</p>
            <ul>
                <li><strong>Largest Contentful Paint (LCP)</strong> — Measures loading performance. How long until the largest visible element (hero image, heading block) fully renders. Target: under 2.5 seconds.</li>
                <li><strong>Interaction to Next Paint (INP)</strong> — Measures interactivity. How quickly the page responds when a user clicks, taps, or types. Target: under 200 milliseconds.</li>
                <li><strong>Cumulative Layout Shift (CLS)</strong> — Measures visual stability. How much the page layout shifts unexpectedly as it loads. Target: under 0.1.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Core Web Vitals are measured from real user data (field data), not just lab tests. Google uses the Chrome User Experience Report (CrUX) data from actual visitors to assess your site's performance.</p>
            </div>

            <h2>How to Measure Performance</h2>
            <p>Use these tools to audit your site speed:</p>
            <ul>
                <li><strong>PageSpeed Insights</strong> — Google's tool showing both lab and field data with specific recommendations</li>
                <li><strong>Google Search Console</strong> — The Core Web Vitals report shows site-wide performance trends</li>
                <li><strong>Lighthouse</strong> — Built into Chrome DevTools for detailed page-level audits</li>
            </ul>

            <h2>Common Speed Issues and Fixes</h2>
            <ul>
                <li><strong>Large images</strong> — Compress and serve in WebP format</li>
                <li><strong>Render-blocking resources</strong> — Defer non-critical CSS and JavaScript</li>
                <li><strong>No caching</strong> — Set proper browser cache headers for static assets</li>
                <li><strong>Layout shifts</strong> — Always specify width and height on images and embeds</li>
                <li><strong>Slow server response</strong> — Consider a CDN or upgrade hosting</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Focus on LCP first — it's usually the most impactful and easiest to improve. Compressing your hero image and preloading it can often cut LCP by over a second.</p>
            </div>
        `,
        quiz: {
            question: 'What does Largest Contentful Paint (LCP) measure?',
            options: [
                'How quickly a user can interact with the page',
                'How much the page layout shifts during loading',
                'How long until the largest visible element fully renders',
                'How many resources the page loads in total'
            ],
            correct: 2,
            explanation: 'LCP measures how long it takes for the largest visible content element (like a hero image or main heading) to fully render on screen. Google recommends an LCP of under 2.5 seconds.'
        }
    },

    'seo-4-2': {
        title: 'Mobile-First Indexing',
        body: `
            <h2>What Is Mobile-First Indexing?</h2>
            <p>Since 2019, Google predominantly uses the <strong>mobile version</strong> of your website for indexing and ranking — even for desktop search results. This means if content exists on your desktop site but not your mobile site, Google may not index it at all. Mobile-first indexing isn't a separate index; it means Google's crawler behaves as a mobile device.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Mobile-first indexing means your mobile site IS your site in Google's eyes. Every piece of content, structured data, and metadata you want indexed must be present and accessible on the mobile version.</p>
            </div>

            <h2>Responsive Design Is the Standard</h2>
            <p><strong>Responsive design</strong> — where the same HTML adapts to different screen sizes using CSS — is Google's recommended approach. It means:</p>
            <ul>
                <li>One URL for both mobile and desktop (no separate m.example.com)</li>
                <li>The same content is served to all devices</li>
                <li>CSS media queries adjust the layout for different screen widths</li>
                <li>No risk of content discrepancies between mobile and desktop versions</li>
            </ul>

            <h2>Common Mobile Usability Issues</h2>
            <p>Google Search Console flags these mobile usability problems that can hurt your rankings:</p>
            <ul>
                <li><strong>Text too small to read</strong> — Body text should be at least 16px</li>
                <li><strong>Clickable elements too close together</strong> — Buttons and links need adequate spacing for touch targets (at least 48px)</li>
                <li><strong>Content wider than screen</strong> — Horizontal scrolling frustrates users and signals poor mobile optimisation</li>
                <li><strong>Intrusive interstitials</strong> — Full-screen pop-ups that block content on mobile can result in ranking penalties</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Hiding content behind tabs or accordions on mobile used to be penalised, but Google now treats hidden content normally in mobile-first indexing. However, content behind "click to expand" should still load with the initial page HTML, not via additional JavaScript calls.</p>
            </div>

            <h2>Testing Mobile Friendliness</h2>
            <p>Use Chrome DevTools' device toolbar to simulate mobile views during development. Check Google Search Console's Mobile Usability report for site-wide issues. Test your key pages on actual mobile devices — simulators don't catch every issue.</p>
        `,
        quiz: {
            question: 'What does mobile-first indexing mean?',
            options: [
                'Google only shows your site in mobile search results',
                'Google uses the mobile version of your site for indexing and ranking',
                'You need a separate mobile website to rank',
                'Mobile pages rank higher than desktop pages automatically'
            ],
            correct: 1,
            explanation: 'Mobile-first indexing means Google predominantly uses the mobile version of your content for indexing and ranking, even for searches made on desktop. This is why responsive design is essential.'
        }
    },

    'seo-4-3': {
        title: 'Structured Data and Schema Markup',
        body: `
            <h2>What Is Structured Data?</h2>
            <p><strong>Structured data</strong> is code you add to your pages that helps search engines understand the content in a machine-readable way. While Google can read your text, structured data explicitly labels what things are — this is a recipe, that's a review rating, here's an event date. The most common format is <strong>JSON-LD</strong> (JavaScript Object Notation for Linked Data), which Google recommends.</p>

            <h2>Why It Matters: Rich Results</h2>
            <p>Structured data enables <strong>rich results</strong> — enhanced search listings with extra visual elements like star ratings, images, prices, FAQ dropdowns, and more. Rich results dramatically increase your click-through rate because they take up more visual space and provide immediately useful information.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Structured data doesn't directly boost rankings, but it can significantly increase CTR through rich results. Higher CTR means more traffic from the same ranking position — effectively multiplying your SEO results.</p>
            </div>

            <h2>Common Schema Types</h2>
            <ul>
                <li><strong>FAQ Schema</strong> — Displays expandable questions and answers directly in search results. Great for informational pages.</li>
                <li><strong>HowTo Schema</strong> — Shows step-by-step instructions with images. Ideal for tutorial content.</li>
                <li><strong>Product Schema</strong> — Displays price, availability, and review ratings. Essential for e-commerce.</li>
                <li><strong>Review/Rating Schema</strong> — Shows star ratings in search results. Works for products, services, and content.</li>
                <li><strong>Article Schema</strong> — Helps Google understand blog posts and news articles, including author and publish date.</li>
                <li><strong>LocalBusiness Schema</strong> — Displays business hours, address, and phone number. Critical for local SEO.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start with FAQ Schema — it's the easiest to implement, works on almost any page, and can significantly increase your SERP real estate. Add 3–5 genuine FAQs to your key pages with JSON-LD markup.</p>
            </div>

            <h2>Testing and Validating</h2>
            <p>Always validate your structured data before publishing. Use Google's <strong>Rich Results Test</strong> to check if your markup is eligible for rich results, and the <strong>Schema Markup Validator</strong> to check for syntax errors. Monitor the Enhancements reports in Google Search Console for ongoing issues.</p>
        `,
        quiz: {
            question: 'Which format does Google recommend for implementing structured data?',
            options: [
                'Microdata',
                'RDFa',
                'JSON-LD',
                'XML Schema'
            ],
            correct: 2,
            explanation: 'Google recommends JSON-LD (JavaScript Object Notation for Linked Data) for structured data implementation. It\'s the easiest to add and maintain because it sits in a script tag separate from your HTML content.'
        }
    },

    'seo-4-4': {
        title: 'Crawl Budget and XML Sitemaps',
        body: `
            <h2>Understanding Crawl Budget</h2>
            <p><strong>Crawl budget</strong> is the number of pages Googlebot will crawl on your site within a given time period. For small sites (under a few thousand pages), crawl budget is rarely a concern — Google will crawl everything. But for larger sites with tens of thousands of pages or more, managing crawl budget becomes critical.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Crawl budget is determined by two factors: <strong>crawl capacity</strong> (how fast Google can crawl without overloading your server) and <strong>crawl demand</strong> (how much Google wants to crawl based on popularity and freshness). You can influence both.</p>
            </div>

            <h2>Robots.txt</h2>
            <p>The <strong>robots.txt</strong> file tells search engine crawlers which pages or sections of your site they should or shouldn't crawl. It sits at your site's root (example.com/robots.txt) and uses simple directives:</p>
            <ul>
                <li><strong>Disallow</strong> — Block crawlers from specific URLs or directories</li>
                <li><strong>Allow</strong> — Override a broader Disallow for specific pages</li>
                <li><strong>Sitemap</strong> — Point crawlers to your XML sitemap location</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Robots.txt blocks crawling, not indexing. If other sites link to a page you've blocked in robots.txt, Google may still index the URL (showing it in results without a snippet). To prevent indexing, use a <code>noindex</code> meta tag instead.</p>
            </div>

            <h2>XML Sitemaps</h2>
            <p>An <strong>XML sitemap</strong> is a file that lists all the pages you want search engines to index. It helps crawlers discover pages they might miss through normal link-following. Best practices:</p>
            <ul>
                <li>Include only pages you want indexed (no noindexed pages, no redirects)</li>
                <li>Keep each sitemap under 50,000 URLs or 50MB</li>
                <li>Use a sitemap index file if you need multiple sitemaps</li>
                <li>Include the <code>lastmod</code> date — but only update it when content actually changes</li>
                <li>Submit your sitemap in Google Search Console</li>
            </ul>

            <h2>Canonical Tags and Duplicate Content</h2>
            <p>The <strong>canonical tag</strong> tells search engines which version of a page is the "official" one when duplicate or near-duplicate versions exist. This commonly happens with URL parameters, print versions, or HTTP/HTTPS variants. Always set a self-referencing canonical on every page, and point duplicate variations to the preferred URL.</p>
        `,
        quiz: {
            question: 'What is the difference between robots.txt Disallow and a noindex tag?',
            options: [
                'They do the same thing',
                'Robots.txt blocks crawling; noindex prevents indexing',
                'Noindex blocks crawling; robots.txt prevents indexing',
                'Robots.txt is for Google; noindex is for Bing'
            ],
            correct: 1,
            explanation: 'Robots.txt blocks crawlers from accessing a page, while a noindex meta tag allows crawling but tells search engines not to include the page in their index. They serve different purposes.'
        }
    },

    // ==================== SEO MODULE 5: LINK BUILDING AND AUTHORITY ====================

    'seo-5-1': {
        title: 'How Backlinks Work and Why They Matter',
        body: `
            <h2>What Are Backlinks?</h2>
            <p>A <strong>backlink</strong> (or inbound link) is a link from another website to yours. Backlinks have been a core ranking factor since Google's founding — the original PageRank algorithm was essentially a system for counting and weighting links between pages. Today, backlinks remain one of Google's top three ranking factors.</p>

            <h2>How Google Evaluates Links</h2>
            <p>Not all backlinks are equal. Google assesses link quality based on several signals:</p>
            <ul>
                <li><strong>Authority of the linking site</strong> — A link from a major news site carries far more weight than one from a brand-new blog</li>
                <li><strong>Relevance</strong> — Links from sites in your industry or topic area are more valuable than unrelated ones</li>
                <li><strong>Placement</strong> — Editorial links within content are worth more than links in footers or sidebars</li>
                <li><strong>Anchor text</strong> — The clickable text signals what the linked page is about</li>
                <li><strong>Uniqueness</strong> — Links from many different domains matter more than many links from one domain</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Think of backlinks as votes of confidence. A link from a respected, relevant website is like a recommendation from an industry expert. Google uses these "votes" to determine which pages deserve to rank highest.</p>
            </div>

            <h2>Dofollow vs Nofollow Links</h2>
            <p><strong>Dofollow</strong> links (the default) pass ranking authority to the linked page. <strong>Nofollow</strong> links include a <code>rel="nofollow"</code> attribute that tells Google not to pass authority. Google also introduced <code>rel="sponsored"</code> for paid links and <code>rel="ugc"</code> for user-generated content like comments.</p>
            <p>While nofollow links don't directly pass authority, Google now treats them as "hints" and they can still drive referral traffic and brand visibility.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Buying links or participating in link schemes violates Google's guidelines and can result in a manual penalty that devastates your rankings. Focus on earning links through valuable content and genuine relationships.</p>
            </div>

            <h2>Toxic Links and the Disavow Tool</h2>
            <p>Low-quality or spammy backlinks pointing to your site can sometimes hurt your rankings. If you identify toxic links — from link farms, hacked sites, or irrelevant foreign-language spam — you can use Google's <strong>Disavow Tool</strong> to ask Google to ignore them. However, use this sparingly — Google is generally good at ignoring spammy links on its own.</p>
        `,
        quiz: {
            question: 'Which backlink would typically carry the MOST SEO value?',
            options: [
                'A footer link from an unrelated directory site',
                'An editorial link within an article on a high-authority industry blog',
                'A sidebar link from a newly created blog',
                'A link in a blog comment section'
            ],
            correct: 1,
            explanation: 'Editorial links within content on high-authority, relevant sites carry the most SEO value because they combine authority, relevance, and prominent placement — the three key factors Google uses to evaluate link quality.'
        }
    },

    'seo-5-2': {
        title: 'Link Building Strategies That Actually Work',
        body: `
            <h2>Effective Link Building Approaches</h2>
            <p>Link building is the process of acquiring backlinks from other websites to your own. The best strategies focus on creating genuine value that makes other sites want to link to you. Here are the approaches that consistently deliver results.</p>

            <h2>Guest Posting</h2>
            <p>Writing articles for other websites in your industry is one of the most reliable link building methods. The key is targeting quality publications, not quantity:</p>
            <ul>
                <li>Identify reputable blogs and publications in your niche</li>
                <li>Pitch unique, valuable topics — not thinly veiled promotional content</li>
                <li>Include one natural contextual link back to your site</li>
                <li>Focus on sites with engaged audiences that could become your readers or customers</li>
            </ul>

            <h2>Broken Link Building</h2>
            <p>Find broken links on other websites that point to content similar to yours, then contact the site owner and suggest your content as a replacement. It works because you're helping them fix a problem while gaining a link.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use a tool like Ahrefs or Check My Links (Chrome extension) to find broken outbound links on resource pages in your industry. Create content that matches the dead page's topic, then email the webmaster offering your replacement.</p>
            </div>

            <h2>Creating Linkable Assets</h2>
            <p>The most sustainable link building strategy is creating content so useful that people link to it naturally:</p>
            <ul>
                <li><strong>Original research and data studies</strong> — Journalists and bloggers love citing original statistics</li>
                <li><strong>Comprehensive guides</strong> — "The definitive guide to X" that becomes a go-to reference</li>
                <li><strong>Free tools and calculators</strong> — Interactive tools attract links consistently over time</li>
                <li><strong>Infographics and visual assets</strong> — Easy to share and embed with attribution links</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best link building doesn't feel like link building. When you create genuinely exceptional content or tools, links come as a natural byproduct. Invest in being the best resource on your topic.</p>
            </div>

            <h2>Outreach That Gets Responses</h2>
            <p>Cold outreach for links works when you lead with value. Personalise every email, explain why your content benefits their audience, and keep it brief. Expect a 5–10% response rate from well-targeted outreach — volume and persistence matter.</p>
        `,
        quiz: {
            question: 'What is broken link building?',
            options: [
                'Building links to pages that return 404 errors on your own site',
                'Finding broken links on other sites and offering your content as a replacement',
                'Removing broken links from your own website',
                'Creating broken redirects to capture link equity'
            ],
            correct: 1,
            explanation: 'Broken link building involves finding dead links on other websites, creating content that matches what the dead page covered, then contacting the site owner to suggest your page as a replacement. It works because you\'re solving a problem for the webmaster.'
        }
    },

    'seo-5-3': {
        title: 'Digital PR and Content-Led Link Building',
        body: `
            <h2>What Is Digital PR?</h2>
            <p><strong>Digital PR</strong> combines traditional public relations with SEO, focusing on earning backlinks from news sites, magazines, and authoritative publications. Instead of just getting brand mentions, digital PR specifically targets linked coverage that boosts your site's search authority.</p>

            <h2>Creating Newsworthy Content</h2>
            <p>Journalists need stories. If you give them data, angles, and expert commentary, they'll link to you as the source. Content types that consistently earn press coverage:</p>
            <ul>
                <li><strong>Original data studies</strong> — Survey your customers, analyse public data, or compile industry benchmarks. "We analysed 10,000 X and found Y" is a proven formula.</li>
                <li><strong>Trend reports</strong> — Annual or quarterly reports on your industry with original insights</li>
                <li><strong>Reactive commentary</strong> — Quick expert responses to breaking news or trending topics</li>
                <li><strong>Index and ranking content</strong> — "The best cities for X" or "The most expensive Y by region"</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best digital PR content has a "shareability factor" — it surprises, challenges assumptions, or gives people something to talk about. Data that confirms what everyone already knows rarely gets coverage. Look for counterintuitive findings.</p>
            </div>

            <h2>Building Journalist Relationships</h2>
            <p>Long-term relationships with journalists are your most valuable digital PR asset. Build them by:</p>
            <ul>
                <li>Following and engaging with journalists on social media</li>
                <li>Responding to journalist requests on platforms like HARO, Qwoted, or ResponseSource</li>
                <li>Providing helpful expert quotes — even when there's no link in it for you</li>
                <li>Being a reliable, fast-responding source they can count on</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Set up alerts for journalist request services and respond within the first hour. Journalists on deadline choose the first quality response they get. Speed is often more important than perfection.</p>
            </div>

            <h2>Measuring Digital PR Success</h2>
            <p>Track links earned (quantity and quality), referring domain growth, organic traffic increases to linked pages, and brand mention volume. A successful digital PR campaign should build links you could never get through manual outreach alone.</p>
        `,
        quiz: {
            question: 'Which type of content is MOST likely to earn links from news publications?',
            options: [
                'A product comparison page',
                'An original data study with surprising findings',
                'A company blog post about a team event',
                'A FAQ page about your services'
            ],
            correct: 1,
            explanation: 'Original data studies with surprising or counterintuitive findings are the most effective content type for earning press coverage and links. Journalists need data to support their stories and will link to the source.'
        }
    },

    'seo-5-4': {
        title: 'Measuring SEO Success',
        body: `
            <h2>The Key SEO Metrics</h2>
            <p>SEO success isn't just about rankings. A comprehensive measurement approach tracks multiple metrics that together tell the full story of your organic search performance.</p>

            <h2>Primary SEO Metrics</h2>
            <ul>
                <li><strong>Organic traffic</strong> — The number of visitors arriving from unpaid search results. This is your north star metric. Track it in Google Analytics under the Organic Search channel.</li>
                <li><strong>Keyword rankings</strong> — Track positions for your target keywords. Focus on page-one visibility (positions 1–10) and movement trends rather than obsessing over individual positions.</li>
                <li><strong>Click-through rate (CTR)</strong> — The percentage of impressions that result in clicks. Found in Google Search Console. Low CTR with high impressions means your titles and descriptions need improvement.</li>
                <li><strong>Organic conversions</strong> — Traffic is meaningless without business outcomes. Track leads, sales, or sign-ups that come from organic search.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Always tie SEO metrics to business outcomes. Ranking improvements, traffic growth, and CTR are leading indicators — but conversions and revenue from organic search are what justify the investment.</p>
            </div>

            <h2>Supporting Metrics</h2>
            <ul>
                <li><strong>Domain authority/rating</strong> — Third-party metrics (Ahrefs DR, Moz DA) that estimate your site's backlink strength. Useful for benchmarking against competitors.</li>
                <li><strong>Indexed pages</strong> — How many of your pages Google has indexed. Check in Search Console's coverage report.</li>
                <li><strong>Core Web Vitals</strong> — Page experience metrics that affect rankings and user satisfaction.</li>
                <li><strong>Backlink growth</strong> — Track new referring domains monthly to measure link building momentum.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Checking rankings daily and reacting to small fluctuations wastes time and causes unnecessary stress. Rankings fluctuate naturally. Review keyword positions weekly or monthly and focus on trends over 3–6 months, not day-to-day changes.</p>
            </div>

            <h2>SEO Reporting Cadence</h2>
            <p>Set up a monthly SEO report covering: organic traffic trend, top-performing pages, keyword ranking changes, conversions from organic, new backlinks earned, and technical health status. Quarterly, do a deeper review including competitor benchmarking and strategy adjustments. SEO is a long game — expect meaningful results over 3–6 months, not days.</p>
        `,
        quiz: {
            question: 'Which metric is considered the primary "north star" for measuring SEO success?',
            options: [
                'Domain authority score',
                'Number of indexed pages',
                'Organic traffic and organic conversions',
                'Total number of backlinks'
            ],
            correct: 2,
            explanation: 'Organic traffic and organic conversions are the primary SEO success metrics because they directly measure whether your SEO efforts are driving real visitors and business outcomes from search.'
        }
    },

    // ==================== PAID SEARCH MODULE 2: CAMPAIGN MANAGEMENT ====================

    'ps-2-1': {
        title: 'Bidding Strategies Explained',
        body: `
            <h2>Understanding Bid Strategies</h2>
            <p>Your <strong>bid strategy</strong> tells Google Ads how to bid in each ad auction. Choosing the right strategy is one of the most impactful decisions you'll make — it directly controls how your budget is spent and what results you get.</p>

            <h2>Manual Bidding</h2>
            <ul>
                <li><strong>Manual CPC</strong> — You set the maximum cost-per-click for each keyword. Gives you full control but requires constant monitoring and adjustment. Best for: small accounts, learning the platform, or when you need precise control.</li>
                <li><strong>Enhanced CPC (ECPC)</strong> — You set bids manually, but Google can adjust them up or down based on the likelihood of conversion. A middle ground between manual and automated.</li>
            </ul>

            <h2>Automated (Smart) Bidding</h2>
            <p>Google's machine learning sets bids automatically based on your chosen goal:</p>
            <ul>
                <li><strong>Maximise Clicks</strong> — Gets as many clicks as possible within your budget. Good for driving traffic when you're not focused on conversions.</li>
                <li><strong>Maximise Conversions</strong> — Spends your budget to get the most conversions possible. Requires conversion tracking to be set up.</li>
                <li><strong>Target CPA</strong> — Aims to get conversions at a specific cost-per-acquisition you set. Best when you know your target acquisition cost.</li>
                <li><strong>Target ROAS</strong> — Optimises for a specific return on ad spend. Best for e-commerce with varying product values.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Smart Bidding uses auction-time signals — device, location, time of day, browser, search query, and more — to adjust bids for each individual auction. This level of optimisation is impossible to replicate manually.</p>
            </div>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Switching to Smart Bidding too early — before you have enough conversion data — leads to poor performance. Google recommends at least 30 conversions in the past 30 days before using Target CPA, and 50+ for Target ROAS. Start with Maximise Conversions to build data, then transition.</p>
            </div>
        `,
        quiz: {
            question: 'What is the minimum recommended number of conversions before switching to Target CPA bidding?',
            options: [
                '5 conversions in the past 30 days',
                '15 conversions in the past 30 days',
                '30 conversions in the past 30 days',
                '100 conversions in the past 30 days'
            ],
            correct: 2,
            explanation: 'Google recommends at least 30 conversions in the past 30 days before using Target CPA bidding. Without sufficient conversion data, the algorithm doesn\'t have enough information to bid effectively.'
        }
    },

    'ps-2-2': {
        title: 'Quality Score and Ad Rank',
        body: `
            <h2>What Is Quality Score?</h2>
            <p><strong>Quality Score</strong> is Google's rating of the quality and relevance of your keywords and ads, scored from 1 to 10. It's one of the most important metrics in Google Ads because it directly affects how much you pay per click and where your ads appear.</p>

            <h2>The Three Components</h2>
            <ul>
                <li><strong>Expected Click-Through Rate (CTR)</strong> — How likely your ad is to be clicked when shown. Based on your ad's historical CTR compared to other ads in the same position.</li>
                <li><strong>Ad Relevance</strong> — How closely your ad copy matches the intent behind the keyword. Your ad should directly address what the searcher is looking for.</li>
                <li><strong>Landing Page Experience</strong> — How relevant, useful, and easy to navigate your landing page is. The page should deliver on the promise made in your ad.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Each component is rated as Below Average, Average, or Above Average. A Quality Score of 7+ is generally good. Below 5 means you're paying significantly more per click than necessary.</p>
            </div>

            <h2>How Ad Rank Is Calculated</h2>
            <p>Your <strong>Ad Rank</strong> determines your ad position and whether your ad shows at all. The formula:</p>
            <p><strong>Ad Rank = Bid × Quality Score × Expected Impact of Extensions</strong></p>
            <p>This means a higher Quality Score lets you achieve the same ad position at a lower cost. An advertiser with a Quality Score of 8 bidding £2 can outrank an advertiser with a Quality Score of 4 bidding £3.</p>

            <h2>How to Improve Each Component</h2>
            <ul>
                <li><strong>Expected CTR</strong> — Write more compelling ad copy, include the keyword in headlines, use strong calls to action</li>
                <li><strong>Ad Relevance</strong> — Tightly theme your ad groups so ads closely match keywords. Use the keyword in your headline.</li>
                <li><strong>Landing Page</strong> — Ensure fast load times, mobile friendliness, relevant content that matches the ad, and clear calls to action</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Improving Quality Score from 5 to 7 can reduce your cost-per-click by up to 28%. Focus on landing page experience first — it's the component most advertisers neglect and often the easiest to improve.</p>
            </div>
        `,
        quiz: {
            question: 'Which of these is NOT a component of Google Ads Quality Score?',
            options: [
                'Expected click-through rate',
                'Ad relevance',
                'Monthly budget amount',
                'Landing page experience'
            ],
            correct: 2,
            explanation: 'Quality Score is based on three components: expected click-through rate, ad relevance, and landing page experience. Your budget amount does not affect Quality Score — it affects how often your ads show, not their quality rating.'
        }
    },

    'ps-2-3': {
        title: 'Conversion Tracking and Goals',
        body: `
            <h2>Why Conversion Tracking Is Essential</h2>
            <p>Without conversion tracking, you're flying blind. You might know how many clicks your ads get, but not whether those clicks lead to any valuable actions. <strong>Conversion tracking</strong> measures what happens after someone clicks your ad — do they buy, sign up, call, or fill out a form?</p>

            <h2>What Counts as a Conversion?</h2>
            <p>A conversion is any valuable action you define. Common conversion types:</p>
            <ul>
                <li><strong>Purchases</strong> — E-commerce transactions with revenue values</li>
                <li><strong>Form submissions</strong> — Lead gen forms, contact requests, quote requests</li>
                <li><strong>Phone calls</strong> — Calls from ads, calls from your website, calls of a minimum duration</li>
                <li><strong>Sign-ups</strong> — Newsletter subscriptions, account creations, free trial starts</li>
                <li><strong>App installs or in-app actions</strong></li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Set up both <strong>primary</strong> and <strong>secondary</strong> conversions. Primary conversions (purchases, qualified leads) drive your bidding strategy. Secondary conversions (add-to-cart, PDF downloads) provide supporting data without influencing automated bidding.</p>
            </div>

            <h2>Setting Up Google Ads Conversion Tracking</h2>
            <p>The standard setup involves placing a <strong>conversion tracking tag</strong> on the page users see after completing a conversion (like a "thank you" page). You can implement this directly with the Google Ads tag or through <strong>Google Tag Manager</strong> (GTM), which is more flexible and doesn't require editing your site's code for each new tag.</p>

            <h2>Attribution Windows</h2>
            <p>The <strong>attribution window</strong> defines how long after a click (or view) a conversion can be credited to your ad. The default is 30 days for click-through conversions and 1 day for view-through. This means if someone clicks your ad today and converts 15 days later, it still counts as a conversion from that ad.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Setting up conversion tracking but not testing it properly. Always verify conversions are firing correctly using Google Tag Assistant or GTM's preview mode before going live. Incorrect tracking leads to bad optimisation decisions.</p>
            </div>
        `,
        quiz: {
            question: 'What is the default click-through attribution window in Google Ads?',
            options: [
                '1 day',
                '7 days',
                '30 days',
                '90 days'
            ],
            correct: 2,
            explanation: 'The default click-through attribution window in Google Ads is 30 days. This means a conversion is attributed to an ad click if it occurs within 30 days of that click.'
        }
    },

    'ps-2-4': {
        title: 'Display Network vs Search Network',
        body: `
            <h2>Two Different Networks</h2>
            <p>Google Ads operates across two main networks that reach users in fundamentally different ways:</p>
            <ul>
                <li><strong>Search Network</strong> — Text ads shown on Google search results pages when users actively search for keywords. Users have high intent — they're looking for something specific.</li>
                <li><strong>Display Network</strong> — Visual banner and responsive ads shown across over 2 million websites, apps, and YouTube. Users are browsing passively — they're not actively searching for your product.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Search captures existing demand (people searching for what you offer). Display creates new demand (putting your brand in front of people who aren't searching yet). Both have a role, but they require very different strategies.</p>
            </div>

            <h2>When to Use Each Network</h2>
            <ul>
                <li><strong>Search is best for</strong> — Direct response, lead generation, e-commerce, capturing high-intent traffic, when you know what people search for</li>
                <li><strong>Display is best for</strong> — Brand awareness, remarketing (showing ads to past visitors), reaching broad audiences, visual products, top-of-funnel campaigns</li>
            </ul>

            <h2>Display Network Targeting Options</h2>
            <p>Since Display users aren't searching, targeting is based on who they are and what they're interested in:</p>
            <ul>
                <li><strong>Audience segments</strong> — In-market (actively researching a purchase), affinity (long-term interests), custom segments</li>
                <li><strong>Contextual targeting</strong> — Show ads on pages about specific topics or containing certain keywords</li>
                <li><strong>Placements</strong> — Choose specific websites where you want your ads to appear</li>
                <li><strong>Demographics</strong> — Target by age, gender, household income, parental status</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Running Search and Display in the same campaign. Google's default is to opt you into the Display Network on Search campaigns. Always uncheck "Display Network" in Search campaign settings — the two networks need completely different strategies, bids, and creative.</p>
            </div>

            <h2>Responsive Display Ads</h2>
            <p><strong>Responsive display ads</strong> are Google's default Display format. You provide headlines, descriptions, images, and logos, and Google automatically assembles them into ads that fit any available ad space. Provide multiple high-quality creative assets to give Google more combinations to test.</p>
        `,
        quiz: {
            question: 'Why should you avoid combining Search and Display networks in the same campaign?',
            options: [
                'Google doesn\'t allow it',
                'They require different strategies, bids, and creative approaches',
                'Display ads don\'t work alongside Search ads',
                'It\'s more expensive to run both networks'
            ],
            correct: 1,
            explanation: 'Search and Display networks target users in fundamentally different mindsets (active searching vs passive browsing), requiring different bidding strategies, ad formats, and creative approaches. Combining them prevents proper optimisation of either.'
        }
    },

    // ==================== PAID SEARCH MODULE 3: OPTIMISATION AND SCALING ====================

    'ps-3-1': {
        title: 'Search Query Reports and Refinement',
        body: `
            <h2>Search Terms vs Keywords</h2>
            <p>There's a crucial difference between <strong>keywords</strong> (what you bid on) and <strong>search terms</strong> (what users actually type). If you bid on the broad match keyword "running shoes," your ad might show for "cheap running shoes near me," "best running shoes 2024," or even "shoe repair running." The Search Terms Report reveals these actual queries.</p>

            <h2>Mining the Search Terms Report</h2>
            <p>The Search Terms Report in Google Ads shows you exactly what people searched before clicking your ad. Review it at least weekly to:</p>
            <ul>
                <li><strong>Find irrelevant queries</strong> — Searches that triggered your ads but aren't relevant to your business. These waste budget.</li>
                <li><strong>Discover new keyword opportunities</strong> — High-performing search terms you haven't added as keywords yet.</li>
                <li><strong>Understand user language</strong> — How real people phrase their searches, which can improve your ad copy.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Sort search terms by cost (highest first) to find the most expensive irrelevant queries. Adding these as negative keywords immediately reduces wasted spend. A single negative keyword can sometimes save hundreds of pounds per month.</p>
            </div>

            <h2>Adding Negative Keywords</h2>
            <p>When you find irrelevant search terms, add them as <strong>negative keywords</strong> to prevent your ads from showing for those queries again. Build negative keyword lists by theme (e.g., "jobs/careers," "free/cheap," "DIY") and apply them across campaigns.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Negative keywords are as important as your regular keywords. A well-maintained negative keyword list can reduce wasted spend by 20–30% and significantly improve your conversion rate and ROAS.</p>
            </div>

            <h2>Query Sculpting</h2>
            <p><strong>Query sculpting</strong> is the practice of using negative keywords to direct specific search terms to the most relevant ad group. If you have separate ad groups for "running shoes" and "trail running shoes," add "trail" as a negative in the general running shoes group. This ensures each query triggers the most relevant ad.</p>
        `,
        quiz: {
            question: 'What is the primary purpose of reviewing the Search Terms Report?',
            options: [
                'To see how many impressions your ads received',
                'To find irrelevant queries and new keyword opportunities',
                'To check your Quality Score',
                'To see which devices your ads appeared on'
            ],
            correct: 1,
            explanation: 'The Search Terms Report reveals the actual queries that triggered your ads. This helps you find irrelevant queries to add as negative keywords (reducing waste) and discover new high-performing search terms to add as keywords.'
        }
    },

    'ps-3-2': {
        title: 'Ad Extensions and Assets',
        body: `
            <h2>What Are Ad Extensions (Assets)?</h2>
            <p>Google now calls them <strong>assets</strong>, but many marketers still use the term "extensions." These are additional pieces of information that expand your ad beyond the basic headline and description, giving users more reasons to click and taking up more visual space in search results.</p>

            <h2>Key Extension Types</h2>
            <ul>
                <li><strong>Sitelink extensions</strong> — Additional links below your main ad pointing to specific pages (pricing, features, contact). Add at least 4 per campaign.</li>
                <li><strong>Callout extensions</strong> — Short text highlights like "Free Shipping," "24/7 Support," "No Contract." Use them for key selling points.</li>
                <li><strong>Structured snippets</strong> — Lists of specific offerings under a header (e.g., "Services: SEO, PPC, Content Marketing, Web Design").</li>
                <li><strong>Call extensions</strong> — Display a phone number. Users on mobile can tap to call directly. Essential for businesses that take phone leads.</li>
                <li><strong>Price extensions</strong> — Show pricing for products or services. Great for setting expectations before the click.</li>
                <li><strong>Image extensions</strong> — Add a visual image alongside your text ad. Can significantly boost CTR.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Extensions don't always show — Google decides when to display them based on ad position, relevance, and expected performance. But having them set up gives Google more options and generally improves Ad Rank, which can lower your CPC.</p>
            </div>

            <h2>Impact on Performance</h2>
            <p>Extensions typically improve CTR by 10–15% because they make your ad larger and more informative. They also directly factor into your Ad Rank calculation, meaning they can help you win higher positions without increasing your bids.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Set up every extension type that's relevant to your business. Even if Google doesn't always show them, having them available improves your Ad Rank. Review extension performance monthly and replace underperformers with new variations.</p>
            </div>
        `,
        quiz: {
            question: 'How do ad extensions (assets) affect Ad Rank?',
            options: [
                'They have no effect on Ad Rank',
                'They replace Quality Score in the Ad Rank calculation',
                'Their expected impact is factored into the Ad Rank calculation',
                'They only affect Ad Rank on mobile devices'
            ],
            correct: 2,
            explanation: 'The expected impact of extensions is factored directly into the Ad Rank calculation. This means having relevant extensions set up can help you achieve higher ad positions without increasing your bids.'
        }
    },

    'ps-3-3': {
        title: 'Audience Targeting in Search',
        body: `
            <h2>Adding Audiences to Search Campaigns</h2>
            <p>While Search campaigns primarily target keywords, you can layer audience targeting on top to bid differently for specific user segments or restrict your ads to only show to certain audiences.</p>

            <h2>Audience Types Available for Search</h2>
            <ul>
                <li><strong>In-market audiences</strong> — People actively researching or comparing products in a specific category (e.g., "in-market for CRM software"). Google identifies these users based on their recent search and browsing behaviour.</li>
                <li><strong>Affinity audiences</strong> — People with long-term interests in specific topics (e.g., "technology enthusiasts," "foodies"). These are broader and better for awareness.</li>
                <li><strong>Customer Match</strong> — Upload your customer email list and target those users (or similar users) when they search. Powerful for upselling and retention campaigns.</li>
                <li><strong>Remarketing lists (RLSA)</strong> — Target people who have previously visited your website. This is one of the most powerful audience types for Search.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Observation vs Targeting</div>
                <p><strong>Observation mode</strong> shows your ads to everyone but lets you see performance data and adjust bids for specific audiences. <strong>Targeting mode</strong> restricts your ads to ONLY show to people in the selected audiences. Start with Observation to learn, then switch to Targeting for proven segments.</p>
            </div>

            <h2>RLSA: Remarketing Lists for Search Ads</h2>
            <p>RLSA lets you customise your search campaigns for people who've previously visited your site. Use cases:</p>
            <ul>
                <li>Bid higher for past visitors searching your keywords (they're more likely to convert)</li>
                <li>Show different ad copy to returning visitors ("Welcome back — complete your order")</li>
                <li>Bid on broader keywords you normally wouldn't — knowing the searcher already knows your brand reduces the risk</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Create a "converters" audience list and exclude them from acquisition campaigns to avoid paying for clicks from existing customers. Then create a separate campaign targeting converters with upsell or repeat purchase messaging.</p>
            </div>
        `,
        quiz: {
            question: 'What is the difference between Observation and Targeting mode for audiences?',
            options: [
                'Observation costs more per click than Targeting',
                'Observation shows ads to everyone but lets you adjust bids; Targeting restricts ads to the selected audience only',
                'Targeting is only available for Display campaigns',
                'Observation works with Smart Bidding; Targeting does not'
            ],
            correct: 1,
            explanation: 'In Observation mode, your ads still show to everyone searching your keywords, but you can see performance data for the audience and adjust bids. In Targeting mode, ads only show to people who are in both your keyword and audience targeting.'
        }
    },

    'ps-3-4': {
        title: 'Smart Bidding and Automation',
        body: `
            <h2>How Machine Learning Bidding Works</h2>
            <p>Smart Bidding uses Google's machine learning to set bid amounts for each individual auction in real time. Unlike manual bidding where you set a single bid per keyword, Smart Bidding evaluates hundreds of signals per auction to determine the optimal bid.</p>

            <h2>Auction-Time Signals</h2>
            <p>Smart Bidding considers signals that you could never manually account for:</p>
            <ul>
                <li><strong>Device</strong> — Mobile, desktop, or tablet</li>
                <li><strong>Location</strong> — Physical location and location intent</li>
                <li><strong>Time of day and day of week</strong></li>
                <li><strong>Browser and operating system</strong></li>
                <li><strong>Search query</strong> — The actual terms typed, not just the matched keyword</li>
                <li><strong>Remarketing list membership</strong> — Whether the user has visited your site before</li>
                <li><strong>Ad creative</strong> — Which ad variant is shown</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Smart Bidding processes billions of signal combinations per auction — something no human team could replicate. Its advantage grows with more conversion data. This is why it's critical to have accurate conversion tracking before enabling Smart Bidding.</p>
            </div>

            <h2>Performance Max Campaigns</h2>
            <p><strong>Performance Max (PMax)</strong> is Google's most automated campaign type. It runs across all Google channels (Search, Display, YouTube, Gmail, Maps, Discover) from a single campaign. You provide creative assets and conversion goals, and Google's AI handles targeting, bidding, and placement.</p>

            <h2>Responsive Search Ads</h2>
            <p>Responsive Search Ads (RSAs) are now the default Search ad format. You provide up to 15 headlines and 4 descriptions, and Google tests combinations to find the best-performing variations. Provide diverse headlines covering different selling points, benefits, and calls to action.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Blindly accepting Google's auto-applied recommendations. While some recommendations are genuinely helpful, others — like expanding to broad match or adding Display network — often increase spend without proportional returns. Review each recommendation critically before applying.</p>
            </div>
        `,
        quiz: {
            question: 'What is Performance Max?',
            options: [
                'A bidding strategy that maximises clicks',
                'A campaign type that runs across all Google channels using AI',
                'A tool for maximising Quality Score',
                'A reporting feature for top-performing keywords'
            ],
            correct: 1,
            explanation: 'Performance Max is Google\'s most automated campaign type. It runs ads across all Google advertising channels (Search, Display, YouTube, Gmail, Maps, Discover) from a single campaign, using AI to optimise targeting, bidding, and creative.'
        }
    },

    'ps-3-5': {
        title: 'Shopping Ads and Performance Max',
        body: `
            <h2>How Shopping Ads Work</h2>
            <p><strong>Shopping ads</strong> display product images, prices, and store names directly in search results. Unlike Search ads where you bid on keywords, Shopping ads are triggered by your <strong>product feed</strong> — a structured data file containing all your product information. Google matches products from your feed to relevant search queries.</p>

            <h2>Google Merchant Center</h2>
            <p>The <strong>Google Merchant Center</strong> is where you upload and manage your product feed. Your feed must include required attributes for each product:</p>
            <ul>
                <li><strong>Title</strong> — Descriptive product name (include key attributes like brand, colour, size)</li>
                <li><strong>Description</strong> — Detailed product description</li>
                <li><strong>Price</strong> — Must match the price on your landing page exactly</li>
                <li><strong>Image</strong> — High-quality product photo on a clean background</li>
                <li><strong>Availability</strong> — In stock, out of stock, or preorder</li>
                <li><strong>GTIN/MPN</strong> — Unique product identifiers</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Your product title is the single most important feed attribute. Front-load it with the most searched terms: Brand + Product Type + Key Attributes. "Nike Air Max 90 Men's Running Shoes White Size 10" outperforms "White Shoes" massively.</p>
            </div>

            <h2>Standard Shopping vs Performance Max</h2>
            <p>Google has been pushing advertisers toward Performance Max for Shopping. Key differences:</p>
            <ul>
                <li><strong>Standard Shopping</strong> — You control product groups, bidding, and targeting. More transparent reporting. Being phased out for some features.</li>
                <li><strong>Performance Max</strong> — AI-driven across all channels. Less granular control but potentially wider reach. Google's preferred campaign type for e-commerce.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Neglecting feed optimisation. Many advertisers focus on bids and budgets but use poor product titles and low-quality images. Since Google uses your feed to match queries, a poorly optimised feed means your products simply won't show for relevant searches.</p>
            </div>

            <h2>Feed Optimisation Essentials</h2>
            <p>Optimise your feed like you'd optimise SEO: use keyword-rich titles, detailed descriptions, high-quality images, accurate pricing, and proper categorisation. Update your feed at least daily to keep availability and prices accurate.</p>
        `,
        quiz: {
            question: 'What determines which searches trigger your Shopping ads?',
            options: [
                'The keywords you bid on in your campaign',
                'Your product feed data matched to search queries by Google',
                'Your Quality Score and bid amount',
                'The display network targeting settings'
            ],
            correct: 1,
            explanation: 'Shopping ads don\'t use keyword bidding. Instead, Google matches your product feed data (titles, descriptions, attributes) to relevant search queries. This is why feed optimisation is so critical for Shopping ad performance.'
        }
    },

    'ps-3-6': {
        title: 'Paid Search Reporting and ROAS',
        body: `
            <h2>Key PPC Metrics to Track</h2>
            <p>Effective paid search reporting focuses on the metrics that tell you whether your campaigns are delivering profitable results:</p>
            <ul>
                <li><strong>Cost Per Click (CPC)</strong> — What you pay on average for each click</li>
                <li><strong>Click-Through Rate (CTR)</strong> — Percentage of impressions that result in clicks. Benchmark: 3–5% for Search.</li>
                <li><strong>Conversion Rate</strong> — Percentage of clicks that result in a conversion. Benchmark: 2–5% across industries.</li>
                <li><strong>Cost Per Acquisition (CPA)</strong> — Total cost divided by number of conversions</li>
                <li><strong>Return on Ad Spend (ROAS)</strong> — Revenue generated divided by ad spend</li>
            </ul>

            <h2>Calculating and Understanding ROAS</h2>
            <p><strong>ROAS = Revenue from Ads ÷ Cost of Ads</strong></p>
            <p>A ROAS of 4:1 means you earn £4 for every £1 spent. But "good" ROAS depends entirely on your margins. A business with 80% gross margins can be profitable at 2:1 ROAS, while a business with 20% margins needs at least 5:1.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>ROAS alone doesn't tell you profitability. You need to factor in cost of goods, overhead, and customer lifetime value. A campaign with 3:1 ROAS might be highly profitable if those customers return to buy again.</p>
            </div>

            <h2>Impression Share and Wasted Spend</h2>
            <p><strong>Impression share</strong> is the percentage of eligible impressions your ads actually received. Lost impression share (due to budget or rank) tells you how much opportunity you're missing. <strong>Wasted spend</strong> is money spent on clicks that don't convert — typically from irrelevant search queries or poorly performing keywords.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Build a weekly reporting dashboard with: total spend, conversions, CPA, ROAS, impression share, and top/bottom performing keywords. Monthly, add trend charts showing these metrics over time. Quarterly, benchmark against industry averages.</p>
            </div>

            <h2>Building Actionable PPC Reports</h2>
            <p>Good PPC reports don't just show numbers — they drive decisions. Structure reports around questions: Where are we spending the most? What's converting? Where are we wasting money? What should we test next? Every metric should lead to an action.</p>
        `,
        quiz: {
            question: 'If a campaign generates £8,000 in revenue from £2,000 in ad spend, what is the ROAS?',
            options: [
                '2:1',
                '4:1',
                '6:1',
                '8:1'
            ],
            correct: 1,
            explanation: 'ROAS = Revenue ÷ Ad Spend = £8,000 ÷ £2,000 = 4:1. This means for every £1 spent on ads, £4 in revenue was generated.'
        }
    },

    'ps-3-7': {
        title: 'Microsoft Ads: Key Differences and Opportunities',
        body: `
            <h2>Why Consider Microsoft Ads?</h2>
            <p><strong>Microsoft Ads</strong> (formerly Bing Ads) runs ads on Bing, Yahoo, and partner sites. While Bing has a much smaller market share than Google, it reaches a valuable audience that many advertisers overlook — meaning less competition and lower CPCs.</p>

            <h2>The Bing Audience</h2>
            <p>Bing users tend to skew older, have higher household incomes, and are more likely to be in professional roles. Key demographics:</p>
            <ul>
                <li><strong>Age</strong> — Higher proportion of 35–65+ users compared to Google</li>
                <li><strong>Income</strong> — Bing users tend to have above-average household income</li>
                <li><strong>Desktop heavy</strong> — Bing has a larger desktop share partly because it's the default search engine in Microsoft Edge and Windows</li>
                <li><strong>B2B potential</strong> — Many corporate computers use Bing as default, making it valuable for B2B advertisers</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Microsoft Ads typically delivers 20–40% lower CPCs than Google Ads for the same keywords, with comparable conversion rates. For many advertisers, this means better ROAS even with lower volume.</p>
            </div>

            <h2>Importing From Google Ads</h2>
            <p>The easiest way to get started is importing your Google Ads campaigns directly into Microsoft Ads. The import tool copies your campaign structure, keywords, ads, and settings. You can then adjust bids and budgets for the Bing marketplace.</p>

            <h2>Unique Microsoft Ads Features</h2>
            <ul>
                <li><strong>LinkedIn Profile Targeting</strong> — Target users by company, industry, and job function using LinkedIn data. This is exclusive to Microsoft Ads and extremely valuable for B2B.</li>
                <li><strong>Multimedia Ads</strong> — Rich visual ad formats unique to Microsoft</li>
                <li><strong>Microsoft Audience Network</strong> — Native ads across MSN, Outlook, and partner sites</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Don't just mirror your Google Ads bids. Bing is less competitive, so start with 20–30% lower bids and adjust based on performance. Monitor the auction differently — position 1 on Bing is often achievable at a fraction of the Google cost.</p>
            </div>
        `,
        quiz: {
            question: 'What unique targeting feature does Microsoft Ads offer that Google Ads does not?',
            options: [
                'In-market audience targeting',
                'Geographic targeting by postcode',
                'LinkedIn Profile Targeting (company, industry, job function)',
                'Custom intent audiences'
            ],
            correct: 2,
            explanation: 'Microsoft Ads offers LinkedIn Profile Targeting, which lets you target users by their company, industry, and job function using LinkedIn data. This is exclusive to Microsoft and particularly valuable for B2B advertisers.'
        }
    },

    'ps-3-8': {
        title: 'Scaling Campaigns Profitably',
        body: `
            <h2>The Scaling Challenge</h2>
            <p>Scaling paid search means increasing spend while maintaining (or not significantly reducing) your ROAS. The challenge is that increasing budget often leads to diminishing returns — you've already captured the most efficient clicks, and additional spend reaches less qualified audiences at higher costs.</p>

            <h2>Scaling Strategies</h2>
            <ul>
                <li><strong>Increase budgets gradually</strong> — Raise budgets by 15–20% at a time, not 100%. Sudden large increases can disrupt Smart Bidding algorithms and waste budget while the system re-learns.</li>
                <li><strong>Expand keyword coverage</strong> — Find new keyword opportunities through search term reports, competitor analysis, and broader match types. More keywords mean more qualified auctions to participate in.</li>
                <li><strong>Geographic expansion</strong> — If you're targeting one city, test expanding to the surrounding region. If you're in one country, test new markets.</li>
                <li><strong>Dayparting refinement</strong> — Analyse conversion rates by hour and day. Increase bids during high-converting hours and reduce them during low-performing periods.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>There's an efficiency frontier for every campaign — a point where additional spend delivers diminishing returns. The goal of scaling isn't to eliminate this frontier but to push it outward through better targeting, creative, and landing pages.</p>
            </div>

            <h2>Seasonal Adjustments</h2>
            <p>Most businesses have seasonal demand patterns. Plan budget increases around high-demand periods (Black Friday, back-to-school, tax season) and pull back during natural lulls. Use Google Ads' seasonality adjustments to tell Smart Bidding about expected short-term changes in conversion rates.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Scaling spend without improving creative and landing pages. If your conversion rate drops as you scale, the solution isn't just more budget — it's better ads and landing experiences. Always improve the funnel alongside spend increases.</p>
            </div>

            <h2>Knowing When to Stop Scaling</h2>
            <p>Track your marginal CPA and ROAS as you scale. When the marginal CPA of the next pound spent exceeds your profitability threshold, you've reached your efficient scaling limit for that channel. At that point, diversify to new channels rather than forcing more spend into a saturated one.</p>
        `,
        quiz: {
            question: 'By how much should you typically increase campaign budgets when scaling?',
            options: [
                '5% per month maximum',
                '15–20% at a time',
                'Double the budget immediately',
                '50% per week'
            ],
            correct: 1,
            explanation: 'Increase budgets by 15–20% at a time to give Smart Bidding algorithms time to adjust. Sudden large budget increases can disrupt the learning period and waste spend while the system recalibrates.'
        }
    },

    // ==================== SOCIAL ADS MODULE 1 (REMAINING) ====================

    'sa-1-2': {
        title: 'Choosing the Right Platform for Your Audience',
        body: `
            <h2>Platform Demographics Matter</h2>
            <p>Not every social platform is right for every business. The most common advertising mistake is spreading budget across every platform instead of focusing on where your audience actually spends time. Each platform has a distinct user base and use case.</p>

            <h2>Platform Breakdown</h2>
            <ul>
                <li><strong>Meta (Facebook & Instagram)</strong> — The broadest reach. Facebook skews 25–54, Instagram skews 18–40. Works for almost any B2C business and increasingly B2B. Best for: broad targeting, retargeting, e-commerce.</li>
                <li><strong>LinkedIn</strong> — The B2B platform. Professional audience with targeting by job title, company size, industry, and seniority. Higher CPCs but unmatched B2B targeting. Best for: SaaS, professional services, enterprise sales.</li>
                <li><strong>TikTok</strong> — Youngest audience (16–34 dominates). Creative-first platform where native, entertaining content wins. Best for: consumer brands, D2C, apps, reaching Gen Z and younger Millennials.</li>
                <li><strong>Pinterest</strong> — Visual discovery engine. Predominantly female audience (60%+) with high purchase intent. Best for: home decor, fashion, food, weddings, visual products.</li>
                <li><strong>Snapchat</strong> — Youngest audience alongside TikTok. Strong in AR advertising. Best for: brands targeting 13–25 year olds, local businesses, entertainment.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Match your platform to your buyer, not to what's trending. A B2B software company spending budget on TikTok because "it's hot right now" while ignoring LinkedIn is wasting money. Go where your customers are.</p>
            </div>

            <h2>B2B vs B2C Considerations</h2>
            <p>B2C brands generally have more platform flexibility because consumers use multiple social platforms personally. B2B brands should prioritise LinkedIn and Meta, where professional decision-makers can be targeted by role and industry.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start with ONE platform, master it, then expand. A £2,000/month budget split across five platforms (£400 each) will underperform compared to £2,000 focused on the one platform where your audience is most active.</p>
            </div>
        `,
        quiz: {
            question: 'Which platform is generally BEST for B2B advertising?',
            options: [
                'TikTok',
                'Pinterest',
                'LinkedIn',
                'Snapchat'
            ],
            correct: 2,
            explanation: 'LinkedIn is the strongest B2B advertising platform because it offers unmatched professional targeting by job title, company size, industry, and seniority — allowing you to reach business decision-makers directly.'
        }
    },

    'sa-1-3': {
        title: 'Campaign Objectives and the Marketing Funnel',
        body: `
            <h2>The Marketing Funnel on Social</h2>
            <p>Social advertising platforms organise campaign objectives around the marketing funnel — <strong>Awareness</strong>, <strong>Consideration</strong>, and <strong>Conversion</strong>. The objective you choose tells the platform's algorithm what outcome to optimise for, which fundamentally changes who sees your ad.</p>

            <h2>Objective Types</h2>
            <ul>
                <li><strong>Awareness objectives</strong> — Maximise reach and impressions. The platform shows your ad to as many people as possible. Use for brand building and top-of-funnel campaigns.</li>
                <li><strong>Consideration objectives</strong> — Drive traffic, engagement, video views, or lead form submissions. The platform targets users likely to take these mid-funnel actions.</li>
                <li><strong>Conversion objectives</strong> — Drive purchases, sign-ups, or other high-value actions. The platform targets users most likely to convert based on historical data.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Choosing a Traffic objective when you actually want sales. The algorithm will find people who click on ads — many of whom bounce immediately and never buy. If you want purchases, choose a Conversion objective and let the algorithm find buyers, even if it means fewer total clicks.</p>
            </div>

            <h2>How Platform Algorithms Use Objectives</h2>
            <p>When you select a Conversion objective, the platform analyses your past converters and finds new users with similar behaviour patterns. It will show your ad to fewer people overall but prioritise those most likely to take the desired action. This is why conversion data is so valuable — the more conversions you feed the algorithm, the smarter it gets.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Your objective choice is the most impactful campaign setting. An identical ad with identical targeting will deliver completely different results under an Awareness objective versus a Conversion objective. The algorithm optimises for exactly what you tell it to.</p>
            </div>

            <h2>Matching Objectives to Your Goals</h2>
            <p>New brands with no pixel data should start with Traffic or Engagement objectives to build data, then switch to Conversion once they have 50+ conversion events for the algorithm to learn from. Established brands should almost always use Conversion objectives for performance campaigns.</p>
        `,
        quiz: {
            question: 'Why is choosing a Traffic objective when you want sales a common mistake?',
            options: [
                'Traffic objectives cost more than Conversion objectives',
                'The algorithm optimises for clicks, not purchases — finding clickers who may never buy',
                'Traffic objectives don\'t allow ad creative',
                'Traffic campaigns can\'t use audience targeting'
            ],
            correct: 1,
            explanation: 'When you choose a Traffic objective, the algorithm finds people who are likely to click, not people who are likely to buy. Many clickers bounce without converting. A Conversion objective finds users with buying behaviour patterns.'
        }
    },

    // ==================== SOCIAL ADS MODULE 2: META ADVERTISING ====================

    'sa-2-1': {
        title: 'Meta Ads Manager: Structure and Setup',
        body: `
            <h2>The Three-Level Hierarchy</h2>
            <p>Meta Ads Manager organises everything into three levels, each controlling different aspects of your advertising:</p>
            <ul>
                <li><strong>Campaign level</strong> — Where you set your objective (awareness, traffic, conversions, etc.) and optionally enable Campaign Budget Optimisation (CBO).</li>
                <li><strong>Ad Set level</strong> — Where you define your audience targeting, placements, budget (if not using CBO), schedule, and optimisation event.</li>
                <li><strong>Ad level</strong> — Where you build the actual creative — images, videos, headlines, descriptions, and calls to action.</li>
            </ul>

            <h2>Campaign Budget Optimisation (CBO)</h2>
            <p><strong>CBO</strong> sets the budget at campaign level and lets Meta automatically distribute spend across ad sets based on performance. Instead of manually splitting budget, Meta's algorithm shifts more money to the best-performing ad sets in real time.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>CBO is generally recommended for campaigns with 3+ ad sets. It lets Meta's algorithm find the most efficient audience segments automatically. However, set minimum spend limits on ad sets if you need to ensure each audience gets tested fairly.</p>
            </div>

            <h2>Naming Conventions</h2>
            <p>A consistent naming convention saves you hours when reporting. A good format:</p>
            <ul>
                <li><strong>Campaign:</strong> [Objective] - [Product/Offer] - [Date]</li>
                <li><strong>Ad Set:</strong> [Audience Type] - [Audience Details]</li>
                <li><strong>Ad:</strong> [Format] - [Creative Concept] - [Variation]</li>
            </ul>
            <p>Example: "CONV - Summer Sale - Jun24 / LAL - Purchasers 1% / VIDEO - Testimonial - V2"</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use UTM parameters in every ad URL to track Meta traffic accurately in Google Analytics. Meta's reporting and GA4 will show different numbers due to attribution differences — having both gives you a more complete picture.</p>
            </div>

            <h2>Essential Account Settings</h2>
            <p>Before launching campaigns, verify: your Meta Pixel is installed, your Conversions API is set up, your domain is verified, you've configured aggregated event measurement, and your payment method is active. Missing any of these can cause tracking gaps or campaign delivery issues.</p>
        `,
        quiz: {
            question: 'What does Campaign Budget Optimisation (CBO) do?',
            options: [
                'Automatically creates new campaigns when budget runs out',
                'Sets budget at campaign level and distributes spend across ad sets based on performance',
                'Reduces your overall budget to save money',
                'Optimises your ad creative for better performance'
            ],
            correct: 1,
            explanation: 'CBO sets the budget at the campaign level and allows Meta\'s algorithm to automatically distribute spend across ad sets, shifting more money to the best-performing audiences in real time.'
        }
    },

    'sa-2-2': {
        title: 'Audience Targeting: Core, Custom, and Lookalike',
        body: `
            <h2>Three Audience Types</h2>
            <p>Meta offers three powerful audience targeting approaches, each suited to different campaign goals:</p>

            <h2>Core Audiences (Interest & Demographic Targeting)</h2>
            <p>Core audiences use Meta's built-in targeting options:</p>
            <ul>
                <li><strong>Demographics</strong> — Age, gender, location, language, education, job title</li>
                <li><strong>Interests</strong> — Based on pages liked, content engaged with, and activity patterns</li>
                <li><strong>Behaviours</strong> — Purchase behaviour, device usage, travel patterns</li>
            </ul>
            <p>Core audiences are best for prospecting when you don't have enough customer data for Custom or Lookalike audiences.</p>

            <h2>Custom Audiences</h2>
            <p>Custom Audiences let you target people who already have a relationship with your business:</p>
            <ul>
                <li><strong>Website visitors</strong> — People who visited specific pages (requires Meta Pixel)</li>
                <li><strong>Customer list</strong> — Upload email addresses or phone numbers to match with Meta users</li>
                <li><strong>Engagement</strong> — People who interacted with your Meta content, watched videos, or engaged with your Instagram profile</li>
                <li><strong>App activity</strong> — Users who took actions in your app</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Custom Audiences for retargeting typically deliver the highest ROAS because you're reaching people who already know your brand. Always create retargeting audiences for: website visitors (last 30/60/90 days), add-to-cart but no purchase, and past customers.</p>
            </div>

            <h2>Lookalike Audiences</h2>
            <p>Lookalike Audiences find new people similar to your existing customers. You provide a source audience (e.g., your customer list or website converters), and Meta finds users with similar characteristics. Lookalike size ranges from 1% (most similar) to 10% (broader reach).</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Build your Lookalike from your best customers, not all customers. A Lookalike based on your top 20% highest-value buyers will outperform one based on all purchasers. Quality of the source audience matters more than size.</p>
            </div>
        `,
        quiz: {
            question: 'What is a Lookalike Audience?',
            options: [
                'An audience of people who have visited your website',
                'An audience that targets users based on interests',
                'A new audience that resembles your existing customers based on Meta\'s data',
                'An audience created from your email subscriber list'
            ],
            correct: 2,
            explanation: 'A Lookalike Audience is created by Meta to find new people who share similar characteristics with an existing source audience (like your customers). It\'s a powerful prospecting tool for finding likely buyers.'
        }
    },

    'sa-2-3': {
        title: 'Ad Formats and Creative Best Practices',
        body: `
            <h2>Meta Ad Formats</h2>
            <ul>
                <li><strong>Single Image</strong> — The simplest format. Fast to produce and test. Works well for clear product shots or bold graphic messages.</li>
                <li><strong>Video</strong> — Highest engagement format. Short videos (15–30 seconds) work best. Square (1:1) or vertical (9:16) for mobile feeds and Stories/Reels.</li>
                <li><strong>Carousel</strong> — Multiple scrollable cards, each with its own image, headline, and link. Great for showcasing multiple products or telling a sequential story.</li>
                <li><strong>Collection</strong> — A cover image or video with product thumbnails below. Opens an Instant Experience (full-screen mobile storefront). Best for e-commerce.</li>
            </ul>

            <h2>Creative Principles That Work</h2>
            <p>Social ads compete with friends' posts, memes, and news for attention. Your creative needs to stop the scroll in under 2 seconds:</p>
            <ul>
                <li><strong>Hook immediately</strong> — Lead with your most compelling visual or statement. The first frame of video or the dominant element of an image must grab attention.</li>
                <li><strong>Show the product in use</strong> — People connect with seeing real usage, not just product photography</li>
                <li><strong>Use text overlays sparingly</strong> — Key message should be readable on mobile without squinting</li>
                <li><strong>Match the platform's native feel</strong> — Ads that look like organic content outperform polished TV-style creative</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Creative is the biggest performance lever in social advertising. Better targeting gives you incremental gains, but a great creative can 2–5x your results. Invest more time in creative testing than audience testing.</p>
            </div>

            <h2>Video Hook Strategies</h2>
            <p>For video ads, the first 3 seconds determine whether people watch or scroll past. Effective hooks include: asking a provocative question, showing a surprising result, leading with a bold claim, or starting with movement and colour contrast.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Create 3–5 different hooks for the same video and test them as separate ads. Often the same video body with a different opening will perform 2–3x better. The hook is where most creative tests should focus.</p>
            </div>
        `,
        quiz: {
            question: 'What is generally the biggest performance lever in social advertising?',
            options: [
                'Budget allocation',
                'Audience targeting precision',
                'Ad creative quality',
                'Time of day scheduling'
            ],
            correct: 2,
            explanation: 'Creative quality is the single biggest performance lever in social advertising. Better creative can 2–5x your results, while targeting improvements typically yield smaller incremental gains.'
        }
    },

    'sa-2-4': {
        title: 'The Meta Pixel and Conversions API',
        body: `
            <h2>What the Meta Pixel Does</h2>
            <p>The <strong>Meta Pixel</strong> is a piece of JavaScript code placed on your website that tracks visitor actions. When someone clicks your Meta ad and then takes an action on your site (views a product, adds to cart, purchases), the Pixel fires an event that reports back to Meta. This data is essential for:</p>
            <ul>
                <li><strong>Conversion tracking</strong> — Measuring which ads drive results</li>
                <li><strong>Optimisation</strong> — Feeding the algorithm data to find more converters</li>
                <li><strong>Retargeting</strong> — Building Custom Audiences based on website behaviour</li>
            </ul>

            <h2>Standard Events</h2>
            <p>Meta defines standard events for common actions. Using standard events (rather than custom names) lets Meta better optimise and report:</p>
            <ul>
                <li><strong>PageView</strong> — Fires on every page load</li>
                <li><strong>ViewContent</strong> — Product page views</li>
                <li><strong>AddToCart</strong> — Items added to shopping cart</li>
                <li><strong>InitiateCheckout</strong> — Checkout process started</li>
                <li><strong>Purchase</strong> — Transaction completed (include value and currency)</li>
                <li><strong>Lead</strong> — Form submission or sign-up</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The more conversion data your Pixel collects, the smarter Meta's algorithm becomes at finding your ideal customers. A Pixel with thousands of conversion events will dramatically outperform a fresh one. This data is your competitive moat.</p>
            </div>

            <h2>Conversions API (CAPI)</h2>
            <p>The <strong>Conversions API</strong> sends event data from your server directly to Meta, bypassing the browser. This is critical because browser-side tracking is increasingly unreliable due to iOS privacy changes, ad blockers, and cookie restrictions. CAPI ensures Meta receives your conversion data even when the Pixel can't fire.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Running only the Pixel without CAPI in 2024+. Browser-only tracking misses 20–40% of conversions due to iOS App Tracking Transparency and browser privacy features. Set up both Pixel AND CAPI for complete data and better optimisation.</p>
            </div>
        `,
        quiz: {
            question: 'Why is the Conversions API (CAPI) important alongside the Meta Pixel?',
            options: [
                'CAPI is cheaper than the Pixel',
                'CAPI replaces the need for any website code',
                'CAPI sends data server-side, capturing conversions that browser tracking misses',
                'CAPI automatically creates ad creative'
            ],
            correct: 2,
            explanation: 'The Conversions API sends conversion data from your server directly to Meta, bypassing browser limitations like ad blockers and iOS privacy restrictions. This captures the 20–40% of conversions that browser-only Pixel tracking misses.'
        }
    },

    'sa-2-5': {
        title: 'Meta Advantage+ and Automation',
        body: `
            <h2>Meta\'s Push Toward Automation</h2>
            <p>Meta has been progressively automating more of the advertising process through its <strong>Advantage+</strong> suite. These tools use machine learning to handle targeting, creative optimisation, and placements that advertisers previously controlled manually.</p>

            <h2>Key Advantage+ Features</h2>
            <ul>
                <li><strong>Advantage+ Shopping Campaigns</strong> — Fully automated campaigns for e-commerce. You provide creative assets and a product catalogue, and Meta handles all targeting, placement, and budget allocation. Often outperforms manually targeted campaigns for e-commerce.</li>
                <li><strong>Advantage+ Audience</strong> — Replaces detailed interest targeting with Meta's AI-driven audience finding. You can provide audience suggestions, but Meta will go beyond them if it finds better performers.</li>
                <li><strong>Advantage+ Creative</strong> — Automatically adjusts your creative with enhancements like brightness adjustments, aspect ratio changes, text variations, and music for Reels.</li>
                <li><strong>Advantage+ Placements</strong> — Distributes your ads across all Meta placements (Feed, Stories, Reels, Messenger, Audience Network) based on where they perform best.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Advantage+ works best when you give it more creative variety to work with. The AI needs options to test and optimise. Provide 5–10+ different creative concepts rather than slight variations of the same idea.</p>
            </div>

            <h2>When Automation Works vs Manual Control</h2>
            <p>Automation excels when you have large budgets, lots of conversion data, and broad targeting goals. Manual control is still valuable for small budgets, niche audiences, strict brand guidelines, or when you need to test specific hypotheses.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Don't fight the algorithm — feed it. The winning strategy is to shift your effort from manual targeting tweaks to creative production. Create more diverse ads, let Advantage+ find the right audience for each one, and focus your optimisation on creative performance.</p>
            </div>
        `,
        quiz: {
            question: 'What is the best strategy to maximise Advantage+ performance?',
            options: [
                'Set very narrow audience targeting',
                'Provide diverse creative assets and let the AI optimise',
                'Use only one ad format',
                'Limit placements to Facebook Feed only'
            ],
            correct: 1,
            explanation: 'Advantage+ works best with creative diversity. By providing many different creative concepts, you give the AI more options to test and optimise, allowing it to find winning combinations across audiences and placements.'
        }
    },

    // ==================== SOCIAL ADS MODULE 3: LINKEDIN, TIKTOK, AND BEYOND ====================

    'sa-3-1': {
        title: 'LinkedIn Ads for B2B Marketing',
        body: `
            <h2>Why LinkedIn for B2B</h2>
            <p>LinkedIn is the only major ad platform where you can target people by their professional attributes — job title, company name, industry, seniority, company size, and skills. For B2B marketers trying to reach decision-makers, this targeting precision is unmatched.</p>

            <h2>Campaign Manager and Objectives</h2>
            <p>LinkedIn Campaign Manager offers objectives across the funnel: Brand Awareness, Website Visits, Engagement, Video Views, Lead Generation, and Website Conversions. For most B2B campaigns, <strong>Lead Generation</strong> (using Lead Gen Forms) and <strong>Website Conversions</strong> deliver the best ROI.</p>

            <h2>Targeting Options</h2>
            <ul>
                <li><strong>Job title</strong> — Target specific roles (e.g., "Marketing Director," "CFO")</li>
                <li><strong>Company</strong> — Target employees of specific companies by name</li>
                <li><strong>Industry</strong> — Reach professionals in specific sectors</li>
                <li><strong>Seniority</strong> — Filter by level (Entry, Senior, Manager, Director, VP, C-Suite)</li>
                <li><strong>Company size</strong> — Target by employee count ranges</li>
                <li><strong>Skills and groups</strong> — Target members with specific listed skills or group memberships</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>LinkedIn CPCs are significantly higher than other platforms (£5–15+ per click is typical). This is because the audience is premium and targeting is precise. Evaluate LinkedIn on cost-per-qualified-lead, not cost-per-click — a £15 click that generates a £50,000 deal is excellent ROI.</p>
            </div>

            <h2>Ad Formats</h2>
            <ul>
                <li><strong>Sponsored Content</strong> — Native ads in the LinkedIn feed (single image, video, carousel)</li>
                <li><strong>Message Ads (InMail)</strong> — Direct messages to users' LinkedIn inboxes</li>
                <li><strong>Lead Gen Forms</strong> — Pre-filled forms that users can submit without leaving LinkedIn. Dramatically reduce friction and increase conversion rates.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Lead Gen Forms are LinkedIn's killer feature. Because the forms pre-fill with the user's LinkedIn profile data (name, email, job title, company), conversion rates are 2–5x higher than sending users to an external landing page.</p>
            </div>
        `,
        quiz: {
            question: 'Why do LinkedIn Lead Gen Forms typically have higher conversion rates than external landing pages?',
            options: [
                'They cost less per impression',
                'They pre-fill with the user\'s LinkedIn profile data, reducing friction',
                'They allow longer form descriptions',
                'They only show to premium LinkedIn members'
            ],
            correct: 1,
            explanation: 'Lead Gen Forms pre-fill with data from the user\'s LinkedIn profile (name, email, company, job title), dramatically reducing the effort required to submit. This lower friction results in 2–5x higher conversion rates.'
        }
    },

    'sa-3-2': {
        title: 'TikTok Ads: Creative-First Advertising',
        body: `
            <h2>TikTok\'s Unique Advertising Model</h2>
            <p>TikTok is fundamentally different from other ad platforms because <strong>creative quality is the primary driver of performance</strong>. The algorithm surfaces content based on engagement signals, not just targeting — meaning a brilliant ad shown to a broad audience will outperform a mediocre ad shown to a precisely targeted one.</p>

            <h2>TikTok Ads Manager</h2>
            <p>TikTok's ad platform follows a similar structure to Meta: Campaign → Ad Group → Ad. Key campaign objectives include Traffic, App Install, Conversions, and Lead Generation. The platform supports both automatic and manual bidding strategies.</p>

            <h2>Ad Formats</h2>
            <ul>
                <li><strong>In-Feed Ads</strong> — Full-screen vertical videos that appear in the For You feed. The bread and butter of TikTok advertising.</li>
                <li><strong>Spark Ads</strong> — Boost existing organic TikTok posts (yours or a creator's) as ads. These retain all organic engagement (likes, comments, shares) and feel more native.</li>
                <li><strong>TopView</strong> — Premium placement: the first ad users see when opening TikTok. Expensive but high-impact for brand awareness.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>"Don't make ads. Make TikToks." This is TikTok's own advice to advertisers. Polished, corporate-looking ads get skipped. Content that feels native, entertaining, and authentic performs dramatically better.</p>
            </div>

            <h2>Creative Best Practices</h2>
            <ul>
                <li><strong>Hook in the first second</strong> — TikTok users scroll fast. Open with movement, a surprising statement, or a question.</li>
                <li><strong>Shoot vertically (9:16)</strong> — Always full-screen vertical. Horizontal or square content looks out of place.</li>
                <li><strong>Use trending sounds and formats</strong> — Browse the TikTok Creative Center for trending audio and ad patterns.</li>
                <li><strong>Feature real people</strong> — User-generated-style content with real faces outperforms brand graphics.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use TikTok's Creative Center (free) to research top-performing ads in your industry. Study what hooks, formats, and styles work, then adapt them to your brand. Refreshing creative every 7–14 days prevents fatigue.</p>
            </div>
        `,
        quiz: {
            question: 'What type of creative performs best on TikTok?',
            options: [
                'Highly polished, corporate-style video ads',
                'Static image ads with long text descriptions',
                'Native-feeling, entertaining content that looks like organic TikToks',
                'Horizontal widescreen video advertisements'
            ],
            correct: 2,
            explanation: 'TikTok\'s own guidance is "Don\'t make ads. Make TikToks." Content that feels native, authentic, and entertaining dramatically outperforms polished corporate advertising on the platform.'
        }
    },

    'sa-3-3': {
        title: 'Snapchat Ads and AR Marketing',
        body: `
            <h2>Snapchat\'s Advertising Platform</h2>
            <p>Snapchat reaches a young, engaged audience — primarily 13–34 year olds — who spend an average of 30+ minutes daily on the app. While it has smaller overall reach than Meta or TikTok, Snapchat offers unique ad formats and typically lower CPMs for reaching younger demographics.</p>

            <h2>Ad Formats</h2>
            <ul>
                <li><strong>Snap Ads</strong> — Full-screen vertical video or image ads that appear between Stories or in the Discover feed. Can include swipe-up actions for websites, apps, or long-form video.</li>
                <li><strong>Story Ads</strong> — Branded tiles in the Discover section that open into a collection of 3–20 Snaps.</li>
                <li><strong>Collection Ads</strong> — Showcase multiple products with tappable tiles below a main image or video. Great for e-commerce.</li>
                <li><strong>Commercials</strong> — Non-skippable 6-second video ads within premium content. Guaranteed viewership but premium pricing.</li>
            </ul>

            <h2>AR Lenses: Snapchat\'s Unique Advantage</h2>
            <p>Snapchat pioneered <strong>augmented reality (AR) advertising</strong> through sponsored Lenses. These let users interact with branded AR effects using their camera — trying on products virtually, playing branded games, or using themed face filters.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>AR Lenses generate an average of 15–20 seconds of active engagement per user — far longer than any traditional ad format. Users also share Lenses with friends, creating organic amplification beyond your paid reach.</p>
            </div>

            <h2>Best Use Cases for Snapchat Ads</h2>
            <ul>
                <li>Reaching Gen Z audiences who are harder to find on Facebook</li>
                <li>App install campaigns (Snapchat performs strongly for mobile apps)</li>
                <li>Local business promotion (geofilters and location targeting)</li>
                <li>Product try-on experiences via AR (cosmetics, eyewear, fashion)</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Snapchat's CPMs are often 40–60% lower than Meta for the same young audience. If your target market is under 30, test Snapchat alongside TikTok and Instagram — you may find more efficient reach.</p>
            </div>
        `,
        quiz: {
            question: 'What makes Snapchat AR Lenses a uniquely powerful ad format?',
            options: [
                'They are the cheapest ad format available',
                'They generate 15–20 seconds of active user engagement and get shared organically',
                'They only appear to premium Snapchat users',
                'They require no creative production'
            ],
            correct: 1,
            explanation: 'AR Lenses generate an average of 15–20 seconds of active engagement — far longer than any standard ad — and users naturally share them with friends, creating organic amplification beyond your paid investment.'
        }
    },

    'sa-3-4': {
        title: 'Pinterest Ads for Discovery Marketing',
        body: `
            <h2>Pinterest as a Visual Search Engine</h2>
            <p>Pinterest isn't a social network in the traditional sense — it's a <strong>visual discovery and planning platform</strong>. Users come to Pinterest to find ideas, plan purchases, and discover new products. This makes Pinterest uniquely powerful for marketing because users have high commercial intent — they're actively looking for things to buy or try.</p>

            <h2>Ad Formats</h2>
            <ul>
                <li><strong>Standard Pins</strong> — Promoted static images that appear in search results and home feeds. The core ad format.</li>
                <li><strong>Video Pins</strong> — Autoplay video content. Works well for tutorials, demos, and lifestyle content.</li>
                <li><strong>Shopping Pins</strong> — Product pins with real-time pricing and availability pulled from your product catalogue. Users can purchase directly.</li>
                <li><strong>Idea Pins</strong> — Multi-page, story-like content for inspiration and how-to content. Great for brand awareness and engagement.</li>
                <li><strong>Carousel Pins</strong> — Multiple images users swipe through. Good for showcasing product collections or step-by-step processes.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Pinterest content has an incredibly long lifespan. While a Facebook post dies in hours and a tweet in minutes, a Pin can drive traffic for months or years. This means your ad spend on Pinterest can generate compounding returns long after the campaign ends.</p>
            </div>

            <h2>Targeting on Pinterest</h2>
            <ul>
                <li><strong>Keyword targeting</strong> — Target users searching for specific terms (like search advertising)</li>
                <li><strong>Interest targeting</strong> — Reach users based on their pinning behaviour and interests</li>
                <li><strong>Actalike audiences</strong> — Pinterest's version of lookalike audiences</li>
                <li><strong>Shopping retargeting</strong> — Retarget users who viewed specific products</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Plan Pinterest campaigns 2–3 months before seasonal events. Pinterest users plan ahead — they search for Christmas ideas in September and summer holiday inspiration in March. Start your seasonal campaigns earlier than on any other platform.</p>
            </div>
        `,
        quiz: {
            question: 'Why does Pinterest content have more lasting value than ads on other social platforms?',
            options: [
                'Pinterest ads are more expensive so they last longer',
                'Pins can drive traffic for months or years, while posts on other platforms die quickly',
                'Pinterest has fewer users so there is less competition',
                'Pinterest doesn\'t use an algorithm so all content is shown equally'
            ],
            correct: 1,
            explanation: 'Pinterest content has an exceptionally long lifespan compared to other platforms. A Pin can continue appearing in search results and feeds for months or years, meaning your ad investment generates compounding returns over time.'
        }
    },

    // ==================== SOCIAL ADS MODULE 4: ADVANCED SOCIAL STRATEGY ====================

    'sa-4-1': {
        title: 'Creative Testing Frameworks',
        body: `
            <h2>Why Structured Creative Testing Matters</h2>
            <p>Random creative changes don't produce reliable insights. A <strong>structured testing framework</strong> ensures you learn something from every test, build on winning patterns, and continuously improve performance rather than guessing.</p>

            <h2>What to Test (In Priority Order)</h2>
            <ol>
                <li><strong>Hook/opening</strong> — The first 1–3 seconds of video or the dominant visual element. This has the biggest impact on performance.</li>
                <li><strong>Creative concept</strong> — The core idea or angle (testimonial vs demo vs problem/solution vs lifestyle)</li>
                <li><strong>Format</strong> — Video vs image vs carousel</li>
                <li><strong>Copy and CTA</strong> — Headlines, body text, and call-to-action variations</li>
                <li><strong>Visual elements</strong> — Colours, fonts, layouts, product shots vs lifestyle images</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Test one variable at a time for clear learnings. If you change both the hook and the CTA simultaneously, you won't know which change caused the performance difference. Isolate variables to build reliable creative knowledge.</p>
            </div>

            <h2>The Testing Process</h2>
            <ol>
                <li><strong>Hypothesis</strong> — "Testimonial hooks will outperform product-first hooks because social proof drives trust"</li>
                <li><strong>Create variations</strong> — Keep everything identical except the variable you're testing</li>
                <li><strong>Run with equal budget</strong> — Give each variation the same spend to ensure fair comparison</li>
                <li><strong>Wait for significance</strong> — Don't call a winner too early. Need enough data for reliable conclusions.</li>
                <li><strong>Document and iterate</strong> — Record what you learned, then test the next variable on top of the winner</li>
            </ol>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Calling a winner after just a few hundred impressions. You need statistically meaningful data — typically 1,000+ impressions per variant at minimum. Premature conclusions lead to false learnings that misdirect future creative decisions.</p>
            </div>

            <h2>Recognising Creative Fatigue</h2>
            <p>Even winning creative eventually fatigues. Watch for: declining CTR over time, increasing CPA, rising frequency (same users seeing the ad too many times). When these signals appear, refresh creative with new hooks or concepts while maintaining winning elements.</p>
        `,
        quiz: {
            question: 'In creative testing priority, which element should you test FIRST?',
            options: [
                'CTA button colour',
                'Body copy length',
                'The hook or opening of the ad',
                'Image filter style'
            ],
            correct: 2,
            explanation: 'The hook (first 1–3 seconds of video or dominant visual element) has the biggest impact on ad performance because it determines whether users stop scrolling and pay attention. Test this before any other element.'
        }
    },

    'sa-4-2': {
        title: 'Attribution and Cross-Platform Measurement',
        body: `
            <h2>The Attribution Challenge</h2>
            <p>When a customer sees your ad on Instagram, clicks a Google ad a week later, and then converts through an email — who gets credit? <strong>Attribution</strong> is the process of assigning credit for conversions to the marketing touchpoints that influenced them. It's one of the hardest problems in digital marketing.</p>

            <h2>Platform Attribution Windows</h2>
            <p>Each ad platform has its own attribution settings that determine how it counts conversions:</p>
            <ul>
                <li><strong>Meta</strong> — Default: 7-day click, 1-day view</li>
                <li><strong>Google Ads</strong> — Default: 30-day click</li>
                <li><strong>TikTok</strong> — Default: 7-day click, 1-day view</li>
                <li><strong>LinkedIn</strong> — Default: 30-day click, 7-day view</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Adding up conversions reported by each platform will always exceed your actual total conversions. Every platform takes credit for the same conversion if the user interacted with multiple channels. This is called <strong>double counting</strong> and is inevitable with platform-reported attribution.</p>
            </div>

            <h2>Click-Through vs View-Through</h2>
            <ul>
                <li><strong>Click-through attribution</strong> — Credits a conversion when someone clicked your ad and later converted. Generally reliable and widely accepted.</li>
                <li><strong>View-through attribution</strong> — Credits a conversion when someone saw (but didn't click) your ad and later converted elsewhere. More controversial — the ad may or may not have influenced the purchase.</li>
            </ul>

            <h2>UTM Tracking for Cross-Platform Measurement</h2>
            <p>Use <strong>UTM parameters</strong> on all ad URLs to track performance in Google Analytics, giving you a single source of truth across platforms. This won't solve attribution perfectly, but it provides a consistent baseline for comparing channel performance.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>No attribution model is perfect. Use platform-reported data for optimising within each platform, UTM-tracked data in GA4 for cross-platform comparison, and incrementality testing for the most accurate picture of true impact.</p>
            </div>
        `,
        quiz: {
            question: 'Why does adding up each platform\'s reported conversions overstate your total conversions?',
            options: [
                'Platforms intentionally inflate their numbers',
                'Each platform claims credit for the same conversion when a user interacted with multiple channels',
                'Conversion tracking codes fire multiple times by accident',
                'View-through conversions are counted twice automatically'
            ],
            correct: 1,
            explanation: 'When a user interacts with ads on multiple platforms before converting, each platform independently claims credit for that same conversion. This double-counting is inherent to platform-reported attribution.'
        }
    },

    'sa-4-3': {
        title: 'Retargeting and Remarketing Strategies',
        body: `
            <h2>Why Retargeting Works</h2>
            <p><strong>Retargeting</strong> shows ads to people who have already interacted with your brand — visited your website, engaged with your content, or started but didn't complete a purchase. It works because these users are already familiar with you, making them far more likely to convert than cold audiences.</p>

            <h2>Types of Retargeting</h2>
            <ul>
                <li><strong>Website retargeting</strong> — Show ads to people who visited specific pages. Create segments: all visitors, product page viewers, cart abandoners, past purchasers.</li>
                <li><strong>Engagement retargeting</strong> — Target people who engaged with your social content, watched your videos (e.g., 75% video viewers), or interacted with your profile.</li>
                <li><strong>Customer list retargeting</strong> — Upload your email list to re-engage existing customers with upsells or win-back campaigns.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Funnel-based retargeting delivers the best results. Instead of showing the same ad to all past visitors, tailor your message to where they are in the funnel: product education for page viewers, urgency and offers for cart abandoners, complementary products for past buyers.</p>
            </div>

            <h2>Sequential Messaging</h2>
            <p>Rather than blasting the same ad repeatedly, use <strong>sequential messaging</strong> — a series of ads that tell a story over time:</p>
            <ol>
                <li>Day 1–3: Remind them of the product they viewed</li>
                <li>Day 4–7: Show social proof (reviews, testimonials)</li>
                <li>Day 8–14: Offer an incentive (discount, free shipping)</li>
                <li>Day 15+: Final urgency message or alternative product suggestions</li>
            </ol>

            <h2>Frequency Capping and Exclusions</h2>
            <p>Showing the same ad too many times annoys users and wastes budget. Set <strong>frequency caps</strong> (e.g., maximum 3 impressions per person per day) and always <strong>exclude converters</strong> — there's no point retargeting someone who already bought.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Not excluding recent purchasers from retargeting campaigns. Nothing frustrates customers more than seeing ads for a product they already bought. Always add a purchaser exclusion audience updated in real time.</p>
            </div>
        `,
        quiz: {
            question: 'What is sequential messaging in retargeting?',
            options: [
                'Showing the same ad repeatedly until the user converts',
                'A series of different ads that progress through a story or funnel over time',
                'Sending emails and ads at the same time',
                'Targeting users on multiple platforms simultaneously'
            ],
            correct: 1,
            explanation: 'Sequential messaging shows a planned series of different ads over time — progressing from reminder to social proof to incentive. This approach is more effective than showing the same ad repeatedly.'
        }
    },

    'sa-4-4': {
        title: 'Scaling Social Ad Spend Profitably',
        body: `
            <h2>Horizontal vs Vertical Scaling</h2>
            <p>There are two fundamental approaches to scaling social ad spend:</p>
            <ul>
                <li><strong>Vertical scaling</strong> — Increasing budget on existing winning campaigns. Simple but hits diminishing returns as the algorithm exhausts the best opportunities in your current audience.</li>
                <li><strong>Horizontal scaling</strong> — Creating new campaigns targeting new audiences, testing new creative concepts, or expanding to new platforms. More sustainable for long-term growth.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Sustainable scaling combines both approaches: vertically scale proven winners (gradually) while horizontally expanding with new audiences and creative. When vertical scaling hits diminishing returns, horizontal expansion opens new growth opportunities.</p>
            </div>

            <h2>Budget Increase Pacing</h2>
            <p>On Meta, increase budgets by no more than <strong>20% every 3–4 days</strong>. Larger jumps reset the learning phase, causing temporary performance drops while the algorithm recalibrates. On other platforms, similar gradual increases are recommended.</p>

            <h2>Creative Refresh Cadence</h2>
            <p>Creative fatigue is the primary limiter of scaling. As you spend more, your audience sees ads more frequently, and performance degrades. Plan for:</p>
            <ul>
                <li>New creative concepts every 2–4 weeks</li>
                <li>3–5 active ads per ad set at all times</li>
                <li>A creative pipeline that produces faster than ads fatigue</li>
            </ul>

            <h2>Audience Expansion</h2>
            <p>When your core audiences are saturated, expand by: testing broader Lookalike percentages (from 1% to 3–5%), layering new interest combinations, using Advantage+ audience suggestions, or testing new geographic markets.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Expecting the same CPA at 5x the spend. Scaling inherently means reaching less qualified audiences. Set realistic CPA targets that account for diminishing returns — a 20–30% increase in CPA may be acceptable if total profit grows.</p>
            </div>
        `,
        quiz: {
            question: 'What is the recommended maximum budget increase on Meta to avoid resetting the learning phase?',
            options: [
                '5% per week',
                '20% every 3–4 days',
                '50% per day',
                'Double the budget weekly'
            ],
            correct: 1,
            explanation: 'On Meta, increase budgets by no more than 20% every 3–4 days. Larger jumps reset the learning phase, causing temporary performance drops while the algorithm recalibrates to the new budget level.'
        }
    },

    'sa-4-5': {
        title: 'UGC and Influencer-Driven Ads',
        body: `
            <h2>What Is UGC in Advertising?</h2>
            <p><strong>User-generated content (UGC)</strong> in the advertising context means creative that looks like it was made by a real customer rather than a brand. This includes customer testimonials filmed on phones, unboxing videos, genuine product reviews, and content created by hired UGC creators who produce authentic-looking content for brands to use as ads.</p>

            <h2>Why UGC Outperforms Polished Creative</h2>
            <p>Studies consistently show UGC-style ads generate higher engagement and conversion rates than professionally produced brand creative. The reasons:</p>
            <ul>
                <li><strong>Trust</strong> — People trust other people more than brands. A real person recommending a product feels like a friend's recommendation.</li>
                <li><strong>Native feel</strong> — UGC looks like organic content, so users don't immediately recognise it as an ad and are less likely to scroll past.</li>
                <li><strong>Relatability</strong> — Seeing someone like yourself using a product is more persuasive than a model in a studio.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>There's a difference between organic UGC (content customers create voluntarily) and commissioned UGC (content you pay creators to produce). Both work in ads, but commissioned UGC gives you control over messaging while maintaining an authentic aesthetic.</p>
            </div>

            <h2>Sourcing UGC</h2>
            <ul>
                <li><strong>Customer content</strong> — Ask happy customers if you can use their reviews or photos in ads. Incentivise with discounts.</li>
                <li><strong>UGC creators</strong> — Hire creators from platforms like Fiverr, Billo, or dedicated UGC marketplaces to produce content to your brief.</li>
                <li><strong>Influencer whitelisting</strong> — Run ads through an influencer's account (with their permission), combining their credibility with your targeting and budget.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Using customer content in ads without written permission. Always get explicit consent before using someone's likeness, testimonial, or content in paid advertising. This protects you legally and maintains trust with your community.</p>
            </div>
        `,
        quiz: {
            question: 'Why does UGC-style advertising typically outperform polished brand creative?',
            options: [
                'UGC is cheaper to produce',
                'UGC looks native, builds trust, and feels relatable — not like an ad',
                'Social platforms give UGC content more reach algorithmically',
                'UGC doesn\'t require an advertising budget'
            ],
            correct: 1,
            explanation: 'UGC outperforms because it looks like organic content (bypassing ad blindness), builds trust through real people\'s endorsements, and feels relatable. These factors combine to drive higher engagement and conversion rates.'
        }
    },

    'sa-4-6': {
        title: 'Building a Multi-Platform Social Strategy',
        body: `
            <h2>Why Multi-Platform Matters</h2>
            <p>Relying on a single platform is risky — algorithm changes, policy updates, or account issues can devastate your business overnight. A multi-platform strategy diversifies risk and reaches audiences at different touchpoints throughout their day.</p>

            <h2>Channel Mix Planning</h2>
            <p>Not every platform deserves equal investment. Allocate budget based on:</p>
            <ul>
                <li><strong>Audience presence</strong> — Where do your ideal customers spend the most time?</li>
                <li><strong>Platform strengths</strong> — Match platform capabilities to your objectives (Meta for broad reach, LinkedIn for B2B, TikTok for awareness with younger audiences)</li>
                <li><strong>Performance data</strong> — Shift budget toward platforms delivering the best cost-per-acquisition</li>
                <li><strong>Funnel role</strong> — Different platforms may serve different funnel stages</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>A common effective split: 60% of budget on your primary platform (where you have the most data and best results), 25% on your secondary platform, and 15% for testing new platforms. Adjust based on performance.</p>
            </div>

            <h2>Consistent Messaging, Platform-Native Creative</h2>
            <p>Your core message and offer should be consistent across platforms, but the creative execution must be native to each platform. A polished Instagram carousel should not be copy-pasted to TikTok, where a raw, authentic video performs better. Adapt the format while keeping the message aligned.</p>

            <h2>Cross-Platform Reporting</h2>
            <p>Build a unified dashboard that shows performance across all platforms side by side. Use consistent UTM conventions so Google Analytics can compare channels fairly. Track both platform-reported metrics and GA4-reported metrics to get the full picture.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use cross-platform retargeting sequences. Someone who watches your TikTok video (awareness) can be retargeted on Meta (consideration) and then Google Search (conversion). This funnel approach uses each platform's strength at the right moment.</p>
            </div>
        `,
        quiz: {
            question: 'What is the recommended approach to creative when advertising across multiple platforms?',
            options: [
                'Use identical creative on every platform for consistency',
                'Create completely different campaigns with no shared messaging',
                'Keep consistent messaging but adapt creative to each platform\'s native format',
                'Only use video content across all platforms'
            ],
            correct: 2,
            explanation: 'Your core message should be consistent across platforms, but the creative execution must feel native to each platform. A polished Instagram ad should be adapted to TikTok\'s raw, authentic style while delivering the same key message.'
        }
    },

    // ==================== CONTENT & INBOUND MODULE 1 (REMAINING) ====================

    'cm-1-2': {
        title: 'The Inbound Methodology: Attract, Engage, Delight',
        body: `
            <h2>Inbound vs Outbound Marketing</h2>
            <p><strong>Outbound marketing</strong> pushes messages to audiences who haven't asked for them — cold calls, TV ads, direct mail, banner ads. <strong>Inbound marketing</strong> pulls people in by creating valuable content they're already searching for — blog posts, guides, videos, podcasts, and tools that solve their problems.</p>

            <h2>The Flywheel Model</h2>
            <p>Modern inbound marketing uses a <strong>flywheel</strong> rather than a funnel. Instead of customers being an output at the bottom of a funnel, they become the force that drives growth through referrals and word-of-mouth. The flywheel has three stages:</p>
            <ul>
                <li><strong>Attract</strong> — Draw in the right people with valuable content, SEO, and social media. Focus on helping, not selling.</li>
                <li><strong>Engage</strong> — Build relationships through personalised communication, email nurturing, and solutions aligned to their needs and goals.</li>
                <li><strong>Delight</strong> — Provide outstanding experiences that turn customers into promoters who drive referrals and repeat business.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The flywheel spins faster when you reduce friction (eliminating obstacles in the customer experience) and add force (investing in strategies that accelerate each stage). Happy customers become your best marketing channel.</p>
            </div>

            <h2>Inbound Tactics by Stage</h2>
            <ul>
                <li><strong>Attract:</strong> Blog posts, SEO content, social media, podcasts, educational videos</li>
                <li><strong>Engage:</strong> Email sequences, lead magnets, webinars, free trials, chatbots, personalised CTAs</li>
                <li><strong>Delight:</strong> Exceptional support, loyalty programmes, customer communities, surprise perks, user feedback loops</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>The fastest way to start with inbound marketing is to answer the questions your customers actually ask. Interview your sales and support teams — every customer question is a potential blog post, video, or guide that will attract more people with the same question.</p>
            </div>
        `,
        quiz: {
            question: 'What is the key difference between the flywheel model and the traditional marketing funnel?',
            options: [
                'The flywheel is more expensive to implement',
                'The flywheel treats customers as a growth force through referrals, not just an output',
                'The flywheel only applies to B2B businesses',
                'The funnel is more modern than the flywheel'
            ],
            correct: 1,
            explanation: 'In the flywheel model, customers aren\'t just the end result — they become the force that drives growth through referrals and word-of-mouth. The better the customer experience, the faster the flywheel spins.'
        }
    },

    'cm-1-3': {
        title: 'Understanding Your Audience: Buyer Personas',
        body: `
            <h2>What Are Buyer Personas?</h2>
            <p>A <strong>buyer persona</strong> is a semi-fictional representation of your ideal customer based on real data and educated assumptions. It goes beyond demographics to capture motivations, challenges, goals, and decision-making patterns. Good personas help you create content that resonates because you understand who you're writing for.</p>

            <h2>Research Methods</h2>
            <p>Build personas from real data, not guesswork:</p>
            <ul>
                <li><strong>Customer interviews</strong> — Talk to 10–15 current customers about their challenges, goals, and how they found you</li>
                <li><strong>Sales team insights</strong> — Your salespeople know the real objections, questions, and motivations</li>
                <li><strong>Analytics data</strong> — Demographics, behaviour patterns, and conversion paths from Google Analytics</li>
                <li><strong>Survey data</strong> — Short surveys to your email list about their biggest challenges</li>
                <li><strong>Social listening</strong> — What does your audience talk about, complain about, and ask for on social media and forums?</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best personas focus on <strong>Jobs to Be Done (JTBD)</strong> — what is the customer trying to accomplish? Understanding the job they're hiring your product to do is more actionable than demographic details alone.</p>
            </div>

            <h2>Persona Template</h2>
            <p>A practical persona includes: name and role, company details, goals and challenges, how they research solutions, common objections, preferred content formats, and the key message that would resonate with them. Keep it to one page — overly detailed personas gather dust.</p>

            <h2>Using Personas in Content Planning</h2>
            <p>Every piece of content should target a specific persona at a specific stage of their buyer journey. Before writing, ask: "Which persona is this for? What question are they trying to answer? What stage are they at?" This focus produces content that converts.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Creating too many personas. Most businesses need 2–4 personas maximum. Too many dilutes your focus and makes content planning overwhelming. Start with your primary buyer and expand only when the data demands it.</p>
            </div>
        `,
        quiz: {
            question: 'What does the "Jobs to Be Done" framework focus on?',
            options: [
                'The job titles of your target customers',
                'What the customer is trying to accomplish by using your product',
                'The tasks your marketing team needs to complete',
                'Job boards where your customers might find you'
            ],
            correct: 1,
            explanation: 'Jobs to Be Done focuses on understanding what outcome the customer is trying to achieve. This is more actionable than demographics alone because it reveals the motivation behind purchase decisions.'
        }
    },

    'cm-1-4': {
        title: 'Content Formats: Blog, Video, Podcast, Social',
        body: `
            <h2>Choosing Your Primary Content Format</h2>
            <p>You don't need to be everywhere at once. The most successful content marketers pick one primary format, master it, then expand. Choose based on your audience's preferences, your team's strengths, and the competitive landscape.</p>

            <h2>Format Strengths</h2>
            <ul>
                <li><strong>Blog/written content</strong> — Best for SEO, evergreen value, and detailed explanations. Lower production barrier. Can be repurposed into every other format. The foundation of most content strategies.</li>
                <li><strong>Video</strong> — Highest engagement rates. Best for demonstrations, tutorials, and personality-driven content. Requires more production effort but increasingly important across platforms.</li>
                <li><strong>Podcasts</strong> — Build deep audience relationships through regular, long-form content. Excellent for thought leadership and reaching people during commutes and workouts. Growing medium with loyal listeners.</li>
                <li><strong>Social media content</strong> — Best for reach, engagement, and community building. Short-form, frequent, and platform-specific. Drives awareness but typically not deep education.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Start with the format that best suits SEO and discoverability — usually blog content. Then repurpose into other formats. One comprehensive blog post can become a video script, podcast talking points, an email newsletter, and 5–10 social posts.</p>
            </div>

            <h2>Production Requirements</h2>
            <ul>
                <li><strong>Blog:</strong> Writer + basic SEO knowledge. Lowest barrier to entry.</li>
                <li><strong>Video:</strong> Camera/phone + basic editing. Quality expectations vary by platform (YouTube vs TikTok).</li>
                <li><strong>Podcast:</strong> Microphone + hosting platform. Consistency matters more than production quality.</li>
                <li><strong>Social:</strong> Design tools (Canva) + platform knowledge. High frequency required.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Follow the "Create Once, Distribute Everywhere" principle. Record a video, extract the audio for a podcast, transcribe it for a blog post, and pull key quotes for social media. One creation session produces content for every channel.</p>
            </div>
        `,
        quiz: {
            question: 'Which content format is typically the best starting point for content marketing?',
            options: [
                'Podcast — because it builds deep relationships',
                'Video — because it has the highest engagement',
                'Blog/written content — because it\'s best for SEO and easiest to repurpose',
                'Social media — because it has the widest reach'
            ],
            correct: 2,
            explanation: 'Blog content is typically the best starting point because it drives organic search traffic (SEO), has a lower production barrier, provides evergreen value, and can be repurposed into every other format.'
        }
    },

    // ==================== CONTENT & INBOUND MODULE 2: CONTENT STRATEGY ====================

    'cm-2-1': {
        title: 'Building a Content Calendar',
        body: `
            <h2>Why You Need a Content Calendar</h2>
            <p>A <strong>content calendar</strong> is a planning tool that maps out what content you'll create, when you'll publish it, and where it will be distributed. Without one, content marketing becomes reactive and inconsistent — the two biggest reasons content strategies fail.</p>

            <h2>The Planning Process</h2>
            <ol>
                <li><strong>Define your content pillars</strong> — 3–5 core topics that align with your expertise and audience needs</li>
                <li><strong>Map to buyer journey stages</strong> — Ensure you're creating content for awareness, consideration, and decision stages</li>
                <li><strong>Set publishing cadence</strong> — Be realistic. One high-quality post per week beats five mediocre ones.</li>
                <li><strong>Plan seasonal content</strong> — Map industry events, holidays, and seasonal trends 2–3 months in advance</li>
                <li><strong>Assign ownership</strong> — Every piece needs a responsible person and a deadline</li>
            </ol>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use a simple spreadsheet to start — columns for publish date, title, format, target persona, funnel stage, target keyword, status, and owner. Fancy tools aren't needed until your team and volume grow. Consistency matters more than tools.</p>
            </div>

            <h2>Content Mix</h2>
            <p>A balanced calendar includes a variety of content types:</p>
            <ul>
                <li><strong>Evergreen content (60%)</strong> — Comprehensive guides, how-tos, and reference content that stays relevant for months or years</li>
                <li><strong>Timely content (20%)</strong> — Industry news commentary, trend analysis, seasonal pieces</li>
                <li><strong>Engagement content (20%)</strong> — Opinion pieces, case studies, behind-the-scenes, community-driven content</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Planning too far ahead in too much detail. Plan specific topics 4–6 weeks out and keep a looser thematic plan for the quarter. The market changes — your calendar should be flexible enough to accommodate emerging topics and opportunities.</p>
            </div>
        `,
        quiz: {
            question: 'What percentage of your content calendar should typically be evergreen content?',
            options: [
                '20%',
                '40%',
                '60%',
                '90%'
            ],
            correct: 2,
            explanation: 'Approximately 60% of your content should be evergreen — comprehensive guides and reference material that stays relevant for months or years. This provides a foundation of consistent organic traffic while timely and engagement content keeps things fresh.'
        }
    },

    'cm-2-2': {
        title: 'Writing Content That Ranks and Converts',
        body: `
            <h2>The Dual Goal: Rank and Convert</h2>
            <p>Great content marketing serves two masters: it ranks in search engines to attract traffic, and it persuades readers to take action. Writing purely for SEO creates robotic content that doesn't convert. Writing purely for persuasion creates content nobody finds. The skill is combining both.</p>

            <h2>SEO Writing Best Practices</h2>
            <ul>
                <li><strong>Match search intent</strong> — Analyse the top-ranking pages for your keyword. If they're all how-to guides, write a how-to guide.</li>
                <li><strong>Use the target keyword in the title, H1, first paragraph, and 2–3 subheadings</strong></li>
                <li><strong>Cover the topic comprehensively</strong> — Include subtopics that related articles cover. Tools like "People Also Ask" reveal what else searchers want to know.</li>
                <li><strong>Structure with clear headings</strong> — Use H2 and H3 tags to create a scannable hierarchy</li>
            </ul>

            <h2>Writing for Conversion</h2>
            <ul>
                <li><strong>Open with the reader's problem</strong> — Show you understand their pain before presenting solutions</li>
                <li><strong>Include CTAs naturally</strong> — Place relevant calls-to-action within the content, not just at the end. After demonstrating value, offer the next step.</li>
                <li><strong>Use proof</strong> — Statistics, case studies, examples, and testimonials build credibility throughout the content</li>
                <li><strong>Format for readability</strong> — Short paragraphs, bullet points, bold key terms. Most readers scan before they read.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best converting content educates genuinely first, then naturally leads to your product or service as the logical next step. Hard selling in educational content destroys trust. Helping builds it.</p>
            </div>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Update your top-performing content every 6–12 months. Add new information, refresh statistics, improve formatting, and re-optimise for current search trends. Updated content often regains or surpasses its original ranking position.</p>
            </div>
        `,
        quiz: {
            question: 'What is the most effective approach to CTAs within educational content?',
            options: [
                'Place one large CTA at the very end of the article only',
                'Include pop-ups every few paragraphs',
                'Place relevant CTAs naturally within the content after demonstrating value',
                'Avoid all CTAs in educational content'
            ],
            correct: 2,
            explanation: 'Place CTAs naturally within content, particularly after sections that demonstrate value relevant to your offering. This approach feels helpful rather than pushy, because the reader has just learned something that your product can help with.'
        }
    },

    'cm-2-3': {
        title: 'Content Distribution Channels',
        body: `
            <h2>The Three Distribution Categories</h2>
            <p>Creating great content is only half the job — distribution determines whether anyone sees it. Distribution channels fall into three categories:</p>
            <ul>
                <li><strong>Owned channels</strong> — Platforms you control: your blog, email list, social profiles, podcast. You build these over time and they become increasingly valuable.</li>
                <li><strong>Earned channels</strong> — Exposure you earn through quality: shares, backlinks, press coverage, mentions, guest post invitations. Most credible but least controllable.</li>
                <li><strong>Paid channels</strong> — Paid promotion: social ads, search ads, sponsored content, native advertising. Immediate reach but requires ongoing budget.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Most content marketers spend 80% of their effort on creation and 20% on distribution. Flip this ratio. A good piece of content promoted effectively will outperform a great piece that nobody sees.</p>
            </div>

            <h2>Distribution Tactics</h2>
            <ul>
                <li><strong>Email newsletter</strong> — Your most reliable distribution channel. Send new content to subscribers and build a habit of regular reading.</li>
                <li><strong>Social media sharing</strong> — Share across all relevant platforms with platform-native formatting. Don't just post a link — pull out key insights as native content.</li>
                <li><strong>Community posting</strong> — Share in relevant industry communities, forums, Slack groups, and Reddit (where appropriate and within community rules).</li>
                <li><strong>Content syndication</strong> — Republish on platforms like Medium or LinkedIn Articles with a canonical link back to the original.</li>
                <li><strong>Paid amplification</strong> — Boost top-performing organic content with a small ad budget to extend reach.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Create a distribution checklist for every new piece of content. List every channel and action required (email send, social posts across 3 platforms, community shares, internal Slack share). Systematic distribution ensures no opportunity is missed.</p>
            </div>
        `,
        quiz: {
            question: 'What is the recommended ratio of effort between content creation and distribution?',
            options: [
                '90% creation, 10% distribution',
                '80% creation, 20% distribution',
                '50% creation, 50% distribution (or even more on distribution)',
                '20% creation, 80% distribution'
            ],
            correct: 2,
            explanation: 'Most experts recommend spending at least as much effort on distribution as creation. Great content that nobody sees produces no results, while good content with excellent distribution consistently outperforms.'
        }
    },

    'cm-2-4': {
        title: 'Repurposing Content Across Platforms',
        body: `
            <h2>Content Atomisation</h2>
            <p><strong>Content atomisation</strong> is the practice of breaking one substantial piece of content into many smaller pieces across different formats and platforms. A single long-form blog post can generate weeks of content across your entire marketing ecosystem.</p>

            <h2>The Repurposing Cascade</h2>
            <p>Start with a "pillar" content piece, then cascade down:</p>
            <ol>
                <li><strong>Long-form blog post or guide</strong> → The foundation</li>
                <li><strong>Video version</strong> → Record yourself presenting the key points</li>
                <li><strong>Podcast episode</strong> → Discuss the topic with added commentary</li>
                <li><strong>Email newsletter</strong> → Summarise key takeaways with a link to the full piece</li>
                <li><strong>Social media posts (5–10)</strong> → Pull individual statistics, quotes, tips, or sections</li>
                <li><strong>Infographic</strong> → Visualise data or processes from the content</li>
                <li><strong>Slide deck</strong> → Create a presentation version for LinkedIn or SlideShare</li>
                <li><strong>Thread</strong> → Break key arguments into a Twitter/X thread</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Repurposing isn't just copy-pasting the same text everywhere. Each platform has its own native format and audience expectations. Adapt the core message to fit each platform's style while maintaining consistent value and messaging.</p>
            </div>

            <h2>Efficiency Gains</h2>
            <p>Repurposing can 5–10x your content output without proportionally increasing production time. Instead of creating 10 unique pieces from scratch, create one exceptional piece and transform it into 10 platform-specific versions.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Plan for repurposing before you create. When writing a blog post, think about which sections would make good social posts, what data would work as an infographic, and what points would spark discussion on a podcast. Planning ahead makes repurposing smoother.</p>
            </div>
        `,
        quiz: {
            question: 'What is content atomisation?',
            options: [
                'Deleting old content from your website',
                'Breaking one substantial piece of content into many smaller pieces across formats and platforms',
                'Using AI to automatically generate content',
                'Publishing the same content on every platform identically'
            ],
            correct: 1,
            explanation: 'Content atomisation means taking one comprehensive piece of content and breaking it into many smaller, platform-specific pieces. This maximises the value of every content investment across your entire marketing ecosystem.'
        }
    },

    'cm-2-5': {
        title: 'Lead Magnets and Gated Content',
        body: `
            <h2>What Is a Lead Magnet?</h2>
            <p>A <strong>lead magnet</strong> is a valuable resource offered for free in exchange for contact information (usually an email address). It's the bridge between anonymous website visitors and known leads you can nurture through email marketing.</p>

            <h2>Types of Lead Magnets</h2>
            <ul>
                <li><strong>Ebooks and guides</strong> — In-depth resources on a specific topic. Work well for complex subjects.</li>
                <li><strong>Checklists and cheat sheets</strong> — Quick-reference tools. High conversion rates because they're immediately useful and quick to consume.</li>
                <li><strong>Templates and swipe files</strong> — Ready-to-use resources the audience can adapt. Extremely popular because they save time.</li>
                <li><strong>Webinars and video training</strong> — Live or recorded educational sessions. Great for building authority and demonstrating expertise.</li>
                <li><strong>Free tools and calculators</strong> — Interactive tools that solve a specific problem. Highest perceived value.</li>
                <li><strong>Quizzes and assessments</strong> — Interactive content that provides personalised results. Engaging and shareable.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best lead magnets solve a specific, immediate problem for a well-defined audience. "The Ultimate Marketing Guide" is too broad. "The 5-Minute Facebook Ad Audit Checklist" is specific, useful, and clearly valuable.</p>
            </div>

            <h2>Landing Page Best Practices</h2>
            <p>Your lead magnet landing page should have: a clear headline stating the benefit, a short description of what's included, a visual preview (mockup of the ebook, screenshot of the template), social proof if available, and a simple form with minimal fields.</p>

            <h2>When to Gate vs Ungate</h2>
            <p>Not all content should be gated. <strong>Gate</strong> high-value resources that go beyond what's freely available. <strong>Ungate</strong> content designed for SEO and top-of-funnel awareness. A general rule: if the content primarily educates, keep it open. If it's a specific tool or resource, gate it.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Asking for too much information on the form. Every additional field reduces conversions by 5–10%. For a lead magnet download, name and email are usually sufficient. Collect additional information later through progressive profiling.</p>
            </div>
        `,
        quiz: {
            question: 'Which lead magnet type typically has the highest conversion rate?',
            options: [
                'A 100-page comprehensive ebook',
                'A checklist or template that provides immediate practical value',
                'A general industry overview report',
                'A company product brochure'
            ],
            correct: 1,
            explanation: 'Checklists, templates, and quick-reference tools typically have the highest conversion rates because they\'re immediately useful, quick to consume, and clearly save the user time — making the exchange of an email address feel worthwhile.'
        }
    },

    // ==================== CONTENT & INBOUND MODULE 3: EMAIL MARKETING ====================

    'cm-3-1': {
        title: 'Email Marketing Fundamentals',
        body: `
            <h2>Why Email Marketing Still Dominates</h2>
            <p>Email marketing consistently delivers the highest ROI of any marketing channel — averaging £36 returned for every £1 spent. Unlike social media, you own your email list. Algorithm changes can't reduce your reach. It's a direct line to your audience.</p>

            <h2>Email Service Providers (ESPs)</h2>
            <p>An ESP is the platform you use to send marketing emails. Popular options include Mailchimp, ConvertKit, ActiveCampaign, Klaviyo (for e-commerce), and HubSpot. Choose based on your needs: list size, automation complexity, integration requirements, and budget.</p>

            <h2>Building Your First Campaign</h2>
            <ol>
                <li><strong>Define your goal</strong> — What action do you want recipients to take?</li>
                <li><strong>Segment your audience</strong> — Don't send the same email to everyone</li>
                <li><strong>Write a compelling subject line</strong> — This determines whether your email gets opened</li>
                <li><strong>Design the email</strong> — Clean, mobile-friendly layout with a clear CTA</li>
                <li><strong>Test before sending</strong> — Send test emails, check links, preview on multiple devices</li>
                <li><strong>Analyse results</strong> — Track open rate, click rate, and conversions</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Email marketing success is built on permission and value. Only email people who've opted in, and every email should provide genuine value — not just promotional messages. The brands that treat email as a value channel, not a broadcast channel, win.</p>
            </div>

            <h2>Subject Lines and Preview Text</h2>
            <p>Your <strong>subject line</strong> is the single biggest factor in open rates. Keep it under 50 characters, create curiosity or urgency, and be specific. The <strong>preview text</strong> (the snippet shown after the subject line) is your second chance to earn the open — use it to complement, not repeat, the subject line.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Send emails at consistent times so subscribers develop a habit of expecting your content. Tuesday through Thursday mornings tend to perform best for B2B, while evenings and weekends can work well for B2C.</p>
            </div>
        `,
        quiz: {
            question: 'What is the average ROI of email marketing?',
            options: [
                '£5 for every £1 spent',
                '£12 for every £1 spent',
                '£36 for every £1 spent',
                '£50 for every £1 spent'
            ],
            correct: 2,
            explanation: 'Email marketing averages approximately £36 returned for every £1 spent, making it consistently the highest-ROI digital marketing channel. This is partly because you own the channel and reach is not limited by algorithms.'
        }
    },

    'cm-3-2': {
        title: 'Building and Segmenting Email Lists',
        body: `
            <h2>Building Your List</h2>
            <p>Your email list is one of your most valuable marketing assets. Build it through legitimate opt-in methods:</p>
            <ul>
                <li><strong>Lead magnets</strong> — Offer valuable resources in exchange for email addresses</li>
                <li><strong>Website opt-in forms</strong> — Embed forms in your blog sidebar, footer, and within content</li>
                <li><strong>Pop-ups and slide-ins</strong> — Exit-intent popups and timed slide-ins capture visitors before they leave</li>
                <li><strong>Content upgrades</strong> — Bonus resources specific to the blog post being read (higher conversion than generic offers)</li>
                <li><strong>Webinar registrations</strong> — Live events naturally collect email addresses</li>
                <li><strong>Checkout opt-in</strong> — E-commerce customers can opt in during purchase</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Never buy email lists. Purchased lists have terrible engagement rates, damage your sender reputation, and violate GDPR and CAN-SPAM regulations. A list of 1,000 engaged subscribers who opted in will outperform a purchased list of 50,000.</p>
            </div>

            <h2>Segmentation Strategies</h2>
            <p><strong>Segmentation</strong> means dividing your list into groups based on shared characteristics so you can send more relevant messages. Segmented campaigns generate 14% higher open rates and 100% higher click rates than non-segmented ones.</p>
            <ul>
                <li><strong>Behavioural</strong> — Based on actions: pages visited, products viewed, past purchases, email engagement</li>
                <li><strong>Demographic</strong> — Age, location, job role, company size</li>
                <li><strong>Engagement level</strong> — Active subscribers vs inactive (haven't opened in 90 days)</li>
                <li><strong>Funnel stage</strong> — New subscriber, engaged lead, customer, repeat buyer</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>List hygiene is as important as list growth. Regularly remove bounced addresses and consider re-engaging or removing subscribers who haven't opened an email in 6+ months. A clean list improves deliverability for everyone on it.</p>
            </div>
        `,
        quiz: {
            question: 'How much higher are click rates for segmented email campaigns compared to non-segmented?',
            options: [
                '10% higher',
                '50% higher',
                '100% higher',
                '200% higher'
            ],
            correct: 2,
            explanation: 'Segmented email campaigns generate approximately 100% higher click-through rates compared to non-segmented campaigns. This dramatic improvement comes from sending more relevant content to each subscriber group.'
        }
    },

    'cm-3-3': {
        title: 'Writing Emails That Get Opened and Clicked',
        body: `
            <h2>Subject Line Formulas That Work</h2>
            <p>The subject line determines whether your email gets opened. Proven formulas include:</p>
            <ul>
                <li><strong>Curiosity gap</strong> — "The one metric most marketers ignore (it costs them thousands)"</li>
                <li><strong>Specific benefit</strong> — "How to reduce your CPA by 30% in 2 weeks"</li>
                <li><strong>Question</strong> — "Are you making this common SEO mistake?"</li>
                <li><strong>List/number</strong> — "5 landing page tweaks that doubled our conversions"</li>
                <li><strong>Urgency</strong> — "Last chance: workshop spots closing at midnight"</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Clickbait subject lines that don't deliver. If your subject line promises "the secret to 10x growth" but the email is a generic product pitch, you'll get high opens but also high unsubscribes. Always deliver on what the subject line promises.</p>
            </div>

            <h2>Email Copywriting Principles</h2>
            <ul>
                <li><strong>Write like a person, not a brand</strong> — Conversational, first-person emails outperform corporate ones</li>
                <li><strong>One email, one goal</strong> — Don't try to accomplish five things in one email. Pick one CTA.</li>
                <li><strong>Front-load value</strong> — Put the most important content and your CTA above the fold</li>
                <li><strong>Use short paragraphs</strong> — 1–3 sentences per paragraph. Walls of text don't get read.</li>
                <li><strong>Personalise beyond the name</strong> — Reference their behaviour, segment, or purchase history</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The goal of each line is to get the reader to read the next line. Subject line → first sentence → body → CTA. Every element should pull the reader forward toward the action you want them to take.</p>
            </div>

            <h2>A/B Testing Emails</h2>
            <p>Always test. Start by testing subject lines (biggest impact on opens), then sender names, send times, CTA copy, and email length. Test one variable at a time and send to a representative sample before rolling out to the full list.</p>

            <h2>Mobile Optimisation</h2>
            <p>Over 60% of emails are opened on mobile devices. Use a single-column layout, large readable fonts (16px minimum), tappable buttons (44px+ height), and preview your emails on mobile before sending.</p>
        `,
        quiz: {
            question: 'What is the most important principle of email copywriting?',
            options: [
                'Use as many images as possible',
                'Write long, detailed paragraphs',
                'One email, one goal — focus on a single CTA',
                'Always include your company\'s full history'
            ],
            correct: 2,
            explanation: 'Each email should focus on one primary goal with one clear call to action. Trying to accomplish multiple objectives in a single email dilutes the message and reduces click-through rates.'
        }
    },

    'cm-3-4': {
        title: 'Email Automation and Sequences',
        body: `
            <h2>What Is Email Automation?</h2>
            <p><strong>Email automation</strong> sends pre-written emails triggered by specific actions or time intervals. Instead of manually sending emails, you set up sequences that run automatically — nurturing leads, onboarding customers, or recovering abandoned carts while you sleep.</p>

            <h2>Essential Automated Sequences</h2>
            <ul>
                <li><strong>Welcome sequence</strong> — 3–5 emails sent to new subscribers. Introduce your brand, deliver the promised lead magnet, share your best content, and make a soft offer. This sets the tone for the entire relationship.</li>
                <li><strong>Nurture sequence</strong> — Ongoing educational emails that build trust and move leads toward a purchase decision. Typically 5–10 emails spread over 2–4 weeks.</li>
                <li><strong>Cart abandonment</strong> — 2–3 emails sent when someone adds to cart but doesn't purchase. These recover 5–15% of abandoned carts on average.</li>
                <li><strong>Re-engagement</strong> — Target subscribers who haven't opened emails in 60–90 days. Offer them a reason to come back or clean them off your list.</li>
                <li><strong>Post-purchase</strong> — Thank customers, ask for reviews, offer related products, and build loyalty after a sale.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The welcome sequence is your highest-leverage automation. New subscribers are most engaged in the first 48 hours after signing up. A strong welcome sequence sets expectations, builds trust, and can generate immediate conversions.</p>
            </div>

            <h2>Drip Campaigns vs Trigger-Based Automation</h2>
            <ul>
                <li><strong>Drip campaigns</strong> — Time-based sequences where emails are sent at set intervals (Day 1, Day 3, Day 7, etc.) regardless of subscriber behaviour.</li>
                <li><strong>Trigger-based</strong> — Emails sent in response to specific actions (visited pricing page, downloaded resource, made purchase). More relevant and typically higher performing.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start with just two automations: a welcome sequence for new subscribers and a cart abandonment sequence (if e-commerce). These two alone can transform your email ROI. Add more sequences as you learn what resonates.</p>
            </div>
        `,
        quiz: {
            question: 'What percentage of abandoned carts can a well-designed abandonment email sequence typically recover?',
            options: [
                '1–2%',
                '5–15%',
                '25–35%',
                '50–60%'
            ],
            correct: 1,
            explanation: 'A well-designed cart abandonment email sequence typically recovers 5–15% of abandoned carts. Given that most e-commerce sites see 60–80% cart abandonment, this recovery rate represents significant revenue.'
        }
    },

    'cm-3-5': {
        title: 'Deliverability and Compliance',
        body: `
            <h2>What Is Email Deliverability?</h2>
            <p><strong>Deliverability</strong> is the ability of your emails to reach the inbox (not the spam folder or junk). You can write the perfect email, but if it lands in spam, no one will see it. Deliverability is influenced by your sender reputation, authentication setup, and sending practices.</p>

            <h2>Email Authentication: SPF, DKIM, and DMARC</h2>
            <ul>
                <li><strong>SPF (Sender Policy Framework)</strong> — A DNS record that specifies which mail servers are authorised to send emails on behalf of your domain.</li>
                <li><strong>DKIM (DomainKeys Identified Mail)</strong> — Adds a digital signature to your emails proving they haven't been tampered with in transit.</li>
                <li><strong>DMARC (Domain-based Message Authentication)</strong> — Tells receiving servers what to do if an email fails SPF or DKIM checks. Protects against email spoofing.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>All three authentication protocols (SPF, DKIM, DMARC) should be configured for your sending domain. Without them, email providers are more likely to send your messages to spam. Most ESPs provide setup guides for these.</p>
            </div>

            <h2>Sender Reputation</h2>
            <p>Your sender reputation is a score assigned by email providers based on your sending behaviour. It's damaged by high bounce rates, spam complaints, and low engagement. Protect it by:</p>
            <ul>
                <li>Only emailing opted-in subscribers</li>
                <li>Removing bounced addresses immediately</li>
                <li>Keeping spam complaint rate below 0.1%</li>
                <li>Maintaining consistent sending volumes (don't go from 100 to 10,000 overnight)</li>
            </ul>

            <h2>Legal Compliance</h2>
            <ul>
                <li><strong>GDPR (EU/UK)</strong> — Requires explicit consent before sending marketing emails. Must provide easy unsubscribe. Must document consent.</li>
                <li><strong>CAN-SPAM (US)</strong> — Requires accurate header information, honest subject lines, physical address, and clear unsubscribe mechanism within 10 business days.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Making the unsubscribe link tiny, hidden, or requiring a login. This violates regulations and frustrates users who will mark you as spam instead — which damages your sender reputation far more than an unsubscribe does.</p>
            </div>
        `,
        quiz: {
            question: 'What does DKIM do for email deliverability?',
            options: [
                'Encrypts the email content so only the recipient can read it',
                'Adds a digital signature proving the email hasn\'t been tampered with',
                'Blocks spam emails from reaching your inbox',
                'Automatically removes unsubscribed users from your list'
            ],
            correct: 1,
            explanation: 'DKIM (DomainKeys Identified Mail) adds a cryptographic digital signature to your emails, allowing receiving servers to verify the email hasn\'t been altered in transit and was genuinely sent by your domain.'
        }
    },

    // ==================== CONTENT & INBOUND MODULE 4: ADVANCED CONTENT SYSTEMS ====================

    'cm-4-1': {
        title: 'Content-Led Growth: Building a Content Moat',
        body: `
            <h2>Content as a Competitive Advantage</h2>
            <p>A <strong>content moat</strong> is a body of content so comprehensive and authoritative that competitors cannot easily replicate it. Like a castle's moat, it protects your market position. Businesses with strong content moats generate sustainable organic traffic that compounds over time without proportional increases in cost.</p>

            <h2>Building Defensible Content Assets</h2>
            <ul>
                <li><strong>Original research</strong> — Data and insights that no one else has. Surveys, proprietary data analysis, industry benchmarks. This is the hardest to copy.</li>
                <li><strong>Comprehensive topic coverage</strong> — Own an entire topic area with pillar pages and dozens of supporting articles. Depth builds authority that newcomers can't match quickly.</li>
                <li><strong>Community-generated content</strong> — User reviews, forum discussions, and community contributions create unique content that scales organically.</li>
                <li><strong>Free tools</strong> — Calculators, generators, and interactive tools that attract links and usage naturally.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>A content moat compounds. Each piece of content strengthens the whole through internal linking, topical authority signals, and accumulated backlinks. The longer you invest, the wider the moat becomes and the harder it is for competitors to catch up.</p>
            </div>

            <h2>Programmatic Content at Scale</h2>
            <p><strong>Programmatic content</strong> uses templates and data to create thousands of pages automatically. Think Zillow creating a page for every property, or TripAdvisor having a page for every hotel. If your business has structured data (locations, products, comparisons), programmatic content can massively expand your organic footprint.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start building your content moat in areas where you have unique expertise or data. A small company can't outproduce a large one on generic topics, but it can absolutely dominate a niche where it has genuine authority.</p>
            </div>
        `,
        quiz: {
            question: 'What type of content is hardest for competitors to replicate?',
            options: [
                'Generic how-to blog posts',
                'Curated lists of external resources',
                'Original research using proprietary data',
                'Repurposed social media content'
            ],
            correct: 2,
            explanation: 'Original research using proprietary data is the hardest to copy because competitors don\'t have access to the same data. This makes it the strongest foundation for a content moat and the most valuable for earning backlinks.'
        }
    },

    'cm-4-2': {
        title: 'Marketing Funnels and Conversion Paths',
        body: `
            <h2>The Content Funnel: TOFU, MOFU, BOFU</h2>
            <p>Content should match where the reader is in their buying journey:</p>
            <ul>
                <li><strong>TOFU (Top of Funnel)</strong> — Awareness stage. The reader has a problem but doesn't know solutions exist. Content: blog posts, videos, social content, infographics that educate broadly.</li>
                <li><strong>MOFU (Middle of Funnel)</strong> — Consideration stage. The reader knows solutions exist and is evaluating options. Content: comparison guides, case studies, webinars, detailed how-tos.</li>
                <li><strong>BOFU (Bottom of Funnel)</strong> — Decision stage. The reader is ready to buy and choosing a provider. Content: product demos, free trials, testimonials, pricing pages, ROI calculators.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Most content marketing fails because it only creates TOFU content. Educational blog posts attract visitors, but without MOFU and BOFU content to move them toward a purchase, that traffic never converts. Build content for every funnel stage.</p>
            </div>

            <h2>Designing Conversion Paths</h2>
            <p>A <strong>conversion path</strong> is the journey a visitor takes from first touch to conversion. A well-designed path includes:</p>
            <ol>
                <li><strong>Entry point</strong> — Blog post, social ad, or search result</li>
                <li><strong>Engagement</strong> — CTA within content offering a lead magnet or next-step resource</li>
                <li><strong>Capture</strong> — Landing page with form to collect contact information</li>
                <li><strong>Nurture</strong> — Email sequence delivering value and building trust</li>
                <li><strong>Convert</strong> — Sales page, demo booking, or direct purchase</li>
            </ol>

            <h2>Micro-Conversions</h2>
            <p>Not every conversion is a sale. <strong>Micro-conversions</strong> are smaller actions that indicate progress: newsletter sign-ups, resource downloads, webinar registrations, or pricing page visits. Track these to understand how well your funnel moves people forward.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Map your top 5 blog posts and check: does each one have a clear next step for the reader? If someone reads your best content and the only option is to leave, you're leaking potential customers. Every high-traffic page needs a conversion path.</p>
            </div>
        `,
        quiz: {
            question: 'A comparison guide between your product and competitors is which type of funnel content?',
            options: [
                'TOFU (Top of Funnel)',
                'MOFU (Middle of Funnel)',
                'BOFU (Bottom of Funnel)',
                'Post-purchase content'
            ],
            correct: 1,
            explanation: 'Comparison guides are MOFU (Middle of Funnel) content because they serve readers who are aware of solutions and are actively evaluating options. They help move prospects from consideration toward a purchase decision.'
        }
    },

    'cm-4-3': {
        title: 'Content Performance Measurement',
        body: `
            <h2>Content KPIs by Funnel Stage</h2>
            <p>Different content serves different purposes, so it should be measured differently:</p>
            <ul>
                <li><strong>TOFU metrics:</strong> Organic traffic, impressions, social shares, new users, backlinks earned</li>
                <li><strong>MOFU metrics:</strong> Email sign-ups, lead magnet downloads, time on page, pages per session, return visits</li>
                <li><strong>BOFU metrics:</strong> Demo requests, free trial starts, purchases, revenue attributed to content</li>
            </ul>

            <h2>Essential Content Metrics</h2>
            <ul>
                <li><strong>Organic traffic per post</strong> — Which content attracts the most search visitors?</li>
                <li><strong>Engagement rate</strong> — Are people actually reading or bouncing immediately?</li>
                <li><strong>Conversion rate</strong> — What percentage of readers take the desired action?</li>
                <li><strong>Content ROI</strong> — Revenue generated vs production cost</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Content ROI formula: <strong>(Revenue attributed to content − Content production cost) ÷ Production cost × 100</strong>. This requires proper attribution tracking but is the ultimate measure of content marketing effectiveness.</p>
            </div>

            <h2>Content Audits</h2>
            <p>Conduct a <strong>content audit</strong> quarterly or biannually. Categorise every piece of content as: performing well (keep and promote), needs updating (refresh with new data and optimisation), underperforming (improve or consolidate), or irrelevant (redirect or remove). This prevents content decay and keeps your library current.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Build a content scorecard that combines traffic, engagement, and conversion data into a single score per piece. This makes it easy to identify your top performers (double down), average content (optimise), and underperformers (fix or remove).</p>
            </div>

            <h2>Reporting Frameworks</h2>
            <p>Monthly content reports should answer: How much traffic did content drive? Which pieces performed best? How many leads/conversions came from content? What should we create next based on performance data? Keep reports focused on insights and actions, not just raw numbers.</p>
        `,
        quiz: {
            question: 'How often should you conduct a content audit?',
            options: [
                'Weekly',
                'Monthly',
                'Quarterly or biannually',
                'Once per year only'
            ],
            correct: 2,
            explanation: 'A content audit should be conducted quarterly or biannually to identify content that\'s performing well, needs updating, is underperforming, or has become irrelevant. This cadence balances thoroughness with practicality.'
        }
    },

    'cm-4-4': {
        title: 'Building a Content Team and Process',
        body: `
            <h2>Content Team Roles</h2>
            <p>As your content operation grows, you'll need specialised roles:</p>
            <ul>
                <li><strong>Content strategist</strong> — Plans the content calendar, defines topics and priorities, ensures alignment with business goals</li>
                <li><strong>Writers/creators</strong> — Produce the actual content (articles, videos, podcasts)</li>
                <li><strong>Editor</strong> — Reviews for quality, consistency, and brand voice. The gatekeeper of standards.</li>
                <li><strong>SEO specialist</strong> — Handles keyword research, optimisation, and technical SEO for content</li>
                <li><strong>Designer</strong> — Creates visuals, infographics, and social graphics</li>
                <li><strong>Distribution manager</strong> — Handles promotion, social sharing, and email distribution</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Small teams can start with one person wearing multiple hats. The first hire should be a strong writer who understands SEO. The second should be someone focused on distribution and promotion. Build from there as content volume and revenue grow.</p>
            </div>

            <h2>Editorial Workflows</h2>
            <p>A clear workflow prevents bottlenecks and ensures consistent quality:</p>
            <ol>
                <li><strong>Brief</strong> — Content strategist creates a brief with target keyword, audience, outline, and key points</li>
                <li><strong>Draft</strong> — Writer produces the first draft following the brief</li>
                <li><strong>Review</strong> — Editor reviews for quality, accuracy, and brand voice</li>
                <li><strong>SEO optimisation</strong> — Final keyword and meta data optimisation</li>
                <li><strong>Publish and distribute</strong> — Go live and execute distribution checklist</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>A content brief is the most underrated tool in content marketing. A detailed brief takes 20 minutes to write but saves hours of revision. Include: target keyword, search intent, audience persona, key points to cover, word count target, CTA, and competitive references.</p>
            </div>

            <h2>Working With Freelancers</h2>
            <p>Many content teams use freelance writers for scale. Keys to success: create detailed briefs, provide a style guide, start with a paid test piece, give constructive feedback, and build long-term relationships with writers who understand your niche.</p>
        `,
        quiz: {
            question: 'What is the most underrated tool for improving content quality and efficiency?',
            options: [
                'AI writing tools',
                'Detailed content briefs',
                'Grammar checking software',
                'Social media scheduling tools'
            ],
            correct: 1,
            explanation: 'A detailed content brief takes 20 minutes to write but saves hours of revision and ensures the writer understands the target keyword, audience, search intent, and key points. It\'s the foundation of efficient content production.'
        }
    },

    'cm-4-5': {
        title: 'Thought Leadership and Brand Publishing',
        body: `
            <h2>What Is Thought Leadership?</h2>
            <p><strong>Thought leadership</strong> is content that establishes your brand or executives as authoritative voices in your industry. It goes beyond educational content to share unique perspectives, challenge conventional thinking, and shape industry conversation. Done well, it builds trust, attracts partnerships, and generates inbound leads.</p>

            <h2>Developing a Unique Point of View</h2>
            <p>Effective thought leadership requires a distinct perspective. To develop yours:</p>
            <ul>
                <li><strong>Identify industry assumptions you disagree with</strong> — Contrarian views that are backed by evidence spark conversation</li>
                <li><strong>Share lessons from experience</strong> — What have you learned from failures and successes that others haven't shared?</li>
                <li><strong>Make predictions</strong> — Where is the industry heading? Take a stance and explain why.</li>
                <li><strong>Connect dots others miss</strong> — Draw insights from adjacent industries or unexpected data</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Thought leadership is not self-promotion dressed up as content. If every piece ultimately says "and that's why you should buy our product," it's not thought leadership — it's marketing collateral. Genuine thought leadership earns trust by sharing valuable ideas regardless of whether they drive immediate sales.</p>
            </div>

            <h2>Executive Content</h2>
            <p>Putting your CEO, founders, or senior leaders in front of audiences builds brand credibility. Formats include LinkedIn posts, speaking engagements, podcast appearances, op-eds, and industry panel participation. Many executives have valuable insights but need content support to package and distribute them effectively.</p>

            <h2>Original Research as Thought Leadership</h2>
            <p>Publishing original research — annual reports, survey results, data analyses — is the highest-impact form of thought leadership. It positions your brand as a source of truth and generates backlinks, press coverage, and social shares that no opinion piece can match.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start with one thought leadership format and one consistent channel. A weekly LinkedIn post from your CEO sharing industry insights is more effective than sporadic content across five channels. Consistency builds audience expectation and loyalty.</p>
            </div>
        `,
        quiz: {
            question: 'What distinguishes genuine thought leadership from promotional content?',
            options: [
                'Thought leadership uses more professional language',
                'Thought leadership shares valuable ideas without always pushing a product',
                'Thought leadership is only published on LinkedIn',
                'Thought leadership is written by external agencies'
            ],
            correct: 1,
            explanation: 'Genuine thought leadership shares valuable perspectives and ideas that benefit the audience regardless of whether they buy your product. It builds trust through insight, not through promotional messaging disguised as expertise.'
        }
    },

    'cm-4-6': {
        title: 'AI in Content Marketing: What Works',
        body: `
            <h2>Where AI Adds Real Value</h2>
            <p>AI tools have transformed parts of the content creation process. Here's where they genuinely help:</p>
            <ul>
                <li><strong>Research and ideation</strong> — Brainstorming topic ideas, generating outlines, identifying subtopics to cover</li>
                <li><strong>First drafts</strong> — Creating rough drafts that a human editor refines, saving significant writing time</li>
                <li><strong>Repurposing</strong> — Converting blog posts into social media copy, email summaries, or video scripts</li>
                <li><strong>SEO optimisation</strong> — Suggesting keyword placements, meta descriptions, and title tag variations</li>
                <li><strong>Editing and proofreading</strong> — Catching grammar issues, improving readability, and suggesting clearer phrasing</li>
            </ul>

            <h2>Where AI Falls Short</h2>
            <ul>
                <li><strong>Original insights</strong> — AI synthesises existing information; it doesn't generate novel perspectives from experience</li>
                <li><strong>Brand voice consistency</strong> — AI output tends toward generic, safe language without careful prompting and editing</li>
                <li><strong>Factual accuracy</strong> — AI can confidently present incorrect information. Every claim needs human verification.</li>
                <li><strong>Emotional depth</strong> — Personal stories, nuanced opinions, and genuine empathy remain distinctly human strengths</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The winning formula is AI-assisted, human-led. Use AI to accelerate the process, but maintain human oversight for strategy, quality, accuracy, and brand voice. The best content combines AI efficiency with human creativity and judgement.</p>
            </div>

            <h2>Quality Standards</h2>
            <p>AI-generated content that's published without significant human editing typically underperforms. Google's guidelines state that AI content is acceptable as long as it's helpful, original, and demonstrates expertise. The bar is quality and usefulness, not how it was produced.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Publishing AI-generated content at volume without quality control. Flooding your blog with mediocre AI content damages your brand reputation and can hurt SEO. Less content with higher quality always wins over more content with lower quality.</p>
            </div>
        `,
        quiz: {
            question: 'What is the recommended approach to using AI in content marketing?',
            options: [
                'Replace all human writers with AI tools',
                'Avoid AI tools entirely',
                'Use AI to accelerate the process but maintain human oversight for quality and accuracy',
                'Only use AI for social media posts, not blog content'
            ],
            correct: 2,
            explanation: 'The winning formula is AI-assisted, human-led. AI accelerates research, drafting, and repurposing, but human oversight is essential for strategy, quality control, factual accuracy, and maintaining authentic brand voice.'
        }
    },

    'cm-4-7': {
        title: 'Social Media Organic Strategy',
        body: `
            <h2>The Reality of Organic Reach</h2>
            <p>Organic reach on social media has declined dramatically. Facebook pages reach approximately 2–5% of followers per post. Instagram is slightly better. LinkedIn and TikTok currently offer the best organic reach. Despite this, organic social remains valuable for brand building, community engagement, and credibility — it's just not a reliable traffic driver alone.</p>

            <h2>Understanding Platform Algorithms</h2>
            <p>Every platform's algorithm prioritises content that keeps users on the platform. To succeed organically:</p>
            <ul>
                <li><strong>Create native content</strong> — Don't just post links. Write the insight directly in the post. Algorithms penalise posts that send users off-platform.</li>
                <li><strong>Drive engagement early</strong> — Posts that get likes, comments, and shares in the first hour get boosted to wider audiences</li>
                <li><strong>Post consistently</strong> — Algorithms reward accounts that post regularly</li>
                <li><strong>Use platform-specific formats</strong> — Reels on Instagram, carousels on LinkedIn, duets on TikTok</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Content pillars keep your social strategy focused. Define 3–5 recurring themes (e.g., industry insights, how-tos, behind-the-scenes, customer stories, thought leadership) and rotate between them. This provides variety while maintaining a coherent brand presence.</p>
            </div>

            <h2>Engagement Strategies</h2>
            <p>Social media is social — one-way broadcasting doesn't work. Engage actively:</p>
            <ul>
                <li>Reply to every comment within the first hour</li>
                <li>Ask questions in your posts to spark discussion</li>
                <li>Comment meaningfully on other people's content in your industry</li>
                <li>Share and celebrate your community's content</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Spend as much time engaging with others' content as you do creating your own. Being an active, valuable community member often drives more growth than posting alone. This is especially true on LinkedIn and Twitter/X.</p>
            </div>
        `,
        quiz: {
            question: 'Why do platform algorithms penalise posts that contain external links?',
            options: [
                'External links cause technical errors',
                'Links take users off-platform, which conflicts with the algorithm\'s goal of keeping users engaged',
                'Posts with links load more slowly',
                'Algorithms can\'t read external websites'
            ],
            correct: 1,
            explanation: 'Social platform algorithms are designed to keep users on the platform. Posts with external links send users away, so algorithms reduce their distribution. This is why native content (where the value is in the post itself) performs better.'
        }
    },

    'cm-4-8': {
        title: 'Community Building as a Marketing Channel',
        body: `
            <h2>Why Community Matters</h2>
            <p>A <strong>brand community</strong> is a group of customers and enthusiasts who gather around a shared interest related to your brand. Communities drive marketing through word-of-mouth, user-generated content, product feedback, and customer retention. The brands with the strongest communities have the lowest customer acquisition costs.</p>

            <h2>Community Platforms</h2>
            <ul>
                <li><strong>Slack/Discord</strong> — Real-time chat communities. Best for professional and tech-savvy audiences. Require active moderation.</li>
                <li><strong>Facebook Groups</strong> — Easy to set up, familiar to most users. Good for consumer brands.</li>
                <li><strong>Circle, Mighty Networks, or custom platforms</strong> — Dedicated community platforms with more control and features.</li>
                <li><strong>Forum/Reddit-style</strong> — Threaded discussions. Best for technical communities with searchable Q&A needs.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best communities are built around a shared mission or challenge, not a product. A community for "people learning digital marketing" will thrive. A community for "users of our marketing tool" will struggle. Give people a reason to gather beyond your product.</p>
            </div>

            <h2>Community-Led Growth</h2>
            <p>Communities can drive growth through:</p>
            <ul>
                <li><strong>Referrals</strong> — Active community members naturally recommend your brand</li>
                <li><strong>Content</strong> — Community discussions generate content ideas and even user-created content</li>
                <li><strong>Product development</strong> — Direct feedback loop for feature requests and improvements</li>
                <li><strong>Support</strong> — Community members help each other, reducing support costs</li>
            </ul>

            <h2>Measuring Community Value</h2>
            <p>Track: active member count, engagement rate, NPS of community members vs non-members, referral rate from community, and retention rate of community members. The last two are the most telling — if community members refer more and stay longer, the community is driving business value.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start small. A community of 50 highly engaged members is more valuable than 5,000 silent ones. Focus on cultivating genuine conversations and relationships before trying to scale. Quality of engagement beats size every time.</p>
            </div>
        `,
        quiz: {
            question: 'What makes a brand community most likely to thrive?',
            options: [
                'Frequent product promotional posts',
                'Being built around a shared mission or challenge rather than a product',
                'Having the largest possible member count',
                'Restricting discussions to product-related topics only'
            ],
            correct: 1,
            explanation: 'Communities thrive when built around a shared mission or challenge that members care about. A community centred solely on a product feels like a support forum, while one centred on a shared interest creates genuine engagement and loyalty.'
        }
    },

    // ==================== ANALYTICS MODULE 1 (REMAINING) ====================

    'an-1-2': {
        title: 'Google Analytics 4: Setup and Interface',
        body: `
            <h2>GA4 vs Universal Analytics</h2>
            <p><strong>Google Analytics 4 (GA4)</strong> replaced Universal Analytics in 2023 as Google's standard analytics platform. GA4 is fundamentally different — it's built on an <strong>event-based model</strong> where every user interaction is tracked as an event, rather than the session-based pageview model of Universal Analytics.</p>
            <p>Key differences:</p>
            <ul>
                <li><strong>Event-based tracking</strong> — Everything is an event: page views, scrolls, clicks, purchases</li>
                <li><strong>Cross-platform</strong> — Tracks users across websites and apps in one property</li>
                <li><strong>Privacy-first</strong> — Designed to work with or without cookies, using machine learning to fill gaps</li>
                <li><strong>Engagement metrics</strong> — Replaces bounce rate with engagement rate, a more useful metric</li>
            </ul>

            <h2>Setting Up GA4</h2>
            <ol>
                <li>Create a GA4 property in your Google Analytics account</li>
                <li>Set up a <strong>data stream</strong> — this connects your website or app to GA4</li>
                <li>Install the GA4 tag via Google Tag Manager or directly in your site's HTML</li>
                <li>Enable <strong>enhanced measurement</strong> to automatically track scrolls, outbound clicks, site search, video engagement, and file downloads</li>
                <li>Set up your key conversion events</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>GA4 uses <strong>data streams</strong> instead of views. A data stream is the flow of data from your website or app to Analytics. For most sites, you'll have one web data stream. If you have an app, you'll add iOS and/or Android streams to the same property.</p>
            </div>

            <h2>Navigating the GA4 Interface</h2>
            <ul>
                <li><strong>Home</strong> — Overview dashboard with key metrics and trends</li>
                <li><strong>Reports</strong> — Pre-built reports for acquisition, engagement, monetisation, and retention</li>
                <li><strong>Explore</strong> — Build custom reports with drag-and-drop dimensions and metrics</li>
                <li><strong>Advertising</strong> — Attribution and conversion path analysis</li>
                <li><strong>Admin</strong> — Property settings, data streams, events, and conversions configuration</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>The Explore section is GA4's most powerful feature. Use it to build custom funnels, path analyses, and cohort reports that the standard reports don't cover. Invest time learning Explorations — it's where the real insights are.</p>
            </div>
        `,
        quiz: {
            question: 'What is the fundamental difference between GA4 and Universal Analytics?',
            options: [
                'GA4 only works with Google Ads',
                'GA4 uses an event-based model where every interaction is an event',
                'GA4 doesn\'t track pageviews',
                'GA4 is only for mobile apps'
            ],
            correct: 1,
            explanation: 'GA4 is built on an event-based model where every user interaction (page views, clicks, scrolls, purchases) is tracked as an event. This is fundamentally different from Universal Analytics\' session-based pageview model.'
        }
    },

    'an-1-3': {
        title: 'Key Metrics Every Marketer Must Know',
        body: `
            <h2>Traffic Metrics</h2>
            <ul>
                <li><strong>Users</strong> — The number of unique visitors to your site. GA4 differentiates between "total users" and "active users" (those who had an engaged session).</li>
                <li><strong>Sessions</strong> — A group of user interactions within a given time frame. One user can have multiple sessions.</li>
                <li><strong>Pageviews</strong> — The total number of pages viewed. Includes repeated views of the same page.</li>
            </ul>

            <h2>Engagement Metrics</h2>
            <ul>
                <li><strong>Engagement rate</strong> — The percentage of sessions that were "engaged" (lasted 10+ seconds, had 2+ pageviews, or had a conversion event). This replaced bounce rate in GA4 and is far more useful.</li>
                <li><strong>Average engagement time</strong> — How long users actively engage with your content (only counts time when the page is in the foreground).</li>
                <li><strong>Pages per session</strong> — How many pages a user views per visit. Higher numbers suggest engaging content and good internal linking.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Engagement rate is the inverse of bounce rate but more accurate. A bounce rate of 70% sounds bad, but if users spend 5 minutes reading your article before leaving, that's actually good behaviour. Engagement rate captures this nuance.</p>
            </div>

            <h2>Conversion and Revenue Metrics</h2>
            <ul>
                <li><strong>Conversion rate</strong> — The percentage of sessions (or users) that complete a desired action. Industry average is 2–5% for most websites.</li>
                <li><strong>Cost per acquisition (CPA)</strong> — Total marketing cost divided by the number of conversions. Tells you how much you pay for each new customer or lead.</li>
                <li><strong>Customer Lifetime Value (LTV)</strong> — The total revenue a customer generates over their entire relationship with your business. Critical for understanding how much you can afford to spend on acquisition.</li>
                <li><strong>Return on Ad Spend (ROAS)</strong> — Revenue from ads divided by ad cost. A ROAS of 4:1 means £4 revenue per £1 spent.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Focusing on vanity metrics (pageviews, followers) instead of business metrics (conversions, revenue, LTV). High traffic with no conversions is just expensive hosting. Always connect metrics to business outcomes.</p>
            </div>
        `,
        quiz: {
            question: 'What does engagement rate measure in GA4?',
            options: [
                'The number of social media interactions per page',
                'The percentage of sessions lasting 10+ seconds, with 2+ pageviews, or a conversion',
                'The average time spent on the website',
                'The percentage of returning visitors'
            ],
            correct: 1,
            explanation: 'GA4\'s engagement rate measures the percentage of sessions that were "engaged" — meaning they lasted 10+ seconds, had 2+ page views, or included a conversion event. It\'s a more meaningful metric than bounce rate.'
        }
    },

    'an-1-4': {
        title: 'Setting Up Goals and Conversions',
        body: `
            <h2>Conversions in GA4</h2>
            <p>In GA4, any event can be marked as a <strong>conversion</strong> (now called "key events"). When an event is marked as a key event, GA4 gives it special treatment in reports, attributing it to traffic sources and including it in conversion-focused analyses.</p>

            <h2>Types of Conversion Events</h2>
            <ul>
                <li><strong>Automatically collected</strong> — first_visit, session_start (not typically useful as conversions)</li>
                <li><strong>Enhanced measurement</strong> — page_view, scroll, click, file_download, video_start, video_complete</li>
                <li><strong>Recommended events</strong> — Standard names Google recommends: purchase, sign_up, generate_lead, add_to_cart</li>
                <li><strong>Custom events</strong> — Events you define for actions specific to your business</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Use Google's recommended event names whenever possible. When you use standard names like "purchase" or "generate_lead," GA4 automatically populates specialised reports and integrations. Custom names won't get this treatment.</p>
            </div>

            <h2>Setting Up Key Events</h2>
            <ol>
                <li><strong>Identify your key actions</strong> — What actions indicate a visitor is valuable? (purchase, form submission, demo request)</li>
                <li><strong>Create or find the event</strong> — Use existing events, modify events with conditions, or create custom events via Google Tag Manager</li>
                <li><strong>Mark as a key event</strong> — In GA4 Admin → Events, toggle the "Mark as key event" switch</li>
                <li><strong>Add value</strong> — For purchase events, include the transaction value. For leads, assign an estimated value based on your lead-to-customer conversion rate.</li>
            </ol>

            <h2>E-Commerce Tracking</h2>
            <p>For online stores, implement the full e-commerce event series: view_item, add_to_cart, begin_checkout, add_payment_info, and purchase. This creates a complete purchase funnel in GA4 that shows where customers drop off.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Assign monetary values to non-revenue conversions. If 10% of your leads become customers worth £1,000 each, a lead is worth £100. Adding this value to your lead event lets you calculate true ROI across all channels in GA4.</p>
            </div>
        `,
        quiz: {
            question: 'Why should you use Google\'s recommended event names in GA4?',
            options: [
                'Custom event names are not allowed',
                'Recommended names automatically populate specialised reports and integrations',
                'Recommended names track faster',
                'Google penalises websites that use custom event names'
            ],
            correct: 1,
            explanation: 'Using Google\'s recommended event names (like "purchase" or "generate_lead") triggers automatic population of specialised reports, e-commerce analysis, and integrations. Custom-named events miss out on these built-in features.'
        }
    },

    // ==================== ANALYTICS MODULE 2: MEASUREMENT AND TRACKING ====================

    'an-2-1': {
        title: 'UTM Parameters and Campaign Tracking',
        body: `
            <h2>What Are UTM Parameters?</h2>
            <p><strong>UTM parameters</strong> (Urchin Tracking Module) are tags added to the end of URLs that tell Google Analytics where traffic came from. When someone clicks a URL with UTM parameters, those tags are captured by GA4 and attributed to the appropriate campaign.</p>

            <h2>The Five UTM Parameters</h2>
            <ul>
                <li><strong>utm_source</strong> — Where the traffic comes from (e.g., "google," "facebook," "newsletter")</li>
                <li><strong>utm_medium</strong> — The marketing medium (e.g., "cpc," "email," "social," "referral")</li>
                <li><strong>utm_campaign</strong> — The specific campaign name (e.g., "summer_sale_2024," "product_launch")</li>
                <li><strong>utm_term</strong> — Optional. Typically used for paid search keywords.</li>
                <li><strong>utm_content</strong> — Optional. Differentiates similar content or links (e.g., "hero_banner" vs "sidebar_link")</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Source, medium, and campaign are the three essential parameters. Always use all three. Term and content are optional but valuable for more granular analysis. Without UTMs, GA4 may misattribute traffic or lump it into "direct."</p>
            </div>

            <h2>Naming Conventions</h2>
            <p>Consistency is everything. Establish and document naming rules:</p>
            <ul>
                <li>Use lowercase only ("Facebook" and "facebook" create separate entries)</li>
                <li>Use underscores instead of spaces</li>
                <li>Be specific but concise</li>
                <li>Create a shared naming document your entire team follows</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Inconsistent UTM naming fragments your data. "facebook," "Facebook," "fb," and "FB" all appear as separate sources in GA4, making it impossible to see your total Facebook traffic in one place. Standardise naming from day one.</p>
            </div>

            <h2>UTM Builder Tools</h2>
            <p>Use Google's Campaign URL Builder or a spreadsheet template to generate UTM-tagged URLs. Some teams use URL shorteners (like Bitly) to make tagged URLs cleaner for sharing. Always test your tagged URLs to verify they land on the correct page and that GA4 captures the parameters correctly.</p>
        `,
        quiz: {
            question: 'Why is inconsistent UTM naming problematic?',
            options: [
                'It causes the website to load slowly',
                'It creates separate entries in analytics, fragmenting your data',
                'It triggers spam filters in email clients',
                'It prevents ads from being approved'
            ],
            correct: 1,
            explanation: 'Inconsistent naming (like "facebook" vs "Facebook" vs "fb") creates separate entries in GA4 for what should be the same source. This fragments your data, making it impossible to see accurate totals for each channel.'
        }
    },

    'an-2-2': {
        title: 'Event Tracking and Custom Dimensions',
        body: `
            <h2>GA4\'s Event-Based Model</h2>
            <p>In GA4, <strong>everything is an event</strong>. Page views, button clicks, form submissions, purchases, scroll depth — all tracked as events with optional parameters that provide additional context. Understanding this model is essential for getting the most out of GA4.</p>

            <h2>Event Categories</h2>
            <ul>
                <li><strong>Automatically collected events</strong> — Tracked without any setup: first_visit, session_start, page_view (with enhanced measurement), user_engagement</li>
                <li><strong>Enhanced measurement events</strong> — Toggle on in settings: scroll, click (outbound), site_search, video_start, video_complete, file_download</li>
                <li><strong>Recommended events</strong> — Events Google suggests for specific business types (login, sign_up, purchase, add_to_cart)</li>
                <li><strong>Custom events</strong> — Events you create for tracking business-specific actions</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Every event can carry <strong>event parameters</strong> — additional data points attached to the event. For example, a "purchase" event includes parameters like value, currency, transaction_id, and items. Parameters turn a basic event into rich, analysable data.</p>
            </div>

            <h2>Custom Dimensions and Metrics</h2>
            <p><strong>Custom dimensions</strong> let you collect and analyse data specific to your business that GA4 doesn't track by default. Examples:</p>
            <ul>
                <li>Logged-in status (member vs guest)</li>
                <li>Subscription tier (free, premium, enterprise)</li>
                <li>Content author or category</li>
                <li>A/B test variant</li>
            </ul>
            <p>Register custom dimensions in GA4 Admin → Custom Definitions. You can have up to 50 event-scoped and 25 user-scoped custom dimensions.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Plan your event tracking before implementing. Create a measurement plan document listing every key action on your site, the event name you'll use, and what parameters you'll send. This prevents messy, ad-hoc tracking that's impossible to analyse later.</p>
            </div>
        `,
        quiz: {
            question: 'What are event parameters in GA4?',
            options: [
                'Settings that control when events fire',
                'Additional data points attached to an event that provide more context',
                'The names you give to custom events',
                'Filters that exclude certain events from reports'
            ],
            correct: 1,
            explanation: 'Event parameters are additional data points attached to an event. For example, a "purchase" event includes parameters like value, currency, and items. Parameters enrich your data and enable more detailed analysis.'
        }
    },

    'an-2-3': {
        title: 'Understanding User Behaviour Reports',
        body: `
            <h2>Pages and Screens Report</h2>
            <p>The <strong>Pages and Screens</strong> report in GA4 shows which pages users visit, how long they engage, and what events they trigger. This is your go-to report for understanding what content resonates and where users spend their time. Sort by engagement time to find your most compelling content, or by views to find your highest-traffic pages.</p>

            <h2>Landing Pages Report</h2>
            <p>The <strong>Landing Pages</strong> report shows the first page users see when they arrive. This is critical because your landing pages set the first impression. Look for pages with high traffic but low engagement — these represent opportunities for improvement that could significantly impact your overall conversion rate.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Combine landing page data with acquisition data to answer: "Which pages attract visitors from which channels, and how well do those visitors convert?" A page might perform brilliantly for organic traffic but poorly for paid traffic, indicating a mismatch between ad messaging and page content.</p>
            </div>

            <h2>Identifying Drop-Off Points</h2>
            <p>Use GA4's <strong>funnel exploration</strong> in the Explore section to visualise where users drop off in multi-step processes (checkout, sign-up, onboarding). Each step shows the completion rate and the percentage of users who abandon. Focus your optimisation efforts on the steps with the highest drop-off rates — these are your biggest opportunities.</p>

            <h2>Content Grouping</h2>
            <p><strong>Content groups</strong> let you categorise pages into logical sections (blog, product pages, help articles, landing pages) so you can analyse performance by content type rather than individual pages. This is especially valuable for large sites with hundreds of pages.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Create a weekly habit of checking: your top 10 landing pages by traffic, your top 5 pages by conversion rate, and your bottom 5 pages by engagement rate. The top pages tell you what's working. The bottom pages tell you where to improve or where to stop driving traffic.</p>
            </div>
        `,
        quiz: {
            question: 'What does the Landing Pages report tell you?',
            options: [
                'Which pages are linked to the most from other websites',
                'The first page users see when they arrive at your site',
                'Which pages have the most outbound links',
                'Pages that are designed specifically for ad campaigns'
            ],
            correct: 1,
            explanation: 'The Landing Pages report shows the first page users see when they visit your site. This is crucial because these pages create the first impression and have the biggest impact on whether visitors stay or leave.'
        }
    },

    'an-2-4': {
        title: 'Building Marketing Dashboards',
        body: `
            <h2>Why Dashboards Matter</h2>
            <p>A well-built dashboard transforms raw data into actionable insights at a glance. Instead of digging through multiple tools and reports, dashboards surface the metrics that matter most — enabling faster, better decisions.</p>

            <h2>Looker Studio (Google Data Studio)</h2>
            <p><strong>Looker Studio</strong> is Google's free dashboard tool. It connects to GA4, Google Ads, Search Console, Google Sheets, and many other data sources. Key capabilities:</p>
            <ul>
                <li>Drag-and-drop report builder with charts, tables, and scorecards</li>
                <li>Real-time data updates from connected sources</li>
                <li>Shareable via link — no recipient login needed</li>
                <li>Blending data from multiple sources in one dashboard</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best dashboards answer specific questions, not just display data. Before building, write down the 5–7 questions your stakeholders ask most frequently. Design every chart and metric to answer one of those questions.</p>
            </div>

            <h2>Key Dashboard Components</h2>
            <ul>
                <li><strong>KPI scorecards</strong> — Top-level numbers with comparison to previous period (traffic, conversions, revenue)</li>
                <li><strong>Trend charts</strong> — Time-series showing performance over weeks or months</li>
                <li><strong>Channel breakdown</strong> — Pie or bar charts showing performance by traffic source</li>
                <li><strong>Top content table</strong> — Your best-performing pages ranked by the relevant metric</li>
                <li><strong>Campaign performance</strong> — Active campaign results vs targets</li>
            </ul>

            <h2>Dashboard Design Principles</h2>
            <ul>
                <li>Start with the big picture (KPIs at top), then drill into details below</li>
                <li>Use consistent colours and formatting</li>
                <li>Limit to one page if possible — scrolling dashboards get ignored</li>
                <li>Add date range controls so users can explore different periods</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Build separate dashboards for different audiences. Executives want a one-page overview with KPIs and trends. Marketing managers want channel-level detail. Campaign managers want granular campaign metrics. One dashboard trying to serve everyone serves no one well.</p>
            </div>
        `,
        quiz: {
            question: 'What should you do BEFORE building a dashboard?',
            options: [
                'Choose the most visually appealing chart types',
                'Write down the 5–7 questions your stakeholders ask most frequently',
                'Connect as many data sources as possible',
                'Add every available metric to the dashboard'
            ],
            correct: 1,
            explanation: 'Starting with your stakeholders\' most common questions ensures every element of your dashboard has a purpose. Dashboards designed around questions drive decisions; dashboards designed around available data create information overload.'
        }
    },

    // ==================== ANALYTICS MODULE 3: ADVANCED ANALYTICS ====================

    'an-3-1': {
        title: 'Attribution Models Explained',
        body: `
            <h2>What Is Attribution?</h2>
            <p><strong>Attribution</strong> is the process of assigning credit for a conversion to the marketing touchpoints that contributed to it. Most customers interact with multiple channels before converting — they might see a social ad, click a search result, read an email, and then convert. Attribution models determine how credit is distributed among those touchpoints.</p>

            <h2>Common Attribution Models</h2>
            <ul>
                <li><strong>Last Click</strong> — 100% credit to the final touchpoint before conversion. Simple but ignores everything that came before.</li>
                <li><strong>First Click</strong> — 100% credit to the first touchpoint. Values discovery but ignores the conversion journey.</li>
                <li><strong>Linear</strong> — Equal credit to every touchpoint. Fair but doesn't reflect that some touches matter more than others.</li>
                <li><strong>Time Decay</strong> — More credit to touchpoints closer to the conversion. Reflects the assumption that recent interactions are more influential.</li>
                <li><strong>Position-Based</strong> — 40% to first touch, 40% to last touch, 20% spread among middle touches. Values both discovery and closing.</li>
                <li><strong>Data-Driven</strong> — Uses machine learning to assign credit based on actual conversion probability. GA4's default and most accurate model.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>No attribution model is "correct" — each tells a different story about which channels drive value. Data-driven attribution is the most sophisticated, but understanding all models helps you interpret results and communicate with stakeholders who may use different models.</p>
            </div>

            <h2>Choosing the Right Model</h2>
            <p>For most businesses, <strong>data-driven attribution</strong> (GA4's default) is the best starting point because it uses your actual data to determine credit allocation. However, you need sufficient conversion volume for it to work well — at least 400 conversions per month with multiple touchpoint types.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Relying solely on last-click attribution. This systematically undervalues top-of-funnel channels (social, display, content) that introduce customers to your brand but don't typically generate the final click. This leads to over-investing in bottom-funnel channels.</p>
            </div>
        `,
        quiz: {
            question: 'Which attribution model gives 40% credit to the first touch, 40% to the last touch, and distributes 20% among middle touches?',
            options: [
                'Linear',
                'Time Decay',
                'Position-Based',
                'Data-Driven'
            ],
            correct: 2,
            explanation: 'The Position-Based (or U-shaped) model assigns 40% credit to the first interaction and 40% to the last interaction, with the remaining 20% spread evenly among any middle touchpoints. It values both discovery and closing.'
        }
    },

    'an-3-2': {
        title: 'Multi-Touch Attribution in Practice',
        body: `
            <h2>The Challenge of Multi-Touch</h2>
            <p>In reality, customers rarely convert from a single touchpoint. A typical B2B buyer might have 8–15 marketing interactions before purchasing. <strong>Multi-touch attribution</strong> attempts to credit each of these interactions fairly, but it faces significant practical challenges.</p>

            <h2>Practical Challenges</h2>
            <ul>
                <li><strong>Cross-device tracking</strong> — The same person browsing on their phone, then purchasing on their laptop, appears as two different users unless they're logged in</li>
                <li><strong>Walled gardens</strong> — Platforms like Meta and Google don't share user-level data with each other</li>
                <li><strong>Offline touchpoints</strong> — TV ads, word-of-mouth, events, and phone calls are hard to attribute</li>
                <li><strong>Privacy restrictions</strong> — Cookie limitations and privacy regulations reduce available tracking data</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Multi-touch attribution gives you a directional picture, not an exact one. Accept that no model captures 100% of the journey. Use attribution data to make better decisions, not perfect ones. "Roughly right" beats "precisely wrong."</p>
            </div>

            <h2>Customer Journey Mapping</h2>
            <p>Use GA4's <strong>conversion paths</strong> report (under Advertising) to see the actual sequences of channels users take before converting. This reveals common patterns — for example, you might discover that 40% of converters first arrive via organic search, then return via email. These paths inform budget allocation.</p>

            <h2>Incrementality Testing</h2>
            <p>The most accurate way to measure a channel's true impact is <strong>incrementality testing</strong>: turn a channel off for a defined period and measure the difference in conversions. If you turn off Facebook ads and see 30% fewer total conversions, Facebook is driving 30% incremental lift. This bypasses all attribution modelling complexity.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use a "triangulation" approach: compare platform-reported conversions, GA4 attributed conversions, and incrementality test results. Where all three agree, you have confidence. Where they diverge significantly, investigate further before making budget decisions.</p>
            </div>
        `,
        quiz: {
            question: 'What is incrementality testing?',
            options: [
                'Gradually increasing ad budgets to measure ROAS changes',
                'Turning a channel off to measure the actual difference in conversions',
                'Running A/B tests on landing pages',
                'Comparing different attribution models side by side'
            ],
            correct: 1,
            explanation: 'Incrementality testing measures a channel\'s true impact by turning it off (or on) for a period and measuring the resulting change in conversions. It\'s the most accurate way to determine how much value a channel actually adds.'
        }
    },

    'an-3-3': {
        title: 'Cohort Analysis and Retention Metrics',
        body: `
            <h2>What Is Cohort Analysis?</h2>
            <p>A <strong>cohort</strong> is a group of users who share a common characteristic within a defined time period. <strong>Cohort analysis</strong> tracks how these groups behave over time. The most common type is an <strong>acquisition cohort</strong> — grouping users by when they first visited, then measuring their activity in subsequent weeks or months.</p>

            <h2>Types of Cohorts</h2>
            <ul>
                <li><strong>Acquisition cohorts</strong> — Users grouped by when they first arrived (e.g., "users acquired in January"). Track whether they return and convert over time.</li>
                <li><strong>Behavioural cohorts</strong> — Users grouped by an action they took (e.g., "users who downloaded the ebook"). Compare their conversion rates to those who didn't.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Cohort analysis reveals whether your marketing is improving over time. If January's cohort has a 5% conversion rate and March's cohort has an 8% conversion rate, your overall funnel is improving — even if total conversion rate appears flat (because the larger January cohort is still in the mix).</p>
            </div>

            <h2>Key Retention Metrics</h2>
            <ul>
                <li><strong>Retention rate</strong> — The percentage of users who return after their first visit. Measured at intervals (Day 1, Week 1, Month 1).</li>
                <li><strong>Churn rate</strong> — The percentage of customers who stop using your product or cancel within a period. The inverse of retention.</li>
                <li><strong>Repeat purchase rate</strong> — The percentage of customers who buy more than once. Critical for e-commerce profitability.</li>
                <li><strong>Customer Lifetime Value (LTV)</strong> — Average revenue per customer × average customer lifespan. The ultimate retention metric.</li>
            </ul>

            <h2>Using Cohorts in GA4</h2>
            <p>GA4 has a built-in <strong>cohort exploration</strong> in the Explore section. Set the cohort inclusion criteria, the return criteria, and the granularity (daily, weekly, monthly). This visualises how user engagement changes over time and helps identify when users typically drop off.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Compare cohorts from different acquisition channels. You might find that users from organic search have much better retention than users from paid social. This insight should influence how you value and invest in each channel — a channel with better retention is worth a higher CPA.</p>
            </div>
        `,
        quiz: {
            question: 'What does an acquisition cohort track?',
            options: [
                'Users grouped by their geographic location',
                'Users grouped by when they first arrived, tracked over subsequent periods',
                'Users grouped by their device type',
                'Users grouped by their spending level'
            ],
            correct: 1,
            explanation: 'An acquisition cohort groups users by when they were first acquired (e.g., all users who first visited in January) and then tracks their behaviour over subsequent time periods — revealing retention patterns and long-term value.'
        }
    },

    'an-3-4': {
        title: 'Marketing Mix Modelling Overview',
        body: `
            <h2>What Is Marketing Mix Modelling?</h2>
            <p><strong>Marketing Mix Modelling (MMM)</strong> is a statistical technique that analyses the impact of various marketing activities on business outcomes (usually revenue or sales). Unlike digital attribution, MMM uses aggregate data and regression analysis to estimate how much each marketing channel contributes to results.</p>

            <h2>How MMM Differs From Attribution</h2>
            <ul>
                <li><strong>Attribution</strong> tracks individual user journeys using cookies and clicks. It's digital-only and increasingly limited by privacy changes.</li>
                <li><strong>MMM</strong> uses aggregate data (total spend per channel, total revenue per period) to find statistical relationships. It can include offline channels (TV, radio, out-of-home) and external factors (seasonality, weather, economic conditions).</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>MMM answers "how much did each channel contribute to overall results?" while attribution answers "which touchpoints did this individual user interact with?" They're complementary, not competing approaches. Many sophisticated marketers use both.</p>
            </div>

            <h2>What MMM Needs</h2>
            <ul>
                <li>At least 2–3 years of weekly or monthly data</li>
                <li>Marketing spend by channel over time</li>
                <li>Business outcome data (revenue, leads, units sold)</li>
                <li>External variables (seasonality, promotions, competitor activity)</li>
            </ul>

            <h2>When to Use MMM</h2>
            <p>MMM is most valuable for businesses with significant offline marketing spend, large overall budgets, or where privacy restrictions limit digital tracking. It's traditionally been used by enterprise brands, but modern open-source tools (like Meta's Robyn and Google's Meridian) are making it accessible to smaller businesses.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Treating MMM results as definitive truth. MMM provides estimates based on statistical models, not exact measurements. Results depend on data quality, model assumptions, and the time period analysed. Use MMM insights directionally, validated against other data sources.</p>
            </div>
        `,
        quiz: {
            question: 'What is a key advantage MMM has over digital attribution?',
            options: [
                'MMM is more accurate for individual user journeys',
                'MMM can measure offline channels like TV and radio alongside digital',
                'MMM works in real-time',
                'MMM doesn\'t require any historical data'
            ],
            correct: 1,
            explanation: 'MMM\'s key advantage is that it can measure the impact of both online and offline marketing channels (TV, radio, print, out-of-home) in a single model, giving a holistic view of marketing effectiveness that digital attribution cannot provide.'
        }
    },

    'an-3-5': {
        title: 'Privacy, Cookies, and the Future of Tracking',
        body: `
            <h2>The Privacy Landscape</h2>
            <p>Marketing analytics is undergoing a fundamental shift driven by privacy regulations, browser restrictions, and changing consumer expectations. The era of tracking users across the web with third-party cookies is ending, and marketers need new strategies.</p>

            <h2>Key Privacy Changes</h2>
            <ul>
                <li><strong>GDPR (EU/UK)</strong> — Requires explicit consent before tracking. Cookie banners and consent management platforms are mandatory. Significant fines for non-compliance.</li>
                <li><strong>iOS App Tracking Transparency</strong> — Apple requires apps to ask permission before tracking. Roughly 75% of users opt out, dramatically reducing Meta and other platforms' tracking data.</li>
                <li><strong>Third-party cookie restrictions</strong> — Safari and Firefox already block third-party cookies. Chrome has been moving toward restrictions as well.</li>
                <li><strong>Browser privacy features</strong> — Increasing built-in protections against cross-site tracking</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The shift isn't "tracking is dead." It's "tracking based on following users across third-party sites is ending." First-party data (data you collect directly from your users with consent) becomes your most valuable asset.</p>
            </div>

            <h2>First-Party Data Strategy</h2>
            <p>Your first-party data strategy should focus on:</p>
            <ul>
                <li>Building direct relationships where users share data voluntarily (email lists, accounts, loyalty programmes)</li>
                <li>Using server-side tracking to maintain data quality</li>
                <li>Implementing proper consent management</li>
                <li>Using GA4's modelling features to fill gaps from consent-denied users</li>
            </ul>

            <h2>Cookieless Alternatives</h2>
            <ul>
                <li><strong>Server-side tracking</strong> — Moves tracking from the browser to your server, bypassing browser restrictions</li>
                <li><strong>Conversion APIs</strong> — Direct server-to-server connections with ad platforms (Meta CAPI, Google Enhanced Conversions)</li>
                <li><strong>Privacy Sandbox</strong> — Google's initiative for privacy-preserving ad targeting</li>
                <li><strong>Contextual targeting</strong> — Showing ads based on page content, not user profiles</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Ignoring privacy compliance and hoping enforcement won't reach you. GDPR fines have exceeded €4 billion since 2018. Invest in proper consent management and privacy-compliant tracking now — it's both a legal obligation and a competitive advantage as users increasingly reward trustworthy brands.</p>
            </div>
        `,
        quiz: {
            question: 'What percentage of iOS users typically opt out of tracking when asked by App Tracking Transparency?',
            options: [
                'About 25%',
                'About 50%',
                'About 75%',
                'About 95%'
            ],
            correct: 2,
            explanation: 'Approximately 75% of iOS users opt out of tracking when presented with the App Tracking Transparency prompt. This has significantly reduced the tracking data available to platforms like Meta for ad targeting and measurement.'
        }
    },

    'an-3-6': {
        title: 'Data Storytelling: Presenting Insights',
        body: `
            <h2>From Data to Narrative</h2>
            <p>Raw data doesn't drive decisions — stories do. <strong>Data storytelling</strong> is the skill of translating analytics into clear narratives that inspire action. The best marketers aren't just data literate; they can communicate findings so that stakeholders understand what happened, why it matters, and what to do next.</p>

            <h2>The Three Elements of Data Stories</h2>
            <ul>
                <li><strong>Data</strong> — The accurate, relevant numbers that support your narrative</li>
                <li><strong>Visuals</strong> — Charts and graphics that make patterns immediately obvious</li>
                <li><strong>Narrative</strong> — The context, interpretation, and recommended actions that give the data meaning</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Lead with the insight, not the data. Instead of "organic traffic increased 23% MoM," say "Our SEO investment is paying off — organic traffic grew 23% this month, driving 40 additional leads worth an estimated £12,000." Connect numbers to business impact.</p>
            </div>

            <h2>Chart Selection Guide</h2>
            <ul>
                <li><strong>Line charts</strong> — Trends over time (traffic, revenue, rankings)</li>
                <li><strong>Bar charts</strong> — Comparing categories (channel performance, campaign results)</li>
                <li><strong>Pie charts</strong> — Composition/proportion (traffic source mix). Use sparingly — hard to read with many segments.</li>
                <li><strong>Tables</strong> — Detailed data with multiple dimensions (campaign details, keyword performance)</li>
                <li><strong>Scorecards</strong> — Single KPI with comparison to target or previous period</li>
            </ul>

            <h2>Presenting to Different Audiences</h2>
            <ul>
                <li><strong>Executives</strong> — Business outcomes first, 3–5 slides max, clear recommendations. They want "what should we do?" not "here's all the data."</li>
                <li><strong>Marketing managers</strong> — Channel-level performance, trends, optimisation opportunities. Balance of overview and detail.</li>
                <li><strong>Specialists</strong> — Granular data, specific metrics, detailed tactical recommendations.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>End every report or presentation with a clear "So What?" section. List 3–5 specific actions you recommend based on the data. Reports without recommendations are just information — reports with recommendations drive business impact.</p>
            </div>
        `,
        quiz: {
            question: 'What should you lead with when presenting data to executives?',
            options: [
                'The methodology used to collect the data',
                'Every available metric in detailed tables',
                'Business outcomes and clear recommendations',
                'Technical explanations of tracking setup'
            ],
            correct: 2,
            explanation: 'Executives want to know the business impact and what actions to take. Lead with outcomes (revenue, leads, growth), keep it to 3–5 slides, and end with clear recommendations. Save the detailed data for supporting appendices.'
        }
    },

    'an-3-7': {
        title: 'Server-Side Tracking Fundamentals',
        body: `
            <h2>Client-Side vs Server-Side Tracking</h2>
            <p>Traditional <strong>client-side tracking</strong> uses JavaScript tags in the user's browser to send data to analytics and ad platforms. <strong>Server-side tracking</strong> moves this process to your server — the browser sends data to your server first, which then forwards it to analytics platforms. This seemingly simple change has profound implications for data quality.</p>

            <h2>Why Server-Side Tracking Matters</h2>
            <ul>
                <li><strong>Bypasses ad blockers</strong> — Ad blockers can't block requests to your own server domain</li>
                <li><strong>Survives browser restrictions</strong> — Not affected by third-party cookie blocks or ITP (Intelligent Tracking Prevention)</li>
                <li><strong>Better data quality</strong> — Typically captures 15–30% more conversion data than client-side alone</li>
                <li><strong>More control</strong> — You decide what data is sent to which platform, enabling better privacy compliance</li>
                <li><strong>Faster pages</strong> — Fewer third-party scripts loading in the browser improves page speed</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Server-side tracking doesn't replace client-side tracking — it complements it. The best setup runs both: client-side for real-time user experience features (like personalisation) and server-side for reliable data collection and conversion tracking.</p>
            </div>

            <h2>Implementation Approaches</h2>
            <ul>
                <li><strong>Google Tag Manager Server-Side</strong> — Google's solution. Runs a server-side GTM container in Google Cloud. Processes tags on your server before forwarding to platforms.</li>
                <li><strong>Meta Conversions API (CAPI)</strong> — Direct server-to-Meta connection for sending conversion data. Works alongside the Meta Pixel.</li>
                <li><strong>Google Enhanced Conversions</strong> — Sends hashed first-party data to Google from your server to improve conversion measurement.</li>
            </ul>

            <h2>Costs and Complexity</h2>
            <p>Server-side tracking requires server infrastructure (Google Cloud, AWS, or similar), technical implementation knowledge, and ongoing maintenance. Monthly hosting costs typically range from £30–£200+ depending on traffic volume. The investment is justified for businesses where accurate conversion data directly impacts media spend decisions.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start with Meta CAPI and Google Enhanced Conversions before building a full server-side GTM setup. These platform-specific solutions capture most of the data quality benefit with less complexity and cost than a comprehensive server-side implementation.</p>
            </div>
        `,
        quiz: {
            question: 'How much more conversion data does server-side tracking typically capture compared to client-side alone?',
            options: [
                '1–5% more',
                '15–30% more',
                '50–70% more',
                '90–100% more'
            ],
            correct: 1,
            explanation: 'Server-side tracking typically captures 15–30% more conversion data than client-side alone. This is because it bypasses ad blockers, browser restrictions, and third-party cookie limitations that prevent client-side tags from firing.'
        }
    },

    // ==================== GROWTH MODULE 1 (REMAINING) ====================

    'gr-1-2': {
        title: 'The Growth Framework: Acquisition, Activation, Retention',
        body: `
            <h2>The Pirate Metrics Deep Dive</h2>
            <p>The <strong>AARRR framework</strong> (Pirate Metrics) maps the complete customer lifecycle into five stages. Understanding each stage helps you identify where your biggest growth opportunities and bottlenecks are.</p>
            <ul>
                <li><strong>Acquisition</strong> — How do users find you? (SEO, ads, referrals, social media)</li>
                <li><strong>Activation</strong> — Do users have a great first experience? (sign-up completion, first value moment, onboarding success)</li>
                <li><strong>Retention</strong> — Do users come back? (return visits, repeat purchases, continued engagement)</li>
                <li><strong>Revenue</strong> — Do users pay or generate value? (conversions, purchases, upgrades)</li>
                <li><strong>Referral</strong> — Do users tell others? (shares, referral invites, word-of-mouth)</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Most companies over-invest in Acquisition and under-invest in Activation and Retention. But improving retention from 5% to 10% doubles your recurring user base over time. Fixing a leaky bucket is more impactful than pouring more water into it.</p>
            </div>

            <h2>The North Star Metric</h2>
            <p>A <strong>North Star Metric</strong> is the single metric that best captures the core value your product delivers to customers. Examples: Airbnb = nights booked, Slack = messages sent, Spotify = time spent listening. It aligns the entire growth team around one measurable goal.</p>

            <h2>Growth Accounting</h2>
            <p><strong>Growth accounting</strong> breaks down user growth into its components: new users + reactivated users − churned users = net growth. This reveals whether growth is coming from acquiring new users or retaining existing ones — crucial for deciding where to focus.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Map your AARRR funnel with real numbers. Calculate the conversion rate between each stage. The stage with the biggest drop-off is your highest-leverage growth opportunity. A 10% improvement at the biggest bottleneck will have more impact than a 50% improvement at a minor one.</p>
            </div>
        `,
        quiz: {
            question: 'Which stage of the AARRR framework is typically most underinvested in?',
            options: [
                'Acquisition',
                'Activation and Retention',
                'Revenue',
                'Referral'
            ],
            correct: 1,
            explanation: 'Most companies over-invest in Acquisition (getting new users) while under-investing in Activation and Retention. Improving retention has a compounding effect — keeping more existing users is often more impactful than acquiring new ones.'
        }
    },

    'gr-1-3': {
        title: 'Finding Your Growth Levers',
        body: `
            <h2>Quantitative Funnel Analysis</h2>
            <p>Finding growth levers starts with mapping your funnel with real data. For each stage of AARRR, calculate the conversion rate and the absolute number of users. This reveals where users drop off and where small improvements would have the biggest absolute impact.</p>
            <p>Example funnel:</p>
            <ul>
                <li>10,000 visitors → 500 sign-ups (5% conversion)</li>
                <li>500 sign-ups → 100 activated users (20% activation)</li>
                <li>100 activated → 40 retained at month 2 (40% retention)</li>
                <li>40 retained → 15 paid conversions (37.5% monetisation)</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>In this example, improving activation from 20% to 30% adds 50 more activated users — more impactful than increasing traffic by 50% (which only adds 25 more activated users at the same 20% rate). Work on the biggest percentage drop-off first.</p>
            </div>

            <h2>ICE Scoring for Opportunities</h2>
            <p>Once you've identified potential growth levers, prioritise them using the <strong>ICE framework</strong>:</p>
            <ul>
                <li><strong>Impact</strong> — How much improvement will this drive? (1–10)</li>
                <li><strong>Confidence</strong> — How sure are you it will work? (1–10)</li>
                <li><strong>Ease</strong> — How easy is it to implement? (1–10)</li>
            </ul>
            <p>Score = Impact × Confidence × Ease. Tackle the highest-scoring items first.</p>

            <h2>Quick Wins vs Strategic Bets</h2>
            <p>A balanced growth strategy combines both:</p>
            <ul>
                <li><strong>Quick wins</strong> — High confidence, high ease, moderate impact. Ship fast, build momentum, and learn.</li>
                <li><strong>Strategic bets</strong> — High impact, lower confidence, more effort. These can transform your growth trajectory but require patience and iteration.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Always have 2–3 quick wins in progress alongside 1 strategic bet. Quick wins maintain team momentum and produce learnings, while strategic bets pursue step-change improvements. All quick wins and no big swings leads to local optimisation without breakthrough growth.</p>
            </div>
        `,
        quiz: {
            question: 'In the ICE prioritisation framework, what does the "C" stand for?',
            options: [
                'Cost',
                'Confidence',
                'Conversion',
                'Complexity'
            ],
            correct: 1,
            explanation: 'ICE stands for Impact, Confidence, and Ease. Confidence measures how sure you are that the initiative will work. A high-impact idea with low confidence might score lower than a moderate-impact idea you\'re very confident about.'
        }
    },

    // ==================== GROWTH MODULE 2: EXPERIMENTATION AND TESTING ====================

    'gr-2-1': {
        title: 'A/B Testing Fundamentals',
        body: `
            <h2>What Is A/B Testing?</h2>
            <p>An <strong>A/B test</strong> (or split test) compares two versions of a page, email, or ad to determine which performs better. Half your audience sees Version A (the control), half sees Version B (the variant), and you measure which version achieves more conversions, clicks, or whatever metric you're optimising for.</p>

            <h2>The Testing Process</h2>
            <ol>
                <li><strong>Form a hypothesis</strong> — "Changing the CTA from 'Learn More' to 'Start Free Trial' will increase sign-ups because it's more specific and action-oriented."</li>
                <li><strong>Create the variant</strong> — Change only one element at a time so you know exactly what caused the difference.</li>
                <li><strong>Determine sample size</strong> — Calculate how much traffic you need for a statistically valid result (use a sample size calculator).</li>
                <li><strong>Run the test</strong> — Split traffic evenly and let it run until you reach statistical significance.</li>
                <li><strong>Analyse and act</strong> — If there's a clear winner, implement it. Document the learning regardless of outcome.</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Every test produces a learning, whether it wins, loses, or draws. A "failed" test that shows no difference tells you that element isn't a driver of user behaviour — which is valuable information that prevents future wasted effort.</p>
            </div>

            <h2>Common Elements to Test</h2>
            <ul>
                <li>Headlines and value propositions</li>
                <li>CTA button text, colour, and placement</li>
                <li>Form length and fields</li>
                <li>Page layout and content order</li>
                <li>Pricing presentation</li>
                <li>Social proof placement and type</li>
                <li>Images and hero sections</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Ending tests too early because one variant looks better after a day. Early results are often misleading due to small sample sizes and temporal effects (different types of users visit at different times). Always wait for your pre-determined sample size before calling a result.</p>
            </div>
        `,
        quiz: {
            question: 'Why should you change only one element at a time in an A/B test?',
            options: [
                'Testing tools can only handle one change at a time',
                'So you know exactly which change caused the performance difference',
                'Multiple changes make the page load slower',
                'Google penalises pages with multiple simultaneous changes'
            ],
            correct: 1,
            explanation: 'Changing one element at a time ensures that any performance difference can be attributed to that specific change. If you change the headline AND the CTA simultaneously, you can\'t know which change drove the result.'
        }
    },

    'gr-2-2': {
        title: 'Statistical Significance and Sample Size',
        body: `
            <h2>What Is Statistical Significance?</h2>
            <p><strong>Statistical significance</strong> is the likelihood that the difference between your test variants is real and not due to random chance. The standard threshold is <strong>95% confidence</strong> — meaning there's only a 5% probability that the observed difference happened by chance.</p>

            <h2>Key Statistical Concepts</h2>
            <ul>
                <li><strong>P-value</strong> — The probability that the observed result occurred by chance. A p-value below 0.05 (5%) is considered statistically significant at the 95% confidence level.</li>
                <li><strong>Confidence interval</strong> — The range within which the true difference likely falls. Narrower intervals mean more precise results.</li>
                <li><strong>Statistical power</strong> — The probability of detecting a real difference when one exists. Aim for 80% power minimum.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Statistical significance doesn't mean the result is important — it means it's unlikely to be random. A statistically significant 0.1% improvement in conversion rate is real but may not be worth implementing. Always consider practical significance alongside statistical significance.</p>
            </div>

            <h2>Calculating Sample Size</h2>
            <p>Before starting a test, calculate the minimum sample size needed. This depends on:</p>
            <ul>
                <li><strong>Baseline conversion rate</strong> — Your current conversion rate</li>
                <li><strong>Minimum detectable effect</strong> — The smallest improvement you care about (e.g., 10% relative improvement)</li>
                <li><strong>Significance level</strong> — Typically 95% (p < 0.05)</li>
                <li><strong>Statistical power</strong> — Typically 80%</li>
            </ul>
            <p>Use free online calculators (Evan Miller's, Optimizely's) to determine your required sample size. This tells you how long the test needs to run.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>"Peeking" at results before reaching the required sample size and stopping the test when one variant looks better. This inflates your false positive rate dramatically. Set your sample size in advance and commit to running the test to completion.</p>
            </div>
        `,
        quiz: {
            question: 'What does a p-value of 0.03 mean in the context of an A/B test?',
            options: [
                'The variant is 3% better than the control',
                'There is a 3% probability that the observed difference is due to random chance',
                'The test needs 3% more data to be conclusive',
                'The conversion rate improved by 3 percentage points'
            ],
            correct: 1,
            explanation: 'A p-value of 0.03 means there is a 3% probability that the observed difference between variants occurred by random chance. Since this is below the standard 0.05 threshold, the result would be considered statistically significant.'
        }
    },

    'gr-2-3': {
        title: 'Building an Experimentation Culture',
        body: `
            <h2>Why Culture Matters More Than Tools</h2>
            <p>The most sophisticated testing tools are worthless without a culture that values experimentation. An experimentation culture means the organisation makes decisions based on evidence rather than opinions, treats failures as learning opportunities, and continuously tests assumptions.</p>

            <h2>Getting Organisational Buy-In</h2>
            <ul>
                <li><strong>Start with a visible win</strong> — Run one high-impact test, share the results widely, and quantify the revenue impact. Nothing sells experimentation like a proven result.</li>
                <li><strong>Frame tests as risk reduction</strong> — "Instead of rebuilding the entire landing page based on a hunch, let's test the headline change first." Testing reduces the risk of expensive mistakes.</li>
                <li><strong>Make results accessible</strong> — Share test results in a central place (wiki, dashboard, Slack channel). Transparency builds trust in the process.</li>
                <li><strong>Celebrate learnings, not just wins</strong> — A test that disproves a hypothesis is as valuable as one that confirms it. Both advance your understanding.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>In a healthy experimentation culture, "I don't know — let's test it" is a badge of intellectual honesty, not a sign of incompetence. The best growth teams have the humility to admit they can't predict user behaviour and the discipline to test their assumptions.</p>
            </div>

            <h2>Experimentation Velocity</h2>
            <p><strong>Experimentation velocity</strong> — the number of tests run per time period — is a leading indicator of growth. Top growth teams run 10–30+ experiments per month. Higher velocity means faster learning and faster compounding of improvements.</p>

            <h2>Team Structure</h2>
            <p>Dedicated experimentation requires: someone to generate hypotheses (product/growth), someone to implement tests (engineering/design), someone to analyse results (analytics), and someone to prioritise the backlog (growth lead). Small teams can cover this with 2–3 people wearing multiple hats.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Maintain a test archive documenting every experiment: hypothesis, variants, results, and learnings. This institutional knowledge prevents re-running failed tests and compounds insights over time. It's one of the most valuable assets a growth team can build.</p>
            </div>
        `,
        quiz: {
            question: 'What is experimentation velocity?',
            options: [
                'How fast each individual test reaches statistical significance',
                'The number of tests run per time period',
                'The speed at which test results are implemented',
                'How quickly the testing tool loads'
            ],
            correct: 1,
            explanation: 'Experimentation velocity is the number of experiments run per time period (usually per month). Higher velocity means faster learning and faster compounding of improvements. Top growth teams aim for 10–30+ experiments per month.'
        }
    },

    'gr-2-4': {
        title: 'Prioritisation Frameworks: ICE and RICE',
        body: `
            <h2>Why Prioritisation Matters</h2>
            <p>Growth teams always have more ideas than capacity. Without a systematic way to prioritise, teams default to working on whatever the loudest stakeholder wants or whatever seems most exciting. Prioritisation frameworks bring objectivity to these decisions.</p>

            <h2>ICE Framework</h2>
            <p>Score each idea on three dimensions (1–10 scale):</p>
            <ul>
                <li><strong>Impact</strong> — How much will this move the needle on our target metric?</li>
                <li><strong>Confidence</strong> — How sure are we about the estimated impact? (Based on data, past results, or just a hunch?)</li>
                <li><strong>Ease</strong> — How easy and fast is this to implement?</li>
            </ul>
            <p><strong>ICE Score = Impact × Confidence × Ease</strong></p>

            <h2>RICE Framework</h2>
            <p>RICE adds a Reach dimension, making it more suitable for product and feature decisions:</p>
            <ul>
                <li><strong>Reach</strong> — How many users/customers will this affect per quarter? (Use a real number, not a 1–10 scale)</li>
                <li><strong>Impact</strong> — How much will it affect each person? (Scale: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal)</li>
                <li><strong>Confidence</strong> — How confident are you? (100% = high, 80% = medium, 50% = low)</li>
                <li><strong>Effort</strong> — Person-months of work required</li>
            </ul>
            <p><strong>RICE Score = (Reach × Impact × Confidence) ÷ Effort</strong></p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>ICE is simpler and better for quick prioritisation of experiments and growth ideas. RICE is more precise and better for product feature decisions where you can estimate reach accurately. Choose the framework that fits your team's needs and stick with it consistently.</p>
            </div>

            <h2>Building a Prioritised Backlog</h2>
            <p>Score every idea, rank by score, and work from the top. Review and re-score monthly as you learn from completed tests and market conditions change. The backlog should be a living document, not a static list.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Scoring inflated by enthusiasm bias. Team members naturally score their own ideas higher. Combat this by having multiple people score each idea independently, then averaging the scores. Calibrate by reviewing past scores against actual outcomes.</p>
            </div>
        `,
        quiz: {
            question: 'What additional dimension does RICE add compared to ICE?',
            options: [
                'Revenue',
                'Reach — the number of users affected',
                'Risk',
                'Resources'
            ],
            correct: 1,
            explanation: 'RICE adds Reach — the number of users or customers the idea will affect per quarter. This makes it more precise than ICE for product decisions where you can estimate how many people a change will impact.'
        }
    },

    // ==================== GROWTH MODULE 3: CONVERSION RATE OPTIMISATION ====================

    'gr-3-1': {
        title: 'CRO Foundations: Where to Start',
        body: `
            <h2>What Is CRO?</h2>
            <p><strong>Conversion Rate Optimisation (CRO)</strong> is the systematic process of increasing the percentage of website visitors who take a desired action — purchasing, signing up, filling out a form, or any other goal. CRO makes your existing traffic more valuable without needing to acquire more visitors.</p>

            <h2>The CRO Process</h2>
            <ol>
                <li><strong>Research</strong> — Understand how users currently behave and where they struggle</li>
                <li><strong>Hypothesise</strong> — Form data-backed hypotheses about what changes would improve conversion</li>
                <li><strong>Test</strong> — Run A/B tests to validate or invalidate hypotheses</li>
                <li><strong>Learn</strong> — Document results and apply learnings to the next round of hypotheses</li>
            </ol>

            <h2>Research Methods</h2>
            <ul>
                <li><strong>Quantitative (what)</strong> — Analytics data showing where users drop off, which pages have high exit rates, and where conversion bottlenecks exist</li>
                <li><strong>Qualitative (why)</strong> — User surveys, interviews, and feedback revealing why users don't convert</li>
                <li><strong>Heatmaps</strong> — Visual representations of where users click, scroll, and hover on your pages</li>
                <li><strong>Session recordings</strong> — Watch real user sessions to see exactly how they interact with your site</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Quantitative data tells you WHERE users drop off. Qualitative data tells you WHY. You need both. Analytics might show 70% of users abandon at the pricing page, but only user feedback reveals it's because they're confused by the tier structure.</p>
            </div>

            <h2>Where to Start</h2>
            <p>Begin with your highest-traffic pages that have the worst conversion rates. These pages represent the biggest opportunity — many visitors are seeing them, but few are converting. A small improvement on a high-traffic page has a larger absolute impact than a big improvement on a low-traffic page.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Install a heatmap and session recording tool (like Hotjar or Microsoft Clarity — Clarity is free) on your top 5 pages. Watch 20–30 session recordings per page. You'll spot usability issues and confusion points that analytics alone would never reveal.</p>
            </div>
        `,
        quiz: {
            question: 'What is the relationship between quantitative and qualitative research in CRO?',
            options: [
                'You only need quantitative data for CRO',
                'Quantitative shows WHERE users drop off; qualitative shows WHY',
                'Qualitative data is more important than quantitative',
                'They measure the same things in different formats'
            ],
            correct: 1,
            explanation: 'Quantitative data (analytics) reveals where users drop off in your funnel, while qualitative data (surveys, recordings, feedback) reveals why they drop off. Both are necessary for effective CRO — you need to know the where AND the why.'
        }
    },

    'gr-3-2': {
        title: 'Landing Page Optimisation',
        body: `
            <h2>Anatomy of a High-Converting Landing Page</h2>
            <p>The best landing pages follow a proven structure that addresses visitor psychology step by step:</p>
            <ol>
                <li><strong>Hero section</strong> — Clear headline stating the core benefit, supporting subheadline, and primary CTA. Visitors should understand your offer within 5 seconds.</li>
                <li><strong>Problem agitation</strong> — Describe the pain point your audience faces. Show you understand their situation.</li>
                <li><strong>Solution</strong> — Present your product/service as the answer. Highlight key benefits, not just features.</li>
                <li><strong>Social proof</strong> — Testimonials, logos, case studies, review ratings, user counts. Reduce perceived risk.</li>
                <li><strong>Objection handling</strong> — FAQ section addressing common concerns (pricing, commitment, alternatives).</li>
                <li><strong>Final CTA</strong> — Repeat the primary call to action with urgency or a final persuasive point.</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Your headline is the single most important element — 80% of visitors read the headline but only 20% read the rest. If your headline doesn't clearly communicate the core benefit and grab attention, nothing else matters.</p>
            </div>

            <h2>Headline Formulas</h2>
            <ul>
                <li><strong>Benefit-focused:</strong> "Get [Desired Outcome] Without [Pain Point]"</li>
                <li><strong>Specific result:</strong> "Increase Your Conversion Rate by 30% in 14 Days"</li>
                <li><strong>Question:</strong> "Tired of Wasting Money on Ads That Don't Convert?"</li>
            </ul>

            <h2>Above the Fold</h2>
            <p>Everything visible without scrolling (above the fold) must communicate: what you offer, who it's for, what the primary benefit is, and what the visitor should do next. If any of these are unclear above the fold, you'll lose visitors before they scroll.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Run the 5-second test: show your landing page to someone for 5 seconds, then take it away. Ask them: "What does this company do? What's the main benefit? What should you do next?" If they can't answer all three, your page needs work.</p>
            </div>
        `,
        quiz: {
            question: 'What percentage of visitors typically read only the headline and nothing else?',
            options: [
                'About 20%',
                'About 50%',
                'About 80%',
                'About 95%'
            ],
            correct: 2,
            explanation: '80% of visitors read the headline but only 20% read the rest of the page. This makes the headline the single most important element of any landing page — it must clearly communicate the core benefit and compel visitors to keep reading.'
        }
    },

    'gr-3-3': {
        title: 'Form Optimisation and Friction Reduction',
        body: `
            <h2>Why Forms Are Conversion Killers</h2>
            <p>Forms are where many conversions die. Users have decided to take action, but the form creates enough friction to make them abandon. Research shows that reducing form fields from 11 to 4 can increase conversions by up to 120%. Every unnecessary field is a barrier.</p>

            <h2>Reducing Form Fields</h2>
            <ul>
                <li><strong>Only ask for what you need now</strong> — You can collect additional information later through progressive profiling</li>
                <li><strong>Remove optional fields</strong> — If it's optional, do you really need it?</li>
                <li><strong>Combine fields where possible</strong> — "Full Name" instead of separate first and last name fields</li>
                <li><strong>Use auto-detection</strong> — Detect country from IP, city from postcode, use smart address lookup</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Each additional form field reduces conversions by roughly 5–10%. A 10-field form will convert at roughly half the rate of a 3-field form. The question isn't "is this information useful?" but "is this information worth the conversions it costs?"</p>
            </div>

            <h2>Multi-Step Forms</h2>
            <p><strong>Multi-step forms</strong> break long forms into smaller, manageable steps. They typically outperform single-page long forms because: each step feels easy, users feel committed after completing early steps (sunk cost), and progress indicators create momentum.</p>

            <h2>Reducing Friction Points</h2>
            <ul>
                <li><strong>Smart defaults</strong> — Pre-select the most common option. If 80% of users choose "monthly billing," make it the default.</li>
                <li><strong>Inline validation</strong> — Show errors immediately as users fill fields, not after they submit. "Email format invalid" next to the field is far less frustrating than a red page of errors after clicking submit.</li>
                <li><strong>Progress indicators</strong> — Show "Step 2 of 3" so users know how much is left.</li>
                <li><strong>Mobile-optimised inputs</strong> — Use the correct input types (tel for phone, email for email) so mobile keyboards match the expected input.</li>
                <li><strong>Micro-copy</strong> — Small helper text explaining why you need certain information or what will happen next. "We'll send your free guide to this email" reduces anxiety about sharing an email address.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Watch session recordings of users filling out your forms. You'll spot confusion, hesitation, and abandonment points that analytics data alone can't reveal. Common issues: confusing labels, unclear error messages, and unexpected required fields.</p>
            </div>
        `,
        quiz: {
            question: 'By approximately how much can reducing form fields from 11 to 4 increase conversions?',
            options: [
                'Up to 20%',
                'Up to 50%',
                'Up to 120%',
                'Up to 200%'
            ],
            correct: 2,
            explanation: 'Research shows that reducing form fields from 11 to 4 can increase conversions by up to 120%. Each additional field adds friction — the key is to only ask for information you genuinely need at that moment.'
        }
    },

    // ==================== GROWTH MODULE 4: GROWTH SYSTEMS ====================

    'gr-4-1': {
        title: 'Growth Loops vs Funnels',
        body: `
            <h2>The Limitations of Funnel Thinking</h2>
            <p>The traditional marketing funnel (awareness → consideration → conversion) is a useful mental model but has a fundamental flaw: it treats customers as an output. Once someone converts, they exit the funnel. This ignores the most powerful growth engine — existing customers driving new customers.</p>

            <h2>What Are Growth Loops?</h2>
            <p>A <strong>growth loop</strong> is a self-reinforcing system where the output of one cycle becomes the input of the next. Unlike funnels (which require constant new input at the top), loops compound — each cycle creates more fuel for the next.</p>

            <h2>Types of Growth Loops</h2>
            <ul>
                <li><strong>Content loop</strong> — Create content → content ranks in search → visitors arrive → some create content or share → more content → more visitors. Example: Wikipedia, Reddit, Quora.</li>
                <li><strong>Viral loop</strong> — User joins → user invites others → new users join → they invite more. Example: WhatsApp, Dropbox, Calendly.</li>
                <li><strong>Paid loop</strong> — Spend on ads → acquire customers → customers generate revenue → reinvest profit into more ads. Sustainable when LTV > CAC.</li>
                <li><strong>UGC loop</strong> — Users create content → content attracts new users → new users create content. Example: YouTube, TikTok, Airbnb reviews.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The most durable businesses are powered by growth loops, not funnels. Funnels require constant spending to maintain. Loops, once spinning, generate their own momentum. The best companies have multiple overlapping loops.</p>
            </div>

            <h2>Designing Your Growth Loop</h2>
            <p>Map your business's natural loop: What do users do after converting? How does their activity create value that attracts new users? Where can you reduce friction or add incentives to accelerate the loop? Even if your business isn't inherently viral, there's usually a loop to discover and optimise.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Identify which loop your business naturally supports. Not every business can build a viral loop — and that's fine. A strong content loop or paid loop can be equally powerful. Choose the loop type that matches your business model and strengths.</p>
            </div>
        `,
        quiz: {
            question: 'What is the fundamental difference between a growth loop and a marketing funnel?',
            options: [
                'Growth loops are more expensive to build',
                'Loops are self-reinforcing where output feeds back as input; funnels require constant new input',
                'Funnels work better for digital businesses',
                'Growth loops only work for social media companies'
            ],
            correct: 1,
            explanation: 'Growth loops are self-reinforcing systems where the output of each cycle becomes the input for the next, creating compounding growth. Funnels require constant new input at the top to maintain output, making them inherently less efficient over time.'
        }
    },

    'gr-4-2': {
        title: 'Viral Loops and Referral Systems',
        body: `
            <h2>Understanding Viral Mechanics</h2>
            <p>Virality isn't magic — it's a measurable system. The key metric is the <strong>viral coefficient (K-factor)</strong>: the average number of new users each existing user generates. If K > 1, you have true viral growth (each user brings more than one new user). If K < 1, virality amplifies other acquisition channels but doesn't sustain growth alone.</p>

            <h2>K-Factor Formula</h2>
            <p><strong>K = Number of invites sent per user × Conversion rate of invitations</strong></p>
            <p>If each user invites 5 friends and 20% accept, K = 5 × 0.2 = 1.0. To increase K, either increase the number of invitations or improve the invitation conversion rate.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Very few products achieve K > 1 sustainably. But even a K of 0.5 means your paid acquisition effectively gets you 50% more users for free (each 100 acquired users bring 50 more). Sub-viral loops are still extremely valuable.</p>
            </div>

            <h2>Designing Referral Programmes</h2>
            <ul>
                <li><strong>Two-sided incentives</strong> — Reward both the referrer AND the new user. Dropbox's "Get 500MB for you AND your friend" was more effective than rewarding only one side.</li>
                <li><strong>Make referring effortless</strong> — One-click sharing, pre-written messages, unique referral links. Every friction point reduces invitations sent.</li>
                <li><strong>Time the ask right</strong> — Ask for referrals after the user has experienced value (their "aha moment"), not during sign-up before they understand the product.</li>
                <li><strong>Choose the right incentive</strong> — Product-related rewards (free months, credits, features) outperform cash for most products because they reinforce product engagement.</li>
            </ul>

            <h2>Network Effects</h2>
            <p>The most powerful form of viral growth comes from <strong>network effects</strong> — when a product becomes more valuable as more people use it. Social networks, communication tools, and marketplaces have inherent network effects. If your product becomes more useful with each new user, you have a powerful natural growth loop.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Track your referral programme with the same rigour as paid advertising. Measure: referral rate (% of users who refer), invitations per referrer, invitation conversion rate, and LTV of referred users vs non-referred. Referred users typically have 16–25% higher LTV.</p>
            </div>
        `,
        quiz: {
            question: 'If each user sends 4 invitations and 25% convert, what is the viral coefficient (K-factor)?',
            options: [
                '0.5',
                '1.0',
                '1.5',
                '4.0'
            ],
            correct: 1,
            explanation: 'K = Invitations per user × Conversion rate = 4 × 0.25 = 1.0. A K-factor of 1.0 means each user generates exactly one new user on average — the threshold for self-sustaining viral growth.'
        }
    },

    'gr-4-3': {
        title: 'Building Scalable Growth Systems',
        body: `
            <h2>From Tactics to Systems</h2>
            <p>Individual growth tactics (a new ad campaign, a referral programme, a landing page optimisation) produce one-time improvements. <strong>Growth systems</strong> are repeatable processes that produce compounding results over time. The difference between a growth tactic and a growth system is the difference between catching a fish and building a fishing operation.</p>

            <h2>Systematising Growth Processes</h2>
            <ul>
                <li><strong>Experiment pipeline</strong> — A constant flow of hypotheses being generated, prioritised, tested, and documented. This should never stop.</li>
                <li><strong>Content engine</strong> — A repeatable process for producing, distributing, and optimising content that drives organic growth.</li>
                <li><strong>Paid acquisition machine</strong> — Systematic creative testing, audience expansion, and budget scaling with clear rules and triggers.</li>
                <li><strong>Referral system</strong> — An always-on programme that generates new users from existing ones.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best growth systems compound. Your experiment pipeline produces learnings that improve your content engine, which feeds data into your paid acquisition machine, which grows the user base that powers your referral system. Each system makes the others stronger.</p>
            </div>

            <h2>Growth Team Structure</h2>
            <p>A growth team typically includes: a growth lead (strategy and prioritisation), a product/UX person (design and user experience), an engineer (implementation), a data analyst (measurement and insights), and a marketer (channels and creative). Small companies start with 1–2 people covering multiple roles.</p>

            <h2>Growth Models</h2>
            <p>Build a <strong>growth model</strong> — a spreadsheet or tool that maps the relationships between your key metrics. If you improve activation by 10%, how does that cascade through retention, revenue, and referral? A growth model lets you simulate scenarios and focus on the highest-leverage improvements.</p>

            <h2>Compounding Growth</h2>
            <p>Growth compounds when each improvement builds on previous ones. A 5% monthly improvement in conversion rate doesn't just add up — it multiplies. After 12 months, that's a 79% total improvement, not 60%. This is why consistent, systematic optimisation beats sporadic big bets.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Track "experiments per month" as a team metric. The number of experiments you run correlates more strongly with growth results than any individual experiment's outcome. Velocity of learning is the meta-skill that drives everything else.</p>
            </div>
        `,
        quiz: {
            question: 'What is the difference between a growth tactic and a growth system?',
            options: [
                'Tactics are digital; systems are offline',
                'Tactics produce one-time improvements; systems produce compounding results over time',
                'Systems require larger teams than tactics',
                'Tactics are faster to implement than systems'
            ],
            correct: 1,
            explanation: 'A growth tactic produces a one-time improvement (like optimising a landing page), while a growth system is a repeatable process that compounds results over time (like an experimentation pipeline that continuously improves multiple metrics).'
        }
    }

});

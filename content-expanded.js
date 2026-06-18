// Expanded lesson content — loaded after app.js
Object.assign(lessonContent, {

    // ==================== SEO MODULE 2: KEYWORD RESEARCH ====================

    'seo-2-1': {
        title: 'How to Find Keywords People Actually Search For',
        body: `
            <h2>Starting With Seed Keywords</h2>
            <p>Keyword research is the process of discovering what your audience actually types into Google — not what you assume they search, but the real words and phrases they use. It starts with <strong>seed keywords</strong>: broad terms that describe your core topic, product, or service.</p>
            <p>To generate seed keywords, think about:</p>
            <ul>
                <li><strong>What you offer</strong> — Products, services, and the problems they solve</li>
                <li><strong>The language your customers use</strong> — Talk to your sales team, read review sites, and listen to customer language rather than internal jargon</li>
                <li><strong>Adjacent topics</strong> — Questions your audience asks before and after they find you</li>
            </ul>
            <p>In 2026, keyword research goes beyond finding terms to target in isolation. The goal is to identify <strong>topic clusters</strong> — groups of semantically related queries that map to a connected body of content. Individual keyword targeting has given way to topical authority building. Keep that framing in mind as you gather your initial list.</p>

            <h2>Free Keyword Discovery Methods</h2>
            <p>Google itself is your most valuable free research tool:</p>
            <ul>
                <li><strong>Google Autocomplete</strong> — Start typing a query and note what Google suggests. These are drawn from actual search data, making them reliable signals of real demand.</li>
                <li><strong>People Also Ask</strong> — The expandable question boxes in search results reveal the sub-questions and follow-up queries around your topic. These are especially useful for informational content — and increasingly important for AI Overviews, which frequently draw from PAA-style questions.</li>
                <li><strong>Related Searches</strong> — The section at the bottom of any results page shows semantically connected queries. These reveal intent variations and long-tail opportunities.</li>
                <li><strong>Google Keyword Planner</strong> — Free inside Google Ads. Enter seed terms and it returns search volume estimates and related keyword ideas.</li>
                <li><strong>Google Search Console</strong> — Your own data. The Performance report shows exactly which queries are already triggering impressions for your site, including ones you may not have intentionally targeted.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Type an asterisk * or underscore _ in the middle of a Google search (e.g., "best * for beginners") and Autocomplete will fill in the blank with popular searches. It reveals keyword patterns that direct brainstorming rarely surfaces.</p>
            </div>

            <h2>Competitor Keyword Analysis</h2>
            <p>Competitor analysis is one of the fastest routes to a well-structured keyword list. Tools like Ahrefs, Semrush, or Ubersuggest let you enter a competitor's domain and see their top-ranking pages and the keywords driving their organic traffic. Focus on pages ranking in positions four to ten — established enough to be real opportunities, but not so dominant that you cannot overtake them. Also look for topics they cover that you do not — those are gaps in your content map.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Good keyword research is not a one-time exercise. The best SEO teams review their keyword data quarterly — as Google updates change what ranks, as AI Overviews reshape the SERP, and as new topics emerge in their industry. Build a process, not just a spreadsheet.</p>
            </div>

            <h2>Organising Your Keywords Into Topics</h2>
            <p>Once you have a list, group keywords by theme rather than treating each as a standalone target. A topic group might have one primary keyword (for your pillar page) and ten to twenty related queries (for cluster pages). This grouping exercise is the bridge between keyword research and content strategy — and it is where most of the value gets created.</p>
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
            <p><strong>Search volume</strong> is an estimate of how many times a keyword is searched per month, usually expressed as a monthly average. Higher volume means more potential traffic — but also more competition. Understanding what volume numbers actually tell you (and what they do not) is the difference between smart prioritisation and chasing numbers that never deliver.</p>
            <p>Important caveats:</p>
            <ul>
                <li><strong>All volume figures are estimates</strong> — Different tools use different data sources, so numbers vary between platforms. Treat volume as directional, not precise.</li>
                <li><strong>Seasonality matters</strong> — "Christmas gift ideas" peaks in November, not July. Always look at the trend, not just the average.</li>
                <li><strong>Zero-volume keywords still drive traffic</strong> — Many valuable long-tail queries appear as zero in tools because they lack enough historical data. They still get searched — and convert well when they do.</li>
                <li><strong>AI Overviews affect click distribution</strong> — For informational queries where AI Overviews appear, more searches may be answered without a click. Volume no longer translates to traffic at the same rate it once did for these query types.</li>
            </ul>

            <h2>Understanding Keyword Difficulty</h2>
            <p>Keyword difficulty (KD) scores estimate how competitive it will be to rank on page one for a given term. Most tools score this from 0 to 100, basing the score primarily on the strength of backlinks pointing to the pages currently in the top results.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Keyword difficulty is always relative to your own domain's authority. A KD of 40 might be straightforward for a well-established site but effectively out of reach for a new domain. Use difficulty scores for directional comparisons within your own context — not as absolute verdicts.</p>
            </div>

            <h2>Finding the Right Opportunities</h2>
            <p>The most productive keywords are not the biggest ones — they are the ones where you can realistically rank and where ranking delivers genuine business value. For most sites, that means prioritising:</p>
            <ul>
                <li><strong>Lower difficulty, moderate volume</strong> — A KD of 20 with 500 monthly searches will deliver more traffic than a KD of 80 with 5,000 searches you will never rank for.</li>
                <li><strong>High commercial intent</strong> — A keyword with 300 monthly searches that leads to enquiries is more valuable than one with 10,000 searches that attracts casual browsers with no buying intent.</li>
                <li><strong>Topical fit</strong> — Keywords closely related to topics you already cover are easier to rank for, because they build on authority you already have. Pursuing isolated, unrelated keywords instead of filling out existing topic clusters is one of the most common strategic errors in SEO.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Targeting high-volume keywords before you have the authority to compete for them is a waste of content investment. Build topical depth first — a cluster of ten well-ranking cluster pages creates more total authority than one ambitious pillar page that never breaks page two.</p>
            </div>

            <h2>Creating a Prioritised Keyword List</h2>
            <p>Score each keyword candidate against three dimensions: search volume (potential), difficulty (effort required), and business relevance (commercial value). A simple priority score of <strong>(Volume × Relevance) ÷ Difficulty</strong> gives you a workable starting hierarchy. Review and re-prioritise every quarter as your rankings shift and new opportunities emerge.</p>
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
            <p><strong>Long-tail keywords</strong> are longer, more specific search phrases — typically three or more words. Individually, each long-tail keyword attracts fewer searches than a broad head term. Collectively, they account for the majority of all searches made. More importantly for SEO, they convert far better — a searcher who types "best running shoes for flat feet under £100" knows exactly what they want and is close to a decision.</p>
            <p>For comparison:</p>
            <ul>
                <li><strong>Head term:</strong> "running shoes" — high volume, fierce competition, broad intent</li>
                <li><strong>Long-tail:</strong> "best running shoes for flat feet women UK" — lower volume, far less competition, clear transactional intent</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Long-tail keywords convert better because they capture people further along in their decision-making. The more specific the query, the closer the searcher is to taking action — and the easier it is to create content that precisely satisfies their intent.</p>
            </div>

            <h2>The Topic Cluster Model</h2>
            <p>Individual keyword targeting has been superseded by <strong>topical authority</strong> as the dominant SEO strategy. Google has become sophisticated enough to evaluate not just individual pages but whether a site comprehensively covers a subject area. The topic cluster model is the content architecture that builds that authority deliberately.</p>
            <p>The structure has three components:</p>
            <ul>
                <li><strong>Pillar page</strong> — A comprehensive, long-form page covering a broad topic from all angles (for example, "The Complete Guide to Running Shoes"). This is the hub of the cluster.</li>
                <li><strong>Cluster pages</strong> — Individual pages that go deep on specific subtopics (for example, "Running Shoes for Flat Feet," "How to Choose Running Shoe Width"). Each targets a distinct long-tail keyword.</li>
                <li><strong>Internal links</strong> — Every cluster page links to the pillar page and vice versa, and cluster pages link to each other where relevant. This creates a dense network that signals topical depth.</li>
            </ul>

            <h2>Why Topical Authority Matters in 2026</h2>
            <p>Google's March and May 2026 Core Updates continued a clear trajectory: sites with genuine, comprehensive coverage of a subject earn better rankings across their entire topic area — not just for individual optimised pages. A site that covers running shoes across 20 connected, useful pages outranks one that has a single well-optimised page and nothing around it.</p>
            <p>Topic clusters also have a compounding effect. As cluster pages gain rankings and links, they pass authority to the pillar page. As the pillar page gains authority, it lifts the cluster pages in return. The whole network rises together.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start by mapping your three to five strongest topic areas. For each, identify eight to fifteen subtopic keywords with real search demand. Build the pillar page first as a broad overview, then publish cluster pages steadily over time. Link everything together from the start, even if some cluster pages are still planned.</p>
            </div>

            <h2>Building Your First Topic Cluster</h2>
            <p>Choose the topic area where you have the most existing content, expertise, or competitive advantage. Write the pillar page as an authoritative overview (2,000 words or more is typical, though length should be determined by the topic, not a target number). Then identify the five most-searched subtopics and write dedicated cluster pages for each. Internal-link all of them to the pillar and to each other, and watch Google begin to recognise your site as a genuine authority on that subject.</p>
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
            <p>The <strong>title tag</strong> is the clickable headline that appears in search results. It is the single most important on-page SEO element because it tells search engines and users — at a glance — what a page is about. It is also Google's most commonly used source for the blue link text in the SERP, though Google reserves the right to rewrite it when it believes a different text better matches the query.</p>
            <p>Title tag best practices:</p>
            <ul>
                <li><strong>Stay under 60 characters</strong> — Anything longer risks being truncated in the results</li>
                <li><strong>Place the primary keyword near the front</strong> — Front-loaded keywords carry more semantic weight</li>
                <li><strong>Make it genuinely compelling</strong> — Your title competes with nine others for the click; write to earn it</li>
                <li><strong>Each page must have a unique title</strong> — Duplicate titles dilute signals and confuse crawlers</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Adding the current year or a strong qualifier (Complete, Step-by-Step, Beginner's Guide) to a title tag consistently improves click-through rate — but only use it if it accurately describes the content. False promises in titles increase bounce rates and signal low quality to Google.</p>
            </div>

            <h2>Meta Descriptions</h2>
            <p>The <strong>meta description</strong> is the summary text shown below the title in search results. It has no direct effect on rankings, but it significantly influences whether users click on your result. A well-written meta description acts as a 155-character advertisement for your page.</p>
            <ul>
                <li><strong>Keep it under 155 characters</strong> — Google truncates longer descriptions</li>
                <li><strong>Include a natural call to action</strong> — "Learn how to," "Discover," "Find out" prompt clicks</li>
                <li><strong>Include your target keyword</strong> — Google bolds query-matching words in the snippet, drawing the eye</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Google rewrites meta descriptions roughly 60–70% of the time, replacing them with a passage it judges more relevant to the specific query. This is expected behaviour — it does not mean you should skip writing descriptions. When Google uses yours, it matters enormously for CTR. Write them for the cases where they are used, not the cases where they are overridden.</p>
            </div>

            <h2>Header Hierarchy (H1–H6)</h2>
            <p>Headers give your content a logical, scannable structure for both readers and search engines. They function as an outline of your page's content and help Google identify the topics and subtopics covered.</p>
            <ul>
                <li><strong>H1</strong> — One per page, ideally matching or closely echoing the title tag. This is your primary heading.</li>
                <li><strong>H2</strong> — Major sections within the page. Each should represent a distinct, meaningful subtopic.</li>
                <li><strong>H3–H6</strong> — Subsections within H2 blocks, used for detailed breakdowns and supporting points.</li>
            </ul>
            <p>Include relevant keywords in headings naturally, but write primarily for the reader. Well-structured headers also improve your chances of appearing as a featured snippet and of being cited in AI Overviews, which often pull direct passages from clearly headed sections.</p>
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
            <h2>Content That Earns Rankings in 2026</h2>
            <p>Content optimisation has shifted significantly over the past two years. Keyword placement still matters — but it is now table stakes rather than a differentiator. What separates ranking content from invisible content in 2026 is whether a page genuinely earns its place: whether it demonstrates real experience, adds something new to the conversation, and is written for people rather than for bots.</p>
            <p>Google's March and May 2026 Core Updates were explicit on this point. Sites producing original, expert-attributed, people-first content gained visibility. Sites producing assembled, derivative, or AI-generated-without-review content lost it.</p>

            <h2>E-E-A-T: The Standard You Are Writing To</h2>
            <p>Every piece of content you publish should be evaluated against Google's E-E-A-T framework:</p>
            <ul>
                <li><strong>Experience</strong> — Has the author actually done or used what they are writing about? First-hand experience is a visible signal — show it through specificity, real examples, and personal insight rather than generalised statements.</li>
                <li><strong>Expertise</strong> — Do the author and site demonstrate command of the subject? Credentials, bylines, author bios, and the depth of the writing all signal expertise.</li>
                <li><strong>Authoritativeness</strong> — Is your site recognised as a credible source in your field? This is influenced by who links to you, who cites you, and whether your brand is mentioned in trusted contexts.</li>
                <li><strong>Trustworthiness</strong> — Is your site transparent, accurate, and safe? Clear authorship, up-to-date content, accurate factual claims, and a professional site experience all contribute.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Information Gain</div>
                <p><strong>Information Gain</strong> is Google's measure of how much new, useful content a page adds beyond what is already available on the topic. Pages that simply restate what competitors already say earn diminishing ranking rewards. Pages that contribute original data, a unique angle, genuine first-hand experience, or a perspective not available elsewhere score higher. Before writing, ask: what does this page offer that no existing result does?</p>
            </div>

            <h2>Keyword Placement</h2>
            <p>Where your target keyword appears still matters, though natural usage matters more than frequency:</p>
            <ul>
                <li><strong>Title tag and H1</strong> — Essential for signalling the page's core topic</li>
                <li><strong>First 100 words</strong> — Establish relevance early in the content</li>
                <li><strong>Subheadings (H2/H3)</strong> — Use keyword variations naturally where they fit the heading's purpose</li>
                <li><strong>URL slug</strong> — Short, keyword-informed, and human-readable</li>
                <li><strong>Throughout the body</strong> — Use your primary keyword and semantically related terms where they read naturally; do not force frequency</li>
            </ul>

            <h2>Optimising for AI Overviews</h2>
            <p>For informational content, Google's AI Overviews are now the first result many users see. Pages cited in AI Overviews gain visibility even without a direct click. To give your content the best chance of being cited:</p>
            <ul>
                <li>Answer the core question directly and concisely in the first paragraph after a relevant heading</li>
                <li>Use clear, factual language — AI systems prefer attributable, verifiable statements</li>
                <li>Structure content with distinct H2 sections that each address a specific sub-question</li>
                <li>Back claims with data, sources, or first-hand experience rather than vague assertions</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Audit your highest-traffic pages every quarter. Add a "last reviewed" date when you update them — it signals freshness to users and to Google. Content that shows visible signs of maintenance consistently outperforms stale content in the same position over time.</p>
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
            <p><strong>Internal links</strong> are hyperlinks from one page on your site to another. They serve three essential functions: they guide users to related content, they help Googlebot discover and crawl your pages efficiently, and they distribute ranking authority — sometimes called link equity — across your site. Of all on-page SEO levers, internal linking is one of the few entirely within your control and yet consistently underused.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Internal links transfer authority between pages on the same domain. A well-linked internal page can rank significantly above an equally well-written but poorly linked page. Strategically pointing links at the pages most important to your business is one of the highest-return SEO actions available without building a single backlink.</p>
            </div>

            <h2>Types of Internal Links</h2>
            <ul>
                <li><strong>Navigational links</strong> — Your main menu, footer, and breadcrumbs. These define your site's architecture and flow significant authority to the pages they point to. Choose these links carefully.</li>
                <li><strong>Contextual links</strong> — Links placed within the body of your content, pointing to related pages. These carry the most SEO value because they are editorially placed and contextually relevant.</li>
                <li><strong>Related content links</strong> — "Related articles" or "You may also find useful" sections at the end of pages. These extend session depth and create additional authority paths.</li>
            </ul>

            <h2>Anchor Text Best Practices</h2>
            <p>The clickable text of a link (its anchor text) signals to search engines what the destination page is about. Descriptive, relevant anchor text — such as "keyword research guide" rather than "click here" — improves both usability and the semantic signal Google receives about the linked page.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Using identical keyword-rich anchor text for every internal link to the same page looks manipulative and can trigger algorithmic suspicion. Vary your anchor text naturally across different pages — some exact-match, some partial-match, some descriptive phrases. Variety signals editorial intent.</p>
            </div>

            <h2>Internal Linking and Topic Clusters</h2>
            <p>The topic cluster model — pillar pages surrounded by interlinked cluster pages — is built on internal linking. Every cluster page should link to its pillar page. The pillar page should link to each cluster page. Cluster pages should link to each other where topics are adjacent. This dense internal network is how Google understands the topical architecture of your site and rewards it with authority across the whole cluster, not just for individual pages.</p>

            <h2>Fixing Orphan Pages</h2>
            <p>An <strong>orphan page</strong> is a page with no internal links pointing to it. With no path for Googlebot to follow, it may never be crawled or indexed — and even if it is, it will accumulate no internal authority. Audit your site periodically to identify orphan pages using your CMS's link report or a crawl tool like Screaming Frog. For each one, find the most relevant existing content and add a contextual link.</p>

            <h2>Building Links Into Your Publishing Process</h2>
            <p>Internal linking should be part of every publication, not a retrospective exercise. Each time you publish a new page, identify three to five existing pages that relate to it and add links from those pages to the new one. Add two to three links from the new page back to relevant existing content. Do this consistently and your site's internal linking will grow into a genuine authority network over time.</p>
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
            <p>Images are typically the largest single contributor to a page's total download weight. Unoptimised images slow page loads, which directly damages Core Web Vitals — particularly Largest Contentful Paint (LCP), which measures how long before the largest visible element on the page renders. Poor LCP is both a user experience failure and a ranking signal. Images are also an indexable content type: optimised images with accurate alt text can surface in Google Image search and contribute to E-E-A-T signals through contextually relevant visuals.</p>

            <h2>Choosing the Right File Format</h2>
            <ul>
                <li><strong>WebP</strong> — The current web standard for photographs and complex images. Delivers 25–35% smaller files than JPEG at comparable quality, with universal modern browser support. Use it as your primary format.</li>
                <li><strong>AVIF</strong> — Next-generation format with significantly better compression than WebP. Browser support is now broad enough for production use with a WebP fallback for older browsers.</li>
                <li><strong>JPEG</strong> — Reliable fallback for photographs where WebP is not served. A quality setting of 75–85% balances visual quality and file size effectively.</li>
                <li><strong>PNG</strong> — Use only when true transparency is required. File sizes are substantially larger than WebP or JPEG.</li>
                <li><strong>SVG</strong> — The correct choice for logos, icons, and line illustrations. Scales infinitely without quality loss and typically has tiny file sizes.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use the HTML <code>&lt;picture&gt;</code> element to serve AVIF to supporting browsers, WebP as a second option, and JPEG as a universal fallback. This single implementation gives you the best available compression on every browser without compromising compatibility.</p>
            </div>

            <h2>Writing Effective Alt Text</h2>
            <p><strong>Alt text</strong> is the written description assigned to an image in HTML. It is read aloud by screen readers for visually impaired users, displayed when an image fails to load, and used by search engines to understand what an image shows. It is both an accessibility requirement and an SEO opportunity.</p>
            <ul>
                <li><strong>Be specific and descriptive</strong> — "Marketing team reviewing a campaign dashboard on a laptop" not "team meeting"</li>
                <li><strong>Include relevant keywords naturally</strong> — Only where they genuinely describe the image; never force them</li>
                <li><strong>Keep it under 125 characters</strong> — Screen readers may cut off longer text</li>
                <li><strong>Do not start with "Image of" or "Picture of"</strong> — Screen readers already prefix with the image type; repeating it is redundant</li>
                <li><strong>Leave alt text empty for decorative images</strong> — Purely decorative images should use <code>alt=""</code> so screen readers skip them</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Stuffing keywords into alt text defeats both its accessibility purpose and its SEO value. Alt text that reads "SEO SEO guide SEO checklist digital marketing" is meaningless to a screen reader and signals keyword manipulation to Google. Describe what the image actually shows.</p>
            </div>

            <h2>Lazy Loading, Dimensions, and Sitemaps</h2>
            <p>Add the <code>loading="lazy"</code> attribute to any image below the fold — it defers loading until the image is about to enter the viewport, reducing initial page weight considerably. Always set explicit <code>width</code> and <code>height</code> attributes on images to prevent layout shifts as they load, which directly improves your CLS score. For image-heavy sites, submit an image sitemap to Google Search Console to accelerate discovery and indexing of your visual content.</p>
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
            <h2>Why Site Speed Is an SEO Ranking Factor</h2>
            <p>Google has confirmed page speed as a ranking signal for both desktop and mobile search. The relationship between speed and performance extends beyond rankings: slow pages drive users away before they have had a chance to engage with your content. Research consistently shows that 53% of mobile users abandon a page that takes more than three seconds to load, and every additional second of delay reduces conversion rates further. Speed is simultaneously a ranking factor, a user experience metric, and a revenue lever.</p>

            <h2>Core Web Vitals: The Metrics That Matter</h2>
            <p>Google measures page experience through three Core Web Vitals, each targeting a distinct dimension of how a page feels to use:</p>
            <ul>
                <li><strong>Largest Contentful Paint (LCP)</strong> — Measures loading performance: how long until the largest visible content element (typically a hero image, a main heading block, or a large paragraph) is fully rendered on screen. Target: under 2.5 seconds. This is the Core Web Vital most directly connected to how quickly a page feels "ready."</li>
                <li><strong>Interaction to Next Paint (INP)</strong> — Measures responsiveness: how quickly the page reacts after a user clicks a button, taps a link, or types into a field. INP replaced the older First Input Delay (FID) metric in March 2024 and is now the established interactivity measure. Target: under 200 milliseconds. Poor INP is most commonly caused by heavy JavaScript blocking the main thread.</li>
                <li><strong>Cumulative Layout Shift (CLS)</strong> — Measures visual stability: how much the page layout shifts unexpectedly while loading. A page that jumps around as ads load or fonts swap creates a poor experience and scores badly. Target: under 0.1. Always set explicit dimensions on images and embeds to prevent layout shifts.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Core Web Vitals are measured from real user data collected by Google through the Chrome User Experience Report (CrUX). Lab tests in tools like Lighthouse give useful diagnostic information, but your actual Core Web Vitals scores are based on what real visitors experience on your site — not on a simulated test environment.</p>
            </div>

            <h2>How to Measure and Diagnose Performance</h2>
            <ul>
                <li><strong>PageSpeed Insights</strong> — Google's tool showing both real-world (field) data and lab test data for any URL, with specific recommendations for improvement.</li>
                <li><strong>Google Search Console</strong> — The Core Web Vitals report shows site-wide performance trends across real user sessions, grouped by Good, Needs Improvement, and Poor.</li>
                <li><strong>Lighthouse</strong> — Built into Chrome DevTools. Runs a lab audit that diagnoses specific rendering, scripting, and resource issues on any page.</li>
            </ul>

            <h2>Common Issues and Their Fixes</h2>
            <ul>
                <li><strong>Slow LCP</strong> — Large uncompressed images; serve in WebP/AVIF and use <code>fetchpriority="high"</code> on hero images to load them first</li>
                <li><strong>Poor INP</strong> — JavaScript tasks blocking the main thread; defer non-critical scripts, break up long tasks, and minimise third-party script load</li>
                <li><strong>High CLS</strong> — Images or embeds without explicit dimensions; always set <code>width</code> and <code>height</code> attributes</li>
                <li><strong>Slow server response</strong> — Use a CDN for static assets and consider upgrading hosting if Time to First Byte (TTFB) exceeds 800ms</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Prioritise LCP first — it is the most impactful metric for most sites and often the most straightforward to improve. Compressing and preloading your hero image alone can reduce LCP by a second or more.</p>
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
            <h2>What Mobile-First Indexing Means</h2>
            <p>Since 2019, Google has indexed and ranked the web primarily from the perspective of a mobile device. When Googlebot crawls your site, it does so using a mobile user agent — it sees what a smartphone user sees. Your desktop site is largely irrelevant to how Google indexes and ranks your content. If something exists only on your desktop site and not your mobile site, Google may never see it.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Mobile-first indexing does not mean Google has a separate mobile index. It means the mobile version of your content is what Google uses to build its one unified index. Every piece of content, structured data, and metadata that matters for rankings must be present and accessible on the mobile version of your pages.</p>
            </div>

            <h2>Responsive Design: The Right Approach</h2>
            <p><strong>Responsive design</strong> — a single HTML codebase that adapts its layout to different screen sizes via CSS — is Google's recommended implementation. It avoids the complexity and risk of maintaining separate mobile and desktop sites, and it ensures Google always sees the same content regardless of which user agent it sends.</p>
            <p>Key properties of a responsively designed site:</p>
            <ul>
                <li>One URL serves both mobile and desktop users</li>
                <li>All content is present on all screen sizes — nothing hidden on mobile that appears on desktop</li>
                <li>CSS media queries control layout, not content visibility</li>
                <li>No risk of mobile and desktop content diverging over time</li>
            </ul>

            <h2>Common Mobile Usability Issues</h2>
            <p>Google Search Console's Mobile Usability report flags problems that affect crawlability and user experience on mobile. Common issues to fix:</p>
            <ul>
                <li><strong>Text too small to read</strong> — Body text should be at least 16px; anything smaller is illegible without zooming and signals poor mobile experience</li>
                <li><strong>Touch targets too close together</strong> — Buttons and links need a minimum tap target of 48px to be reliably tappable. Crowded links frustrate users and inflate bounce rates.</li>
                <li><strong>Content wider than the screen</strong> — Horizontal scrolling is a reliable signal that a site has not been properly designed for mobile</li>
                <li><strong>Intrusive interstitials</strong> — Full-screen pop-ups that cover content on mobile are subject to a ranking penalty. Use smaller, dismissable banners instead for any consent or subscription prompts.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Hiding content behind "show more" toggles or accordion elements on mobile is sometimes used to keep pages visually clean on small screens. Google now treats this content normally — it is indexed and considered for ranking even if it is not visible by default. The key requirement is that the content is present in the initial HTML, not loaded by a secondary JavaScript call triggered by the toggle.</p>
            </div>

            <h2>Testing Your Mobile Experience</h2>
            <p>Use Chrome DevTools' device toolbar to preview your pages at common mobile dimensions during development. Check the Mobile Usability report in Google Search Console for site-wide issues affecting real indexed pages. Most importantly, test key pages on physical mobile devices — emulators do not replicate the performance characteristics or touch behaviour of real hardware, and the differences matter for diagnosing poor Core Web Vitals and usability issues.</p>
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
            <p><strong>Structured data</strong> is code added to your pages that labels content in a machine-readable format, making it unambiguously clear to search engines what specific things are: this is a recipe, that figure is a review rating, this block of steps is a how-to guide. The most common and Google-recommended format is <strong>JSON-LD</strong> (JavaScript Object Notation for Linked Data), which sits in a <code>&lt;script&gt;</code> tag separate from your page HTML — making it easy to add and maintain without touching your content markup.</p>

            <h2>Why It Matters: Rich Results</h2>
            <p>Structured data enables <strong>rich results</strong> — enhanced search listings that include additional visual elements beyond the standard title, URL, and snippet. Star ratings, pricing, event dates, step-by-step instructions, and product availability can all appear directly in the SERP when appropriate schema is implemented correctly. Rich results take up more visual space and provide immediately useful information, which consistently improves click-through rate.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Structured data does not directly improve your ranking position, but it can significantly improve your click-through rate from the same position. More clicks from the same ranking means more traffic without having to climb the results — effectively multiplying the value of a ranking you already have.</p>
            </div>

            <h2>Schema Types Worth Implementing</h2>
            <ul>
                <li><strong>HowTo Schema</strong> — Marks up step-by-step guides and can display numbered instructions with images directly in search results. One of the highest-value schema types for instructional content.</li>
                <li><strong>Article Schema</strong> — Helps Google understand blog posts and editorial content, including author attribution, publication date, and publication name. Supports E-E-A-T signals through explicit author markup.</li>
                <li><strong>Product Schema</strong> — Displays price, availability, and review ratings in search results. Essential for e-commerce product pages.</li>
                <li><strong>Review and Rating Schema</strong> — Shows star ratings in results. Applicable to products, services, apps, and editorial reviews.</li>
                <li><strong>LocalBusiness Schema</strong> — Displays address, phone number, and opening hours. Critical for businesses with a physical presence.</li>
                <li><strong>BreadcrumbList Schema</strong> — Shows your site's navigation path in the SERP, improving click-through and helping users orient themselves before clicking.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>FAQ Schema was deprecated as a rich result feature by Google in May 2026. It no longer generates the expandable Q&amp;A display in search results that it once did. If you have FAQ Schema implemented purely for that rich result, it is no longer producing the SERP enhancement. Use HowTo Schema for instructional content and Article Schema for editorial pages instead — these remain active rich result types.</p>
            </div>

            <h2>Testing and Validating Structured Data</h2>
            <p>Before and after implementing schema markup, validate it using Google's <strong>Rich Results Test</strong> — this confirms whether your markup is eligible for rich results and flags any issues. Use the <strong>Schema Markup Validator</strong> at schema.org for syntax checking. Once live, monitor the Enhancements section of Google Search Console, which shows which pages have been detected with structured data, whether they are eligible for rich results, and any errors that need fixing.</p>
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
            <p><strong>Crawl budget</strong> is the number of pages Googlebot will crawl on your site within a given timeframe. For small sites of a few hundred or a few thousand pages, crawl budget rarely presents a problem — Google will crawl everything. For larger sites with tens of thousands of URLs or more, managing crawl budget becomes essential: wasted crawls on low-value pages mean important pages get crawled less frequently.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Crawl budget has two components: <strong>crawl capacity</strong> (the rate at which Googlebot can crawl your site without overwhelming your server) and <strong>crawl demand</strong> (how much Google wants to crawl based on page popularity and how frequently content changes). Both can be influenced — speed up server response to increase capacity; publish fresh, linked content to increase demand.</p>
            </div>

            <h2>Robots.txt</h2>
            <p>The <strong>robots.txt</strong> file sits at your domain root (yourdomain.com/robots.txt) and instructs search engine crawlers on which pages and directories to crawl or skip. It uses simple directives:</p>
            <ul>
                <li><strong>Disallow</strong> — Blocks the specified crawler from crawling those URLs or directories</li>
                <li><strong>Allow</strong> — Overrides a Disallow for a specific URL within a blocked directory</li>
                <li><strong>Sitemap</strong> — Points crawlers to the location of your XML sitemap</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Robots.txt controls crawling — not indexing. A page blocked in robots.txt can still appear in Google's index if other sites link to it; Google will index the URL based on those links without ever crawling the page content (showing a result with no snippet). To prevent a page from appearing in the index, use a <code>noindex</code> meta tag — and make sure the page is actually crawlable so Googlebot can read that directive.</p>
            </div>

            <h2>XML Sitemaps</h2>
            <p>An <strong>XML sitemap</strong> lists the URLs on your site that you want search engines to index. It does not guarantee indexing, but it significantly improves the likelihood that Google will discover all your important pages, particularly those with few or no internal links pointing to them.</p>
            <p>Best practices for XML sitemaps:</p>
            <ul>
                <li>Include only URLs you want indexed — no noindexed pages, no redirect chains, no soft 404s</li>
                <li>Keep each sitemap under 50,000 URLs or 50MB; use a sitemap index file if you need multiple</li>
                <li>Include <code>lastmod</code> dates — but only update them when content genuinely changes; inflated freshness signals are counterproductive</li>
                <li>Submit your sitemap via Google Search Console and monitor the submitted-vs-indexed ratio in the Sitemaps report</li>
            </ul>

            <h2>Canonical Tags and Duplicate Content</h2>
            <p>The <strong>canonical tag</strong> (<code>&lt;link rel="canonical" href="..."&gt;</code>) tells Google which version of a page is the "official" one when duplicate or near-duplicate versions exist. This is common with URL parameters (tracking codes, session IDs, filters), HTTP vs HTTPS variations, and www vs non-www variants. Set a self-referencing canonical on every page as standard practice, and point any duplicate versions explicitly at the preferred URL to consolidate indexing signals and avoid splitting link equity across versions.</p>
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
            <p>A <strong>backlink</strong> (or inbound link) is a hyperlink from another website pointing to a page on yours. Backlinks were the core of Google's original PageRank algorithm and remain one of Google's most significant ranking signals. The logic is intuitive: when a credible, relevant website links to your content, it signals that your content is worth referencing. The more credible the source, the stronger the signal.</p>

            <h2>How Google Evaluates Links</h2>
            <p>Not all backlinks are equal. Google weighs each link based on several factors:</p>
            <ul>
                <li><strong>Authority of the linking site</strong> — A link from a national newspaper or an established industry publication carries far more weight than a link from a brand-new blog with no audience</li>
                <li><strong>Topical relevance</strong> — A link from a site in your industry is more valuable than one from an unrelated domain. Relevance signals that the link is genuine editorial endorsement rather than incidental placement.</li>
                <li><strong>Placement within the page</strong> — Editorial links within the body of an article carry more weight than links in footers, sidebars, or boilerplate sections</li>
                <li><strong>Anchor text</strong> — The clickable text of a link provides context about what the linked page is about. Descriptive anchor text is more valuable than generic phrases.</li>
                <li><strong>Link uniqueness</strong> — Links from a wide range of different domains build more authority than many links from a single source. Referring domain count is a stronger signal than raw backlink count.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Think of backlinks as editorial endorsements. A link from a respected, relevant source is the digital equivalent of a recommendation from an industry authority. Google uses the collective weight of these endorsements to determine which pages are genuinely authoritative on a topic — not which pages have engineered the most links.</p>
            </div>

            <h2>Dofollow, Nofollow, and Link Attributes</h2>
            <p><strong>Dofollow</strong> links — the default for most links — pass ranking authority from the linking page to the destination. <strong>Nofollow</strong> links carry a <code>rel="nofollow"</code> attribute that instructs Google not to pass authority. Google also introduced <code>rel="sponsored"</code> for paid or affiliate links and <code>rel="ugc"</code> for user-generated content such as forum posts and blog comments.</p>
            <p>Google now treats nofollow as a "hint" rather than an absolute directive, meaning it may still consider some nofollow links when assessing authority. Nofollow links can also drive referral traffic and brand visibility, which have indirect SEO value.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Paying for links, participating in link exchange schemes, or using link networks violates Google's guidelines and can result in a manual penalty that causes severe, lasting damage to rankings. The only sustainable approach is earning links through content and relationships that make them genuinely worth giving. Volume-based outreach without genuine value to offer rarely works and increasingly risks creating a spam footprint that algorithmic filters catch.</p>
            </div>

            <h2>Understanding Toxic Links</h2>
            <p>Low-quality or manipulative backlinks pointing to your site — from link farms, hacked websites, or irrelevant spam networks — are generally ignored rather than penalised by Google's algorithms today. However, if you have historically participated in link schemes and received a manual action, Google's Disavow Tool allows you to ask Google to ignore specific links or domains. Use the Disavow Tool conservatively; incorrect use can disavow legitimate links and do more harm than good.</p>
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
            <h2>What Makes a Link Building Strategy Effective in 2026</h2>
            <p>Effective link building in 2026 is not about volume — it is about earning links from credible sources that genuinely find your content valuable enough to reference. Google's algorithms have become substantially better at distinguishing manufactured link profiles from ones built through real editorial relationships. The strategies that work focus on creating content worth linking to, then making the right people aware it exists.</p>

            <h2>Creating Linkable Assets</h2>
            <p>The most durable link building strategy is producing content so useful, original, or compelling that other sites link to it unprompted. These are sometimes called linkable assets:</p>
            <ul>
                <li><strong>Original research and data studies</strong> — Survey your audience, analyse public datasets, or compile industry benchmarks. Content that contains unique data becomes a citable source. Journalists and bloggers actively look for statistics to reference in their coverage.</li>
                <li><strong>Comprehensive reference guides</strong> — A genuinely thorough guide on a topic that becomes the go-to resource in your niche earns links over time from anyone writing about that topic.</li>
                <li><strong>Free tools and calculators</strong> — Interactive tools with genuine utility attract consistent links over months and years. Once published, they earn passively.</li>
                <li><strong>Visual assets</strong> — Charts, infographics, and diagrams are regularly embedded in other sites' content with attribution links. Make your visuals downloadable and clearly brand them.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The skyscraper technique — finding the most-linked content on a topic, producing a significantly better version, and reaching out to sites that linked to the original — is a proven linkable asset strategy. The emphasis is on "significantly better": marginally improved content rarely moves sites to swap their links. The bar is higher in 2026 than it was when the technique was coined.</p>
            </div>

            <h2>Broken Link Building</h2>
            <p>Broken link building involves finding dead links on other websites that point to content similar to yours, then contacting the site owner to offer your page as a working replacement. It works because you are solving a problem — broken links are a liability on any site — while earning an editorial placement. The process requires a crawl tool (Ahrefs, Screaming Frog) to surface broken outbound links on relevant pages, plus content that genuinely matches the dead page's topic.</p>

            <h2>Guest Content and Editorial Relationships</h2>
            <p>Writing articles for reputable publications in your industry remains a legitimate link building approach — but the emphasis is on quality and genuine editorial value, not volume. Target publications with real audiences. Pitch genuinely useful topics that serve the publication's readers, not promotional content dressed as editorial. A single link from a respected industry publication is worth more than twenty links from low-quality blogs created primarily to accept guest posts.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Mass cold outreach — sending hundreds of templated emails asking for links with no genuine value offered in return — has an extremely low response rate and generates the kind of impersonal link profile that Google's spam filters increasingly identify. Build fewer, better relationships with people who have reason to engage with you, and offer something of genuine value when you reach out.</p>
            </div>
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
            <p><strong>Digital PR</strong> is the practice of earning backlinks and brand mentions from news sites, magazines, industry publications, and other authoritative sources by generating genuinely newsworthy content. Where traditional PR focuses on brand visibility, digital PR is explicitly oriented towards the links that visibility generates — links from the kinds of high-authority domains that cannot be acquired through any other method. A single link from a national publication can have more authority impact than dozens of links from smaller sites.</p>

            <h2>Creating Content That Earns Press Coverage</h2>
            <p>Journalists need stories. If you give them original data and a clear angle, you become a citable source. The content types that consistently earn editorial links are:</p>
            <ul>
                <li><strong>Original data studies</strong> — Surveys, proprietary analyses, or compilations from public datasets. The "we surveyed 2,000 people and found X" or "we analysed 10,000 results and discovered Y" formula works because it creates genuinely original statistics that journalists have no other source for.</li>
                <li><strong>Annual and quarterly industry reports</strong> — Recurring reports build ongoing relationships with journalists who cover your sector. They return every cycle for the new data.</li>
                <li><strong>Reactive expert commentary</strong> — Fast, authoritative responses to breaking news or emerging trends. Position subject-matter experts at your organisation to respond rapidly when stories break in your industry.</li>
                <li><strong>Regional and ranking-based content</strong> — "The most expensive cities to rent in the UK" or "The best places to start a business by region" generates coverage in local and regional media, often with links back to the original data source.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The best digital PR content has a genuine "shareability factor": it surprises, challenges assumptions, confirms something people suspect but have no data for, or reveals something counterintuitive. Data that simply confirms existing wisdom rarely earns coverage. Editors and journalists choose stories that give their readers something they did not already know.</p>
            </div>

            <h2>Building Journalist Relationships</h2>
            <p>Sustainable digital PR is built on genuine relationships with journalists and editors who cover your industry. One-off pitches to cold contacts have low success rates. Relationship-first approaches compound over time:</p>
            <ul>
                <li>Follow and engage thoughtfully with journalists covering your space on LinkedIn and X</li>
                <li>Register as a source on journalist request services — Qwoted, ResponseSource, and HARO (now Connectively) — and respond promptly with genuinely useful expert commentary</li>
                <li>Provide accurate, useful input even when there is no immediate link opportunity — trust builds over time and pays off in coverage later</li>
                <li>Be a reliable, fast-responding source; on-deadline journalists choose whoever responds first with quality material</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Set up alerts on journalist request platforms and aim to respond within the first 30 to 60 minutes. Response speed is often the deciding factor — not the quality of the submission, when quality is broadly comparable. A good response an hour later loses to a slightly less polished response that arrived first.</p>
            </div>

            <h2>Measuring Digital PR Performance</h2>
            <p>Track: the number of links earned and their domain authority; month-on-month referring domain growth; organic traffic changes to pages that receive links; and brand mention volume over time. A successful digital PR campaign should generate the kinds of links that manual outreach campaigns could never produce — links from editors who chose to cite you, from publications that do not accept guest posts, and from domain authorities that move the needle on your site's overall authority profile.</p>
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
            <h2>The Right Metrics for SEO in 2026</h2>
            <p>SEO measurement has always required looking beyond rankings alone — but in 2026, it requires one more adjustment. With AI Overviews now appearing at the top of many search results, some searches are answered without a click to any organic result. This means organic traffic growth is a less complete picture of SEO performance than it once was. A site can be gaining visibility and influence in AI Overviews while its raw click numbers remain flat. Measurement frameworks need to account for both.</p>

            <h2>Primary SEO Metrics</h2>
            <ul>
                <li><strong>Organic traffic</strong> — Visitors arriving from unpaid search results. Track this in Google Analytics (the Organic Search channel). It remains your most important downstream metric, but interpret it alongside impression data to account for AI Overview click deflection on informational queries.</li>
                <li><strong>Impressions and click-through rate (CTR)</strong> — Found in Google Search Console's Performance report. Impressions tell you how often your pages appear in results (including AI Overview citations). CTR tells you what fraction of those impressions result in clicks. Declining CTR alongside stable impressions often signals AI Overview visibility without click capture — which may still have brand value worth tracking separately.</li>
                <li><strong>Keyword rankings</strong> — Track positions for your target keywords using a rank tracker. Focus on page-one visibility (positions 1–10), movements over time, and changes to featured snippet or AI Overview appearances. Avoid obsessing over daily fluctuations; weekly or monthly trend data is what matters.</li>
                <li><strong>Organic conversions</strong> — Leads, purchases, sign-ups, or enquiries attributed to organic search. This is the metric that justifies SEO investment to commercial stakeholders. Rankings and traffic without conversion data are incomplete reports.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Always connect SEO metrics to business outcomes. Traffic and rankings are leading indicators — valuable for diagnosing performance — but organic revenue, leads, and conversions are what justify the investment. If you cannot draw a line from your SEO activity to business results, your reporting is incomplete.</p>
            </div>

            <h2>Supporting Metrics</h2>
            <ul>
                <li><strong>Referring domains</strong> — Track the number of unique domains linking to your site monthly. This is a leading indicator of authority growth and the output metric of your link building work.</li>
                <li><strong>Core Web Vitals</strong> — Monitor LCP, INP, and CLS across your key pages in Search Console. Poor Core Web Vitals are a ranking disadvantage that often goes unnoticed until a technical audit.</li>
                <li><strong>Indexed pages</strong> — Check in Search Console's Index Coverage report that Google is indexing the pages you want indexed — and not indexing pages that should be excluded.</li>
                <li><strong>Domain authority metrics</strong> — Third-party metrics like Ahrefs DR or Moz DA estimate your site's overall link strength relative to competitors. Useful for benchmarking and competitive analysis, but not official Google metrics.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Daily ranking checks cause unnecessary anxiety and rarely produce actionable insight. Rankings fluctuate naturally — Google runs thousands of experiments simultaneously and ranking positions shift as a result. Review keyword positions weekly at most, and evaluate performance over 30, 60, and 90-day windows rather than reacting to individual-day changes.</p>
            </div>

            <h2>SEO Reporting Cadence</h2>
            <p>Set up a monthly report covering: organic traffic trend, CTR and impressions from Search Console, top-performing pages and any notable movers, keyword ranking changes for your core targets, new referring domains earned, Core Web Vitals status, and conversion data from organic. Quarterly, run a deeper review: competitor benchmarking, a crawl audit for technical issues, a content gap analysis against your topic clusters, and a strategic review of whether your keyword targets still reflect the right business priorities. SEO results compound over months, not days — set expectations accordingly.</p>
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
            <h2>Choosing a Bid Strategy</h2>
            <p>Your bid strategy tells Google Ads how to allocate bids across individual auctions. In 2026, Smart Bidding — Google's automated bidding using machine learning — has become the standard for most campaigns. The question is no longer whether to use automation, but how to give it the best possible inputs. The quality of your first-party conversion data is now the most important factor in how well any bid strategy performs.</p>

            <h2>Manual Bidding Options</h2>
            <ul>
                <li><strong>Manual CPC</strong> — You set the maximum cost-per-click for each keyword. Full control, but requires constant monitoring. Appropriate for very small accounts, brand campaigns with limited conversion volume, or when actively learning a new market.</li>
                <li><strong>Enhanced CPC (ECPC)</strong> — Manual bidding with Google adjusting bids slightly based on conversion likelihood signals. A transitional option as you build conversion history.</li>
            </ul>

            <h2>Smart Bidding Strategies</h2>
            <p>Smart Bidding uses auction-time signals — device, location, time of day, audience membership, search query, and more — to set the optimal bid for every individual auction:</p>
            <ul>
                <li><strong>Maximise Clicks</strong> — Gets as many clicks as possible within budget. Use only when traffic volume is the goal and conversion data is unavailable.</li>
                <li><strong>Maximise Conversions</strong> — Spends your budget to generate as many conversions as possible. The correct starting point when building conversion history before moving to a target-based strategy.</li>
                <li><strong>Target CPA</strong> — Aims to generate conversions at a specified cost-per-acquisition. Requires sufficient conversion data to work effectively.</li>
                <li><strong>Target ROAS</strong> — Optimises for a specified return on ad spend. Best for e-commerce with varying product values and a strong conversion history.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: First-Party Data Is the Engine</div>
                <p>Smart Bidding is only as good as the conversion data it learns from. <strong>Customer Match lists</strong> (your customer email and phone data uploaded to Google Ads), <strong>Enhanced Conversions</strong> (hashed first-party data sent alongside conversion tags to improve attribution accuracy), and <strong>offline conversion imports</strong> (CRM data mapped to Google Ads clicks) are the inputs that make Target CPA and Target ROAS genuinely effective. Without them, the AI is optimising on incomplete signals — and its output reflects that.</p>
            </div>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Switching to Target CPA or Target ROAS before the account has enough accurate conversion data. Google recommends at least 30 conversions in the past 30 days for Target CPA (50+ for Target ROAS) — but more importantly, those conversions need to be measured accurately. Enhanced Conversions and proper conversion tagging are prerequisites, not afterthoughts.</p>
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
            <p><strong>Quality Score</strong> is Google's diagnostic rating of the quality and relevance of your keywords, ads, and landing pages, scored from 1 to 10 per keyword. It is not a real-time signal used in every individual auction — it is an aggregated indicator that helps you understand how your ad relevance compares to competitors targeting the same keywords. A high Quality Score means you are paying less for the same position; a low score means you are overpaying.</p>

            <h2>The Three Components</h2>
            <ul>
                <li><strong>Expected Click-Through Rate (CTR)</strong> — How likely your ad is to be clicked when shown at a given position, compared to other ads targeting the same keyword. Driven by ad copy quality, keyword inclusion in headlines, and historical performance.</li>
                <li><strong>Ad Relevance</strong> — How closely your ad copy matches the intent behind the keyword. Your ad should directly address what someone searching that term wants to find or do.</li>
                <li><strong>Landing Page Experience</strong> — How relevant, useful, and navigable your landing page is. The page must deliver what the ad promises, load quickly on mobile, and make it straightforward for the user to take the next step.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Each component is rated as Below Average, Average, or Above Average. A Quality Score of 7 or above is generally healthy. Below 5 means you are paying significantly more per click than a competitor with the same bid and a better score. Improving Quality Score from 5 to 7 can reduce cost-per-click by up to 28%.</p>
            </div>

            <h2>Ad Rank and What It Means in Practice</h2>
            <p>Quality Score feeds into <strong>Ad Rank</strong> — the formula Google uses to determine your ad's position and whether it shows at all:</p>
            <p><strong>Ad Rank = Bid × Quality Score × Expected Impact of Assets</strong></p>
            <p>A competitor bidding £3 with a Quality Score of 4 can be outranked by you bidding £2 with a Quality Score of 8. This is the competitive advantage that quality-focused advertisers build over time.</p>

            <h2>Optimisation Score</h2>
            <p>Separate from Quality Score, Google surfaces an <strong>Optimisation Score</strong> (0–100%) at the campaign and account level. This score estimates how well your account is set to perform relative to available opportunities, based on Google's recommendations — adding assets, enabling Smart Bidding, addressing missing conversion actions, and more. It is a useful prompt for identifying what to review, though not every recommendation should be applied uncritically.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Prioritise landing page experience above all other Quality Score components. Most advertisers spend time writing better headlines but neglect the page users land on. Page speed, mobile usability, and the alignment between ad promise and page content are where the biggest Quality Score gains are typically found.</p>
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
            <h2>Why Conversion Tracking Is Non-Negotiable</h2>
            <p>Without accurate conversion tracking, Smart Bidding has no reliable data to learn from — it is optimising on incomplete or wrong signals. In 2026, conversion tracking is not just a measurement tool; it is the primary input that determines how well your entire account performs. Getting it right before spending significant budget is one of the most impactful things you can do in paid search.</p>

            <h2>What Counts as a Conversion?</h2>
            <p>A conversion is any valuable action you define. Common types:</p>
            <ul>
                <li><strong>Purchases</strong> — E-commerce transactions, ideally with revenue values passed to Google Ads so Smart Bidding can optimise for value, not just volume</li>
                <li><strong>Form submissions</strong> — Lead gen forms, contact requests, quote requests, demo bookings</li>
                <li><strong>Phone calls</strong> — Via call assets in your ads, or from your website (set a minimum call duration to filter out wrong numbers)</li>
                <li><strong>Sign-ups</strong> — Trial starts, newsletter subscriptions, account creations</li>
                <li><strong>Offline conversions</strong> — Sales that close in your CRM after a Google Ads click, imported back to the platform</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Enhanced Conversions</div>
                <p><strong>Enhanced Conversions</strong> improve measurement accuracy by securely sending hashed first-party data (email addresses, phone numbers) alongside your standard conversion tags. When a user converts on your site, Google matches that data to signed-in Google accounts — recovering conversions that would otherwise be lost due to cookie restrictions, ad blockers, or iOS privacy changes. Enhanced Conversions are now considered the baseline standard for accurate conversion measurement, not an optional extra.</p>
            </div>

            <h2>Attribution: Moving Past Last-Click</h2>
            <p>Attribution determines which ad interactions get credit for a conversion. Last-click attribution — which assigns 100% of credit to the final click before conversion — significantly undervalues upper-funnel touchpoints and leads to poor bidding decisions for any keyword that is not the last touchpoint in a journey.</p>
            <p>The current standard is <strong>Data-Driven Attribution (DDA)</strong>. DDA uses machine learning to distribute conversion credit across all touchpoints based on their actual contribution, and is now the default in Google Ads. It provides a more accurate picture of which keywords and ads are genuinely driving results — which is especially important when using Smart Bidding, which uses attribution data to calibrate its bids.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Setting up conversion tracking but not verifying it works. Always test that conversion tags are firing correctly using Google Tag Assistant or the diagnostics in Google Ads before scaling campaigns. A broken conversion tag means your Smart Bidding is learning from zero data — and making progressively worse decisions as a result.</p>
            </div>

            <h2>Offline Conversion Imports</h2>
            <p>For businesses where the sale happens offline — after a phone call, a sales team follow-up, or a meeting — importing offline conversions from your CRM into Google Ads closes the loop between ad clicks and actual revenue. It gives Smart Bidding the signal it needs to find the leads most likely to become customers, not just the leads most likely to fill in a form.</p>
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
            <h2>Two Different Networks, Two Different Mindsets</h2>
            <p>Google Ads operates across two fundamentally different networks that reach users at very different stages of intent:</p>
            <ul>
                <li><strong>Search Network</strong> — Text ads shown on Google search results pages when users actively type queries. Users have explicit, declared intent — they are searching for something specific.</li>
                <li><strong>Display Network</strong> — Visual banner and responsive ads shown across over 3 million websites, apps, and YouTube. Users are browsing passively — they are not actively searching for your product.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Search captures existing demand (people searching for what you offer). Display and video create new demand (putting your brand in front of people who are not yet searching). Both have a role in a full-funnel strategy, but they require completely different bidding approaches, creative formats, and success metrics.</p>
            </div>

            <h2>When to Use Each Network</h2>
            <ul>
                <li><strong>Search is best for</strong> — Direct response, lead generation, e-commerce, bottom-of-funnel conversion campaigns, capturing high-intent traffic</li>
                <li><strong>Display is best for</strong> — Brand awareness, remarketing to past visitors, nurturing audiences who have shown interest but not yet converted, and visual products that benefit from imagery</li>
            </ul>

            <h2>Display Network Targeting Options</h2>
            <p>Since Display users are not searching, targeting relies on who they are and what signals they have shown:</p>
            <ul>
                <li><strong>Audience segments</strong> — In-market (actively researching a category), affinity (long-term interests), custom segments built around search terms or competitor URLs</li>
                <li><strong>Contextual targeting</strong> — Ads shown on pages about specific topics or containing relevant keywords</li>
                <li><strong>Placements</strong> — Specific websites or apps where you want your ads to appear</li>
                <li><strong>Remarketing</strong> — Showing ads specifically to people who have already visited your website</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Running Search and Display in the same campaign. Google's default is to opt Search campaigns into the Display Network — always check and uncheck this in your campaign settings. The two networks need different budgets, bids, creative assets, and measurement approaches. Combining them makes it impossible to optimise either properly.</p>
            </div>

            <h2>Performance Max: The Unified Alternative</h2>
            <p>For advertisers who want to reach users across Search, Display, YouTube, Gmail, and Maps from a single campaign, <strong>Performance Max</strong> is Google's current recommendation. Rather than managing separate network campaigns, PMax uses asset groups and conversion goals to let Google's AI place ads wherever they are most likely to convert. It complements — rather than replaces — a well-structured Search campaign targeting your highest-intent keywords.</p>
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
            <p>There is a crucial distinction between <strong>keywords</strong> (the terms you bid on) and <strong>search terms</strong> (what users actually type). With broad match now operating on semantic intent, phrase match covering a wide range of conceptual variations, and AI Max for Search expanding query coverage further, the gap between what you bid on and what triggers your ads has widened considerably. The Search Terms Report is your primary window into this gap — and reviewing it regularly is more important than ever.</p>

            <h2>Mining the Search Terms Report</h2>
            <p>The Search Terms Report in Google Ads shows the actual queries that triggered your ads. Review it at least weekly to:</p>
            <ul>
                <li><strong>Find irrelevant queries</strong> — Searches that triggered your ads but are not relevant to your business or conversion goals</li>
                <li><strong>Identify new keyword opportunities</strong> — High-performing search terms you have not explicitly targeted and could add as exact or phrase match keywords</li>
                <li><strong>Understand user language</strong> — The specific words and phrases real users choose, which often differ from internal terminology and can sharpen your ad copy</li>
                <li><strong>Monitor AI Max expansion</strong> — If you are running AI Max for Search, the report shows how far beyond your keyword list Google is reaching and whether that expansion is serving your conversion goals</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Sort search terms by cost (highest first) to surface the most expensive irrelevant queries first. A single poorly matched term spending £50 per week that generates no conversions is worth finding immediately. One negative keyword can save thousands over a campaign's lifetime.</p>
            </div>

            <h2>Adding Negative Keywords Systematically</h2>
            <p>Build negative keyword lists by theme rather than adding terms one at a time. Common themes:</p>
            <ul>
                <li><strong>Intent negatives</strong> — "free," "cheap," "DIY," "how to" (for commercial campaigns)</li>
                <li><strong>Jobs/careers</strong> — "jobs," "careers," "salary," "vacancies"</li>
                <li><strong>Educational</strong> — "tutorial," "course," "training," "certificate"</li>
            </ul>
            <p>Apply shared negative lists across multiple campaigns simultaneously so you do not have to add the same terms repeatedly to each campaign.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>A well-maintained negative keyword list is one of the highest-return optimisation actions in paid search. Reducing wasted impressions improves your CTR, which improves your Quality Score, which lowers your CPC. The efficiency gains compound over time.</p>
            </div>

            <h2>Query Sculpting</h2>
            <p><strong>Query sculpting</strong> uses negative keywords to direct specific search terms to the most relevant ad group or campaign. If you have separate campaigns for standard and enterprise products, adding negatives in each ensures the right queries reach the right campaign — and the right ad copy and landing page. This becomes especially important when broad match and AI Max are expanding your reach across a wider query set.</p>
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
            <h2>Assets: Google's Preferred Term</h2>
            <p>Google formally renamed "extensions" to <strong>assets</strong> — a shift that reflects their broader role in how ads are built and served. Assets are additional pieces of information that expand your RSA beyond the core headline and description: extra links, callouts, images, prices, and more. Google's AI selects which assets to show for each auction based on what is most likely to drive the outcome you have set as your campaign goal.</p>

            <h2>Key Asset Types</h2>
            <ul>
                <li><strong>Sitelink assets</strong> — Additional links below your main ad pointing to specific pages (pricing, features, contact). Add at least four per campaign to give Google meaningful choices.</li>
                <li><strong>Callout assets</strong> — Short text highlights such as "Free Delivery," "No Long Contracts," or "UK-Based Support." Use these for key selling points that do not fit in headlines.</li>
                <li><strong>Structured snippets</strong> — Lists of specific offerings under a header (e.g., "Services: SEO, PPC, Content Marketing, Web Design").</li>
                <li><strong>Call assets</strong> — Display a phone number alongside your ad. On mobile, users can tap to call directly. This replaces the former "call-only ad" format, which has been deprecated. For businesses relying on phone leads, call assets within RSAs are now the correct approach.</li>
                <li><strong>Price assets</strong> — Surface pricing for products or services directly in the ad, setting expectations before the click.</li>
                <li><strong>Image assets</strong> — Add a visual image to your text ad. Where shown, they increase CTR by making the ad more prominent and distinct in the results page.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Assets do not always appear — Google decides when to show each one based on ad position, relevance, and predicted performance impact. Their <em>expected impact</em> is factored directly into your Ad Rank calculation, meaning a well-populated asset setup can improve your position without raising your bid.</p>
            </div>

            <h2>Impact on Performance</h2>
            <p>A complete asset setup generally lifts CTR significantly — more ad real estate, more reasons to click, and more relevance signals for the AI to work with. Assets also contribute to the "expected impact of assets" component in your Ad Rank, which means they are not cosmetic: they affect competitive positioning.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Set up every asset type relevant to your business, even if you are unsure they will always show. Review asset performance monthly in the Assets report — low-performing variants are worth replacing. For call assets specifically, use call reporting to track which campaigns are driving phone conversions alongside click-based ones.</p>
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
            <p>Search campaigns target by keyword, but audiences let you layer an additional dimension of intent onto that targeting. You can adjust bids for specific user segments, restrict your ads to high-value groups, or use audience data as input signals to Smart Bidding — making your campaigns more precise without limiting reach unnecessarily.</p>

            <h2>Audience Types Available for Search</h2>
            <ul>
                <li><strong>In-market audiences</strong> — People actively researching or comparing products in a specific category, identified by Google based on recent search and browsing behaviour. Apply these in Observation to see how in-market users convert versus your general traffic.</li>
                <li><strong>Affinity audiences</strong> — People with long-term interests in specific topics. Broader than in-market, and better suited to awareness-stage bidding adjustments.</li>
                <li><strong>Customer Match</strong> — Upload your customer email list and target (or exclude) those users when they search. This is first-party data working at its most direct: you are reaching people you already have a relationship with. Customer Match lists also serve as audience signals for Smart Bidding, improving its ability to find similar high-value users.</li>
                <li><strong>Remarketing lists (RLSA)</strong> — Target people who have previously visited your website. Combining RLSA with Smart Bidding and Customer Match creates a layered first-party data strategy that significantly improves conversion efficiency.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Observation vs Targeting</div>
                <p><strong>Observation mode</strong> shows your ads to everyone searching your keywords, but records performance data broken down by audience — you can then adjust bids up or down for each segment. <strong>Targeting mode</strong> restricts your ads to only show to people in the selected audiences. Start with Observation to build data, then move high-value segments into Targeting mode once you have evidence.</p>
            </div>

            <h2>RLSA: Remarketing Lists for Search Ads</h2>
            <p>RLSA lets you tailor campaigns for users who have already visited your site. Practical applications:</p>
            <ul>
                <li>Bid higher for past visitors searching your keywords — they already know your brand and are more likely to convert</li>
                <li>Serve different ad copy to returning visitors, acknowledging the existing relationship rather than running a generic acquisition message</li>
                <li>Expand keyword coverage for known visitors — broader match types are less risky when the user already has brand familiarity</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Build a "converters" audience and exclude it from acquisition campaigns — this stops you paying acquisition CPCs for people who are already customers. Route that audience to a separate retention or upsell campaign with messaging matched to their purchase history. Feed both lists as Customer Match signals into Smart Bidding so the model learns to value users who behave like your best customers.</p>
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
            <h2>How Smart Bidding Works</h2>
            <p>Smart Bidding uses Google's machine learning to set bids in real time for every individual auction. Rather than a single bid per keyword, it evaluates hundreds of signals simultaneously to determine the optimal amount to bid given the likelihood of conversion at that moment, for that specific user.</p>

            <h2>Auction-Time Signals</h2>
            <p>Smart Bidding considers signals no human bidder could process at auction speed:</p>
            <ul>
                <li><strong>Device</strong> — Mobile, desktop, or tablet</li>
                <li><strong>Location</strong> — Physical location and inferred location intent from the query</li>
                <li><strong>Time of day and day of week</strong></li>
                <li><strong>Search query</strong> — The actual terms typed, not just the matched keyword</li>
                <li><strong>Remarketing list membership</strong> — Whether the user has previously visited your site</li>
                <li><strong>Ad creative</strong> — Which RSA variant is predicted to perform best for this user</li>
                <li><strong>First-party audience signals</strong> — Customer Match lists, Enhanced Conversions data, and offline conversion imports all inform the model's understanding of what a high-value user looks like</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: First-Party Data Feeds Smart Bidding</div>
                <p>Smart Bidding is only as good as the conversion data it learns from. <strong>Customer Match lists</strong> tell the model who your best customers are. <strong>Enhanced Conversions</strong> improve measurement accuracy by securely matching hashed first-party data to Google sign-ins. <strong>Offline conversion imports</strong> bring CRM outcomes back into the model. Together, these inputs are what separate a high-performing Smart Bidding account from an average one.</p>
            </div>

            <h2>Performance Max: Meaningful Controls in 2026</h2>
            <p><strong>Performance Max (PMax)</strong> runs across all Google channels — Search, Display, YouTube, Gmail, Maps, and Discover — from a single campaign. It has historically been criticised for limited transparency, but Google has since introduced meaningful controls that change how to evaluate it:</p>
            <ul>
                <li><strong>Campaign-level negative keywords</strong> — You can now block specific queries from triggering PMax across all channels</li>
                <li><strong>Asset group-level reporting by channel</strong> — See which placements (Search, YouTube, Display, etc.) are driving results within each asset group</li>
                <li><strong>Placement exclusion controls</strong> — Exclude specific websites and apps from receiving your ads</li>
                <li><strong>Brand exclusions in the UI</strong> — Prevent your PMax campaigns from targeting your own brand terms and competing with your branded search campaigns</li>
            </ul>
            <p>These controls mean PMax is no longer a pure black box — it is a high-automation campaign type with enough levers for strategic management. The question is not whether to use it but whether your account has sufficient conversion data for it to learn effectively.</p>

            <h2>AI Max for Search</h2>
            <p><strong>AI Max for Search</strong> is a campaign-level feature — not a campaign type — that extends the reach of standard Search campaigns using AI. It expands query matching beyond your keyword list using semantic understanding and can dynamically personalise landing page URLs and ad copy based on the search query. Enable it in campaigns where you have strong conversion tracking and want to test AI-driven query expansion with more control than full PMax.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Accepting Google's auto-applied recommendations without review. Some are genuinely useful, but others — such as shifting budgets between campaigns or expanding match types — should be evaluated against your specific account goals before applying. Review each recommendation manually and check its projected impact against your Target CPA or ROAS.</p>
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
            <p><strong>Shopping ads</strong> display product images, prices, and retailer names directly in search results and on the Shopping tab. Unlike Search ads, Shopping ads are not triggered by the keywords you bid on — they are triggered by your <strong>product feed</strong>, a structured data file that Google matches to relevant queries. The quality of your feed is therefore the primary lever for Shopping performance, not bid strategy alone.</p>

            <h2>Google Merchant Center</h2>
            <p>The <strong>Google Merchant Center</strong> is where you upload and manage your product feed. Required attributes for each product include:</p>
            <ul>
                <li><strong>Title</strong> — Descriptive product name, including brand, colour, size, and other attributes searchers use</li>
                <li><strong>Description</strong> — Detailed product information that Google uses to understand relevance</li>
                <li><strong>Price</strong> — Must match the price shown on your landing page exactly, or Google will disapprove the product</li>
                <li><strong>Image</strong> — High-quality product photo against a clean background</li>
                <li><strong>Availability</strong> — In stock, out of stock, or preorder</li>
                <li><strong>GTIN / MPN</strong> — Unique product identifiers that help Google categorise your products accurately</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Your product title is the single highest-impact feed attribute. Front-load it with terms people actually search for — Brand + Product Type + Key Attributes. "Nike Air Max 90 Men's White Running Shoes Size 10" will outperform "White Shoes" across every metric. Treat title optimisation with the same rigour you would apply to SEO title tags.</p>
            </div>

            <h2>Standard Shopping vs Performance Max for Shopping</h2>
            <p>Google has been moving e-commerce advertisers towards Performance Max for Shopping, but the framing of PMax as a control-free "black box" has shifted considerably:</p>
            <ul>
                <li><strong>Standard Shopping</strong> — You control product groups, bidding, and Search Network targeting. Reporting at the product and product group level is transparent. Retains a place for accounts that need granular management of large catalogues.</li>
                <li><strong>Performance Max</strong> — AI-driven across all Google channels simultaneously. Now includes campaign-level negative keywords, asset group-level channel reporting, placement exclusion controls, and brand exclusions in the UI. The "less granular control" criticism is less valid than it was — but you still need strong conversion data for PMax to learn effectively. Without it, the AI optimises on incomplete signals.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>For Shopping specifically, PMax works best when your Merchant Center feed is in excellent shape and you have consistent daily conversion volume. A high-quality feed is still the foundation — no amount of AI will compensate for disapproved products, inaccurate titles, or stale availability data.</p>
            </div>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Neglecting feed optimisation in favour of bid and budget adjustments. Since Google uses feed data to match your products to queries, a poorly optimised feed means your products simply will not appear for the most relevant searches — regardless of how high you bid.</p>
            </div>
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
                <li><strong>Conversion Rate</strong> — Percentage of clicks that result in a conversion. Benchmark: 2–5% across industries, though this varies widely.</li>
                <li><strong>Cost Per Acquisition (CPA)</strong> — Total spend divided by number of conversions</li>
                <li><strong>Return on Ad Spend (ROAS)</strong> — Revenue generated divided by ad spend</li>
            </ul>

            <h2>Calculating and Understanding ROAS</h2>
            <p><strong>ROAS = Revenue from Ads ÷ Cost of Ads</strong></p>
            <p>A ROAS of 4:1 means you earn £4 for every £1 spent. But a "good" ROAS depends entirely on your margins and business model. A business with 80% gross margins can be profitable at 2:1 ROAS, while a business with 20% margins needs at least 5:1 to break even on that channel.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Attribution Affects Every Number</div>
                <p>How you attribute conversions changes every metric in your reports. <strong>Last-click attribution</strong> — still a default in some setups — credits only the final ad interaction before conversion, systematically undercounting the contribution of upper-funnel campaigns. <strong>Data-Driven Attribution (DDA)</strong> is the current standard in Google Ads: it uses machine learning to distribute credit across all touchpoints in the conversion path based on their actual contribution. For most accounts, switching to DDA produces a more accurate picture of which campaigns, ad groups, and keywords are genuinely driving value.</p>
            </div>

            <h2>Enhanced Conversions: Improving Measurement Accuracy</h2>
            <p>As third-party cookies continue to be phased out and privacy changes affect tracking, conversion data becomes increasingly incomplete without first-party supplementation. <strong>Enhanced Conversions</strong> address this by securely sending hashed first-party data (email addresses, phone numbers) collected at the point of conversion to Google, which matches it to signed-in users and recovers conversions that standard tag-based tracking would miss. This improves the accuracy of every conversion metric in your reports and gives Smart Bidding better signal to optimise from.</p>

            <h2>Impression Share and Optimisation Score</h2>
            <p><strong>Impression share</strong> shows the percentage of eligible impressions your ads actually received. Lost impression share (due to budget or Ad Rank) tells you how much opportunity you are leaving on the table and whether the constraint is budget or quality.</p>
            <p>Separately, Google surfaces an <strong>Optimisation Score</strong> (0–100%) at campaign and account level. This estimates how well your account is set to perform relative to available opportunities. It is not a direct performance metric — it is an indicator of how many of Google's recommendations you have applied. Review the recommendations driving the score critically: some are sound, others will not suit your account strategy.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Build a weekly reporting dashboard covering: total spend, conversions, CPA, ROAS, impression share, and DDA-attributed performance by campaign. Monthly, layer in trends and compare against your target CPA or ROAS thresholds. The goal is not to report on numbers — it is to identify where the budget is working hardest and where it is not.</p>
            </div>
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
            <h2>Why Microsoft Ads Deserves a Place in Your Media Plan</h2>
            <p><strong>Microsoft Advertising</strong> (formerly Bing Ads) now runs across Bing, Yahoo, DuckDuckGo, and the broader Microsoft Search Network. In 2026, it has also become the advertising platform for <strong>Copilot</strong> — Microsoft's AI assistant integrated into Windows, Edge, and Microsoft 365 — representing a genuinely new placement type that most advertisers are still underutilising.</p>

            <h2>The Microsoft Search Audience</h2>
            <p>Microsoft's search user base skews older, more professional, and more desktop-heavy than Google's, partly because Bing is the default search engine in Microsoft Edge and on Windows devices — including the corporate laptops common in enterprise environments. Key characteristics:</p>
            <ul>
                <li><strong>Age</strong> — Higher proportion of 35–65+ users than Google</li>
                <li><strong>Income</strong> — Above-average household income relative to the general population</li>
                <li><strong>Desktop share</strong> — Larger desktop proportion, making it valuable for products and services where desktop conversion rates are higher</li>
                <li><strong>B2B reach</strong> — Corporate devices default to Bing, making Microsoft Advertising particularly effective for B2B advertisers trying to reach professionals in large organisations</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Copilot Placements</div>
                <p>Microsoft Advertising now serves ads within <strong>Copilot</strong> — the AI assistant embedded in Windows, Edge, and Microsoft 365. These placements appear alongside AI-generated responses to search queries and conversational questions. This is a meaningful expansion of where your ads can appear, distinct from traditional search results, and one of the fastest-growing placement categories on the Microsoft network.</p>
            </div>

            <h2>LinkedIn Professional Targeting: Microsoft's Genuine Differentiator</h2>
            <p>Microsoft's ownership of LinkedIn gives it a targeting capability Google cannot replicate. Within Microsoft Advertising, you can layer LinkedIn profile data onto your search campaigns to target by:</p>
            <ul>
                <li><strong>Job title</strong> — Reach specific roles such as "Marketing Director" or "Head of Procurement"</li>
                <li><strong>Seniority level</strong> — Target decision-makers (Director, VP, C-suite) rather than general employees</li>
                <li><strong>Company name</strong> — Reach users employed at specific organisations, useful for account-based marketing</li>
                <li><strong>Industry</strong> — Filter by sector (e.g., Financial Services, Technology, Healthcare)</li>
            </ul>
            <p>This combination of search intent and professional identity is exclusive to Microsoft Advertising. For B2B advertisers, it is a significant advantage — you are reaching someone searching for your solution who is also in the job title you are trying to reach.</p>

            <h2>AI Max for Microsoft and Importing From Google</h2>
            <p>Microsoft Advertising now offers its own version of AI-driven campaign expansion, branded as <strong>AI Max for Microsoft</strong>. Like Google's equivalent, it extends query matching using AI and dynamically personalises ad experiences. The easiest way to launch on Microsoft is importing your Google Ads campaigns directly — the import tool copies campaign structure, keywords, ads, and settings — then adjusting bids for the Microsoft marketplace, where CPCs are typically 20–40% lower than equivalent Google positions.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Do not simply mirror your Google Ads bids on Microsoft. The auction is less competitive, so start 20–30% lower and calibrate from performance data. Monitor Copilot placement performance separately from traditional search placements — the click intent and conversion behaviour can differ meaningfully.</p>
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
            <p>Scaling paid search means increasing spend while holding your ROAS or CPA within acceptable bounds. The challenge is real: the most efficient clicks come first, and as you scale, you are reaching progressively less qualified users at progressively higher costs. The goal is to push that efficiency frontier outward — through better signals, better creative, and better automation — rather than simply pouring budget in.</p>

            <h2>Scaling Strategies That Work in 2026</h2>
            <ul>
                <li><strong>Increase budgets incrementally</strong> — Raise budgets by 15–20% at a time. Sudden large jumps disrupt Smart Bidding's learning period, causing it to bid erratically while it adjusts to new volume levels. Give it time to recalibrate between increases.</li>
                <li><strong>Improve first-party data inputs</strong> — Richer signals drive better scaling. Uploading higher-quality Customer Match lists, enabling Enhanced Conversions, and importing offline conversion data all give Smart Bidding a clearer picture of what a valuable conversion looks like — allowing it to find more of them efficiently as budgets grow.</li>
                <li><strong>Use AI Max for Search as a controlled expansion lever</strong> — Rather than moving to fully broad match across all campaigns, AI Max lets you expand query coverage with AI-driven matching while keeping standard search campaign structure intact. Test it in campaigns with strong conversion data before scaling spend.</li>
                <li><strong>Geographic expansion</strong> — If campaigns are performing at target CPA in one region, test expansion to adjacent regions with similar demographic profiles before moving to wholly new markets.</li>
                <li><strong>Performance Max for new inventory</strong> — If your current Search campaigns are approaching saturation, PMax can access YouTube, Display, Gmail, Maps, and Discover inventory simultaneously. With campaign-level negatives, placement exclusions, and asset group reporting now available, it is a more manageable scaling vehicle than it once was.</li>
                <li><strong>Dayparting and device analysis</strong> — Identify where conversion rate is highest by hour, day, and device. Concentrate budget there before pushing into lower-performing windows.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>There is an efficiency frontier for every campaign — a point where additional spend delivers diminishing returns. You do not eliminate this frontier through more budget alone. You push it outward by improving the quality of signals you feed the system (first-party data), the quality of assets you give it to work with (RSA headlines, images, landing pages), and the breadth of inventory you give it to find conversions across (AI Max, PMax).</p>
            </div>

            <h2>Seasonal Adjustments</h2>
            <p>Most businesses have seasonal demand patterns. Plan budget increases ahead of high-demand periods — Black Friday, January sales, tax season — not after demand has already peaked. Use Google Ads' seasonality adjustment tool to inform Smart Bidding of expected short-term changes in conversion rate, so the algorithm does not misinterpret a seasonal spike as a signal to change its underlying bidding model.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Scaling spend without improving what the budget hits. If your conversion rate is declining as volume grows, the solution is not more budget — it is better ad copy, better landing pages, and higher-quality audience signals. Spend and quality must scale together; scaling spend onto a weak funnel just magnifies the waste.</p>
            </div>
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
            <h2>Platform Selection Is a Strategic Decision</h2>
            <p>Spreading budget across every platform produces mediocre results everywhere. The better approach is to identify where your audience is most active and most reachable, then build depth on one or two platforms before expanding. Each platform has a distinct user profile, mindset, and advertising model that determines where it earns a place in your media mix.</p>

            <h2>Platform Breakdown</h2>
            <ul>
                <li><strong>Meta (Facebook, Instagram, and Threads)</strong> — The broadest social advertising ecosystem. Facebook skews 25–54; Instagram skews 18–40. Threads is now accessible as a placement through Ads Manager, extending Meta's reach further. Meta's Advantage+ campaign structure hands targeting and placement decisions to the algorithm — meaning your creative quality matters more than your audience segmentation choices. Best for: e-commerce, broad B2C, retargeting, lead generation.</li>
                <li><strong>LinkedIn</strong> — The only platform with precise professional targeting: job title, seniority, company size, industry, and skills. CPCs are higher, but you are reaching verified decision-makers in a professional mindset. Native CRM integration now lets you track pipeline and revenue impact directly in Campaign Manager. Best for: B2B, SaaS, professional services, enterprise sales.</li>
                <li><strong>TikTok</strong> — A creator-led, content-first platform where authenticity outperforms polish. The 18–34 demographic dominates. TikTok's US situation was resolved in January 2026 and it operates as a stable advertising channel. Smart+, TikTok's unified AI campaign type, manages targeting, creative, budget, and placements at module level. Best for: D2C brands, ecommerce, apps, UGC-driven campaigns.</li>
                <li><strong>Pinterest</strong> — A visual discovery and planning platform with high commercial intent. Users come to Pinterest to research and plan purchases, making it particularly effective for home, fashion, food, and lifestyle brands. Content has an unusually long lifespan compared to other platforms.</li>
                <li><strong>Snapchat</strong> — Strong reach with 13–34 year olds, with unique AR advertising formats that generate extended engagement. Best for brands targeting younger audiences with interactive experiences or local campaigns.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Match your platform to your buyer, not to what is trending. A B2B software company investing in TikTok while neglecting LinkedIn is optimising for cultural relevance rather than business results. Go where your customers are, in the mindset that makes them receptive to your category.</p>
            </div>

            <h2>B2B vs B2C Considerations</h2>
            <p>B2C brands have more platform flexibility — consumers use most platforms personally, so reach is possible almost everywhere. B2B brands should anchor on LinkedIn for targeting precision, with Meta as a secondary channel for retargeting and content distribution. On Meta, Advantage+ handles the audience selection; the key B2B input is ensuring your creative speaks clearly to the professional problem you solve.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Start with one platform and build depth before expanding. A £2,000/month budget focused entirely on the platform where your audience is most active will outperform the same budget spread thinly across five. Build a strong creative system and conversion data on your primary platform first — then that learning transfers when you expand.</p>
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
            <p>Social advertising platforms organise campaign objectives around the marketing funnel — <strong>Awareness</strong>, <strong>Consideration</strong>, and <strong>Conversion</strong>. The objective you select tells the platform's algorithm what outcome to optimise for, which changes not only who sees your ad but how the AI interprets your creative performance and what signals it uses to find the next user to show it to.</p>

            <h2>Objective Types</h2>
            <ul>
                <li><strong>Awareness objectives</strong> — Maximise reach and impressions. The algorithm shows your ad to as many people as possible within your targeting. Use for brand building and top-of-funnel campaigns where the goal is recognition, not immediate action.</li>
                <li><strong>Consideration objectives</strong> — Drive traffic, engagement, video views, or lead form completions. The algorithm targets users whose behaviour suggests they are likely to take mid-funnel actions. Useful for building an audience of engaged prospects for later retargeting.</li>
                <li><strong>Conversion objectives</strong> — Drive purchases, sign-ups, or other high-value actions. The algorithm finds users most likely to complete the specific conversion event you have designated, drawing on historical conversion data from your Pixel, Conversions API, and any first-party signals you have connected.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Selecting a Traffic objective when the actual goal is sales. The algorithm finds people who are likely to click — many of whom will bounce without converting. If you want purchases, select a Conversion objective and let the algorithm find buyers. You will typically see fewer clicks and lower CTR, but significantly better conversion rates and ROAS.</p>
            </div>

            <h2>How Platform Algorithms Use Objectives</h2>
            <p>When you select a Conversion objective, the platform analyses the shared characteristics of past converters and identifies new users with similar patterns. The algorithm is not just using your audience settings — it is continuously learning from conversion signals to refine who it shows your ads to. This is why measurement quality matters as much as targeting quality: poor conversion data means the algorithm is optimising blind.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The objective is the most impactful setting in any campaign. The same ad, shown to the same audience, under an Awareness objective versus a Conversion objective will deliver entirely different results — because the algorithm's definition of a "good" user changes completely. On Meta specifically, where Advantage+ is increasingly making the audience decisions, the objective is often the primary lever you control.</p>
            </div>

            <h2>Matching Objectives to Your Account Stage</h2>
            <p>Brands without conversion data should build it first: use Traffic or Engagement objectives to populate your Custom Audiences and give your Pixel (and Conversions API) events to learn from. Once you have consistent conversion volume — typically 50+ events per week on the specific conversion you want to optimise — switch to a Conversion objective and let the algorithm use that data to find buyers more efficiently.</p>
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
            <p>Meta Ads Manager organises campaigns into three levels, each controlling different aspects of your advertising:</p>
            <ul>
                <li><strong>Campaign level</strong> — Where you set your objective (Awareness, Traffic, Engagement, Leads, Sales, etc.) and choose whether to use Advantage+ Shopping or a standard campaign structure. Campaign Budget Optimisation (CBO) is set here.</li>
                <li><strong>Ad Set level</strong> — Where you define placements, budget (if not using CBO), schedule, and optimisation event. With Advantage+ Audience enabled, Meta handles most audience decisions automatically at this level.</li>
                <li><strong>Ad level</strong> — Where you build creative: images, videos, headlines, descriptions, and calls to action. This is increasingly where your competitive edge lives, because creative quality is the primary signal Meta's algorithm uses to find the right users.</li>
            </ul>

            <h2>Advantage+ as the Primary Campaign Structure</h2>
            <p>Meta has moved decisively toward AI-driven campaign management through its <strong>Advantage+</strong> suite. Advantage+ Shopping Campaigns handle targeting, placement, and budget distribution automatically for e-commerce. Advantage+ Audience replaces manual interest targeting for other campaign types. The practical implication: the time you previously spent building and testing audience segments is better spent producing more diverse creative.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>In a well-run Meta account in 2026, the algorithm is making most audience and placement decisions. Your role shifts from audience architect to creative director. The inputs that matter most are: your conversion data (via CAPI), your creative diversity (distinct messages and formats), and your objective alignment (telling the algorithm exactly what outcome you want).</p>
            </div>

            <h2>Naming Conventions</h2>
            <p>Consistent naming saves time when reporting and scaling. A reliable format:</p>
            <ul>
                <li><strong>Campaign:</strong> [Objective] — [Product/Offer] — [Date]</li>
                <li><strong>Ad Set:</strong> [Audience Type] — [Audience Details or "Advantage+"]</li>
                <li><strong>Ad:</strong> [Format] — [Creative Concept] — [Variation]</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use UTM parameters in every ad URL so you can track Meta traffic in GA4 as a cross-platform benchmark. Meta's native attribution and GA4 will show different numbers due to different attribution windows — both are useful, but neither alone gives the full picture. Set up your Conversions API before your first campaign goes live, not afterwards.</p>
            </div>

            <h2>Essential Account Settings</h2>
            <p>Before launching any campaign, verify: your Meta Pixel is installed and firing correctly, your <strong>Conversions API (CAPI)</strong> is connected and sending server-side events, your domain is verified, aggregated event measurement is configured, and your payment method is active. Of these, CAPI setup is the most commonly skipped and the most consequential — browser-only tracking now misses a significant share of conversions.</p>
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
            <h2>How Meta Targeting Has Shifted</h2>
            <p>Meta's audience targeting model has changed significantly. The platform's AI — powered by <strong>Meta Lattice</strong>, its unified ad ranking system — now makes most prospecting audience decisions automatically through <strong>Advantage+ Audience</strong>. Rather than the algorithm serving your ads to a manually defined segment, it starts with a broad pool and continuously narrows based on which users are actually engaging and converting. The practical implication is that granular interest targeting for prospecting is increasingly less effective than simply providing excellent creative and letting the algorithm find who responds to it.</p>

            <h2>What Audience Controls Still Matter</h2>
            <p>While prospecting audience decisions are increasingly automated, three audience types remain highly valuable:</p>

            <h2>Custom Audiences</h2>
            <p>Custom Audiences are built from people who already have a relationship with your business — and they remain the highest-ROAS audience type because you are reaching users who already know you:</p>
            <ul>
                <li><strong>Website visitors</strong> — Built from Pixel and CAPI event data. Segment by page visited, depth of visit, or time window (30/60/90 days).</li>
                <li><strong>Customer list</strong> — Upload hashed email addresses or phone numbers. These match to Meta users and serve as both retargeting audiences and the source for Lookalike creation.</li>
                <li><strong>Engagement</strong> — Users who interacted with your content, watched video, or engaged with your Instagram or Facebook profile.</li>
                <li><strong>App activity</strong> — Users who took specific in-app actions.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Creative Quality Is the New Targeting</div>
                <p>In Meta's Advantage+ model, creative quality has become the primary audience targeting signal. Meta Lattice ranks ads across all placements using signals from how different users respond to specific creative — meaning a compelling ad effectively "self-selects" its audience. Investing in diverse, high-quality creative concepts produces better audience reach than manually restricting who sees your ads.</p>
            </div>

            <h2>Lookalike Audiences</h2>
            <p>Lookalike Audiences find new users with similar characteristics to a source audience you define. They remain useful as a starting signal within Advantage+ Audience, even though Meta's AI may expand beyond the Lookalike if it finds better-performing users elsewhere. Build your Lookalike from high-value converters rather than all customers — the quality of the source determines the quality of the output.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Build retargeting audiences for every stage of your funnel: all visitors, product page viewers, add-to-cart without purchase, and past buyers. Then tailor the creative to each stage — a user who abandoned checkout needs different messaging than a first-time visitor. Ensure your CAPI is passing these events accurately, not just your browser Pixel, so your Custom Audiences are complete.</p>
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
                <li><strong>Single Image</strong> — Fast to produce and test. Works well for clear product shots, bold graphic messages, or UGC-style still frames. The simplest format for rapid creative iteration.</li>
                <li><strong>Video</strong> — The highest-engagement format. Short videos (15–30 seconds) work best for performance campaigns. Shoot in square (1:1) or vertical (9:16) for mobile feeds and Stories/Reels. Video in Reels placement is shown across Facebook, Instagram, and now Threads.</li>
                <li><strong>Carousel</strong> — Multiple scrollable cards, each with its own image, headline, and link. Strong for showcasing multiple products, telling a sequential story, or demonstrating before-and-after results.</li>
                <li><strong>Collection</strong> — A cover image or video with product thumbnails below, opening into an Instant Experience. The primary e-commerce format for high-intent discovery campaigns.</li>
            </ul>

            <h2>Creative Principles That Work in 2026</h2>
            <p>Social ads compete with organic posts, Reels, and Stories for attention in the same feed. Your creative must earn attention in under two seconds:</p>
            <ul>
                <li><strong>Hook immediately</strong> — The first frame of a video or the dominant element of an image must create immediate curiosity, tension, or recognition. Everything else follows from this.</li>
                <li><strong>Show the product in real use</strong> — Real usage, real faces, and real environments outperform studio photography. Authenticity is not just a creative style — it is a performance driver.</li>
                <li><strong>Match the platform's native feel</strong> — Ads that look like organic content get further before the brain registers them as advertising. This is why UGC-style creative consistently outperforms polished brand production on Meta.</li>
                <li><strong>Produce distinct angles, not variations</strong> — Meta Lattice distributes ad delivery based on how different audiences respond to different creative signals. Three genuinely different creative concepts — testimonial, product demo, problem/solution — will outperform three slightly different versions of the same concept.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>In Meta's current ad model, creative quality is not just a performance factor — it is the primary targeting mechanism. Meta Lattice matches your creative to the users most likely to respond to it. This means creative diversity (distinct messages, formats, and angles) does more for reach efficiency than audience segmentation.</p>
            </div>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake: Missing AI Content Disclosure</div>
                <p>If your ad creative is generated or substantially altered using AI — including AI-generated images, AI-edited video, or AI-synthesised voiceover — mandatory disclosure is now required globally across Meta's platforms. Failing to disclose AI-generated creative risks ad disapproval and account flags. Check Meta's current disclosure requirements before publishing any AI-assisted creative at scale.</p>
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
            <h2>The Measurement Foundation</h2>
            <p>Accurate conversion measurement is the foundation of everything else in Meta advertising — Smart Bidding only performs as well as the data it receives, and retargeting Custom Audiences are only as complete as the events that built them. Meta provides two complementary measurement tools: the browser-side Pixel and the server-side Conversions API.</p>

            <h2>The Meta Pixel</h2>
            <p>The Meta Pixel is a JavaScript snippet that fires events from the user's browser when they take actions on your website. It populates standard events that Meta uses for both reporting and optimisation:</p>
            <ul>
                <li><strong>PageView</strong> — Fires on every page load</li>
                <li><strong>ViewContent</strong> — Product or content page views</li>
                <li><strong>AddToCart</strong> — Items added to a shopping basket</li>
                <li><strong>InitiateCheckout</strong> — Checkout process begun</li>
                <li><strong>Purchase</strong> — Transaction completed (always include value and currency)</li>
                <li><strong>Lead</strong> — Form submission or sign-up completed</li>
            </ul>
            <p>Using Meta's standard event names rather than custom event names allows the algorithm to apply its full optimisation capability — it has learned what these events mean across billions of user journeys.</p>

            <h2>Conversions API (CAPI): The Primary Measurement Tool</h2>
            <p>The <strong>Conversions API</strong> sends event data from your server directly to Meta, bypassing the browser entirely. Where the Pixel depends on the user's browser environment — which is affected by ad blockers, iOS App Tracking Transparency, cookie restrictions, and page load failures — CAPI is not. This makes CAPI the primary measurement layer for a complete Meta account, not a supplementary option.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: CAPI Is Not Optional</div>
                <p>Browser-only tracking now routinely misses 20–40% of conversions. Every event that does not reach Meta is a signal the algorithm cannot learn from. Running CAPI alongside your Pixel closes this gap — events deduplicated server-side, so there is no double-counting. The result is a more complete Custom Audience, a better-trained algorithm, and more accurate conversion reporting. Set CAPI up before your first campaign, not after performance starts dropping.</p>
            </div>

            <h2>The Direction of Travel: Meta's Generative Ad Model</h2>
            <p>Meta is moving toward a <strong>Generative Ad Model (GEM)</strong> — a direction where the platform itself plays a greater role in generating and assembling ad creative from the inputs you provide (images, copy, product catalogues), matched to the user and context most likely to convert. In this model, the quality of your source assets and the completeness of your conversion signals become even more critical — they are the inputs that GEM builds from.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Setting up CAPI once and assuming it is working indefinitely. Server connections require maintenance — platform updates, website changes, and API version upgrades can all break CAPI silently. Monitor your Event Match Quality score in Events Manager regularly and investigate any sudden drop in matched events.</p>
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
            <h2>Advantage+ Is Now the Primary Campaign Structure</h2>
            <p>Meta's <strong>Advantage+</strong> suite is no longer a supplementary option — it is the primary campaign structure for most advertisers. Treating it as an experiment alongside traditional manual campaigns misses the point. The platform's AI (powered by Meta Lattice) performs better with more creative diversity and less audience restriction. Resisting Advantage+ by maintaining heavy manual controls typically produces worse results, not better ones.</p>

            <h2>The Advantage+ Suite</h2>
            <ul>
                <li><strong>Advantage+ Shopping Campaigns</strong> — Fully automated campaigns for e-commerce. Provide creative assets and a product catalogue; Meta handles targeting, placement, and budget allocation across Facebook, Instagram, Messenger, and Threads. Consistently outperforms manually structured shopping campaigns for accounts with sufficient conversion data.</li>
                <li><strong>Advantage+ Audience</strong> — Replaces manual interest and demographic targeting with AI-driven audience finding. You can provide audience suggestions as a starting signal, but Meta will expand beyond them when it identifies better-performing users. Manually restricting this expansion almost always reduces performance.</li>
                <li><strong>Advantage+ Creative</strong> — Applies automated enhancements to your creative: aspect ratio adjustments for different placements, brightness and contrast improvements, text variations, and music for Reels. Review what it applies to ensure brand consistency.</li>
                <li><strong>Advantage+ Placements</strong> — Distributes ads across all Meta placements — Feed, Stories, Reels, Messenger, Audience Network, and Threads — based on where conversions are found most efficiently. Always use Advantage+ Placements over manual placement selection; restricting placements typically raises your CPA without strategic justification.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Creative Diversity Feeds the Algorithm</div>
                <p>Meta Lattice ranks your ads by matching creative characteristics to users most likely to respond. The more distinct creative concepts you provide — different formats, hooks, angles, and messages — the more data the AI has to find high-value users across different segments. Five genuinely different creative approaches will outperform fifty slight variations of the same ad. Your job is creative production and quality; Meta's job is audience distribution.</p>
            </div>

            <h2>The Generative Ad Model: Where This Is Heading</h2>
            <p>Meta has signalled a direction toward a <strong>Generative Ad Model (GEM)</strong>, where the platform generates and assembles creative from your source assets — images, copy, product data — matched dynamically to individual users. Advertisers who build strong asset libraries and clean conversion data now are best positioned as this capability matures.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Stop optimising audiences. Start optimising creative. The winning Meta strategy in 2026 is: run Advantage+ campaigns with Advantage+ Audience and Advantage+ Placements, provide 8–12 genuinely different creative concepts per campaign, and use your CAPI conversion data to let the algorithm learn who converts. Review creative performance weekly and replace the bottom third with fresh angles — not variations of what already exists.</p>
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
            <p>LinkedIn is the only major ad platform where you can target users by verified professional identity — job title, seniority, company name, company size, and industry — and connect that targeting directly to revenue outcomes. For B2B marketers trying to reach buying committees and senior decision-makers, this precision is unmatched anywhere in digital advertising.</p>

            <h2>Campaign Manager: Updated Terminology</h2>
            <p>LinkedIn has updated Campaign Manager's structural terminology. What was formerly called <strong>Campaign Groups</strong> is now <strong>Campaigns</strong>; what was called <strong>Campaigns</strong> is now <strong>Ad Sets</strong>. This aligns LinkedIn's hierarchy more closely with other platforms. If you are working from older tutorials or guides, be aware of this naming change — the functionality is unchanged, but the labels in the UI now differ.</p>
            <p>Campaign Manager offers objectives across the funnel: Brand Awareness, Website Visits, Engagement, Video Views, Lead Generation, and Website Conversions. For most B2B performance campaigns, <strong>Lead Generation</strong> (using Lead Gen Forms) and <strong>Website Conversions</strong> deliver the strongest ROI.</p>

            <h2>B2B Targeting: LinkedIn's Core Differentiator</h2>
            <ul>
                <li><strong>Job title</strong> — Reach specific roles (e.g., "Head of Procurement," "VP of Engineering")</li>
                <li><strong>Seniority</strong> — Filter by level: Entry, Senior, Manager, Director, VP, C-Suite — essential for separating decision-makers from influencers</li>
                <li><strong>Company name</strong> — Target employees at specific accounts, ideal for account-based marketing (ABM)</li>
                <li><strong>Company size</strong> — Filter by employee count to target SME, mid-market, or enterprise organisations separately</li>
                <li><strong>Industry</strong> — Reach professionals in specific sectors</li>
                <li><strong>Skills and groups</strong> — Target members with specific listed skills or group memberships, useful for reaching practitioners in technical fields</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Revenue Attribution, Not Just Leads</div>
                <p>LinkedIn now offers native CRM integration in Campaign Manager, enabling pipeline and revenue attribution directly within the platform — not just lead volume. The <strong>Revenue Attribution Report</strong> uses <strong>Company Attribution</strong> to connect your campaigns to company-level pipeline and closed revenue. This is a significant capability shift: rather than reporting on cost-per-lead, you can demonstrate which campaigns influenced accounts that converted into customers.</p>
            </div>

            <h2>Ad Formats Worth Knowing in 2026</h2>
            <ul>
                <li><strong>Sponsored Content</strong> — Native ads in the LinkedIn feed: single image, video, carousel, and document formats</li>
                <li><strong>Thought Leader Ads</strong> — Boost organic posts from executives or employees as paid ads, retaining the authentic voice and social proof of an organic post. Particularly effective for authority-building in B2B, where buyers research the people behind a product, not just the product itself.</li>
                <li><strong>BrandLink</strong> — A new in-stream video ad format that runs before publisher and creator content on LinkedIn. Effective for brand awareness campaigns targeting specific professional audiences.</li>
                <li><strong>Lead Gen Forms</strong> — Pre-filled forms submitted without leaving LinkedIn, using the user's profile data. Conversion rates are typically 2–5x higher than equivalent external landing pages due to reduced friction.</li>
                <li><strong>Message Ads (InMail)</strong> — Direct messages to users' LinkedIn inboxes. Best used sparingly with highly targeted audiences and a specific, valuable offer.</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Evaluate LinkedIn on cost-per-qualified-lead and pipeline influenced, not cost-per-click. LinkedIn CPCs (£5–15+) look expensive compared to other platforms, but the audience quality — verified decision-makers in specific roles at specific companies — changes the economics entirely. A £12 click from a CFO at a target account is a different asset from a £0.50 click from an unqualified visitor.</p>
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
            <h2>TikTok's Advertising Model</h2>
            <p>TikTok surfaces content — organic and paid — based on engagement signals from each viewer's behaviour, not primarily on demographic targeting. This makes <strong>creative quality the primary driver of performance</strong>: an authentic, entertaining ad shown to a broad audience will consistently outperform a polished corporate ad shown to a precisely targeted one. Following the resolution of TikTok's US structural situation in January 2026, the platform is operating as a stable advertising channel and is a legitimate long-term component of any social media mix targeting under-40 demographics.</p>

            <h2>Smart+: TikTok's Unified AI Campaign Type</h2>
            <p><strong>Smart+</strong> is TikTok's unified AI-driven campaign type, replacing the original Smart Performance Campaign. Unlike an all-or-nothing automation toggle, Smart+ offers <strong>module-level control</strong> — you can independently set each of the following to automatic or manual: targeting, creative, bidding, and placements. This makes Smart+ more flexible than its predecessor: you can automate creative selection while retaining manual control over targeting, or run fully automated for maximum reach efficiency. For most accounts, Smart+ with automated targeting and creative delivers the best results once you have sufficient conversion data.</p>

            <h2>Ad Formats</h2>
            <ul>
                <li><strong>In-Feed Ads</strong> — Full-screen vertical videos appearing in the For You feed. The primary performance format for direct response.</li>
                <li><strong>Spark Ads</strong> — Boost existing organic TikTok posts (yours or a creator's) as paid ads. Spark Ads retain all organic engagement (likes, comments, shares, saves), feel completely native, and consistently outperform standard video uploads. This is best practice for TikTok advertising, not an optional upgrade.</li>
                <li><strong>TopView</strong> — Premium placement: the first full-screen ad seen when a user opens TikTok. High cost but maximum impact for brand awareness at scale.</li>
                <li><strong>Search Hubs</strong> — Ads appearing within TikTok's growing search experience, reaching users at a moment of active intent. Worth testing for discovery-stage campaigns.</li>
                <li><strong>TopReach</strong> — A placement format designed for maximum unique reach in awareness campaigns, useful for broad-market launches.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: UGC and Creator-Led Content Wins</div>
                <p>TikTok's own guidance — "Don't make ads. Make TikToks." — reflects a measurable reality. UGC-style, creator-led content consistently outperforms polished branded production on the platform. Authenticity and a native feel are the primary performance drivers, not production quality. Work with creators who already have a natural voice on TikTok rather than briefing them to deliver a scripted brand message.</p>
            </div>

            <h2>Creative Best Practices</h2>
            <ul>
                <li><strong>Hook in the first second</strong> — TikTok users scroll fast. Open with movement, a surprising statement, or an immediate visual payoff.</li>
                <li><strong>Shoot vertically (9:16)</strong> — Always full-screen vertical. Any other aspect ratio looks out of place and signals "ad" immediately.</li>
                <li><strong>Use trending sounds and formats</strong> — Browse the TikTok Creative Center for trending audio and high-performing ad patterns in your category.</li>
                <li><strong>Feature real people</strong> — Faces, genuine reactions, and real environments outperform brand graphics and studio production every time.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake: Letting Creative Fatigue Build</div>
                <p>Creative fatigue on TikTok arrives faster than on any other platform. The same ad seen repeatedly by the same user does not just decline in performance — it actively damages brand perception. Rotate creative every 2–4 weeks and maintain a library of distinct asset angles (not just variations of a single concept). If you cannot produce fresh content at that cadence, reduce your frequency targets rather than letting fatigued creative run.</p>
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
            <h2>Snapchat's Advertising Platform</h2>
            <p>Snapchat reaches a young, highly engaged audience — primarily 13–34 year olds — who spend 30+ minutes daily on the platform. While its total reach is smaller than Meta or TikTok, Snapchat offers advertising formats that no other platform matches for interactive, immersive experiences. For brands targeting younger demographics with products that benefit from visual or experiential presentation, Snapchat belongs in the media plan.</p>

            <h2>Ad Formats</h2>
            <ul>
                <li><strong>Snap Ads</strong> — Full-screen vertical video or image ads appearing between Stories or in the Discover feed. The core format. Users can swipe up to visit a website, download an app, or watch long-form video.</li>
                <li><strong>Story Ads</strong> — Branded tiles in the Discover section that open into a collection of 3–20 Snaps. Effective for sequential storytelling and product education.</li>
                <li><strong>Collection Ads</strong> — A main image or video with tappable product tiles below. The standard Snapchat format for e-commerce, enabling direct product discovery without leaving the app.</li>
                <li><strong>Commercials</strong> — Non-skippable 6-second ads within premium Snapchat content. Guaranteed viewership for brand awareness, but priced accordingly.</li>
            </ul>

            <h2>AR Lenses: Snapchat's Unique Differentiator</h2>
            <p>Snapchat pioneered augmented reality advertising through <strong>sponsored Lenses</strong>, and it remains the most advanced AR advertising platform available. Lenses let users interact with branded AR effects using their camera — trying on products virtually, playing branded games, or using themed face filters.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>AR Lenses generate an average of 15–20 seconds of active engagement per user — far longer than any passive ad format. Users also share Lenses with friends organically, extending your paid reach without additional cost. For product categories where virtual try-on is relevant (cosmetics, eyewear, fashion, footwear), AR Lenses can directly influence purchase decisions.</p>
            </div>

            <h2>Best Use Cases for Snapchat Advertising</h2>
            <ul>
                <li>Reaching 13–24 year olds who are increasingly absent from Facebook</li>
                <li>App install campaigns — Snapchat's mobile-native audience and swipe-up mechanic makes it one of the stronger channels for app acquisition</li>
                <li>Local business promotion using geofilters and proximity-based targeting</li>
                <li>Product try-on and virtual experience campaigns for visually driven consumer categories</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Snapchat CPMs are typically 40–60% lower than Meta for the same under-30 audience. If your core market is Gen Z or younger Millennials, test Snapchat alongside TikTok and Instagram Reels as part of a young-audience-first strategy — the efficiency gains on Snapchat can fund creative experimentation elsewhere. Always produce content in full-screen vertical format with the same authenticity-first approach that works on TikTok.</p>
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
            <p>Pinterest is not a social network in the conventional sense — it is a <strong>visual discovery and planning platform</strong>. Users arrive with commercial intent: they are actively searching for ideas, products, and inspiration with a view to doing or buying something. This is what makes Pinterest structurally different from other social platforms, where users are primarily socialising or being entertained. On Pinterest, the user is already in planning mode when they encounter your ad.</p>

            <h2>Ad Formats</h2>
            <ul>
                <li><strong>Standard Pins</strong> — Promoted static images appearing in search results and home feeds. The core performance format. Images should be tall (2:3 ratio), visually striking, and directly relevant to how users search on Pinterest.</li>
                <li><strong>Video Pins</strong> — Autoplay video. Works well for tutorials, demos, step-by-step processes, and lifestyle content that shows a product in context.</li>
                <li><strong>Shopping Pins</strong> — Product Pins with real-time pricing and availability from your product catalogue. Support direct purchase and are the primary format for e-commerce on Pinterest.</li>
                <li><strong>Idea Pins</strong> — Multi-page, story-like content for inspiration and how-to content. Strong for top-of-funnel brand awareness and content that earns saves.</li>
                <li><strong>Carousel Pins</strong> — Multiple swipeable images. Effective for showcasing product collections or sequential storytelling.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Content Longevity</div>
                <p>Pinterest content has a lifespan measured in months and years, not hours. A Facebook post is effectively dead within a day; a well-optimised Pin can continue appearing in search results and feeds long after your campaign ends. This compounding characteristic means your investment in Pinterest creative has a longer return window than on any other social platform. It also means optimising your Pin titles and descriptions for search matters — Pinterest's algorithm treats keyword relevance seriously.</p>
            </div>

            <h2>Targeting on Pinterest</h2>
            <ul>
                <li><strong>Keyword targeting</strong> — Reach users searching for specific terms, similar in intent to search advertising. This is Pinterest's most valuable targeting layer for conversion campaigns.</li>
                <li><strong>Interest targeting</strong> — Reach users based on their pinning behaviour and the content categories they engage with</li>
                <li><strong>Actalike audiences</strong> — Pinterest's equivalent of lookalike audiences, finding new users similar to your existing converters</li>
                <li><strong>Shopping retargeting</strong> — Retarget users who viewed specific products in your catalogue</li>
            </ul>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Launch Pinterest campaigns 2–3 months before seasonal peaks. Pinterest users plan significantly further ahead than on any other platform — searches for Christmas gift ideas peak in October, and summer travel inspiration begins in late winter. Being present early is a competitive advantage: the users who save your content in September will return to act on it in November.</p>
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
            <p>In a landscape where creative quality is the primary targeting signal on Meta and the primary performance driver on TikTok, systematic creative testing is no longer optional — it is the core of campaign management. Random creative changes produce unpredictable results and no reusable learning. A structured testing framework ensures that every test either confirms a winning pattern or rules out a hypothesis, building a body of knowledge you can apply across campaigns.</p>

            <h2>What to Test (In Priority Order)</h2>
            <ol>
                <li><strong>Concept and angle</strong> — The fundamental creative idea: testimonial, product demo, problem/solution, lifestyle, UGC-style, creator-led. This has the biggest impact on performance and should be the first variable you explore across genuinely distinct concepts.</li>
                <li><strong>Hook/opening</strong> — The first 1–3 seconds of video or the dominant visual element. Once you have a winning concept, testing hooks is the fastest way to improve it further.</li>
                <li><strong>Format</strong> — Video vs image vs carousel vs Spark Ad (TikTok). Different formats reach users in different modes of attention.</li>
                <li><strong>Copy and CTA</strong> — Headlines, body text, and call-to-action phrasing. Test these after concept and hook.</li>
                <li><strong>Visual elements</strong> — Colours, layouts, product shots versus lifestyle imagery. Fine-tuning once you have a winning creative direction.</li>
            </ol>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>Test one variable at a time for reliable learnings. Changing both the hook and the CTA simultaneously means you cannot attribute the performance difference to either change. In Meta's Advantage+ environment, the algorithm is simultaneously testing creative combinations — so your testing framework should focus on concept-level differences, not minor executional variants that the AI will optimise between anyway.</p>
            </div>

            <h2>The Testing Process</h2>
            <ol>
                <li><strong>Hypothesis</strong> — "Creator-led UGC hooks will outperform product-first hooks because authenticity drives trust with our audience"</li>
                <li><strong>Create variations</strong> — Keep all other elements identical except the variable being tested</li>
                <li><strong>Run with equal budget</strong> — Each variation needs equivalent spend for a fair comparison</li>
                <li><strong>Wait for significance</strong> — Do not call a winner prematurely. You need enough conversion data, not just impressions.</li>
                <li><strong>Document and iterate</strong> — Record the learning explicitly, then build the next test on top of the winner</li>
            </ol>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake: Ignoring Creative Fatigue</div>
                <p>Even the strongest creative fatigues — and on TikTok, this can happen within days. On Meta, watch for declining CTR, rising frequency (same users seeing the same ad too often), and increasing CPA. On TikTok, rotate creative every 2–4 weeks regardless of performance signals. The goal is to stay ahead of fatigue rather than react to it after performance has already dropped. Maintain a pipeline of new creative concepts that produces faster than existing ads tire.</p>
            </div>
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
            <p>When a prospect sees your ad on Instagram, watches a TikTok creator mention your product three days later, clicks a Google search ad the following week, and then converts through an email link — how do you measure the contribution of each channel? <strong>Attribution</strong> is the process of assigning credit for conversions to the touchpoints that influenced them. It remains one of the most difficult problems in digital marketing, and the measurement landscape has become more complex as browser-based tracking has degraded.</p>

            <h2>Platform Attribution Windows</h2>
            <p>Each platform uses its own attribution window — the period after an ad interaction during which it claims credit for a conversion:</p>
            <ul>
                <li><strong>Meta</strong> — Default: 7-day click, 1-day view</li>
                <li><strong>Google Ads</strong> — Default: 30-day click</li>
                <li><strong>TikTok</strong> — Default: 7-day click, 1-day view</li>
                <li><strong>LinkedIn</strong> — Default: 30-day click, 7-day view</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Adding up each platform's reported conversions will always exceed your actual total. Every platform independently claims the same conversion when a user interacted with multiple channels before purchasing — this is called <strong>double counting</strong> and is inherent to platform-reported attribution. Treat platform numbers as internal optimisation signals, not as the source of truth for cross-channel business decisions.</p>
            </div>

            <h2>The Role of CAPI in Measurement</h2>
            <p>As browser-side tracking has become less reliable — due to cookie restrictions, iOS privacy changes, and ad blockers — server-side event tracking via the <strong>Conversions API (CAPI)</strong> has become essential for accurate measurement on Meta. CAPI closes the gap between what the platform's ad system delivered and what your Pixel reported, giving you a more complete view of which campaigns are genuinely driving conversions and which audiences to retarget.</p>

            <h2>LinkedIn's Revenue Attribution Report</h2>
            <p>LinkedIn now offers a <strong>Revenue Attribution Report</strong> with <strong>Company Attribution</strong>, connecting campaign exposure at the company level to pipeline and revenue outcomes in your CRM. Rather than reporting only on leads, this lets you ask: did the companies we reached with LinkedIn ads convert at a higher rate into pipeline and closed revenue? For B2B advertisers, this is a meaningful step toward demonstrating channel impact at a business level, not just a marketing metrics level.</p>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Triangulate, Don't Pick One Model</div>
                <p>No attribution model is perfect. Use platform-reported data for optimising within each platform, UTM-tracked GA4 data for consistent cross-platform comparison, and incrementality testing (hold-out groups, geo-lift studies) for the most accurate read on true incremental impact. Meta is moving toward a Generative Ad Model (GEM) where measurement will increasingly require first-party data integration — CAPI and clean customer data are the foundation of measurement in this direction.</p>
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
            <p><strong>Retargeting</strong> reaches people who have already interacted with your brand — visited your website, engaged with your content, started but not completed a purchase. These users already have brand familiarity, which makes them far more likely to convert than cold prospects. Retargeting typically delivers the highest ROAS of any campaign type, which is why maintaining complete, accurate Custom Audiences through CAPI is so important — every missed event is a potential retargeting impression lost.</p>

            <h2>Types of Retargeting</h2>
            <ul>
                <li><strong>Website retargeting</strong> — Reach users who visited specific pages. Build segments by depth of intent: all visitors, product page viewers, add-to-cart without purchase, checkout initiated without completing. Each segment deserves its own creative and message.</li>
                <li><strong>Engagement retargeting</strong> — Target users who engaged with your organic or paid social content: video viewers (50%, 75%, 95% watch time), profile visitors, post engagers. These users have shown interest without yet visiting your site.</li>
                <li><strong>Customer list retargeting</strong> — Upload your CRM email list to reach existing customers with upsell, cross-sell, or win-back campaigns. This first-party data is increasingly valuable as cookie-based website retargeting becomes less complete.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Match the Message to the Funnel Stage</div>
                <p>Funnel-based retargeting outperforms blanket retargeting because the message is relevant to where the user is in their decision process. A product page viewer needs education. A cart abandoner needs urgency and potentially an incentive. A past buyer needs an upsell or complementary product recommendation. Showing the same ad to all three is a waste of the targeting precision you have earned through their behaviour.</p>
            </div>

            <h2>Sequential Messaging</h2>
            <p>Rather than repeating the same ad, use <strong>sequential messaging</strong> — a planned series that advances the relationship over time:</p>
            <ol>
                <li>Days 1–3: Reminder of the product they showed interest in</li>
                <li>Days 4–7: Social proof — reviews, testimonials, or creator endorsements</li>
                <li>Days 8–14: An incentive — limited-time offer, free delivery, or a bundle</li>
                <li>Day 15+: Final urgency message, or pivot to alternative product suggestions if the original remains unconverted</li>
            </ol>

            <h2>Frequency Capping and Exclusions</h2>
            <p>High frequency in retargeting campaigns damages brand perception as much as it inflates your CPA. Set frequency caps (no more than 3 impressions per user per day in most cases) and maintain audience exclusions religiously.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Failing to exclude recent purchasers from retargeting. Seeing an ad for a product you bought yesterday is a poor brand experience. Always maintain a real-time purchaser exclusion audience and apply it to every retargeting ad set. In Meta's Advantage+ environment, ensure these exclusions are set at the campaign level so they apply across all ad sets automatically.</p>
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
            <p>Scaling social advertising spend means growing volume without proportionally degrading ROAS or CPA. Two complementary approaches:</p>
            <ul>
                <li><strong>Vertical scaling</strong> — Increasing budget on existing winning campaigns. Fast to execute but hits diminishing returns as the algorithm works through the most efficient audience opportunities within your current setup.</li>
                <li><strong>Horizontal scaling</strong> — Launching new creative concepts, expanding to new platforms, or testing new audience configurations. More work upfront but opens genuinely new inventory rather than just buying more of the same.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>The primary limiter of social ad scaling is not budget or audience size — it is creative. As frequency rises with increased spend, the same creative reaches the same users more often, and performance degrades. The advertisers who scale most effectively are those with a creative production system that generates new concepts faster than existing ads fatigue. Budget without fresh creative hits a ceiling quickly.</p>
            </div>

            <h2>Budget Increase Pacing</h2>
            <p>On Meta, increase budgets by no more than <strong>20% every 3–4 days</strong>. Larger jumps push campaigns back into a learning phase, causing temporary performance instability while the algorithm recalibrates. In Advantage+ campaigns, budget increases are generally better tolerated than in manually structured campaigns — but the 20% guideline remains a sensible default.</p>

            <h2>Creative Refresh Cadence</h2>
            <p>Creative fatigue is the primary ceiling on scaling. Plan for it systematically rather than reactively:</p>
            <ul>
                <li>New creative concepts (not just variations) every 2–4 weeks on Meta; more frequently on TikTok, where fatigue arrives faster</li>
                <li>Maintain 5–10 active creative concepts per Advantage+ campaign at all times, giving the algorithm meaningful diversity to distribute</li>
                <li>Track frequency as your leading indicator — when frequency exceeds 3–4 in a 7-day window for retargeting, or the creative has been running 3+ weeks for prospecting, act before performance drops rather than after</li>
            </ul>

            <h2>Audience Expansion</h2>
            <p>When core audiences are saturated, Advantage+ Audience already handles expansion automatically — it will reach beyond your stated audience signals when it identifies better-performing users. For manual campaigns, test broader Lookalike percentages (from 1% to 3–5%) and new geographic markets. On TikTok, Smart+ with fully automated targeting is the equivalent lever.</p>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake</div>
                <p>Expecting the same CPA at 5x the spend. Scaling inherently involves reaching progressively less optimal users at progressively higher costs. Plan for a 20–30% CPA increase as you scale, and define in advance the maximum CPA you can accept while remaining profitable. If total volume and profit grow even with a higher CPA, scaling is working — the goal is not to preserve the CPA of your most efficient starting point.</p>
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
            <p><strong>User-generated content (UGC)</strong> in the advertising context means creative that looks and feels as if it was made by a real person — a customer, a creator, or a product user — rather than a brand. This covers genuine customer testimonials filmed on phones, unboxing videos, honest product reviews, and content produced by commissioned UGC creators who deliver authentic-style content to a brand brief. Across Meta, TikTok, and increasingly LinkedIn, UGC-style and creator-led content consistently outperforms polished branded production.</p>

            <h2>Why UGC Outperforms Polished Creative</h2>
            <ul>
                <li><strong>Trust</strong> — People trust other people more than they trust brands. A genuine recommendation from a real person carries social proof that no amount of production budget can replicate.</li>
                <li><strong>Native feel</strong> — UGC looks like organic content in the feed. Users do not immediately pattern-match it as advertising and are less likely to scroll past before the message registers.</li>
                <li><strong>Relatability</strong> — Seeing someone who resembles your target customer using and endorsing a product is more persuasive than a brand spokesman or studio model.</li>
                <li><strong>Platform fit</strong> — On TikTok especially, creator-led content is the platform's native language. Polished ads read as foreign objects in the For You feed; UGC reads as content.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept: Spark Ads and Thought Leader Ads</div>
                <p>Two platform-native formats make UGC and creator content directly operable as ads. <strong>Spark Ads</strong> (TikTok) boost existing organic TikTok posts — yours or a creator's — as paid ads, retaining all likes, comments, and shares. They feel completely native and consistently outperform standard video uploads. <strong>Thought Leader Ads</strong> (LinkedIn) do the same for executive or employee organic posts, allowing you to amplify an individual's authentic voice to a targeted professional audience — far more credible than a brand-published equivalent.</p>
            </div>

            <h2>Sourcing UGC</h2>
            <ul>
                <li><strong>Customer content</strong> — Ask satisfied customers if you can use their reviews, testimonials, or photos in paid ads. Incentivise with discounts or early access.</li>
                <li><strong>Commissioned UGC creators</strong> — Hire creators from platforms such as Billo or dedicated UGC marketplaces to produce content to your brief. This gives you creative control and a consistent production pipeline.</li>
                <li><strong>Influencer whitelisting</strong> — Run ads through an influencer's account with their permission, combining their audience credibility with your targeting precision and media budget.</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Common Mistake: Missing AI Content Disclosure</div>
                <p>If UGC-style creative is generated or substantially altered using AI — AI-generated faces, AI-synthesised voiceover, AI-edited footage presented as authentic customer content — mandatory disclosure is now required globally. This applies on Meta, TikTok, and LinkedIn. Beyond the platform compliance requirement, undisclosed AI-generated "customer" content that is later identified as synthetic can cause serious reputational damage. Always get explicit written permission before using any real customer's likeness or testimonial in paid advertising — and disclose AI involvement where it applies.</p>
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
            <p>Concentrating all social advertising spend on a single platform creates structural risk — algorithm changes, policy updates, ad account restrictions, or shifts in user behaviour on one platform can all have immediate business impact. A multi-platform strategy distributes that risk and reaches audiences across the different contexts in which they exist throughout their day: professionally on LinkedIn, entertained on TikTok, socialising on Instagram, planning on Pinterest.</p>

            <h2>Channel Mix Planning</h2>
            <p>Allocate budget based on genuine strategic rationale, not channel familiarity:</p>
            <ul>
                <li><strong>Audience presence</strong> — Which platforms does your target buyer actually use? Start there, not with what is trending.</li>
                <li><strong>Platform capability match</strong> — Meta's Advantage+ for broad B2C reach and retargeting; LinkedIn for B2B targeting with CRM-connected revenue measurement; TikTok's Smart+ for creator-led, younger-audience campaigns; Pinterest for high-intent discovery in visual categories; Microsoft Advertising's Copilot placements for professional audiences in search contexts.</li>
                <li><strong>Performance data</strong> — Shift budget incrementally toward platforms delivering the best cost-per-acquisition as evidence accumulates. Do not hold budget allocation static across platforms.</li>
                <li><strong>Funnel role</strong> — Assign platforms to funnel stages where they are strongest: TikTok and Meta for upper-funnel demand generation, LinkedIn for mid-funnel B2B consideration, retargeting on all platforms for conversion.</li>
            </ul>

            <div class="callout callout-info">
                <div class="callout-title">Key Concept</div>
                <p>A practical starting split: 60% of budget on your primary platform (where you have the most conversion data and strongest results), 25% on your secondary platform, 15% for testing. The important principle is that allocation should follow performance evidence, not assumptions. Review and adjust at least monthly based on cost-per-acquisition by platform, not just by cost-per-click.</p>
            </div>

            <h2>Consistent Messaging, Platform-Native Creative</h2>
            <p>Your core value proposition and offer must be consistent across platforms — but the creative execution must be native to each environment. A polished Instagram carousel repurposed as a TikTok video will underperform significantly against creator-led content built for TikTok's native feel. A LinkedIn Thought Leader Ad needs a different voice than a Meta video ad. Adapt the format, tone, and style to the platform while keeping the underlying message aligned.</p>

            <h2>Cross-Platform Reporting</h2>
            <p>Build a unified reporting view across all platforms. Use consistent UTM conventions on all ad URLs so GA4 provides a comparable baseline across channels. Combine platform-reported metrics (for within-platform optimisation) with GA4 data (for cross-channel comparison) and, where budget allows, incrementality testing (for true impact measurement). LinkedIn's Revenue Attribution Report adds pipeline and revenue data for B2B advertisers, providing a dimension that other platforms currently cannot match.</p>

            <div class="callout callout-tip">
                <div class="callout-title">Pro Tip</div>
                <p>Use cross-platform sequencing to guide prospects through the funnel: TikTok Spark Ads for top-of-funnel awareness with younger audiences; Meta Advantage+ for retargeting those who engaged; LinkedIn for B2B mid-funnel consideration; Google Search to capture the intent that social advertising has built. Each platform handles the moment it is strongest at, and the sequence uses them all in combination rather than in competition.</p>
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

// ==================== SEO INTERACTIVE CONTENT ====================
// Setup guides, tasks, and reflections for all SEO lessons (modules 2–5)

Object.assign(lessonContent['seo-2-1'], {
    setupGuide: [
        { step: 1, title: 'Use Google Autocomplete to find keyword ideas', description: 'Open Google in an incognito window and start typing your core topic. Note every suggestion that appears. Try different variations — with a question word, with a location, with a modifier like "best" or "how to". Each suggestion is a real search people make.' },
        { step: 2, title: 'Expand People Also Ask for sub-intent keywords', description: 'Search your core topic and click on each People Also Ask question to expand it. Each expansion triggers more questions. Spend 10 minutes expanding these — you will find dozens of specific keyword ideas you would never have thought to target.' },
        { step: 3, title: 'Check Related Searches at the bottom of results', description: 'Scroll to the bottom of the Google results page and note the eight Related Searches suggestions. These are variations and adjacent queries that reveal different angles and intents around your topic.' },
        { step: 4, title: 'Open Google Keyword Planner with your seed keywords', description: 'Go to ads.google.com, create a free account if needed, and open Keyword Planner under Tools. Click "Discover new keywords" and enter your 3-5 seed terms. Download the results to a spreadsheet — you now have estimated search volumes alongside hundreds of keyword ideas.' },
        { step: 5, title: 'Analyse a competitor domain with Ubersuggest', description: 'Go to app.neilpatel.com/en/ubersuggest (free tier available) and enter a direct competitor domain. Click "Top SEO Pages" to see which pages drive the most traffic and which keywords they rank for. Note any keywords with decent volume that you do not currently target.' },
    ],
    tasks: [
        'Use Google Autocomplete to generate at least 20 keyword ideas from 5 different seed terms',
        'Identify 5 keywords a direct competitor ranks for that you do not — use Ubersuggest or Semrush free tier',
        'Open Google Keyword Planner and export keyword ideas for your 3 core seed keywords',
        'Find 3 questions from People Also Ask in your niche that reveal informational intent you could target with content',
        'Build a raw keyword list of at least 30 terms across different intents and note what content type each one demands',
    ],
    reflection: 'Which keyword discovery method surfaced ideas you would never have found on your own — and which keywords surprised you most?',
});

Object.assign(lessonContent['seo-2-2'], {
    setupGuide: [
        { step: 1, title: 'Pull keyword metrics in Ahrefs or Semrush', description: 'Sign up for a free trial of Ahrefs or Semrush if you do not have access. Enter your top 10-15 keywords into the Keyword Explorer (Ahrefs) or Keyword Magic Tool (Semrush). For each keyword, note the monthly search volume, keyword difficulty score, and CPC as a proxy for commercial value.' },
        { step: 2, title: 'Filter for low-difficulty keyword opportunities', description: 'In Ahrefs, set the Keyword Difficulty filter to under 30. In Semrush, filter for KD% under 40. These are the keywords where you have the most realistic chance of ranking without a high domain authority. Look for keywords with at least 100-500 monthly searches in this range.' },
        { step: 3, title: 'Check your own domain authority as a benchmark', description: 'Go to ahrefs.com/website-authority-checker or moz.com/domain-analysis and enter your domain. Note your Domain Rating (Ahrefs) or Domain Authority (Moz). This score tells you roughly what keyword difficulty range is realistic for your site right now.' },
        { step: 4, title: 'Analyse the SERP for your priority keyword', description: 'In Ahrefs Keyword Explorer, click on your top priority keyword and scroll to the SERP overview. Look at the DR scores of the pages currently ranking in positions 1-10. If every result is DR 70+ and yours is DR 20, that keyword is currently out of reach without significant link building.' },
        { step: 5, title: 'Build a keyword scoring spreadsheet', description: 'Create a spreadsheet with columns: Keyword, Monthly Volume, Difficulty, Your DR, Opportunity Score (Volume divided by Difficulty), Intent, and Priority. Sort by Opportunity Score. The keywords at the top are your best starting points for content creation.' },
    ],
    tasks: [
        'Pull search volume and keyword difficulty scores for your 20 target keywords using any free or trial tool',
        'Identify your top 3 keywords that have reasonable volume (100+ monthly searches) and low-to-medium difficulty (under 40)',
        'Find 5 long-tail variations of your priority keywords that have lower difficulty scores than the head term',
        'Check the SERP for your top priority keyword — note the domain authority of the top 5 ranking pages',
        'Build a prioritised keyword list of your top 10 targets ranked by opportunity score (volume divided by difficulty)',
    ],
    reflection: 'After comparing keyword difficulty against your domain authority, which 3 keywords represent your most realistic ranking opportunities right now?',
});

Object.assign(lessonContent['seo-2-3'], {
    setupGuide: [
        { step: 1, title: 'Use Answer the Public to find long-tail question keywords', description: 'Go to answerthepublic.com and enter your core topic. The free tier gives you a limited number of daily searches. Download the results and review the question-based keywords (Who, What, When, Where, Why, How). These are high-intent long-tail opportunities with low competition.' },
        { step: 2, title: 'Find long-tail keywords in Search Console', description: 'Open Google Search Console > Performance > Search results. Click "Average position" to show position data. Filter the Queries tab to show queries in positions 8-20 — these are keywords you almost rank for. Targeting these with light on-page optimisation can move them to page one quickly.' },
        { step: 3, title: 'Group your keywords into topic clusters', description: 'Take your full keyword list and group related keywords together. Each group should have one "pillar" keyword (highest volume, broadest) and several "cluster" keywords (more specific, lower volume). A pillar page covers the broad topic; cluster pages cover specific subtopics and link back to the pillar.' },
        { step: 4, title: 'Map clusters to existing and planned pages', description: 'For each topic cluster, check whether you already have a page that covers the pillar topic. If yes, review whether it is comprehensive enough to rank. If no, add it to your content plan. Each cluster keyword should map to a specific page — never try to rank one page for two separate intents.' },
        { step: 5, title: 'Identify your highest-priority content gap', description: 'Look at your clusters and find the one where you have the most keywords but the weakest existing content. This is your biggest opportunity. A competitor likely ranks well here already — check their pillar page to understand the content depth and format you need to match or exceed.' },
    ],
    tasks: [
        'Use Answer the Public to generate at least 30 question-based keyword ideas from your core topic',
        'Group your full keyword list into at least 3 topic clusters, each with one pillar keyword and 5+ supporting keywords',
        'Identify which pages on your current site could serve as pillar pages for each cluster',
        'Find 5 keywords in Search Console (positions 8-20) that you could push to page one with light optimisation',
        'Sketch a topic cluster map for your most important cluster, showing the pillar page and at least 5 supporting content pieces',
    ],
    reflection: 'Looking at your topic clusters, which one represents the biggest content gap — where you have keywords but no strong pages to rank them?',
});

Object.assign(lessonContent['seo-3-1'], {
    setupGuide: [
        { step: 1, title: 'Crawl your site with Screaming Frog SEO Spider', description: 'Download Screaming Frog SEO Spider (free for up to 500 URLs at screamingfrog.co.uk). Enter your domain and run a crawl. When complete, go to the Page Titles tab to see all your title tags, their lengths, and any duplicates or missing tags.' },
        { step: 2, title: 'Export and audit your title tags', description: 'In Screaming Frog, filter the Page Titles report for "Too Long" (over 60 characters) and "Missing". Export these to a spreadsheet. Also look for any title tags that do not include the page\'s target keyword or that are duplicated across multiple pages.' },
        { step: 3, title: 'Check meta descriptions in bulk', description: 'In Screaming Frog, click the Meta Description tab. Filter for "Missing", "Too Long" (over 160 characters), and "Duplicate". Missing meta descriptions mean Google will auto-generate one — which is rarely as compelling as a well-written one.' },
        { step: 4, title: 'Audit H1 tags across key pages', description: 'In Screaming Frog, click the H1 tab. Filter for "Missing" and "Multiple". Every key page should have exactly one H1 that matches (or is close to) the title tag and contains the primary keyword. Pages with no H1 or multiple H1s are a quick win to fix.' },
        { step: 5, title: 'Find low-CTR pages in Search Console', description: 'Open Search Console > Performance > Search results. Click the "CTR" column to sort ascending. Pages with high impressions but low CTR (under 2%) are candidates for title tag and meta description rewrites. The keyword is already reaching people — the snippet just is not compelling enough to earn the click.' },
    ],
    tasks: [
        'Audit title tags for your 10 most important pages — note which ones include the target keyword and fall within 60 characters',
        'Rewrite 3 title tags to include the primary keyword naturally and add a clear value proposition or unique angle',
        'Check that every key page has a unique meta description under 160 characters that includes a call to action',
        'Audit H1 tags on your top 10 pages and flag any that are missing, duplicated, or do not match the page topic',
        'Identify your 3 highest-impression, lowest-CTR pages in Search Console and draft improved title tag versions',
    ],
    reflection: 'After auditing your title tags and meta descriptions, which single rewrite do you think would have the biggest impact on click-through rate — and why?',
});

Object.assign(lessonContent['seo-3-2'], {
    setupGuide: [
        { step: 1, title: 'Analyse the top 3 ranking pages for your target keyword', description: 'Search your target keyword in incognito mode. Open the top 3 results. For each page, note the word count, number of headings (H2/H3), topics covered, and any formats used (tables, lists, images, FAQs). This is the content benchmark you need to match or exceed.' },
        { step: 2, title: 'Run a content gap analysis', description: 'Read through the top-ranking competitor pages and list every H2 heading they include. Compare this to your existing page. Any heading topic your page is missing is a content gap. These gaps are often the primary reason you are not ranking — you are not covering the topic fully enough.' },
        { step: 3, title: 'Check keyword placement in your content', description: 'Open your target page and verify: does the primary keyword appear in the first 100 words? Is it in the H1? Does it appear in at least 2-3 H2 headings or naturally in the text? Use Ctrl+F to search for the keyword. It should appear naturally but not be stuffed.' },
        { step: 4, title: 'Check readability with a Flesch Reading Score tool', description: 'Copy a section of your content and paste it into a free readability tool such as readable.com or hemingwayapp.com. Aim for a Flesch Reading Ease score above 60 (plain English) for most marketing content. Dense, academic-style writing loses readers quickly.' },
        { step: 5, title: 'Find and add semantically related terms', description: 'Search your keyword in Google and scroll down to Related Searches. Also look at the bold phrases in competitor snippets. These related terms (LSI keywords) signal to Google that your content comprehensively covers the topic. Add them naturally where they fit.' },
    ],
    tasks: [
        'Run a content gap analysis by comparing your target page against the top 3 competitors — list every subtopic they cover that you do not',
        'Rewrite the opening 100 words of your target page to include the primary keyword in the first sentence',
        'Add at least 2 new H2 sections to your page covering subtopics the top competitors address',
        'Check your page word count against the average word count of the top 3 results — plan to match or exceed it',
        'Find 5 semantically related terms from Related Searches and add them naturally into your page content',
    ],
    reflection: 'What were the biggest content gaps between your page and the top-ranking results — and which gap do you think is most directly causing you to rank lower?',
});

Object.assign(lessonContent['seo-3-3'], {
    setupGuide: [
        { step: 1, title: 'Export all internal links with Screaming Frog', description: 'Crawl your site with Screaming Frog. Go to the Bulk Export menu > Response Codes > Internal > All. This gives you a complete list of every internal link on your site — from which page it originates and to which page it points. This is your raw audit data.' },
        { step: 2, title: 'Check internal link counts for your priority pages', description: 'In Screaming Frog, click the Inlinks tab (select a URL first) or use the Bulk Export > All Inlinks report. For each of your most important pages, count how many internal links point to it. Your most important pages should have the most internal links.' },
        { step: 3, title: 'Check Search Console for internal link counts', description: 'Open Google Search Console > Links > Internal links. This shows which pages have the most internal links according to Google. Compare this to your actual most important pages — if your priority pages are not near the top, you need to add more internal links pointing to them.' },
        { step: 4, title: 'Find orphan pages with no internal links', description: 'In Screaming Frog, use the Inlinks column to filter for pages with 0 inlinks. These are orphan pages — Google can only find them through your sitemap, not by following links. Any page you want indexed should have at least one internal link pointing to it from a relevant page.' },
        { step: 5, title: 'Audit anchor text for keyword relevance', description: 'In the Screaming Frog Inlinks report, review the anchor text column for links pointing to your priority pages. Anchor text should be descriptive and include relevant keywords rather than generic phrases like "click here" or "read more". Varied but relevant anchor text sends strong topical signals.' },
    ],
    tasks: [
        'List your 5 most important pages and count how many internal links each one currently receives',
        'Find 3 existing pages on your site that are topically related to your top priority page but do not currently link to it — add those links',
        'Check your main navigation — does it link directly to your most important pages?',
        'Identify any orphan pages (pages with zero internal links) and plan which pages would be the most natural place to add a link',
        'Review the anchor text of 10 internal links — flag any that use generic text and rewrite them with descriptive, keyword-relevant phrases',
    ],
    reflection: 'Which of your most important pages had the fewest internal links pointing to it — and where on your site are the most natural places to add links pointing there?',
});

Object.assign(lessonContent['seo-3-4'], {
    setupGuide: [
        { step: 1, title: 'Export the missing alt text report from Screaming Frog', description: 'Crawl your site with Screaming Frog and click the Images tab. Filter for "Missing Alt Text". Export the report to see every image on your site without an alt attribute. This list is your immediate action list — every image here is both an SEO and accessibility issue.' },
        { step: 2, title: 'Check image file sizes with browser DevTools', description: 'Open your most important page in Chrome, press F12 to open DevTools, go to the Network tab, and reload the page. Filter by "Img". You can now see the file size of every image that loads. Any image over 200KB on a standard content page is worth compressing.' },
        { step: 3, title: 'Run PageSpeed Insights and review image recommendations', description: 'Go to pagespeed.web.dev and enter your homepage URL. In the Opportunities section, look for "Properly size images", "Serve images in next-gen formats (WebP)", and "Defer offscreen images". These three recommendations together typically save the most bytes.' },
        { step: 4, title: 'Compress and convert images with Squoosh', description: 'Go to squoosh.app in your browser. Drag and drop one of your largest images. In the right-hand panel, select WebP as the output format and adjust the quality slider to find the right balance between quality and file size. Compare the before and after file sizes at the bottom.' },
        { step: 5, title: 'Check image filenames for SEO value', description: 'Browse your site images via Screaming Frog Images tab or just inspect image source URLs. Look for any images with auto-generated filenames like IMG_001.jpg, DSC_0047.jpg, or screenshot-2024.png. Descriptive filenames like seo-keyword-research-spreadsheet.webp give Google an additional relevance signal.' },
    ],
    tasks: [
        'Audit alt text for images on your 5 most important pages — flag any images with missing or generic alt text like "image1"',
        'Rewrite the alt text for at least 10 images using descriptive, keyword-relevant descriptions that explain what the image shows',
        'Identify your 5 largest images using PageSpeed Insights or DevTools and compress them with Squoosh',
        'Convert at least 3 images to WebP format and note the percentage file size saving',
        'Review image filenames on your homepage and rename any auto-generated filenames to descriptive, keyword-relevant ones',
    ],
    reflection: 'How much total file size were you able to save by compressing and converting your images — and what did that do to your PageSpeed performance score?',
});

Object.assign(lessonContent['seo-4-1'], {
    setupGuide: [
        { step: 1, title: 'Run your site through PageSpeed Insights', description: 'Go to pagespeed.web.dev and enter your homepage URL. Run the test for both Mobile and Desktop. Record your performance score for each — this is your baseline. Scores below 50 on mobile are common and represent significant ranking and user experience issues.' },
        { step: 2, title: 'Check Core Web Vitals in Search Console', description: 'Open Google Search Console > Experience > Core Web Vitals. This report shows your real-world CWV scores based on actual user data collected by Chrome. Look for pages classified as "Poor" (red) — these are pages where Google has already measured a bad user experience.' },
        { step: 3, title: 'Run a WebPageTest for detailed performance data', description: 'Go to webpagetest.org and run a test from a London server using a Chrome browser. Look at the filmstrip view to see exactly when your page starts rendering. Note your Time to First Byte (TTFB), Largest Contentful Paint (LCP), and Total Blocking Time (TBT).' },
        { step: 4, title: 'Check your Largest Contentful Paint element', description: 'In PageSpeed Insights, click "Show more" under LCP. This tells you exactly which element on the page is your LCP — often a hero image or a large heading. If your LCP is an image, preloading it or switching to a faster image format will directly improve your score.' },
        { step: 5, title: 'Run a Lighthouse audit in Chrome DevTools', description: 'Open Chrome, press F12, click the "Lighthouse" tab, select Performance, and click Analyse page load. The report gives you a detailed breakdown of every performance issue, diagnostics, and passed audits. Focus on the Opportunities section — these are the highest-impact improvements.' },
    ],
    tasks: [
        'Record your current PageSpeed scores for both mobile and desktop — this is your starting baseline',
        'Identify and write down your top 3 performance issues from the PageSpeed Insights Opportunities section',
        'Check whether your key images are lazy-loaded — view page source and search for loading="lazy" on img tags',
        'Test your hosting response time (TTFB) — a score over 600ms indicates a slow server that may need upgrading or a CDN',
        'Check whether your site uses a CDN — if not, investigate whether your hosting provider offers one and what the estimated speed improvement would be',
    ],
    reflection: 'After running PageSpeed Insights, what was your mobile performance score — and which single recommendation would have the biggest impact if you fixed it today?',
});

Object.assign(lessonContent['seo-4-2'], {
    setupGuide: [
        { step: 1, title: 'Check Mobile Usability in Search Console', description: 'Open Google Search Console > Experience > Mobile Usability. The report lists any pages with mobile usability errors, such as touch elements too close together, content wider than screen, or text too small to read. Click through to see which pages are affected.' },
        { step: 2, title: 'Run the Google Mobile-Friendly Test', description: 'Go to search.google.com/test/mobile-friendly and enter the URL of each of your 5 most important pages. The test shows you a screenshot of how Googlebot renders the page on mobile and flags any issues it detects. A page that fails this test is at a serious ranking disadvantage.' },
        { step: 3, title: 'Use Chrome DevTools to test multiple screen sizes', description: 'Open Chrome DevTools (F12) and click the device toolbar icon (or press Ctrl+Shift+M). Test your site at the iPhone SE (375px), iPhone 14 Pro (393px), and Samsung Galaxy S20 (360px) presets. Look for any layout breaks, overlapping text, or horizontal scrolling.' },
        { step: 4, title: 'Test on a real mobile device', description: 'Open your site on your own smartphone or ask someone with a different device to test it. Attempt to complete your main user journey — find a product, read a blog post, fill in a contact form. Note any friction points that you cannot spot in DevTools emulation.' },
        { step: 5, title: 'Check tap target sizes', description: 'In Chrome DevTools, right-click any button or link and select Inspect. In the Styles panel, check the rendered width and height. All interactive elements should be at least 48x48 pixels on mobile. The Lighthouse audit (under DevTools > Lighthouse) will automatically flag tap targets that are too small.' },
    ],
    tasks: [
        'Run the Google Mobile-Friendly Test on your 5 most important pages and note any failures or warnings',
        'Check Search Console Mobile Usability report for current errors and record how many pages are affected',
        'Test your site on a real mobile device and attempt to complete your primary user journey — document any friction you encounter',
        'Check that all buttons and links on your key pages are at least 48x48 pixels on mobile screens',
        'Run PageSpeed Insights on mobile for your homepage and compare the mobile score to your desktop score',
    ],
    reflection: 'When you tested your site on a real mobile device and tried to complete your main user journey, what usability issues did you find that you had not noticed before?',
});

Object.assign(lessonContent['seo-4-3'], {
    setupGuide: [
        { step: 1, title: 'Test your current schema with the Rich Results Test', description: 'Go to search.google.com/test/rich-results and enter the URL of your homepage, a product page, and a blog post. The tool shows any existing schema markup and whether it is valid. Note which pages already have schema and which schema types are detected.' },
        { step: 2, title: 'Choose the right schema type for your content', description: 'Go to schema.org and browse the type hierarchy. The most commonly implemented types are Article, Product, FAQPage, LocalBusiness, BreadcrumbList, Event, and Review. For each key page type on your site, identify which schema type is most appropriate and note the required and recommended properties.' },
        { step: 3, title: 'Use the Structured Data Markup Helper', description: 'Go to search.google.com/structured-data/helper and select your schema type. Paste in or enter the URL of your page. Use the highlighting tool to tag elements on the page to the correct schema properties. When done, click Create HTML to generate the JSON-LD snippet you can add to your page.' },
        { step: 4, title: 'Generate FAQ schema for a page with questions', description: 'Find a page on your site that includes at least 3 questions and answers (a FAQ section or blog post with a Q&A format). Use the Structured Data Markup Helper or write JSON-LD manually. FAQPage schema is one of the easiest types to add and can generate additional SERP real estate immediately.' },
        { step: 5, title: 'Validate your schema and check Search Console Enhancements', description: 'After adding schema, paste the updated HTML into the Rich Results Test and confirm there are no errors. Then check Google Search Console > Enhancements — Google will populate this section once it has crawled and detected your schema markup, typically within a few days.' },
    ],
    tasks: [
        'Run the Rich Results Test on your homepage, a product or service page, and a blog post — note what schema currently exists on each',
        'Choose one schema type most relevant to your site and look up the required properties on Schema.org',
        'Generate a valid FAQPage schema block for one page that already has at least 3 questions and answers',
        'Add BreadcrumbList schema to one key page and validate it passes the Rich Results Test with no errors',
        'Check Search Console > Enhancements after implementation to confirm Google has detected your new structured data',
    ],
    reflection: 'After testing your pages with the Rich Results Test, which schema type would have the biggest impact on your search appearance — and which page is the easiest place to start?',
});

Object.assign(lessonContent['seo-4-4'], {
    setupGuide: [
        { step: 1, title: 'Open and review your sitemap.xml', description: 'Go to yourdomain.com/sitemap.xml in your browser. You should see a list of URLs. Check that your most important pages are included. Look for any pages that should not be there — admin pages, login pages, filtered URLs with query parameters, or paginated archive pages with thin content.' },
        { step: 2, title: 'Check your sitemap status in Search Console', description: 'Open Google Search Console > Indexing > Sitemaps. Confirm your sitemap is listed with a "Success" status. Compare "Submitted URLs" to "Indexed URLs" — a significant gap means Google is not indexing pages from your sitemap, which warrants further investigation via the Coverage report.' },
        { step: 3, title: 'Review your robots.txt for unintended blocks', description: 'Go to yourdomain.com/robots.txt. Review every Disallow directive. Common mistakes include accidentally blocking the whole site (Disallow: /), blocking CSS and JavaScript files that Google needs to render pages, or blocking a section that was meant to be private but should now be indexed.' },
        { step: 4, title: 'Check the Coverage report for excluded pages', description: 'Open Search Console > Indexing > Pages. Click on "Not indexed" to see the breakdown. Focus on "Crawled — currently not indexed" (pages Google visited but chose not to index — usually thin content) and "Discovered — currently not indexed" (pages Google knows about but has not yet crawled, suggesting a crawl budget issue).' },
        { step: 5, title: 'Check for duplicate URL issues', description: 'Use Screaming Frog to crawl your site and look at the URL list. Check whether your CMS generates multiple versions of the same page — for example, pages with and without trailing slashes, pages with UTM parameters, or pagination variants. These duplicate URLs waste crawl budget and dilute link equity.' },
    ],
    tasks: [
        'Open your sitemap.xml and verify that all important pages are included and no admin, login, or thin-content pages are listed',
        'Check robots.txt and confirm no important directories or pages are accidentally blocked from crawling',
        'Identify at least 5 pages that should not be in your sitemap and note how you would remove them',
        'Open Search Console Coverage report and list the top 3 reasons pages are being excluded from the index',
        'Check for duplicate URLs on your site caused by URL parameters or trailing slash inconsistencies and note how you would canonicalise them',
    ],
    reflection: 'After reviewing your sitemap and Coverage report, what changes would you make to ensure Google focuses its crawl budget on your most valuable pages?',
});

Object.assign(lessonContent['seo-5-1'], {
    setupGuide: [
        { step: 1, title: 'Check your backlink profile in Ahrefs free tools', description: 'Go to ahrefs.com/backlink-checker and enter your domain. The free version shows your top 100 backlinks, Domain Rating, and referring domains count. Note your DR score — this is your baseline authority metric. Check whether your best links come from relevant, quality sites.' },
        { step: 2, title: 'Check your domain authority in Moz Link Explorer', description: 'Go to moz.com/link-explorer and enter your domain. The free version shows your Domain Authority, Page Authority for your homepage, and a sample of linking domains. Note whether your DA has changed over the past few months — a rising DA reflects successful link building.' },
        { step: 3, title: 'Check your most-linked pages in Search Console', description: 'Open Google Search Console > Links > Top linked pages. This shows which pages on your site have the most external links pointing to them. Compare this list to your most important pages — ideally, your link profile should match your content priorities.' },
        { step: 4, title: 'Analyse a top competitor backlink profile', description: 'Enter a direct competitor domain into Ahrefs Backlink Checker or Semrush free tier. Note their Domain Rating, number of referring domains, and their top linked pages. Understanding the gap between your authority and theirs tells you how much link building you need to compete for the same keywords.' },
        { step: 5, title: 'Identify any low-quality backlinks', description: 'In Ahrefs Backlink Checker, scroll through your top 100 backlinks and look for any that are from irrelevant, foreign-language, or obviously spammy sites. Note the domain and anchor text. While a small number of poor links rarely causes harm, a large number of spammy links can trigger a Google manual penalty.' },
    ],
    tasks: [
        'Check your Domain Rating in Ahrefs and Domain Authority in Moz — record both scores as your baseline',
        'Identify your top 5 competitor domains and compare their domain authority scores to yours',
        'Find the three most-linked-to pages on a top competitor using any backlink tool — note why you think those pages earn links',
        'Check which pages on your own site have the most backlinks — do they align with your most strategically important pages?',
        'Identify any obviously spammy or irrelevant backlinks in your profile and note how you would disavow them if needed',
    ],
    reflection: 'Looking at your backlink profile compared to your top competitors, what is the authority gap — and what type of content on your site is currently attracting the most links?',
});

Object.assign(lessonContent['seo-5-2'], {
    setupGuide: [
        { step: 1, title: 'Find the most-linked content in your niche', description: 'Go to ahrefs.com/content-explorer (free search available) and search for your core topic. Sort by Referring Domains. The top results are the pieces of content in your niche that have attracted the most links. Study them — why do people link to them? What makes them link-worthy? This is the benchmark for your linkable asset strategy.' },
        { step: 2, title: 'Find broken link opportunities using Ahrefs', description: 'In Ahrefs Site Explorer, enter a top competitor domain and go to Best by Links > filter for 404 errors. You can see which of their pages are broken but still have backlinks pointing to them. These are outreach opportunities — contact the sites linking to the broken page and suggest your relevant content as a replacement.' },
        { step: 3, title: 'Search for resource pages to target', description: 'In Google, search for: [your topic] + intitle:resources OR [your topic] + "useful links" OR [your topic] + "recommended resources". Make a list of 10-20 resource pages that curate links to content like yours. These pages exist specifically to link out — getting listed is a realistic goal with a simple outreach email.' },
        { step: 4, title: 'Find contact emails with Hunter.io', description: 'Go to hunter.io (free for 25 searches per month) and enter the domain of a site you want to reach. Hunter.io finds email addresses associated with that domain and shows their confidence score. This is your fastest route to finding the right person to contact for a guest post or link request.' },
        { step: 5, title: 'Set up a link building tracking spreadsheet', description: 'Create a spreadsheet with columns: Target Site, Domain Rating, Contact Email, Outreach Angle, Date Contacted, Follow-up Date, and Status (Not contacted / Emailed / Replied / Link live / Declined). Tracking your outreach is essential for following up and measuring your link building ROI.' },
    ],
    tasks: [
        'Use Ahrefs Content Explorer or Semrush to find the 5 most-linked pieces of content in your niche — note why they attract links',
        'Identify at least 10 broken links on competitor or niche sites that you have relevant existing content to replace',
        'Find 5 resource pages in your niche where you could request inclusion — save the URLs and contact details',
        'Write one guest post pitch email targeting a niche site with a Domain Rating above 40',
        'Set up a link building outreach tracking spreadsheet with your first 10 prospects filled in',
    ],
    reflection: 'Which link building strategy feels most achievable for your site right now — and what is the one piece of content you already have that is most likely to earn links?',
});

Object.assign(lessonContent['seo-5-3'], {
    setupGuide: [
        { step: 1, title: 'Research data sources for an original study', description: 'Review your own business data for insights you could publish — customer survey results, aggregated usage data, trend analysis from your CRM. Also consider publicly available sources: ONS.gov.uk, statista.com, Google Trends, or gov.uk datasets. Original data that reveals something new or counterintuitive is the foundation of content that earns press coverage and links.' },
        { step: 2, title: 'Sign up for HARO (Help a Reporter Out)', description: 'Go to helpareporter.com and sign up as a source. You will receive daily email digests of journalist queries. Respond to queries in your area of expertise with a concise, quotable answer. A single HARO response that gets published in a national publication can earn a high-authority link and significant brand visibility.' },
        { step: 3, title: 'Find journalists covering your niche with BuzzSumo', description: 'Go to buzzsumo.com (free trial available) and search for your core topic. Click the Authors tab to see which journalists and bloggers have published the most-shared content on this topic. These are the people most likely to cover a story in your niche. Note their names, publications, and the topics they cover.' },
        { step: 4, title: 'Set up Google Alerts for reactive PR opportunities', description: 'Go to google.com/alerts and set up alerts for your core topics (e.g. "digital marketing trends", "SEO study", "content marketing statistics"). When a relevant story breaks, you have a window to reach out to journalists covering it with your expert perspective or data. Speed matters — reactive PR responses within 24 hours get far more coverage.' },
        { step: 5, title: 'Draft a media pitch document', description: 'Write a one-page media pitch for your link building idea. Include: the headline (what is the story?), why it is newsworthy now, the key data point or finding, three bullet points of supporting evidence, and your proposed spokesperson. This document is what you send to journalists alongside your press release.' },
    ],
    tasks: [
        'Identify one original data angle from your business that could become a linkable asset — a survey, study, trend analysis, or data visualisation',
        'Research and list 5 publications in your industry that regularly cover data-driven or original research stories',
        'Sign up to HARO and respond to at least 3 journalist queries relevant to your expertise',
        'Write a one-page media pitch document for one content-led link building idea',
        'Find one competitor piece of content that earned significant links from media coverage — analyse why it worked and what you would do differently',
    ],
    reflection: 'What original data, insights, or perspectives does your business hold that journalists in your niche would find genuinely interesting — and how could you package it as a story rather than a sales pitch?',
});

Object.assign(lessonContent['seo-5-4'], {
    setupGuide: [
        { step: 1, title: 'Set your baseline in Search Console Performance', description: 'Open Google Search Console > Performance > Search results. Set the date range to the last 90 days. Record your total clicks, total impressions, average CTR, and average position. Export this data to a spreadsheet — this is your SEO baseline that all future measurement will be compared against.' },
        { step: 2, title: 'Connect Search Console to Google Analytics 4', description: 'In Google Analytics 4, go to Admin > Property Settings > Product Links > Search Console Links. Connect your Search Console property. This allows you to see organic search data (queries, landing pages, clicks) directly inside GA4 alongside your conversion and engagement data.' },
        { step: 3, title: 'Set up rank tracking for your priority keywords', description: 'Sign up for a free trial of Semrush (Position Tracking tool) or Ahrefs (Rank Tracker). Add your top 10 priority keywords and set your target location (UK, US, etc.). The tool will track your daily rankings and show you how your position changes over time. Weekly rank tracking is sufficient for most sites.' },
        { step: 4, title: 'Identify your top organic landing pages in GA4', description: 'In Google Analytics 4, go to Reports > Acquisition > Traffic Acquisition. Add "Landing page" as a secondary dimension and filter by "Organic Search" as the session default channel group. You can now see which pages drive the most organic sessions and, critically, whether those sessions are converting.' },
        { step: 5, title: 'Build a monthly SEO report in Google Looker Studio', description: 'Go to lookerstudio.google.com and create a new report. Connect Search Console and GA4 as data sources. Add scorecards for: Total Organic Clicks (this month vs last month), Average Position, Organic Sessions, Goal Completions from Organic. Save this as a template — it takes 30 minutes to build but saves hours every month.' },
    ],
    tasks: [
        'Document your baseline SEO metrics: total organic clicks, impressions, average CTR, and average position for the last 90 days',
        'Set up rank tracking for your top 10 target keywords and record their current positions',
        'Identify your top 5 landing pages for organic traffic and check whether each one is converting at an expected rate',
        'Calculate your overall organic CTR (clicks divided by impressions) and find your 3 lowest-CTR pages with over 500 monthly impressions',
        'Create a monthly SEO report template with at least 6 key metrics you will review each month to track progress',
    ],
    reflection: 'Looking at your organic performance data, where is the gap between impressions and clicks biggest — and what does that pattern tell you about where to focus your effort next?',
});

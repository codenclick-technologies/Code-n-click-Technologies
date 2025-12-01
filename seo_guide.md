# SEO Guide for Code-n-Click Technologies

## Current Status: High SEO Readiness 🚀

Your frontend is built with **React.js (Vite)** and is now optimized for "Higher SEO" using **React Helmet Async**.

### What has been done?
1.  **Dynamic Meta Tags**: We implemented a reusable `<SEO />` component.
2.  **Social Media Ready**: Open Graph (Facebook/LinkedIn) and Twitter Card tags are automatically generated.
3.  **Structured Data**: JSON-LD schema support is enabled for rich search results (like showing "ProfessionalService" details in Google).
4.  **Performance**: The app uses code-splitting and modern build tools (Vite) for fast load times, which is a ranking factor.

---

## How to Maintain & Improve SEO

### 1. Using the SEO Component
For every new page you create, import and use the `SEO` component at the top of your JSX.

```jsx
import SEO from '../components/utils/SEO';

const MyNewPage = () => {
  return (
    <div>
      <SEO 
        title="Page Title" 
        description="A compelling description for search engines (150-160 chars)."
        keywords="keyword1, keyword2, keyword3"
      />
      {/* Page Content */}
    </div>
  );
};
```

### 2. Advanced: Adding Structured Data (JSON-LD)
For special pages like Services, Articles, or Job Postings, you can pass JSON-LD data as a child to the SEO component:

```jsx
<SEO title="Our Services" description="...">
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development",
        "provider": {
          "@type": "Organization",
          "name": "Code-n-Click"
        }
      }
    `}
  </script>
</SEO>
```

### 3. Checklist for "Higher SEO"
*   [ ] **Sitemap**: Generate a `sitemap.xml` listing all your public routes and submit it to Google Search Console.
*   [ ] **Robots.txt**: Ensure you have a `public/robots.txt` file allowing bots to crawl your site.
*   [ ] **Alt Text**: Always add `alt="description"` to every `<img>` tag.
*   [ ] **Performance**: Run Google Lighthouse audits regularly and aim for a score of 90+.
*   [ ] **Content**: SEO is mostly about content. Write high-quality, relevant text on your pages.

### 4. Server-Side Rendering (SSR) Note
Currently, this is a **Single Page Application (SPA)**. Google can crawl SPAs fine, but for the absolute *highest* SEO (like news sites), frameworks like **Next.js** are used. However, for a corporate site like this, your current setup with React Helmet is excellent and sufficient.

# Eric Gao - Personal Website

A clean, modern personal website with blog functionality for GitHub Pages.

## Files Included

- `index.html` - Home page with blog post list
- `blog.html` - Template for individual blog posts
- `about.html` - About page
- `clothes.html` - Clothes page
- `styles.css` - All styling
- `script.js` - Blog functionality

## Setup for GitHub Pages

1. Create a new repository named `yourusername.github.io` (replace `yourusername` with your GitHub username)
2. Upload all these files to the repository
3. Go to Settings → Pages
4. Your site will be live at `https://yourusername.github.io`

## Adding New Blog Posts

Edit the `script.js` file and add new posts to the `blogPosts` array:

```javascript
{
    id: 3,
    title: "Your New Post Title",
    date: "February 7, 2026",
    excerpt: "A brief description...",
    content: `
        <p>Your full blog content here with HTML.</p>
        <img src="your-image-url.jpg" alt="Description">
        <a href="https://example.com">Link text</a>
    `
}
```

## Adding Media

### Images
```html
<img src="image-url.jpg" alt="Description">
```

### GIFs
```html
<img src="gif-url.gif" alt="Description">
```

### Videos (HTML5)
```html
<video controls>
    <source src="video.mp4" type="video/mp4">
</video>
```

### YouTube Videos
```html
<iframe width="100%" height="400" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### Links
```html
<a href="https://example.com" target="_blank">Link text</a>
```

## Customization

- Edit content in each HTML file
- Modify colors in `styles.css`
- Add/remove navigation items in each HTML file's navbar
- Change fonts by updating the `font-family` in `styles.css`

Enjoy your new website!

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "My First Blog Post",
        date: "February 7, 2026",
        excerpt: "This is a sample excerpt for my first blog post...",
        content: `
            <p>Welcome to my first blog post! This is where you can write about anything you'd like.</p>
            
            <h2>Adding Images</h2>
            <p>You can easily add images to your posts:</p>
            <img src="https://via.placeholder.com/800x400" alt="Sample image">
            
            <h2>Embedding Videos</h2>
            <p>You can also embed videos. Here's an example of an HTML5 video:</p>
            <video controls>
                <source src="your-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            
            <p>Or embed YouTube videos:</p>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
            
            <h2>Adding Links</h2>
            <p>You can add links to other sites like <a href="https://github.com" target="_blank">GitHub</a>.</p>
            
            <h2>Using GIFs</h2>
            <p>GIFs work just like images:</p>
            <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="Sample GIF">
        `
    },
    {
        id: 2,
        title: "Another Interesting Post",
        date: "February 6, 2026",
        excerpt: "A second example post to show the blog list...",
        content: `
            <p>This is another blog post example. You can write as much as you want here.</p>
            
            <img src="https://via.placeholder.com/800x400/0066cc/ffffff" alt="Another image">
            
            <p>Feel free to add more content, images, videos, and links as needed!</p>
        `
    }
];

// Load blog list on home page
if (document.getElementById('blogList')) {
    const blogList = document.getElementById('blogList');
    
    blogPosts.forEach(post => {
        const blogItem = document.createElement('a');
        blogItem.className = 'blog-item';
        blogItem.href = `blog.html?id=${post.id}`;
        
        blogItem.innerHTML = `
            <h3>${post.title}</h3>
            <div class="date">${post.date}</div>
            <div class="excerpt">${post.excerpt}</div>
        `;
        
        blogList.appendChild(blogItem);
    });
}

// Load individual blog post
if (document.getElementById('blogPost')) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);
    
    const blogPost = document.getElementById('blogPost');
    
    if (post) {
        blogPost.innerHTML = `
            <h1>${post.title}</h1>
            <div class="meta">${post.date}</div>
            ${post.content}
        `;
    } else {
        blogPost.innerHTML = '<p>Blog post not found.</p>';
    }
}

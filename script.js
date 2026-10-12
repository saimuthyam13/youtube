const videoData = [
    {
        id: 1,
        title: "Introduction to HTML, CSS & JavaScript",
        channel: "Web Dev Simplified",
        views: "1.2M views",
        timestamp: "2 weeks ago",
        thumbnail: "https://i.ytimg.com/vi/mU6anWqZJcc/maxresdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s68-c-k-c0x00ffffff-no-rj",
        videoUrl: "https://www.youtube.com/embed/mU6anWqZJcc"
    },
    {
        id: 2,
        title: "JavaScript Full Course for Beginners",
        channel: "freeCodeCamp.org",
        views: "8.5M views",
        timestamp: "1 year ago",
        thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj",
        videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg"
    },
    {
        id: 3,
        title: "CSS Flexbox Crash Course",
        channel: "Traversy Media",
        views: "2.3M views",
        timestamp: "6 months ago",
        thumbnail: "https://i.ytimg.com/vi/3YW65K6LcIA/maxresdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj",
        videoUrl: "https://www.youtube.com/embed/3YW65K6LcIA"
    },
    {
        id: 4,
        title: "Learn React JS - Full Course for Beginners",
        channel: "freeCodeCamp.org",
        views: "6.7M views",
        timestamp: "10 months ago",
        thumbnail: "https://i.ytimg.com/vi/Qr4QMBUPxWo/maxresdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s68-c-k-c0x00ffffff-no-rj",
        videoUrl: "https://www.youtube.com/embed/Qr4QMBUPxWo"
    },
    {
        id: 5,
        title: "Building a YouTube Clone with HTML/CSS/JS",
        channel: "ASMR Prog",
        views: "450K views",
        timestamp: "3 months ago",
        thumbnail: "https://i.ytimg.com/vi/xJ4CkEiBwgg/maxresdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AL5GRJU37LrgzQuZu8de78rpo-WFysye1O8lneZym9_H_g=s68-c-k-c0x00ffffff-no-rj",
        videoUrl: "https://www.youtube.com/embed/xJ4CkEiBwgg"
    },
    {
        id: 6,
        title: "How to Make a Website in 2024",
        channel: "Web Dev Simplified",
        views: "850K views",
        timestamp: "8 months ago",
        thumbnail: "https://i.ytimg.com/vi/G3e-cpL7ofc/maxresdefault.jpg",
        avatar: "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s68-c-k-c0x00ffffff-no-rj",
        videoUrl: "https://www.youtube.com/embed/G3e-cpL7ofc"
    }
];

function renderVideos(videos = videoData) {
    const videoGrid = document.getElementById('videoGrid');
    videoGrid.innerHTML = '';
    
    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail" />
            <div class="video-info">
                <img src="${video.avatar}" alt="${video.channel}" class="channel-avatar" />
                <div class="video-details">
                    <h3>${video.title}</h3>
                    <p>${video.channel}</p>
                    <p>${video.views} • ${video.timestamp}</p>
                </div>
            </div>
        `;
        videoCard.addEventListener('click', () => openVideo(video));
        videoGrid.appendChild(videoCard);
    });
}

function openVideo(video) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoPlayer');
    iframe.src = video.videoUrl + '?autoplay=1';
    modal.classList.add('active');
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoPlayer');
    iframe.src = '';
    modal.classList.remove('active');
}

document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredVideos = videoData.filter(video => 
        video.title.toLowerCase().includes(searchTerm) || 
        video.channel.toLowerCase().includes(searchTerm)
    );
    renderVideos(filteredVideos);
});

document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});

document.getElementById('closeModal').addEventListener('click', closeVideo);
document.getElementById('videoModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('videoModal')) {
        closeVideo();
    }
});

renderVideos();
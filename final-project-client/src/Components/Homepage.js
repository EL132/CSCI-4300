import AdBar from './ui-components/AdBar';

import './Homepage.css'

function Homepage() {
    return (
        <div>
            <AdBar />
            <div class="body">
                <div class="main-image">
                    <div class="title">
                        <div class="number">
                            <h1>1</h1>
                        </div>
                        <div class="text">
                            Most Popular: Where did jaguars come from?
                        </div>
                    </div>
                </div>
                <div class="popular-posts">
                    <h1 class="popular-post-title">Popular Posts</h1>
                    <hr></hr>
                    <div class="post">
                        <h2 class="post-category">Sports</h2>
                        <h2 class="post-title">Our Top Premier League Picks</h2>
                    </div>
                    <hr></hr>
                    <div class="post">
                        <h2 class="post-category">Food</h2>
                        <h2 class="post-title">Three Ways to Use Carrots</h2>
                    </div>
                    <hr></hr>
                    <div class="post">
                        <h2 class="post-category">Music</h2>
                        <h2 class="post-title">Best Upcoming Pop Stars</h2>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="left-arrow">
                    <h1>&lt;</h1>
                </div>
                <div class="center-section">
                    <div class="footer-title">
                        New LASIK Eye Surgery: Is it worth it?
                    </div>
                    <div class="author">
                        By: Elon Musk
                    </div>
                </div>
                <div class="right-arrow">
                    <h1>&gt;</h1>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
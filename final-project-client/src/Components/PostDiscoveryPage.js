import './PostDiscoveryPage.css'
import AdBar from './ui-components/AdBar';
import PostCard from './ui-components/PostCard'

function PostDiscoveryPage () {
    return (
        <div class="dsicovery-page-body">
            <div class="filter">
                <div class="filter-box">
                    <div class="filter-title">
                        Search:
                    </div>
                    <div class="filter-input">
                        <input type="text" placeholder="Search for a post"></input>
                    </div>
                </div>
                <div class="filter-box">
                    <div class="filter-title">
                        Genre:
                    </div>
                    <div class="filter-input">
                        <select>
                            <option value="all">All</option>
                            <option value="sports">Sports</option>
                            <option value="food">Food</option>
                            <option value="music">Music</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="posts">
                {/* 
                    we will essentially loop through a list of posts that we have gotten from querying the backend
                    and then for each post we will create a PostCard component and pass in the title and author
                    as props; we will also have to pass in the text content as a prop and keep passing it down
                */}
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
                <PostCard title="Berries and Diabetes: The Untold Story" author="Edna Pontellier"/>
            </div>
            <AdBar/>
        </div>
    );
}

export default PostDiscoveryPage;
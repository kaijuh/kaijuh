import { getSortedPostsData } from "@/lib/posts"
import ListItem from "../listitem/ListItem"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className="">
            <h2 className="">Blog</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}

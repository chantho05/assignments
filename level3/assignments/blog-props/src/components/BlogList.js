import React from "react"

export default function BlogList (props){
    return (
        <main className="blogs">
            <div className="bloglist">
                <h1 className="blogslist--title">{props.blogs.title}</h1>
                <h2 className="blogslist--article">{props.blogs.subTitle}</h2>
                <h4 className="blogslist--publicated">Posted by {props.blogs.author} on {props.blogs.date}</h4>
                <div className="blogslist--hr"></div>
            </div>
        </main>

    )
}


// date: "September 24, 2019"
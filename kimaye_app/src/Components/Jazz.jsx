import React from 'react';
import { Slide } from 'react-slideshow-image';
import "../Styles/Blog.css"

const blogs=[
   {
     id:1,
     img1:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_334275008-2-opt2-1900px_720x.jpg?v=1627119119",
     img2:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_201343750_copy__66kb-1000px_720x.jpg?v=1626676701",
   },
   {
     id:2,
     img1:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_77286816-min__1625567830_114.143.85.97_720x.jpg?v=1625638895",
     img2:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Blog_-_Benefits_of_fruits_720x.jpg?v=1625147388",
   },
   {
      id:3,
      img1:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Untitled_design_51-min_720x.png?v=1614341965",
      img2:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/immune_system_1728x-min_720x.jpg?v=1614342193",
   }
]

const Jazz = () => {

    const properties={ indicators: true };
  return (
   <>
<img alt="top" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/blog-top-cut.png?v=1599102918" />
<div className="blog" >
        <h1 style={{fontSize:"35px", color:"white", fontFamily:"bitterbrush"}} > JAZZ IT UP WITH <span style={{color:"red"}} >FRUITS</span></h1>

        <Slide easing="ease"  {...properties} >
            {
                blogs.map((item)=>(
                    <div key={item.id} className="blogDisplay" >
                         <div>
                            <img style={{height:"320px", width:"510px", borderRadius:"15px", boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}} src={item.img1} alt="blogpic" />
                         </div>
                         <div>
                            <img style={{height:"320px", width:"510px", borderRadius:"15px", boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}  src={item.img2} alt="blogpic" />
                         </div>
                    </div>
                ))
            }
        </Slide>
    </div>
<img alt="bottom" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/blog-bottom-cut.png?v=1599102919" />
   </>
  )
}

export default Jazz


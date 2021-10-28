import React, { Component } from "react";
export class News extends Component {
  render() {
    const { urlToImage, url, author, publishedAt, title, description } =
      this.props.article;
    console.log("Rendering News " + title);
    return (
      <div class="wrapper">
        <div class="cards_wrap">
          <div class="cards_item">
            <div class="card_inner">
              <div class="card_top">
                <img
                  src={urlToImage}
                  alt="SORRY! image not available"
                  style={{
                    height: "200px",
                    borderRadius: "10px",
                    border: "4px solid #0071bc",
                  }}
                ></img>
              </div>
              <div class="card_bottom">
                <div class="card_category">
                  <strong>
                    <mark>PUBLISHED AT:</mark>
                    {publishedAt}
                  </strong>
                </div>
                <div class="card_info">
                  <p class="title" style={{ fontWeight: "bold" }}>
                    {title}
                  </p>
                  <p>
                    <strong style={{ fontSize: "19px" }}>{description}</strong>
                  </p>
                  <p>
                    <strong style={{ color: "red", textAlign: "right" }}>
                      AUTHOR: {author}
                    </strong>
                  </p>
                </div>
                <div class="card_creator">
                  <a className="btn btn-dark" href={url} target="_blank">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
/*<!--<div className="card all-center">
        <img
          src={urlToImage}
          alt="IMAGE UNAVAILABLE"
          style={{
            width: "100%",
            position: "top",
            border: "2px solid-black",
            marginTop: "0",
          }}
        ></img>
        <h4 style={{ color: "blue" }}>{title}</h4>
        <h5> Author: {author}</h5>

        <h5>Published at: {publishedAt}</h5>
        <a href={url} target="_blank" className="btn btn-dark btn-sm">
          READ MORE
        </a>
      </div>-->*/

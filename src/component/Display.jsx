import React, { useState } from "react";

function Display({ data, repositories }) {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className=" display-profile">
        <div className="git-image col-4">
          {!data.avatar_url ? (
            " "
          ) : (
            <img
              style={{ height: "91%", width: "100%" }}
              src={data.avatar_url}
              alt={data.avatar_url}
            />
          )}
          <button className="btn btn-success" style={{ width: "100%" }}>
            <a href={data.html_url} style={{ color: "white" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="25"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
                style={{ color: "white" }}
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              See in Github
            </a>
          </button>
        </div>
        <div className="git-info col-8">
          <h4 className="name"> {data.name} </h4>
          <div className="bio">
            <h4>Type: </h4>
            {!data.type ? <h4>Null</h4> : <h4> {data.type} </h4>}
          </div>
          <div className="bio">
            <h4>Company: </h4>
            {!data.company ? <h4>Null</h4> : <h4> {data.company} </h4>}
          </div>
          <div className="bio">
            <h4>Location: </h4>
            {!data.location ? <h4>Null</h4> : <h4> {data.location} </h4>}
          </div>
          <div className="bio">
            <h4>Blog: </h4>
            {!data.blog ? (
              <h4>Null</h4>
            ) : (
              <h4>
                <a href={data.blog}> {data.blog} </a>
              </h4>
            )}
          </div>
          <div className="bio">
            <h4>Email: </h4>
            {!data.email ? <h4>Null</h4> : <h4> {data.email} </h4>}
          </div>
          <div className="bio">
            <h4>BIO: </h4>
            {!data.bio ? <h4>Null</h4> : <h4> {data.bio} </h4>}
          </div>
          <div className="follower">
            <div className="bio follow1">
              <h4>Followers: </h4>
              {!data.followers ? <h4>0</h4> : <h4> {data.followers} </h4>}
            </div>
            <div className="bio follow2">
              <h4>Following: </h4>
              {!data.following ? <h4>0</h4> : <h4> {data.following} </h4>}
            </div>
          </div>
          <div>
            <button
              className="btn btn-danger"
              style={{ width: "100%" }}
              onClick={() => setShow(!show)}
            >
              {show ? "Close" : "Show"} Repositories
            </button>
          </div>
        </div>
      </div>
      {show ? (
        <div className="repo-table">
          <div className="repo-head">
            <h3>Repositories</h3>
          </div>
          <div className="repo-info">
            {repositories.length !== 0
              ? repositories.map((repo) => (
                  <div key={repo.name}>
                    <div className="item d-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="30"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <div className="content">
                        <a href={repo.html_url} className="header">
                          {repo.name}
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Display;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <Container id="projects">
      <p>My Projects</p>
      <Row>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
            <div id="details">
              <p>Twitter Clone</p>
              <p>
                You can create a new tweet or read tweets just like twitter.
                Integrated with basic voice command functionality.
              </p>
              <div>
              <a href="https://twitterfe.herokuapp.com/" target="_blank"> <p>Live Demo</p></a>
              <a href="https://github.com/Mandeep-Sai/Twitter_FE" target="_blank"> <p>Frontend Code</p></a>
              <a href="https://github.com/Mandeep-Sai/twitter_be" target="_blank"> <p>Backend Code</p></a>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
            <div id="details">
              <p>Spotify Clone</p>
              <p>
                You can play songs and create your own playlists. Lyrics feature
                added from Musixmatch API.
              </p>
              <div>
             {/* <a> <p>Live Demo</p></a> */}
              <a href="https://github.com/Mandeep-Sai/Spotify_Redux" target="_blank"> <p>Frontend Code</p></a>
              <a href="https://github.com/Mandeep-Sai/spotify_redux_be" target="_blank"> <p>Backend Code</p></a>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
            <div id="details">
              <p>Chat App</p>
              <p>
                You can chat with your friends and family members.Messages are
                saved to database securely.
              </p>
              <div>
             {/* <a><p>Live Demo</p></a> */}
              <a href="https://github.com/nathaliemekahal/chatapp-fe"><p>Frontend Code</p></a>
              <a href="https://github.com/nathaliemekahal/chatApp"><p>Backend Code</p></a>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
            <div id="details">
              <p>News App</p>
              <p>
                Want to know what's happening around the world?Visit the website and listen to the news around the world without moving your hand with new VOICE INSTRUCTIONS.
              </p>
              <div>
                <a href="https://fervent-ritchie-a3da89.netlify.app/" target="_blank"><p>Live Demo</p></a>
                <a href="https://github.com/Mandeep-Sai/news_ai" target="_blank"><p> Code</p></a>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
            <div id="details">
              <p>Classic Snake Game</p>
              <p>
               Wanna relax your mind for a little bit? Play the Classic Snake Game here and beat the highscores!
              </p>
              <div>
                <a href="/"><p>Live Demo</p></a>
                <a href="https://github.com/Mandeep-Sai/Classic_Snake_Game" target="_blank"><p>Frontend Code</p></a>
                <a href="https://github.com/Mandeep-Sai/classic_snake_game_be" target="_blank"> <p>Backend Code</p></a>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <img
              src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
              alt=""
            />
            <div id="details">
              <p>Online Code Editor</p>
              <p>
                Avoid the hassle of downloading code editor and settings for a small task or tests. You can compile your HTML,CSS and JS all in single page and see the result.
              </p>
              <div>
                <a href="https://unruffled-liskov-e0d57c.netlify.app/" target="_blank"><p>Live Demo</p></a>
                <a href="https://github.com/Mandeep-Sai/code-editor" target="_blank"><p>Code</p></a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
